/**
 * site.ts — ALL copy / content, data-driven and typed.
 * Sections consume this data; no hardcoded strings live in the markup.
 * Copy is sourced from the brand's real publications.
 */

export const site = {
  brand: {
    name: '978 Agencia',
    tagline: 'Marketing y Publicidad',
    claim: 'No manejamos redes. Construimos RESULTADOS.',
    city: 'Pasto – Nariño – Colombia',
    solution: 'Somos tu solución en Pasto.',
  },
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Metodología', href: '#metodologia' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    kicker: '2026 · EMPRENDER',
    titleTop: 'NO',
    titleHighlight: 'MANEJAMOS REDES',
    titleBottom: 'CONSTRUIMOS RESULTADOS',
    subtitle:
      'En 978 no empezamos preguntando ¿cuántos posts quieres al mes? Empezamos por: ¿qué quieres lograr con tu marca?',
    ctaPrimary: { label: 'Quiero resultados', href: '#contacto' },
    ctaSecondary: { label: 'Ver metodología', href: '#metodologia' },
  },
  manifesto: {
    line: 'Tu negocio no necesita más contenido…',
    emphasis: 'necesita estrategia.',
    keywords: ['Estrategia', 'Contenido', 'Resultados', 'Marca'],
  },
  methodology: {
    heading: 'Cómo lo hacemos',
    steps: [
      {
        n: '01',
        title: 'Estrategia real, no improvisación',
        text: 'Nada de publicar por publicar. Todo responde a un objetivo claro.',
        icon: 'puzzle',
      },
      {
        n: '02',
        title: 'Contenido que vende',
        text: 'No solo se ve bien: está pensado para atraer, conectar y convertir.',
        icon: 'tag',
      },
      {
        n: '03',
        title: 'Resultados medibles',
        text: 'Sabes qué funciona, qué no y cómo escalar sin perder dinero.',
        icon: 'chart',
      },
    ],
  },
  about: {
    heading: '¿Quiénes somos?',
    text: 'Somos un equipo apasionado por crear, contar historias y dar vida a cada idea. Nos mueve la creatividad, la autenticidad y las ganas de ayudar a cada marca a conectar de verdad con su audiencia a través de contenido que inspira, impacta y genera resultados.',
    team: [
      {
        name: 'Paola',
        role: 'Fundadora & Coordinadora',
        bio: 'Lidero cada proyecto con visión creativa y estratégica, transformando ideas en contenido que conecta, inspira y genera resultados.',
      },
      {
        name: 'Equipo Diseño',
        role: 'Dirección de Arte & Diseño',
        bio: 'Damos forma visual a cada marca: identidad, piezas y sistemas gráficos coherentes que se reconocen a primera vista.',
      },
      {
        name: 'Equipo Audiovisual',
        role: 'Producción & Video',
        bio: 'Grabamos, editamos y contamos historias en movimiento pensadas para detener el scroll y quedarse en la memoria.',
      },
      {
        name: 'Equipo Community',
        role: 'Community & Estrategia',
        bio: 'Escuchamos a la comunidad, medimos lo que importa y convertimos conversaciones en oportunidades reales de negocio.',
      },
    ],
  },
  contact: {
    heading: '¿Listos para construir resultados?',
    whatsapp: '+57 320 3079825',
    hours: 'Lun a Sáb · 8:00 a. m. – 6:00 p. m.',
    instagram: '@978_agencia',
    location: 'Pasto – Nariño – Colombia',
  },
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/978_agencia', icon: 'instagram' },
    { label: 'TikTok', href: 'https://tiktok.com/@978_agencia', icon: 'tiktok' },
    { label: 'Facebook', href: 'https://facebook.com/978agencia', icon: 'facebook' },
    { label: 'WhatsApp', href: 'https://wa.me/573203079825', icon: 'whatsapp' },
  ],
  seo: {
    title: '978 Agencia · Marketing y Publicidad en Pasto',
    description:
      'No manejamos redes, construimos resultados. Estrategia, contenido que vende y resultados medibles para tu marca en Pasto, Nariño.',
    url: 'https://978agencia.co',
    ogImage: '/logo/og-cover.svg',
    locale: 'es_CO',
  },
} as const;

/** Canonical WhatsApp deep-link, derived once from the contact number. */
export const WHATSAPP_URL = `https://wa.me/${site.contact.whatsapp.replace(/[^\d]/g, '')}`;

export type Site = typeof site;
export type MethodologyStep = (typeof site.methodology.steps)[number];
export type TeamMember = (typeof site.about.team)[number];
export type NavItem = (typeof site.nav)[number];
export type SocialLink = (typeof site.socials)[number];
