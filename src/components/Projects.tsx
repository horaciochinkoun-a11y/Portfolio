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
    <section id="projets" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Heading */}
        <div className="text-center md:text-left mb-16" id="projects-heading">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold block mb-2">
            03 / PORTFOLIO
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Les Produits Dirigés
          </h2>
          <p className="font-sans text-sm text-slate-500 mt-2 max-w-lg">
            Découvrez une sélection de prototypes fonctionnels complets, cadrés de l'idée au livrable final.
          </p>
          <div className="w-12 h-1 bg-indigo-600 rounded mt-4" />
        </div>

        {/* Primary Projects Prominent Grid */}
        <div className="space-y-12" id="primary-projects-list">
          <h3 className="font-display font-bold text-lg text-slate-900 border-l-4 border-indigo-600 pl-3">
            Études de Cas Majeures
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {primaryProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:bg-white hover:border-indigo-200 transition-all duration-300 group"
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
                        className="w-12 h-12 rounded-xl object-cover border border-slate-200/60 shadow-sm group-hover:scale-105 transition-transform duration-300 bg-white shrink-0"
                      />
                    ) : (
                      <div className="p-3 rounded-xl bg-white border border-slate-200/60 text-indigo-600 shadow-sm group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                        {renderIcon(project.iconName, "w-5 h-5")}
                      </div>
                    )}
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h4 className="font-display font-bold text-lg text-slate-900 mb-1.5 group-hover:text-indigo-600 transition-all">
                    {project.title}
                  </h4>
                  <p className="font-sans font-medium text-xs text-indigo-700 mb-4">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-slate-600 text-xs leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6" id={`project-techs-${project.id}`}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] bg-white border border-slate-200/50 text-slate-600 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study Trigger & Status */}
                <div className="pt-4 border-t border-slate-200/60 flex flex-col space-y-3.5">
                  {project.liveUrl ? (
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-100/50 py-1.5 px-3 rounded-lg">
                      <Icons.CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate font-semibold">Déployé en production</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-500 bg-white border border-slate-200/40 py-1.5 px-3 rounded-lg">
                      <Icons.AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span className="truncate">Prototype (non déployé)</span>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <button
                      onClick={() => openCaseStudy(project)}
                      className={`font-sans text-center font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-sm flex items-center justify-center space-x-2 cursor-pointer focus:outline-none ${project.liveUrl ? 'sm:col-span-8' : 'w-full sm:col-span-12'}`}
                      id={`view-study-${project.id}`}
                    >
                      <span>Découvrir l'étude</span>
                      <Icons.ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-center font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg border border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50/20 text-indigo-700 transition-all shadow-xs flex items-center justify-center space-x-1.5 cursor-pointer focus:outline-none sm:col-span-4"
                        id={`live-link-${project.id}`}
                      >
                        <span>Live</span>
                        <Icons.ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Secondary Projects Section */}
        <div className="mt-24 pt-16 border-t border-slate-100" id="secondary-projects-list">
          <div className="mb-10">
            <h3 className="font-display font-bold text-lg text-slate-900 border-l-4 border-slate-900 pl-3">
              Autres Utilitaires & Moteurs IA
            </h3>
            <p className="font-sans text-xs text-slate-500 mt-1.5">
              Fiches succinctes d'autres prototypes d'automatisation et de services spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50/50 border border-slate-200/60 p-5 rounded-xl flex flex-col justify-between hover:bg-white hover:shadow-md hover:border-slate-300 transition-all duration-300"
                id={`secondary-card-${project.id}`}
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    {project.iconUrl ? (
                      <img
                        src={project.iconUrl}
                        alt={`Icône de ${project.title}`}
                        referrerPolicy="no-referrer"
                        className="w-9 h-9 rounded-lg object-cover border border-slate-200/50 shadow-xs bg-white shrink-0"
                      />
                    ) : (
                      <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700">
                        {renderIcon(project.iconName, "w-4 h-4")}
                      </div>
                    )}
                    <h4 className="font-display font-bold text-sm text-slate-900 truncate">
                      {project.title}
                    </h4>
                  </div>
                  
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-3">
                    {project.category}
                  </span>

                  <p className="font-sans text-slate-600 text-xs leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-rose-600 bg-rose-50 border border-rose-100/30 px-2 py-0.5 rounded">
                    Prototype
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
