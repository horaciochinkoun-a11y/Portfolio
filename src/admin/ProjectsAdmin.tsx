import React, { useState, useEffect } from 'react';
import { collection, doc, setDoc, deleteDoc, onSnapshot, writeBatch } from 'firebase/firestore';
import { db } from '../firebase';
import { Project, CaseStudy } from '../types';
import { projects as defaultProjects } from '../data';
import { 
  Plus, Edit, Trash2, ArrowLeft, Save, Globe, Github, Info, 
  Layers, Terminal, HelpCircle, FileText, CheckCircle, Database 
} from 'lucide-react';

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'visuals' | 'casestudy' | 'prompts'>('general');

  // Form State
  const [formId, setFormId] = useState('');
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState<'primary' | 'secondary'>('secondary');
  const [technologies, setTechnologies] = useState('');
  const [status, setStatus] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [iconName, setIconName] = useState('Briefcase');
  const [iconUrl, setIconUrl] = useState('');
  const [screenshots, setScreenshots] = useState('');

  // Case Study State
  const [hasCaseStudy, setHasCaseStudy] = useState(false);
  const [csContext, setCsContext] = useState('');
  const [csProblem, setCsProblem] = useState('');
  const [csApproach, setCsApproach] = useState('');
  const [csStatusDetail, setCsStatusDetail] = useState('');
  const [csValueAdded, setCsValueAdded] = useState('');
  const [csChallenges, setCsChallenges] = useState('');
  const [csSolutions, setCsSolutions] = useState('');
  const [csUseCases, setCsUseCases] = useState('');
  const [csSkills, setCsSkills] = useState('');

  // Prompt Engineering State (Dynamic list)
  const [prompts, setPrompts] = useState<{ title: string; description: string; promptText: string }[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'projects'), (snapshot) => {
      const projs: Project[] = [];
      snapshot.forEach((doc) => {
        projs.push(doc.data() as Project);
      });
      setProjects(projs);
      setLoading(false);
    }, (error) => {
      console.error("ProjectsAdmin Firestore Error:", error);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleImportDefaults = async () => {
    if (window.confirm("Voulez-vous importer les 3 projets par défaut du portfolio dans la base de données ?")) {
      setLoading(true);
      try {
        const batch = writeBatch(db);
        defaultProjects.forEach((proj) => {
          const ref = doc(db, 'projects', proj.id);
          batch.set(ref, proj);
        });
        await batch.commit();
        alert("Projets importés avec succès !");
      } catch (err: any) {
        console.error(err);
        alert("Erreur lors de l'importation : " + err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const startEdit = (proj: Project) => {
    setEditingProject(proj);
    setIsCreating(false);
    setActiveTab('general');

    // Fill form states
    setFormId(proj.id);
    setTitle(proj.title || '');
    setTagline(proj.tagline || '');
    setShortDescription(proj.shortDescription || '');
    setLongDescription(proj.longDescription || '');
    setCategory(proj.category || '');
    setType(proj.type || 'secondary');
    setTechnologies(proj.technologies ? proj.technologies.join(', ') : '');
    setStatus(proj.status || '');
    setLiveUrl(proj.liveUrl || '');
    setGithubUrl(proj.githubUrl || '');
    setIconName(proj.iconName || 'Briefcase');
    setIconUrl(proj.iconUrl || '');
    setScreenshots(proj.screenshots ? proj.screenshots.join(', ') : '');

    if (proj.caseStudy) {
      setHasCaseStudy(true);
      setCsContext(proj.caseStudy.context || '');
      setCsProblem(proj.caseStudy.problem || '');
      setCsApproach(proj.caseStudy.approach || '');
      setCsStatusDetail(proj.caseStudy.statusDetail || '');
      setCsValueAdded(proj.caseStudy.valueAdded || '');
      setCsChallenges(proj.caseStudy.challenges ? proj.caseStudy.challenges.join('\n') : '');
      setCsSolutions(proj.caseStudy.solutions ? proj.caseStudy.solutions.join('\n') : '');
      setCsUseCases(proj.caseStudy.useCases ? proj.caseStudy.useCases.join('\n') : '');
      setCsSkills(proj.caseStudy.skillsDemonstrated ? proj.caseStudy.skillsDemonstrated.join('\n') : '');
      setPrompts(proj.caseStudy.promptEngineering || []);
    } else {
      setHasCaseStudy(false);
      setCsContext('');
      setCsProblem('');
      setCsApproach('');
      setCsStatusDetail('');
      setCsValueAdded('');
      setCsChallenges('');
      setCsSolutions('');
      setCsUseCases('');
      setCsSkills('');
      setPrompts([]);
    }
  };

  const startCreate = () => {
    setEditingProject(null);
    setIsCreating(true);
    setActiveTab('general');

    // Reset form states
    setFormId('');
    setTitle('');
    setTagline('');
    setShortDescription('');
    setLongDescription('');
    setCategory('');
    setType('secondary');
    setTechnologies('');
    setStatus('');
    setLiveUrl('');
    setGithubUrl('');
    setIconName('Briefcase');
    setIconUrl('');
    setScreenshots('');

    setHasCaseStudy(false);
    setCsContext('');
    setCsProblem('');
    setCsApproach('');
    setCsStatusDetail('');
    setCsValueAdded('');
    setCsChallenges('');
    setCsSolutions('');
    setCsUseCases('');
    setCsSkills('');
    setPrompts([]);
  };

  const handleAddPrompt = () => {
    setPrompts([...prompts, { title: '', description: '', promptText: '' }]);
  };

  const handleUpdatePrompt = (index: number, field: 'title' | 'description' | 'promptText', value: string) => {
    const updated = [...prompts];
    updated[index][field] = value;
    setPrompts(updated);
  };

  const handleRemovePrompt = (index: number) => {
    setPrompts(prompts.filter((_, i) => i !== index));
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer définitivement ce projet ? Cette action est irréversible.")) {
      try {
        await deleteDoc(doc(db, 'projects', id));
      } catch (err: any) {
        alert("Erreur lors de la suppression : " + err.message);
      }
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formId.trim()) {
      alert("L'identifiant unique (ID) est requis.");
      return;
    }
    if (!title.trim()) {
      alert("Le titre est requis.");
      return;
    }

    const techArray = technologies.split(',').map(t => t.trim()).filter(t => t.length > 0);
    const screenshotArray = screenshots.split(',').map(s => s.trim()).filter(s => s.length > 0);

    let caseStudyObj: CaseStudy | undefined = undefined;

    if (hasCaseStudy) {
      caseStudyObj = {
        context: csContext,
        problem: csProblem,
        approach: csApproach,
        statusDetail: csStatusDetail,
        valueAdded: csValueAdded,
        challenges: csChallenges.split('\n').map(c => c.trim()).filter(c => c.length > 0),
        solutions: csSolutions.split('\n').map(s => s.trim()).filter(s => s.length > 0),
        useCases: csUseCases.split('\n').map(u => u.trim()).filter(u => u.length > 0),
        skillsDemonstrated: csSkills.split('\n').map(s => s.trim()).filter(s => s.length > 0),
        promptEngineering: prompts.filter(p => p.title.trim() !== '')
      };
    }

    const savedProject: Project = {
      id: formId.trim().toLowerCase().replace(/\s+/g, '-'),
      title: title.trim(),
      tagline: tagline.trim(),
      shortDescription: shortDescription.trim(),
      longDescription: longDescription.trim(),
      category: category.trim(),
      type: type,
      technologies: techArray,
      status: status.trim(),
      iconName: iconName,
      ...(liveUrl ? { liveUrl: liveUrl.trim() } : {}),
      ...(githubUrl ? { githubUrl: githubUrl.trim() } : {}),
      ...(iconUrl ? { iconUrl: iconUrl.trim() } : {}),
      ...(screenshotArray.length > 0 ? { screenshots: screenshotArray } : {}),
      ...(caseStudyObj ? { caseStudy: caseStudyObj } : {})
    };

    try {
      await setDoc(doc(db, 'projects', savedProject.id), savedProject);
      setIsCreating(false);
      setEditingProject(null);
    } catch (err: any) {
      alert("Erreur lors de la sauvegarde : " + err.message);
    }
  };

  if (loading) {
    return (
      <div className="p-6 md:p-10 max-w-5xl mx-auto text-center">
        <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-brand-accent rounded-full mx-auto"></div>
        <p className="text-gray-500 mt-4">Chargement des projets...</p>
      </div>
    );
  }

  if (isCreating || editingProject) {
    return (
      <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => { setIsCreating(false); setEditingProject(null); }}
            className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour</span>
          </button>
          <span className="font-mono text-[10px] bg-gray-100 text-gray-600 px-2 py-1 uppercase tracking-wider">
            {isCreating ? 'Nouveau projet' : `Édition : ${editingProject?.title}`}
          </span>
        </div>

        <form onSubmit={handleSave} className="bg-white border border-[#e7e2d8] p-6 md:p-10 space-y-8">
          {/* Navigation des Onglets de l'Éditeur */}
          <div className="flex overflow-x-auto border-b border-gray-200">
            <button
              type="button"
              onClick={() => setActiveTab('general')}
              className={`pb-4 px-4 text-xs font-bold uppercase tracking-wider border-b-2 whitespace-nowrap ${activeTab === 'general' ? 'border-[#181615] text-[#181615]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
            >
              <Info className="w-4 h-4 inline-block mr-2 -mt-0.5" /> Informations
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('visuals')}
              className={`pb-4 px-4 text-xs font-bold uppercase tracking-wider border-b-2 whitespace-nowrap ${activeTab === 'visuals' ? 'border-[#181615] text-[#181615]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
            >
              <Layers className="w-4 h-4 inline-block mr-2 -mt-0.5" /> Visuels & Icônes
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('casestudy')}
              className={`pb-4 px-4 text-xs font-bold uppercase tracking-wider border-b-2 whitespace-nowrap ${activeTab === 'casestudy' ? 'border-[#181615] text-[#181615]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
            >
              <FileText className="w-4 h-4 inline-block mr-2 -mt-0.5" /> Étude de Cas
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('prompts')}
              className={`pb-4 px-4 text-xs font-bold uppercase tracking-wider border-b-2 whitespace-nowrap ${activeTab === 'prompts' ? 'border-[#181615] text-[#181615]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
            >
              <Terminal className="w-4 h-4 inline-block mr-2 -mt-0.5" /> Prompt Engineering
            </button>
          </div>

          {/* Onglet 1: Informations Générales */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Identifiant Unique (ID) <span className="text-brand-accent">*</span></label>
                  <input
                    type="text"
                    required
                    disabled={!!editingProject}
                    value={formId}
                    onChange={(e) => setFormId(e.target.value)}
                    placeholder="Ex: mon-super-projet"
                    className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none disabled:opacity-50"
                  />
                  <p className="text-[10px] text-gray-400">Identifiant technique sans espaces ni accents (ex: `doc2form`).</p>
                </div>

                <div className="space-y-1.5">
                  <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Titre du Projet <span className="text-brand-accent">*</span></label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ex: DocuGen Pro"
                    className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Catégorie <span className="text-brand-accent">*</span></label>
                  <input
                    type="text"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Ex: LegalTech & Productivité"
                    className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Slogan / Tagline <span className="text-brand-accent">*</span></label>
                  <input
                    type="text"
                    required
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    placeholder="Ex: Générateur automatisé de documents"
                    className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Type de Projet</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as 'primary' | 'secondary')}
                    className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                  >
                    <option value="secondary">Secondaire (Mini-outil / Prototype simple)</option>
                    <option value="primary">Majeur (Étude de cas complète, visible en avant-plan)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Statut du Projet <span className="text-brand-accent">*</span></label>
                  <input
                    type="text"
                    required
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Ex: Déployé en production (accessible en ligne)"
                    className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Technologies (séparées par des virgules) <span className="text-brand-accent">*</span></label>
                <input
                  type="text"
                  required
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  placeholder="Ex: React, Tailwind CSS, Gemini API, LocalStorage"
                  className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Description Courte <span className="text-brand-accent">*</span></label>
                <textarea
                  required
                  rows={2}
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  placeholder="Résumé accrocheur affiché sur la carte du projet..."
                  className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Description Longue <span className="text-brand-accent">*</span></label>
                <textarea
                  required
                  rows={4}
                  value={longDescription}
                  onChange={(e) => setLongDescription(e.target.value)}
                  placeholder="Description complète du projet..."
                  className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Lien de Déploiement (Live URL)</label>
                  <input
                    type="url"
                    value={liveUrl}
                    onChange={(e) => setLiveUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Lien du Code (GitHub URL)</label>
                  <input
                    type="url"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Onglet 2: Visuels & Icônes */}
          {activeTab === 'visuals' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Icône de secours (Nom Lucide)</label>
                  <input
                    type="text"
                    value={iconName}
                    onChange={(e) => setIconName(e.target.value)}
                    placeholder="Ex: GradCap, Atom, FileText, CheckSquare"
                    className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                  />
                  <p className="text-[10px] text-gray-400">Voir les icônes disponibles sur Lucide.org.</p>
                </div>

                <div className="space-y-1.5">
                  <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Lien de l'icône 3D (Optionnel)</label>
                  <input
                    type="text"
                    value={iconUrl}
                    onChange={(e) => setIconUrl(e.target.value)}
                    placeholder="Ex: /assets/images/mon-icone.png"
                    className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Captures d'écran (Liens séparés par des virgules)</label>
                <textarea
                  rows={3}
                  value={screenshots}
                  onChange={(e) => setScreenshots(e.target.value)}
                  placeholder="Ex: /src/assets/images/docugen_1.png, /src/assets/images/docugen_2.png"
                  className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* Onglet 3: Étude de Cas */}
          {activeTab === 'casestudy' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-100">
                <input
                  type="checkbox"
                  id="hasCaseStudy"
                  checked={hasCaseStudy}
                  onChange={(e) => setHasCaseStudy(e.target.checked)}
                  className="w-4 h-4 text-brand-accent focus:ring-0 border-[#e7e2d8]"
                />
                <label htmlFor="hasCaseStudy" className="font-sans font-bold text-sm text-[#181615] select-none cursor-pointer">
                  Activer l'étude de cas pour ce projet (Recommandé pour les projets majeurs)
                </label>
              </div>

              {hasCaseStudy && (
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Contexte Produit</label>
                    <textarea
                      rows={3}
                      value={csContext}
                      onChange={(e) => setCsContext(e.target.value)}
                      placeholder="Pourquoi ce projet a-t-il été pensé ?"
                      className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Problématique Métier</label>
                    <textarea
                      rows={3}
                      value={csProblem}
                      onChange={(e) => setCsProblem(e.target.value)}
                      placeholder="Quel était le problème précis à résoudre ?"
                      className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Approche et Cadrage</label>
                    <textarea
                      rows={3}
                      value={csApproach}
                      onChange={(e) => setCsApproach(e.target.value)}
                      placeholder="Quelle a été l'approche stratégique ?"
                      className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Valeur Ajoutée Produit</label>
                    <textarea
                      rows={3}
                      value={csValueAdded}
                      onChange={(e) => setCsValueAdded(e.target.value)}
                      placeholder="Quelle valeur le produit apporte-t-il concrètement aux utilisateurs ?"
                      className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Détails d'avancement / Déploiement</label>
                    <textarea
                      rows={2}
                      value={csStatusDetail}
                      onChange={(e) => setCsStatusDetail(e.target.value)}
                      placeholder="Ex: Déployé en production et pleinement accessible en ligne sous forme de PWA autonome."
                      className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Défis Techniques (un par ligne)</label>
                      <textarea
                        rows={4}
                        value={csChallenges}
                        onChange={(e) => setCsChallenges(e.target.value)}
                        placeholder="Défi 1&#10;Défi 2..."
                        className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Solutions Apportées (une par ligne)</label>
                      <textarea
                        rows={4}
                        value={csSolutions}
                        onChange={(e) => setCsSolutions(e.target.value)}
                        placeholder="Solution 1&#10;Solution 2..."
                        className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Cas d'Usage Réels (un par ligne)</label>
                      <textarea
                        rows={4}
                        value={csUseCases}
                        onChange={(e) => setCsUseCases(e.target.value)}
                        placeholder="Cas d'usage 1&#10;Cas d'usage 2..."
                        className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Compétences Démontrées (une par ligne)</label>
                      <textarea
                        rows={4}
                        value={csSkills}
                        onChange={(e) => setCsSkills(e.target.value)}
                        placeholder="Compétence 1&#10;Compétence 2..."
                        className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Onglet 4: Prompt Engineering */}
          {activeTab === 'prompts' && (
            <div className="space-y-6">
              {!hasCaseStudy ? (
                <div className="p-4 bg-amber-50 text-amber-700 text-xs border border-amber-100">
                  L'onglet prompt engineering requiert d'abord l'activation de l'étude de cas dans l'onglet "Étude de cas".
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <h3 className="font-sans font-bold text-sm text-[#181615]">Prompts IA implémentés dans le produit</h3>
                    <button
                      type="button"
                      onClick={handleAddPrompt}
                      className="text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-gray-900 flex items-center space-x-1"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Ajouter un prompt</span>
                    </button>
                  </div>

                  {prompts.length === 0 ? (
                    <p className="text-gray-400 text-xs italic">Aucun prompt pour le moment.</p>
                  ) : (
                    prompts.map((prompt, index) => (
                      <div key={index} className="p-4 bg-gray-50 border border-gray-200 space-y-4 relative">
                        <button
                          type="button"
                          onClick={() => handleRemovePrompt(index)}
                          className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-xs font-bold"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <div className="space-y-1.5 max-w-md">
                          <label className="font-sans font-extrabold text-[9px] text-slate-700 uppercase tracking-widest block">Titre du Prompt</label>
                          <input
                            type="text"
                            required
                            value={prompt.title}
                            onChange={(e) => handleUpdatePrompt(index, 'title', e.target.value)}
                            placeholder="Ex: Prompt d'Analyse de documents"
                            className="w-full bg-white border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-2 px-3 text-xs text-slate-800 focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-sans font-extrabold text-[9px] text-slate-700 uppercase tracking-widest block">Description du prompt / Rôle</label>
                          <textarea
                            rows={2}
                            value={prompt.description}
                            onChange={(e) => handleUpdatePrompt(index, 'description', e.target.value)}
                            placeholder="Ex: Instructions forçant Gemini à renvoyer une structure sémantique..."
                            className="w-full bg-white border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-2 px-3 text-xs text-slate-800 focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-sans font-extrabold text-[9px] text-slate-700 uppercase tracking-widest block">Contenu textuel du Prompt (Prompt Text)</label>
                          <textarea
                            rows={6}
                            value={prompt.promptText}
                            onChange={(e) => handleUpdatePrompt(index, 'promptText', e.target.value)}
                            placeholder="Tu es un assistant expert..."
                            className="w-full bg-white border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-2 px-3 text-xs text-slate-800 font-mono focus:outline-none"
                          />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          )}

          {/* Form Actions Footer */}
          <div className="pt-6 border-t border-gray-200 flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => { setIsCreating(false); setEditingProject(null); }}
              className="px-6 py-3 border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all rounded-none"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-[#181615] text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-accent transition-all flex items-center space-x-2 rounded-none"
            >
              <Save className="w-4 h-4" />
              <span>Enregistrer</span>
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Mes Projets</h1>
          <p className="text-gray-500 mt-2">Gérez les réalisations affichées sur votre portfolio.</p>
        </div>
        <div className="flex gap-3">
          {projects.length === 0 && (
            <button
              onClick={handleImportDefaults}
              className="px-4 py-2 border border-[#e7e2d8] bg-white text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-gray-50 transition-all flex items-center space-x-2 rounded-none"
            >
              <Database className="w-4 h-4 text-brand-accent" />
              <span>Charger les démos</span>
            </button>
          )}
          <button
            onClick={startCreate}
            className="px-4 py-2 bg-[#181615] text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-accent transition-all flex items-center space-x-2 rounded-none"
          >
            <Plus className="w-4 h-4" />
            <span>Nouveau Projet</span>
          </button>
        </div>
      </header>

      {projects.length === 0 ? (
        <div className="bg-white border border-[#e7e2d8] p-12 text-center space-y-4">
          <Database className="w-12 h-12 text-gray-300 mx-auto" />
          <h3 className="font-bold text-gray-900 text-lg">Aucun projet publié dans Firestore</h3>
          <p className="text-gray-500 text-xs max-w-md mx-auto">
            La base de données Firestore est vide pour le moment. Vous pouvez créer un projet à partir de zéro, ou cliquer sur "Charger les démos" pour importer instantanément vos réalisations existantes.
          </p>
          <button
            onClick={handleImportDefaults}
            className="px-6 py-3 bg-[#181615] text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-accent transition-all"
          >
            Importer les projets de démonstration
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div key={proj.id} className="bg-white border border-[#e7e2d8] p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-none font-bold ${proj.type === 'primary' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-600'}`}>
                    {proj.type === 'primary' ? 'Majeur / Étude de Cas' : 'Secondaire'}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">ID: {proj.id}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{proj.title}</h3>
                <p className="text-xs font-serif italic text-brand-accent mb-3">{proj.tagline}</p>
                <p className="text-xs text-gray-500 line-clamp-3 mb-4">{proj.shortDescription}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.technologies?.map((tech) => (
                    <span key={tech} className="font-mono text-[8px] bg-gray-50 border border-gray-100 text-slate-500 px-1.5 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end space-x-2">
                <button
                  onClick={() => startEdit(proj)}
                  className="p-2 border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  title="Modifier"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(proj.id)}
                  className="p-2 border border-red-100 text-red-600 hover:bg-red-50 transition-colors"
                  title="Supprimer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
