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
    { label: 'Inicio', href: '/#inicio' },
    { label: 'Metodología', href: '/#metodologia' },
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Bootcamp', href: '/bootcamp' },
    { label: 'Contacto', href: '/#contacto' },
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
  bootcamp: {
    seo: {
      title: 'Bootcamp 978 · Marketing a la Mano — 6 de septiembre en Pasto',
      description:
        'Aprende hoy, aplica mañana. Un día de inmersión práctica en marketing, contenido e IA en Pasto. Cupos limitados, preventa activa.',
    },
    event: {
      name: 'Bootcamp 978',
      tagline: 'Marketing a la Mano',
      slogan: 'Aprende hoy. Aplica mañana.',
      dateISO: '2026-09-06T08:00:00-05:00',
      dateLabel: '6 de septiembre de 2026',
      timeLabel: '8:00 a. m. – 4:00 p. m.',
      city: 'Pasto',
      venue: 'V1501',
      modality: 'Presencial',
      totalSeats: 100,
      earlyBirdSeats: 40,
      /**
       * Manually maintained by the team until the payment gateway + CRM
       * integration from the brief (§11–12) ships. Bump this as seats sell.
       */
      soldSeats: 0,
      preventaDeadlineISO: '2026-08-15T23:59:59-05:00',
      preventaDeadlineLabel: '15 de agosto de 2026',
    },
    hero: {
      kicker: 'Preventa activa',
      subtitle:
        'Una jornada de inmersión práctica en marketing y creación de contenido. Metodologías, herramientas y ejemplos reales — nada de teoría de más.',
      ctaPrimary: { label: 'Quiero mi cupo', href: '#precios' },
      ctaSecondary: { label: 'Ver temario', href: '#temario' },
    },
    promise: {
      kicker: 'La propuesta',
      heading: 'De la teoría a la aplicación inmediata',
      text: 'Bootcamp 978 no es "otro curso de marketing". Es una jornada donde aprendes metodologías que puedes aplicar desde el día siguiente en tu negocio, emprendimiento o marca personal. Lenguaje simple, herramientas actuales y ejemplos reales.',
    },
    audience: {
      heading: '¿Para quién es?',
      lead: 'Un solo día, pensado para distintos perfiles que buscan lo mismo: resultados.',
      profiles: [
        'Emprendedores',
        'Empresarios',
        'Creadores de contenido',
        'Community managers',
        'Freelancers',
        'Estudiantes',
        'Profesionales',
      ],
    },
    experience: {
      heading: 'Así se vive el día',
      items: [
        {
          title: 'Charlas prácticas',
          text: 'Metodologías aplicables, sin relleno teórico.',
          icon: 'puzzle',
        },
        {
          title: 'Casos reales',
          text: 'Ejemplos de marcas y estrategias que funcionan.',
          icon: 'tag',
        },
        {
          title: 'Espacio para preguntas',
          text: 'Resuelve tus dudas directamente con cada conferencista.',
          icon: 'chart',
        },
        {
          title: 'Networking',
          text: 'Conecta con otros emprendedores y creadores de tu ciudad.',
          icon: 'mapPin',
        },
      ],
      kitNote: 'Además, cada asistente recibe un kit de bienvenida — su contenido es sorpresa.',
    },
    curriculum: {
      heading: 'Temario · 8 módulos',
      lead: 'De la estrategia de marca a la ejecución con IA, diseño, edición y voz.',
      modules: [
        { n: '01', title: 'Marca Personal y Estrategia', speaker: 'Paola Santacruz' },
        { n: '02', title: 'Creación de Contenido para Redes Sociales', speaker: 'Paola Santacruz' },
        { n: '03', title: 'Manejo Básico de Inteligencia Artificial', speaker: 'Santiago' },
        { n: '04', title: 'Copywriting con IA', speaker: 'Santiago y Paola Santacruz' },
        { n: '05', title: 'Canva', speaker: 'Francy' },
        { n: '06', title: 'Edición Básica', speaker: 'David' },
        { n: '07', title: 'Intención al Editar y Programas de Edición', speaker: 'David' },
        { n: '08', title: 'Cómo Modular tu Voz', speaker: 'María José' },
      ],
    },
    team: {
      heading: 'Conoce a tu equipo',
      lead: 'Cinco especialistas, un mismo objetivo: que salgas del bootcamp sabiendo ejecutar.',
      members: [
        { name: 'Paola Santacruz', role: 'Dirección General · Marca Personal · Copywriting' },
        { name: 'Santiago', role: 'Inteligencia Artificial · Copywriting' },
        { name: 'María José', role: 'Modulación de voz' },
        { name: 'David', role: 'Edición' },
        { name: 'Francy', role: 'Canva' },
      ],
    },
    pricing: {
      heading: 'Elige tu entrada',
      lead: 'Precio de preventa activo mientras haya cupos early bird o hasta el 15 de agosto — lo que ocurra primero.',
      plans: [
        {
          id: 'general',
          name: 'General',
          regularPrice: 180000,
          preventaPrice: 162000,
          includes: ['Acceso completo al Bootcamp', 'Kit de bienvenida sorpresa'],
          featured: false,
        },
        {
          id: 'vip',
          name: 'VIP',
          regularPrice: 250000,
          preventaPrice: 225000,
          includes: [
            'Todo lo del plan General',
            'Asiento preferencial en primera fila',
            'Asesoría privada con Paola Santacruz al día siguiente',
          ],
          featured: true,
          badge: 'Recomendado',
        },
      ],
    },
    logistics: {
      heading: 'Detalles del evento',
      items: [
        { icon: 'clock', label: 'Fecha y horario', value: '6 de septiembre · 8:00 a. m. – 4:00 p. m.' },
        { icon: 'mapPin', label: 'Lugar', value: 'V1501, Pasto' },
        { icon: 'check', label: 'Modalidad', value: 'Presencial' },
        { icon: 'tag', label: 'Cupos', value: '100 en total' },
      ],
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Qué necesito llevar?',
          a: 'Solo tus ganas de aplicar lo que aprendas. Trae cuaderno o dispositivo para tomar notas; el resto lo ponemos nosotros.',
        },
        {
          q: '¿El bootcamp incluye certificado?',
          a: 'Sí, recibes un certificado de participación de 978 Agencia al finalizar la jornada.',
        },
        {
          q: '¿Cómo pago mi inscripción?',
          a: 'Escríbenos por WhatsApp y el equipo te confirma el método de pago disponible y tu cupo.',
        },
        {
          q: '¿Qué diferencia al plan VIP?',
          a: 'Asiento en primera fila y una asesoría privada con Paola Santacruz al día siguiente del evento, además de todo lo incluido en el plan General.',
        },
      ],
    },
    finalCta: {
      heading: '100 cupos. Un solo día. Aplica desde mañana.',
      lead: 'Asegura tu lugar en preventa antes de que se agote.',
      cta: { label: 'Quiero mi cupo', href: '#precios' },
    },
    form: {
      heading: 'Déjanos tus datos',
      lead: 'Te contactamos por WhatsApp para confirmar tu cupo y el método de pago.',
    },
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
export type BootcampEvent = typeof site.bootcamp.event;
export type BootcampModule = (typeof site.bootcamp.curriculum.modules)[number];
export type BootcampPlan = (typeof site.bootcamp.pricing.plans)[number];
export type BootcampTeamMember = (typeof site.bootcamp.team.members)[number];
export type BootcampFaqItem = (typeof site.bootcamp.faq.items)[number];
export type BootcampExperienceItem = (typeof site.bootcamp.experience.items)[number];
export type BootcampLogisticsItem = (typeof site.bootcamp.logistics.items)[number];
