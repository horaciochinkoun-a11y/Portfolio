/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert, Cpu, CheckCircle } from 'lucide-react';
import { skills } from '../data';

export default function Skills() {
  // Filter skills into categories
  const leadershipSkills = skills.filter(s => s.category === 'direct');
  const techSkills = skills.filter(s => s.category === 'tech');

  return (
    <section id="competences" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Heading */}
        <div className="text-center md:text-left mb-16" id="skills-heading">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold block mb-2">
            02 / EXPERTISE
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Cartographie des compétences
          </h2>
          <p className="font-sans text-sm text-slate-500 mt-2 max-w-lg">
            Un profil hybride articulé autour de la vision produit et du pilotage intelligent.
          </p>
          <div className="w-12 h-1 bg-indigo-600 rounded mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="skills-grid">
          
          {/* Category 1: "Ce que je dirige" (Functional Leadership & Orchestration) */}
          <div className="lg:col-span-6 space-y-6" id="skills-dirige">
            <div className="flex items-center space-x-3 pb-3 border-b border-slate-200">
              <div className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Ce que je dirige & valide
                </h3>
                <p className="font-sans text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                  Compétences fonctionnelles & stratégiques
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {leadershipSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white border border-slate-200 p-5 rounded-xl hover:border-indigo-300 transition-all shadow-sm"
                >
                  <h4 className="font-display font-bold text-sm text-slate-900 mb-1.5 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" />
                    {skill.name}
                  </h4>
                  <p className="font-sans text-slate-600 text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: "Technologies avec lesquelles je travaille" */}
          <div className="lg:col-span-6 space-y-6" id="skills-stack">
            <div className="flex items-center space-x-3 pb-3 border-b border-slate-200">
              <div className="w-8 h-8 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Technologies pilotées par IA
                </h3>
                <p className="font-sans text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                  Stack supervisée pour nos prototypes
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {techSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white border border-slate-200 p-5 rounded-xl hover:border-indigo-300 transition-all shadow-sm"
                >
                  <h4 className="font-display font-bold text-sm text-slate-900 mb-1.5 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-slate-800 rounded-full mr-2" />
                    {skill.name}
                  </h4>
                  <p className="font-sans text-slate-600 text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Honesty Disclosure Bar */}
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6" id="skills-disclosure">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-slate-900">
                Une crédibilité technique fondée sur la transparence
              </h4>
              <p className="font-sans text-xs text-slate-500 leading-relaxed max-w-xl mt-1">
                Je ne prétends pas coder ces technologies manuellement de zéro lors de sessions de développement longues. Ma force réside dans la maîtrise conceptuelle de l'architecture, la rédaction de directives pour l'IA, et la validation de la qualité du code final.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <a
              href="#apropos"
              className="font-sans text-xs font-semibold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 transition-colors inline-block focus:outline-none"
            >
              Comprendre ma démarche &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
