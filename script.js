/*=============== TRANSLATIONS ===============*/
const TRANSLATIONS = {
  en: {
    'splash.question':   'Who are you looking for?',
    'splash.game.title': 'Game Developer',
    'splash.game.sub':   '10+ years · Unity · Unreal · VR/AR',
    'splash.data.title': 'Data Analyst',
    'splash.data.sub':   'Python · SQL · Power BI · ML',

    'nav.home':     'Home',
    'nav.about':    'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact':  'Contact',

    'toggle.game': 'Game Dev',
    'toggle.data': 'Data Analyst',

    'home.hello':     'Hello, I am',
    'home.game.role': 'Senior Game Developer',
    'home.game.desc': 'Over 10 years shipping games across mobile, console, PC, and VR/AR. Specialized in Unity3D and Unreal Engine, with deep expertise in C# and C++ — from mechanics design to performance optimization and multi-platform publishing.',
    'home.data.role': 'Data Engineer & Analyst',
    'home.data.desc': 'I build data systems that work across any industry. E-commerce, SaaS, marketing, operations — the domain changes, the data problems stay the same. My strength: learn fast, solve complex problems, scale systems that decision-makers trust.',
    'home.cta':       "Let's Talk",

    'about.subtitle':   'My Intro',
    'about.title':      'About Me',
    'about.game.desc':  'With over a decade in game development, I have shipped titles for PlayStation, Nintendo Switch, Xbox, mobile, and VR/AR platforms. My career spans indie studios and major entertainment NDAs, always combining technical excellence with creative vision. I have also led teams and taught Unity and programming to the next generation of developers.',
    'about.data.desc':  'My strength isn\'t domain expertise — it\'s adaptability. I started solving marketing data problems (GA, GSC, CRMs), then realized the same principles apply everywhere. I can learn any business model, design pipelines for any data source, and turn messy data into reliable insights. I\'ve worked across e-commerce, SaaS, agencies, and operations. What sets me apart: I think like an engineer (building scalable systems) but solve like an analyst (understanding business problems first).',
    'about.cta':        'Contact Me',

    'skills.subtitle': 'My Toolkit',
    'skills.title':    'Skills',
    'skills.desc':     'Competencies I apply across industries. Technologies I master. Domains I\'ve worked in.',
    'skills.cta':      'See Projects',

    'skills.core.title': 'Core Competencies',
    'skills.core.etl': 'ETL & Data Pipelines',
    'skills.core.integration': 'Multi-source Data Integration',
    'skills.core.quality': 'Data Quality & Testing',
    'skills.core.api': 'API Design & Integration',

    'skills.tech.title': 'Technologies',

    'skills.domain.title': 'Domain Exposure',
    'skills.domain.marketing': 'Marketing & E-commerce Analytics',
    'skills.domain.saas': 'SaaS Product Analytics',
    'skills.domain.ops': 'Operations & Supply Chain',
    'skills.domain.compliance': 'Data Privacy & Compliance (RGPD, Consent Mode)',

    'services.subtitle': 'What I Do',
    'services.title':    'Services',

    'srv.game.mobile.title':  'Mobile Games',
    'srv.game.mobile.desc':   'End-to-end development for iOS and Android — mechanics, UI, API integrations, and store publishing.',
    'srv.game.console.title': 'Console & PC Games',
    'srv.game.console.desc':  'Experienced on PlayStation, Nintendo Switch, and Xbox — from engine setup to certification and release.',
    'srv.game.vrar.title':    'AR / VR Experiences',
    'srv.game.vrar.desc':     'Immersive experiences for Meta Quest, PS VR, and mobile AR — interaction design, performance, and depth.',

    'srv.data.etl.title':      'Multi-source Data Integration',
    'srv.data.etl.desc':       'Consolidate data from 3+ systems into one place. Whether marketing (GA + GSC + CRM), e-commerce (sales + inventory + customer), or operations — same problem, different domain. I build the integration layer.',
    'srv.data.dw.title':       'Data Infrastructure & Quality',
    'srv.data.dw.desc':        'Automated testing, anomaly detection, and reconciliation. Every business needs reliable data. I build systems that catch problems before they impact decisions. Works for any industry, any data source.',
    'srv.data.insights.title': 'Analytics & Dashboarding',
    'srv.data.insights.desc':  'Custom dashboards and reports stakeholders understand. No SQL required. From real-time metrics to deep-dive analysis. Built on data infrastructure you can trust.',

    'projects.subtitle': 'My Work',
    'projects.title':    'Projects',

    'proj.trial.desc':     'Notification system, multi-screen UI, Firebase and Android SDK REST API integrations.',
    'proj.islander2.desc': 'Resource management system and scoring mode — strategic and replayable. Full game architecture.',
    'proj.islander.desc':  'Day/night cycle and new content patches for the live game.',
    'proj.holmgang.desc':  'Combat system with configurable combos, narrative exploration, and character progression.',
    'proj.vr.desc':        'VR game with real-time inventory management against enemies in immersive environments.',
    'proj.flipys.desc':    'Exclusive PS4 VR game — mini-games, event mode, and pathfinding.',
    'proj.cruzcampo.desc': 'AR prototype for beer labels: AI label recognition integrated with REST API and machine learning rewards.',
    'proj.universal.desc': 'Cooperative adventure for two players with 16+ combinable skills. Developed under NDA for Universal Studios.',

    'proj.tag.casestudy':   'Case Study',
    'proj.tag.comingsoon':  'Coming Soon',

    'proj.sentiment.title': 'Sentiment Analysis Pipeline',
    'proj.sentiment.desc':  '~21,000 Amazon reviews · PySpark MLlib · 94.32% accuracy · FastAPI · Docker. End-to-end pipeline from raw CSV to production REST API.',
    'proj.sentiment.cta':   'View Case Study',

    'proj.dw.title': 'Enterprise Data Warehouse',
    'proj.dw.desc':  'Multi-source ETL pipeline consolidating analytics, search, and CRM data into a unified platform. Automated quality scoring, daily reconciliation, and intelligent alerting on an enterprise-scale architecture.',
    'proj.dw.cta':   'View Case Study',

    'proj.dash.title': 'Multi-Industry Analytics Dashboard',
    'proj.dash.desc':  'Interactive dashboard showcasing how the same data infrastructure adapts across industries. Switch between E-commerce, SaaS, and Operations to see unified analytics principles applied to different business contexts.',
    'proj.dash.cta':   'View Case Study',

    'proj.hf2.title': 'Data Exploration App',
    'proj.hf2.desc':  'Interactive data exploration tool — upload a dataset and get instant visualizations.',

    'contact.subtitle': 'Get in Touch',
    'contact.title':    'Contact',
    'contact.text':     'You can reach me anytime at:',
    'contact.cta':      'Get in touch',
  },

  es: {
    'splash.question':   '¿A quién estás buscando?',
    'splash.game.title': 'Desarrollador de Videojuegos',
    'splash.game.sub':   '+10 años · Unity · Unreal · VR/AR',
    'splash.data.title': 'Analista de Datos',
    'splash.data.sub':   'Python · SQL · Power BI · ML',

    'nav.home':     'Inicio',
    'nav.about':    'Sobre mí',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.contact':  'Contacto',

    'toggle.game': 'Game Dev',
    'toggle.data': 'Analista de Datos',

    'home.hello':     'Hola, soy',
    'home.game.role': 'Senior Game Developer',
    'home.game.desc': 'Más de 10 años publicando juegos en mobile, consola, PC y VR/AR. Especializado en Unity3D y Unreal Engine, con dominio profundo de C# y C++ — desde el diseño de mecánicas hasta la optimización y publicación multiplataforma.',
    'home.data.role': 'Data Engineer & Analista',
    'home.data.desc': 'Construyo sistemas de datos que funcionan en cualquier industria. E-commerce, SaaS, marketing, operaciones — el dominio cambia, los problemas de datos se mantienen igual. Mi fortaleza: aprender rápido, resolver problemas complejos, escalar sistemas en los que los decisores confían.',
    'home.cta':       'Hablemos',

    'about.subtitle':   'Mi Intro',
    'about.title':      'Sobre Mí',
    'about.game.desc':  'Con más de una década en desarrollo de videojuegos, he publicado títulos para PlayStation, Nintendo Switch, Xbox, mobile y plataformas VR/AR. Mi carrera abarca estudios indie y proyectos bajo NDA con grandes productoras, combinando excelencia técnica y visión creativa. También he liderado equipos y enseñado Unity y programación a la próxima generación de desarrolladores.',
    'about.data.desc':  'Mi fortaleza no es la experiencia en un dominio específico — es la adaptabilidad. Comencé resolviendo problemas de datos de marketing (GA, GSC, CRMs), luego me di cuenta de que los mismos principios aplican en todas partes. Puedo aprender cualquier modelo de negocio, diseñar pipelines para cualquier fuente de datos, y convertir datos desordenados en insights confiables. He trabajado en e-commerce, SaaS, agencias y operaciones. Lo que me diferencia: pienso como ingeniero (construyendo sistemas escalables) pero resuelvo como analista (entendiendo primero los problemas del negocio).',
    'about.cta':        'Contáctame',

    'skills.subtitle': 'Mis Herramientas',
    'skills.title':    'Habilidades',
    'skills.desc':     'Competencias que aplico en cualquier industria. Tecnologías que domino. Dominios en los que he trabajado.',
    'skills.cta':      'Ver Proyectos',

    'skills.core.title': 'Competencias Principales',
    'skills.core.etl': 'ETL y Pipelines de Datos',
    'skills.core.integration': 'Integración Multi-fuente',
    'skills.core.quality': 'Calidad y Testing de Datos',
    'skills.core.api': 'Diseño e Integración de APIs',

    'skills.tech.title': 'Tecnologías',

    'skills.domain.title': 'Experiencia en Dominios',
    'skills.domain.marketing': 'Marketing y E-commerce Analytics',
    'skills.domain.saas': 'SaaS Product Analytics',
    'skills.domain.ops': 'Operaciones y Supply Chain',
    'skills.domain.compliance': 'Privacidad y Compliance (RGPD, Consent Mode)',

    'services.subtitle': 'Qué Hago',
    'services.title':    'Servicios',

    'srv.game.mobile.title':  'Juegos Mobile',
    'srv.game.mobile.desc':   'Desarrollo end-to-end para iOS y Android — mecánicas, UI, integraciones API y publicación en tiendas.',
    'srv.game.console.title': 'Consola y PC',
    'srv.game.console.desc':  'Experiencia en PlayStation, Nintendo Switch y Xbox — desde la configuración del motor hasta la certificación y lanzamiento.',
    'srv.game.vrar.title':    'Experiencias AR / VR',
    'srv.game.vrar.desc':     'Experiencias inmersivas para Meta Quest, PS VR y AR mobile — diseño de interacción, rendimiento y profundidad.',

    'srv.data.etl.title':      'Integración de Datos Multi-fuente',
    'srv.data.etl.desc':       'Consolida datos de 3+ sistemas en un lugar. Ya sea marketing (GA + GSC + CRM), e-commerce (ventas + inventario + cliente), u operaciones — mismo problema, diferente dominio. Construyo la capa de integración.',
    'srv.data.dw.title':       'Infraestructura de Datos y Calidad',
    'srv.data.dw.desc':        'Testing automatizado, detección de anomalías y reconciliación. Toda empresa necesita datos confiables. Construyo sistemas que detectan problemas antes de impactar decisiones. Funciona para cualquier industria.',
    'srv.data.insights.title': 'Analytics y Dashboarding',
    'srv.data.insights.desc':  'Dashboards y reportes que entienden los stakeholders. Sin SQL necesario. Desde métricas en tiempo real hasta análisis profundo. Construido sobre infraestructura de datos confiable.',

    'projects.subtitle': 'Mi Trabajo',
    'projects.title':    'Proyectos',

    'proj.trial.desc':     'Sistema de notificaciones, UI multi-pantalla, integraciones API REST con Firebase y Android SDK.',
    'proj.islander2.desc': 'Sistema de gestión de recursos y modo de puntuación — estratégico y rejugable. Arquitectura completa del juego.',
    'proj.islander.desc':  'Ciclo día/noche y parches de nuevo contenido para el juego en vivo.',
    'proj.holmgang.desc':  'Sistema de combate con combos configurables, exploración narrativa y progresión de personaje.',
    'proj.vr.desc':        'Juego de realidad virtual con gestión de inventario en tiempo real contra enemigos en entornos inmersivos.',
    'proj.flipys.desc':    'Juego VR exclusivo para PS4 — mini-juegos, modo evento y pathfinding.',
    'proj.cruzcampo.desc': 'Prototipo AR para etiquetas de cerveza: reconocimiento de etiquetas con IA integrado con API REST y recompensas de machine learning.',
    'proj.universal.desc': 'Aventura cooperativa para dos jugadores con +16 habilidades combinables. Desarrollado bajo NDA para Universal Studios.',

    'proj.tag.casestudy':   'Caso de Estudio',
    'proj.tag.comingsoon':  'Próximamente',

    'proj.sentiment.title': 'Pipeline de Análisis de Sentimiento',
    'proj.sentiment.desc':  '~21.000 reseñas de Amazon · PySpark MLlib · 94.32% accuracy · FastAPI · Docker. Pipeline end-to-end desde CSV en bruto hasta API REST en producción.',
    'proj.sentiment.cta':   'Ver Caso de Estudio',

    'proj.dw.title': 'Data Warehouse Empresarial',
    'proj.dw.desc':  'Pipeline ETL multi-fuente consolidando datos de analytics, búsqueda y CRM en una plataforma unificada. Scoring de calidad automatizado, reconciliación diaria y alertas inteligentes en una arquitectura a escala empresarial.',
    'proj.dw.cta':   'Ver Caso de Estudio',

    'proj.dash.title': 'Dashboard Analítico Multi-Industria',
    'proj.dash.desc':  'Dashboard interactivo que demuestra cómo la misma infraestructura de datos se adapta a diferentes industrias. Cambia entre E-commerce, SaaS y Operaciones para ver principios de análisis unificados aplicados a contextos empresariales distintos.',
    'proj.dash.cta':   'Ver Caso de Estudio',

    'proj.hf2.title': 'App de Exploración de Datos',
    'proj.hf2.desc':  'Herramienta interactiva de exploración de datos — sube un dataset y obtén visualizaciones instantáneas.',

    'contact.subtitle': 'Contacto',
    'contact.title':    'Contacto',
    'contact.text':     'Puedes contactarme en cualquier momento:',
    'contact.cta':      'Escríbeme',
  }
};

