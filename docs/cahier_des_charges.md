# Cahier des Charges — Portfolio Horacio Chinkoun
> Définition du cadre opérationnel, des exigences fonctionnelles et des contraintes d'infrastructure.

**Version :** 1.0  
**Dernière mise à jour :** 2026-07-08  

---

## 1. Expression du Besoin

### Contexte
Horacio Chinkoun est un Product Owner et Concepteur produit spécialisé dans l'intégration de modèles d'IA générative. Son approche innovante repose sur la direction d'agents autonomes pour la production technique. Pour valoriser cette double posture de cadrage fonctionnel et d'orchestration, il requiert un support de communication d'élite : un portfolio interactif structuré.

### Objectifs d'Affaires
1.  **Crédibilité Professionnelle :** Démontrer sa rigueur méthodologique auprès de recruteurs pour des postes de Product Owner salariés.
2.  **Conversion Freelance :** Capter des porteurs de projets désireux de matérialiser leurs idées sous forme de MVPs en pilotant l'IA.
3.  **Honnêteté & Transparence :** Assumer publiquement le rôle de l'IA dans l'exécution de la technique pour se différencier par l'éthique de travail.

---

## 2. Exigences Fonctionnelles

*   **EF-01 : Structure One-Pager Interactive**
    *   Le site principal doit regrouper l'ensemble des sections classiques sur un seul écran fluide : Hero, À propos, Compétences, Projets, Services, Contact.
*   **EF-02 : Études de Cas Détaillées (Deep Dive Modal)**
    *   Les 3 projets phares (Prépa Concours Bénin, NUKEMAP EDU, Mock Interview Pro) doivent posséder une fiche d'analyse interactive accessible au clic sans rupture de navigation.
*   **EF-03 : Déclaration de Statut Limite**
    *   Toutes les réalisations doivent mentionner explicitement leur statut réel : *"Prototype fonctionnel non déployé, sans utilisateur réel à ce jour"*.
*   **EF-04 : Formulaire avec Routage Sémantique**
    *   Le formulaire de contact doit contraindre l'utilisateur à déclarer son rôle (*Recruteur / Client / Autre*) pour adapter la prise de contact.
*   **EF-05 : Déclaration d'Exclusions de Services**
    *   Le site doit comporter une liste explicite des limites techniques ("Ce que je ne fais pas") pour filtrer les demandes non qualifiées.

---

## 3. Exigences Non Fonctionnelles

*   **ENF-01 : Compilateur Statique**
    *   Le site doit pouvoir être exporté sous forme de fichiers HTML/CSS/JS purs (`npm run build`) pour un transfert par FTP classique chez LWS. Aucun serveur Node.js ne doit être requis pour servir les fichiers.
*   **ENF-02 : Mobile-First & Accessibilité**
    *   L'interface doit s'adapter de façon ergonomique aux viewports étroits (smartphones d'Afrique de l'Ouest) avec un contraste WCAG AA minimum.
*   **ENF-03 : Performance & Sobriété**
    *   Absence de bibliothèques tierces massives de rendu ou de frameworks 3D lourds non optimisés. Temps de chargement initial inférieur à 1.5s sur réseau standard.
*   **ENF-04 : Zéro serveurs de calcul pour les démos**
    *   La logique complexe s'exécute côté client (utilisation d'APIs tierces asynchrones s'il y a lieu, ou mock local propre).
