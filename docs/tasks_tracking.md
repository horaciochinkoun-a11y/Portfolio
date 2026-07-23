# Suivi des Tâches (Tasks Tracking) — Portfolio
> Tableau de bord de l'avancement du projet, des correctifs et de la dette technique.

---

## 1. État d'Avancement Global

| Catégorie | Fonctionnalité | Statut | Date de livraison |
|---|---|---|---|
| **Structure** | Modélisation des types `/src/types.ts` | **Terminé** | 2026-07-08 |
| **Structure** | Base de données de contenu `/src/data.ts` | **Terminé** | 2026-07-08 |
| **Interface** | Barre de navigation responsive `Navbar` | **Terminé** | 2026-07-08 |
| **Interface** | En-tête de présentation interactive `Hero` | **Terminé** | 2026-07-08 |
| **Interface** | Section biographique et 4 étapes `About` | **Terminé** | 2026-07-08 |
| **Interface** | Matrice de compétences "sans pourcentage" `Skills` | **Terminé** | 2026-07-08 |
| **Interface** | Grille de projets avec études de cas `Projects` | **Terminé** | 2026-07-08 |
| **Interface** | Fenêtre d'étude de cas `CaseStudyModal` | **Terminé** | 2026-07-08 |
| **Interface** | Offres de services et exclusions `Services` | **Terminé** | 2026-07-08 |
| **Interface** | Formulaire avec sélection de rôle `Contact` | **Terminé** | 2026-07-08 |
| **Interface** | Pied de page sémantique `Footer` | **Terminé** | 2026-07-08 |
| **Lissage** | Intégration globale dans `App.tsx` | **Terminé** | 2026-07-08 |
| **Lissage** | Importations polices Google Fonts & CSS Theme | **Terminé** | 2026-07-08 |
| **Validation** | Passage de la suite de typage `lint_applet` | **Terminé** | 2026-07-08 |
| **Lissage** | Remplacement des icônes de substitution par les vrais logos de marque | **Terminé** | 2026-07-08 |
| **Lissage** | Promotion de DocuGen Pro en étude de cas majeure avec lien de production et captures réelles | **Terminé** | 2026-07-08 |
| **Lissage** | Promotion de l'application 'Entretien Pro' en étude de cas majeure avec lien de production et captures d'écran réelles conformes | **Terminé** | 2026-07-08 |

---

## 2. Dette Technique & Tâches Futures

*   **Tâche Future : Integration API Formspree**
    *   *Priorité :* Moyenne
    *   *Description :* Remplacer la simulation de soumission du formulaire par l'envoi réel à l'adresse e-mail de Horacio via un endpoint Web3Forms ou Formspree lors de la mise en ligne finale.
*   **Tâche Future : Optimisation WebP des mockups**
    *   *Priorité :* Basse
    *   *Description :* Compresser toutes les captures d'écran réelles des prototypes au format WebP avant le téléversement FTP final sur LWS pour optimiser la bande passante mobile.

### Panel Administrateur
- [x] Initialisation Firebase
- [x] Dashboard de base
- [x] Raccordement Contact Public -> Firestore
- [x] Module "Boîte de réception" (MessagesAdmin)
- [x] Module "Projets" (ProjectsAdmin - Ajout, modification, suppression)
- [x] Module "Textes, Prestations, Compétences et Contacts" (ContentAdmin - Édition intégrale et dynamique de la page d'accueil)
- [x] Porte dérobée interactive (appui long de 3s sur le logo avec animation circulaire et compte à rebours) pour l'accès sécurisé à la console d'administration
- [x] Ajout d'un bouton de retour vers le site public sur l'écran de connexion administrateur
- [x] Résolution de l'affichage des images hors du sandbox (recréation de l'arborescence statique dans `/public/images`)
- [x] Raccordement dynamique complet de toutes les sections publiques (About, Services, Skills, Contact, FloatingWhatsApp) avec Firestore et fallback statique ultra-robuste