/*=============== STATE ===============*/
let currentLang = localStorage.getItem('lang') || 'en';
let currentRole = localStorage.getItem('role') || null;

/*=============== i18n ===============*/
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = TRANSLATIONS[lang][key];
    if (text !== undefined) el.textContent = text;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

/*=============== ROLE ===============*/
function setRole(role) {
  currentRole = role;
  localStorage.setItem('role', role);
  document.body.dataset.role = role;
  document.querySelectorAll('.role-toggle__btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.roleSwitch === role);
  });
}

/*=============== LANG ===============*/
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

/*=============== SPLASH ===============*/
function initSplash() {
  const splash = document.getElementById('splash');
  const savedRole = localStorage.getItem('role');

  if (savedRole) {
    splash.style.display = 'none';
    setRole(savedRole);
  }

  document.querySelectorAll('.splash__card').forEach(card => {
    card.addEventListener('click', () => {
      setRole(card.dataset.role);
      splash.classList.add('splash--exit');
      setTimeout(() => { splash.style.display = 'none'; }, 500);
    });
  });
}

/*=============== ROLE TOGGLE (NAV) ===============*/
function initRoleToggle() {
  document.getElementById('role-toggle').addEventListener('click', e => {
    const btn = e.target.closest('[data-role-switch]');
    if (btn) setRole(btn.dataset.roleSwitch);
  });
}

