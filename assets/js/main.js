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
      'meta.title': "Création de site vitrine pour artisans et TPE dès 390 € — livré en 7 jours | Clicboost",
      'meta.desc': 'Studio web freelance. Création de sites vitrines pro pour artisans et TPE partout en France, livrés en 7 jours dès 390 €. SEO local ciblé. Devis gratuit sous 24h.',

      /* Brand */
      'brand.name': 'Clic',

      /* Nav */
      'nav.works': 'Exemples',
      'nav.servicespage': 'Services',
      'nav.about': 'À propos',
      'about.eyebrow': "À propos de Clicboost",
      'about.h2.l1': "Derrière Clicboost, une seule personne —",
      'about.h2.l2': "et c'est votre avantage.",
      'about.role': "créateur de sites web, à Versailles",
      'about.p1': "Je conçois des sites vitrines pour les artisans, commerçants et TPE partout en France. Ici, pas d'agence à plusieurs étages ni de commercial intermédiaire : la personne qui vous répond est exactement celle qui dessine, code et met votre site en ligne.",
      'about.p2': "Mon obsession : un site rapide, clair et pensé pour vous ramener des clients — pas une jolie vitrine qui prend la poussière. Vous validez chaque étape, vous gardez la main, et le site vous appartient à 100 %.",
      'about.pt1': "Un interlocuteur unique, joignable directement",
      'about.pt2': "Livré en 7 jours, sans mauvaise surprise",
      'about.pt3': "Sites rapides, optimisés mobile et Google",
      'about.pt4': "Entreprise française déclarée · SIRET vérifiable",
      'about.cta': "Discutons de votre projet",
      'about.sign': "EI Merouani · SIRET 10720502300016 · Versailles, France",
      'nav.testi': "Garanties",
      'pledge.title.l1': "Des garanties,",
      'pledge.title.l2': "pas des promesses.",
      'pledge.sub': "Clicboost démarre : plutôt que d'afficher de faux avis, voici des engagements concrets — écrits noir sur blanc dans chaque devis.",
      'pledge.p1.title': "Maquette validée avant le code",
      'pledge.p1.text': "Vous voyez votre futur site en taille réelle dès le jour 2-3 — rien n'est développé tant que vous n'avez pas validé.",
      'pledge.p2.title': "Livré en 7 jours",
      'pledge.p2.text': "Le délai court dès la validation de la maquette et la réception de votre contenu — et il figure sur le devis.",
      'pledge.p3.title': "Le site vous appartient à 100%",
      'pledge.p3.text': "Code source, nom de domaine, accès : tout est remis à votre nom à la livraison. Aucun abonnement obligatoire.",
      'pledge.p4.title': "Paiement en 2× sans frais",
      'pledge.p4.text': "50 % à la commande, 50 % à la livraison — une fois le site en ligne et validé par vous.",
      'pledge.note': "Vous serez parmi nos premiers clients — et les premiers avis publiés ici, avec un lien vérifiable vers Google.",
      'nav.services': 'Tarifs',
      'nav.contact': 'Contact',
      'nav.cta': 'Devis gratuit',

      /* Hero */
      'hero.eyebrow': 'Partout en France · 100% en ligne',
      'hero.h1.l1': "Votre site vitrine",
      'hero.h1.em1': 'en 7 jours.',
      'hero.sub': "Un site professionnel qui transforme les recherches Google en appels et en demandes de devis. Pour artisans, commerçants et TPE.",
      'hero.price.amount': 'À partir de 390 € TTC',
      'hero.price.terms': 'Paiement en 2× sans frais',
      'hero.cta1': 'Demander un devis gratuit',
      'hero.stat3': "8 démos en ligne — jugez sur pièces",
      'hero.scroll': 'Défiler',
      'hero.avail': "Studio solo — places limitées chaque mois",
      'hero.reply24': "Payé une fois, à vous pour toujours",
      /* Works */
      'works.title.l1': "Exemples de sites",
      'works.title.l2': "par métier",
      'works.sub': "Ces 8 sites sont des démonstrations créées par Clicboost, un par métier — voici exactement ce que vous auriez pour 390 à 890 €.",
      'works.seo': "Création de site internet vitrine, référencement local, fiche Google Business : chaque démo ci-dessous est un vrai site en ligne. Cliquez, testez la vitesse — c'est ce niveau que vous recevez.",
      'work.demo': "Site démo",
      'works.cta.text': "Votre métier mérite le même niveau de site.",
      'works.cta.btn': "Demander mon devis gratuit",
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
      'work.av.metric': "Devis 24h/24",
      'work.av.desc': "Pensé pour l'électricien qui rate des appels en intervention : le site capture les demandes de devis 24h/24, même quand vous êtes sur un chantier.",
      'work.av.result': "Formulaire de devis 24h/24 + optimisation Google locale",
      'work.pd.tag1': 'VTC Premium',
      'work.pd.tag2': 'Paris',
      'work.pd.metric': 'Réservation 60s',
      'work.pd.desc': "Un client haut de gamme vous juge en 8 secondes. Hero vidéo cinéma, identité luxe, parcours de réservation en 3 clics.",
      'work.pd.result': "Hero vidéo cinéma + réservation en 3 étapes",
      'work.me.tag1': 'Bien-être',
      'work.me.tag2': 'Paris 8e',
      'work.me.metric': "RDV en ligne",
      'work.me.desc': "Conçu pour retenir le visiteur dès le premier écran : ambiance éditoriale, vidéo immersive et prise de RDV en ligne intégrée.",
      'work.me.result': "Prise de RDV en ligne intégrée + design premium apaisant",
      'work.ap.tag1': 'Plombier 24/7',
      'work.ap.tag2': 'Paris',
      'work.ap.metric': "Urgence 24/7",
      'work.ap.desc': "Une fuite à 23h : votre client veut appeler tout de suite. Bouton d'urgence permanent, pages par arrondissement, structure pensée pour le référencement local.",
      'work.ap.result': "Bouton d'urgence permanent + pages par arrondissement",
      'work.cl.tag1': 'Céramique',
      'work.cl.tag2': 'Showroom Paris',
      'work.cl.metric': "Design éditorial",
      'work.cl.desc': "Pour l'artisan d'art noyé sous les géants du e-commerce : un design éditorial qui présente chaque pièce comme dans une galerie.",
      'work.cl.result': "Design éditorial galerie + fiches produit soignées",
      'work.vc.tag1': 'Clinique vétérinaire',
      'work.vc.tag2': 'Paris 11e',
      'work.vc.tag3': 'Nouveau',
      'work.vc.metric': "Trilingue FR/EN/ES",
      'work.vc.desc': "Pensé pour une clientèle internationale : site trilingue français, anglais, espagnol, prise de RDV en 2 minutes, urgences 7j/7.",
      'work.vc.result': "Trilingue FR/EN/ES + RDV en ligne en 2 minutes",
      'work.mt.tag1':   'Coach sportif',
      'work.mt.tag2':   'Paris 8e',
      'work.mt.tag3':   'Nouveau',
      'work.mt.metric': "Formulaire qualifiant",
      'work.mt.desc': "Un site qui pré-qualifie les prospects avant le premier appel : typographie impact, offre claire, formulaire de sélection intégré.",
      'work.mt.result': "Formulaire qui pré-qualifie les prospects avant l'appel",
      'work.mo.tag1':   'Salon coiffure',
      'work.mo.tag2':   'Lyon 2ᵉ',
      'work.mo.tag3':   'Nouveau',
      'work.mo.metric': 'Éditorial premium',
      'work.mo.desc': "Un site éditorial à la hauteur du travail en salon : hero vidéo, galerie filtrée par type de coupe, formulaire de RDV qui pré-qualifie.",
      'work.mo.result': "Galerie filtrée par coupe + formulaire RDV qualifiant",
      /* Témoignages */
      'ctabar.cta': 'Devis gratuit — réponse 24h',
      /* Services */
      'services.title.l1': 'Choisissez votre',
      'services.title.l2': 'formule',
      'services.sub': "Un site rapide, pensé pour l'expérience utilisateur et le SEO local ciblé — conçu pour transformer vos visiteurs en clients. Partout en France.",
      'services.stat.leads': "d'abonnement obligatoire",
      'services.stat.delay': 'pour être en ligne',
      'services.stat.mobile': 'mobile & rapide',
      'services.stat.hidden': "paiement sans frais",
      'services.compare': "Un site en abonnement type coûte 50 €/mois, soit plus de 1 800 € sur 3 ans — sans jamais vous appartenir. Ici : payé une fois, à vous pour toujours.",
      'services.p2.f6': "Textes rédigés avec vous",
      'addons.eyebrow': 'Après la mise en ligne',
      'addons.title': 'Faites vivre votre site',
      'addons.sub': "Restez visible, à jour et bien référencé. Services à la carte, cumulables avec toute formule — sans engagement, résiliables à tout moment.",
      'addons.group.month': 'Abonnements mensuels',
      'addons.group.oneoff': 'Options ponctuelles',
      'addons.permonth': '/mois',
      'addons.details': "Le détail complet →",
      'calc.eyebrow': "Et si vous aviez un site ?",
      'calc.title.l1': "Combien de clients",
      'calc.title.l2': "votre site peut-il vous apporter ?",
      'calc.sub': "Réglez les curseurs selon votre activité. Estimation immédiate, transparente et volontairement prudente.",
      'calc.metier': "Votre métier",
      'calc.m.artisan': "Artisan du bâtiment",
      'calc.m.plombier': "Plombier",
      'calc.m.electricien': "Électricien",
      'calc.m.coiffeur': "Coiffeur / salon",
      'calc.m.vtc': "Chauffeur VTC",
      'calc.m.commerce': "Commerçant",
      'calc.m.autre': "Autre activité",
      'calc.visitors': "Visiteurs mensuels sur votre site",
      'calc.visitors.help': "Recherches locales, fiche Google, réseaux sociaux…",
      'calc.conv': "Part des visiteurs qui vous contactent",
      'calc.conv.help': "Un site bien conçu convertit 2 à 5 % de ses visiteurs.",
      'calc.ticket': "Valeur moyenne d'un client",
      'calc.ticket.help': "Ce que vous rapporte un client en moyenne.",
      'calc.res.clients': "Nouveaux clients potentiels",
      'calc.res.permonth': "/ mois",
      'calc.res.ca.month': "CA supplémentaire estimé",
      'calc.res.ca.year': "Soit sur un an",
      'calc.res.payback': "Un site à 390 € serait rentabilisé en",
      'calc.res.days': "jours",
      'calc.cta': "Concrétiser ce potentiel — devis gratuit",
      'calc.disclaimer': "Estimation indicative fondée sur des moyennes du secteur. Le résultat dépend de votre zone, de votre métier et de votre visibilité — ce n'est pas une promesse.",
      'addons.maint.name': 'Maintenance simple',
      'addons.maint.desc': 'Mises à jour, sauvegardes, sécurité et dépannage.',
      'addons.maint.meta': "Point mensuel · dépannage sous 24-48h ouvrées",
      'addons.maintplus.name': 'Maintenance + modifications',
      'addons.maintplus.desc': 'Tout Maintenance, plus vos petites modifs de contenu chaque mois.',
      'addons.maintplus.meta': "2 modifs de contenu/mois · traitées sous 48h",
      'addons.seo.name': 'SEO local ciblé',
      'addons.seo.desc': 'Remontez dans Google sur votre ville et vos mots-clés.',
      'addons.seo.meta': "Rapport mensuel · premiers effets sous 2-3 mois",
      'addons.seo.range': 'à 249 €',
      'addons.gmb.name': 'Fiche Google Business',
      'addons.gmb.desc': 'Gestion de votre fiche : avis, photos, posts, horaires.',
      'addons.gmb.meta': "2 à 4 posts/mois · réponse aux avis sous 48h",
      'addons.gmb.range': 'à 99 €',
      'addons.social.name': 'Visibilité réseaux sociaux',
      'addons.social.desc': 'Publications régulières pour rester présent et attirer des clients.',
      'addons.social.meta': "4 publications/mois · calendrier validé ensemble",
      'addons.page.name': 'Page supplémentaire',
      'addons.page.desc': 'Une page en plus : services, galerie, blog, FAQ…',
      'addons.page.range': 'à 150 €',
      'addons.trad.name': 'Traduction FR / EN',
      'addons.trad.desc': 'Votre site en anglais, pro et naturel.',
      'addons.trad.range': 'à 250 €',
      'addons.cta': 'Composer mon offre sur mesure',
      'addons.note': 'Sans engagement · résiliable à tout moment',
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
      'services.p2.tag': "Site complet jusqu'à 5 pages · livré en 7 jours",
      'services.p2.f1': "Jusqu'à 5 pages : accueil, services, tarifs, avis, contact",
      'services.p2.f2': 'SEO local optimisé Google',
      'services.p2.f3': "Fiche d'établissement Google",
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
      'process.s1.text': "Nous échangeons 15 minutes sur votre projet et vous repartez avec un plan clair — même si nous ne travaillons pas ensemble.",
      'process.s2.time': 'Maquette (Jour 2-3)',
      'process.s2.title': 'Maquette',
      'process.s2.text': "Vous voyez votre futur site en taille réelle et nous ajustons ensemble. Pas de « vous verrez à la fin » : vous validez avant que je code.",
      'process.s3.time': 'Développement (Jour 4-6)',
      'process.s3.title': 'Développement',
      'process.s3.text': "Je code votre site avec votre contenu validé. HTML sémantique, CSS optimisé, performances natives. Aucune dépendance inutile.",
      'process.s4.time': 'Mise en ligne (Jour 7)',
      'process.s4.title': 'Mise en ligne',
      'process.s4.text': "Site en ligne + formation de 30 minutes pour le mettre à jour vous-même. Vous n'êtes jamais bloqué pour modifier un texte.",
      /* FAQ */
      'faq.title.l1': 'Questions',
      'faq.title.l2': 'fréquentes',
      'faq.q1': 'En combien de temps mon site sera-t-il en ligne ?',
      'faq.a1': "Votre site est en ligne en 7 jours calendaires après validation de la maquette. Pour la formule Essentiel, c'est souvent moins. Le délai démarre à la réception de votre contenu — et si vous n'avez ni textes ni photos, je m'en occupe avec vous.",
      'faq.q2': 'Comment se passe le paiement ?',
      'faq.a2': "50 % à la commande, 50 % à la livraison — une fois le site validé par vous. Paiement en 2× sans frais sur toutes les formules, par virement bancaire ou PayPal.",
      'faq.q3': "Qui s'occupe de l'hébergement et du nom de domaine ?",
      'faq.a3': "Je m'occupe de tout. L'hébergement de la 1ère année est offert sur les formules Pro et Premium. Le nom de domaine peut être le vôtre ou acheté pour vous. À partir de la 2ème année, l'hébergement revient à environ 5 €/mois.",
      'faq.q4': 'Puis-je modifier mon site moi-même après la livraison ?',
      'faq.a4': "Oui : une formation de 30 minutes est incluse dans chaque formule. Vous apprenez à modifier vos textes, vos images et vos coordonnées sans toucher au code. Vous restez autonome.",
      'faq.q5': 'Est-ce que le site sera visible sur Google ?',
      'faq.a5': "Tous mes sites sont optimisés pour le référencement local dès la livraison : balises meta, Schema.org, sitemap, fiche Google Business (Pro et Premium). Vos clients vous trouvent quand ils cherchent votre métier dans votre ville.",
      'faq.q6': 'Mon site sera-t-il adapté aux mobiles ?',
      'faq.a6': "Oui, tous mes sites sont conçus en mobile-first : ils s'adaptent parfaitement au smartphone, à la tablette et à l'ordinateur. Environ 6 visiteurs sur 10 arrivent sur mobile — c'est ma priorité numéro un.",
      'faq.q7': 'Que se passe-t-il si je veux changer quelque chose après la mise en ligne ?',
      'faq.a7': "Les petites modifications (texte, photo, horaires) sont comprises pendant 1 mois après la livraison. Ensuite, vous choisissez : à l'heure (40 €) ou en abonnement maintenance dès 39 €/mois. La formule Premium inclut 3 mois de maintenance complète.",
      'faq.q8': 'À qui appartient le site une fois livré ?',
      'faq.a8': "Le site vous appartient à 100 % dès la livraison et le paiement final. Vous recevez tous les accès : hébergement, nom de domaine, code source. Aucun abonnement obligatoire.",
      'faq.q9': "Je n'ai ni textes, ni logo, ni photos. C'est bloquant ?",
      'faq.a9': "Non — c'est même le cas le plus fréquent. Les textes sont rédigés avec vous à partir d'un simple échange, et je sélectionne des visuels professionnels libres de droits en attendant vos photos. Vous validez tout avant la mise en ligne.",
      'faq.q10': "Les abonnements (maintenance, SEO…) sont-ils obligatoires ?",
      'faq.a10': "Non. Votre site fonctionne parfaitement sans aucun abonnement. Les services mensuels sont optionnels, sans engagement et résiliables à tout moment — le site reste à vous, quoi qu'il arrive.",
      'faq.q11': "Quelle différence avec les offres de sites par abonnement ?",
      'faq.a11': "Avec un abonnement, vous louez votre site : si vous arrêtez de payer, il disparaît. Chez Clicboost, vous l'achetez une fois (390 à 890 €) et il vous appartient définitivement — code, domaine et accès inclus. Sur 3 ans, un abonnement à 50 €/mois coûte plus de 1 800 €.",
      /* Contact */
      'contact.title.l1': 'Parlons de',
      'contact.title.l2': 'votre projet',
      'contact.sub': 'Devis gratuit sous 24h. Sans engagement.',
      'contact.alts.title': 'Ou contactez-moi directement',
      'contact.alt.email.label': 'Email direct',
      'contact.alt.phone.label': 'Téléphone',
      'contact.alt.wa.label': 'WhatsApp',
      'contact.alt.wa.text': 'Réponse rapide',
      'contact.alt.cal.label': "Réserver un appel gratuit",
      'contact.alt.cal.text': "15 minutes, sans engagement",
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
      'form.plan.seo': "SEO local — dès 149 €/mois",
      'form.plan.maint': "Maintenance — dès 39 €/mois",
      'form.plan.gmb': "Fiche Google Business — dès 49 €/mois",
      'form.plan.social': "Réseaux sociaux — 39 €/mois",
      'form.error.send': "L'envoi n'a pas abouti. Réessayez, ou écrivez-moi directement :",
      'form.submit': 'Recevoir mon devis gratuit',
      'form.reassure': '✓ Gratuit · ✓ Réponse sous 24h · ✓ Sans engagement',
      'form.success.title': "C'est bien reçu !",
      'form.success.text': "Vous recevrez sous 24h ouvrées un e-mail de contact@clicboost.fr avec un devis chiffré et des recommandations concrètes. Urgent ? Écrivez-moi sur WhatsApp.",
      'form.error.required': 'Ce champ est obligatoire.',
      'form.error.email': 'Adresse email invalide.',

      /* À propos */
      /* Footer */
      'footer.tag': 'Studio indépendant · Partout en France',
      'footer.rights': 'Tous droits réservés',
      'footer.legal': 'Mentions légales',
      'footer.cookies': 'Gestion des cookies',
      'footer.legalid': 'EI Merouani — SIRET 10720502300016',
      'footer.avail': "Places limitées chaque mois · Partout en France",
      'footer.response': 'Réponse sous 24h',
    },

    en: {
      /* Meta */
      'meta.title': "Showcase website design for tradespeople & SMBs from €390 — delivered in 7 days | Clicboost",
      'meta.desc': 'Freelance web studio. Professional showcase websites for tradespeople and SMEs across France, delivered in 7 days from EUR 390. Targeted local SEO. Free quote within 24h.',

      /* Brand */
      'brand.name': 'Clic',

      /* Nav */
      'nav.works': 'Examples',
      'nav.servicespage': 'Services',
      'nav.about': 'About',
      'about.eyebrow': "About Clicboost",
      'about.h2.l1': "Behind Clicboost, one single person —",
      'about.h2.l2': "and that's your advantage.",
      'about.role': "website designer, based in Versailles",
      'about.p1': "I design showcase websites for tradespeople, shop owners and small businesses across France. No multi-layer agency, no middle-man salesperson: the person who answers you is exactly the one who designs, codes and launches your website.",
      'about.p2': "My obsession: a fast, clear website built to bring you customers — not a pretty page that gathers dust. You approve every step, you keep control, and the site is 100% yours.",
      'about.pt1': "One single contact, reachable directly",
      'about.pt2': "Delivered in 7 days, no bad surprises",
      'about.pt3': "Fast sites, optimised for mobile and Google",
      'about.pt4': "Registered French business · verifiable SIRET",
      'about.cta': "Let's talk about your project",
      'about.sign': "Merouani (sole trader) · SIRET 10720502300016 · Versailles, France",
      'nav.testi': "Guarantees",
      'pledge.title.l1': "Guarantees,",
      'pledge.title.l2': "not promises.",
      'pledge.sub': "Clicboost is just launching: instead of fake reviews, here are concrete commitments — written in black and white on every quote.",
      'pledge.p1.title': "Mockup approved before any code",
      'pledge.p1.text': "You see your future site at full size on day 2-3 — nothing is built until you approve it.",
      'pledge.p2.title': "Delivered in 7 days",
      'pledge.p2.text': "The countdown starts once the mockup is approved and your content received — and it is written on the quote.",
      'pledge.p3.title': "The site is 100% yours",
      'pledge.p3.text': "Source code, domain name, access: everything is handed over in your name at delivery. No mandatory subscription.",
      'pledge.p4.title': "Split payment at no cost",
      'pledge.p4.text': "50% on order, 50% at delivery — once the site is live and approved by you.",
      'pledge.note': "You will be among our first clients — and the first reviews published here, with a verifiable Google link.",
      'nav.services': 'Pricing',
      'nav.contact': 'Contact',
      'nav.cta': 'Free quote',

      /* Hero */
      'hero.eyebrow': 'Across France · 100% online',
      'hero.h1.l1': "Your business website",
      'hero.h1.em1': 'in 7 days.',
      'hero.sub': "A professional website that turns Google searches into calls and quote requests. For tradespeople and small businesses across France.",
      'hero.price.amount': 'From €390 incl. VAT',
      'hero.price.terms': 'Pay in 2× at no extra cost',
      'hero.cta1': 'Request a free quote',
      'hero.stat3': "8 live demos — judge for yourself",
      'hero.scroll': 'Scroll',
      'hero.avail': "Solo studio — limited slots each month",
      'hero.reply24': "One payment — yours forever",
      /* Works */
      'works.title.l1': "Sample websites",
      'works.title.l2': "by trade",
      'works.sub': "These 8 sites are demonstrations created by Clicboost, one per trade — exactly what you would get for €390–890.",
      'works.seo': "Showcase website design, local SEO, Google Business profile: every demo below is a real live site. Click and test the speed — that is the level you get.",
      'work.demo': "Demo site",
      'works.cta.text': "Your trade deserves the same level of website.",
      'works.cta.btn': "Request my free quote",
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
      'work.av.metric': "Quotes 24/7",
      'work.av.desc': "Built for the electrician who misses calls on site: the website captures quote requests 24/7, even when you are on a job.",
      'work.av.result': "24/7 quote form + local Google optimisation",
      'work.pd.tag1': 'Premium VTC',
      'work.pd.tag2': 'Paris',
      'work.pd.metric': 'Booking in 60s',
      'work.pd.desc': "A high-end client judges you in 8 seconds. Cinematic video hero, luxury identity, 3-click booking flow.",
      'work.pd.result': "Cinematic video hero + 3-step booking",
      'work.me.tag1': 'Wellness',
      'work.me.tag2': 'Paris 8th',
      'work.me.metric': "Online booking",
      'work.me.desc': "Designed to hold visitors from the first screen: editorial mood, immersive video and built-in online booking.",
      'work.me.result': "Built-in online booking + calming premium design",
      'work.ap.tag1': 'Plumber 24/7',
      'work.ap.tag2': 'Paris',
      'work.ap.metric': "24/7 emergency",
      'work.ap.desc': "A leak at 11pm: your client wants to call right now. Permanent emergency button, district pages, structure built for local SEO.",
      'work.ap.result': "Permanent emergency button + district pages",
      'work.cl.tag1': 'Ceramics',
      'work.cl.tag2': 'Paris showroom',
      'work.cl.metric': "Editorial design",
      'work.cl.desc': "For the craft maker drowned out by e-commerce giants: an editorial design that presents each piece like in a gallery.",
      'work.cl.result': "Editorial gallery design + refined product pages",
      'work.vc.tag1': 'Veterinary clinic',
      'work.vc.tag2': 'Paris 11th',
      'work.vc.tag3': 'New',
      'work.vc.metric': "FR/EN/ES trilingual",
      'work.vc.desc': "Built for an international clientele: trilingual French, English, Spanish, 2-minute booking, 7/7 emergencies.",
      'work.vc.result': "FR/EN/ES trilingual + 2-minute online booking",
      'work.mt.tag1':   'Personal trainer',
      'work.mt.tag2':   'Paris 8th',
      'work.mt.tag3':   'New',
      'work.mt.metric': "Qualifying form",
      'work.mt.desc': "A site that pre-qualifies prospects before the first call: impact typography, clear offer, built-in screening form.",
      'work.mt.result': "Form that pre-qualifies prospects before the call",
      'work.mo.tag1':   'Hair salon',
      'work.mo.tag2':   'Lyon 2nd',
      'work.mo.tag3':   'New',
      'work.mo.metric': 'Editorial premium',
      'work.mo.desc': "An editorial site that matches the craft in the salon: video hero, gallery filtered by cut, qualifying booking form.",
      'work.mo.result': "Gallery filtered by cut + qualifying booking form",
      /* Testimonials */
      'ctabar.cta': 'Free quote — 24h reply',
      /* Services */
      'services.title.l1': 'Choose your',
      'services.title.l2': 'package',
      'services.sub': 'A fast website, built for user experience and targeted local SEO — designed to turn your visitors into customers. Anywhere in France.',
      'services.stat.leads': "in mandatory monthly fees",
      'services.stat.delay': 'to go live',
      'services.stat.mobile': 'mobile & fast',
      'services.stat.hidden': "split payment, no fees",
      'services.compare': "A typical subscription website costs €50/month — over €1,800 in 3 years, and it is never yours. Here: one payment, yours forever.",
      'services.p2.f6': "Copy written with you",
      'addons.eyebrow': 'After going live',
      'addons.title': 'Keep your site alive',
      'addons.sub': 'Stay visible, up to date and well ranked. À la carte services, combinable with any package — no commitment, cancel anytime.',
      'addons.group.month': 'Monthly plans',
      'addons.group.oneoff': 'One-off options',
      'addons.permonth': '/mo',
      'addons.details': "See full details →",
      'calc.eyebrow': "What if you had a website?",
      'calc.title.l1': "How many clients",
      'calc.title.l2': "could your website bring you?",
      'calc.sub': "Adjust the sliders to match your business. Instant, transparent and deliberately conservative estimate.",
      'calc.metier': "Your trade",
      'calc.m.artisan': "Building tradesperson",
      'calc.m.plombier': "Plumber",
      'calc.m.electricien': "Electrician",
      'calc.m.coiffeur': "Hairdresser / salon",
      'calc.m.vtc': "Private driver (VTC)",
      'calc.m.commerce': "Shop owner",
      'calc.m.autre': "Other business",
      'calc.visitors': "Monthly visitors on your site",
      'calc.visitors.help': "Local searches, Google profile, social media…",
      'calc.conv': "Share of visitors who contact you",
      'calc.conv.help': "A well-built site converts 2 to 5% of its visitors.",
      'calc.ticket': "Average value of a client",
      'calc.ticket.help': "What a new client is worth to you, on average.",
      'calc.res.clients': "Potential new clients",
      'calc.res.permonth': "/ month",
      'calc.res.ca.month': "Estimated extra revenue",
      'calc.res.ca.year': "That's per year",
      'calc.res.payback': "A €390 site would pay for itself in",
      'calc.res.days': "days",
      'calc.cta': "Turn this into reality — free quote",
      'calc.disclaimer': "Indicative estimate based on sector averages. Results depend on your area, trade and visibility — this is not a promise.",
      'addons.maint.name': 'Basic maintenance',
      'addons.maint.desc': 'Updates, backups, security and troubleshooting.',
      'addons.maint.meta': "Monthly check · fixes within 24-48 business hours",
      'addons.maintplus.name': 'Maintenance + edits',
      'addons.maintplus.desc': 'All of Maintenance, plus your small content edits every month.',
      'addons.maintplus.meta': "2 content updates/month · handled within 48h",
      'addons.seo.name': 'Targeted local SEO',
      'addons.seo.desc': 'Rank higher on Google for your city and keywords.',
      'addons.seo.meta': "Monthly report · first results within 2-3 months",
      'addons.seo.range': 'to €249',
      'addons.gmb.name': 'Google Business profile',
      'addons.gmb.desc': 'We manage your profile: reviews, photos, posts, hours.',
      'addons.gmb.meta': "2-4 posts/month · review replies within 48h",
      'addons.gmb.range': 'to €99',
      'addons.social.name': 'Social media visibility',
      'addons.social.desc': 'Regular posts to stay present and attract customers.',
      'addons.social.meta': "4 posts/month · schedule approved together",
      'addons.page.name': 'Extra page',
      'addons.page.desc': 'One more page: services, gallery, blog, FAQ…',
      'addons.page.range': 'to €150',
      'addons.trad.name': 'FR / EN translation',
      'addons.trad.desc': 'Your site in English, professional and natural.',
      'addons.trad.range': 'to €250',
      'addons.cta': 'Build my custom offer',
      'addons.note': 'No commitment · cancel anytime',
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
      'services.p2.tag': "Full site, up to 5 pages · delivered in 7 days",
      'services.p2.f1': "Up to 5 pages: home, services, pricing, reviews, contact",
      'services.p2.f2': 'Local Google SEO optimised',
      'services.p2.f3': "Google Business Profile",
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
      'process.s1.text': "We talk 15 minutes about your project and you leave with a clear plan — even if we do not end up working together.",
      'process.s2.time': 'Mockup (Days 2-3)',
      'process.s2.title': 'Mockup',
      'process.s2.text': "You see your future site at full size and we adjust it together. No 'you will see at the end': you approve before I code.",
      'process.s3.time': 'Development (Days 4-6)',
      'process.s3.title': 'Development',
      'process.s3.text': "I build your site with your approved content. Semantic HTML, optimised CSS, native performance. No useless dependencies.",
      'process.s4.time': 'Launch (Day 7)',
      'process.s4.title': 'Launch',
      'process.s4.text': "Site live + 30-minute training to update it yourself. You are never stuck waiting on someone to change a line of text.",
      /* FAQ */
      'faq.title.l1': 'Frequently asked',
      'faq.title.l2': 'questions',
      'faq.q1': 'How soon will my site go live?',
      'faq.a1': "Your site is live within 7 calendar days after mockup approval — often sooner for the Essential plan. The clock starts when I receive your content, and if you have no text or photos, I handle it with you.",
      'faq.q2': 'How does payment work?',
      'faq.a2': "50% when you order, 50% at delivery — once you have approved the site. Split payment at no extra cost on all plans, by bank transfer or PayPal.",
      'faq.q3': 'Who handles hosting and the domain name?',
      'faq.a3': "I take care of everything. First-year hosting is included with Pro and Premium. The domain can be yours or purchased for you. From year 2, hosting costs about €5/month.",
      'faq.q4': 'Can I edit my site myself after delivery?',
      'faq.a4': "Yes: a 30-minute training session is included with every plan. You learn to edit your text, images and contact details without touching the code. You stay independent.",
      'faq.q5': 'Will my site show up on Google?',
      'faq.a5': "Every site is optimised for local SEO on delivery: meta tags, Schema.org, sitemap, Google Business profile (Pro and Premium). Your clients find you when they search for your trade in your city.",
      'faq.q6': 'Will my site work on mobile?',
      'faq.a6': "Yes, all my sites are built mobile-first: they adapt perfectly to phones, tablets and computers. About 6 in 10 visitors browse on mobile — it is my number one priority.",
      'faq.q7': 'What if I want to change something after launch?',
      'faq.a7': "Small edits (text, photo, opening hours) are included for 1 month after delivery. After that, you choose: hourly (€40) or a maintenance plan from €39/month. Premium includes 3 months of full maintenance.",
      'faq.q8': 'Who owns the site once it\'s delivered?',
      'faq.a8': "The site is 100% yours upon delivery and final payment. You receive all access: hosting, domain name, source code. No mandatory subscription.",
      'faq.q9': "I have no text, no logo, no photos. Is that a problem?",
      'faq.a9': "No — it is actually the most common case. The copy is written with you from a simple conversation, and I select professional royalty-free visuals until you have your own photos. You approve everything before going live.",
      'faq.q10': "Are the monthly plans (maintenance, SEO…) mandatory?",
      'faq.a10': "No. Your site works perfectly without any subscription. Monthly services are optional, commitment-free and cancellable anytime — the site stays yours no matter what.",
      'faq.q11': "How is this different from subscription website offers?",
      'faq.a11': "With a subscription you rent your site: stop paying and it disappears. With Clicboost you buy it once (€390–890) and it is yours for good — code, domain and access included. Over 3 years, a €50/month subscription costs more than €1,800.",
      /* Contact */
      'contact.title.l1': "Let's talk about",
      'contact.title.l2': 'your project',
      'contact.sub': 'Free quote in 24h. No commitment.',
      'contact.alts.title': 'Or reach out directly',
      'contact.alt.email.label': 'Direct email',
      'contact.alt.phone.label': 'Phone',
      'contact.alt.wa.label': 'WhatsApp',
      'contact.alt.wa.text': 'Fast reply',
      'contact.alt.cal.label': "Book a free call",
      'contact.alt.cal.text': "15 minutes, no commitment",
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
      'form.plan.seo': "Local SEO — from €149/mo",
      'form.plan.maint': "Maintenance — from €39/mo",
      'form.plan.gmb': "Google Business profile — from €49/mo",
      'form.plan.social': "Social media — €39/mo",
      'form.error.send': "The message could not be sent. Try again, or contact me directly:",
      'form.submit': 'Get my free quote',
      'form.reassure': '✓ Free · ✓ Reply within 24h · ✓ No commitment',
      'form.success.title': "Message received!",
      'form.success.text': "Within 24 business hours you will receive an email from contact@clicboost.fr with a priced quote and concrete recommendations. Urgent? Message me on WhatsApp.",
      'form.error.required': 'This field is required.',
      'form.error.email': 'Invalid email address.',

      /* About */
      /* Footer */
      'footer.tag': 'Independent studio · Across France',
      'footer.rights': 'All rights reserved',
      'footer.legal': 'Legal notice',
      'footer.cookies': 'Cookie settings',
      'footer.legalid': 'Sole trader Merouani — SIRET 10720502300016',
      'footer.avail': "Limited slots each month · Across France",
      'footer.response': 'Response within 24h',
    }
  };

  /* ── Appliquer la langue ── */
  const getLang = () => localStorage.getItem('lang') || (navigator.language.startsWith('en') ? 'en' : 'fr');

  const applyLang = (lang) => {
    const dict = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;
    // Les pages avec leur propre <title>/description SEO (services) désactivent l'override
    if (document.documentElement.getAttribute('data-i18n-meta') !== 'off') {
      document.title = dict['meta.title'];
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', dict['meta.desc']);
    }

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

      /* Envoi réel (FormSubmit AJAX) — le succès n'est affiché
         qu'après une vraie réponse OK du serveur. */
      const data = new FormData(contactForm);
      const payload = {
        name: data.get('name'),
        email: data.get('email'),
        telephone: data.get('phone') || 'non renseigné',
        projet: data.get('plan') || 'non précisé',
        message: data.get('message'),
        _subject: 'Nouvelle demande de devis — Clicboost',
        _template: 'table'
      };

      const submitBtn = contactForm.querySelector('.form-submit');
      const submitLabel = submitBtn ? submitBtn.querySelector('[data-i18n="form.submit"]') : null;
      const sendError = document.getElementById('formSendError');
      const isFr = (document.documentElement.lang || 'fr').startsWith('fr');
      if (sendError) sendError.hidden = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        if (submitLabel) submitLabel.textContent = isFr ? 'Envoi…' : 'Sending…';
      }

      fetch('https://formsubmit.co/ajax/contact@clicboost.fr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then((r) => {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.json();
        })
        .then(() => {
          if (formSuccess) {
            formSuccess.classList.add('visible');
            formSuccess.setAttribute('aria-hidden', 'false');
            contactForm.setAttribute('aria-hidden', 'true');
          }
          if (typeof window.plausible === 'function') window.plausible('devis_envoye');
        })
        .catch(() => {
          /* Échec réseau/serveur : on rend la main et on propose un canal direct */
          if (submitBtn) {
            submitBtn.disabled = false;
            if (submitLabel) submitLabel.textContent = dict()['form.submit'] || 'Recevoir mon devis gratuit';
          }
          if (sendError) sendError.hidden = false;
        });
    });
  }

  /* ──────────────────────────────────────────────
     PRÉ-SÉLECTION DE LA FORMULE — les CTA « Choisir X »
     remplissent le select du formulaire (zéro re-saisie)
     ────────────────────────────────────────────── */
  document.querySelectorAll('[data-plan]').forEach((el) => {
    el.addEventListener('click', () => {
      const sel = document.getElementById('contactPlan');
      if (sel) sel.value = el.getAttribute('data-plan');
    });
  });

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

