/* ========================================
   Maria Eduarda Valadares — Portfolio Script
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll ──
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // ── Mobile menu toggle ──
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

  // ── Scroll reveal ──
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  // ── Active nav link on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a:not(.btn-primary)');
  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
      });
      navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) a.classList.add('active');
      });
    }, { passive: true });
  }

  // ── Scroll to top button ──
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Contact form (Formspree AJAX) ──
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  if (form && submitBtn) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          submitBtn.textContent = 'Mensagem enviada ✓';
          submitBtn.style.background = '#4CAF50';
          form.reset();
          setTimeout(() => {
            submitBtn.textContent = 'Enviar Mensagem';
            submitBtn.style.background = '';
            submitBtn.disabled = false;
          }, 4000);
        } else {
          throw new Error('Erro');
        }
      } catch {
        submitBtn.textContent = 'Erro ao enviar. Tente novamente.';
        submitBtn.style.background = '#c0392b';
        setTimeout(() => {
          submitBtn.textContent = 'Enviar Mensagem';
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 4000);
      }
    });
  }

  // ── Lightbox (project pages + galleries) ──
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox?.querySelector('img');
  const lightboxClose = lightbox?.querySelector('.lightbox-close');
  const lightboxPrev = lightbox?.querySelector('.lightbox-prev');
  const lightboxNext = lightbox?.querySelector('.lightbox-next');
  const lightboxCounter = lightbox?.querySelector('.lightbox-counter');
  let galleryImages = [];
  let galleryIndex = 0;

  const showGalleryImage = (index) => {
    if (!lightboxImg || !galleryImages.length) return;
    galleryIndex = (index + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[galleryIndex];
    const multi = galleryImages.length > 1;
    if (lightboxCounter) {
      lightboxCounter.textContent = multi ? `${galleryIndex + 1} / ${galleryImages.length}` : '';
      lightboxCounter.style.display = multi ? '' : 'none';
    }
    if (lightboxPrev) lightboxPrev.style.display = multi ? '' : 'none';
    if (lightboxNext) lightboxNext.style.display = multi ? '' : 'none';
  };

  document.querySelectorAll('[data-zoom]').forEach(fig => {
    fig.addEventListener('click', () => {
      const galleryAttr = fig.dataset.gallery;
      if (galleryAttr) {
        galleryImages = galleryAttr.split(',').map(src => src.trim());
      } else {
        const img = fig.querySelector('img');
        galleryImages = img ? [img.src] : [];
      }
      if (galleryImages.length && lightbox && lightboxImg) {
        showGalleryImage(0);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightboxClose) closeLightbox();
    });
  }
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); showGalleryImage(galleryIndex - 1); });
  if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); showGalleryImage(galleryIndex + 1); });

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showGalleryImage(galleryIndex - 1);
    if (e.key === 'ArrowRight') showGalleryImage(galleryIndex + 1);
  });

  // ── Projects filter & expand ──
  const projectsGrid = document.querySelector('.projects-grid');
  if (projectsGrid) {
    const cards = Array.from(projectsGrid.querySelectorAll('.project-card'));
    const filterBtns = document.querySelectorAll('.filter-btn');
    const toggleBtn = document.getElementById('toggleProjects');
    const state = { filter: 'todos', expanded: false };

    const applyFilter = () => {
      cards.forEach(card => {
        const cats = (card.dataset.cat || '').split(' ');
        const matchesFilter = state.filter === 'todos' || cats.includes(state.filter);
        const isFeatured = card.dataset.featured === 'true';
        const visible = matchesFilter && (state.expanded || state.filter !== 'todos' || isFeatured);
        card.style.display = visible ? '' : 'none';
        // ensure shown cards are never left invisible by the reveal animation
        if (visible) card.classList.add('visible');
      });
      if (toggleBtn) {
        toggleBtn.style.display = (state.filter === 'todos' && !state.expanded) ? '' : 'none';
      }
    };

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.filter = btn.dataset.filter;
        applyFilter();
      });
    });

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        state.expanded = true;
        applyFilter();
      });
    }

    applyFilter();
  }

  // ── Pricing detail accordions (+ Ver detalhes) ──
  const detailToggles = document.querySelectorAll('.pack-detail-toggle');
  const closeDetail = (card) => {
    card.classList.remove('detail-open');
    const t = card.querySelector('.pack-detail-toggle');
    if (t) {
      t.setAttribute('aria-expanded', 'false');
      const txt = t.querySelector('.pack-detail-toggle-txt');
      if (txt) txt.textContent = '+ Ver detalhes';
    }
  };
  detailToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.pack-mini, .pack-combo');
      const group = btn.closest('.packs-tri-grid') || btn.closest('.pack-combo');
      const willOpen = !card.classList.contains('detail-open');

      // only one open per group
      if (willOpen && group) {
        group.querySelectorAll('.detail-open').forEach(other => {
          if (other !== card) closeDetail(other);
        });
      }

      card.classList.toggle('detail-open', willOpen);
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      const txt = btn.querySelector('.pack-detail-toggle-txt');
      if (txt) txt.textContent = willOpen ? '− Ocultar detalhes' : '+ Ver detalhes';

      // on mobile, bring the expanded card into view
      if (willOpen && window.matchMedia('(max-width:768px)').matches) {
        setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 320);
      }
    });
  });

  // ── Smooth scroll for anchor links ──
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
