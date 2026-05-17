# LocalBoost Digital — Landing Portfolio

Landing page premium bilingue (FR/EN) — Studio web freelance spécialisé TPE & artisans.

## Caracteristiques

- **Light mode par défaut + dark mode toggle** persisté en localStorage
- **Bilingue FR / EN** — toggle nav, i18n complet (~120 clés par langue)
- **Hero refonte** — bicolonne avec photo profil en picture/srcset, badges réassurance, blobs SVG animés
- **Nouvelles sections** : Process (timeline 4 étapes) + FAQ accordéon (8 questions) + Contact refonte
- **Lightbox** au click sur les cartes réalisations (fade + scale)
- **Bouton WhatsApp flottant** (fixed bottom-right, pulse animé)
- **Formulaire contact** avec validation inline aria-invalid + honeypot anti-spam
- **Tarifs mis à jour** : 390€ / 590€ / 890€ (Essentiel / Pro / Premium)
- **Performance** — preload LCP image, picture srcset mobile/desktop, lazy loading, fetchpriority
- **SEO** — Schema.org ProfessionalService, title 60 chars, description 155 chars, OG/Twitter Cards
- **Accessibilité** — focus-visible jaune, touch targets 44px, ARIA complet, prefers-reduced-motion

## Structure

```
landing-portfolio/
├── index.html
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── profile.webp        (photo desktop)
│       ├── profile-mobile.webp (photo mobile)
│       └── ...
└── README.md
```

## Lancement local

```bash
cd landing-portfolio
python -m http.server 8004
```

Puis ouvrir http://localhost:8004

## Personnalisation rapide

- **Nom de marque** : "LocalBoost Digital" — déjà mis à jour partout
- **Tarifs** : section `.services-grid` dans `index.html`
- **Email** : `merouaninadir@gmail.com`
- **WhatsApp** : remplacer `33612345678` dans `index.html` (2 occurrences) et `main.js`
- **Calendly** : remplacer `https://calendly.com/localboost/15min`
- **Couleur principale** : `--accent: #F5C518` dans `styles.css`
- **Dark mode par défaut** : changer `data-theme="light"` en `data-theme="dark"` sur `<html>`

## Stack

- HTML5 sémantique (WAI-ARIA complet)
- CSS3 (Custom Properties, Grid, Flexbox, Backdrop-filter, dark mode)
- Vanilla JS (IntersectionObserver, i18n, lightbox, form validation)
- Google Fonts (Fraunces, Inter, JetBrains Mono) — chargement non-bloquant
- Plausible Analytics (RGPD-friendly, no cookies)
- Zero dépendance, zero framework

## Licence

Code privé — usage commercial réservé.
