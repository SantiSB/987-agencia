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
    { label: 'Bootcamp', href: '/bootcamp' },
  ],
  hero: {
    kicker: '2026 · EMPRENDER',
    titleTop: 'NO',
    titleHighlight: 'MANEJAMOS REDES',
    titleBottom: 'CONSTRUIMOS RESULTADOS',
    subtitle:
      'En 978 no empezamos preguntando ¿cuántos posts quieres al mes? Empezamos por: ¿qué quieres lograr con tu marca?',
    // ctaPrimary links straight to WhatsApp (Hero.astro), not an in-page anchor —
    // there's no contact form/section on the homepage anymore.
    ctaPrimary: { label: 'Quiero resultados' },
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
      },
      {
        n: '02',
        title: 'Contenido que vende',
        text: 'No solo se ve bien: está pensado para atraer, conectar y convertir.',
      },
      {
        n: '03',
        title: 'Resultados medibles',
        text: 'Sabes qué funciona, qué no y cómo escalar sin perder dinero.',
      },
    ],
  },
  contact: {
    whatsapp: '+57 320 3079825',
    location: 'Pasto – Nariño – Colombia',
  },
  /** Homepage promo banner (§Hero secundario) for the Bootcamp 978 event — links out to /bootcamp. */
  bootcampPromo: {
    badge: 'PREVENTA ACTIVA',
    kicker: 'EVENTO EN VIVO · PASTO',
    title: 'BOOTCAMP 978',
    accent: 'Marketing a la Mano',
    subtitle: 'Un día de inmersión práctica en marketing, contenido e IA. 6 de septiembre en Hotel V1501, Pasto.',
    cta: { label: 'Ver el Bootcamp', href: '/bootcamp' },
  },
  bootcamp: {
    seo: {
      title: 'Bootcamp 978 · Marketing a la Mano — 6 de septiembre en Pasto',
      description:
        'Aprende hoy, aplica mañana. Un día de inmersión práctica en marketing, contenido e IA en Pasto. Cupos limitados, preventa activa.',
      ogImage: '/flyer/og-bootcamp.jpg',
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
      badge: 'PREVENTA ACTIVA · CUPOS LIMITADOS',
      kicker: 'MARKETING A LA MANO',
      title: 'BOOTCAMP 978',
      accent: 'Aprende hoy. Aplica mañana.',
      hook: 'No manejamos redes. Construimos RESULTADOS.',
      subhook:
        'Un solo día para dejar de publicar por publicar y empezar a vender con estrategia. O seguir viendo cómo otros en tu ciudad se te adelantan.',
      microConfianza: 'Pago seguro · Cupos limitados · Presencial en Pasto',
      countdownLabel: 'La preventa cierra en',
      ctaPrimary: { label: 'Quiero mi cupo', href: '#precios' },
      ctaSecondary: { label: 'Ver temario', href: '#temario' },
    },
    video: {
      heading: 'Así se vive el Bootcamp 978',
      src: '/video/bootcamp-video.mp4',
      poster: '/video/poster.webp',
    },
    // Quick-facts strip below the hero. "Cupos" shows the scarcity label, never "X de X".
    quickFacts: [
      { label: 'Fecha', value: '6 de septiembre' },
      { label: 'Horario', value: '8:00 a. m. – 4:00 p. m.' },
      { label: 'Lugar', value: 'V1501, Pasto' },
      { label: 'Cupos', value: '40 cupos a precio de preventa' },
      { label: 'Modalidad', value: 'Presencial' },
    ],
    urgencia: {
      fechaCierrePreventa: '2026-08-15T23:59:59-05:00',
      cuposEarlyBird: 40, // se muestra SOLO el total, nunca "40 de 40"
      etiquetaEscasez: '40 cupos a precio de preventa',
      avisoSubidaPrecio: 'El 15 de agosto suben los precios de preventa',
    },
    autoridad: {
      stat: '73%',
      statTexto:
        'De las pymes que usan IA y contenido con estrategia reportan más ventas en menos de un año.',
      encuadre: 'Este bootcamp es para quien ya entendió que publicar por publicar no vende.',
    },
    promise: {
      kicker: 'La propuesta',
      heading: 'De improvisar a vender con estrategia',
      antesTitulo: 'Hoy',
      antes: [
        'Publicas sin rumbo y sin saber qué de verdad funciona.',
        'Pagas por contenido que se ve bien pero no convierte.',
        'Copias lo que hacen otros y esperas que resulte.',
      ],
      despuesTitulo: 'Después del bootcamp',
      despues: [
        'Sabes qué decir, a quién y por qué te compran a ti.',
        'Creas tu propio contenido con estrategia y herramientas de IA.',
        'Mides, ajustas y vendes con intención — no por suerte.',
      ],
    },
    paraQuien: {
      heading: '¿Para quién es este bootcamp?',
      lead: 'Un solo día, pensado para quien busca resultados reales — no teoría para "algún día".',
      siTitulo: 'Esto es para ti si eres…',
      si: [
        'Emprendedor',
        'Empresario',
        'Creador de contenido',
        'Community manager',
        'Freelancer',
        'Estudiante',
        'Profesional que quiere iniciar en marketing digital',
      ],
      noTitulo: 'Esto NO es para ti si…',
      no: [
        'Buscas una fórmula mágica sin trabajar',
        'Quieres teoría para "algún día" aplicarla',
        'No estás dispuesto a mostrar tu cara ni tu marca',
        'Crees que publicar más es lo mismo que vender más',
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
          text: 'Ejemplos de marcas y estrategias que ya están vendiendo.',
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
        {
          title: 'Certificado de asistencia',
          text: 'Te llevas un certificado que avala tu participación en el bootcamp.',
          icon: 'check',
        },
      ],
    },
    curriculum: {
      heading: 'Temario · 6 módulos',
      lead: 'De la estrategia de marca a la ejecución con IA, diseño, edición y voz.',
      // desc: orientadas a resultado ("saldrás sabiendo hacer X"), no a temario académico.
      // TODO: validar descripciones de módulos con cliente
      modules: [
        {
          n: '01',
          title: 'Marca Personal y Estrategia',
          speaker: 'Paola Santacruz',
          desc: 'Saldrás con una estrategia de marca clara: qué dices, a quién y por qué te elegirían a ti.',
        },
        {
          n: '02',
          title: 'Creación de Contenido para Redes Sociales',
          speaker: 'Paola Santacruz',
          desc: 'Aprenderás a crear contenido que atrae y vende, no solo que se ve bonito.',
        },
        {
          n: '03',
          title: 'Manejo Básico de Inteligencia Artificial',
          speaker: 'Santiago Rivera',
          desc: 'Usarás herramientas de IA para producir más y mejor contenido en menos tiempo.',
        },
        {
          n: '04',
          title: 'Canva',
          speaker: 'Francy Vallejo',
          desc: 'Diseñarás piezas profesionales desde cero, sin depender de un diseñador.',
        },
        {
          n: '05',
          title: 'Intención al Editar y Programas de Edición',
          speaker: 'David Ordóñez',
          desc: 'Sabrás qué software usar y cómo editar con intención narrativa, no solo cortar.',
        },
        {
          n: '06',
          title: 'Cómo Modular tu Voz',
          speaker: 'María José Martínez',
          desc: 'Hablarás frente a cámara con seguridad y una voz que retiene la atención.',
        },
      ],
    },
    valorStack: {
      titulo: 'Qué te llevas ese día',
      valorRealLabel: 'Valor real',
      inversionLabel: 'Tu inversión en preventa',
      items: [
        { item: '6 módulos con 5 especialistas', valor: 380000 },
        { item: 'Asesoría privada de seguimiento (VIP)', valor: 150000 },
        { item: 'Kit de herramientas 978', valor: 90000 },
        { item: 'Acceso a la comunidad de egresados', valor: 70000 },
      ], // TODO: confirmar valores con cliente
    },
    pricing: {
      heading1: 'Asegura tu cupo en preventa',
      heading2: 'Última llamada de preventa',
      lead: 'Precio de preventa vigente hasta el 15 de agosto. Después, sube.',
      citaPrecios:
        '"El paso más inteligente que puedes dar si sabes que este año no puedes seguir igual."',
    },
    planes: [
      {
        id: 'general',
        nombre: 'GENERAL',
        destacado: false,
        precioAncla: 285000, // precio después de preventa (≈ 43% dto. sobre el preventa)
        precioActual: 162000,
        etiqueta: 'PREVENTA',
        beneficios: [
          'Acceso completo a los 6 módulos del bootcamp',
          'Jornada de 8 horas con 5 especialistas en vivo',
          'Casos reales de marcas que ya están vendiendo',
          'Espacio de preguntas directo con cada conferencista',
          'Networking con emprendedores y creadores de Pasto',
          'Kit de Arranque 978 (físico + digital)',
          'Material de apoyo de todos los módulos',
          'Certificado de asistencia',
        ],
      },
      {
        id: 'vip',
        nombre: 'VIP',
        destacado: true,
        badge: 'RECOMENDADO',
        precioAncla: 590000, // precio después de preventa (≈ 62% dto. sobre el preventa)
        precioActual: 225000,
        etiqueta: 'PREVENTA',
        cuposLimitados: 20,
        fraseIdentidad: 'Solo 20 cupos — para quien va en serio con su marca.',
        beneficios: [
          'Todo lo del plan General',
          'Asiento preferencial en primera fila',
          'Asesoría privada 1 a 1 con Paola Santacruz (día siguiente)',
          'Acceso prioritario a los conferencistas en los breaks',
          'Grupo privado VIP post-evento',
        ],
      },
    ],
    pruebaSocial: {
      testimoniosHeading: 'Lo que dicen de nosotros',
    },
    testimonios: [
      {
        nombre: '@andresmenau',
        rol: 'Instagram',
        texto:
          'Gran evento. Gracias por estas creaciones que abren las puertas a un gran movimiento de tendencias digitales en la ciudad. 🙌🔥 Crack!!',
        foto: '/testimonios/andresmenau.webp',
      },
      {
        nombre: '@paisalejo',
        rol: 'Instagram',
        texto:
          'Pao, como te lo dije y lo repito: me quito el sombrero ante lo que hiciste. Tenés una visión tremenda de las cosas y este evento solo va a traer cosas buenas para ti y la ciudad. Felicitaciones y gracias por invitarme a hacer parte de esto tan bonito. 👏👏👏',
        foto: '/testimonios/paisalejo.webp',
      },
      {
        nombre: '@leo98.gr',
        rol: 'Instagram',
        texto:
          'Me siento orgulloso de haber asistido a uno de los primeros eventos de marketing de la ciudad. Ojalá lo sigan haciendo, en verdad todas las ponencias fueron oro puro.. 🙌👏',
        foto: '/testimonios/leo98gr.webp',
      },
    ] as { nombre: string; rol: string; texto: string; foto: string | null }[],
    team: {
      heading: 'Conoce a tu equipo',
      lead: 'Cinco especialistas, un mismo objetivo: que salgas del bootcamp sabiendo ejecutar.',
      members: [
        {
          name: 'Paola Santacruz',
          role: 'Dirección General · Marca Personal · Copywriting',
          bio: 'Lidera cada proyecto con visión creativa y estratégica.', // TODO: validar bio con cliente
          foto: '/team/paola-santacruz.webp',
        },
        {
          name: 'Santiago Rivera',
          role: 'Inteligencia Artificial · Copywriting',
          bio: 'Aplica IA para producir contenido con estrategia y velocidad.', // TODO: validar bio con cliente
          foto: '/team/santiago-rivera.webp',
        },
        {
          name: 'María José Martínez',
          role: 'Modulación de voz',
          bio: 'Enseña a hablar frente a cámara con seguridad y presencia.', // TODO: validar bio con cliente
          foto: '/team/maria-jose-martinez.webp',
        },
        {
          name: 'David Ordóñez',
          role: 'Edición',
          bio: 'Convierte grabaciones en videos con ritmo pensados para redes.', // TODO: validar bio con cliente
          foto: '/team/david-ordonez.webp',
        },
        {
          name: 'Francy Vallejo',
          role: 'Canva',
          bio: 'Diseña piezas profesionales y enseña a hacerlo desde cero.', // TODO: validar bio con cliente
          foto: '/team/francy-vallejo.webp',
        },
      ] as { name: string; role: string; bio?: string; foto: string | null }[],
    },
    venue: {
      heading: 'El lugar',
      nombre: 'V1501',
      direccion: 'Cl 20 #33-60',
      ciudad: 'Pasto, Nariño',
      aperturaPuertas: 'Apertura de puertas 7:30 a. m.',
      mapsQuery: 'V1501 Pasto Nariño',
      foto: '/venue/hotel-v1501.webp',
    },
    faq: {
      heading: 'Preguntas frecuentes',
      // TODO: validar todas las respuestas con cliente
      items: [
        {
          q: '¿El bootcamp incluye certificado?',
          a: 'Sí, recibes un certificado de asistencia de 978 Agencia al finalizar la jornada.',
        },
        {
          q: '¿Cómo pago mi entrada?',
          a: 'La compra se hace en línea por PassTix, con pasarela Bold: tarjetas, PSE, Nequi y Bancolombia. Es un pago seguro.',
        },
        {
          q: '¿Qué diferencia al plan VIP?',
          a: 'Asiento preferencial en primera fila, acceso prioritario a los conferencistas y una asesoría privada 1 a 1 con Paola Santacruz al día siguiente. Son solo 20 cupos.',
        },
        {
          q: '¿Sirve si estoy empezando de cero?',
          a: 'Sí. El bootcamp está pensado con lenguaje simple y ejemplos reales, ideal tanto para quien inicia como para quien ya tiene una marca.',
        },
        {
          q: '¿Necesito llevar computador?',
          a: 'No es obligatorio, pero sí recomendable si quieres practicar en vivo. Con cuaderno y celular también aprovechas la jornada.',
        },
        {
          q: '¿Hasta cuándo dura el precio de preventa?',
          a: 'Hasta el 15 de agosto. Después de esa fecha el precio sube, así que es el mejor momento para asegurar tu cupo.',
        },
      ],
    },
    checkout: {
      // TODO: reemplazar con URLs reales de PassTix
      general: 'https://passtix.co/eventos/bootcamp-978',
      vip: 'https://passtix.co/eventos/bootcamp-978',
    },
    pagos: ['Visa', 'Mastercard', 'American Express', 'PSE', 'Nequi', 'Bancolombia'],
    pagosNota: 'Pago seguro procesado por PassTix · Pasarela Bold',
    cierre: {
      titulo: '100 cupos. Un solo día. Aplica desde mañana.',
      subtitulo: 'La preventa no dura para siempre. Asegura tu lugar antes de que suba el precio.',
      countdownLabel: 'La preventa cierra en',
      // hrefs are derived in the component: buy → PassTix, question → WhatsApp.
      ctaPrimaryLabel: 'Comprar mi entrada',
      ctaSecondaryLabel: 'Tengo una pregunta',
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
    ogImage: '/logo/og-cover.png',
    locale: 'es_CO',
  },
} as const;

/** Canonical WhatsApp deep-link, derived once from the contact number. */
export const WHATSAPP_URL = `https://wa.me/${site.contact.whatsapp.replace(/[^\d]/g, '')}`;

export type Site = typeof site;
export type MethodologyStep = (typeof site.methodology.steps)[number];
export type NavItem = (typeof site.nav)[number];
export type SocialLink = (typeof site.socials)[number];
export type BootcampEvent = typeof site.bootcamp.event;
export type BootcampModule = (typeof site.bootcamp.curriculum.modules)[number];
export type BootcampPlan = (typeof site.bootcamp.planes)[number];
export type BootcampTeamMember = (typeof site.bootcamp.team.members)[number];
export type BootcampFaqItem = (typeof site.bootcamp.faq.items)[number];
export type BootcampExperienceItem = (typeof site.bootcamp.experience.items)[number];
export type BootcampQuickFact = (typeof site.bootcamp.quickFacts)[number];
export type BootcampValorItem = (typeof site.bootcamp.valorStack.items)[number];
export type BootcampTestimonio = (typeof site.bootcamp.testimonios)[number];
