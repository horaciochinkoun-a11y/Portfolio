# Charte Graphique — Design System
> Identité visuelle, règles d'usage typographique, et spécifications des composants UI.

**Version :** 2.0  
**Thème :** Light Luxury (Warm Cream & Deep Charcoal, accents Warm Orange)  
**Dernière mise à jour :** 2026-07-08  

---

## Table des matières
1. [Palette de Couleurs](#1-palette-de-couleurs)
2. [Typographie et Échelle](#2-typographie-et-échelle)
3. [Espacement & Layout](#3-espacement--layout)
4. [Rayons de Coins (Border Radius)](#4-rayons-de-coins-border-radius)
5. [Composants UI Spécifications](#5-composants-ui-spécifications)
6. [Logo & Wordmark](#6-logo--wordmark)
7. [Iconographie](#7-iconographie)
8. [Surfaces & Élévation Responsive](#8-surfaces--élévation-responsive)
9. [Imagerie & Formes](#9-imagerie--formes)
10. [Do's & Don'ts (7 + 7)](#10-dos--donts-7--7)
11. [Accessibilité & Contrastes](#11-accessibilité--contrastes)

---

## 1. Palette de Couleurs

| Nom sémantique | Valeur Hex | Token CSS / Tailwind | Rôle primaire | Restrictions | Niveau d'autorité |
|---|---|---|---|---|---|
| **Cream Canvas** | `#faf8f5` | `bg-[#faf8f5]` / `--color-brand-cream` | Arrière-plan global chaleureux et texturé. | Conserver l'aspect grisé avec le pattern de grille d'alignement. | Primaire |
| **Deep Charcoal** | `#181615` | `bg-[#181615]` / `--color-brand-primary` | Couleur de base des textes, boutons primaires et zones sombres structurantes (Navbar, Footer). | Ne pas diluer son opacité pour les textes importants. | Primaire |
| **Warm Orange** | `#ea580c` | `text-[#ea580c]` / `--color-brand-accent` | Couleur d'accentuation, boutons secondaires, bordures d'alerte, puces. | Éviter d'utiliser pour les grands blocs de texte continus. | Primaire |
| **Sand Border** | `#e7e2d8` | `border-[#e7e2d8]` | Bordures structurelles de séparation et délimitation des cartes plates. | Indispensable pour marquer les divisions de la grille de mise en page. | Secondaire |
| **Pure White** | `#ffffff` | `bg-white` | Fond des cartes interactives et conteneurs de listes. | Toujours ceindre d'une fine bordure Sand Border `#e7e2d8`. | Secondaire |
| **Coal Accent** | `#292625` | `text-[#292625]` | Textes courants secondaires et libellés intermédiaires. | Offre un excellent niveau de lisibilité tout en adoucissant le contraste du noir pur. | Secondaire |

---

## 2. Typographie et Échelle

*   **Police d'affichage (Display, grands titres) :** **Space Grotesk** ou **Inter** en majuscules extra-bold. Apporte un aspect géométrique moderne, technologique et épuré.
*   **Police d'élégance (Citations, emphase) :** **Cormorant Garamond** (Google Fonts). Un serif haut de gamme utilisé pour accentuer des passages clés, des chiffres ou des notions d'excellence.
*   **Police sans-serif (Texte courant, UI) :** **Inter** (Google Fonts). Choisi pour sa neutralité suisse et son excellente lisibilité sur mobile à petite échelle.
*   **Police à chasse fixe (Données, prompts, variables) :** **JetBrains Mono** (Google Fonts). Choisi pour donner un aspect technique rigoureux "architecte de code".

### Échelle typographique

| Rôle | Taille (px) | Line-height | Letter-spacing | Token Tailwind | Règle de tracking |
|---|---|---|---|---|---|
| **H1 Hero** | `48px` - `60px` | `1.1` | `-0.02em` | `text-4xl md:text-5xl xl:text-6xl` | Serré pour garder de l'impact visuel en display. |
| **H2 Section** | `30px` - `48px` | `1.2` | `-0.01em` | `text-3xl md:text-5xl` | Moyen pour conserver la clarté structurelle. |
| **Body Long** | `14px` - `15px` | `1.6` | `0` | `text-xs md:text-sm text-slate-700` | Neutre pour maximiser l'effort de lecture prolongée. |
| **Code Block** | `12px` - `13px` | `1.5` | `0` | `font-mono text-xs` | Alignement rigoureux des colonnes. |
| **Caption / Label**| `10px` | `1.4` | `0.15em` | `text-[10px] uppercase tracking-widest` | Très espacé pour rester parfaitement lisible malgré la petite taille. |

---

## 3. Espacement & Layout

*   **Unité de base :** `4px` (système de grille à base de 4, 8, 12, 16, 24, 32, 48, 64px).
*   **Densité :** Épuré / confortable. La priorité est accordée au vide sémantique et aux marges généreuses pour aérer l'œil et guider le regard du recruteur vers les points clés.
*   **Grille d'Alignement :** Présence d'un quadrillage vectoriel d'alignement fin de couleur `#e7e2d8` en arrière-plan (`grid-pattern`) pour souligner la précision d'assemblage du layout.
*   **Max-width :** `1280px` (`max-w-7xl mx-auto`).

---

## 4. Rayons de Coins (Border Radius)

*   **Boutons (Buttons) :** `0px` (`rounded-none`) pour un aspect éditorial extrêmement haut de gamme et affûté.
*   **Cartes (Cards) :** `0px` (`rounded-none`) avec des angles vifs "flat sharp" caractéristiques d'un minimalisme rigoureux.
*   **Badges :** `0px` (`rounded-none`) afin d'interdire tout arrondi intempestif et maintenir une unité géométrique absolue.

---

## 5. Composants UI Spécifications

### Bouton d'Action Plat "Sharp"
*   **Rôle :** CTA majeur (Contact, Ouvrir étude de cas).
*   **Background :** `bg-[#181615]` (charcoal profond) ou contour `border border-[#181615]`.
*   **Texte :** Blanc (ou noir), Inter gras (`font-extrabold`), taille 10px, majuscules tracking-widest.
*   **Padding :** 16px haut/bas, 32px gauche/droite.
*   **Bordure :** Angles vifs (`rounded-none`).
*   **États :**
    *   *Default :* Plat sans ombre excessive, angles parfaits.
    *   *Hover :* Devient orange vif (`bg-[#ea580c]`) ou s'inverse avec un contraste fort.
    *   *Focus-visible :* Outline noir de 2px.
    *   *Disabled :* Devient gris clair (`bg-slate-300`), curseur non autorisé.

---

## 6. Logo & Wordmark

*   **Concept :** Un monogramme de haute précision graphique associant les initiales `H.C` de Horacio Chinkoun avec un point d'emphase coloré orange `.` qui fait office de signature.
*   **Règles d'usage :** Le mot-clé graphique doit toujours être écrit avec un contraste fort (noir sur fond blanc ou crème, ou blanc sur fond noir) en capitales extra-grasses sans empattement.

---

## 7. Iconographie

*   **Style :** Tracé fin minimaliste (Lucide Icons).
*   **Stroke :** `1.5px` pour rester fin et équilibré avec la police Inter.
*   **Tailles :** `16px` (UI courante), `24px` (titres et en-têtes de cartes).

---

## 8. Surfaces & Élévation Responsive

Pour éviter l'empilement visuel agressif (clutter) :
*   Aucune ombre d'élévation classique n'est tolérée dans le système. La profondeur est créée par des variations de fonds (`#faf8f5` vs `#ffffff` vs `#181615`) et des bordures de structure nettes (`#e7e2d8`).
*   Au survol, une carte change de couleur de bordure (`hover:border-[#181615]`) au lieu d'afficher une ombre, garantissant un comportement moderne et cohérent.

---

## 9. Imagerie & Formes

*   Cadres portraits "Framed": Le portrait d'en-tête de Horacio Chinkoun est inséré dans un double cadre asymétrique décalé, soulignant l'esthétique "galerie d'art / édition imprimée".
*   Interdiction de décorer avec des captures d'écran fictives ou des illustrations d'IA génératives criardes de type "cyberpunk". Préférer des captures haute-fidélité réelles de l'application Nukemap 3D.

---

## 10. Do's & Don'ts (7 + 7)

### ✅ Do's (À faire absolument)
1.  **Garantir des angles vifs rigoureux :** Utiliser exclusivement des bordures `rounded-none` pour l'ensemble des éléments interactifs et structurels.
2.  **Afficher des grilles d'alignement :** Garder le motif de grille vectorielle de fond `#e7e2d8` visible pour marquer le travail d'architecte.
3.  **Utiliser le mono pour les détails techniques :** Toujours formater les noms de fichiers et variables techniques en JetBrains Mono.
4.  **Assurer la lisibilité des prompts :** Toujours présenter les exemples de prompts dans des boîtes de code sombres rétro-éclairées de vert ou d'orange.
5.  **Maintenir l'esthétique du double cadre :** Présenter les visuels clés de Horacio avec un double cadre de décalage asymétrique.
6.  **Optimiser pour le tactile mobile :** Conserver des cibles tactiles de boutons de 44px de hauteur sur mobile.
7.  **Harmoniser les icônes :** Utiliser exclusivement le pack Lucide avec la même épaisseur de trait.

### ❌ Don't (À ne jamais faire)
1.  **Ne jamais utiliser d'arrondis :** Interdire l'usage de classes comme `rounded-lg`, `rounded-full` ou `rounded-2xl` sur le thème global.
2.  **Ne pas ajouter d'ombres diffuses :** Bannir les classes `shadow-lg`, `shadow-md` au profit de bordures nettes de contraste.
3.  **Ne jamais inventer de fausses métriques :** Interdiction absolue de mettre des graphiques d'utilisateurs ou de faux volumes d'abonnés.
4.  **Ne pas utiliser de couleurs criardes de néon :** Éviter les dégradés violents bleu-violet-rose.
5.  **Ne pas masquer le rôle de l'IA :** Toujours déclarer explicitement la méthode de copilotage dans la section méthodologie.
6.  **Ne jamais briser le contraste sur les petits écrans :** Pas de sous-titres gris clair `#cbd5e1` sur fond blanc.
7.  **Ne pas utiliser de boutons trop petits :** Ne jamais descendre sous 40px de hauteur pour un bouton cliquable de soumission.

---

## 11. Accessibilité & Contrastes

*   **Ratio de contraste cible :** Conformité avec la norme WCAG 2.1 niveau AA (ratio d'au moins 4.5:1 pour le texte normal, et 3:1 pour le texte large).
*   **Vérification des contrastes textuels :**
    *   Texte Coal Accent (`#292625`) sur fond Cream Canvas (`#faf8f5`) : **Ratio > 8.5:1 (Conformité AA)**.
    *   Texte Deep Charcoal (`#181615`) sur fond Cream Canvas (`#faf8f5`) : **Ratio > 14.5:1 (Conformité AAA)**.
*   **Focus Ring :** Toutes les actions d'ancrage et de boutons comportent un contour d'accessibilité actif lors de la navigation au clavier.
