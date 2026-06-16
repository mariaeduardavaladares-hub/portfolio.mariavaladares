/* ========================================
   MARIA EDUARDA VALADARES — script.js
   Lightweight, no-dependency interactions
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Navbar scroll + scroll-to-top ---------- */
  const navbar = document.querySelector('.navbar');
  const scrollTopBtn = document.querySelector('.scroll-top');

  const handleScroll = () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', y > 50);
    if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', y > 600);
    updateActiveNav();
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- Smooth scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    const href = a.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    a.addEventListener('click', e => {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      closeMobileMenu();
    });
  });

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a:not(.btn), .mobile-menu a:not(.btn)');

  function updateActiveNav() {
    const pos = window.scrollY + 130;
    sections.forEach(section => {
      const top = section.offsetTop;
      const id = section.getAttribute('id');
      if (pos >= top && pos < top + section.offsetHeight) {
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + id));
      }
    });
  }

  /* ---------- Mobile menu ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }
  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('active');
    if (navToggle) navToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ---------- Lightbox ---------- */
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('img');
    const lbClose = lightbox.querySelector('.lightbox-close');

    const openLightbox = (src, alt) => {
      lbImg.src = src;
      lbImg.alt = alt || '';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    };
    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    // Elements that open the lightbox with an explicit data-lightbox source
    document.querySelectorAll('[data-lightbox]').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        const src = el.getAttribute('data-lightbox');
        const img = el.querySelector('img');
        openLightbox(src, img ? img.alt : '');
      });
    });

    // Zoomable images (project detail gallery / case media)
    document.querySelectorAll('[data-zoom]').forEach(el => {
      el.addEventListener('click', () => {
        const img = el.tagName === 'IMG' ? el : el.querySelector('img');
        if (img) openLightbox(img.currentSrc || img.src, img.alt);
      });
    });

    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  }

});
