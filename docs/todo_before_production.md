# Checklist de Mise en Production (Todo Before Production) — Portfolio
> Étapes finales indispensables avant d'officialiser le déploiement sur horaciochinkoun.site.

---

## 1. Sécurité et Raccordements
- [ ] Activer le fournisseur de connexion **Email/Mot de passe** (Email/Password) dans l'onglet *Authentication* de la console Firebase de production.
- [ ] Recréer l'utilisateur administrateur avec un mot de passe fort via l'interface d'Authentication de Firebase.
- [ ] Rétablir les règles de sécurité strictes et authentifiées dans `firestore.rules` (voir ADR-06) et les déployer via la CLI Firebase (`firebase deploy --only firestore:rules`) afin de bloquer les écritures et consultations de messages par le public non connecté.
- [ ] Créer un compte d'accès sur **Web3Forms** ou **Formspree** pour obtenir un Access Key d'envoi.
- [ ] Connecter la méthode d'envoi réelle dans `/src/components/Contact.tsx`.
- [ ] Tester la réception d'un e-mail d'essai depuis un smartphone réel et une adresse tierce.

---

## 2. Optimisations et Performance (Mobile Audit)
- [ ] Lancer un audit Google Lighthouse en navigation privée.
- [ ] S'assurer que le score de Performance est supérieur à 95/100.
- [ ] S'assurer que le score d'Accessibilité est de 100/100 (contrastes et balises sémantiques).

---

## 3. SEO et Domaine
- [ ] Vérifier la bonne indexation des balises meta dans le fichier `index.html` compilé.
- [ ] Configurer la redirection HTTPS forcée via un fichier `.htaccess` à la racine de l'hébergement LWS.
- [ ] Déclarer le site sur la Google Search Console pour suivre les mots-clés béninois.
