# Guide de Lancement Local (Local Setup) — Portfolio
> Prérequis, installation des dépendances, et commandes d'exécution locale.

---

## 1. Prérequis

*   **Node.js :** Version 18.x ou 20.x recommandées (moteur d'exécution JavaScript).
*   **npm :** Version 9.x ou supérieure (gestionnaire de paquets).
*   **Système d'exploitation :** Linux, macOS ou Windows WSL.

---

## 2. Commandes de Démarrage

### Étape 1 : Cloner le dépôt et se placer à la racine
```bash
git clone <url-du-depot>
cd portfolio-horacio
```

### Étape 2 : Installer les dépendances
```bash
npm install
```

### Étape 3 : Lancer le serveur de développement local
```bash
npm run dev
```
Le serveur démarre instantanément et se rend accessible sur `http://localhost:3000` (ou le port configuré par défaut dans Vite).

### Étape 4 : Lancer le vérificateur de typage et linter
```bash
npm run lint
```

### Étape 5 : Compiler le projet pour la production (export statique)
```bash
npm run build
```
Cette commande génère un dossier `/dist` à la racine contenant l'ensemble des fichiers HTML, CSS compilé et JS compressé prêts à être uploadés.
