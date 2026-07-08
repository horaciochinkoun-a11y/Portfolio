# Contexte Stratégique IA (AI Context) — Portfolio
> Choix technologiques liés à l'IA, alignement des modèles et gestion des fenêtres de contexte.

---

## 1. Choix du Fournisseur et Modèle IA

L'ensemble des prototypes gérés par Horacio et illustrés dans ce portfolio utilisent les modèles de la famille **Google Gemini** (via le SDK TypeScript `@google/genai` v2.4.0+).

### Justification des modèles
*   **Gemini 2.5 Flash :** Sélectionné par défaut pour les tâches de transcription rapide, de traitement multimodal et d'interactions conversationnelles à latence faible (comme dans *Mock Interview Pro* et *Prépa Concours Bénin*).
*   **Gemini 2.5 Pro :** Sélectionné pour les raisonnements de haut niveau, le cadrage de schémas logiques complexes, ou la modélisation de questionnaires socratiques exigeants.

---

## 2. Alignement des Prompts & Posture Éthique

Le portfolio met en valeur une discipline de conception appelée **l'ingénierie de prompts socratique**. Il ne s'agit pas de "poser de simples questions à l'IA", mais de coder de véritables pipelines cognitifs sous forme d'instructions système hermétiques :

*   **Socratique non-directif :** Forcer le modèle à renoncer à son comportement naturel de "complaisance" (vouloir à tout prix donner la réponse) pour le contraindre à une posture d'accompagnement réflexive (poser des questions guidantes).
*   **Structured Output (JSON) :** S'assurer que les modèles de services secondaires (comme *Doc2Form*) retournent des données rigoureusement typées selon un schéma JSON fixe, évitant les crashs de parseurs côté client.

---

## 3. Sobriété d'Appel API (BYOK)

Le portfolio et ses études de cas promeuvent une architecture de type **Bring Your Own Key (BYOK)** ou de réduction drastique de dépendance serveur :
*   Les clés API ne sont jamais exposées côté client dans le code source distribué.
*   En production, l'accès se fait via un proxy d'API léger sécurisé, préservant les secrets d'infrastructure de l'utilisateur final.
