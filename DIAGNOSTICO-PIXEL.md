# Diagnóstico: Meta Pixel en 978agencia

> Alcance: solo este repositorio (978-agencia). No incluye PassTix ni Conversions API/backend — se mencionan únicamente para señalar el límite de lo que este repo puede resolver por sí solo. Este documento es un diagnóstico, no una implementación.

## 1. Estado actual

**Tracking existente: ninguno.** Se buscó en todo el repo (`gtag`, `fbq`, `dataLayer`, `pixel`, `analytics`, `GTM`, `PUBLIC_`) y no hay ningún script de analítica ni de terceros instalado. Los únicos matches de esas palabras clave son falsos positivos sin relación con tracking:
- `src/components/primitives/Icon.tsx:5` — comentario `/** Pixel size (width = height). */` (tamaño en px de un ícono).
- `src/lib/useThreeCapability.ts:11` — comentario sobre `devicePixelRatio` para el canvas de Three.js.
- `src/components/bootcamp/VenueMap.tsx:8` — comentario que dice explícitamente *"API key or tracking script is needed (SEO/analytics are out of scope here)"*, es decir, deja constancia de que a esa fecha no se instaló nada.

`package.json` tampoco tiene ninguna dependencia de analítica (`react-ga`, `@vercel/analytics`, etc.) — el stack son solo Astro, React (islas), Framer Motion, React Three Fiber y Tailwind v4.

**Variables de entorno: no hay ningún mecanismo montado.**
- No existe `.env` ni `.env.example` en la raíz.
- No existe `src/env.d.ts` (Astro no tiene tipado de `import.meta.env` configurado).
- No hay ninguna referencia a `import.meta.env` ni a `PUBLIC_` en el código. Todo lo configurable hoy vive hardcodeado y tipado en `src/config/site.ts` (copy, precios, links).
- Astro usa el prefijo `PUBLIC_` (no `NEXT_PUBLIC_`, eso es de Next.js) para exponer env vars al cliente.

**Estructura del `<head>`: centralizada y limpia.** `src/layouts/BaseLayout.astro` (líneas 24–90) es el único shell de documento del sitio. Contiene meta tags, Open Graph, Twitter cards, preloads de fuentes, JSON-LD de negocio (`MarketingAgency`), y termina con:
```astro
<slot name="head" />
```
(`BaseLayout.astro:85`), un punto de extensión por página ya usado hoy por `src/pages/bootcamp.astro:81` para inyectar su propio JSON-LD de evento (`<script slot="head" ... />`). Tanto `/` (`src/pages/index.astro`) como `/bootcamp` (`src/pages/bootcamp.astro`) envuelven todo su contenido en `<BaseLayout>`, así que **cualquier script agregado directamente en `BaseLayout.astro` se carga en ambas páginas sin duplicar código.**

**Arquitectura relevante:** `astro.config.mjs` confirma `output` estático por defecto (sin SSR/servidor) — es "a high-fidelity marketing demo" según el comentario del propio archivo (línea 10). Todo el HTML se pre-renderiza en build; las partes interactivas (Framer Motion, formularios de countdown, R3F) son islas React (`client:load` / `client:visible`). Esto es relevante para la sección 4.

## 2. Lo que falta para el píxel base

Checklist concreto:

- [ ] **Variable de entorno**: crear `.env.example` con `PUBLIC_META_PIXEL_ID=` (prefijo `PUBLIC_`, obligatorio en Astro para que la variable llegue al bundle de cliente) y el `.env` real (gitignorado) con el valor que dé Guillermo. Nunca hardcodear el ID en el snippet.
- [ ] **Tipado de env**: crear `src/env.d.ts` con la interfaz `ImportMetaEnv` (no existe hoy — es opcional en Astro pero da autocompletado/type-safety y es la convención documentada).
- [ ] **Snippet base**: agregar el script de Meta Pixel (`fbq('init', ...)` + `fbq('track', 'PageView')`) y su `<noscript>` en `src/layouts/BaseLayout.astro`, dentro del `<head>`, como script `is:inline` (igual patrón que el JSON-LD existente en la línea 70). Debe leer el ID desde `import.meta.env.PUBLIC_META_PIXEL_ID`, no un literal.
- [ ] **Meta-etiqueta de verificación de dominio**: agregar junto al snippet (ver sección 5).

**Nada en la arquitectura actual complica la carga del script.** Al contrario, la simplifica: al ser output estático (sin SSR), el snippet del píxel se comporta exactamente igual que en un sitio HTML plano — no hay hidratación de servidor, streaming, ni Suspense de por medio que obligue a pensar en "cuándo" cargar el script base. El único punto que sí requiere trabajo adicional es el paso de parámetros dinámicos hacia PassTix (sección 4), porque ahí sí se necesita lógica de cliente (no hay backend/SSR que intercepte la request).

## 3. Eventos trackeables desde este repo

