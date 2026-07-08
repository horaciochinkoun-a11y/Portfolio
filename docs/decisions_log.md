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
*   **Statut :** Validé  
*   **Contexte :**  
    Les études de cas détaillées comportent de longs textes explicatifs et des blocs de prompts système. Les afficher directement sur le one-pager alourdirait considérablement la lisibilité globale.
*   **Décision :**  
    Implémenter un système de modales dynamiques (`CaseStudyModal`) qui charge les données de l'étude de cas sélectionnée et gère le verrouillage du scroll en arrière-plan.
*   **Conséquences :**  
    *   ✔ Le one-pager reste compact, rapide et lisible.
    *   ✔ L'utilisateur accède aux détails techniques uniquement s'il le souhaite.
    *   ✔ Excellente expérience de lecture immersive sur mobile et desktop.
