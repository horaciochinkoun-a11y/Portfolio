# Architecture Globale et Onboarding Technique — Portfolio
> Guide d'onboarding complet détaillant la responsabilité de chaque dossier et fichier du dépôt.

---

## 1. Schéma de l'Arborescence

```
/
├── docs/                      # Système de documentation vivant (Source Unique de Vérité)
│   ├── historique_projet.md   # Mémoire et timeline des modifications
│   ├── cahier_des_charges.md  # Specs fonctionnelles et besoins
│   ├── decisions_log.md       # ADR (Architecture Decision Records)
│   ├── tasks_tracking.md      # Tableau de suivi et d'avancement
│   ├── architecture.md        # Ce document (guide technique)
│   ├── seo.md                 # Mots-clés et configuration métadonnées
│   ├── charte_graphique.md    # Système de design (couleurs, typographies)
│   ├── ai_context.md          # Contexte stratégique et prompts d'IA
│   ├── project_handover.md    # Guide de transfert et maintenance
│   ├── local_setup.md         # Commandes d'installation et de lancements
│   ├── environment_variables.md # Liste des variables requises
│   ├── deployment_guide.md    # Guide de mise en ligne sur hébergement classique
│   ├── legal_compliance.md    # Suivi RGPD et conformité
│   ├── known_limitations.md   # Limites actuelles du prototype
│   └── todo_before_production.md # Checklist finale de mise en production
├── src/                       # Code source de l'application React
│   ├── components/            # Composants React modulaires
│   │   ├── Navbar.tsx         # Menu de navigation flottant
│   │   ├── Hero.tsx           # Bannière de présentation d'en-tête
│   │   ├── About.tsx          # Biographie et étapes de méthodologie
│   │   ├── Skills.tsx         # Cartographie des expertises
│   │   ├── Projects.tsx       # Grille des réalisations avec liens vers études de cas
│   │   ├── CaseStudyPage.tsx  # Vue de pleine page pour une étude de cas détaillée
│   │   ├── Services.tsx       # Offres de prestations et exclusions
│   │   ├── Contact.tsx        # Formulaire d'envoi et coordonnées
│   │   ├── Footer.tsx         # Pied de page sémantique
│   │   └── FloatingWhatsApp.tsx # Bouton de contact WhatsApp flottant
│   ├── App.tsx                # Composant racine orchestrant le flux
│   ├── data.ts                # Base de données de contenu sémantique
│   ├── types.ts               # Définitions de types et interfaces TypeScript
│   ├── index.css              # CSS global et variables Tailwind v4
│   └── main.tsx               # Point d'entrée d'initialisation du DOM React
├── index.html                 # Gabarit HTML global servi
├── package.json               # Manifeste de dépendances et scripts de build
├── tsconfig.json              # Configuration du compilateur TypeScript
└── vite.config.ts             # Configuration du bundler Vite
```

---

## 2. Rôle des Fichiers Clés

### `/src/types.ts`
*   **Pourquoi il existe :** Il centralise toutes les interfaces TypeScript (`Project`, `CaseStudy`, `Skill`, `Service`).
*   **Qui l'utilise :** Les composants pour valider le typage des propriétés reçues et `/src/data.ts`.
*   **Ce qui casse s'il disparaît :** Tout le typage du projet est corrompu, empêchant la compilation de réussir.

### `/src/data.ts`
*   **Pourquoi il existe :** Il agit comme la source unique de contenu textuel du portfolio (biographie, projets, études de cas, services).
*   **Qui l'utilise :** `/src/components/About.tsx`, `/src/components/Skills.tsx`, `/src/components/Projects.tsx`, `/src/components/Services.tsx`.
*   **Ce qui casse s'il disparaît :** L'application n'affiche plus aucune donnée, laissant l'interface vide.

### `/src/components/CaseStudyPage.tsx`
*   **Pourquoi il existe :** Il affiche de manière élégante et immersive les analyses techniques de Horacio, en prenant l'intégralité de la page (système de routage via hash).
*   **Qui l'utilise :** `App.tsx` l'affiche dynamiquement selon la route actuelle (`#/projets/:id`).
*   **Ce qui casse s'il disparaît :** Les recruteurs ne peuvent plus lire les études de cas détaillées des projets phares.
