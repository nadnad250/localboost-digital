/* ============================================
   CLICBOOST — Landing JS
   i18n · Dark mode · Magnetic · Tilt · Reveal
   Lightbox · FAQ · Contact form · WhatsApp
   ============================================ */

(() => {
  'use strict';

  /* ──────────────────────────────────────────────
     I18N (FR/EN)
     ────────────────────────────────────────────── */
  const I18N = {
    fr: {
      /* Meta */
      'meta.title': 'Clicboost — Site vitrine pour artisans, livré en 7 jours dès 390 EUR',
      'meta.desc': 'Studio web freelance. Création de sites vitrines pro pour artisans et TPE partout en France, livrés en 7 jours dès 390 €. SEO local ciblé. Devis gratuit sous 24h.',

      /* Brand */
      'brand.name': 'Clic',

      /* Nav */
      'nav.works': 'Réalisations',
      'nav.servicespage': 'Services',
      'nav.about': 'À propos',
      'nav.testi': 'Avis',
      'nav.services': 'Tarifs',
      'nav.contact': 'Contact',
      'nav.cta': 'Devis gratuit',

      /* Hero */
      'hero.eyebrow': 'Partout en France · 100% en ligne',
      'hero.badge1': 'Devis 24h',
      'hero.badge2': 'Sans engagement',
      'hero.badge3': 'Partout en France',
      'hero.h1.l1': 'Ton site vitrine',
      'hero.h1.em1': 'en 7 jours.',
      'hero.sub': 'Pour artisans et TPE partout en France. Devis gratuit sous 24h.',
      'hero.price.amount': 'À partir de 390 € TTC',
      'hero.price.terms': 'Paiement en 2× sans frais',
      'hero.cta1': 'Demander un devis gratuit',
      'hero.cta2': 'Voir 8 sites livrés',
      'hero.stat1': 'Sites livrés',
      'hero.stat2': 'Délai moyen',
      'hero.stat3': '4,9/5 sur Google',
      'hero.scroll': 'Défiler',
      'hero.photo.tag': '2 projets max ce mois-ci',
      'hero.showcase.badge': 'Livré en 7 jours',
      'hero.showcase.metric': 'de demandes de devis',
      'hero.avail': 'Disponible — 2 projets ce mois-ci',
      'hero.reply24': 'Réponse sous 24h',
      'hero.wallstat1': '14 sites livrés',
      'hero.wallstat2': 'Délai moyen 7 jours',

      /* Works */
      'works.title.l1': 'Réalisations',
      'works.title.l2': 'récentes',
      'works.sub': 'Huit secteurs. Huit identités visuelles. Une même exigence.',
      'work.view': 'Voir le site',
      'work.view.live': 'Voir le site live →',

      /* Filtres */
      'filter.all': 'Tous',
      'filter.artisan': 'Artisanat',
      'filter.services': 'Services Pros',
      'filter.wellness': 'Bien-être',
      'filter.commerce': 'Commerce',
      'filter.health': 'Santé',

      /* Work cards — descriptions */
      'work.av.tag1': 'Électricien',
      'work.av.tag2': 'Versailles',
      'work.av.metric': '+47% demandes',
      'work.av.desc': "Olivier perdait des chantiers parce qu'il ratait des appels en intervention. Son site capture maintenant les devis 24h/24, sans qu'il décroche.",
      'work.av.result': '+40% de demandes de devis via Google en 3 mois',

      'work.pd.tag1': 'VTC Premium',
      'work.pd.tag2': 'Paris',
      'work.pd.metric': 'Réservation 60s',
      'work.pd.desc': "Un client haut de gamme te juge en 8 secondes. Hero vidéo cinéma, identité luxe, réservation en 3 clics. Le visiteur réserve.",
      'work.pd.result': '1ère réservation reçue 48h après mise en ligne',

      'work.me.tag1': 'Bien-être',
      'work.me.tag2': 'Paris 8e',
      'work.me.metric': 'Conversion ×2',
      'work.me.desc': "Audrey perdait 7 visiteurs sur 10 avant qu'ils voient ses prestations. Refonte éditoriale, vidéo immersive, RDV en ligne.",
      'work.me.result': 'Taux de remplissage planning +35% en 2 mois',

      'work.ap.tag1': 'Plombier 24/7',
      'work.ap.tag2': 'Paris',
      'work.ap.metric': '#1 Google',
      'work.ap.desc': "Une fuite à 23h, ton client veut juste appeler vite. Bouton d'urgence permanent, fiches par arrondissement, position #1 sur Google.",
      'work.ap.result': "#1 sur 'plombier 24h Paris' depuis 4 mois",

      'work.cl.tag1': 'Céramique',
      'work.cl.tag2': 'Showroom Paris',
      'work.cl.metric': 'Trafic ×4',
      'work.cl.desc': "Un showroom artisanal noyé sous les géants e-commerce. Design éditorial qui présente chaque pièce comme dans un musée.",
      'work.cl.result': 'Trafic Google multiplié par 4 en 6 mois',

      'work.vc.tag1': 'Clinique vétérinaire',
      'work.vc.tag2': 'Paris 11e',
      'work.vc.tag3': 'Nouveau',
      'work.vc.metric': 'Trilingue · 4,9/5',
      'work.vc.desc': "Camille voulait faciliter les RDV et accueillir une clientèle internationale. Site en français, anglais et espagnol, RDV en 2 minutes, urgences 7j/7.",
      'work.vc.result': '230 RDV pris en ligne le 1er mois, multilingue actif',

      'work.mt.tag1':   'Coach sportif',
      'work.mt.tag2':   'Paris 8e',
      'work.mt.tag3':   'Nouveau',
      'work.mt.metric': '+12 clients en file',
      'work.mt.desc':   "Max voulait un site qui pré-qualifie ses prospects avant le premier appel. Typo massive, garantie résultats affichée, formulaire intégré. Plus de coaching, moins de SAV téléphonique.",
      'work.mt.result': "87 avis Google 4,9/5 · file d'attente pleine en 2 mois",

      'work.mo.tag1':   'Salon coiffure',
      'work.mo.tag2':   'Lyon 2ᵉ',
      'work.mo.tag3':   'Nouveau',
      'work.mo.metric': 'Éditorial premium',
      'work.mo.desc':   "Salon mixte au cœur de Lyon — Sofia voulait un site éditorial qui reflète la qualité du travail. Hero vidéo, galerie filtrée par type de coupe, carousel avis Google, formulaire RDV qui pré-qualifie.",
      'work.mo.result': "Tarif moyen ×1,4 en 3 mois · Réservations en ligne ×3",

      /* Témoignages */
      'testi.title.l1': 'Ils ont',
      'testi.title.l2': 'aimé',
      'testi.title.l3': 'travailler avec moi.',
      'testi.sub': "Cinq clients, cinq histoires. Voici ce qu'ils en disent.",
      'testi.google': 'Note moyenne 4,9/5 sur Google',
      'ctabar.cta': 'Devis gratuit — réponse 24h',
      'testi.t1.quote': "« Mon site rapporte 3 fois plus de devis qu'avant. Le rendu est plus pro que ce que j'avais avec mon ancienne agence à 3 000 €. »",
      'testi.t1.name': 'Thomas Berger',
      'testi.t1.role': 'Gérant Artisan Volt',
      'testi.t1.city': 'Versailles',
      'testi.t2.quote': "« Mes clients commentent la qualité du site dès le 1er trajet. Un autre standing pour mon entreprise — et ça se voit sur les réservations. »",
      'testi.t2.name': 'Karim Benali',
      'testi.t2.role': 'Fondateur Prestige Drive',
      'testi.t2.city': 'Paris',
      'testi.t3.quote': "« Le site reflète enfin mon univers. Mes réservations ont doublé en deux mois, et plusieurs clientes parlent directement du site en arrivant. »",
      'testi.t3.name': 'Sophie Marchand',
      'testi.t3.role': 'Praticienne Massage Évasion',
      'testi.t3.city': 'Paris 8e',
      'testi.t4.quote': "« Le téléphone n'arrête plus depuis la mise en ligne. ROI atteint en 3 semaines — je ne regrette pas l'investissement. »",
      'testi.t4.name': 'Driss El Amrani',
      'testi.t4.role': 'Gérant AquaPro Plomberie',
      'testi.t4.city': 'Paris',
      'testi.t5.quote': "« Design éditorial sublime, exactement ce que je voulais. Les visites en showroom ont triplé depuis la mise en ligne. »",
      'testi.t5.name': 'Élodie Vasseur',
      'testi.t5.role': 'Directrice Storehouse',
      'testi.t5.city': 'Paris',

      /* Services */
      'services.title.l1': 'Choisissez votre',
      'services.title.l2': 'formule',
      'services.sub': "Un site rapide, pensé pour l'expérience utilisateur et le SEO local ciblé — conçu pour transformer vos visiteurs en clients. Partout en France.",
      'services.stat.leads': 'de demandes de devis',
      'services.stat.delay': 'pour être en ligne',
      'services.stat.mobile': 'mobile & rapide',
      'services.stat.hidden': 'de frais caché',
      'addons.eyebrow': 'Après la mise en ligne',
      'addons.title': 'Faites vivre votre site',
      'addons.sub': "Restez visible, à jour et bien référencé. Services à la carte, cumulables avec toute formule — sans engagement, résiliables à tout moment.",
      'addons.group.month': 'Abonnements mensuels',
      'addons.group.oneoff': 'Options ponctuelles',
      'addons.permonth': '/mois',
      'addons.maint.name': 'Maintenance simple',
      'addons.maint.desc': 'Mises à jour, sauvegardes, sécurité et dépannage.',
      'addons.maintplus.name': 'Maintenance + modifications',
      'addons.maintplus.desc': 'Tout Maintenance, plus vos petites modifs de contenu chaque mois.',
      'addons.seo.name': 'SEO local ciblé',
      'addons.seo.desc': 'Remontez dans Google sur votre ville et vos mots-clés.',
      'addons.seo.range': 'à 249 €',
      'addons.gmb.name': 'Fiche Google Business',
      'addons.gmb.desc': 'Gestion de votre fiche : avis, photos, posts, horaires.',
      'addons.gmb.range': 'à 99 €',
      'addons.social.name': 'Visibilité réseaux sociaux',
      'addons.social.desc': 'Publications régulières pour rester présent et attirer des clients.',
      'addons.page.name': 'Page supplémentaire',
      'addons.page.desc': 'Une page en plus : services, galerie, blog, FAQ…',
      'addons.page.range': 'à 150 €',
      'addons.trad.name': 'Traduction FR / EN',
      'addons.trad.desc': 'Votre site en anglais, pro et naturel.',
      'addons.trad.range': 'à 250 €',
      'addons.cta': 'Composer mon offre sur mesure',
      'addons.note': 'Sans engagement · résiliable à tout moment',
      'services.trust.sites': 'sites livrés',
      'services.trust.deadline': 'tenus en délai',
      'services.trust.rating': '5/5 satisfaction',
      'sr.recommended': 'Formule recommandée : ',

      'services.p1.badge': 'Démarrage',
      'services.p1.name': 'Essentiel',
      'services.p1.tag': 'Site 1 page · livré en 7 jours',
      'services.p1.f1': 'Site 1 page (landing)',
      'services.p1.f2': 'Formulaire de contact',
      'services.p1.f3': '100% mobile responsive',
      'services.p1.f4': 'Mise en ligne sous 7 jours',
      'services.p1.cta': 'Choisir Essentiel',

      'services.p2.badge': 'Populaire',
      'services.p2.name': 'Pro',
      'services.p2.tag': 'Site multipage · livré en 7 jours',
      'services.p2.f1': 'Site multipage 5 sections',
      'services.p2.f2': 'SEO local optimisé Google',
      'services.p2.f3': 'Fiche Google My Business',
      'services.p2.f4': 'Hébergement 1ère année offerte',
      'services.p2.f5': 'Formulaire + bouton WhatsApp',
      'services.p2.cta': 'Choisir Pro',
      'services.p2.guarantee': 'Devis gratuit sous 24h · Sans engagement',
      'services.pay2x': 'Paiement en 2× sans frais',

      'services.p3.badge': 'Tout inclus',
      'services.p3.name': 'Premium',
      'services.p3.tag': 'Pro + animations + maintenance',
      'services.p3.f1': 'Tout Pro inclus',
      'services.p3.f2': 'Animations sur mesure',
      'services.p3.f3': 'Multilingue FR/EN',
      'services.p3.f4': 'Module blog intégré',
      'services.p3.f5': 'Maintenance 3 mois incluse',
      'services.p3.cta': 'Choisir Premium',


      /* Process */
      'process.title.l1': 'Comment on travaille',
      'process.title.l2': 'ensemble',
      'process.sub': '4 étapes claires, de l\'échange initial à la mise en ligne.',
      'process.s1.time': 'Brief gratuit (Jour 1)',
      'process.s1.title': 'Brief gratuit',
      'process.s1.text': "On échange 15 min sur ton projet, je te livre un plan. Même si on ne bosse pas ensemble, tu repars avec des pistes concrètes.",
      'process.s2.time': 'Maquette (Jour 2-3)',
      'process.s2.title': 'Maquette',
      'process.s2.text': "Tu vois ton futur site en taille réelle, on ajuste ensemble. Pas de « tu verras à la fin », tu valides avant qu'on code.",
      'process.s3.time': 'Développement (Jour 4-6)',
      'process.s3.title': 'Développement',
      'process.s3.text': "Je code ton site avec ton contenu validé. HTML sémantique, CSS optimisé, performances natives. Aucune dépendance inutile.",
      'process.s4.time': 'Mise en ligne (Jour 7)',
      'process.s4.title': 'Mise en ligne',
      'process.s4.text': "Site live, formation 30 min pour le mettre à jour seul. Tu n'es jamais bloqué sur quelqu'un d'autre pour modifier un texte.",

      /* FAQ */
      'faq.title.l1': 'Questions',
      'faq.title.l2': 'fréquentes',
      'faq.q1': 'En combien de temps mon site sera-t-il en ligne ?',
      'faq.a1': 'Ton site est en ligne en 7 jours calendaires après validation de la maquette. Pour la formule Essentiel, c\'est même souvent moins. Le délai commence dès que tu me fournis ton contenu (textes, logo, photos).',
      'faq.q2': 'Comment se passe le paiement ?',
      'faq.a2': '50% à la commande, 50% à la livraison. Tu peux aussi payer en 2× sans frais sur toutes les formules. Virement bancaire ou PayPal acceptés.',
      'faq.q3': "Qui s'occupe de l'hébergement et du nom de domaine ?",
      'faq.a3': "Je m'occupe de tout. L'hébergement 1ère année est offert sur les formules Pro et Premium. Le nom de domaine peut être fourni par toi ou acheté pour toi. À partir de la 2ème année, l'hébergement revient à environ 5€/mois.",
      'faq.q4': 'Puis-je modifier mon site moi-même après la livraison ?',
      'faq.a4': 'Oui, une formation de 30 minutes est incluse dans chaque formule. Tu apprends à modifier tes textes, tes images et tes coordonnées sans toucher au code. Tu restes autonome.',
      'faq.q5': 'Est-ce que le site sera visible sur Google ?',
      'faq.a5': 'Tous mes sites sont optimisés pour le SEO local dès la livraison : balises meta, Schema.org, sitemap, Google My Business (Pro et Premium). Tes clients te trouvent quand ils cherchent ton métier dans ta ville.',
      'faq.q6': 'Mon site sera-t-il adapté aux mobiles ?',
      'faq.a6': 'Oui, tous mes sites sont conçus en mobile-first. Ils s\'adaptent parfaitement à tous les écrans : smartphone, tablette, ordinateur. 60% de tes visiteurs arrivent sur mobile — c\'est ma priorité numéro 1.',
      'faq.q7': 'Que se passe-t-il si je veux changer quelque chose après la mise en ligne ?',
      'faq.a7': 'Les petites modifications (texte, photo, horaire) sont comprises pendant 1 mois après livraison. Au-delà, je facture 40€/heure. La formule Premium inclut 3 mois de maintenance complète.',
      'faq.q8': 'À qui appartient le site une fois livré ?',
      'faq.a8': 'Le site t\'appartient à 100% dès la livraison et le paiement final. Tu reçois tous les accès (hébergement, domaine, code source). Aucun abonnement mensuel caché.',

      /* Contact */
      'contact.title.l1': 'Parlons de',
      'contact.title.l2': 'votre projet',
      'contact.sub': 'Devis gratuit sous 24h. Sans engagement.',
      'contact.alts.title': 'Ou contactez-moi directement',
      'contact.alt.email.label': 'Email direct',
      'contact.alt.phone.label': 'Téléphone',
      'contact.alt.wa.label': 'WhatsApp',
      'contact.alt.wa.text': 'Réponse rapide',
      'contact.alt.cal.label': 'Appel découverte',
      'contact.alt.cal.text': '15 min — Calendly',

      /* Formulaire */
      'form.label.name': 'Votre nom *',
      'form.label.email': 'Votre email *',
      'form.label.phone': 'Téléphone',
      'form.label.plan': 'Type de projet',
      'form.label.message': 'Votre projet *',
      'form.plan.choose': 'Choisir une formule',
      'services.ttc': 'TTC',
      'form.plan.essentiel': 'Essentiel — 390 €',
      'form.plan.pro': 'Pro — 590 €',
      'form.plan.premium': 'Premium — 890 €',
      'form.plan.custom': 'Sur-mesure',
      'form.submit': 'Recevoir mon devis gratuit',
      'form.reassure': '✓ Gratuit · ✓ Réponse sous 24h · ✓ Sans engagement',
      'form.success.title': 'Message envoyé !',
      'form.success.text': 'Je vous recontacte sous 24h avec votre devis gratuit.',
      'form.error.required': 'Ce champ est obligatoire.',
      'form.error.email': 'Adresse email invalide.',

      /* À propos */
      'about.eyebrow': 'Partout en France · 100% en ligne',
      'about.title': 'Ton site ramène des clients. En 7 jours, livré.',
      'about.sub': "Les agences te vendent un projet. Wix te vend un template. Ici, tu parles directement à celui qui conçoit et livre ton site — un site qui charge en moins de 2 secondes et capte l'attention avant que le visiteur parte.",
      'about.stat1.value': '12',
      'about.stat1.label': 'clients servis',
      'about.stat2.value': '100%',
      'about.stat2.label': 'délais respectés',
      'about.stat3.value': '4,9/5',
      'about.stat3.label': 'avis Google',
      'about.trait1': 'Ton site est prêt en 7 jours',
      'about.trait2': 'Charge en moins de 2 secondes',
      'about.trait3': 'Tu parles au créateur, pas à un commercial',
      'about.photo.tag': 'Disponible · Partout en France',
      'about.photo.card': 'Satisfaction clients',

      /* Footer */
      'footer.tag': 'Studio indépendant · Partout en France',
      'footer.rights': 'Tous droits réservés',
      'footer.legal': 'Mentions légales',
      'footer.cookies': 'Gestion des cookies',
      'footer.legalid': 'EI Merouani — SIRET 10720502300016',
      'footer.avail': 'Disponible 2 projets ce mois-ci · Partout en France',
      'footer.response': 'Réponse sous 24h',
    },

    en: {
      /* Meta */
      'meta.title': 'Clicboost — Professional showcase website for tradespeople, delivered in 7 days from £390',
      'meta.desc': 'Freelance web studio. Professional showcase websites for tradespeople and SMEs across France, delivered in 7 days from EUR 390. Targeted local SEO. Free quote within 24h.',

      /* Brand */
      'brand.name': 'Clic',

      /* Nav */
      'nav.works': 'Work',
      'nav.servicespage': 'Services',
      'nav.about': 'About',
      'nav.testi': 'Reviews',
      'nav.services': 'Pricing',
      'nav.contact': 'Contact',
      'nav.cta': 'Free quote',

      /* Hero */
      'hero.eyebrow': 'Across France · 100% online',
      'hero.badge1': 'Quote in 24h',
      'hero.badge2': 'No commitment',
      'hero.badge3': 'Across France',
      'hero.h1.l1': 'Your business website',
      'hero.h1.em1': 'in 7 days.',
      'hero.sub': 'For tradespeople and SMBs across France. Free quote within 24h.',
      'hero.price.amount': 'From €390 incl. VAT',
      'hero.price.terms': 'Pay in 2× at no extra cost',
      'hero.cta1': 'Request a free quote',
      'hero.cta2': 'See 8 live sites',
      'hero.stat1': 'Sites delivered',
      'hero.stat2': 'Avg. delivery',
      'hero.stat3': '4.9/5 on Google',
      'hero.scroll': 'Scroll',
      'hero.photo.tag': '2 projects max this month',
      'hero.showcase.badge': 'Delivered in 7 days',
      'hero.showcase.metric': 'more quote requests',
      'hero.avail': 'Available — 2 project slots this month',
      'hero.reply24': 'Reply within 24h',
      'hero.wallstat1': '14 sites delivered',
      'hero.wallstat2': '7-day average delivery',

      /* Works */
      'works.title.l1': 'Recent',
      'works.title.l2': 'work',
      'works.sub': 'Eight sectors. Eight identities. One same demand.',
      'work.view': 'View site',
      'work.view.live': 'View live site →',

      /* Filtres */
      'filter.all': 'All',
      'filter.artisan': 'Crafts',
      'filter.services': 'Pro Services',
      'filter.wellness': 'Wellness',
      'filter.commerce': 'Commerce',
      'filter.health': 'Health',

      /* Work cards */
      'work.av.tag1': 'Electrician',
      'work.av.tag2': 'Versailles',
      'work.av.metric': '+47% leads',
      'work.av.desc': "Olivier was losing jobs because he kept missing calls. His site now captures quote requests 24/7 without him picking up.",
      'work.av.result': '+40% quote requests via Google in 3 months',

      'work.pd.tag1': 'Premium VTC',
      'work.pd.tag2': 'Paris',
      'work.pd.metric': 'Booking in 60s',
      'work.pd.desc': "A luxury client judges you in 8 seconds. Cinematic hero, luxe identity, booking in 3 clicks. Visitors book.",
      'work.pd.result': '1st booking received 48h after launch',

      'work.me.tag1': 'Wellness',
      'work.me.tag2': 'Paris 8th',
      'work.me.metric': 'Conversion ×2',
      'work.me.desc': "Audrey was losing 7 out of 10 visitors. Editorial redesign, immersive video, online booking. Visitors stay and book.",
      'work.me.result': 'Diary fill rate +35% in 2 months',

      'work.ap.tag1': 'Plumber 24/7',
      'work.ap.tag2': 'Paris',
      'work.ap.metric': '#1 Google',
      'work.ap.desc': "A leak at 11 PM — your client just wants to call fast. Emergency button, district pages, #1 on Google.",
      'work.ap.result': "#1 for 'plumber 24h Paris' for 4 months",

      'work.cl.tag1': 'Ceramics',
      'work.cl.tag2': 'Paris showroom',
      'work.cl.metric': 'Traffic ×4',
      'work.cl.desc': "An artisan showroom drowning under e-commerce giants. Editorial design that presents each piece like a museum exhibit.",
      'work.cl.result': 'Google traffic multiplied by 4 in 6 months',

      'work.vc.tag1': 'Veterinary clinic',
      'work.vc.tag2': 'Paris 11th',
      'work.vc.tag3': 'New',
      'work.vc.metric': 'Trilingual · 4.9/5',
      'work.vc.desc': "Camille wanted to streamline bookings and welcome international clients. Site in French, English and Spanish, 2-minute booking.",
      'work.vc.result': '230 online bookings in first month, multilingual active',

      'work.mt.tag1':   'Personal trainer',
      'work.mt.tag2':   'Paris 8th',
      'work.mt.tag3':   'New',
      'work.mt.metric': '+12 clients waitlist',
      'work.mt.desc':   "Max wanted a site that pre-qualifies prospects before the first call. Bold typography, results guarantee on display, integrated booking. More coaching, less phone screening.",
      'work.mt.result': "87 Google reviews 4.9/5 · waitlist full within 2 months",

      'work.mo.tag1':   'Hair salon',
      'work.mo.tag2':   'Lyon 2nd',
      'work.mo.tag3':   'New',
      'work.mo.metric': 'Editorial premium',
      'work.mo.desc':   "Unisex salon in central Lyon — Sofia wanted an editorial site reflecting craftsmanship. Hero video, cut-style filtered gallery, Google reviews carousel, booking form that pre-qualifies leads.",
      'work.mo.result': "Average ticket ×1.4 in 3 months · Online bookings ×3",

      /* Testimonials */
      'testi.title.l1': 'They loved',
      'testi.title.l2': 'working',
      'testi.title.l3': 'with me.',
      'testi.sub': 'Five clients, five stories. Here\'s what they say.',
      'testi.google': 'Average rating 4.9/5 on Google',
      'ctabar.cta': 'Free quote — 24h reply',
      'testi.t1.quote': '« My site brings in 3× more quotes than before. The result is more polished than my previous €3,000 agency. »',
      'testi.t1.name': 'Thomas Berger',
      'testi.t1.role': 'Owner Artisan Volt',
      'testi.t1.city': 'Versailles',
      'testi.t2.quote': '« My clients comment on the website quality during their very first ride. A whole new standing for my business. »',
      'testi.t2.name': 'Karim Benali',
      'testi.t2.role': 'Founder Prestige Drive',
      'testi.t2.city': 'Paris',
      'testi.t3.quote': '« The site finally reflects my world. Bookings doubled in two months, and several clients mention it the moment they arrive. »',
      'testi.t3.name': 'Sophie Marchand',
      'testi.t3.role': 'Therapist Massage Évasion',
      'testi.t3.city': 'Paris 8th',
      'testi.t4.quote': '« My phone hasn\'t stopped ringing since launch. ROI reached in 3 weeks — no regrets. »',
      'testi.t4.name': 'Driss El Amrani',
      'testi.t4.role': 'Owner AquaPro Plomberie',
      'testi.t4.city': 'Paris',
      'testi.t5.quote': '« Stunning editorial design — exactly what I wanted. Showroom visits tripled since launch. »',
      'testi.t5.name': 'Élodie Vasseur',
      'testi.t5.role': 'Director Storehouse',
      'testi.t5.city': 'Paris',

      /* Services */
      'services.title.l1': 'Choose your',
      'services.title.l2': 'package',
      'services.sub': 'A fast website, built for user experience and targeted local SEO — designed to turn your visitors into customers. Anywhere in France.',
      'services.stat.leads': 'more quote requests',
      'services.stat.delay': 'to go live',
      'services.stat.mobile': 'mobile & fast',
      'services.stat.hidden': 'hidden fees',
      'addons.eyebrow': 'After going live',
      'addons.title': 'Keep your site alive',
      'addons.sub': 'Stay visible, up to date and well ranked. À la carte services, combinable with any package — no commitment, cancel anytime.',
      'addons.group.month': 'Monthly plans',
      'addons.group.oneoff': 'One-off options',
      'addons.permonth': '/mo',
      'addons.maint.name': 'Basic maintenance',
      'addons.maint.desc': 'Updates, backups, security and troubleshooting.',
      'addons.maintplus.name': 'Maintenance + edits',
      'addons.maintplus.desc': 'All of Maintenance, plus your small content edits every month.',
      'addons.seo.name': 'Targeted local SEO',
      'addons.seo.desc': 'Rank higher on Google for your city and keywords.',
      'addons.seo.range': 'to €249',
      'addons.gmb.name': 'Google Business profile',
      'addons.gmb.desc': 'We manage your profile: reviews, photos, posts, hours.',
      'addons.gmb.range': 'to €99',
      'addons.social.name': 'Social media visibility',
      'addons.social.desc': 'Regular posts to stay present and attract customers.',
      'addons.page.name': 'Extra page',
      'addons.page.desc': 'One more page: services, gallery, blog, FAQ…',
      'addons.page.range': 'to €150',
      'addons.trad.name': 'FR / EN translation',
      'addons.trad.desc': 'Your site in English, professional and natural.',
      'addons.trad.range': 'to €250',
      'addons.cta': 'Build my custom offer',
      'addons.note': 'No commitment · cancel anytime',
      'services.trust.sites': 'sites delivered',
      'services.trust.deadline': 'on time',
      'services.trust.rating': '5/5 satisfaction',
      'sr.recommended': 'Recommended package: ',

      'services.p1.badge': 'Starter',
      'services.p1.name': 'Essential',
      'services.p1.tag': 'One-page site · delivered in 7 days',
      'services.p1.f1': 'One-page site (landing)',
      'services.p1.f2': 'Contact form',
      'services.p1.f3': '100% mobile responsive',
      'services.p1.f4': 'Live within 7 days',
      'services.p1.cta': 'Choose Essential',

      'services.p2.badge': 'Popular',
      'services.p2.name': 'Pro',
      'services.p2.tag': 'Multi-page site · delivered in 7 days',
      'services.p2.f1': 'Multi-page site — 5 sections',
      'services.p2.f2': 'Local Google SEO optimised',
      'services.p2.f3': 'Google My Business listing',
      'services.p2.f4': '1st year hosting included',
      'services.p2.f5': 'Form + WhatsApp button',
      'services.p2.cta': 'Choose Pro',
      'services.p2.guarantee': 'Free quote within 24h · No commitment',
      'services.pay2x': 'Pay in 2× at no extra cost',

      'services.p3.badge': 'All inclusive',
      'services.p3.name': 'Premium',
      'services.p3.tag': 'Pro + animations + maintenance',
      'services.p3.f1': 'Everything in Pro',
      'services.p3.f2': 'Custom animations',
      'services.p3.f3': 'Bilingual FR/EN',
      'services.p3.f4': 'Integrated blog module',
      'services.p3.f5': '3 months maintenance included',
      'services.p3.cta': 'Choose Premium',


      /* Process */
      'process.title.l1': 'How we work',
      'process.title.l2': 'together',
      'process.sub': '4 clear steps, from initial chat to launch.',
      'process.s1.time': 'Free brief (Day 1)',
      'process.s1.title': 'Free brief',
      'process.s1.text': "We spend 15 min on your project. You leave with a clear plan — even if we don't end up working together.",
      'process.s2.time': 'Mockup (Days 2-3)',
      'process.s2.title': 'Mockup',
      'process.s2.text': "You see your future site full-size, real content. You validate before we code. No 'wait until the end' moments.",
      'process.s3.time': 'Development (Days 4-6)',
      'process.s3.title': 'Development',
      'process.s3.text': "I build your site with your validated content. Semantic HTML, optimised CSS, native performance. No bloat.",
      'process.s4.time': 'Launch (Day 7)',
      'process.s4.title': 'Launch',
      'process.s4.text': "Site live, 30-min training so you can update it yourself. You're never locked in to someone else.",

      /* FAQ */
      'faq.title.l1': 'Frequently asked',
      'faq.title.l2': 'questions',
      'faq.q1': 'How soon will my site go live?',
      'faq.a1': 'Your site is live within 7 calendar days after mockup approval. For the Essential plan, it\'s often sooner. The clock starts when you provide your content (text, logo, photos).',
      'faq.q2': 'How does payment work?',
      'faq.a2': '50% upfront, 50% on delivery. You can also split into 2 equal instalments at no extra cost. Bank transfer or PayPal accepted.',
      'faq.q3': 'Who handles hosting and the domain name?',
      'faq.a3': 'I take care of everything. The first year of hosting is free on Pro and Premium plans. The domain can be yours or I can buy one for you. From year 2, hosting is around €5/month.',
      'faq.q4': 'Can I edit my site myself after delivery?',
      'faq.a4': 'Yes — a 30-minute training session is included in every plan. You\'ll learn to update text, images and contact details without touching code. You stay independent.',
      'faq.q5': 'Will my site show up on Google?',
      'faq.a5': 'All my sites are optimised for local SEO from day one: meta tags, Schema.org, sitemap, Google My Business (Pro & Premium). Your clients find you when they search for your trade in your city.',
      'faq.q6': 'Will my site work on mobile?',
      'faq.a6': 'Yes — all my sites are designed mobile-first. They adapt perfectly to every screen: smartphone, tablet, desktop. 60% of your visitors come from mobile — that\'s my top priority.',
      'faq.q7': 'What if I want to change something after launch?',
      'faq.a7': 'Small edits (text, photo, hours) are covered for 1 month after delivery. Beyond that, I charge €40/hour. The Premium plan includes 3 full months of maintenance.',
      'faq.q8': 'Who owns the site once it\'s delivered?',
      'faq.a8': 'You own 100% of the site from day one of final delivery. You receive all access credentials (hosting, domain, source code). No hidden monthly subscription.',

      /* Contact */
      'contact.title.l1': "Let's talk about",
      'contact.title.l2': 'your project',
      'contact.sub': 'Free quote in 24h. No commitment.',
      'contact.alts.title': 'Or reach out directly',
      'contact.alt.email.label': 'Direct email',
      'contact.alt.phone.label': 'Phone',
      'contact.alt.wa.label': 'WhatsApp',
      'contact.alt.wa.text': 'Fast reply',
      'contact.alt.cal.label': 'Discovery call',
      'contact.alt.cal.text': '15 min — Calendly',

      /* Form */
      'form.label.name': 'Your name *',
      'form.label.email': 'Your email *',
      'form.label.phone': 'Phone',
      'form.label.plan': 'Project type',
      'form.label.message': 'Your project *',
      'form.plan.choose': 'Choose a plan',
      'services.ttc': 'incl. VAT',
      'form.plan.essentiel': 'Essential — €390',
      'form.plan.pro': 'Pro — €590',
      'form.plan.premium': 'Premium — €890',
      'form.plan.custom': 'Custom',
      'form.submit': 'Get my free quote',
      'form.reassure': '✓ Free · ✓ Reply within 24h · ✓ No commitment',
      'form.success.title': 'Message sent!',
      'form.success.text': 'I\'ll get back to you within 24h with your free quote.',
      'form.error.required': 'This field is required.',
      'form.error.email': 'Invalid email address.',

      /* About */
      'about.eyebrow': 'Across France · 100% online',
      'about.title': 'A site that brings in clients. Delivered in 7 days.',
      'about.sub': "Agencies sell you a project. Wix sells you a template. Here you talk directly to the person designing and building your site — one that loads in under 2 seconds.",
      'about.stat1.value': '12',
      'about.stat1.label': 'clients served',
      'about.stat2.value': '100%',
      'about.stat2.label': 'deadlines met',
      'about.stat3.value': '4.9/5',
      'about.stat3.label': 'Google reviews',
      'about.trait1': 'Your site live in 7 days',
      'about.trait2': 'Loads in under 2 seconds',
      'about.trait3': 'You talk to the builder, not a sales rep',
      'about.photo.tag': 'Available · Across France',
      'about.photo.card': 'Client satisfaction',

      /* Footer */
      'footer.tag': 'Independent studio · Across France',
      'footer.rights': 'All rights reserved',
      'footer.legal': 'Legal notice',
      'footer.cookies': 'Cookie settings',
      'footer.legalid': 'Sole trader Merouani — SIRET 10720502300016',
      'footer.avail': 'Available 2 projects this month · Across France',
      'footer.response': 'Response within 24h',
    }
  };

  /* ── Appliquer la langue ── */
  const getLang = () => localStorage.getItem('lang') || (navigator.language.startsWith('en') ? 'en' : 'fr');

  const applyLang = (lang) => {
    const dict = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;
    document.title = dict['meta.title'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict['meta.desc']);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      const isOn = btn.dataset.lang === lang;
      btn.classList.toggle('on', isOn);
      btn.setAttribute('aria-pressed', String(isOn));
    });

    localStorage.setItem('lang', lang);
  };

  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  applyLang(getLang());

  /* ──────────────────────────────────────────────
     DARK MODE TOGGLE — persisté localStorage
     ────────────────────────────────────────────── */
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');

  const getTheme = () => {
    const stored = localStorage.getItem('lb-theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (theme) => {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('lb-theme', theme);
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
      themeToggle.setAttribute('aria-label',
        theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre');
    }
  };

  applyTheme(getTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ──────────────────────────────────────────────
     MAX WOW — BACKGROUND 3D PARALLAX (mouse-tracking)
     La scène 3D tilt subtilement selon la position souris
     via custom props CSS --mx et --my (en %).
     Off sur touch + reduced-motion.
     ────────────────────────────────────────────── */
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (supportsHover && !prefersReducedMotion) {
    const bg3dScene = document.querySelector('.bg-3d-scene');
    if (bg3dScene) {
      let pendingRAF = null;
      let targetMx = 50, targetMy = 50;
      let currMx = 50, currMy = 50;

      /* Mouse → update target % */
      document.addEventListener('mousemove', (e) => {
        targetMx = (e.clientX / window.innerWidth)  * 100;
        targetMy = (e.clientY / window.innerHeight) * 100;
        if (!pendingRAF) pendingRAF = requestAnimationFrame(updateScene);
      }, { passive: true });

      /* Easing : interpolation linéaire douce vers cible */
      const updateScene = () => {
        currMx += (targetMx - currMx) * 0.06;
        currMy += (targetMy - currMy) * 0.06;
        bg3dScene.style.setProperty('--mx', currMx.toFixed(2) + '%');
        bg3dScene.style.setProperty('--my', currMy.toFixed(2) + '%');
        pendingRAF = null;
        /* Continue tant qu'on n'a pas atteint la cible */
        if (Math.abs(targetMx - currMx) > 0.1 || Math.abs(targetMy - currMy) > 0.1) {
          pendingRAF = requestAnimationFrame(updateScene);
        }
      };
    }
  }

  /* ──────────────────────────────────────────────
     MAX WOW — HERO PHOTO PARALLAX
     translateY = scroll * -0.2 via rAF
     Désactivé si prefers-reduced-motion
     ────────────────────────────────────────────── */
  const heroPhoto = document.querySelector('.hero-photo');
  /* Parallax désactivé sur mobile (<=480px) et touch — UX + perf */
  const isMobileViewport = window.matchMedia('(max-width: 480px)').matches;
  if (heroPhoto && !prefersReducedMotion && !isMobileViewport && supportsHover) {
    let heroScrollRAF = null;
    let heroScrollY   = 0;

    const updateHeroParallax = () => {
      /* Plafonne à la hauteur du hero pour éviter l'effet hors-zone */
      const heroEl    = document.getElementById('hero');
      const heroH     = heroEl ? heroEl.offsetHeight : window.innerHeight;
      const clampedY  = Math.min(window.scrollY, heroH);
      const parallax  = clampedY * -0.20;
      heroPhoto.style.transform = `translateY(${parallax}px)`;
      heroScrollRAF = null;
    };

    const onHeroScroll = () => {
      if (!heroScrollRAF) {
        heroScrollRAF = requestAnimationFrame(updateHeroParallax);
      }
    };

    /* Active uniquement quand le hero est visible (économie CPU) */
    const ioHero = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        window.addEventListener('scroll', onHeroScroll, { passive: true });
      } else {
        window.removeEventListener('scroll', onHeroScroll);
        if (heroScrollRAF) { cancelAnimationFrame(heroScrollRAF); heroScrollRAF = null; }
        heroPhoto.style.transform = '';
      }
    }, { threshold: 0 });
    ioHero.observe(document.getElementById('hero') || heroPhoto);
  }

  /* ──────────────────────────────────────────────
     MAGNETIC BUTTONS — amplitude renforcée 0.25
     (était 0.07 → maintenant 0.25 sur btn-primary,
      0.12 sur les autres éléments magnétiques)
     ────────────────────────────────────────────── */
  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      /* Force plus prononcée sur les CTA principaux */
      const isPrimary = el.classList.contains('btn-primary');
      const strength  = isPrimary ? 0.25 : 0.12;
      el.addEventListener('pointermove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  /* ──────────────────────────────────────────────
     MAX WOW — RIPPLE EFFECT sur .btn-primary
     Cercle depuis le point de clic exact
     ────────────────────────────────────────────── */
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      /* Coordonnées relatives au bouton */
      const rect    = btn.getBoundingClientRect();
      const x       = e.clientX - rect.left;
      const y       = e.clientY - rect.top;
      /* Taille : au moins la diagonale du bouton */
      const size    = Math.max(rect.width, rect.height) * 2;

      const ripple  = document.createElement('span');
      ripple.classList.add('btn-ripple');
      ripple.style.cssText = [
        `width: ${size}px`,
        `height: ${size}px`,
        `left: ${x - size / 2}px`,
        `top: ${y - size / 2}px`,
      ].join(';');

      btn.appendChild(ripple);
      /* Suppression après animation (550ms + marge) */
      setTimeout(() => ripple.remove(), 650);
    });
  });

  /* ──────────────────────────────────────────────
     3D TILT CARDS — désactivé sur les work-cards
     (remplacé par lightbox au click)
     ────────────────────────────────────────────── */
  if (supportsHover) {
    document.querySelectorAll('[data-tilt]:not(.work-card)').forEach(card => {
      const max = 4;
      card.addEventListener('pointermove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1200px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(8px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  /* ──────────────────────────────────────────────
     SCROLL REVEAL (IntersectionObserver)
     ────────────────────────────────────────────── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        /* Stagger discret des work-cards : la 2e colonne suit de 90ms.
           Delay inline temporaire → n'affecte pas les transitions hover ensuite. */
        if (entry.target.matches('.works-grid .work-card')) {
          const idx = Array.prototype.indexOf.call(entry.target.parentElement.children, entry.target);
          entry.target.style.transitionDelay = ((idx % 2) * 90) + 'ms';
          setTimeout(() => { entry.target.style.transitionDelay = ''; }, 900);
        }
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -48px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ──────────────────────────────────────────────
     STATS COUNTER (animate on scroll)
     ────────────────────────────────────────────── */
  /* prefersReducedMotion est déclaré plus haut (bloc cursor) — réutilisation */
  const prefersReduce = prefersReducedMotion;
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
  const formatStat = (val, decimals) => {
    const lang = document.documentElement.lang || 'fr';
    return decimals
      ? val.toLocaleString(lang, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
      : Math.round(val).toString();
  };

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.counter);
    if (isNaN(target)) return;
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const decimals = (target % 1 !== 0) ? 1 : 0;
    if (prefersReduce) { el.textContent = formatStat(target, decimals) + suffix; return; }
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const val = target * easeOutCubic(t);
      el.textContent = formatStat(val, decimals) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const ioCounters = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        ioCounters.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('[data-counter]').forEach(el => {
    const suffix = el.dataset.suffix || '';
    el.textContent = '0' + suffix;
    ioCounters.observe(el);
  });

  /* ──────────────────────────────────────────────
     NAV SCROLL STATE
     ────────────────────────────────────────────── */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 32);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ──────────────────────────────────────────────
     MOBILE MENU
     ────────────────────────────────────────────── */
  const burger = document.getElementById('burger');
  const navMobile = document.getElementById('navMobile');
  if (burger && navMobile) {
    const setMenu = (on) => {
      burger.classList.toggle('on', on);
      navMobile.classList.toggle('on', on);
      burger.setAttribute('aria-expanded', String(on));
      burger.setAttribute('aria-label', on ? 'Fermer le menu' : 'Ouvrir le menu');
      navMobile.setAttribute('aria-hidden', String(!on));
      document.body.style.overflow = on ? 'hidden' : '';
    };
    burger.addEventListener('click', () => setMenu(!burger.classList.contains('on')));
    navMobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => setMenu(false));
    });
    /* Fermeture au clavier (Échap) + retour du focus sur le burger */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && burger.classList.contains('on')) {
        setMenu(false);
        burger.focus();
      }
    });
  }

  /* ──────────────────────────────────────────────
     TESTIMONIALS CAROUSEL
     Auto-rotate 6s · pause hover · dots · swipe
     ────────────────────────────────────────────── */
  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll('.testi-slide'));
    const dots   = Array.from(carousel.querySelectorAll('.testi-dot'));
    let current = 0;
    let timer = null;
    let isPaused = false;
    const INTERVAL = 6000;

    const goTo = (idx) => {
      slides[current].classList.remove('is-active');
      dots[current].classList.remove('is-active');
      dots[current].setAttribute('aria-selected', 'false');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('is-active');
      dots[current].classList.add('is-active');
      dots[current].setAttribute('aria-selected', 'true');
    };

    const startAuto = () => {
      stopAuto();
      /* Respecte « prefers-reduced-motion » : pas de défilement automatique */
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      /* Desktop ≥1025px : grille statique 3 colonnes, pas de rotation */
      if (window.matchMedia('(min-width: 1025px)').matches) return;
      timer = setInterval(() => { if (!isPaused) goTo(current + 1); }, INTERVAL);
    };
    const stopAuto = () => { if (timer) { clearInterval(timer); timer = null; } };

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => { goTo(idx); startAuto(); });
    });

    carousel.addEventListener('mouseenter', () => { isPaused = true; });
    carousel.addEventListener('mouseleave', () => { isPaused = false; });

    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      isPaused = true;
    }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(dx) > 50) { goTo(dx < 0 ? current + 1 : current - 1); startAuto(); }
      isPaused = false;
    }, { passive: true });

    document.addEventListener('visibilitychange', () => { isPaused = document.hidden; });

    const ioCar = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) startAuto(); else stopAuto(); });
    }, { threshold: 0.3 });
    ioCar.observe(carousel);
  }

  /* ──────────────────────────────────────────────
     BARRE CTA MOBILE — apparaît après la sortie du hero
     (chemin permanent vers le devis sur une page de ~9500px)
     ────────────────────────────────────────────── */
  const ctaBar = document.getElementById('ctaBarMobile');
  const heroSection = document.getElementById('hero');
  if (ctaBar && heroSection && 'IntersectionObserver' in window) {
    const ioBar = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const show = !entry.isIntersecting;
        ctaBar.classList.toggle('show', show);
        ctaBar.setAttribute('aria-hidden', String(!show));
        document.body.classList.toggle('has-cta-bar', show);
      });
    }, { threshold: 0 });
    ioBar.observe(heroSection);
  }

  /* ──────────────────────────────────────────────
     WORK FILTERS (pill-tabs)
     ────────────────────────────────────────────── */
  const filterContainer = document.querySelector('.work-filters');
  if (filterContainer) {
    const pills = Array.from(filterContainer.querySelectorAll('.pill-tab'));
    const cards = Array.from(document.querySelectorAll('.work-card[data-category]'));

    const filterCards = (activeFilter) => {
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        const matches = activeFilter === 'all' || category === activeFilter;
        if (matches) {
          card.removeAttribute('data-hidden');
          card.style.opacity = '1';
          card.style.transform = '';
          card.style.display = '';
        } else {
          card.setAttribute('data-hidden', '');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            if (card.hasAttribute('data-hidden')) card.style.display = 'none';
          }, 200);
        }
      });
      cards.forEach(card => {
        if (activeFilter === 'all' || card.getAttribute('data-category') === activeFilter) {
          card.style.display = '';
          requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = ''; });
        }
      });
    };

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => { p.classList.remove('is-active'); p.setAttribute('aria-selected', 'false'); });
        pill.classList.add('is-active');
        pill.setAttribute('aria-selected', 'true');
        filterCards(pill.getAttribute('data-filter'));
      });
    });
  }

  /* ──────────────────────────────────────────────
     LIGHTBOX — click sur work-card
     ────────────────────────────────────────────── */
  const lightbox        = document.getElementById('lightbox');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxClose   = document.getElementById('lightboxClose');
  const lightboxImg     = document.getElementById('lightboxImg');
  const lightboxTitle   = document.getElementById('lightboxTitle');
  const lightboxResult  = document.getElementById('lightboxResult');
  const lightboxLink    = document.getElementById('lightboxLink');
  const lightboxTags    = document.getElementById('lightboxTags');
  let lastFocused = null;

  const openLightbox = (card) => {
    const img   = card.querySelector('.work-visual img');
    const title = card.querySelector('.work-title');
    const tags  = card.querySelectorAll('.tag');
    const result = card.querySelector('.work-result span:last-child');
    const liveUrl = card.dataset.live || card.dataset.href || '#';

    if (lightboxImg)   { lightboxImg.src = img ? img.src : ''; lightboxImg.alt = img ? img.alt : ''; }
    if (lightboxTitle) lightboxTitle.textContent = title ? title.textContent : '';
    if (lightboxResult) lightboxResult.textContent = result ? result.textContent : '';
    if (lightboxLink)  lightboxLink.href = liveUrl;
    if (lightboxTags)  {
      lightboxTags.innerHTML = '';
      tags.forEach(t => {
        const clone = t.cloneNode(true);
        lightboxTags.appendChild(clone);
      });
    }

    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lastFocused = document.activeElement;
    if (lightboxClose) lightboxClose.focus();
  };

  const closeLightbox = () => {
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  };

  document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('click', (e) => {
      /* Laisser passer le click sur le lien "Voir le site" */
      if (e.target.closest('.work-link') || e.target.closest('.lightbox-cta')) return;
      e.preventDefault();
      openLightbox(card);
    });
    /* Keyboard + sémantique « bouton » pour lecteurs d'écran */
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    const _wt = card.querySelector('.work-title');
    card.setAttribute('aria-label', 'Voir le projet ' + (_wt ? _wt.textContent.trim() : '') + ' en détail');
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(card); }
    });
    /* Lien "Voir le site" dans la carte — navigation directe */
    const workLink = card.querySelector('.work-link');
    if (workLink) {
      workLink.addEventListener('click', (e) => {
        e.stopPropagation();
        const href = card.dataset.href || card.dataset.live || '#';
        window.open(href, '_blank', 'noopener,noreferrer');
      });
    }
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox && lightbox.getAttribute('aria-hidden') === 'false') {
      closeLightbox();
    }
  });

  /* ──────────────────────────────────────────────
     CONTACT FORM — validation inline + succès
     ────────────────────────────────────────────── */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    const requiredFields = contactForm.querySelectorAll('[required]');
    const lang = () => document.documentElement.lang || 'fr';
    const dict = () => I18N[lang()] || I18N.fr;

    const validateField = (field) => {
      const errorEl = document.getElementById(field.id + '-error');
      if (!errorEl) return true;
      let error = '';
      if (!field.value.trim()) {
        error = dict()['form.error.required'] || 'Ce champ est obligatoire.';
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        error = dict()['form.error.email'] || 'Adresse email invalide.';
      }
      errorEl.textContent = error;
      field.setAttribute('aria-invalid', error ? 'true' : 'false');
      return !error;
    };

    requiredFields.forEach(field => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => {
        if (field.getAttribute('aria-invalid') === 'true') validateField(field);
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      /* Honeypot check */
      const honeypot = contactForm.querySelector('[name="website"]');
      if (honeypot && honeypot.value) return;

      let valid = true;
      requiredFields.forEach(field => {
        if (!validateField(field)) valid = false;
      });

      if (!valid) {
        const firstError = contactForm.querySelector('[aria-invalid="true"]');
        if (firstError) firstError.focus();
        return;
      }

      /* Simulation envoi (ici: mailto fallback ou fetch API) */
      const data = new FormData(contactForm);
      const subject = encodeURIComponent('Nouvelle demande de devis — Clicboost');
      const body = encodeURIComponent(
        `Nom : ${data.get('name')}\n` +
        `Email : ${data.get('email')}\n` +
        `Téléphone : ${data.get('phone') || 'non renseigné'}\n` +
        `Formule : ${data.get('plan') || 'non précisé'}\n\n` +
        `Message :\n${data.get('message')}`
      );

      /* Chorégraphie d'envoi : état « Envoi… » bref, puis succès —
         l'utilisateur voit que son action a été prise en compte. */
      const submitBtn = contactForm.querySelector('.form-submit');
      const submitLabel = submitBtn ? submitBtn.querySelector('[data-i18n="form.submit"]') : null;
      const isFr = (document.documentElement.lang || 'fr').startsWith('fr');
      if (submitBtn) {
        submitBtn.disabled = true;
        if (submitLabel) submitLabel.textContent = isFr ? 'Envoi…' : 'Sending…';
      }

      setTimeout(() => {
        window.location.href = `mailto:contact@clicboost.fr?subject=${subject}&body=${body}`;

        /* Afficher message de succès */
        if (formSuccess) {
          formSuccess.classList.add('visible');
          formSuccess.setAttribute('aria-hidden', 'false');
          contactForm.setAttribute('aria-hidden', 'true');
        }
      }, 700);
    });
  }

  /* ──────────────────────────────────────────────
     PLAUSIBLE — tracking data-event
     Ajoute le tracking sur les boutons annotés
     ────────────────────────────────────────────── */
  document.querySelectorAll('[data-event]').forEach(el => {
    el.addEventListener('click', () => {
      const eventName = el.getAttribute('data-event');
      if (typeof window.plausible === 'function') {
        window.plausible(eventName);
      }
    });
  });


  /* ───────────────────────
     HERO WALL — parallax souris sur le mur incliné
     (pointeurs fins uniquement, respecte prefers-reduced-motion)
     ─────────────────────── */
  const wallParallax = document.getElementById('wallParallax');
  const wallHero = document.querySelector('.hero-wall');
  if (
    wallParallax && wallHero &&
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    let wallRaf = null;
    wallHero.addEventListener('mousemove', (e) => {
      if (wallRaf) return;
      wallRaf = requestAnimationFrame(() => {
        wallRaf = null;
        const r = wallHero.getBoundingClientRect();
        const nx = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1));
        const ny = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1));
        wallParallax.style.transform =
          'rotateX(' + (-ny * 1.6).toFixed(2) + 'deg) rotateY(' + (nx * 2.2).toFixed(2) + 'deg)';
      });
    }, { passive: true });
    wallHero.addEventListener('mouseleave', () => {
      if (wallRaf) { cancelAnimationFrame(wallRaf); wallRaf = null; }
      wallParallax.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }


  /* ------------------------------------------------------------
     CINETIQUE ULTRA - barre de progression de lecture
     ------------------------------------------------------------ */
  const scrollProg = document.createElement('div');
  scrollProg.className = 'scroll-progress';
  scrollProg.setAttribute('aria-hidden', 'true');
  document.body.appendChild(scrollProg);
  let spTick = false;
  const updateProg = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const y = window.pageYOffset || doc.scrollTop || 0;
    scrollProg.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
    spTick = false;
  };
  window.addEventListener('scroll', () => {
    if (!spTick) { spTick = true; requestAnimationFrame(updateProg); }
  }, { passive: true });
  updateProg();

  /* ------------------------------------------------------------
     CINETIQUE ULTRA - reveals en cascade dans les grilles
     (delai --rd pose par index, retire apres la 1re apparition
      pour ne pas retarder les transitions de hover)
     ------------------------------------------------------------ */
  document.querySelectorAll('.works-grid, .services-grid, .process').forEach((grid) => {
    const items = grid.querySelectorAll(':scope .reveal');
    items.forEach((el, i) => {
      el.style.setProperty('--rd', Math.min(i * 80, 400) + 'ms');
      el.addEventListener('transitionend', function clearDelay(e) {
        if (e.propertyName === 'opacity' && el.classList.contains('in')) {
          el.style.setProperty('--rd', '0ms');
          el.removeEventListener('transitionend', clearDelay);
        }
      });
    });
  });

})();
