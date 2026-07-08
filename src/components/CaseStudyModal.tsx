/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, Sparkles, AlertCircle, Bookmark, Code, CheckSquare, Layers } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ project, isOpen, onClose }: CaseStudyModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-6"
      id="case-study-modal-container"
    >
      {/* Dark Overlay with blur */}
      <div
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        id="case-study-modal-overlay"
      />

      {/* Modal Box */}
      <div
        className="bg-white w-full max-w-4xl h-full max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative z-10 border border-slate-200/80"
        id="case-study-modal-content"
      >
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-900 text-white shrink-0">
          <div>
            <span className="font-mono text-[10px] text-indigo-300 uppercase tracking-widest font-semibold block mb-0.5">
              Étude de cas détaillée
            </span>
            <h3 className="font-display font-bold text-xl tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-lg transition-colors focus:outline-none"
            aria-label="Fermer la fenêtre"
            id="close-modal-button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10" id="case-study-modal-scrollable-body">
          
          {/* Status & Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-50 border border-slate-200/60 p-5 rounded-xl">
            <div className="md:col-span-8 space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block">
                Statut réel de production
              </span>
              <div className="flex items-center space-x-2 text-rose-700 bg-rose-50 border border-rose-100 p-2.5 rounded-lg text-xs leading-relaxed">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                <span className="font-semibold">{project.status}</span>
              </div>
            </div>
            <div className="md:col-span-4 space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block">
                Catégorie Produit
              </span>
              <span className="inline-block bg-indigo-50 border border-indigo-100/60 text-indigo-700 font-sans font-medium text-xs px-3 py-1.5 rounded-lg w-full text-center">
                {project.category}
              </span>
            </div>
          </div>

          {/* Section: Context & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-100 pb-8">
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center">
                <Bookmark className="w-4 h-4 text-indigo-500 mr-2" />
                Le Contexte Réel
              </h4>
              <p className="font-sans text-slate-600 text-xs leading-relaxed">
                {caseStudy.context}
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center">
                <AlertCircle className="w-4 h-4 text-slate-700 mr-2" />
                Le Problème Résolu
              </h4>
              <p className="font-sans text-slate-600 text-xs leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
          </div>

          {/* Section: Product Approach */}
          <div className="space-y-3 border-b border-slate-100 pb-8">
            <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center">
              <Layers className="w-4 h-4 text-indigo-500 mr-2" />
              L'Approche Produit & Design
            </h4>
            <p className="font-sans text-slate-600 text-xs leading-relaxed">
              {caseStudy.approach}
            </p>
          </div>

          {/* Section: Prompt Engineering & AI Directives (Core Value of Horacio) */}
          <div className="space-y-4 border-b border-slate-100 pb-8">
            <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center">
              <Code className="w-4 h-4 text-indigo-500 mr-2" />
              Ingénierie de Prompts & Directives IA
            </h4>
            <p className="font-sans text-slate-500 text-xs">
              Voici un exemple concret d'instruction système rédigée par mes soins pour diriger l'agent de modélisation cognitif et assurer un comportement déterministe conforme aux contraintes d'utilisabilité.
            </p>
            
            {caseStudy.promptEngineering.map((prompt, idx) => (
              <div key={idx} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md">
                <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700/50 flex justify-between items-center">
                  <span className="font-display font-semibold text-xs text-indigo-300">
                    {prompt.title}
                  </span>
                  <span className="font-mono text-[9px] text-slate-400">system_instruction</span>
                </div>
                <div className="p-4">
                  <p className="font-sans text-slate-300 text-[11px] mb-3 leading-relaxed italic">
                    <strong>Contexte d'usage :</strong> {prompt.description}
                  </p>
                  <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto text-[10px] text-emerald-400 font-mono leading-relaxed whitespace-pre-wrap">
                    {prompt.promptText}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* Section: Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-100 pb-8">
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider text-rose-800">
                ⚠️ Les Défis Techniques
              </h4>
              <ul className="space-y-3">
                {caseStudy.challenges.map((challenge, idx) => (
                  <li key={idx} className="bg-rose-50/40 border border-rose-100/50 p-3.5 rounded-lg text-rose-950 text-xs leading-relaxed flex items-start space-x-2.5">
                    <span className="font-bold text-rose-500 font-mono shrink-0">{idx + 1}.</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider text-emerald-800">
                ✅ Les Solutions Apportées
              </h4>
              <ul className="space-y-3">
                {caseStudy.solutions.map((solution, idx) => (
                  <li key={idx} className="bg-emerald-50/40 border border-emerald-100/50 p-3.5 rounded-lg text-emerald-950 text-xs leading-relaxed flex items-start space-x-2.5">
                    <span className="font-bold text-emerald-500 font-mono shrink-0">{idx + 1}.</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section: Use Cases & Value Added */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-100 pb-8">
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center">
                <CheckSquare className="w-4 h-4 text-indigo-500 mr-2" />
                Scénarios d'Usage Clés
              </h4>
              <ul className="space-y-2">
                {caseStudy.useCases.map((useCase, idx) => (
                  <li key={idx} className="text-slate-600 text-xs leading-relaxed flex items-start space-x-2">
                    <span className="text-indigo-500 font-bold shrink-0">&bull;</span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center">
                <Sparkles className="w-4 h-4 text-amber-500 mr-2" />
                Valeur Ajoutée Produit
              </h4>
              <p className="font-sans text-slate-600 text-xs leading-relaxed">
                {caseStudy.valueAdded}
              </p>
            </div>
          </div>

          {/* Section: Human Skills Demonstrated */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider">
              Compétences Humaines Démontrées (Sans Complaisance)
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {caseStudy.skillsDemonstrated.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-slate-100 border border-slate-200 text-slate-800 font-sans font-medium text-[11px] px-3 py-1.5 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0">
          <span className="font-mono text-[10px] text-slate-400 text-center sm:text-left">
            Conception & Direction d'IA autonome par Horacio Chinkoun.
          </span>
          <button
            onClick={onClose}
            className="font-sans font-semibold text-xs uppercase tracking-wider py-2.5 px-6 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-all w-full sm:w-auto text-center cursor-pointer focus:outline-none"
            id="close-modal-bottom-button"
          >
            Fermer l'étude
          </button>
        </div>

      </div>
    </div>
  );
}
