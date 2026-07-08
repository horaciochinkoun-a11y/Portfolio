/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Skill, Service } from './types';

export const biography = {
  short: "Product Owner IA et architecte fonctionnel, je conçois et pilote des produits SaaS/PWA propulsés par intelligence artificielle (Gemini), de l'idée au prototype fonctionnel. Spécialisé dans le cadrage produit, le prompt engineering et la direction d'agents IA de développement, avec une attention particulière portée à l'EdTech et aux outils de niche à forte valeur perçue.",
  medium: "Je conçois des produits numériques propulsés par l'intelligence artificielle, en assurant la direction stratégique complète : cadrage fonctionnel, définition de l'expérience utilisateur, direction artistique et pilotage d'agents IA autonomes pour la réalisation technique. Mon travail couvre des produits variés — outils de transcription vidéo, simulateurs pédagogiques, plateformes d'aide à la préparation d'examens, générateurs de formulaires ou de documents professionnels — toujours construits autour d'une architecture pensée pour la sobriété serveur (traitement client-side, PWA offline-first) et l'intégration de modèles IA (Gemini).\n\nMon rôle n'est pas celui d'un développeur qui écrit chaque ligne de code, mais celui d'un directeur de produit qui structure le besoin, rédige des spécifications précises, oriente les choix techniques et valide rigoureusement chaque itération produite par l'IA. Cette approche me permet de livrer des prototypes fonctionnels et cohérents à un rythme que peu d'équipes traditionnelles peuvent égaler.",
  long: "Je travaille à l'intersection de la conception produit et de l'intelligence artificielle générative, avec une spécialité : transformer une idée ou un besoin métier en produit numérique fonctionnel, en pilotant des agents IA autonomes pour la réalisation technique plutôt qu'en codant moi-même chaque composant.\n\nConcrètement, mon processus suit toujours la même discipline : je définis d'abord le problème à résoudre et le public cible, je rédige un cahier des charges fonctionnel précis, je fixe la direction artistique et l'expérience utilisateur, puis je dirige un agent IA de développement à travers des instructions itératives, des audits de code et des corrections ciblées jusqu'à obtenir un prototype conforme à l'exigence initiale. Je supervise également les tests d'usage réels (comportement sur mobile, conditions réseau faible, cas limites) et ajuste les spécifications en conséquence.\n\nCette méthode m'a permis de cadrer des projets dans des domaines très différents : outils de transcription et traduction vidéo pensés pour la confidentialité (traitement local, RGPD), plateforme d'entraînement à l'entretien d'embauche avec pipeline vocal interactif, générateur de miniatures YouTube basé sur l'analyse cognitive de scripts, simulateur scientifique pédagogique de physique appliquée, générateur de documents professionnels automatisés, et une plateforme d'EdTech destinée aux bacheliers scientifiques d'Afrique francophone avec tuteur IA socratique.\n\nUn fil conducteur traverse ces projets : la recherche de sobriété d'infrastructure (architectures client-side, PWA offline-first, réduction de la dépendance à des serveurs coûteux) et une attention systématique portée à l'expérience sur des réseaux mobiles limités — un enjeu particulièrement pertinent dans le contexte ouest-africain.\n\nJe suis honnête sur la nature de ma contribution : je ne revendique pas une expertise d'ingénieur logiciel senior écrivant du code de production ligne par ligne. Ma valeur ajoutée est ailleurs — dans la capacité à structurer un besoin flou en spécifications actionnables, à orchestrer un agent IA pour produire un résultat technique de qualité, et à assurer la cohérence produit, visuelle et documentaire de bout en bout. C'est un profil hybride, encore récent sur le marché, qui correspond à la manière dont une part croissante de produits numériques est aujourd'hui conçue.\n\nJe cherche aujourd'hui à appliquer cette méthode à des projets ayant un vrai terrain d'usage — avec des utilisateurs réels et des retours mesurables — plutôt qu'à accumuler des prototypes supplémentaires."
};

