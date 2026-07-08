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
