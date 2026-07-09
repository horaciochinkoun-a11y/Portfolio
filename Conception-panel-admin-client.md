# Conception du Panel Admin Client (non-développeur)

> Remplace `[NOM_PROJET]` et `[TYPE_APP]` avant utilisation.
> `[TYPE_APP]` = `ecommerce` | `presse_blog` | `portfolio` | `autre (précise)`

---

## CONTEXTE
Tu conçois le panel d'administration de **[NOM_PROJET]** pour un propriétaire **non-développeur**. Cette personne devra gérer le contenu/l'activité de la plateforme **au quotidien, seule, sans jamais toucher au code**. Le panel doit être au niveau d'usabilité d'un back-office WordPress : intuitif, sans jargon technique, sans risque de casser le site en cliquant au mauvais endroit.

Tu ne codes RIEN avant validation explicite à chaque étape.

---

## ÉTAPE 1 — CADRAGE
Confirme avant tout :
- Type d'application : `[TYPE_APP]`
- Combien de personnes utiliseront le panel côté client (1 personne, ou plusieurs avec des rôles différents — ex: rédacteur vs rédacteur en chef) ?
- Fréquence d'usage attendue (quotidienne, hebdo, ponctuelle) — ça change le niveau de friction tolérable.
- Niveau de littératie numérique du client (utilise déjà WhatsApp Business / Facebook Page, ou très débutant) ?

➡️ Tu attends ma confirmation sur ces 4 points avant de spécifier quoi que ce soit.

## ÉTAPE 2 — SPÉCIFICATION DU PANEL (modulaire)

### 2.0 Socle commun (TOUJOURS inclus, quel que soit le type d'app)
- **Authentification simple** : connexion email/mot de passe, réinitialisation de mot de passe en autonomie (sans appeler le développeur).
- **Dashboard d'accueil** : vue d'ensemble en langage humain ("3 nouveaux messages", "2 articles en brouillon"), pas des métriques techniques.
- **Gestion de contenu CRUD** : créer/modifier/supprimer avec confirmation explicite avant suppression définitive (pas de suppression accidentelle en un clic).
- **Bibliothèque média** : upload image/vidéo par glisser-déposer, compression/optimisation automatique côté serveur (le client ne doit jamais avoir à redimensionner une image lui-même).
- **Aperçu avant publication** : voir le rendu final avant que ce soit visible publiquement.
- **Historique / annulation** : pouvoir revenir à la version précédente d'un contenu en cas d'erreur, sans intervention technique.
- **Responsive admin** : le panel doit être utilisable depuis un téléphone (le client postera souvent depuis son mobile, pas un ordinateur).
- **Gestion des rôles** (si plusieurs utilisateurs identifiés à l'étape 1) : qui peut publier directement vs qui doit soumettre pour validation.

### 2.1 Module spécifique — E-COMMERCE (si `[TYPE_APP] = ecommerce`)
- Gestion produits : ajout/modif avec variantes (taille, couleur), prix, description, photos multiples
- Gestion stock : alerte rupture de stock, mise à jour quantité
- Gestion commandes : statuts (en attente/expédiée/livrée), export liste commandes
- Paiements : suivi des transactions Mobile Money/Kkiapay/FedaPay, pas de saisie manuelle de montants par le client (risque d'erreur/fraude)
- Promotions : codes promo, soldes temporaires avec dates de début/fin automatiques

### 2.2 Module spécifique — PRESSE / BLOG (si `[TYPE_APP] = presse_blog`)
- Éditeur de texte riche (type WYSIWYG, pas de markdown si le client n'est pas technique)
- Statuts éditoriaux : brouillon / en relecture / publié / archivé
- Planification de publication (programmer un article pour une date/heure future)
- Catégories et tags pour organiser le contenu
- Gestion multi-auteurs avec attribution claire
- Modération des commentaires si activés (approuver/rejeter/bannir)
- SEO basique par article : titre, méta-description, image de partage — avec valeurs par défaut intelligentes si le client ne remplit rien

### 2.3 Module spécifique — PORTFOLIO (si `[TYPE_APP] = portfolio`)
- Édition de sections statiques (à propos, services, contact) en remplissant des champs simples, pas en éditant du HTML
- Galerie de projets : ajout/réorganisation par glisser-déposer
- Formulaire de contact : le client doit voir les messages reçus directement dans le panel (pas seulement par email, au cas où il perd l'email)

➡️ Tu m'envoies la liste complète des fonctionnalités du panel pour validation, module par module. J'approuve, je retire, ou j'ajoute avant que tu codes quoi que ce soit.

## ÉTAPE 3 — CONSTRUCTION
Une fois la spec validée :
- Implémente module par module, pas en bloc.
- Chaque fonctionnalité livrée doit être accompagnée d'un test manuel décrit (étapes précises pour vérifier qu'elle marche).
- Commit séparé par fonctionnalité.

## ÉTAPE 4 — TEST D'USABILITÉ NON-DÉVELOPPEUR (obligatoire avant livraison)
Simule un utilisateur non-technique effectuant les tâches quotidiennes types selon le module concerné (ex : publier un article avec image, ajouter un produit, modifier une section du portfolio). Pour chaque tâche :
- Nombre de clics nécessaires
- Y a-t-il un point où l'action n'est pas évidente sans explication ?
- Y a-t-il un risque de casser quelque chose de façon irréversible par erreur ?

Documente chaque friction trouvée avec une proposition de correction. Ne déclare jamais le panel "prêt" sans avoir fait ce test explicitement.

## ÉTAPE 5 — LIVRAISON ET FORMATION
- Rédige un mini-guide (1-2 pages, pas un manuel technique) avec captures d'écran pour les 3-5 tâches les plus fréquentes que le client effectuera.
- Prévois un canal de support post-livraison défini (pas implicite) — sinon le client va t'écrire sur WhatsApp à n'importe quelle heure pour des questions évitables.

---

## RÈGLES TRANSVERSALES
- Aucun terme technique visible dans l'UI du panel (pas de "slug", "payload", "endpoint" — utilise le vocabulaire métier du client).
- Toute action destructrice (suppression, désactivation) doit avoir une confirmation explicite.
- Le panel doit fonctionner même si le client ne comprend rien au code — c'est le seul critère de réussite qui compte, pas l'élégance technique.
