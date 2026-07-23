import React, { useState, useEffect } from 'react';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { 
  Save, Sparkles, User, RefreshCw, CheckCircle, Database, 
  Mail, Linkedin, MessageSquare, MapPin, Briefcase, Cpu, 
  Trash2, Plus, Ban, HelpCircle, Layers, FileText,
  Eye, Image as ImageIcon, EyeOff, LayoutTemplate
} from 'lucide-react';

interface PortfolioContent {
  availability: string;
  heroTitle: string;
  heroSub: string;
  heroNotice: string;
  aboutHeading: string;
  aboutTitle: string;
  aboutSub: string;
  aboutText1: string;
  aboutText2: string;
  aboutQuote: string;
  
  // Contact & Socials
  contactEmail: string;
  contactLinkedin: string;
  contactWhatsapp: string;
  contactLocation: string;

  // Services & Exclusions
  services: Array<{
    id: string;
    title: string;
    description: string;
    forWhom: string;
    details: string[];
  }>;
  exclusions: Array<{
    title: string;
    text: string;
  }>;

  // Skills List
  skills: Array<{
    name: string;
    category: 'direct' | 'tech';
    description: string;
  }>;
  
  // Customization
  heroImage?: string;
  whatsappImage?: string;
  displaySettings?: {
    showHeroImage?: boolean;
    showHeroAvailability?: boolean;
    showHeroNotice?: boolean;
    showAboutSection?: boolean;
    showAboutQuote?: boolean;
    showSkillsSection?: boolean;
    showProjectsSection?: boolean;
    showServicesSection?: boolean;
    showContactSection?: boolean;
    showFloatingWhatsApp?: boolean;
    showSocialLinksNavbar?: boolean;
    showSocialLinksFooter?: boolean;
  };
}

const defaultContent: PortfolioContent = {
  availability: "DISPONIBLE • ORCHESTRATEUR IA & PRODUCT OWNER",
  heroTitle: "Je transforme des idées produit en prototypes IA fonctionnels.",
  heroSub: "Architecte fonctionnel & orchestrateur d’IA. Je cadre le besoin, je rédige des spécifications précises, je pilote la réalisation technique par des agents IA, et je valide rigoureusement chaque écran.",
  heroNotice: "Transparence méthodologique : Je supervise et orchestre la technique via prompt engineering d'élite ; l'IA exécute le code sous ma direction.",
  aboutHeading: "PRÉSENTATION & PHILOSOPHIE",
  aboutTitle: "À l'intersection de l'ingénierie rigoureuse et de la stratégie d'impact.",
  aboutSub: "Bâtir des prototypes d'excellence qui durent.",
  aboutText1: "Je conçois des produits numériques propulsés par l'intelligence artificielle, en assurant la direction stratégique complète : cadrage fonctionnel, définition de l'expérience utilisateur, direction artistique et pilotage d'agents IA autonomes pour la réalisation technique.",
  aboutText2: "Mon rôle n'est pas celui d'un développeur traditionnel qui écrit chaque ligne de code manuellement, mais celui d'un directeur de produit exigeant. Je structure le besoin, rédige des spécifications ultra-précises, orchestre les choix techniques, et valide rigoureusement chaque écran. Cette approche hybride me permet d'obtenir des prototypes complets, documentés et performants en un temps record.",
  aboutQuote: "Dans le contexte de connectivité fluctuante d'Afrique de l'Ouest, je mets un point d'honneur à concevoir des architectures sobres : traitement local au maximum (client-side), optimisation de bande passante et formats d'échange ultra-légers.",
  
  // Contact & Socials
  contactEmail: "horaciochinkoun@gmail.com",
  contactLinkedin: "https://linkedin.com/in/horacio-chinkoun",
  contactWhatsapp: "+229 99 06 25 59",
  contactLocation: "Cotonou, Bénin (Remote disponible)",

  // Services
  services: [
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
  ],

  // Exclusions
  exclusions: [
    { title: "Le code lourd from scratch", text: "Je ne vends pas d'heures de programmation manuelle de bas niveau." },
    { title: "La cybersécurité certifiée", text: "Je n'audite pas la sécurité réseau ou système (cryptographie)." },
    { title: "La conformité légale pure", text: "Je dessine des schémas d'utilisabilité RGPD, pas des contrats légaux certifiés." }
  ],

  // Skills
  skills: [
    { name: "Cadrage Produit & Specs", category: "direct", description: "Rédaction de cahiers des charges fonctionnels, définition du scope MVP, et structuration des user stories." },
    { name: "Prompt Engineering", category: "direct", description: "Conception de prompts système anti-hallucination, structured outputs JSON, et ton d'IA adapté." },
    { name: "Direction Artistique & UX", category: "direct", description: "Design minimaliste, design systems légers, interfaces responsives optimisées mobile." },
    { name: "Rédaction Technique", category: "direct", description: "Documentation projet, logs de décisions d'architecture (ADR), fiches produits détaillées." },
    { name: "Pilotage d'Agents IA", category: "direct", description: "Supervision, correction et itérations rapides sur les codes produits par des agents autonomes." },
    { name: "QA Fonctionnelle Mobile", category: "direct", description: "Audits d'utilisabilité, tests de latence, et résilience en conditions réseau dégradé." },
    { name: "React / Vite", category: "tech", description: "Développement d'interfaces web rapides et modulaires côté client." },
    { name: "Tailwind CSS", category: "tech", description: "Mise en œuvre d'identités visuelles précises avec des styles mobiles-first fluides." },
    { name: "Gemini API", category: "tech", description: "Intégration de modèles génératifs d'IA, multimodalité et interactions socratiques." },
    { name: "Node.js / Express", category: "tech", description: "Mise en place de serveurs intermédiaires légers et d'APIs proxy." },
    { name: "Firebase / SQLite", category: "tech", description: "Stockage de données localisé, sécurisé et synchrone." },
    { name: "PWA (Offline-First)", category: "tech", description: "Conception d'applications web installables et résilientes hors-ligne." }
  ],
  heroImage: "/images/horacio.png",
  displaySettings: {
    showHeroImage: true,
    showHeroAvailability: true,
    showHeroNotice: true,
    showAboutSection: true,
    showAboutQuote: true,
    showSkillsSection: true,
    showProjectsSection: true,
    showServicesSection: true,
    showContactSection: true,
    showFloatingWhatsApp: true,
    showSocialLinksNavbar: true,
    showSocialLinksFooter: true,
  }
};