| Evento Meta | Dónde ocurre | Archivo / componente | Complejidad |
|---|---|---|---|
| PageView | Automático al cargar cualquier página | `src/layouts/BaseLayout.astro` (head) | Baja — una sola inserción, cubre `/` y `/bootcamp` |
| ViewContent | Scroll hasta la sección de precios | `src/components/bootcamp/PricingBlock.tsx` — se renderiza **dos veces** en `bootcamp.astro` con `id="precios"` (línea 92) e `id="precios-final"` (línea 98) | Media — hay que instrumentar ambas instancias; el repo ya tiene el patrón de `IntersectionObserver` listo para reutilizar en `src/lib/useAtFooter.ts` |
| InitiateCheckout | Clic en "Comprar entrada" (va a PassTix) | Dos `<a>` sueltos (no usan el primitive `Button`): `src/components/bootcamp/PricingBlock.tsx:80-92` (dentro de `PlanCard`, uno por plan) y `src/components/sections/bootcamp/BootcampClose.tsx:41-49` | Media — solo 2 archivos, pero son `<a>` crudos con `onClick` a agregar en cada uno, no un componente centralizado |
| Contact | Clic en un enlace de WhatsApp | Dispersos en 4 sitios: `src/components/layout/Navbar.tsx:100` (botón desktop) y `:167` (botón menú mobile, mismo archivo); `src/components/sections/bootcamp/BootcampWhatsappFloat.tsx:23` (botón flotante, reusado en `/` y `/bootcamp`); `src/components/sections/bootcamp/BootcampClose.tsx:50-58` (CTA secundaria "Tengo una pregunta"); `src/components/layout/Footer.astro:61-69` (ícono de WhatsApp dentro del loop de redes sociales) | Media-alta — es el evento más disperso; no hay un único componente WhatsApp reutilizado en todos lados (aunque la URL sí se construye con el helper centralizado `whatsappQuestionUrl()` en `src/lib/bootcamp.ts:84-88`, lo cual ayuda) |
| (interés, sin evento estándar 1:1) Clic en "Ver temario" | Botón secundario del hero que hace scroll a `#temario` | `src/components/sections/bootcamp/BootcampHero.astro:90-97` (usa el primitive `Button`) | Baja — un solo lugar; se podría mapear a un evento custom o a `ViewContent` con parámetro |
| Lead (formulario) | No aplica | — no existe ningún `<form>` en el repo (`grep` de `<form`, `useForm`, `<input` no arrojó resultados); el brief de `bootcamp.astro:8-9` confirma que el cierre reemplazó el formulario por dos CTAs (comprar / pregunta) | N/A |

Nota sobre reutilización: `Button.tsx` (`src/components/primitives/Button.tsx`) es el primitive centralizado de botones del sitio y sí soporta `onClick` (es un `<a>`/`<button>` con spread de props), pero **los CTAs de checkout de PassTix no lo usan** — son `<a>` escritos a mano en `PricingBlock.tsx` y `BootcampClose.tsx`. Esto no bloquea nada (igual se les puede agregar `onClick={() => fbq('track', 'InitiateCheckout')}` directamente), pero significa que no hay un único punto de enganche para ese evento.

## 4. El puente hacia PassTix

Los links de checkout **no son un string plano en el JSX** — pasan por una función centralizada:

```ts
// src/lib/bootcamp.ts:75-78
export function checkoutUrl(planId: string): string {
  const { checkout } = site.bootcamp;
  return planId === 'vip' ? checkout.vip : checkout.general;
}
```

Pero esa función hoy es **puramente estática**: devuelve un string fijo leído de `site.ts`, sin construir nada en runtime:

```ts
// src/config/site.ts:403-407
checkout: {
  // TODO: reemplazar con URLs reales de PassTix
  general: 'https://passtix.co/eventos/bootcamp-978',
  vip: 'https://passtix.co/eventos/bootcamp-978',
},
```

Para poder anexar `fbclid` / `_fbp` / `_fbc` en la URL de salida, `checkoutUrl()` tendría que dejar de ser una función pura de config y pasar a construir la URL en el momento del clic, leyendo `window.location.search` (para `fbclid`) y las cookies `_fbp`/`_fbc` que el propio píxel setea. Esto es viable porque los dos únicos consumidores reales de `checkoutUrl()` con intención de compra (`PricingBlock.tsx` y `BootcampClose.tsx`) ya son islas React hidratadas (`client:visible`), así que tienen acceso al DOM del navegador. El único otro consumidor de `checkoutUrl()` es el JSON-LD de `Event`/`Offer` en `bootcamp.astro:65-72`, que se genera en build time y no necesita (ni puede) llevar esos parámetros — no hay que tocarlo.

