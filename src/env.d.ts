/// <reference types="astro/client" />

/**
 * Tipado de las variables de entorno públicas. Al ser `PUBLIC_*` en un sitio
 * estático, su valor queda incrustado en el bundle durante el build (ver
 * .env.example): cambiarlo exige rebuild + redeploy.
 */
interface ImportMetaEnv {
  /** Meta Pixel ID. Vacío o ausente ⇒ no se emite el snippet. */
  readonly PUBLIC_META_PIXEL_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
