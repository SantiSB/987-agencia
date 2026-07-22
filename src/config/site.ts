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
      microcopy: 'Video del evento — próximamente', // TODO: reemplazar con video real del cliente
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
      avisoSubidaPrecio: 'El 15 de agosto el precio sube a $210.000',
    },
    autoridad: {
      stat: '73%',
      statTexto:
        'de las pymes que usan IA y contenido con estrategia reportan más ventas en menos de un año.',
      statFuente: 'Fuente por confirmar', // TODO: verificar cita real antes de publicar
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
          title: 'Kit de Arranque 978',
          text: 'Te llevas un kit físico + digital para aplicar todo desde el día siguiente.',
          icon: 'check',
        },
      ],
    },
    curriculum: {
      heading: 'Temario · 8 módulos',
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
          speaker: 'Santiago',
          desc: 'Usarás herramientas de IA para producir más y mejor contenido en menos tiempo.',
        },
        {
          n: '04',
          title: 'Copywriting con IA',
          speaker: 'Santiago y Paola Santacruz',
          desc: 'Escribirás textos y captions que conectan y mueven a la acción, apoyándote en IA.',
        },
        {
          n: '05',
          title: 'Canva',
          speaker: 'Francy',
          desc: 'Diseñarás piezas profesionales desde cero, sin depender de un diseñador.',
        },
        {
          n: '06',
          title: 'Edición Básica',
          speaker: 'David',
          desc: 'Editarás tus propios videos con ritmo y limpieza pensados para redes.',
        },
        {
          n: '07',
          title: 'Intención al Editar y Programas de Edición',
          speaker: 'David',
          desc: 'Sabrás qué software usar y cómo editar con intención narrativa, no solo cortar.',
        },
        {
          n: '08',
          title: 'Cómo Modular tu Voz',
          speaker: 'María José',
          desc: 'Hablarás frente a cámara con seguridad y una voz que retiene la atención.',
        },
      ],
    },
    valorStack: {
      titulo: 'Qué te llevas ese día',
      valorRealLabel: 'Valor real',
      inversionLabel: 'Tu inversión en preventa',
      items: [
        { item: '8 módulos con 5 especialistas', valor: 380000 },
        { item: 'Asesoría privada de seguimiento (VIP)', valor: 150000 },
        { item: 'Kit de herramientas 978', valor: 90000 },
        { item: 'Acceso a la comunidad de egresados', valor: 70000 },
      ], // TODO: confirmar valores con cliente
    },
    bonos: [
      {
        etiqueta: 'BONUS 01',
        titulo: 'Kit de Arranque 978',
        desc: 'Contenido por definir con cliente', // TODO: confirmar con cliente
        valor: 90000,
      },
      {
        etiqueta: 'BONUS 02',
        titulo: 'Bono por definir', // TODO: confirmar con cliente
        desc: 'Contenido por definir con cliente', // TODO: confirmar con cliente
        valor: 0,
      },
    ],
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
        precioAncla: 210000, // precio después de preventa
        precioActual: 162000,
        etiqueta: 'PREVENTA',
        beneficios: [
          'Acceso completo a los 8 módulos del bootcamp',
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
        precioAncla: 290000,
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
      metricasHeading: 'Detrás del bootcamp está 978 Agencia',
      testimoniosHeading: 'Lo que dicen de nosotros',
      galeriaHeading: 'Eventos y sesiones 978',
    },
    metricas: [
      { valor: 'PLACEHOLDER', label: 'Marcas acompañadas' }, // TODO: cifra real del cliente
      { valor: 'PLACEHOLDER', label: 'Años de experiencia' }, // TODO: cifra real del cliente
      { valor: 'PLACEHOLDER', label: 'Proyectos entregados' }, // TODO: cifra real del cliente
      { valor: '5', label: 'Especialistas en el equipo' },
    ],
    testimonios: [
      { nombre: 'PLACEHOLDER', rol: 'PLACEHOLDER', texto: 'PLACEHOLDER', foto: null }, // TODO: testimonio real
      { nombre: 'PLACEHOLDER', rol: 'PLACEHOLDER', texto: 'PLACEHOLDER', foto: null }, // TODO: testimonio real
      { nombre: 'PLACEHOLDER', rol: 'PLACEHOLDER', texto: 'PLACEHOLDER', foto: null }, // TODO: testimonio real
    ],
    galeria: [
      { alt: 'Evento 978 — foto 1', foto: null }, // TODO: foto real
      { alt: 'Evento 978 — foto 2', foto: null }, // TODO: foto real
      { alt: 'Evento 978 — foto 3', foto: null }, // TODO: foto real
      { alt: 'Evento 978 — foto 4', foto: null }, // TODO: foto real
      { alt: 'Evento 978 — foto 5', foto: null }, // TODO: foto real
      { alt: 'Evento 978 — foto 6', foto: null }, // TODO: foto real
    ],
    team: {
      heading: 'Conoce a tu equipo',
      lead: 'Cinco especialistas, un mismo objetivo: que salgas del bootcamp sabiendo ejecutar.',
      members: [
        {
          name: 'Paola Santacruz',
          role: 'Dirección General · Marca Personal · Copywriting',
          bio: 'Lidera cada proyecto con visión creativa y estratégica.', // TODO: validar bio con cliente
          foto: null, // TODO: foto real
        },
        {
          name: 'Santiago', // TODO: confirmar apellido
          role: 'Inteligencia Artificial · Copywriting',
          bio: 'Aplica IA para producir contenido con estrategia y velocidad.', // TODO: validar bio con cliente
          foto: null, // TODO: foto real
        },
        {
          name: 'María José', // TODO: confirmar apellido
          role: 'Modulación de voz',
          bio: 'Enseña a hablar frente a cámara con seguridad y presencia.', // TODO: validar bio con cliente
          foto: null, // TODO: foto real
        },
        {
          name: 'David', // TODO: confirmar apellido
          role: 'Edición',
          bio: 'Convierte grabaciones en videos con ritmo pensados para redes.', // TODO: validar bio con cliente
          foto: null, // TODO: foto real
        },
        {
          name: 'Francy', // TODO: confirmar apellido
          role: 'Canva',
          bio: 'Diseña piezas profesionales y enseña a hacerlo desde cero.', // TODO: validar bio con cliente
          foto: null, // TODO: foto real
        },
      ],
    },
    venue: {
      heading: 'El lugar',
      nombre: 'V1501',
      direccion: 'Dirección exacta por confirmar', // TODO: confirmar dirección con cliente
      ciudad: 'Pasto, Nariño',
      aperturaPuertas: 'Apertura de puertas 7:30 a. m.',
      mapsQuery: 'V1501 Pasto Nariño',
      foto: null, // TODO: foto real del venue
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
          a: 'La compra se hace en línea por PassTix, con pasarela Bold: tarjetas, PSE, Nequi y Bancolombia. Es un pago seguro y recibes tu entrada al instante.',
        },
        {
          q: '¿Qué diferencia al plan VIP?',
          a: 'Asiento preferencial en primera fila, acceso prioritario a los conferencistas y una asesoría privada 1 a 1 con Paola Santacruz al día siguiente. Son solo 20 cupos.',
        },
        {
          q: '¿Y si no puedo asistir ese día?',
          a: 'Escríbenos por WhatsApp antes del evento y buscamos la mejor solución para tu caso.',
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
      general: 'https://passtix.co/PLACEHOLDER-GENERAL',
      vip: 'https://passtix.co/PLACEHOLDER-VIP',
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
export type BootcampPlan = (typeof site.bootcamp.planes)[number];
export type BootcampTeamMember = (typeof site.bootcamp.team.members)[number];
export type BootcampFaqItem = (typeof site.bootcamp.faq.items)[number];
export type BootcampExperienceItem = (typeof site.bootcamp.experience.items)[number];
export type BootcampQuickFact = (typeof site.bootcamp.quickFacts)[number];
export type BootcampValorItem = (typeof site.bootcamp.valorStack.items)[number];
export type BootcampBono = (typeof site.bootcamp.bonos)[number];
export type BootcampMetrica = (typeof site.bootcamp.metricas)[number];
export type BootcampTestimonio = (typeof site.bootcamp.testimonios)[number];
export type BootcampGaleriaItem = (typeof site.bootcamp.galeria)[number];
