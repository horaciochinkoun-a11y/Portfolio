# Variables d'Environnement — Portfolio
> Configuration et déclaration des secrets d'infrastructure.

---

## 1. Variables requises (.env)

Comme le portfolio est compilé de façon **entièrement statique** et s'exécute côté client (dans le navigateur du recruteur ou du client), il ne requiert aucune variable d'environnement active en production.

Cependant, pour l'environnement de développement ou d'intégration d'API (comme les clés de test), voici les variables déclarées à titre d'exemple :

```env
# GEMINI_API_KEY: Requis pour les appels d'évaluation de prompts en local de test.
# Cette clé n'est JAMAIS embarquée ni compilée dans le bundle JS de production.
GEMINI_API_KEY="VOTRE_CLE_API_GEMINI"

# APP_URL: URL canonique d'exposition pour le SEO et l'indexation.
APP_URL="https://horaciochinkoun.site"
```

---

## 2. Règle de Sécurité Critique

*   **Interdiction d'exposer la clé API :** Ne jamais préfixer la variable `GEMINI_API_KEY` par `VITE_` dans votre fichier `.env.local` ! Tout variable préfixée par `VITE_` est injectée de façon visible dans le code client compilé, exposant votre clé API aux yeux de n'importe quel visiteur inspectant l'interface.
