/* ========================================
   Maria Eduarda Valadares — Portfolio Script
   Apple-inspired interactions, i18n bilingual engine, spotlight & lightbox
   ======================================== */

const I18N = {
  pt: {
    // Navigation
    nav_services: "Serviços",
    nav_projects: "Projetos",
    nav_experience: "Trajetória",
    nav_contact_btn: "Vamos conversar",
    
    // Hero
    hero_eyebrow: "Estratégia de Marca & Atendimento",
    hero_title: "Transformo ideias em marcas e experiências que geram <em>valor real.</em>",
    hero_subtitle: "Design estratégico, atendimento publicitário, identidade visual e presença digital sofisticada para marcas que querem se posicionar com clareza, intenção e consistência.",
    hero_cta_projects: "Ver projetos",
    hero_cta_services: "Conhecer serviços",
    hero_badge: "Estratégia · Atendimento · <em>Design</em>",
    
    // Credibility Strip
    strip_projects: "Projetos Entregues",
    strip_brands: "Marcas Transformadas",
    strip_years: "Anos de Experiência",
    strip_calix: "Atendimento Publicitário na Cálix",
    
    // Packs Header
    packs_eyebrow: "Serviços & Investimento",
    packs_title: "Escolha o formato ideal para <em>sua marca.</em>",
    packs_desc: "Planos mensais recorrentes, projetos pontuais e um combo de entrada — tudo sob medida para o seu momento.",
    packs_group_monthly: "Mensal",
    packs_group_recurring: "(recorrente)",
    packs_group_project: "Projeto",
    packs_group_onetime: "(uma vez)",
    
    // Packs Cards
    pack_essential_name: "Essencial",
    pack_essential_sub: "Presença constante e organizada",
    pack_essential_includes_lbl: "Inclui",
    pack_essential_includes_val: "Planejamento + 10 cards (feed e stories) + 2 rodadas de ajuste.",
    pack_strategic_name: "Estratégico",
    pack_strategic_sub: "Estratégia visual com produção completa",
    pack_strategic_seal: "Mais escolhido",
    pack_strategic_includes_val: "Planejamento + 20 cards + 3 reels + gravação 1x no local + 2 rodadas de ajuste.",
    pack_complete_name: "Completo",
    pack_complete_sub: "Acompanhamento próximo e sem limites",
    pack_complete_includes_val: "Tudo do Estratégico + acompanhamento próximo + demandas extras inclusas.",
    
    pack_id_name: "Identidade Visual",
    pack_id_sub: "A base da sua marca, do zero",
    pack_id_includes_val: "Pesquisa + logo + paleta + tipografia + manual de uso.",
    pack_site_name: "Site Institucional",
    pack_site_sub: "Sua casa digital, profissional",
    pack_site_includes_val: "Design + desenvolvimento responsivo + publicação.",
    
    pack_combo_badge: "Combo de Entrada",
    pack_combo_title: "Identidade Visual + Site + 3 Meses",
    pack_combo_sub: "Para marcas que estão nascendo ou passando por rebranding e precisam de tudo estruturado de uma vez.",
    pack_combo_inc1: "Identidade Visual completa",
    pack_combo_inc2: "Site institucional responsivo",
    pack_combo_inc3: "3 meses de acompanhamento Estratégico (20 cards + 3 reels/mês)",
    
    btn_details_more: "+ Ver detalhes",
    btn_details_less: "− Ocultar detalhes",
    btn_whatsapp_hire: "Contratar via WhatsApp",
    per_month: "/mês",
    
    // Projects Header & Filters
    projects_eyebrow: "Projetos selecionados",
    projects_title: "Marcas que ganham forma, propósito e <em>presença.</em>",
    filter_all: "Todos",
    filter_branding: "Branding",
    filter_campaign: "Campanha",
    filter_sites: "Sites",
    filter_decks: "Apresentações",
    badge_featured: "Destaque",
    view_project: "Ver projeto completo",
    visit_site: "Visitar site",
    view_campaign: "Ver campanha",
    
    // Projects details
    proj_luciana_cat: "Brand Strategy · Naming · Posicionamento",
    proj_luciana_title: "Tastes Like Memory — Luciana",
    proj_luciana_desc: "Construção de marca do zero para uma confeitaria afetiva em Brasília — pesquisa de nostalgia, posicionamento, naming, campanha e plano de lançamento.",
    
    proj_maffys_cat: "Brand Strategy · Campanha · Embalagens",
    proj_maffys_title: "MAFFY'S — Cookies Artesanais",
    proj_maffys_desc: "Estratégia completa de lançamento — conceito ('O resto é raso'), universo verbal com humor seco, identidade visual, embalagens e ativação.",
    
    proj_evolve_cat: "Brand Strategy · Direção Criativa · Campanha",
    proj_evolve_title: "EVOLVE SPORTS — Activewear",
    proj_evolve_desc: "Estratégia de marca e campanha para a expansão em activewear e lifestyle da Evolve. Movimento, performance e estilo da academia para a vida.",
    
    proj_ivy_cat: "Identidade Visual / Apresentação",
    proj_ivy_title: "IVY — Gelateria Brasileira",
    proj_ivy_desc: "Identidade de marca completa para uma gelateria brasileira autoral — nome, símbolo, embalagem e aplicações.",
    
    proj_aussie_cat: "Identidade Visual / Site",
    proj_aussie_title: "Aussie Education",
    proj_aussie_desc: "Site institucional para escola infantil bilíngue — da marca ao site publicado e no ar.",
    
    proj_dean_cat: "Identidade Visual / Apresentação",
    proj_dean_title: "Dean Coffee Co.",
    proj_dean_desc: "Identidade visual completa para uma marca de café especial — logotipo, embalagens, papelaria e aplicação em loja física.",
    
    proj_brb_cat: "Campanha Digital",
    proj_brb_title: "BRB DUX e Infinite",
    proj_brb_desc: "Campanha para os cartões premium BRB DUX e Visa Infinite, comunicando benefícios exclusivos.",
    
    // Experience
        // Timeline badges
    badge_agency: "Agência",
    badge_studio: "Estúdio Autoral",
    badge_degree: "Graduação",
    badge_spec: "Especialização",
    exp_linkedin_subtitle: "Atendimento Publicitário na Cálix Propaganda · Brand Strategy · Design Estratégico · UX/UI",
    
    // Packs Accordion Details
    pack_detail_head: "O que você recebe",
    pack_ess_d1: "Planejamento de conteúdo do mês: linha editorial, temas e cronograma",
    pack_ess_d2: "10 cards para feed e stories, dentro da identidade da marca",
    pack_ess_d3: "Até 2 rodadas de ajuste por peça",
    pack_ess_d4: "Alinhamento direto por mensagem em horário comercial",
    pack_strat_d1: "Tudo do Essencial",
    pack_strat_d2: "20 cards para feed e stories",
    pack_strat_d3: "3 reels com roteiro e edição profissional",
    pack_strat_d4: "Gravação no local 1x no mês (até 2 horas)",
    pack_comp_d1: "Tudo do Estratégico",
    pack_comp_d2: "Reunião mensal de estratégia (30 minutos)",
    pack_comp_d3: "Até 4 demandas pontuais por mês (artes extras de campanha)",
    pack_comp_d4: "Prioridade de prazo nas entregas",
    pack_combo_includes_val: "ID Visual completa + Site responsivo + 3 meses de acompanhamento.",
exp_eyebrow: "Trajetória & Perfil Profissional",
    exp_title: "Experiência, atendimento e <em>formação.</em>",
    
    exp1_date: "Mar 2026 — Presente · Tempo integral",
    exp1_title: "Assistente de Atendimento Publicitário",
    exp1_org: "Cálix Propaganda · Brasília, DF (Presencial)",
    exp1_desc: "Apoio direto na gestão de contas e relacionamento com clientes. Interface estratégica entre criação, mídia e produção. Organização de briefings, acompanhamento de fluxos de campanha, cronogramas de entrega e controle rigoroso de prazos e relatórios de status.",
    
    exp2_date: "2023 — Presente",
    exp2_title: "Brand Strategist & Designer Independente",
    exp2_org: "Valadares Studio · Brasília, DF",
    exp2_desc: "Estratégia de marca, posicionamento, naming, sistemas visuais e campanhas para marcas autorais e empresas em crescimento. Foco em alinhar propósito, percepção de valor e consistência estética.",
    
    exp3_date: "2022 — 2024",
    exp3_title: "Bacharelado em Design Gráfico",
    exp3_org: "Cruzeiro do Sul Virtual",
    exp3_desc: "Formação sólida em identidade visual, tipografia, design digital, editorial, teoria das cores, comunicação visual e resolução de problemas complexos de marca.",
    
    exp4_date: "2022 — 2023",
    exp4_title: "UX/UI Design & Customer Experience",
    exp4_org: "UX Unicórnio",
    exp4_desc: "Design de produtos digitais, pesquisa de usuário, jornadas do cliente (CX/CS), arquitetura de informação, wireframes e prototipagem de alta fidelidade para Web e Mobile (Android/iOS).",
    
    btn_medium_case: "Ver Case de UX no Medium",
    btn_linkedin_profile: "Ver perfil completo no LinkedIn",
    
    // Contact
    contact_eyebrow: "Contato",
    contact_title: "Tem um projeto <em>em mente?</em>",
    contact_subtitle: "Será um prazer entender seu desafio, desenhar uma estratégia ou somar à sua equipe. Conte sobre o seu objetivo.",
    form_lbl_name: "Nome",
    form_plh_name: "Seu nome",
    form_lbl_email: "E-mail",
    form_plh_email: "seu@email.com",
    form_lbl_subject: "Assunto",
    form_plh_subject: "Sobre o que você quer falar?",
    form_lbl_message: "Mensagem",
    form_plh_message: "Conte sobre seu projeto ou oportunidade...",
    form_btn_send: "Enviar Mensagem",
    form_sending: "Enviando...",
    form_success: "Mensagem enviada ✓",
    form_error: "Erro ao enviar. Tente novamente.",
    
    contact_info_email: "E-mail",
    contact_info_location: "Localização",
    contact_info_loc_val: "Brasília, DF — Brasil",
    contact_info_linkedin: "LinkedIn",
    contact_info_whatsapp: "WhatsApp",
    
    footer_copy: "© 2026 — Maria Eduarda Valadares · Valadares Studio. Design Estratégico & Atendimento."
  },
  
  en: {
    // Navigation
    nav_services: "Services",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_contact_btn: "Let's connect",
    
    // Hero
    hero_eyebrow: "Brand Strategy & Account Management",
    hero_title: "Transforming ideas into brands and experiences that drive <em>real value.</em>",
    hero_subtitle: "Brand strategy, advertising account management, visual identity, and sophisticated digital presence for brands that want to position with clarity, intention, and consistency.",
    hero_cta_projects: "View projects",
    hero_cta_services: "Explore services",
    hero_badge: "Strategy · Account · <em>Design</em>",
    
    // Credibility Strip
    strip_projects: "Projects Delivered",
    strip_brands: "Brands Transformed",
    strip_years: "Years of Experience",
    strip_calix: "Advertising Account at Cálix",
    
    // Packs Header
    packs_eyebrow: "Services & Retainers",
    packs_title: "Choose the ideal model for <em>your brand.</em>",
    packs_desc: "Monthly retainers, one-off branding projects, and an all-in-one launch combo — tailored to your growth stage.",
    packs_group_monthly: "Monthly",
    packs_group_recurring: "(recurring retainer)",
    packs_group_project: "Project",
    packs_group_onetime: "(one-off)",
    
    // Packs Cards
    pack_essential_name: "Essential",
    pack_essential_sub: "Consistent, organized social presence",
    pack_essential_includes_lbl: "Includes",
    pack_essential_includes_val: "Monthly planning + 10 feed & stories cards + 2 revision rounds.",
    pack_strategic_name: "Strategic",
    pack_strategic_sub: "Visual strategy with complete production",
    pack_strategic_seal: "Most popular",
    pack_strategic_includes_val: "Planning + 20 cards + 3 reels + 1x on-site video shoot + 2 revision rounds.",
    pack_complete_name: "Full Retainer",
    pack_complete_sub: "Close strategic partnership & on-demand needs",
    pack_complete_includes_val: "Everything in Strategic + monthly strategy session + priority ad-hoc creative requests.",
    
    pack_id_name: "Brand Identity",
    pack_id_sub: "Zero-to-one brand foundation",
    pack_id_includes_val: "Research + logo + color system + typography + brand guidelines.",
    pack_site_name: "Institutional Website",
    pack_site_sub: "Your professional digital home",
    pack_site_includes_val: "UI/UX design + responsive code + deployment and live setup.",
    
    pack_combo_badge: "Launch Combo",
    pack_combo_title: "Brand Identity + Website + 3 Months",
    pack_combo_sub: "For new ventures or rebranding businesses that need full end-to-end execution from day one.",
    pack_combo_inc1: "Complete visual identity",
    pack_combo_inc2: "Responsive website design & dev",
    pack_combo_inc3: "3 months of Strategic Social Media (20 cards + 3 reels/month)",
    
    btn_details_more: "+ View details",
    btn_details_less: "− Hide details",
    btn_whatsapp_hire: "Inquire via WhatsApp",
    per_month: "/mo",
    
    // Projects Header & Filters
    projects_eyebrow: "Selected Work",
    projects_title: "Brands that gain form, purpose and <em>presence.</em>",
    filter_all: "All",
    filter_branding: "Branding",
    filter_campaign: "Campaigns",
    filter_sites: "Websites",
    filter_decks: "Decks",
    badge_featured: "Featured",
    view_project: "View full project",
    visit_site: "Visit live site",
    view_campaign: "View campaign",
    
    // Projects details
    proj_luciana_cat: "Brand Strategy · Naming · Positioning",
    proj_luciana_title: "Tastes Like Memory — Luciana",
    proj_luciana_desc: "Zero-to-one brand building for an affective home bakery in Brasília — nostalgia research, positioning, naming, launch campaign, and content roadmap.",
    
    proj_maffys_cat: "Brand Strategy · Campaign · Packaging",
    proj_maffys_title: "MAFFY'S — Artisan Cookies",
    proj_maffys_desc: "Full launch strategy — strategic concept ('The rest is shallow'), dry-humor verbal universe, visual identity, packaging design and digital activation.",
    
    proj_evolve_cat: "Brand Strategy · Creative Direction · Campaign",
    proj_evolve_title: "EVOLVE SPORTS — Activewear",
    proj_evolve_desc: "Brand strategy and campaign for Evolve's activewear expansion. Movement, performance and style from the gym to everyday life.",
    
    proj_ivy_cat: "Brand Identity / Presentation",
    proj_ivy_title: "IVY — Brazilian Gelateria",
    proj_ivy_desc: "Complete brand identity for an artisanal Brazilian gelateria — naming, symbol, packaging and physical brand touchpoints.",
    
    proj_aussie_cat: "Brand Identity / Website",
    proj_aussie_title: "Aussie Education",
    proj_aussie_desc: "Institutional bilingual website for a premium early childhood education school — from brand design to live launch.",
    
    proj_dean_cat: "Brand Identity / Presentation",
    proj_dean_title: "Dean Coffee Co.",
    proj_dean_desc: "Complete visual identity for a specialty coffee roaster — logo, packaging, stationery and in-store design system.",
    
    proj_brb_cat: "Digital Campaign",
    proj_brb_title: "BRB DUX & Infinite",
    proj_brb_desc: "Digital campaign for BRB's ultra-premium credit cards (DUX and Visa Infinite), highlighting exclusive lifestyle benefits.",
    
    // Experience
        // Timeline badges
    badge_agency: "Agency",
    badge_studio: "Independent Studio",
    badge_degree: "Bachelor's Degree",
    badge_spec: "Specialization",
    exp_linkedin_subtitle: "Account Assistant at Cálix Propaganda · Brand Strategy · Strategic Design · UX/UI",
    
    // Packs Accordion Details
    pack_detail_head: "What's included",
    pack_ess_d1: "Monthly content planning: editorial pillars, topics, and schedule",
    pack_ess_d2: "10 cards for feed & stories, matching brand identity",
    pack_ess_d3: "Up to 2 review rounds per piece",
    pack_ess_d4: "Direct alignment via messaging during business hours",
    pack_strat_d1: "Everything in Essential",
    pack_strat_d2: "20 cards for feed & stories",
    pack_strat_d3: "3 Reels with scriptwriting & professional editing",
    pack_strat_d4: "On-site video recording 1x/month (up to 2h)",
    pack_comp_d1: "Everything in Strategic",
    pack_comp_d2: "Monthly strategy review meeting (30 mins)",
    pack_comp_d3: "Up to 4 ad-hoc campaign design assets per month",
    pack_comp_d4: "Priority turnaround time on deliverables",
    pack_combo_includes_val: "Complete Visual Identity + Responsive Website + 3 months of ongoing social media.",
exp_eyebrow: "Experience & Background",
    exp_title: "Career, account management & <em>education.</em>",
    
    exp1_date: "Mar 2026 — Present · Full-time",
    exp1_title: "Advertising Account Assistant",
    exp1_org: "Cálix Propaganda · Brasília, DF (On-site)",
    exp1_desc: "Direct support in client account management and stakeholder relations. Strategic cross-functional liaison between creative, media, and production teams. Client briefing curation, campaign workflow monitoring, strict deadline control, and delivery alignment.",
    
    exp2_date: "2023 — Present",
    exp2_title: "Brand Strategist & Independent Designer",
    exp2_org: "Valadares Studio · Brasília, DF",
    exp2_desc: "Brand strategy, strategic positioning, naming, design systems, and launch campaigns for independent brands and growing businesses. Focused on aligning purpose, high perceived value, and visual coherence.",
    
    exp3_date: "2022 — 2024",
    exp3_title: "Bachelor's Degree in Graphic Design",
    exp3_org: "Cruzeiro do Sul Virtual",
    exp3_desc: "Rigorous education in visual identity, typography, digital & editorial design, color theory, visual communication, and strategic problem-solving.",
    
    exp4_date: "2022 — 2023",
    exp4_title: "UX/UI Design & Customer Experience",
    exp4_org: "UX Unicórnio",
    exp4_desc: "Digital product design, user research, customer journey mapping (CX/CS), information architecture, wireframing, and high-fidelity interactive prototyping for Web & Mobile (Android/iOS).",
    
    btn_medium_case: "Read UX Case Study on Medium",
    btn_linkedin_profile: "View full LinkedIn Profile",
    
    // Contact
    contact_eyebrow: "Contact",
    contact_title: "Have a project <em>in mind?</em>",
    contact_subtitle: "I would love to understand your goals, shape an impactful brand strategy, or collaborate with your agency team. Let's talk.",
    form_lbl_name: "Name",
    form_plh_name: "Your name",
    form_lbl_email: "Email",
    form_plh_email: "your@email.com",
    form_lbl_subject: "Subject",
    form_plh_subject: "What would you like to discuss?",
    form_lbl_message: "Message",
    form_plh_message: "Tell me about your project, team or challenge...",
    form_btn_send: "Send Message",
    form_sending: "Sending...",
    form_success: "Message sent successfully ✓",
    form_error: "Error sending message. Please try again.",
    
    contact_info_email: "Email",
    contact_info_location: "Location",
    contact_info_loc_val: "Brasília, DF — Brazil",
    contact_info_linkedin: "LinkedIn",
    contact_info_whatsapp: "WhatsApp",
    
    footer_copy: "© 2026 — Maria Eduarda Valadares · Valadares Studio. Strategic Design & Communications."
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // ═══════════════ LANGUAGE SWITCHER ENGINE ═══════════════
  const savedLang = localStorage.getItem('valadares_portfolio_lang');
  let currentLang = savedLang || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'pt');
  
  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('valadares_portfolio_lang', lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    
    // Update active class on all lang buttons (desktop + mobile)
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.langBtn === lang);
    });
    
    const dict = I18N[lang] || I18N.pt;
    
    // Update simple text
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    
    // Update rich HTML
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-plh]').forEach(el => {
      const key = el.dataset.i18nPlh;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });
    
    // Luciana project link switch (luciana.html for PT, luciana-en.html for EN)
    const lucianaCard = document.getElementById('proj-luciana-link');
    if (lucianaCard) {
      lucianaCard.href = lang === 'en' ? 'luciana-en.html' : 'luciana.html';
    }
  }

  // Setup click listeners on all language toggles
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.dataset.langBtn;
      if (targetLang !== currentLang) {
        updateLanguage(targetLang);
      }
    });
  });

  // Apply initial language
  updateLanguage(currentLang);

  // ═══════════════ APPLE SPOTLIGHT EFFECT ═══════════════
  // Tracks mouse movement on cards to create the Apple Bento specular spotlight
  const spotlightCards = document.querySelectorAll('.project-card, .pack-mini, .pack-combo, .timeline-item, .strip-item');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // ═══════════════ NAVBAR SCROLL & BLUR ═══════════════
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ═══════════════ MOBILE MENU ═══════════════
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.getElementById('mobileMenu');
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      mobile.classList.toggle('open');
      document.body.style.overflow = mobile.classList.contains('open') ? 'hidden' : '';
    });
    mobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('active');
        mobile.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ═══════════════ SCROLL REVEAL (APPLE SPRING CURVE) ═══════════════
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  // ═══════════════ SCROLL TO TOP BUTTON ═══════════════
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ═══════════════ CONTACT FORM (FORMSPREE AJAX) ═══════════════
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  if (form && submitBtn) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      const dict = I18N[currentLang] || I18N.pt;
      submitBtn.textContent = dict.form_sending;

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          submitBtn.textContent = dict.form_success;
          submitBtn.style.background = '#fff';
          submitBtn.style.color = '#000';
          form.reset();
          setTimeout(() => {
            submitBtn.textContent = dict.form_btn_send;
            submitBtn.style.background = '';
            submitBtn.style.color = '';
            submitBtn.disabled = false;
          }, 4000);
        } else {
          throw new Error('Erro');
        }
      } catch {
        submitBtn.textContent = dict.form_error;
        submitBtn.style.background = '#2a2a2a';
        submitBtn.style.color = '#fff';
        setTimeout(() => {
          submitBtn.textContent = dict.form_btn_send;
          submitBtn.style.background = '';
          submitBtn.style.color = '';
          submitBtn.disabled = false;
        }, 4000);
      }
    });
  }

  // ═══════════════ LIGHTBOX ═══════════════
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox?.querySelector('img');
  const lightboxClose = lightbox?.querySelector('.lightbox-close');

  document.querySelectorAll('[data-zoom]').forEach(fig => {
    fig.addEventListener('click', () => {
      const img = fig.querySelector('img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    if (lightbox) lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightboxClose) closeLightbox();
    });
  }
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox?.classList.contains('active')) closeLightbox();
  });

  // ═══════════════ PROJECTS FILTER ═══════════════
  const projectsGrid = document.querySelector('.projects-grid');
  if (projectsGrid) {
    const cards = Array.from(projectsGrid.querySelectorAll('.project-card'));
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        cards.forEach(card => {
          const cats = (card.dataset.cat || '').split(' ');
          const visible = filter === 'todos' || cats.includes(filter);
          card.style.display = visible ? '' : 'none';
          if (visible) card.classList.add('visible');
        });
      });
    });
  }

  // ═══════════════ PRICING DETAIL ACCORDIONS ═══════════════
  const detailToggles = document.querySelectorAll('.pack-detail-toggle');
  detailToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.pack-mini, .pack-combo');
      const willOpen = !card.classList.contains('detail-open');
      card.classList.toggle('detail-open', willOpen);
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      const txt = btn.querySelector('.pack-detail-toggle-txt');
      const dict = I18N[currentLang] || I18N.pt;
      if (txt) txt.textContent = willOpen ? dict.btn_details_less : dict.btn_details_more;
    });
  });

  // ═══════════════ SMOOTH SCROLL ═══════════════
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
