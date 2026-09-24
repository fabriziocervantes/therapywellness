/* Therapy & Wellness Cancún — language switch, WhatsApp links, therapy tabs,
   reviews carousel and organic motion. No dependencies. */
(function () {
  'use strict';

  var WA = '529983851240';
  var wa = function (m) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(m); };

  // Spanish lives in the HTML (for SEO); it is captured from the DOM at load.
  // English strings are keyed by the same data-i18n names.
  var EN = {
    book: 'Book', bookWa: 'Book your session', seeTher: 'See therapies',
    heroTitle: 'The <i>essence</i> of your well-being',
    heroSub: 'Therapeutic massage, post-surgery care and facials in downtown Cancún.',
    reviewsG: '165 Google reviews', open7: 'Open 7 days a week',
    essLabel: 'Our essence', essTitle: 'A place to return to <i>calm</i>',
    essP: 'We see well-being as a whole: body, mind and rest. Our therapists pair skilled technique with genuine care in a serene setting, so every session brings real relief and a lasting sense of balance.',
    p1h: 'Expert therapists', p1d: 'Trained in therapeutic and post-surgery techniques.',
    p2h: 'Serene setting', p2d: 'Private rooms, warm light and quiet.',
    p3h: 'Whole well-being', p3d: 'Care for body, mind and rest.',
    therLabel: 'The herbarium', therTitle: 'Our <i>therapies</i>',
    therP: 'Five families of treatments. Each card lists its duration, benefit and price.',
    f1: 'Relaxing & therapeutic massage', f2: 'Post-surgery & lymphatic drainage', f3: 'Facials', f4: 'Pressotherapy', f5: 'Holistic therapies',
    t1n: 'Relaxing massage', t1b: 'Releases tension and brings calm to body and mind.',
    t2n: 'Deep tissue massage', t2b: 'Relieves knots and deep muscle pain.',
    t3n: 'Back & neck', t3b: 'Focused relief for everyday tension.',
    t4n: 'Post-surgery massage', t4b: 'Supports recovery after lipo, tummy tuck or BBL.',
    t5n: 'Manual lymphatic drainage', t5b: 'Reduces swelling and fluid retention.',
    t6n: 'Hydrating facial', t6b: 'Restores glow and softness to your skin.',
    t7n: 'Deep cleansing facial', t7b: 'Purifies pores and balances the skin.',
    t8n: 'Pressotherapy', t8b: 'Improves circulation and a feeling of lightness.',
    t9n: 'Pressotherapy + drainage', t9b: 'A complete combination to reduce swelling.',
    t10n: 'Foot reflexology', t10b: 'Stimulates reflex points to restore balance.',
    t11n: 'Aromatherapy', t11b: 'Essential oils for deep emotional rest.',
    info: 'More info',
    postLabel: 'Post-surgery recovery', postTitle: 'Expert hands for your <i>recovery</i>',
    postP: 'Post-surgery massage and lymphatic drainage help reduce swelling, improve circulation and support better results from your procedure. Travelling to Cancún for surgery? We schedule your sessions around the days of your stay.',
    postSessions: 'sessions are usually recommended, depending on your procedure and your doctor’s advice.',
    postCta: 'Book a post-surgery package',
    s1h: 'Initial assessment', s1d: 'Share your procedure and your surgeon’s instructions so we can design your plan.',
    s2h: 'First sessions', s2d: 'Gentle lymphatic drainage as soon as your doctor approves, to reduce swelling.',
    s3h: 'Follow-up', s3d: 'We adjust intensity and frequency as you progress.',
    s4h: 'Completion', s4d: 'Aftercare guidance to maintain your results at home.',
    pkgLabel: 'Packages & prices', pkgTitle: 'Well-being <i>recipes</i>',
    pkgP: 'Combinations designed for every moment, with a special price when you book the full package.',
    pkgCta: 'Book this package', popular: 'MOST CHOSEN', recipe: 'Recipe Nº',
    k1n: 'Relaxation', k1f: 'To release built-up stress.', k1i1: '3 relaxing massages, 60 min', k1i2: 'Aromatherapy included',
    k2n: 'Recovery', k2f: 'For your post-surgery process.', k2i1: '10 post-surgery massage sessions', k2i2: 'Manual lymphatic drainage', k2i3: '2 pressotherapy sessions',
    k3n: 'Renewal', k3f: 'To feel light and radiant.', k3i1: 'Hydrating facial', k3i2: 'Relaxing massage, 60 min', k3i3: 'Pressotherapy, 40 min',
    visLabel: 'Your visit', visTitle: 'How your <i>arrival works</i>',
    v1h: 'Book on WhatsApp', v1d: 'Choose your therapy, day and time in one message.',
    v2h: 'Get your confirmation', v2d: 'We send your exact time and location.',
    v3h: 'Message us on arrival', v3d: 'One text and we meet you at the entrance.',
    v4h: 'Your therapy', v4d: 'Go straight to your room, no waiting.',
    visNote: 'So you never wait outside: message us on WhatsApp when you arrive and a team member will meet you at the entrance at your appointment time.',
    revLabel: 'Reviews', revLink: 'Read all reviews on Google', prev: 'Previous', next: 'Next',
    r1q: '“Excellent service and great prices. The massage package is completely worth it.”', r1t: 'Packages',
    r2q: '“I had lymphatic drainage after my surgery and my recovery was so much better. Very professional.”', r2t: 'Post-surgery',
    r3q: '“The therapists really know what they’re doing. No back pain for the first time in months.”', r3t: 'Therapeutic',
    r4q: '“Calm atmosphere, kind staff and fair prices. I’ll be back.”', r4t: 'Service',
    locLabel: 'Hours & location', locTitle: 'Find us <i>downtown</i>',
    hoursL: 'HOURS', hours: 'Every day · 9:00 a.m. – 8:00 p.m.', addrL: 'ADDRESS', phoneL: 'PHONE',
    directions: 'Get directions', facade: 'This is our entrance as seen from the avenue.',
    motto: 'The essence of your well-being'
  };

  var MSG = {
    es: {
      msg: 'Hola, me gustaría agendar una cita.',
      msgPost: 'Hola, me interesa un paquete de masaje postoperatorio.',
      info: 'Hola, me gustaría más información sobre ',
      pkg: 'Hola, me interesa el paquete '
    },
    en: {
      msg: 'Hi, I’d like to book an appointment.',
      msgPost: 'Hi, I’m interested in a post-surgery massage package.',
      info: 'Hi, I’d like more information about ',
      pkg: 'Hi, I’m interested in the package '
    }
  };

  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  // Capture Spanish from the markup.
  var ES = {};
  $$('[data-i18n]').forEach(function (el) {
    var k = el.getAttribute('data-i18n');
    if (!(k in ES)) ES[k] = el.innerHTML;
  });
  $$('[data-i18n-aria]').forEach(function (el) {
    ES[el.getAttribute('data-i18n-aria')] = el.getAttribute('aria-label');
  });
  var DICT = { es: ES, en: EN };
  var text = function (lang, k) {
    var d = document.createElement('div');
    d.innerHTML = DICT[lang][k] || ES[k] || '';
    return d.textContent;
  };

  function setLang(lang) {
    if (!DICT[lang]) lang = 'es';
    var dict = DICT[lang];
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.innerHTML = v;
    });
    $$('[data-i18n-aria]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-aria')];
      if (v != null) el.setAttribute('aria-label', v);
    });
    $$('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    var m = MSG[lang];
    $$('[data-wa]').forEach(function (a) { a.href = wa(m[a.getAttribute('data-wa')]); });
    $$('[data-wa-info]').forEach(function (a) { a.href = wa(m.info + text(lang, a.getAttribute('data-wa-info')) + '.'); });
    $$('[data-wa-pkg]').forEach(function (a) { a.href = wa(m.pkg + text(lang, a.getAttribute('data-wa-pkg')) + '.'); });
    try { localStorage.setItem('tw-lang', lang); } catch (e) { /* storage unavailable */ }
  }

  $$('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });

  var initial = 'es';
  var q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'es') initial = q;
  else {
    try { initial = localStorage.getItem('tw-lang') || 'es'; } catch (e) { /* storage unavailable */ }
  }
  setLang(initial);

  // Therapy tabs
  var tabs = $$('.tab');
  function selectTab(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { selectTab(tab); });
    tab.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      selectTab(tabs[(i + d + tabs.length) % tabs.length], true);
    });
  });

  // Reviews carousel
  var track = document.getElementById('reviews-track');
  $$('[data-scroll]').forEach(function (b) {
    b.addEventListener('click', function () {
      var card = track.firstElementChild;
      var w = card ? card.getBoundingClientRect().width + 18 : 300;
      track.scrollBy({ left: Number(b.getAttribute('data-scroll')) * w, behavior: 'smooth' });
    });
  });

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Motion: botanical lines draw like ink, sections fade in, the flower opens.
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js-motion');
  var ease = 'cubic-bezier(.33,0,.2,1)';

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      io.unobserve(el);
      if (el.hasAttribute('data-draw')) {
        $$('path', el).forEach(function (p, i) {
          p.style.transition = 'stroke-dashoffset 2.2s ' + ease + ' ' + (i * 0.22) + 's';
          p.style.strokeDashoffset = '0';
        });
      } else {
        el.classList.remove('is-hidden');
      }
    });
  }, { threshold: 0.12 });

  $$('[data-draw]').forEach(function (svg) {
    $$('path', svg).forEach(function (p) { p.style.strokeDasharray = '1'; p.style.strokeDashoffset = '1'; });
    io.observe(svg);
  });
  $$('[data-reveal]').forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    el.classList.add('is-hidden');
    io.observe(el);
  });

  var petals = $$('[data-bloom] ellipse');
  petals.forEach(function (p) {
    p.style.transformOrigin = '0px 0px';
    p.style.transform = 'scale(.25)';
    p.style.opacity = '0';
  });
  requestAnimationFrame(function () {
    setTimeout(function () {
      petals.forEach(function (p, i) {
        p.style.transition = 'transform 1.8s ' + ease + ' ' + (i * 0.12) + 's, opacity 1.2s ' + ease + ' ' + (i * 0.12) + 's';
        p.style.transform = 'scale(1)';
        p.style.opacity = '1';
      });
    }, 150);
  });
})();
