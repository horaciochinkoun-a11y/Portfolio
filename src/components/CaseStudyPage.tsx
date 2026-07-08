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
    <article className="py-12 bg-[#faf8f5] grid-pattern border-b border-[#e7e2d8]" id={`case-study-page-${project.id}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Back Link to Home Projects */}
        <a
          href="/#projets"
          className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#181615] hover:text-brand-accent font-extrabold transition-all mb-10 group cursor-pointer focus:outline-none"
          id="back-to-home-link"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-brand-accent" />
          <span>Retour à l'accueil / Projets</span>
        </a>

        {/* Project Header Card */}
        <div className="bg-white border border-[#e7e2d8] rounded-none p-6 md:p-8 shadow-xs mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4 md:space-x-5">
            {project.iconUrl ? (
              <img
                src={project.iconUrl}
                alt={`Icône de ${project.title}`}
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-none object-cover border border-[#e7e2d8] bg-white shrink-0"
              />
            ) : (
              <div className="w-16 h-16 rounded-none bg-[#faf8f5] border border-[#e7e2d8] text-brand-accent flex items-center justify-center shrink-0">
                <Code className="w-8 h-8" />
              </div>
            )}
            <div>
              <span className="font-mono text-[9px] text-brand-accent uppercase tracking-widest font-bold block mb-1">
                Étude de cas détaillée
              </span>
              <h1 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-[#181615] uppercase">
                {project.title}
              </h1>
              <p className="font-sans font-bold text-xs md:text-sm text-slate-500 mt-1">
                {project.tagline}
              </p>
            </div>
          </div>
          
          <div className="shrink-0 flex flex-col items-start md:items-end space-y-1">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
              Catégorie Produit
            </span>
            <span className="inline-block bg-[#faf8f5] border border-[#e7e2d8] text-brand-accent font-sans font-bold text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-none">
              {project.category}
            </span>
          </div>
        </div>

        {/* Dynamic Status / Live Banner */}
        <div className="bg-white border border-[#e7e2d8] rounded-none p-6 shadow-xs mb-10">
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-3">
            Statut réel de production
          </span>
          {project.liveUrl ? (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-emerald-800 bg-[#faf8f5] border border-[#e7e2d8] p-4 rounded-none text-xs leading-relaxed">
              <div className="flex items-center space-x-3">
                <CheckSquare className="w-5 h-5 shrink-0 text-emerald-600" />
                <span className="font-sans font-extrabold text-[#181615] uppercase tracking-tight text-xs">{project.status}</span>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 font-sans font-extrabold text-[10px] tracking-widest uppercase bg-[#181615] hover:bg-brand-accent text-white px-5 py-3 rounded-none transition-colors shadow-xs cursor-pointer"
              >
                <span>Visiter l'application en ligne</span>
                <ExternalLink className="w-4 h-4 text-brand-accent" />
              </a>
            </div>
          ) : (
            <div className="flex items-center space-x-3 text-brand-accent bg-[#faf8f5] border border-[#e7e2d8] p-4 rounded-none text-xs leading-relaxed">
              <AlertCircle className="w-5 h-5 shrink-0 text-brand-accent" />
              <span className="font-sans font-extrabold uppercase tracking-tight text-xs">{project.status}</span>
            </div>
          )}
        </div>

        {/* Context & Problem Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-[#e7e2d8] rounded-none p-6 md:p-8 shadow-xs mb-10">
          <div className="space-y-3.5">
            <h3 className="font-sans font-extrabold text-xs text-[#181615] uppercase tracking-wider flex items-center border-b border-[#e7e2d8] pb-2">
              <Bookmark className="w-4 h-4 text-brand-accent mr-2" />
              Le Contexte Réel
            </h3>
            <p className="font-sans text-slate-600 text-xs md:text-sm leading-relaxed whitespace-pre-line">
              {caseStudy.context}
            </p>
          </div>
          <div className="space-y-3.5">
            <h3 className="font-sans font-extrabold text-xs text-[#181615] uppercase tracking-wider flex items-center border-b border-[#e7e2d8] pb-2">
              <AlertCircle className="w-4 h-4 text-brand-accent mr-2" />
              Le Problème Résolu
            </h3>
            <p className="font-sans text-slate-600 text-xs md:text-sm leading-relaxed whitespace-pre-line">
              {caseStudy.problem}
            </p>
          </div>
        </div>

        {/* Product Approach */}
        <div className="bg-white border border-[#e7e2d8] rounded-none p-6 md:p-8 shadow-xs mb-10 space-y-4">
          <h3 className="font-sans font-extrabold text-xs text-[#181615] uppercase tracking-wider flex items-center border-b border-[#e7e2d8] pb-2">
            <Layers className="w-4 h-4 text-brand-accent mr-2" />
            L'Approche Produit & Design
          </h3>
          <p className="font-sans text-slate-600 text-xs md:text-sm leading-relaxed whitespace-pre-line">
            {caseStudy.approach}
          </p>
        </div>

        {/* Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="bg-white border border-[#e7e2d8] rounded-none p-6 md:p-8 shadow-xs mb-10 space-y-4">
            <h3 className="font-sans font-extrabold text-xs text-[#181615] uppercase tracking-wider flex items-center border-b border-[#e7e2d8] pb-2">
              <Image className="w-4 h-4 text-brand-accent mr-2" />
              Captures d'Écran Réelles de l'Application
            </h3>
            <p className="font-sans text-slate-500 text-xs">
              Aperçus réels de l'interface utilisateur conçue pour {project.title}. Cliquez sur les flèches ou sur une miniature pour explorer la galerie complète (9 captures haute fidélité).
            </p>

            {/* Main Active Image */}
            <div className="relative aspect-[16/10] w-full rounded-none overflow-hidden bg-slate-950 border border-[#e7e2d8] shadow-lg group">
              <img
                src={project.screenshots[activeImageIndex]}
                alt={`Capture d'écran ${activeImageIndex + 1} de ${project.title}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain transition-all duration-300"
              />
              
              <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-none text-white font-mono text-[10px] tracking-wider border border-slate-700/50 shadow-xs">
                {activeImageIndex + 1} / {project.screenshots.length}
              </div>

              {/* Controls */}
              <button
                onClick={() => setActiveImageIndex((prev) => (prev === 0 ? project.screenshots!.length - 1 : prev - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-none bg-[#181615]/80 hover:bg-[#ea580c] text-white flex items-center justify-center backdrop-blur-sm opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 border border-slate-700 shadow-md cursor-pointer focus:outline-none hover:scale-105 active:scale-95"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveImageIndex((prev) => (prev === project.screenshots!.length - 1 ? 0 : prev + 1))}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-none bg-[#181615]/80 hover:bg-[#ea580c] text-white flex items-center justify-center backdrop-blur-sm opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 border border-slate-700 shadow-md cursor-pointer focus:outline-none hover:scale-105 active:scale-95"
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
                  className={`relative w-24 aspect-video rounded-none overflow-hidden shrink-0 border-2 transition-all duration-200 cursor-pointer focus:outline-none ${
                    idx === activeImageIndex
                      ? "border-[#ea580c] scale-[1.03] shadow-md ring-2 ring-[#ea580c]/20"
                      : "border-[#e7e2d8] hover:border-slate-400 opacity-60 hover:opacity-100"
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
        <div className="bg-white border border-[#e7e2d8] rounded-none p-6 md:p-8 shadow-xs mb-10 space-y-4">
          <h3 className="font-sans font-extrabold text-xs text-[#181615] uppercase tracking-wider flex items-center border-b border-[#e7e2d8] pb-2">
            <Code className="w-4 h-4 text-brand-accent mr-2" />
            Ingénierie de Prompts & Directives IA
          </h3>
          <p className="font-sans text-slate-500 text-xs">
            Exemple concret d'instruction système rédigée par mes soins pour diriger l'agent de modélisation cognitif et assurer un comportement déterministe conforme aux contraintes d'utilisabilité.
          </p>
          
          {caseStudy.promptEngineering.map((prompt, idx) => (
            <div key={idx} className="bg-slate-900 rounded-none overflow-hidden border border-slate-800 shadow-md">
              <div className="bg-slate-800/85 px-4 py-3 border-b border-slate-700/50 flex justify-between items-center">
                <span className="font-sans font-extrabold text-[11px] text-brand-accent uppercase tracking-wider">
                  {prompt.title}
                </span>
                <span className="font-mono text-[9px] text-slate-400">system_instruction</span>
              </div>
              <div className="p-4">
                <p className="font-sans text-slate-300 text-[11px] mb-3 leading-relaxed italic">
                  <strong>Contexte d'usage :</strong> {prompt.description}
                </p>
                <pre className="bg-slate-950 p-4 rounded-none overflow-x-auto text-[10px] text-emerald-400 font-mono leading-relaxed whitespace-pre-wrap">
                  {prompt.promptText}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-[#e7e2d8] rounded-none p-6 md:p-8 shadow-xs mb-10">
          <div className="space-y-4">
            <h3 className="font-sans font-extrabold text-xs uppercase tracking-wider text-rose-800 border-b border-[#e7e2d8] pb-2">
              ⚠️ Les Défis Techniques
            </h3>
            <ul className="space-y-3">
              {caseStudy.challenges.map((challenge, idx) => (
                <li key={idx} className="bg-[#faf8f5] border border-[#e7e2d8] p-4 rounded-none text-rose-950 text-xs md:text-sm leading-relaxed flex items-start space-x-3">
                  <span className="font-bold text-rose-500 font-mono shrink-0">{idx + 1}.</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-sans font-extrabold text-xs uppercase tracking-wider text-emerald-800 border-b border-[#e7e2d8] pb-2">
              ✅ Les Solutions Apportées
            </h3>
            <ul className="space-y-3">
              {caseStudy.solutions.map((solution, idx) => (
                <li key={idx} className="bg-[#faf8f5] border border-[#e7e2d8] p-4 rounded-none text-emerald-950 text-xs md:text-sm leading-relaxed flex items-start space-x-3">
                  <span className="font-bold text-emerald-500 font-mono shrink-0">{idx + 1}.</span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Use Cases & Value Added */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-[#e7e2d8] rounded-none p-6 md:p-8 shadow-xs mb-10">
          <div className="space-y-3.5">
            <h3 className="font-sans font-extrabold text-xs text-[#181615] uppercase tracking-wider flex items-center border-b border-[#e7e2d8] pb-2">
              <CheckSquare className="w-4 h-4 text-[#ea580c] mr-2" />
              Scénarios d'Usage Clés
            </h3>
            <ul className="space-y-3">
              {caseStudy.useCases.map((useCase, idx) => (
                <li key={idx} className="text-[#292625] text-xs md:text-sm leading-relaxed flex items-start space-x-2.5">
                  <span className="text-[#ea580c] font-bold shrink-0 text-base leading-none">&bull;</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3.5">
            <h3 className="font-sans font-extrabold text-xs text-[#181615] uppercase tracking-wider flex items-center border-b border-[#e7e2d8] pb-2">
              <Sparkles className="w-4 h-4 text-brand-accent mr-2" />
              Valeur Ajoutée Produit
            </h3>
            <p className="font-sans text-[#292625] text-xs md:text-sm leading-relaxed">
              {caseStudy.valueAdded}
            </p>
          </div>
        </div>

        {/* Professional Skills Demonstrated */}
        <div className="bg-white border border-[#e7e2d8] rounded-none p-6 md:p-8 shadow-xs mb-10 space-y-4">
          <h3 className="font-sans font-extrabold text-xs text-[#181615] uppercase tracking-wider border-b border-[#e7e2d8] pb-2">
            Compétences Humaines Démontrées (Sans Complaisance)
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {caseStudy.skillsDemonstrated.map((skill, idx) => (
              <span
                key={idx}
                className="bg-[#faf8f5] border border-[#e7e2d8] text-[#181615] font-sans font-bold text-[10px] tracking-widest uppercase px-3.5 py-2 rounded-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#181615] border border-[#e7e2d8] text-white p-8 md:p-12 rounded-none shadow-xl text-center space-y-6">
          <h2 className="font-sans font-black text-xl md:text-2xl tracking-tight uppercase">
            Vous souhaitez échanger sur un projet similaire ?
          </h2>
          <p className="font-sans text-gray-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Je serai ravi de discuter de vos enjeux produit, de direction d'IA, de prompt engineering ou de documentation produit pour vos solutions à forte valeur ajoutée.
          </p>
          <div className="pt-2">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center font-sans font-extrabold text-[10px] uppercase tracking-widest py-4 px-8 rounded-none bg-[#ea580c] hover:bg-white hover:text-[#181615] transition-all text-white shadow-md cursor-pointer"
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
