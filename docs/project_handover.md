# Fiche de Transfert (Project Handover) — Portfolio
> Synthèse technique et fonctionnelle pour la reprise ou maintenance du projet par un tiers.

---

## 1. Résumé du Projet

Ce projet est un portfolio d'Architecte Fonctionnel & Orchestrateur IA développé en React/Vite + Tailwind CSS v4. Il est entièrement compilé de façon statique pour s'adapter à des contraintes d'infrastructure légères (LWS mutualisé standard).

*   **Point d'entrée principal :** `/src/main.tsx`
*   **Composant racine :** `/src/App.tsx`
*   **Source de données textuelle :** `/src/data.ts`
*   **Types de validation :** `/src/types.ts`

---

## 2. Fonctionnalités Incomplètes / À Intégrer

*   **Raccordement Réel du Formulaire :**
    Le composant `/src/components/Contact.tsx` intègre actuellement une simulation asynchrone locale d'envoi. Pour le brancher sur un système d'envoi d'e-mail réel sans serveur de backend Node.js, il convient de :
    1.  Créer un compte gratuit sur [Web3Forms](https://web3forms.com) ou [Formspree](https://formspree.io).
    2.  Récupérer la clé d'API (Access Token).
    3.  Modifier la méthode `handleSubmit` du composant `Contact.tsx` pour effectuer un appel `POST` réel de type `fetch` vers l'endpoint choisi.

---

## 3. Dépendances Critiques

*   `lucide-react` (v0.546.0) : Utilisé pour l'ensemble des icônes de navigation, d'états, et d'études de cas.
*   `react` & `react-dom` (v19.0.1) : Socle d'affichage réactif.
*   `tailwindcss` & `@tailwindcss/vite` (v4.1.14) : Système de design et de compilation des styles de composants en direct.
