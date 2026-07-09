/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert, Cpu, CheckCircle } from 'lucide-react';
import { skills as defaultSkills } from '../data';

interface SkillsProps {
  content?: {
    skills?: Array<{
      name: string;
      category: 'direct' | 'tech';
      description: string;
    }>;
  } | null;
}

export default function Skills({ content }: SkillsProps) {
  const skillsList = content?.skills || defaultSkills;

  // Filter skills into categories
  const leadershipSkills = skillsList.filter(s => s.category === 'direct');
  const techSkills = skillsList.filter(s => s.category === 'tech');

  return (
    <section id="competences" className="py-24 bg-[#faf8f5] grid-pattern border-b border-[#e7e2d8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Heading */}
        <div className="mb-16" id="skills-heading">
          <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent font-bold block mb-3">
            02 / EXPERTISE
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-[#181615] tracking-tight">
            Cartographie des Compétences
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#292625]/80 mt-2 max-w-xl">
            Un profil hybride articulé autour de la vision produit, de la direction d'équipe et du pilotage intelligent.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="skills-grid">
          
          {/* Category 1: "Ce que je dirige" (Functional Leadership & Orchestration) */}
          <div className="lg:col-span-6 space-y-6" id="skills-dirige">
            <div className="flex items-center space-x-3 pb-3 border-b border-[#e7e2d8]">
              <div className="w-8 h-8 rounded-none bg-[#181615] text-white flex items-center justify-center border border-[#181615]">
                <CheckCircle className="w-4 h-4 text-brand-accent" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-sm uppercase text-[#181615] tracking-wider">
                  Ce que je dirige & valide
                </h3>
                <p className="font-sans text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  Compétences fonctionnelles & stratégiques
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {leadershipSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white border border-[#e7e2d8] p-5 rounded-none hover:border-[#181615] transition-all duration-300 shadow-xs"
                >
                  <h4 className="font-sans font-extrabold text-xs text-[#181615] uppercase tracking-wider mb-1.5 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-brand-accent mr-2" />
                    {skill.name}
                  </h4>
                  <p className="font-sans text-[#292625]/80 text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: "Technologies avec lesquelles je travaille" */}
          <div className="lg:col-span-6 space-y-6" id="skills-stack">
            <div className="flex items-center space-x-3 pb-3 border-b border-[#e7e2d8]">
              <div className="w-8 h-8 rounded-none bg-[#faf8f5] text-[#181615] flex items-center justify-center border border-[#e7e2d8]">
                <Cpu className="w-4 h-4 text-brand-accent" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-sm uppercase text-[#181615] tracking-wider">
                  Technologies pilotées par IA
                </h3>
                <p className="font-sans text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  Stack supervisée pour nos prototypes
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {techSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white border border-[#e7e2d8] p-5 rounded-none hover:border-[#181615] transition-all duration-300 shadow-xs"
                >
                  <h4 className="font-sans font-extrabold text-xs text-[#181615] uppercase tracking-wider mb-1.5 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#181615] mr-2" />
                    {skill.name}
                  </h4>
                  <p className="font-sans text-[#292625]/80 text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Honesty Disclosure Bar */}
        <div className="mt-16 bg-white border border-[#e7e2d8] p-6 rounded-none shadow-xs flex flex-col md:flex-row items-center justify-between gap-6" id="skills-disclosure">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-[#faf8f5] border border-[#e7e2d8] rounded-none shrink-0">
              <ShieldAlert className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <h4 className="font-sans font-extrabold text-xs uppercase tracking-wider text-[#181615]">
                Une crédibilité technique fondée sur la transparence
              </h4>
              <p className="font-sans text-xs text-slate-500 leading-relaxed max-w-xl mt-1.5">
                Je ne prétends pas coder ces technologies manuellement de zéro lors de sessions de développement longues. Ma force réside dans la maîtrise conceptuelle de l'architecture, la rédaction de directives rigoureuses pour l'IA, et la validation intransigeante de la qualité finale.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <a
              href="#apropos"
              className="font-sans text-[10px] font-extrabold uppercase tracking-widest text-[#181615] hover:text-brand-accent transition-colors inline-block focus:outline-none"
            >
              COMPRENDRE MA DÉMARCHE &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