**Pregunta abierta:** `checkout.general` y `checkout.vip` apuntan hoy al mismo string, con un comentario `TODO: reemplazar con URLs reales de PassTix`. No está claro si en producción serán URLs distintas por plan o si PassTix maneja la selección de plan dentro de una sola página de evento. Esto no cambia el diagnóstico de "cómo" anexar los parámetros, pero sí conviene confirmarlo con Guillermo/PassTix antes de implementar, porque afecta si el `onClick` de InitiateCheckout necesita diferenciar por plan además de solo trackear el clic.

**Límite explícito de este repo:** una vez el usuario llega a `passtix.co`, si esa página lee o no los parámetros de la URL, si dispara su propio Pixel/evento de compra, y cualquier deduplicación server-side vía Conversions API, es responsabilidad de PassTix — fuera de este repo y fuera de este análisis.

## 5. Verificación de dominio

Sí, sin fricción. `BaseLayout.astro` es el único `<head>` del sitio (sección 1) y ya inyecta múltiples `<meta>` estáticos ahí mismo (líneas 28–49). Agregar una línea como:

```astro
<meta name="facebook-domain-verification" content="PLACEHOLDER_PIXEL_ID" />
```

directamente en ese archivo la propaga a `/` y `/bootcamp` (y a cualquier página futura) sin duplicar nada. Es la misma inserción de una sola línea que el snippet base del píxel.

## 6. División de responsabilidades

### Lo que se resuelve en este repo (código)
- [ ] Crear `.env.example` (y documentar `.env` real) con `PUBLIC_META_PIXEL_ID`.
- [ ] Crear `src/env.d.ts` con el tipado de `ImportMetaEnv`.
- [ ] Insertar snippet base del píxel (script + `noscript`) en `src/layouts/BaseLayout.astro`.
- [ ] Insertar meta-etiqueta `facebook-domain-verification` en el mismo archivo.
- [ ] Instrumentar `ViewContent` en `PricingBlock.tsx` (ambas instancias) reutilizando el patrón de `IntersectionObserver` de `src/lib/useAtFooter.ts`.
- [ ] Instrumentar `InitiateCheckout` en los 2 `<a>` de checkout (`PricingBlock.tsx`, `BootcampClose.tsx`).
- [ ] Instrumentar `Contact` en los 4 puntos de WhatsApp (`Navbar.tsx` x2, `BootcampWhatsappFloat.tsx`, `BootcampClose.tsx`, `Footer.astro`).
- [ ] Modificar `checkoutUrl()` (o los call sites) para construir la URL de salida en runtime y anexar `fbclid`/`_fbp`/`_fbc` cuando existan.
- [ ] (Opcional) crear un helper único, ej. `src/lib/pixel.ts`, para no repetir `typeof fbq !== 'undefined' && fbq('track', ...)` en cada componente.

### Lo que depende de Meta / Guillermo (configuración de campaña)
- [ ] Entregar el Pixel ID real.
- [ ] Entregar el valor de la meta-etiqueta `facebook-domain-verification` (se genera desde Meta Business Manager).
- [ ] Definir sobre qué evento optimizar cada campaña (ViewContent vs. InitiateCheckout vs. Contact).
- [ ] Configuración de públicos, presupuestos y campañas dentro de Meta Ads Manager.
- [ ] Decisión sobre Conversions API server-side (deduplicación) — explícitamente fuera del alcance de este repo.

### Lo que depende de PassTix (fuera de este repo — NO analizado aquí, solo se señala que existe)
- [ ] Si `passtix.co/eventos/bootcamp-978` lee `fbclid`/`_fbp`/`_fbc` de la URL de entrada.
- [ ] Si PassTix dispara su propio evento de compra (Purchase) o requiere que 978agencia lo infiera de otra forma.
- [ ] Si `checkout.general` y `checkout.vip` serán URLs realmente distintas (hoy son el mismo placeholder — ver pregunta abierta en sección 4).

## 7. Nivel de esfuerzo estimado

Archivos a tocar: **~9** (`BaseLayout.astro`, `.env.example` nuevo, `src/env.d.ts` nuevo, `src/lib/bootcamp.ts`, `PricingBlock.tsx`, `BootcampClose.tsx`, `Navbar.tsx`, `BootcampWhatsappFloat.tsx`, `Footer.astro`), más un helper opcional nuevo.

Es una tarea de **media jornada a una jornada completa**, no un trabajo de varios días — el sitio es pequeño, la arquitectura ya centraliza el `<head>` y ya tiene un patrón de `IntersectionObserver` reutilizable. Nada aquí requiere reescribir componentes.

**Punto de mayor riesgo/complejidad dentro de este repo:** no es la instalación del snippet (eso es trivial), sino el puente hacia PassTix (sección 4). `checkoutUrl()` pasa de ser una función de configuración estática a tener que ejecutar lógica de cliente en el momento del clic, y ese cambio de forma no tiene ningún valor si PassTix no coopera del otro lado leyendo esos parámetros — lo cual es una pregunta que este repo no puede responder por sí solo.
