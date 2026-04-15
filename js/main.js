/* ============================================================
   REFRIMÁQUINAS DISTRIBUIDORA — Scripts Globais
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const pageTransitionDuration = 180;

  /* ---- Navbar: scroll effect ---- */
  const navbar = document.querySelector('.navbar');
  function handleScroll() {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    // Scroll to top button
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      scrollTop.classList.toggle('visivel', window.scrollY > 400);
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ---- Mobile menu toggle ---- */
  const toggle = document.querySelector('.navbar-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  toggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('aberto');
    const icon = toggle.querySelector('i');
    if (icon) {
      icon.className = mobileMenu?.classList.contains('aberto')
        ? 'fas fa-times'
        : 'fas fa-bars';
    }
  });
  // Fechar ao clicar em link
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('aberto');
      const icon = toggle?.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    });
  });

  /* ---- Scroll to top ---- */
  document.querySelector('.scroll-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---- Marcar link ativo ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-menu a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('ativo');
    }
  });

  /* ---- Animação de entrada (Intersection Observer) ---- */
  const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.classList.add('hidden-before');
    observer.observe(el);
  });

  /* ---- Contador animado ---- */
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString('pt-BR') + (el.getAttribute('data-suffix') || '');
    }, 16);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

  /* ---- Toast notifications ---- */
  window.showToast = function(msg, tipo = 'info') {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    const icon = tipo === 'sucesso' ? 'fa-circle-check' : 'fa-circle-info';
    toast.className = `toast ${tipo}`;
    toast.innerHTML = `<i class="fas ${icon}"></i> ${msg}`;
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => toast.classList.remove('show'), 3800);
  };

  /* ---- Formulário de contato / orçamento genérico ---- */
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.disabled = false;
        form.reset();
        showToast('Mensagem enviada com sucesso! Em breve entraremos em contato.', 'sucesso');
      }, 1800);
    });
  });

  /* ---- Filtro de produtos ---- */
  const filterBtns = document.querySelectorAll('[data-filter]');
  const productCards = document.querySelectorAll('[data-cat]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
      const filter = btn.getAttribute('data-filter');
      productCards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (filter === 'todos' || cat === filter) {
          card.style.display = '';
          card.style.animation = 'fadeInCard .3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ---- Smooth scroll links âncora ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---- TransiÃ§Ã£o suave entre pÃ¡ginas internas ---- */
  document.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (!link || e.defaultPrevented) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const rawHref = link.getAttribute('href');
    if (!rawHref) return;
    if (rawHref.startsWith('#') || /^(mailto:|tel:|javascript:)/i.test(rawHref)) return;
    if (link.target && link.target !== '_self') return;
    if (link.hasAttribute('download')) return;

    const nextUrl = new URL(link.href, window.location.href);
    const sameOrigin = nextUrl.origin === window.location.origin;
    const samePageAnchor = nextUrl.pathname === window.location.pathname && nextUrl.hash;

    if (!sameOrigin || samePageAnchor) return;

    e.preventDefault();
    document.body.classList.add('page-is-leaving');
    window.setTimeout(() => {
      window.location.href = nextUrl.href;
    }, pageTransitionDuration);
  });

});

window.addEventListener('pageshow', () => {
  document.body.classList.remove('page-is-leaving');
});

/* ---- CSS para animações via JS ---- */
const style = document.createElement('style');
style.textContent = `
  .hidden-before { opacity: 0; transform: translateY(28px); transition: opacity .55s ease, transform .55s ease; }
  .hidden-before.visible { opacity: 1; transform: translateY(0); }
  @keyframes fadeInCard { from { opacity: 0; transform: scale(.96); } to { opacity: 1; transform: scale(1); } }
`;
document.head.appendChild(style);