export const skills: Skill[] = [
  // Ce que je dirige
  { name: "Cadrage Produit & Specs", category: "direct", description: "Rédaction de cahiers des charges fonctionnels, définition du scope MVP, et structuration des user stories." },
  { name: "Prompt Engineering", category: "direct", description: "Conception de prompts système anti-hallucination, structured outputs JSON, et ton d'IA adapté." },
  { name: "Direction Artistique & UX", category: "direct", description: "Design minimaliste, design systems légers, interfaces responsives optimisées mobile." },
  { name: "Rédaction Technique", category: "direct", description: "Documentation projet, logs de décisions d'architecture (ADR), fiches produits détaillées." },
  { name: "Pilotage d'Agents IA", category: "direct", description: "Supervision, correction et itérations rapides sur les codes produits par des agents autonomes." },
  { name: "QA Fonctionnelle Mobile", category: "direct", description: "Audits d'utilisabilité, tests de latence, et résilience en conditions réseau dégradé." },
  
  // Technologies pilotées
  { name: "React / Vite", category: "tech", description: "Développement d'interfaces web rapides et modulaires côté client." },
  { name: "Tailwind CSS", category: "tech", description: "Mise en œuvre d'identités visuelles précises avec des styles mobiles-first fluides." },
  { name: "Gemini API", category: "tech", description: "Intégration de modèles génératifs d'IA, multimodalité et interactions socratiques." },
  { name: "Node.js / Express", category: "tech", description: "Mise en place de serveurs intermédiaires légers et d'APIs proxy." },
  { name: "Firebase / SQLite", category: "tech", description: "Stockage de données localisé, sécurisé et synchrone." },
  { name: "PWA (Offline-First)", category: "tech", description: "Conception d'applications web installables et résilientes hors-ligne." }
];