export default function ContentAdmin() {
  const [content, setContent] = useState<PortfolioContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'hero' | 'services' | 'skills' | 'contact' | 'display'>('hero');
  
  // Customization State
  const [heroImage, setHeroImage] = useState('');
  const [whatsappImage, setWhatsappImage] = useState('');
  const [displaySettings, setDisplaySettings] = useState(defaultContent.displaySettings);

  // Hero & About State
  const [availability, setAvailability] = useState('');
  const [heroTitle, setHeroTitle] = useState('');
  const [heroSub, setHeroSub] = useState('');
  const [heroNotice, setHeroNotice] = useState('');
  const [aboutHeading, setAboutHeading] = useState('');
  const [aboutTitle, setAboutTitle] = useState('');
  const [aboutSub, setAboutSub] = useState('');
  const [aboutText1, setAboutText1] = useState('');
  const [aboutText2, setAboutText2] = useState('');
  const [aboutQuote, setAboutQuote] = useState('');

  // Contact State
  const [contactEmail, setContactEmail] = useState('');
  const [contactLinkedin, setContactLinkedin] = useState('');
  const [contactWhatsapp, setContactWhatsapp] = useState('');
  const [contactLocation, setContactLocation] = useState('');

  // Services & Exclusions Lists State
  const [servicesList, setServicesList] = useState<PortfolioContent['services']>([]);
  const [exclusionsList, setExclusionsList] = useState<PortfolioContent['exclusions']>([]);

  // Skills List State
  const [skillsList, setSkillsList] = useState<PortfolioContent['skills']>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'content', 'portfolio'), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as PortfolioContent;
        setContent(data);
        setFormValues(data);
      } else {
        setContent(null);
      }
      setLoading(false);
    }, (error) => {
      console.error("ContentAdmin Firestore Error:", error);
      setContent(null);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const setFormValues = (data: PortfolioContent) => {
    setAvailability(data.availability || '');
    setHeroTitle(data.heroTitle || '');
    setHeroSub(data.heroSub || '');
    setHeroNotice(data.heroNotice || '');
    setAboutHeading(data.aboutHeading || '');
    setAboutTitle(data.aboutTitle || '');
    setAboutSub(data.aboutSub || '');
    setAboutText1(data.aboutText1 || '');
    setAboutText2(data.aboutText2 || '');
    setAboutQuote(data.aboutQuote || '');

    // Contact & Socials with default fallback
    setContactEmail(data.contactEmail || defaultContent.contactEmail);
    setContactLinkedin(data.contactLinkedin || defaultContent.contactLinkedin);
    setContactWhatsapp(data.contactWhatsapp || defaultContent.contactWhatsapp);
    setContactLocation(data.contactLocation || defaultContent.contactLocation);

    // Lists with default fallback
    setServicesList(data.services || defaultContent.services || []);
    setExclusionsList(data.exclusions || defaultContent.exclusions || []);
    setSkillsList(data.skills || defaultContent.skills || []);
    
    setHeroImage(data.heroImage || defaultContent.heroImage || '');
    setWhatsappImage(data.whatsappImage || defaultContent.whatsappImage || '');
    setDisplaySettings({
      ...defaultContent.displaySettings,
      ...(data.displaySettings || {})
    });
  };

  const handleInitialize = async () => {
    if (window.confirm("Voulez-vous initialiser l'intégralité du site avec les textes, prestations, compétences et coordonnées par défaut ?")) {
      setLoading(true);
      try {
        await setDoc(doc(db, 'content', 'portfolio'), defaultContent);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } catch (err: any) {
        alert("Erreur lors de l'initialisation : " + err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);

    const updatedContent: PortfolioContent = {
      availability: availability.trim(),
      heroTitle: heroTitle.trim(),
      heroSub: heroSub.trim(),
      heroNotice: heroNotice.trim(),
      aboutHeading: aboutHeading.trim(),
      aboutTitle: aboutTitle.trim(),
      aboutSub: aboutSub.trim(),
      aboutText1: aboutText1.trim(),
      aboutText2: aboutText2.trim(),
      aboutQuote: aboutQuote.trim(),
      
      contactEmail: contactEmail.trim(),
      contactLinkedin: contactLinkedin.trim(),
      contactWhatsapp: contactWhatsapp.trim(),
      contactLocation: contactLocation.trim(),

      services: servicesList,
      exclusions: exclusionsList,
      skills: skillsList,
      
      heroImage: heroImage.trim(),
      whatsappImage: whatsappImage.trim(),
      displaySettings
    };

    try {
      await setDoc(doc(db, 'content', 'portfolio'), updatedContent);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      alert("Erreur lors de la sauvegarde : " + err.message);
    } finally {
      setSaving(false);
    }
  };

  // List Handlers: Services
  const addService = () => {
    const newId = `service-${Date.now()}`;
    setServicesList([
      ...servicesList,
      {
        id: newId,
        title: "Nouvelle Prestation",
        description: "Description de la prestation.",
        forWhom: "Clients cibles",
        details: ["Premier point clé de la prestation"]
      }
    ]);
  };

  const updateServiceField = (index: number, field: string, value: any) => {
    const list = [...servicesList];
    list[index] = { ...list[index], [field]: value };
    setServicesList(list);
  };

  const addServiceDetail = (serviceIndex: number) => {
    const list = [...servicesList];
    list[serviceIndex].details = [...list[serviceIndex].details, "Nouveau point clé"];
    setServicesList(list);
  };

  const updateServiceDetail = (serviceIndex: number, detailIndex: number, value: string) => {
    const list = [...servicesList];
    list[serviceIndex].details[detailIndex] = value;
    setServicesList(list);
  };

  const deleteServiceDetail = (serviceIndex: number, detailIndex: number) => {
    const list = [...servicesList];
    list[serviceIndex].details = list[serviceIndex].details.filter((_, idx) => idx !== detailIndex);
    setServicesList(list);
  };

  const removeService = (index: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette prestation ?")) {
      setServicesList(servicesList.filter((_, idx) => idx !== index));
    }
  };

  // List Handlers: Exclusions
  const addExclusion = () => {
    setExclusionsList([...exclusionsList, { title: "Nouvelle limite", text: "Description de ce qui n'est pas inclus." }]);
  };

  const updateExclusion = (index: number, field: 'title' | 'text', value: string) => {
    const list = [...exclusionsList];
    list[index] = { ...list[index], [field]: value };
    setExclusionsList(list);
  };

  const removeExclusion = (index: number) => {
    setExclusionsList(exclusionsList.filter((_, idx) => idx !== index));
  };

  // List Handlers: Skills
  const addSkill = () => {
    setSkillsList([...skillsList, { name: "Nouvelle Compétence", category: "direct", description: "Description succincte." }]);
  };

  const updateSkill = (index: number, field: 'name' | 'category' | 'description', value: string) => {
    const list = [...skillsList];
    list[index] = { ...list[index], [field]: value };
    setSkillsList(list);
  };

  const removeSkill = (index: number) => {
    setSkillsList(skillsList.filter((_, idx) => idx !== index));
  };

  if (loading) {
    return (
      <div className="p-6 md:p-10 max-w-5xl mx-auto text-center">
        <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-brand-accent rounded-full mx-auto"></div>
        <p className="text-gray-500 mt-4">Chargement de la console d'administration globale...</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Configuration Initiale</h1>
          <p className="text-gray-500 mt-2">Activez l'administration dynamique de l'intégralité de votre site.</p>
        </header>

        <div className="bg-white border border-[#e7e2d8] p-12 text-center space-y-4">
          <Database className="w-12 h-12 text-gray-300 mx-auto" />
          <h3 className="font-bold text-gray-900 text-lg">Textes & listes non initialisés</h3>
          <p className="text-gray-500 text-xs max-w-md mx-auto">
            Pour pouvoir modifier dynamiquement tous les textes, les prestations, les compétences et les coordonnées de la page d'accueil, vous devez initialiser le document de contenu central dans Firestore.
          </p>
          <button
            onClick={handleInitialize}
            className="px-6 py-3 bg-[#181615] text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-accent transition-all rounded-none"
          >
            Initialiser la base de données du site
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Gestion Globale du Site</h1>
          <p className="text-gray-500 mt-2">Personnalisez les messages, prestations, compétences et coordonnées de votre portfolio.</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setFormValues(defaultContent)}
            className="px-3 py-1.5 border border-red-200 text-red-600 hover:bg-red-50 text-[10px] font-bold uppercase tracking-wider transition-all rounded-none"
          >
            Rétablir valeurs par défaut
          </button>
        </div>
      </header>

      {success && (
        <div className="bg-emerald-50 text-emerald-800 p-4 border border-emerald-100 text-xs font-bold flex items-center space-x-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Modifications enregistrées avec succès ! Elles sont immédiatement appliquées sur le site public.</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white border border-[#e7e2d8] p-6 md:p-10 space-y-8">
        {/* Navigation Onglets */}
        <div className="flex flex-wrap border-b border-gray-200">
          <button
            type="button"
            onClick={() => setActiveTab('hero')}
            className={`pb-4 px-6 text-xs font-bold uppercase tracking-wider border-b-2 ${activeTab === 'hero' ? 'border-[#181615] text-[#181615]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            <Sparkles className="w-4 h-4 inline-block mr-2 -mt-0.5" /> En-tête & Bio
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('services')}
            className={`pb-4 px-6 text-xs font-bold uppercase tracking-wider border-b-2 ${activeTab === 'services' ? 'border-[#181615] text-[#181615]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            <Briefcase className="w-4 h-4 inline-block mr-2 -mt-0.5" /> Prestations & Limites
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('skills')}
            className={`pb-4 px-6 text-xs font-bold uppercase tracking-wider border-b-2 ${activeTab === 'skills' ? 'border-[#181615] text-[#181615]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            <Cpu className="w-4 h-4 inline-block mr-2 -mt-0.5" /> Compétences
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('contact')}
            className={`pb-4 px-6 text-xs font-bold uppercase tracking-wider border-b-2 ${activeTab === 'contact' ? 'border-[#181615] text-[#181615]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            <Mail className="w-4 h-4 inline-block mr-2 -mt-0.5" /> Coordonnées & Contact
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('display')}
            className={`pb-4 px-6 text-xs font-bold uppercase tracking-wider border-b-2 ${activeTab === 'display' ? 'border-[#181615] text-[#181615]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            <LayoutTemplate className="w-4 h-4 inline-block mr-2 -mt-0.5" /> UI & Visibilité
          </button>
        </div>

        {/* Tab 1: Hero & About Settings */}
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-2 uppercase tracking-wider">En-tête de la Page</h3>
            
            <div className="space-y-1.5">
              <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Badge de disponibilité</label>
              <input
                type="text"
                required
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                placeholder="Ex: DISPONIBLE • ORCHESTRATEUR IA"
                className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Grand Titre de Présentation</label>
              <textarea
                required
                rows={3}
                value={heroTitle}
                onChange={(e) => setHeroTitle(e.target.value)}
                placeholder="Ex: Je transforme des idées produit en prototypes..."
                className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none font-bold"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Sous-titre explicatif</label>
              <textarea
                required
                rows={3}
                value={heroSub}
                onChange={(e) => setHeroSub(e.target.value)}
                placeholder="Ex: Architecte fonctionnel & orchestrateur d’IA..."
                className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Transparence Méthodologique</label>
              <textarea
                required
                rows={2}
                value={heroNotice}
                onChange={(e) => setHeroNotice(e.target.value)}
                placeholder="Ex: Transparence méthodologique : Je supervise et orchestre..."
                className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none italic"
              />
            </div>

            <h3 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-2 uppercase tracking-wider pt-4">Biographie & Philosophie</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">En-tête de section</label>
                <input
                  type="text"
                  required
                  value={aboutHeading}
                  onChange={(e) => setAboutHeading(e.target.value)}
                  placeholder="Ex: PRÉSENTATION & PHILOSOPHIE"
                  className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Titre Accrocheur</label>
                <input
                  type="text"
                  required
                  value={aboutTitle}
                  onChange={(e) => setAboutTitle(e.target.value)}
                  placeholder="Ex: À l'intersection de l'ingénierie..."
                  className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none font-bold"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Slogan de Cheminement</label>
              <input
                type="text"
                required
                value={aboutSub}
                onChange={(e) => setAboutSub(e.target.value)}
                placeholder="Ex: Bâtir des prototypes d'excellence qui durent."
                className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Texte de Biographie - Paragraphe 1</label>
              <textarea
                required
                rows={4}
                value={aboutText1}
                onChange={(e) => setAboutText1(e.target.value)}
                placeholder="Premier paragraphe..."
                className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Texte de Biographie - Paragraphe 2</label>
              <textarea
                required
                rows={4}
                value={aboutText2}
                onChange={(e) => setAboutText2(e.target.value)}
                placeholder="Second paragraphe..."
                className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Citation / Philosophie ouest-africaine</label>
              <textarea
                required
                rows={3}
                value={aboutQuote}
                onChange={(e) => setAboutQuote(e.target.value)}
                placeholder="Ex: Dans le contexte de connectivité fluctuante..."
                className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none italic"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Services & Exclusions */}
        {activeTab === 'services' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Prestations & Services</h3>
              <button
                type="button"
                onClick={addService}
                className="px-3 py-1 bg-brand-accent hover:bg-[#181615] text-white text-[10px] font-bold uppercase tracking-wider transition-colors rounded-none flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Ajouter un service</span>
              </button>
            </div>

            <div className="space-y-6">
              {servicesList.map((service, index) => (
                <div key={service.id} className="border border-gray-200 bg-[#faf8f5] p-5 space-y-4 relative">
                  <button
                    type="button"
                    onClick={() => removeService(index)}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-700 p-1"
                    title="Supprimer la prestation"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-sans font-extrabold text-[9px] text-slate-500 uppercase tracking-widest block">Titre de la prestation</label>
                      <input
                        type="text"
                        required
                        value={service.title}
                        onChange={(e) => updateServiceField(index, 'title', e.target.value)}
                        placeholder="Ex: Cadrage Fonctionnel"
                        className="w-full bg-white border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 py-2 px-3 text-xs text-slate-800 focus:outline-none font-bold"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-sans font-extrabold text-[9px] text-slate-500 uppercase tracking-widest block">Clients cibles (Cible)</label>
                      <input
                        type="text"
                        required
                        value={service.forWhom}
                        onChange={(e) => updateServiceField(index, 'forWhom', e.target.value)}
                        placeholder="Ex: Équipes produit, fondateurs"
                        className="w-full bg-white border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 py-2 px-3 text-xs text-slate-800 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-sans font-extrabold text-[9px] text-slate-500 uppercase tracking-widest block">Description globale</label>
                    <textarea
                      required
                      rows={2}
                      value={service.description}
                      onChange={(e) => updateServiceField(index, 'description', e.target.value)}
                      placeholder="Résumé du service..."
                      className="w-full bg-white border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 py-2 px-3 text-xs text-slate-800 focus:outline-none"
                    />
                  </div>

                  {/* Details bullets */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-sans font-extrabold text-[9px] text-slate-500 uppercase tracking-widest">Points clés / Livrables :</span>
                      <button
                        type="button"
                        onClick={() => addServiceDetail(index)}
                        className="text-[9px] font-bold text-brand-accent hover:text-[#181615] flex items-center space-x-1"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Ajouter un point clé</span>
                      </button>
                    </div>

                    <div className="space-y-2">
                      {service.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center space-x-2">
                          <span className="text-brand-accent font-bold text-xs">&bull;</span>
                          <input
                            type="text"
                            required
                            value={detail}
                            onChange={(e) => updateServiceDetail(index, dIdx, e.target.value)}
                            placeholder="Livrable ou détail..."
                            className="flex-1 bg-white border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 py-1.5 px-3 text-xs text-slate-800 focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => deleteServiceDetail(index, dIdx)}
                            className="text-gray-400 hover:text-red-500 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Exclusions Sub-section */}
            <div className="pt-6 border-t border-gray-100 space-y-4">
              <div className="flex justify-between items-center pb-2">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Ban className="w-4 h-4 text-brand-accent" />
                  <span>Limites contractuelles (Ce que je ne fais pas)</span>
                </h3>
                <button
                  type="button"
                  onClick={addExclusion}
                  className="px-3 py-1 bg-[#181615] hover:bg-brand-accent text-white text-[10px] font-bold uppercase tracking-wider transition-colors rounded-none flex items-center space-x-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Ajouter une limite</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {exclusionsList.map((exc, index) => (
                  <div key={index} className="border border-[#e7e2d8] p-4 bg-[#faf8f5] relative space-y-2">
                    <button
                      type="button"
                      onClick={() => removeExclusion(index)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="space-y-1">
                      <label className="font-sans font-extrabold text-[8px] text-slate-500 uppercase tracking-widest block">Titre / Catégorie</label>
                      <input
                        type="text"
                        required
                        value={exc.title}
                        onChange={(e) => updateExclusion(index, 'title', e.target.value)}
                        placeholder="Ex: Le code lourd"
                        className="w-full bg-white border border-[#e7e2d8] py-1 px-2 text-xs text-slate-800 font-bold focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-sans font-extrabold text-[8px] text-slate-500 uppercase tracking-widest block">Explication</label>
                      <textarea
                        required
                        rows={2}
                        value={exc.text}
                        onChange={(e) => updateExclusion(index, 'text', e.target.value)}
                        placeholder="Explication..."
                        className="w-full bg-white border border-[#e7e2d8] py-1 px-2 text-xs text-slate-800 focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Skills List */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Matrice des Compétences</h3>
              <button
                type="button"
                onClick={addSkill}
                className="px-3 py-1 bg-brand-accent hover:bg-[#181615] text-white text-[10px] font-bold uppercase tracking-wider transition-colors rounded-none flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Ajouter une compétence</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillsList.map((skill, index) => (
                <div key={index} className="border border-gray-200 bg-[#faf8f5] p-4 relative space-y-3">
                  <button
                    type="button"
                    onClick={() => removeSkill(index)}
                    className="absolute top-2 right-2 text-red-400 hover:text-red-600 p-1"
                    title="Supprimer la compétence"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-sans font-extrabold text-[8px] text-slate-500 uppercase tracking-widest block">Nom de la compétence</label>
                      <input
                        type="text"
                        required
                        value={skill.name}
                        onChange={(e) => updateSkill(index, 'name', e.target.value)}
                        placeholder="Ex: Prompt Engineering"
                        className="w-full bg-white border border-[#e7e2d8] py-1 px-2 text-xs text-slate-800 font-bold focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans font-extrabold text-[8px] text-slate-500 uppercase tracking-widest block">Catégorie</label>
                      <select
                        value={skill.category}
                        onChange={(e) => updateSkill(index, 'category', e.target.value as any)}
                        className="w-full bg-white border border-[#e7e2d8] py-1.5 px-2 text-xs text-slate-800 focus:outline-none"
                      >
                        <option value="direct">Ce que je dirige & valide</option>
                        <option value="tech">Technologie pilotée par IA</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-sans font-extrabold text-[8px] text-slate-500 uppercase tracking-widest block">Description explicative</label>
                    <input
                      type="text"
                      required
                      value={skill.description}
                      onChange={(e) => updateSkill(index, 'description', e.target.value)}
                      placeholder="Précisez votre savoir-faire ou maîtrise..."
                      className="w-full bg-white border border-[#e7e2d8] py-1 px-2 text-xs text-slate-800 focus:outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Contact & Socials Settings */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-2 uppercase tracking-wider">Coordonnées & Coordonnées de Contact</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Adresse Email Directe</span>
                </label>
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="Ex: horaciochinkoun@gmail.com"
                  className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Profil LinkedIn (URL)</span>
                </label>
                <input
                  type="url"
                  required
                  value={contactLinkedin}
                  onChange={(e) => setContactLinkedin(e.target.value)}
                  placeholder="Ex: https://linkedin.com/in/horacio-chinkoun"
                  className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Numéro de Messagerie WhatsApp</span>
                </label>
                <input
                  type="text"
                  required
                  value={contactWhatsapp}
                  onChange={(e) => setContactWhatsapp(e.target.value)}
                  placeholder="Ex: +229 99 06 25 59"
                  className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none font-mono"
                />
                <p className="text-[9px] text-gray-400">Le format doit être lisible (ex: +229 99 06 25 59), le système formatera le lien wa.me automatiquement.</p>
              </div>

              <div className="space-y-1.5">
                <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Localisation & Mobilité</span>
                </label>
                <input
                  type="text"
                  required
                  value={contactLocation}
                  onChange={(e) => setContactLocation(e.target.value)}
                  placeholder="Ex: Cotonou, Bénin (Remote disponible)"
                  className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                />
              </div>
            </div>

            {/* EmailJS Assistant Section */}
            <div className="mt-8 pt-8 border-t border-gray-100 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-brand-accent/10 text-brand-accent">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Acheminement des E-mails (EmailJS)</h4>
              </div>

              <div className="bg-[#faf8f5] border border-[#e7e2d8] p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="font-sans text-[11px] text-[#292625]/80 max-w-xl leading-relaxed">
                    Ce module permet de recevoir instantanément les messages envoyés depuis le formulaire public directement sur votre adresse email, tout en conservant une copie archivée et sécurisée dans votre console d’administration (onglet "Boîte de réception").
                  </p>
                  
                  {/* Status Indicator */}
                  {(import.meta as any).env.VITE_EMAILJS_SERVICE_ID && 
                   (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID && 
                   (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY ? (
                    <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-bold font-mono uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle className="w-3.5 h-3.5 mr-1 text-emerald-500" /> Actif & Connecté
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-bold font-mono uppercase bg-amber-50 text-amber-700 border border-amber-200">
                      <HelpCircle className="w-3.5 h-3.5 mr-1 text-amber-500" /> En attente de clés
                    </span>
                  )}
                </div>

                {!((import.meta as any).env.VITE_EMAILJS_SERVICE_ID && 
                   (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID && 
                   (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY) && (
                  <div className="text-[11px] text-gray-500 space-y-3 bg-white p-4 border border-[#e7e2d8]">
                    <p className="font-semibold text-gray-800">Comment lier votre compte EmailJS nouvellement créé :</p>
                    <ol className="list-decimal list-inside space-y-1.5 ml-1">
                      <li>Rendez-vous dans les <strong>Settings (Paramètres)</strong> de l'interface AI Studio, puis dans l'onglet <strong>Secrets</strong>.</li>
                      <li>Ajoutez les trois secrets suivants (en respectant les majuscules) :</li>
                    </ol>
                    <div className="bg-gray-50 p-3 font-mono text-[10px] space-y-2 border border-gray-100">
                      <div>
                        <span className="text-[#181615] font-bold">VITE_EMAILJS_SERVICE_ID</span> : <span className="text-gray-400 italic">votre Service ID (ex: service_xxxx)</span>
                      </div>
                      <div>
                        <span className="text-[#181615] font-bold">VITE_EMAILJS_TEMPLATE_ID</span> : <span className="text-gray-400 italic">votre Template ID (ex: template_xxxx)</span>
                      </div>
                      <div>
                        <span className="text-[#181615] font-bold">VITE_EMAILJS_PUBLIC_KEY</span> : <span className="text-gray-400 italic">votre Public Key / Clé Publique (ex: xxxx_xxxx_xxxx)</span>
                      </div>
                    </div>
                    <p className="text-[10px] italic text-brand-accent pt-1">
                      Note : Pour un déploiement ou un test en local, vous pouvez également renseigner ces variables directement dans votre fichier <code>.env</code>.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Display Settings */}
        {activeTab === 'display' && (
          <div className="space-y-8 fade-in">
            <h3 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-2 uppercase tracking-wider">Configuration de l'Interface</h3>
            
            <div className="space-y-6">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest flex items-center">
                <ImageIcon className="w-4 h-4 mr-2 text-brand-accent" /> Images Globales
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#faf8f5] border border-[#e7e2d8] p-5">
                  <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block mb-2">Portrait de la page d'accueil</label>
                  <input
                    type="text"
                    value={heroImage}
                    onChange={(e) => setHeroImage(e.target.value)}
                    placeholder="/images/horacio.png"
                    className="w-full bg-white border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                  />
                  <p className="text-[10px] text-gray-500 mt-2">Exemple: /images/votre-photo.jpg (assurez-vous d'avoir uploadé l'image via l'onglet Fichiers)</p>
                </div>

                <div className="bg-[#faf8f5] border border-[#e7e2d8] p-5">
                  <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block mb-2">Logo / Icône WhatsApp</label>
                  <input
                    type="text"
                    value={whatsappImage}
                    onChange={(e) => setWhatsappImage(e.target.value)}
                    placeholder="/images/whatsapp.svg"
                    className="w-full bg-white border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                  />
                  <p className="text-[10px] text-gray-500 mt-2">Exemple: /images/whatsapp.svg (ou votre propre image uploadée)</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="flex flex-col space-y-1">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest flex items-center">
                  <Eye className="w-4 h-4 mr-2 text-brand-accent" /> Visibilité des sections et éléments
                </h4>
                <p className="text-[11px] text-gray-500">Cochez les éléments que vous souhaitez afficher sur le site. Décochez pour les masquer (pratique si vous n'avez pas encore terminé leur configuration).</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { key: 'showHeroImage', label: 'Portrait (Accueil)' },
                  { key: 'showHeroAvailability', label: 'Bandeau disponibilité' },
                  { key: 'showHeroNotice', label: 'Notice méthodologique' },
                  { key: 'showAboutSection', label: 'Section Présentation' },
                  { key: 'showAboutQuote', label: 'Citation (Présentation)' },
                  { key: 'showSkillsSection', label: 'Section Compétences' },
                  { key: 'showProjectsSection', label: 'Section Projets' },
                  { key: 'showServicesSection', label: 'Section Prestations' },
                  { key: 'showContactSection', label: 'Section Contact' },
                  { key: 'showFloatingWhatsApp', label: 'Bouton WhatsApp flottant' },
                  
                ].map(({ key, label }) => {
                  const isVisible = displaySettings?.[key as keyof typeof displaySettings] ?? true;
                  return (
                    <label key={key} className={`flex items-center space-x-3 p-4 border transition-all cursor-pointer ${isVisible ? 'bg-[#faf8f5] border-[#e7e2d8] hover:border-[#181615]' : 'bg-gray-50 border-gray-200 opacity-60'}`}>
                      <input
                        type="checkbox"
                        checked={isVisible}
                        onChange={(e) => setDisplaySettings(prev => ({ ...prev, [key]: e.target.checked }))}
                        className="w-4 h-4 text-[#181615] bg-white border-gray-300 rounded-none focus:ring-[#181615]"
                      />
                      <span className={`text-xs font-bold ${isVisible ? 'text-gray-900' : 'text-gray-500'}`}>{label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-6 border-t border-gray-200 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-8 py-4 bg-[#181615] hover:bg-brand-accent text-white text-xs font-bold uppercase tracking-widest rounded-none transition-all flex items-center space-x-2"
          >
            {saving ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Enregistrement...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Enregistrer l'intégralité du site</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
