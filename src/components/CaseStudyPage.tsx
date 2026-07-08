/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ChevronLeft, Sparkles, AlertCircle, Bookmark, Code, CheckSquare, Layers, Image, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyPageProps {
  project: Project;
}

export default function CaseStudyPage({ project }: CaseStudyPageProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset image index when project changes
  useEffect(() => {
    setActiveImageIndex(0);
    // Scroll to top of the page when mounting this component
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [project]);

  if (!project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <article className="py-12 bg-slate-50" id={`case-study-page-${project.id}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Back Link to Home Projects */}
        <a
          href="/#projets"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-indigo-600 hover:text-indigo-800 font-bold transition-all mb-10 group cursor-pointer focus:outline-none"
          id="back-to-home-link"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Retour à l'accueil / Projets</span>
        </a>

        {/* Project Header Card */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4 md:space-x-5">
            {project.iconUrl ? (
              <img
                src={project.iconUrl}
                alt={`Icône de ${project.title}`}
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-2xl object-cover border border-slate-200 shadow-md bg-white shrink-0"
              />
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-sm">
                <Code className="w-8 h-8" />
              </div>
            )}
            <div>
              <span className="font-mono text-[10px] text-indigo-600 uppercase tracking-widest font-bold block mb-1">
                Étude de cas détaillée
              </span>
              <h1 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-slate-900">
                {project.title}
              </h1>
              <p className="font-sans font-medium text-xs md:text-sm text-slate-500 mt-1">
                {project.tagline}
              </p>
            </div>
          </div>
          
          <div className="shrink-0 flex flex-col items-start md:items-end space-y-1">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
              Catégorie Produit
            </span>
            <span className="inline-block bg-indigo-50 border border-indigo-100/60 text-indigo-700 font-sans font-semibold text-xs px-3 py-1.5 rounded-lg">
              {project.category}
            </span>
          </div>
        </div>

        {/* Dynamic Status / Live Banner */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs mb-10">
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-3">
            Statut réel de production
          </span>
          {project.liveUrl ? (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-emerald-800 bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-xs leading-relaxed">
              <div className="flex items-center space-x-3">
                <CheckSquare className="w-5 h-5 shrink-0 text-emerald-600" />
                <span className="font-semibold text-sm">{project.status}</span>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 font-bold text-xs uppercase bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <span>Visiter l'application en ligne</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <div className="flex items-center space-x-3 text-rose-700 bg-rose-50 border border-rose-100 p-4 rounded-xl text-xs leading-relaxed">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-500" />
              <span className="font-semibold text-sm">{project.status}</span>
            </div>
          )}
        </div>

        {/* Context & Problem Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-xs mb-10">
          <div className="space-y-3.5">
            <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center border-b border-slate-100 pb-2">
              <Bookmark className="w-4 h-4 text-indigo-500 mr-2" />
              Le Contexte Réel
            </h3>
            <p className="font-sans text-slate-600 text-xs md:text-sm leading-relaxed whitespace-pre-line">
              {caseStudy.context}
            </p>
          </div>
          <div className="space-y-3.5">
            <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center border-b border-slate-100 pb-2">
              <AlertCircle className="w-4 h-4 text-slate-700 mr-2" />
              Le Problème Résolu
            </h3>
            <p className="font-sans text-slate-600 text-xs md:text-sm leading-relaxed whitespace-pre-line">
              {caseStudy.problem}
            </p>
          </div>
        </div>

        {/* Product Approach */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-xs mb-10 space-y-4">
          <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center border-b border-slate-100 pb-2">
            <Layers className="w-4 h-4 text-indigo-500 mr-2" />
            L'Approche Produit & Design
          </h3>
          <p className="font-sans text-slate-600 text-xs md:text-sm leading-relaxed whitespace-pre-line">
            {caseStudy.approach}
          </p>
        </div>

        {/* Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-xs mb-10 space-y-4">
            <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center border-b border-slate-100 pb-2">
              <Image className="w-4 h-4 text-indigo-500 mr-2" />
              Captures d'Écran Réelles de l'Application
            </h3>
            <p className="font-sans text-slate-500 text-xs">
              Aperçus réels de l'interface utilisateur conçue pour {project.title}. Cliquez sur les flèches ou sur une miniature pour explorer la galerie complète (9 captures haute fidélité).
            </p>

            {/* Main Active Image */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-lg group">
              <img
                src={project.screenshots[activeImageIndex]}
                alt={`Capture d'écran ${activeImageIndex + 1} de ${project.title}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain transition-all duration-300"
              />
              
              <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-white font-mono text-[10px] tracking-wider border border-slate-700/50 shadow-sm">
                {activeImageIndex + 1} / {project.screenshots.length}
              </div>

              {/* Controls */}
              <button
                onClick={() => setActiveImageIndex((prev) => (prev === 0 ? project.screenshots!.length - 1 : prev - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-sm opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 border border-slate-700 shadow-md cursor-pointer focus:outline-none hover:scale-105 active:scale-95"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveImageIndex((prev) => (prev === project.screenshots!.length - 1 ? 0 : prev + 1))}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-sm opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 border border-slate-700 shadow-md cursor-pointer focus:outline-none hover:scale-105 active:scale-95"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex space-x-2.5 overflow-x-auto py-2.5 px-1 scrollbar-thin scrollbar-thumb-slate-300">
              {project.screenshots.map((screenshot, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-24 aspect-video rounded-lg overflow-hidden shrink-0 border-2 transition-all duration-200 cursor-pointer focus:outline-none ${
                    idx === activeImageIndex
                      ? "border-indigo-600 scale-[1.03] shadow-md ring-2 ring-indigo-600/20"
                      : "border-slate-200 hover:border-slate-400 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={screenshot}
                    alt={`Miniature ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Prompt Engineering Panel */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-xs mb-10 space-y-4">
          <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center border-b border-slate-100 pb-2">
            <Code className="w-4 h-4 text-indigo-500 mr-2" />
            Ingénierie de Prompts & Directives IA
          </h3>
          <p className="font-sans text-slate-500 text-xs">
            Exemple concret d'instruction système rédigée par mes soins pour diriger l'agent de modélisation cognitif et assurer un comportement déterministe conforme aux contraintes d'utilisabilité.
          </p>
          
          {caseStudy.promptEngineering.map((prompt, idx) => (
            <div key={idx} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md">
              <div className="bg-slate-800/85 px-4 py-3 border-b border-slate-700/50 flex justify-between items-center">
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

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-xs mb-10">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-rose-800 border-b border-slate-100 pb-2">
              ⚠️ Les Défis Techniques
            </h3>
            <ul className="space-y-3">
              {caseStudy.challenges.map((challenge, idx) => (
                <li key={idx} className="bg-rose-50/40 border border-rose-100/50 p-4 rounded-xl text-rose-950 text-xs md:text-sm leading-relaxed flex items-start space-x-3">
                  <span className="font-bold text-rose-500 font-mono shrink-0">{idx + 1}.</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-emerald-800 border-b border-slate-100 pb-2">
              ✅ Les Solutions Apportées
            </h3>
            <ul className="space-y-3">
              {caseStudy.solutions.map((solution, idx) => (
                <li key={idx} className="bg-emerald-50/40 border border-emerald-100/50 p-4 rounded-xl text-emerald-950 text-xs md:text-sm leading-relaxed flex items-start space-x-3">
                  <span className="font-bold text-emerald-500 font-mono shrink-0">{idx + 1}.</span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Use Cases & Value Added */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-xs mb-10">
          <div className="space-y-3.5">
            <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center border-b border-slate-100 pb-2">
              <CheckSquare className="w-4 h-4 text-indigo-500 mr-2" />
              Scénarios d'Usage Clés
            </h3>
            <ul className="space-y-3">
              {caseStudy.useCases.map((useCase, idx) => (
                <li key={idx} className="text-slate-600 text-xs md:text-sm leading-relaxed flex items-start space-x-2.5">
                  <span className="text-indigo-500 font-bold shrink-0 text-base leading-none">&bull;</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3.5">
            <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center border-b border-slate-100 pb-2">
              <Sparkles className="w-4 h-4 text-amber-500 mr-2" />
              Valeur Ajoutée Produit
            </h3>
            <p className="font-sans text-slate-600 text-xs md:text-sm leading-relaxed">
              {caseStudy.valueAdded}
            </p>
          </div>
        </div>

        {/* Professional Skills Demonstrated */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-xs mb-10 space-y-4">
          <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
            Compétences Humaines Démontrées (Sans Complaisance)
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {caseStudy.skillsDemonstrated.map((skill, idx) => (
              <span
                key={idx}
                className="bg-slate-100 border border-slate-200 text-slate-800 font-sans font-semibold text-xs px-3.5 py-2 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-xl text-center space-y-6">
          <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight">
            Vous souhaitez échanger sur un projet similaire ?
          </h2>
          <p className="font-sans text-indigo-200 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Je serai ravi de discuter de vos enjeux produit, de direction d'IA, de prompt engineering ou de documentation produit pour vos solutions à forte valeur ajoutée.
          </p>
          <div className="pt-2">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center font-sans font-bold text-xs uppercase tracking-wider py-3.5 px-8 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-all text-white shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Discutons de votre projet</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
