# Charte Graphique — Design System
> Identité visuelle, règles d'usage typographique, et spécifications des composants UI.

**Version :** 1.0  
**Thème :** Light (Sable / Slate épuré)  
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
| **Deep Slate** | `#0f172a` | `--color-slate-900` | Arrière-plan des en-têtes noirs et menus scrolled. | Ne pas utiliser pour les textes courants sur fond noir. | Primaire |
| **Indigo Velvet** | `#6366f1` | `--color-brand-accent` | Couleur d'accentuation, boutons d'action majeurs, badges. | Ne jamais utiliser comme couleur de texte sur fond blanc. | Primaire |
| **Soft Blue Grey**| `#f8fafc` | `--color-slate-50` | Arrière-plan global des pages claires. | Ne pas utiliser comme fond d'écriture pour du texte blanc. | Secondaire |
| **Pristine White** | `#ffffff` | `bg-white` | Arrière-plan des cartes (cards) et des blocs modaux. | Ne pas empiler plusieurs cartes blanches imbriquées. | Secondaire |
| **Muted Slate** | `#64748b` | `text-slate-500` | Texte de sous-titres, métadonnées, légendes. | Ne pas utiliser pour les textes longs à petit caractère (contraste). | Sémantique |
| **Rose Alert** | `#f43f5e` | `text-rose-500` | Signal de statut "prototype non déployé". | Utiliser uniquement pour le signalement de statut technique. | Sémantique |
| **Emerald Success**| `#10b981` | `bg-emerald-500` | Signal de soumission réussie et disponibilité. | Limiter aux badges d'état connectés en direct. | Sémantique |

---

## 2. Typographie et Échelle

*   **Police sans-serif (Texte courant, UI) :** **Inter** (Google Fonts). Choisi pour sa neutralité suisse et son excellente lisibilité sur mobile à petite échelle.
*   **Police à chasse fixe (Données, prompts, variables) :** **JetBrains Mono** (Google Fonts). Choisi pour donner un aspect technique rigoureux "architecte de code".
*   **Police d'affichage (Display, grands titres) :** **Space Grotesk** (Google Fonts). Apporte un aspect géométrique moderne et technologique.

### Échelle typographique

| Rôle | Taille (px) | Line-height | Letter-spacing | Token Tailwind | Règle de tracking |
|---|---|---|---|---|---|
| **H1 Hero** | `48px` - `60px` | `1.1` | `-0.02em` | `text-4xl md:text-5xl xl:text-6xl` | Serré pour garder de l'impact visuel en display. |
| **H2 Section** | `30px` - `36px` | `1.2` | `-0.01em` | `text-3xl md:text-4xl` | Moyen pour conserver la clarté structurelle. |
| **Body Long** | `15px` - `16px` | `1.6` | `0` | `text-slate-600 text-sm md:text-base` | Neutre pour maximiser l'effort de lecture prolongée. |
| **Code Block** | `12px` - `13px` | `1.5` | `0` | `font-mono text-xs` | Alignement rigoureux des colonnes. |
| **Caption / Label**| `11px` | `1.4` | `0.05em` | `text-[11px] uppercase tracking-wider` | Espacé pour rester lisible malgré la petite taille. |

---

## 3. Espacement & Layout

*   **Unité de base :** `4px` (système de grille à base de 4, 8, 12, 16, 24, 32, 48, 64px).
*   **Densité :** Épuré / confortable. La priorité est accordée au vide sémantique pour aérer l'œil et guider le regard du recruteur vers les points clés.
*   **Marges de page (Gutter) :** `24px` sur mobile, `48px` sur tablette/desktop.
*   **Max-width :** `1280px` (`max-w-7xl mx-auto`).

---

## 4. Rayons de Coins (Border Radius)

*   **Boutons (Buttons) :** `8px` (`rounded-lg`) pour un aspect moderne mais structuré.
*   **Cartes (Cards) :** `16px` (`rounded-2xl`) pour adoucir les angles des grilles d'éléments.
*   **Badges :** `9999px` (`rounded-full`) pour contraster avec la géométrie des cartes.

---

## 5. Composants UI Spécifications

### Bouton d'Action Primaire
*   **Rôle :** CTA majeur (Contact, Ouvrir étude de cas).
*   **Background :** `bg-indigo-600`
*   **Texte :** Blanc, Inter demi-gras (`font-semibold`), taille 12px, majuscules tracking-wider.
*   **Padding :** 16px haut/bas, 32px gauche/droite.
*   **États :**
    *   *Default :* Plat sans ombre excessive.
    *   *Hover :* Devient plus foncé (`bg-indigo-700`) avec une légère ombre portée d'accentuation.
    *   *Focus-visible :* Outline indigo 2px avec un offset de 4px.
    *   *Disabled :* Devient gris clair (`bg-slate-300`), curseur non autorisé.