/*=============== LANG TOGGLE (BOTH) ===============*/
function initLangToggles() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

/*=============== SCROLL: BLUR HEADER ===============*/
function blurHeader() {
  const header = document.getElementById('header');
  if (window.scrollY >= 50) {
    header.classList.add('blur-header');
  } else {
    header.classList.remove('blur-header');
  }
}

/*=============== SCROLL: ACTIVE NAV LINK ===============*/
function activeNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionTop    = section.offsetTop - 60;
    const sectionHeight = section.offsetHeight;
    const sectionId     = section.getAttribute('id');
    const link = document.querySelector(`.header nav a[href="#${sectionId}"]`);
    if (link) {
      link.classList.toggle('active-link', scrollY > sectionTop && scrollY <= sectionTop + sectionHeight);
    }
  });
}

/*=============== SCROLL REVEAL ===============*/
function initScrollReveal() {
  const items = document.querySelectorAll('.home_content, .about__data, .skills__container, .services__card, .project__card, .contact__container');
  items.forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(30px)';
    el.style.transition = 'opacity .7s ease-out, transform .7s ease-out';
  });

  function reveal() {
    const trigger = window.innerHeight * 0.88;
    items.forEach(el => {
      if (el.getBoundingClientRect().top < trigger) {
        el.style.opacity   = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }

  window.addEventListener('scroll', reveal);
  reveal();
}

/*=============== SMOOTH SCROLL ===============*/
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/*=============== INIT ===============*/
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
  initSplash();
  initRoleToggle();
  initLangToggles();
  initScrollReveal();
  initSmoothScroll();

  window.addEventListener('scroll', () => {
    blurHeader();
    activeNavLink();
  });
});
