# Limitations Connues (Known Limitations) — Portfolio
> Journal d'audit des limites actuelles du prototype statique.

---

## 1. Soumission Simulée du Formulaire

*   **Description :** En l'absence de raccordement d'API tiers actif (Formspree ou Web3Forms), le formulaire de contact simule une soumission réussie après 1,5 seconde de délai.
*   **Risque :** Si l'utilisateur envoie un message sur la version déployée sans avoir raccordé l'API, aucun courriel ne parviendra à Horacio.
*   **Correction planifiée :** Inscription sur Web3Forms et injection de la clé sémantique (Access Key) dans le composant `Contact.tsx`.

---

## 2. Mockups et Captures d'Écran Absents

*   **Description :** Les cartes de projets et la fenêtre modale s'appuient sur des icônes vectorielles dynamiques Lucide-React et des structures esthétiques en CSS/Tailwind (gradients flous, fenêtres de simulation) à la place de captures d'écran réelles ou de fichiers d'images de mockups.
*   **Avantage :** Vitesse de chargement optimale (100% vectoriel, aucun fichier image lourd) et résilience sur les smartphones bas de gamme au Bénin.
*   **Alternative :** Si l'utilisateur le souhaite à l'avenir, il pourra uploader des fichiers d'images réels dans un dossier `/public/assets` et modifier la source dans `data.ts`.