/* ══════════ Calculateur de potentiel clients (#calculateur) ══════════ */
(function () {
  var root = document.getElementById('calculateur');
  if (!root) return;
  var vis = document.getElementById('calcVis');
  var conv = document.getElementById('calcConv');
  var ticket = document.getElementById('calcTicket');
  var metier = document.getElementById('calcMetier');
  var out = {
    vis: document.getElementById('calcVisVal'),
    conv: document.getElementById('calcConvVal'),
    ticket: document.getElementById('calcTicketVal'),
    clients: document.getElementById('calcClients'),
    caMonth: document.getElementById('calcCaMonth'),
    caYear: document.getElementById('calcCaYear'),
    payback: document.getElementById('calcPayback')
  };
  if (!vis || !conv || !ticket || !metier) return;

  /* Préréglages prudents par métier : [valeur moyenne client €, % contact] */
  var PRESETS = {
    artisan: [900, 2], plombier: [180, 3], electricien: [250, 3],
    coiffeur: [45, 4], vtc: [80, 3], commerce: [35, 4], autre: [150, 3]
  };
  var SITE_PRICE = 390;

  function fmtInt(n) { return Math.round(n).toLocaleString('fr-FR'); }
  function fmtDec(n) { return (+n).toLocaleString('fr-FR'); }

  function update() {
    var v = +vis.value, c = +conv.value, t = +ticket.value;
    var clients = v * c / 100;
    var caMonth = clients * t;
    out.vis.textContent = fmtInt(v);
    out.conv.textContent = fmtDec(c);
    out.ticket.textContent = fmtInt(t);
    out.clients.textContent = fmtInt(clients);
    out.caMonth.textContent = fmtInt(caMonth) + '\u00a0€';
    out.caYear.textContent = fmtInt(caMonth * 12) + '\u00a0€';
    out.payback.textContent = caMonth > 0 ? fmtInt(Math.max(1, Math.ceil(SITE_PRICE / (caMonth / 30)))) : '—';
  }

  [vis, conv, ticket].forEach(function (el) { el.addEventListener('input', update); });
  metier.addEventListener('change', function () {
    var p = PRESETS[metier.value] || PRESETS.autre;
    ticket.value = p[0];
    conv.value = p[1];
    update();
  });
  update();
})();