---

## 6. Logo & Wordmark

*   **Concept :** Un mot-clé graphique associant une icône de cerveau géométrique (sémantique IA/Cognition) au nom propre de Horacio.
*   **Règles d'usage :** Le wordmark doit toujours être écrit avec un contraste fort (noir sur fond blanc, ou blanc sur fond noir scrolled) en capitales demi-grasses.

---

## 7. Iconographie

*   **Style :** Tracé fin minimaliste (Lucide Icons).
*   **Stroke :** `2px` ou `1.5px` pour rester fin et équilibré avec la police Inter.
*   **Tailles :** `16px` (UI courante), `24px` (titres et en-têtes de cartes).

---

## 8. Surfaces & Élévation Responsive

Pour éviter l'empilement visuel agressif (clutter) sur mobile :
*   Sur viewport étroit (mobile), toutes les cartes appliquent un style à **fond plat** (`bg-slate-50`) et suppriment les ombres d'élévation complexes (`shadow-none`).
*   Sur desktop, l'élévation s'active au survol des cartes (`hover:shadow-lg hover:bg-white`) pour donner un sentiment de profondeur et d'interactivité.

---

## 9. Imagerie & Formes

*   Toutes les formes décoratives doivent être des **dégradés vectoriels flous** légers à faible opacité (10% à 20%) pour ne pas gêner la lisibilité du texte.
*   Interdiction de décorer avec des captures d'écran fictives ou des illustrations d'IA génératives criardes de type "cyberpunk". Préférer des mockups d'interfaces de code réalistes et épurées.

---

## 10. Do's & Don'ts (7 + 7)

### ✅ Do's (À faire absolument)
1.  **Garantir un espace vide généreux :** Toujours conserver des paddings d'au moins `py-24` entre les sections majeures.
2.  **Spécifier clairement le statut prototype :** Toujours afficher la mention *"non déployé"* de façon visible.
3.  **Utiliser le mono pour les détails techniques :** Toujours formater les noms de fichiers et variables techniques en JetBrains Mono.
4.  **Assurer la lisibilité des prompts :** Toujours présenter les exemples de prompts dans des boîtes de code sombres rétro-éclairées de vert ou d'indigo.
5.  **Utiliser des libellés sémantiques clairs :** Préférer des termes humbles et humains plutôt que du jargon publicitaire creux.
6.  **Optimiser pour le tactile mobile :** Conserver des cibles tactiles de boutons de 44px de hauteur sur mobile.
7.  **Harmoniser les icônes :** Utiliser exclusivement le pack Lucide avec la même épaisseur de trait.

### ❌ Don'ts (À ne jamais faire)
1.  **Ne jamais inventer de fausses métriques :** Interdiction absolue de mettre des graphiques d'utilisateurs ou de faux volumes d'abonnés.
2.  **Ne pas ajouter de barre de pourcentage subjective :** Pas de "React 90%" ou "Python 85%".
3.  **Ne pas empiler les bordures :** Pas de carte blanche à bordure grise imbriquée dans un conteneur lui-même doté de bordure.
4.  **Ne pas utiliser de couleurs criardes de néon :** Éviter les dégradés violents vert-rose-jaune typiques des faux portfolios d'IA.
5.  **Ne pas masquer le rôle de l'IA :** Toujours déclarer explicitement la méthode de copilotage dans la section méthodologie.
6.  **Ne jamais briser le contraste sur les petits écrans :** Pas de sous-titres gris clair `#cbd5e1` sur fond blanc.
7.  **Ne pas utiliser de boutons trop petits :** Ne jamais descendre sous 40px de hauteur pour un bouton cliquable de soumission.

---

## 11. Accessibilité & Contrastes

*   **Ratio de contraste cible :** Conformité avec la norme WCAG 2.1 niveau AA (ratio d'au moins 4.5:1 pour le texte normal, et 3:1 pour le texte large).
*   **Vérification des contrastes textuels :**
    *   Texte Slate 900 (`#0f172a`) sur fond Slate 50 (`#f8fafc`) : **Ratio > 15:1 (Conformité AAA)**.
    *   Texte Indigo Accent (`#6366f1`) sur fond blanc (`#ffffff`) : **Ratio > 4.6:1 (Conformité AA)**.
*   **Focus Ring :** Toutes les actions d'ancrage et de boutons comportent un contour d'accessibilité actif lors de la navigation au clavier.