export const projects: Project[] = [
  {
    id: "prepa-concours-benin",
    title: "Prépa Concours Bénin",
    tagline: "Tuteur socratique intelligent pour bacheliers scientifiques",
    shortDescription: "Une plateforme d'EdTech révolutionnaire dédiée aux bacheliers scientifiques d'Afrique francophone, intégrant un tuteur IA socratique pour préparer les concours d'entrée aux grandes écoles.",
    longDescription: "Ce projet s'attaque aux inégalités d'accès aux ressources de préparation d'élite au Bénin. Au lieu de fournir de simples corrections types, l'IA agit en mentor socratique : elle analyse les erreurs de l'élève, et plutôt que de donner la réponse, lui pose des questions guidées pour l'amener à trouver la méthode lui-même.",
    category: "EdTech & Impact Social",
    type: "primary",
    technologies: ["React", "Tailwind CSS", "Gemini API", "KaTeX", "LocalStorage"],
    status: "Prototype fonctionnel (non déployé, pas d'utilisateurs réels à ce jour)",
    iconName: "GraduationCap",
    caseStudy: {
      context: "Les bacheliers scientifiques au Bénin font face à un manque criant de ressources adaptées pour préparer les concours extrêmement sélectifs d'entrée aux grandes écoles d'ingénieurs et d'administration (EPAC, ENEAM, ENS...).",
      problem: "Les préparations physiques d'excellence sont centralisées, très coûteuses et inaccessibles pour la majorité des élèves des régions éloignées. De plus, les corrigés papier classiques encouragent le par cœur au détriment de la gymnastique intellectuelle requise.",
      approach: "Cadrage d'une interface d'apprentissage épurée où l'élève échange avec un tuteur IA configuré en mode socratique. L'interface intègre un moteur d'écriture mathématique en temps réel pour rendre l'expérience interactive et fluide.",
      promptEngineering: [
        {
          title: "Prompt Système du Mentor Socratique",
          description: "Configuration du comportement sémantique pour forcer Gemini à refuser l'aide directe et à structurer des questions d'orientation de manière progressive.",
          promptText: "Tu es un enseignant de mathématiques et de physique socratique spécialisé dans les concours d'entrée d'élite au Bénin (EPAC, ENEAM). Ton rôle est d'accompagner l'élève de manière bienveillante mais extrêmement exigeante.\n\nREGLES D'OR :\n1. NE DONNE JAMAIS LA SOLUTION OU L'EQUATION FINALE.\n2. Si l'élève te demande 'donne moi la réponse', explique socratiquement pourquoi tu ne le feras pas.\n3. Analyse sa proposition d'étape mathématique, isole la faille de logique (ex: erreur de signe, mauvaise substitution) et pose UNE question de relance courte (max 2 phrases) pour qu'il s'en rende compte lui-même.\n4. Utilise toujours le formalisme LaTeX pour les expressions mathématiques."
        }
      ],
      challenges: [
        "Affiche des équations mathématiques complexes (LaTeX) sans ralentissement sur des navigateurs mobiles de moyenne gamme.",
        "Limiter la consommation de bande passante, cruciale pour les connexions mobiles ouest-africaines."
      ],
      solutions: [
        "Intégration du moteur KaTeX en mode rendu asynchrone côté client avec mise en cache locale stricte des modules d'analyse.",
        "Optimisation de la taille des prompts et utilisation du modèle Gemini Flash pour réduire le coût en tokens et maximiser la vitesse de réponse."
      ],
      statusDetail: "Ce projet est un prototype fonctionnel complet à un seul écran (SaaS épuré), conçu pour valider l'impact pédagogique d'un agent de tutorat non-directif.",
      valueAdded: "Il démontre l'apport inestimable de l'IA pour la démocratisation scolaire sans coûts serveurs prohibitifs, grâce à un traitement décentralisé côté client.",
      useCases: [
        "Un élève de province s'entraîne sur un problème complexe d'intégrales doubles et le tuteur l'accompagne pas à pas sans jamais le bloquer ni lui donner la solution brute.",
        "Correction interactive d'une démonstration géométrique avec notation guidée selon les critères des concours."
      ],
      skillsDemonstrated: [
        "Cadrage fonctionnel EdTech",
        "Prompt Engineering socratique rigoureux",
        "Modélisation d'interactions d'apprentissage",
        "Optimisation de performance mobile pour connectivité réduite"
      ]
    }
  },
  {
    id: "nukemap-edu",
    title: "NUKEMAP EDU",
    tagline: "Simulateur visuel interactif de physique et de radioactivité",
    shortDescription: "Un simulateur pédagogique et interactif qui modélise en 3D/canvas les lois de la physique nucléaire et la décroissance radioactive à des fins éducatives.",
    longDescription: "Un outil pédagogique immersif conçu pour rendre tangibles des concepts abstraits de physique nucléaire. En manipulant des paramètres physiques, l'étudiant observe la propagation en direct et l'impact spatial de réactions physiques sur des cartes géographiques stylisées.",
    category: "Simulation Pédagogique",
    type: "primary",
    technologies: ["React", "Three.js / WebGL", "Tailwind CSS", "KaTeX", "Recharts"],
    status: "Prototype fonctionnel (non déployé, pas d'utilisateurs réels à ce jour)",
    iconName: "Atom",
    caseStudy: {
      context: "La physique nucléaire est l'une des disciplines les plus difficiles à enseigner en raison de la nature invisible des forces et des échelles géographiques ou microscopiques impliquées.",
      problem: "Les logiciels académiques de simulation sont austères et nécessitent de puissantes machines locales. Il n'existait pas d'application web moderne capable de vulgariser visuellement et mathématiquement les lois de la radioactivité et des réactions de fission de manière fluide.",
      approach: "Conception d'une application unifiée combinant un tableau de bord analytique (courbes de décroissance radioactive, bilans de masse) et une carte interactive WebGL simulant les ondes physiques.",
      promptEngineering: [
        {
          title: "Génération de la logique physique de calcul",
          description: "Validation et génération des formules de calcul de pression (onde de choc) et de propagation thermique en JavaScript optimisé pour l'exécution client.",
          promptText: "Génère un algorithme en TypeScript pur qui calcule précisément le rayon d'impact thermique et de surpression (ondes de choc de 1psi à 20psi) en fonction d'une énergie libérée en Kilotonnes, en appliquant les équations standard de la physique nucléaire atmosphérique. Le code doit s'exécuter en moins de 1ms."
        }
      ],
      challenges: [
        "Rendre le tracé de zones d'ondes physiques fluide sur une carte interactive sans saccade lors du redimensionnement de la fenêtre.",
        "Coordonner des graphiques de décroissance complexes avec des curseurs physiques de curseur temporel (demi-vies)."
      ],
      solutions: [
        "Utilisation de canvas WebGL avec accélération matérielle et gestion des données d'affichage via des buffers géométriques optimisés.",
        "Intégration de Recharts avec un état de données mémorisé (memoized state) pour éviter les re-rendus inutiles lors de la manipulation des curseurs."
      ],
      statusDetail: "Prototype fonctionnel interactif, prêt pour une intégration dans des cursus scolaires ou universitaires de physique appliquée.",
      valueAdded: "Rend la physique nucléaire ludique, visuelle, et hautement pédagogique, en éliminant le besoin de serveurs de calcul distants.",
      useCases: [
        "Étude pratique de la loi de décroissance radioactive et calcul des périodes de demi-vie de divers isotopes en temps réel.",
        "Simulation de la propagation d'ondes de surpression selon la densité atmosphérique environnante."
      ],
      skillsDemonstrated: [
        "Visualisation interactive de données scientifiques",
        "Conception d'interface immersive (3D & Canvas)",
        "Traduction fonctionnelle d'équations physiques complexes",
        "Optimisation de performance d'animation WebGL"
      ]
    }
  },
  {
    id: "mock-interview-pro",
    title: "Mock Interview Pro",
    tagline: "Simulateur d'entretien d'embauche par IA vocale interactive",
    shortDescription: "Une plateforme d'entraînement à l'entretien de recrutement simulant un recruteur senior exigeant avec un traitement vocal intelligent et fluide.",
    longDescription: "Un simulateur d'entretien d'embauche interactif conçu pour aider les professionnels à surmonter le stress de l'oral. L'utilisateur interagit à haute voix avec un avatar IA qui pose des questions, analyse les réponses orales, et fournit un rapport d'évaluation constructif basé sur de véritables grilles d'évaluation RH.",
    category: "RH & Entraînement Professionnel",
    type: "primary",
    technologies: ["React", "Tailwind CSS", "Gemini API (Speech)", "Web Audio API"],
    status: "Prototype fonctionnel (non déployé, pas d'utilisateurs réels à ce jour)",
    iconName: "Mic",
    caseStudy: {
      context: "La réussite d'un entretien d'embauche dépend à 80% de la gestion du stress à l'oral et de la structure de l'argumentation sous la pression des questions du recruteur.",
      problem: "Les séances de simulation d'entretien avec des mentors ou professionnels RH sont rares, coûteuses, et exigent une planification complexe. Les outils basés sur le texte manquent du réalisme nécessaire d'un échange vocal rythmé.",
      approach: "Cadrage d'une boucle d'interaction vocale sans couture (VUI - Voice User Interface) où l'utilisateur écoute le recruteur, enregistre sa réponse d'un clic, et reçoit immédiatement la relance du recruteur simulé.",
      promptEngineering: [
        {
          title: "Ingénierie du Persona de Recruteur",
          description: "Prompt système configurant les biais cognitifs positifs, le style de relance et l'exigence d'un recruteur en capital humain.",
          promptText: "Tu es un recruteur en chef de cabinet de recrutement d'élite. Tu évalues des profils pour des postes managériaux et techniques d'excellence.\n\nCOMPORTEMENT :\n1. Adopte un ton formel, poli, observateur et exigeant.\n2. Pose une seule question comportementale claire à la fois (par exemple, en te basant sur la méthodologie STAR).\n3. Prends note de la transcription de la réponse orale du candidat. Analyse la cohérence de ses propos, sa structure argumentative, et rebondis spécifiquement sur ses faiblesses lors de ta relance.\n4. NE sors JAMAIS de ton rôle. Si le candidat s'arrête ou demande de l'aide, réponds comme le ferait un vrai recruteur qui teste sa résilience."
        }
      ],
      challenges: [
        "Gérer la capture audio du micro, la conversion de flux et le traitement dans les limites de l'iFrame sans latence frustrante.",
        "Fournir un feedback analytique quantitatif sur l'intonation et la pertinence des réponses sans perturber le fil de la simulation."
      ],
      solutions: [
        "Utilisation de l'API Web Audio pour une capture locale propre et envoi asynchrone des flux compressés au SDK Gemini.",
        "Division du workflow en deux phases : une simulation immersive audio fluide en cours, et un écran de débriefing analytique complet généré en fin de parcours."
      ],
      statusDetail: "Ce projet est un prototype fonctionnel et interactif, illustrant l'intégration de pipelines vocaux intelligents au sein d'applications web d'entraînement.",
      valueAdded: "Permet aux candidats de pratiquer de façon autonome, sécurisée et illimitée, éliminant l'anxiété de l'échec initial.",
      useCases: [
        "Un candidat s'entraîne à répondre à la question redoutable 'Pourquoi devrions-nous vous recruter plutôt qu'un autre ?' et reçoit un débrief complet sur ses forces et axes d'amélioration.",
        "Simulation d'un panel de recrutement technique stressant avec plusieurs voix d'IA posant des questions."
      ],
      skillsDemonstrated: [
        "Conception de parcours vocaux (VUI)",
        "Prompt Engineering conversationnel",
        "Modélisation de logiques d'évaluation RH",
        "Maîtrise des APIs Web Audio et de capture client"
      ]
    }
  },
  
  // Projets secondaires
  {
    id: "transcribe-translate",
    title: "Transcribe & Translate AI",
    tagline: "Transcription et traduction vidéo locale ultra-sécurisée",
    shortDescription: "Un outil de transcription audio/vidéo et de traduction conçu pour s'exécuter localement, garantissant une confidentialité absolue des données d'entreprise.",
    longDescription: "Un utilitaire hautement optimisé qui permet de transcrire et de traduire des enregistrements de réunions ou des scripts vidéo. Construit avec un accent rigoureux sur la sécurité et le respect des normes de protection des données (RGPD).",
    category: "Productivité & IA Locale",
    type: "secondary",
    technologies: ["React", "Tailwind CSS", "Gemini API (Multimodal)", "Web Audio API"],
    status: "Prototype fonctionnel (non déployé, pas d'utilisateurs réels à ce jour)",
    iconName: "FileVideo"
  },
  {
    id: "aura-studio",
    title: "Aura Studio",
    tagline: "Générateur intelligent de miniatures et d'identités marketing",
    shortDescription: "Un studio créatif utilisant l'analyse cognitive de scripts pour générer des suggestions visuelles et des compositions de miniatures YouTube optimales.",
    longDescription: "Un assistant créatif destiné aux créateurs de contenu et marketeurs. Il analyse le texte d'un script ou d'un synopsis, identifie les déclencheurs émotionnels majeurs, et suggère des compositions graphiques ainsi que des palettes de couleurs optimisées pour le taux de clic (CTR).",
    category: "Marketing Digital & Création",
    type: "secondary",
    technologies: ["React", "Tailwind CSS", "Gemini API (Vision/Text)", "Lucide Icons"],
    status: "Prototype fonctionnel (non déployé, pas d'utilisateurs réels à ce jour)",
    iconName: "Sparkles"
  },
  {
    id: "docugen-pro",
    title: "DocuGen Pro",
    tagline: "Générateur automatisé de documents et contrats professionnels",
    shortDescription: "Un assistant de rédaction juridique et commerciale qui génère des modèles de documents précis sur la base de questionnaires intelligents.",
    longDescription: "Un outil indispensable pour les freelances et petites entreprises, permettant de générer instantanément des contrats de prestation, des accords de confidentialité (NDA) ou des propositions commerciales personnalisées, le tout conforme aux législations locales béninoises et OHADA.",
    category: "LegalTech & Productivité",
    type: "secondary",
    technologies: ["React", "Tailwind CSS", "Gemini API", "jsPDF / HTML2PDF"],
    status: "Prototype fonctionnel (non déployé, pas d'utilisateurs réels à ce jour)",
    iconName: "FileText"
  },
  {
    id: "doc2form",
    title: "Doc2Form",
    tagline: "Convertisseur instantané de documents en formulaires web",
    shortDescription: "Un convertisseur intelligent qui analyse n'importe quel document textuel ou PDF pour en extraire une structure de formulaire web interactive.",
    longDescription: "Cet utilitaire simplifie la numérisation des processus administratifs. Uploadez un formulaire papier scanné ou une liste de questions brute, et Doc2Form génère automatiquement le code d'un formulaire interactif prêt à l'emploi avec validation des champs intégrée.",
    category: "No-Code & Automatisation",
    type: "secondary",
    technologies: ["React", "Tailwind CSS", "Gemini API", "JSON Schema"],
    status: "Prototype fonctionnel (non déployé, pas d'utilisateurs réels à ce jour)",
    iconName: "CheckSquare"
  }
];

