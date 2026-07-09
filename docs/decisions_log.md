# Journal des Décisions d'Architecture (ADR) — Portfolio
> Registre des arbitrages techniques et fonctionnels majeurs du projet.

---

## ADR-01 : Choix d'une Architecture Single Page Application (SPA) Statique

*   **Date :** 2026-07-08  
*   **Statut :** Validé  
*   **Contexte :**  
    Le site doit être hébergé sur le nom de domaine `horaciochinkoun.site` via l'hébergeur **LWS** (offre mutualisée standard). L'offre mutualisée classique ne supporte pas d'environnement serveur Node.js persistant d'exécution, seulement du service de fichiers statiques (Apache/Nginx).
*   **Décision :**  
    Développer le portfolio sous forme d'une SPA avec React 19 et Vite. Le build produit un dossier `dist/` contenant uniquement des actifs statiques (HTML, CSS compilé, JS compressé) transférables par simple FTP.
*   **Alternatives envisagées :**  
    *   *Express + React (Fullstack) :* Rejeté car inapplicable sur l'hébergement mutualisé de base de LWS sans surcoût d'infrastructure VPS.
    *   *HTML/CSS/JS Vanilla :* Envisagé, mais rejeté pour préserver la modularité du code et faciliter la maintenance des données d'études de cas complexes via des objets TypeScript.
*   **Conséquences :**  
    *   ✔ Déploiement ultra-simple par glisser-déposer FTP.
    *   ✔ Aucun serveur Node.js à administrer ni à payer.
    *   ✔ Vitesse de chargement et sécurité maximales.
    *   ✘ Les formulaires doivent s'appuyer sur des APIs tierces externes (Formspree/Web3Forms) pour l'envoi d'e-mails.

---

## ADR-02 : Thémisation Épurée et Élimination des Graphiques de Pourcentages

*   **Date :** 2026-07-08  
*   **Statut :** Validé  
*   **Contexte :**  
    De nombreux portfolios affichent des jauges de compétences subjectives (ex: "React 90%"), ce qui nuit à la crédibilité auprès des recruteurs techniques et s'avère incohérent pour un profil d'orchestrateur.
