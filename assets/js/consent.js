/* ============================================================
   Clicboost — Bandeau de consentement (cookies & mesure d'audience)
   Autonome : fonctionne sur toutes les pages (home + mentions).
   - Mémoire du choix : localStorage « cb-consent » (accepted | refused)
   - Plausible (mesure d'audience sans cookie) chargé UNIQUEMENT si accepté
   - Les préférences fonctionnelles (thème, langue) restent exemptées
   - Réouvrable via tout élément [data-cb-open-consent]
   ============================================================ */
(function () {
  'use strict';

  var KEY = 'cb-consent';
  var DOMAIN = 'clicboost.fr';

  var T = {
    fr: {
      title: 'Votre vie privée',
      body: 'Ce site utilise une mesure d’audience anonyme (sans cookie publicitaire, sans revente de données) et conserve vos préférences (thème, langue). Vous pouvez accepter ou refuser la mesure d’audience.',
      accept: 'Tout accepter',
      refuse: 'Refuser',
      more: 'En savoir plus',
      aria: 'Bandeau de consentement aux cookies'
    },
    en: {
      title: 'Your privacy',
      body: 'This site uses privacy-friendly, cookieless analytics (no ad cookies, no data resale) and remembers your preferences (theme, language). You can accept or decline analytics.',
      accept: 'Accept all',
      refuse: 'Decline',
      more: 'Learn more',
      aria: 'Cookie consent banner'
    }
  };

  function lang() {
    var l;
    try { l = localStorage.getItem('lang'); } catch (e) {}
    if (!l) l = (document.documentElement.lang || 'fr');
    return String(l).slice(0, 2) === 'en' ? 'en' : 'fr';
  }

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function write(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }

  var plausibleLoaded = false;
  function loadPlausible() {
    if (plausibleLoaded) return;
    plausibleLoaded = true;
    window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments); };
    var s = document.createElement('script');
    s.defer = true;
    s.setAttribute('data-domain', DOMAIN);
    s.src = 'https://plausible.io/js/script.outbound-links.tagged-events.js';
    document.head.appendChild(s);
  }

  var bannerEl = null;
  var lastFocus = null;

  function removeBanner() {
    if (!bannerEl) return;
    bannerEl.classList.remove('is-visible');
    var el = bannerEl;
    bannerEl = null;
    window.setTimeout(function () { if (el && el.parentNode) el.parentNode.removeChild(el); }, 350);
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} }
  }

  function decide(choice) {
    write(choice);
    if (choice === 'accepted') loadPlausible();
    removeBanner();
  }

  function buildBanner() {
    if (bannerEl) return;
    var t = T[lang()];
    lastFocus = document.activeElement;

    var wrap = document.createElement('div');
    wrap.className = 'cookie-consent';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-live', 'polite');
    wrap.setAttribute('aria-label', t.aria);

    var text = document.createElement('div');
    text.className = 'cookie-consent-text';
    var h = document.createElement('p');
    h.className = 'cookie-consent-title';
    h.textContent = t.title;
    var p = document.createElement('p');
    p.className = 'cookie-consent-body';
    p.textContent = t.body + ' ';
    var a = document.createElement('a');
    a.className = 'cookie-consent-link';
    a.href = 'mentions-legales.html#cookies';
    a.textContent = t.more;
    p.appendChild(a);
    text.appendChild(h);
    text.appendChild(p);

    var actions = document.createElement('div');
    actions.className = 'cookie-consent-actions';

    var refuse = document.createElement('button');
    refuse.type = 'button';
    refuse.className = 'cookie-consent-btn cookie-consent-refuse';
    refuse.textContent = t.refuse;
    refuse.addEventListener('click', function () { decide('refused'); });

    var accept = document.createElement('button');
    accept.type = 'button';
    accept.className = 'cookie-consent-btn cookie-consent-accept';
    accept.textContent = t.accept;
    accept.addEventListener('click', function () { decide('accepted'); });

    actions.appendChild(refuse);
    actions.appendChild(accept);

    wrap.appendChild(text);
    wrap.appendChild(actions);
    document.body.appendChild(wrap);
    bannerEl = wrap;

    // Fermeture au clavier (Échap = refuser, choix explicite requis mais on respecte l'utilisateur)
    wrap.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { decide('refused'); }
    });

    requestAnimationFrame(function () {
      wrap.classList.add('is-visible');
      try { accept.focus(); } catch (e) {}
    });
  }

  // Réouverture depuis le footer / n'importe quel [data-cb-open-consent]
  window.cbOpenConsent = function () { buildBanner(); };
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest ? e.target.closest('[data-cb-open-consent]') : null;
    if (trigger) { e.preventDefault(); buildBanner(); }
  });

  // Décision initiale
  var choice = read();
  if (choice === 'accepted') { loadPlausible(); return; }
  if (choice === 'refused') { return; }
  buildBanner();
})();
