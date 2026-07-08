# Limitations Connues (Known Limitations) — Portfolio
> Journal d'audit des limites actuelles du prototype statique.

---

## 1. Soumission Simulée du Formulaire

*   **Description :** En l'absence de raccordement d'API tiers actif (Formspree ou Web3Forms), le formulaire de contact simule une soumission réussie après 1,5 seconde de délai.
*   **Risque :** Si l'utilisateur envoie un message sur la version déployée sans avoir raccordé l'API, aucun courriel ne parviendra à Horacio.
*   **Correction planifiée :** Inscription sur Web3Forms et injection de la clé sémantique (Access Key) dans le composant `Contact.tsx`.

---

## 2. Intégration Réussie des Captures Réelles (NUKEMAP EDU)

*   **Description :** Les captures d'écran réelles haute fidélité fournies par l'utilisateur pour le projet **NUKEMAP EDU** ont été intégrées directement à l'application. Un carrousel de navigation interactif et une bande de vignettes dynamiques permettent d'inspecter l'interface réelle depuis l'étude de cas détaillée.
*   **Pour les autres projets :** Les autres cartes s'appuient toujours sur des icônes de la bibliothèque premium 3D générées par IA et des icônes Lucide.
*   **Évolutivité :** L'architecture du portfolio supporte dorénavant de manière native l'injection de listes d'images via le champ `screenshots` de l'interface `Project` pour étendre ce comportement à d'autres projets.
