/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import * as Icons from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  // Filter projects by type
  const primaryProjects = projects.filter(p => p.type === 'primary');
  const secondaryProjects = projects.filter(p => p.type === 'secondary');

  const openCaseStudy = (project: Project) => {
    window.location.hash = `#/projets/${project.id}`;
  };

  // Helper to render dynamic Lucide icons safely
  const renderIcon = (iconName: string, className = "w-6 h-6") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.HelpCircle className={className} />;
  };

  return (
    <section id="projets" className="py-24 bg-[#faf8f5] grid-pattern border-b border-[#e7e2d8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Heading */}
        <div className="mb-16" id="projects-heading">
          <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent font-bold block mb-3">
            PORTFOLIO & TRAVAUX
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-[#181615] tracking-tight">
            Les Produits Dirigés
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#292625]/80 mt-2 max-w-xl">
            Découvrez une sélection de prototypes fonctionnels complets, cadrés et orchestrés de l'idée au livrable final.
          </p>
        </div>

        {/* Primary Projects Prominent Grid */}
        <div className="space-y-12" id="primary-projects-list">
          <h3 className="font-sans font-bold text-sm text-[#181615] uppercase tracking-wider border-l-4 border-brand-accent pl-3">
            Études de Cas Majeures
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {primaryProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-[#e7e2d8] p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 group"
                id={`project-card-${project.id}`}
              >
                <div>
                  {/* Card Icon & Category */}
                  <div className="flex justify-between items-center mb-6">
                    {project.iconUrl ? (
                      <img
                        src={project.iconUrl}
                        alt={`Icône de ${project.title}`}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-none object-cover border border-[#e7e2d8] shadow-xs group-hover:scale-105 transition-transform duration-300 bg-white shrink-0"
                      />
                    ) : (
                      <div className="p-3 rounded-none bg-white border border-[#e7e2d8] text-brand-accent shadow-xs group-hover:bg-[#faf8f5] transition-all">
                        {renderIcon(project.iconName, "w-5 h-5")}
                      </div>
                    )}
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h4 className="font-sans font-extrabold text-lg text-[#181615] mb-1 group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="font-serif italic text-xs text-brand-accent mb-4">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-[#292625]/85 text-xs leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6" id={`project-techs-${project.id}`}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] bg-[#faf8f5] border border-[#e7e2d8] text-slate-600 px-2 py-0.5 rounded-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study Trigger & Status */}
                <div className="pt-4 border-t border-[#e7e2d8] flex flex-col space-y-3.5">
                  {project.liveUrl ? (
                    <div className="flex items-center space-x-1.5 text-[9px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-100/50 py-1 px-2.5 rounded-none">
                      <Icons.CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate font-semibold uppercase tracking-wider">Déployé en production</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1.5 text-[9px] font-mono text-slate-500 bg-[#faf8f5] border border-[#e7e2d8]/50 py-1 px-2.5 rounded-none">
                      <Icons.AlertCircle className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span className="truncate uppercase tracking-wider">Prototype (non déployé)</span>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <button
                      onClick={() => openCaseStudy(project)}
                      className={`font-sans text-center font-bold text-[10px] uppercase tracking-widest py-3 px-4 rounded-none bg-brand-primary hover:bg-[#292625] text-white transition-all shadow-md flex items-center justify-center space-x-1.5 cursor-pointer focus:outline-none ${project.liveUrl ? 'sm:col-span-8' : 'w-full sm:col-span-12'}`}
                      id={`view-study-${project.id}`}
                    >
                      <span>DECOUVRIR L'ETUDE</span>
                      <Icons.ArrowRight className="w-3 h-3" />
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-center font-bold text-[10px] uppercase tracking-widest py-3 px-4 rounded-none border border-brand-primary hover:bg-[#faf8f5] text-[#181615] transition-all flex items-center justify-center space-x-1.5 cursor-pointer focus:outline-none sm:col-span-4"
                        id={`live-link-${project.id}`}
                      >
                        <span>LIVE</span>
                        <Icons.ExternalLink className="w-3 h-3 text-[#181615]" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Secondary Projects Section */}
        <div className="mt-24 pt-16 border-t border-[#e7e2d8]" id="secondary-projects-list">
          <div className="mb-10">
            <h3 className="font-sans font-bold text-sm text-[#181615] uppercase tracking-wider border-l-4 border-[#181615] pl-3">
              Autres Utilitaires & Moteurs IA
            </h3>
            <p className="font-sans text-xs text-[#292625]/85 mt-1.5">
              Fiches succinctes d'autres prototypes d'automatisation et de services spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-[#e7e2d8] p-5 rounded-none flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                id={`secondary-card-${project.id}`}
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    {project.iconUrl ? (
                      <img
                        src={project.iconUrl}
                        alt={`Icône de ${project.title}`}
                        referrerPolicy="no-referrer"
                        className="w-9 h-9 rounded-none object-cover border border-[#e7e2d8] shadow-xs bg-white shrink-0"
                      />
                    ) : (
                      <div className="p-2 rounded-none bg-white border border-[#e7e2d8] text-slate-700">
                        {renderIcon(project.iconName, "w-4 h-4")}
                      </div>
                    )}
                    <h4 className="font-sans font-bold text-sm text-[#181615] truncate">
                      {project.title}
                    </h4>
                  </div>
                  
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-3">
                    {project.category}
                  </span>

                  <p className="font-sans text-[#292625]/85 text-xs leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e7e2d8] flex items-center justify-between">
                  <span className="font-mono text-[9px] text-brand-accent bg-orange-50 border border-brand-accent/20 px-2 py-0.5 rounded-none">
                    PROTOTYPE
                  </span>
                  <span className="font-mono text-[9px] text-slate-400">
                    {project.technologies[0]} + {project.technologies[2] || 'IA'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
