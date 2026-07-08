# Guide de Déploiement Statique sur LWS — Portfolio
> Instructions pas à pas pour uploader le build de production sur l'hébergement mutualisé de Horacio.

---

## 1. Phase de Compilation (Build)

Avant d'envoyer les fichiers sur votre serveur LWS, compilez le projet en local avec la commande suivante :

```bash
npm run build
```

Le compilateur Vite rassemble, minifie et optimise vos fichiers, et crée un dossier nommé **`dist/`** à la racine de votre projet. C'est le contenu de ce dossier **`dist/`** (et lui seul) qu'il faut envoyer en ligne.

---

## 2. Téléversement FTP (simple upload)

Pour publier votre site sur le domaine `horaciochinkoun.site` :

### Étape 1 : Télécharger un client FTP
Installez un logiciel comme **FileZilla** (gratuit et open-source) sur votre ordinateur.

### Étape 2 : Récupérer vos identifiants FTP LWS
Connectez-vous à votre espace client LWS, allez dans la gestion de votre hébergement, et cherchez la section **Comptes FTP** pour récupérer :
*   L'hôte (généralement `ftp.horaciochinkoun.site` ou une adresse IP).
*   L'identifiant de connexion.
*   Le mot de passe associé.

### Étape 3 : Se connecter et uploader
1.  Ouvrez FileZilla, renseignez les identifiants et cliquez sur **Connexion rapide**.
2.  Dans la colonne de droite (Serveur distant), rendez-vous dans le répertoire racine public. Chez LWS, il est généralement nommé **`htdocs/`**, **`public_html/`** ou **`web/`**.
3.  Dans la colonne de gauche (Fichiers locaux), localisez le dossier **`dist/`** de votre projet.
4.  Ouvrez ce dossier **`dist/`**, sélectionnez **tous les fichiers et dossiers qu'il contient** (dont `index.html` et le répertoire `assets/`), et glissez-les vers la colonne de droite (sur le serveur distant).
5.  Attendez que tous les transferts soient terminés.

---

## 3. Validation de Mise en Ligne

Une fois le transfert terminé :
1.  Videz le cache de votre navigateur.
2.  Rendez-vous sur `https://horaciochinkoun.site`.
3.  Vérifiez que toutes les icônes s'affichent correctement, que la navigation flottante est fonctionnelle et que les fenêtres d'études de cas s'ouvrent sans erreur.
