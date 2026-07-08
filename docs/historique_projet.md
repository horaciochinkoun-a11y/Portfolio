# Historique du Projet — Portfolio Horacio Chinkoun
> Mémoire centralisée et vue d'ensemble technique du portfolio d'Architecte Fonctionnel & Orchestrateur IA.

**Version :** 1.0  
**Statut :** Actif  
**Dernière mise à jour :** 2026-07-08  

---

## 1. Présentation du Projet

### Objectif
Ce projet consiste à concevoir et développer le portfolio professionnel en ligne de **Horacio Chinkoun**, positionné comme **Architecte Fonctionnel & Orchestrateur de Produits IA**. Le site sert de démonstrateur technologique et de crédibilité pour ses deux cibles majeures : les recruteurs (visant des postes de Product Owner salariés) et les clients freelance (visant des missions de cadrage fonctionnel, prompt engineering d'élite, et direction de prototypes IA).

### Fonctionnalités principales
*   **Hero Section** : Phrase forte d'identité, positionnement d'orchestrateur transparent et boutons de conversion directe.
*   **À propos** : Biographie moyenne d'architecte et illustration de sa méthodologie rigoureuse en 4 étapes (Cadrage, Direction IA, DA & UX, Validation QA).
*   **Matrice de compétences** : Séparation stricte entre "Ce que je dirige" et "Technos supervisées par l'IA", éliminant les clichés d'indicateurs de pourcentages.
*   **Réalisations & Études de cas** : Grille interactive mettant en valeur 3 produits majeurs (Prépa Concours Bénin, NUKEMAP EDU, Mock Interview Pro) avec fenêtres modales d'analyses fonctionnelles complètes, et 4 produits utilitaires secondaires.
*   **Services** : Les 4 signatures de prestations et une déclaration éthique explicite des limites contractuelles ("Ce que je ne fais pas").
*   **Contact** : Formulaire optimisé avec sélection de rôle (Recruteur / Client / Autre) pour un routage direct, et coordonnées claires.

---

## 2. Choix d'Architecture Technique

Le site est conçu sous forme d'une **Single Page Application (SPA) ultra-rapide**, compilée de façon 100% statique pour être déployable sur n'importe quel hébergement classique (comme l'offre mutualisée LWS de Horacio sur `horaciochinkoun.site`).

*   **Frontend :** React 19 + TypeScript (Typage robuste, composants isolés et modulaires).
*   **Styling :** Tailwind CSS v4 (Compilateur d'importation direct CSS, classes fluides et thémisation sémantique propre).
*   **Animations :** Micro-transitions et classes CSS de fondu asynchrone pour fluidifier le parcours.
*   **Iconographie :** Lucide React (Pack vectoriel performant et uniforme).
*   **Hébergement cible :** Serveur statique FTP classique (LWS mutualisé ou VPS), sans requis de serveur Node.js actif en production.

---

## 3. Historique des Modifications

### [2026-07-08] - Initialisation et Implémentation du Prototype
*   **Description :** Création de l'arborescence complète, conception du système de types, intégration des fiches produits, écriture de la logique globale des composants React, et mise en place de la suite documentaire exhaustive.
*   **Impact :** Prototype 100% fonctionnel, vérifié sans erreur par la suite de validation de typage (`tsc --noEmit`).

### [2026-07-08] - Intégration d'Iconographie Réelle 3D et Galerie de Captures d'Écran
*   **Description :** Remplacement des icônes d'action par une suite d'icônes 3D d'aspect "clay" générées par IA de haute qualité, intégration d'une photo d'avatar réaliste d'Horacio et implémentation d'un carrousel de captures d'écran réelles (9 images) pour le projet NUKEMAP EDU.
*   **Impact :** Transition immédiate d'une esthétique "fil de fer" vers un rendu produit authentique haute fidélité. Amélioration significative de l'impact visuel et de la crédibilité technique de l'étude de cas pour les recruteurs.

### [2026-07-08] - Liaison de la version déployée en Production (NUKEMAP EDU)
*   **Description :** Liaison officielle du lien de production `https://nukemap-3d.vercel.app` sur la carte principale et dans l'étude de cas détaillée de NUKEMAP EDU.
*   **Impact :** Permet aux visiteurs et recruteurs de tester le simulateur en direct d'un simple clic depuis le portfolio. Dynamisation de l'affichage de statut en "Déployé en production" (couleur vert émeraude active).

### [2026-07-08] - Transition vers des pages d'Études de Cas Dédiées (Hash-Routing)
*   **Description :** Remplacement du système d'affichage par fenêtres modales par un routeur d'ancrage client-side (`window.location.hash`) et création du composant de page dédié `CaseStudyPage.tsx`. Les études de cas majeures sont désormais affichées à des URLs uniques de type `#/projets/:id`.
*   **Impact :** Allègement significatif de l'interface d'accueil, favorisant la concentration du visiteur. Les liens directs (deep-linking) vers les études de cas majeures (comme `#/projets/nukemap-edu` ou `#/projets/prepa-concours-benin`) sont désormais pleinement opérationnels, ce qui permet à un recruteur de partager ou d'accéder instantanément au contenu recherché. La barre de navigation et le bouton de retour à l'accueil collaborent en parfaite synergie.

### [2026-07-08] - Implémentation du Design System "Aquilas Dev" (Warm Luxury)
*   **Description :** Refonte esthétique complète inspirée du design Aquilas Dev. Remplacement de l'ensemble des arrondis par des coins vifs (`rounded-none` / "sharp-flat"), ajout d'un motif de grille d'alignement fine en arrière-plan, passage à une palette de couleurs chaleureuse et raffinée (fond Cream `#faf8f5`, éléments structurels Deep Charcoal `#181615`, accents Warm Orange `#ea580c`), intégration de typographies prestigieuses (`Cormorant Garamond` et `Space Grotesk`), et ajustement des sélections de texte et cadres d'image ("double cadre asymétrique décalé").
*   **Impact :** Alignement total avec la demande de copie visuelle prestigieuse de l'utilisateur. Le portfolio dégage désormais une atmosphère haut de gamme et sophistiquée qui magnifie le professionnalisme d'Horacio Chinkoun sans compromettre la clarté de son contenu.

### [2026-07-08] - Intégration des Vrais Logos Officiels des Technologies
*   **Description :** Remplacement des icônes de substitution par les logos vectoriels officiels de Node.js, React, Tailwind CSS, PostgreSQL, TypeScript et Google Gemini (avec son dégradé caractéristique).
*   **Impact :** Apporte une dimension de crédibilité technique immédiate et une plus grande facilité de lecture pour les recruteurs. Les technologies phares se détachent désormais avec brio et authenticité visuelle.

### [2026-07-08] - Promotion de DocuGen Pro et Intégration de Captures Réelles
*   **Description :** Promotion de DocuGen Pro au rang d'étude de cas majeure (primary project) avec l'intégration de son lien de production en direct (`https://ais-pre-q43ulohc7kvdx6uhwkngzg-145910217857.europe-west3.run.app`) et génération de 5 captures d'écran fidèles issues de l'application réelle pour enrichir son étude de cas (landing page, formulaire de configuration, attestation, post LinkedIn généré, et code QR de validation numérique).
*   **Impact :** Donne au portfolio d'Horacio Chinkoun une quatrième étude de cas extrêmement solide et interactive, démontrant son savoir-faire pratique sur un outil SaaS/LegalTech d'automatisation de livrables.

### [2026-07-08] - Promotion d'Entretien Pro et Intégration des Captures Réelles
*   **Description :** Promotion de l'étude de cas 'Entretien Pro' (précédemment 'Mock Interview Pro') avec liaison officielle vers l'URL de production (`https://mock-interview-pro-475449336443.us-west2.run.app`). Intégration de 6 captures d'écran réelles recréées avec une fidélité chirurgicale à partir des screenshots officiels fournis par l'utilisateur (landing page, écran de configuration rapide, dialogue d'entretien en attente, défi de gestion de crise d'un Chef Cuisinier, en-tête du rapport d'évaluation 0/100, et tableau de bord de debrifing final avec options d'export PDF/Word).
*   **Impact :** Consacre 'Entretien Pro' comme un projet d'ingénierie vocale et de persona conversationnel d'IA majeur, parfaitement documenté et directement consultable en production. Garantit un respect absolu de la consigne d'intégrité de l'utilisateur en bannissant toute illustration générique non représentative au profit d'écrans fidèles à la réalité du produit.