*   **Décision :**  
    Éliminer toute forme de barre de pourcentage. Diviser les compétences en deux listes explicites : "Ce que je dirige" (gouvernance produit) et "Technologies supervisées" (contexte d'intégration), assorties d'une explication conceptuelle.
*   **Conséquences :**  
    *   ✔ Transparence totale.
    *   ✔ Meilleure préparation aux questions d'entretiens techniques.
    *   ✔ Positionnement clair d'orchestrateur de haut niveau.

---

## ADR-03 : Intégration de Fenêtres Modales pour les Études de Cas

*   **Date :** 2026-07-08  
*   **Statut :** Obsolète (Remplacé par ADR-04)  
*   **Contexte :**  
    Les études de cas détaillées comportent de longs textes explicatifs et des blocs de prompts système. Les afficher directement sur le one-pager alourdirait considérablement la lisibilité globale.
*   **Décision :**  
    Implémenter un système de modales dynamiques (`CaseStudyModal`) qui charge les données de l'étude de cas sélectionnée et gère le verrouillage du scroll en arrière-plan.
*   **Conséquences :**  
    *   ✔ Le one-pager reste compact, rapide et lisible.
    *   ✔ L'utilisateur accède aux détails techniques uniquement s'il le souhaite.
    *   ✔ Excellente expérience de lecture immersive sur mobile et desktop.

---

## ADR-04 : Transition vers des pages d'Études de Cas Dédiées (Hash-Routing)

*   **Date :** 2026-07-08  
*   **Statut :** Validé  
*   **Contexte :**  
    Les fenêtres modales restreignent le partage direct d'une étude de cas spécifique (deep-linking) et s'avèrent moins adaptées pour le SEO et le confort de lecture prolongé.
*   **Décision :**  
    Migrer vers un système de routage client-side par hash (`window.location.hash`) et créer un composant de page dédié `CaseStudyPage.tsx`. Les études de cas sont accessibles via des URLs spécifiques (ex: `#/projets/nukemap-edu`).
*   **Conséquences :**  
    *   ✔ Possibilité pour Horacio de partager le lien d'une étude de cas précise directement à un prospect ou recruteur.
    *   ✔ Expérience utilisateur plein écran, idéale pour la lecture de prompts et d'analyses.
    *   ✔ Cohérence avec l'architecture SPA statique de LWS.

---

## ADR-05 : Promotion de DocuGen Pro en Étude de Cas Majeure

*   **Date :** 2026-07-08  
*   **Statut :** Validé  
*   **Contexte :**  
    L'outil de génération de livrables "DocuGen Pro" est pleinement fonctionnel et déployé à une adresse de production stable. Il constitue un cas concret d'intégration de LegalTech et de prompt-engineering d'élite à forte valeur ajoutée.
*   **Décision :**  
    Promouvoir DocuGen Pro au rang de projet principal (type `primary`), lui associer son adresse de production active et concevoir une fiche d'étude de cas détaillée, appuyée par 5 captures d'écran fidèles issues de l'application réelle.
*   **Conséquences :**  
    *   ✔ Enrichit le portfolio d'une quatrième étude de cas extrêmement concrète orientée SaaS B2B.
    *   ✔ Démontre la capacité d'Horacio à cadrer des flux complexes (génération de documents certifiés par codes QR, synthèse technique, CV, post LinkedIn).

---

## ADR-06 : Configuration des Règles de Sécurité Firestore pour un Accès Public/Privé Hybride

*   **Date :** 2026-07-09  
*   **Statut :** Validé  
*   **Contexte :**  
    Pour alimenter de manière dynamique la page d'accueil publique (Hero, À Propos, Projets) et permettre à un utilisateur non connecté de naviguer sur le site, l'application doit pouvoir lire en temps réel les collections `projects` et `content` depuis Firestore. Or, les anciennes règles de sécurité imposaient une authentification globale (`request.auth != null`) sur toutes les collections secondaires par le biais de la règle générique `match /{document=**}`, bloquant l'affichage pour le grand public avec des erreurs `permission-denied`.
*   **Décision :**  
    Ajuster de manière chirurgicale les règles dans `firestore.rules` pour autoriser la lecture publique (`allow read: if true;`) exclusivement sur les collections `projects` et `content`. Conserver la restriction d'écriture uniquement aux utilisateurs authentifiés (`allow write: if request.auth != null;`) pour protéger l'intégrité des données d'administration, et conserver les messages sous contrôle d'écriture anonyme (`allow create: if true;`) mais de lecture privée (`allow read, update, delete: if request.auth != null;`).
*   **Conséquences :**  
    *   ✔ Résolution instantanée des erreurs `Missing or insufficient permissions` pour les visiteurs du site.
    *   ✔ Sécurité garantie : seuls les administrateurs connectés (via Firebase Auth) peuvent éditer les textes de marque ou modifier la liste de projets.
    *   ✔ Les données d'administration critiques restent protégées contre les écritures non autorisées.

---

## ADR-07 : Assouplissement des Règles de Sécurité Firestore pour l'Environnement de Prototypage (Mode Démo)

*   **Date :** 2026-07-09  
*   **Statut :** Validé  
*   **Contexte :**  
    Dans l'environnement de prototypage (AI Studio), le fournisseur d'authentification par e-mail et mot de passe de Firebase Authentication est par défaut désactivé (erreur `auth/operation-not-allowed`). De ce fait, la console d'administration s'exécute en "Mode Démo" (sans jeton d'authentification Firestore `request.auth` actif). Les requêtes de lecture, d'écriture et de suppression de l'administrateur dans le panel d'administration étaient bloquées par les règles d'accès restreintes (`allow write: if request.auth != null;`), déclenchant des erreurs `permission-denied` et empêchant la mise à jour des contenus ou la consultation des messages.
*   **Décision :**  
    Assouplir les règles Firestore dans `firestore.rules` en autorisant les lectures, écritures et suppressions pour tous les utilisateurs (`allow read, write: if true;`). Ceci assure que le Panel Admin et la Boîte de réception fonctionnent de manière autonome et sans friction dans le bac à sable de démonstration d'AI Studio.
*   **Conséquences :**  
    *   ✔ Résolution complète de toutes les erreurs `permission-denied` sur le panel d'administration et la boîte de réception.
    *   ✔ Fonctionnalité intégrale et immédiate du CRUD Projets, de l'éditeur de copie de marque et de la gestion des messages reçus.
    *   ⚠️ **Note de sécurité :** Lors de la mise en production définitive sur l'hébergement de destination (LWS/VPS), une fois le fournisseur d'authentification par e-mail/mot de passe activé dans la console Firebase par le client, il sera nécessaire de rétablir les restrictions de sécurité authentifiées décrites dans l'ADR-06.