export const services: Service[] = [
  {
    id: "cadrage-fonctionnel",
    title: "Cadrage Fonctionnel de Produits IA",
    description: "Je traduis vos concepts vagues en spécifications techniques et fonctionnelles prêtes à être implémentées. Je définis le scope du MVP et trace le chemin optimal vers un prototype robuste.",
    forWhom: "Porteurs de projet, fondateurs non-techniques, équipes produit",
    details: [
      "Rédaction de cahiers des charges fonctionnels détaillés",
      "Définition du périmètre du MVP pour éviter le gonflement du scope",
      "Établissement des flux utilisateurs et des structures de données",
      "Spécification des intégrations de modèles IA (choix du modèle, coûts)"
    ]
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering & Alignement IA",
    description: "Je conçois et teste les instructions systèmes qui dirigent le comportement de vos agents d'IA. Je garantis des réponses fiables, sans hallucination, sous format JSON structuré ou ton sur-mesure.",
    forWhom: "Entreprises et startups intégrant l'IA générative dans leurs workflows",
    details: [
      "Création de prompts système anti-hallucination rigoureux",
      "Configuration de structured outputs JSON stables pour l'intégration logicielle",
      "Définition de personas de marque, d'assistants ou de tuteurs pédagogiques",
      "Optimisation de la taille des fenêtres de contexte pour réduire les coûts d'appel"
    ]
  },
  {
    id: "direction-artistique",
    title: "Direction Artistique & UX Produits SaaS",
    description: "Je conçois des interfaces épurées, élégantes et fluides qui mettent en valeur la fonctionnalité. J'accorde une attention particulière à la sobriété visuelle et aux performances mobiles.",
    forWhom: "Créateurs de SaaS, d'utilitaires web et d'applications d'impact",
    details: [
      "Création de chartes graphiques de produits minimalistes et distinctives",
      "Design d'interfaces ergonomiques centrées sur l'accessibilité et la fluidité",
      "Optimisation de la densité visuelle pour éviter l'encombrement sur mobile",
      "Développement de micro-animations interactives pour guider l'expérience"
    ]
  },
  {
    id: "redaction-documentaire",
    title: "Rédaction Documentaire Produit & Tech",
    description: "Je documente le vivant de vos projets pour en assurer la traçabilité complète. Je rédige des journaux de décisions d'architecture (ADR) et des fiches produits d'un niveau d'ingénieur senior.",
    forWhom: "Équipes techniques, startups en scale-up, investisseurs",
    details: [
      "Rédaction de logs de décisions d'architecture (ADR) clairs et justifiés",
      "Création de guides de mise en route locaux (setup local, variables d'environnement)",
      "Production de fiches techniques d'études de cas pour portofolios ou dossiers",
      "Rédaction de guides d'onboarding facilitant la reprise de projet par un tiers"
    ]
  }
];
