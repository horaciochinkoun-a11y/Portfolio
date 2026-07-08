/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ClipboardList, Terminal, Palette, ShieldCheck, HelpCircle } from 'lucide-react';
import { biography } from '../data';

export default function About() {
  const steps = [
    {
      num: "01",
      title: "Cadrage Fonctionnel",
      description: "Je traduis l'idée métier floue en spécifications rigoureuses. J'établis les parcours utilisateurs, je pose les diagrammes d'échanges, et je délimite le périmètre strict du MVP.",
      icon: ClipboardList,
      color: "bg-slate-100 border-slate-200 text-slate-800"
    },
    {
      num: "02",
      title: "Direction Technique IA",
      description: "Je rédige et affine les prompts système des agents IA autonomes (Claude, Cursor, Antigravity) et j'encadre leur logique algorithmique pour générer un code rapide et exempt d'hallucinations.",
      icon: Terminal,
      color: "bg-indigo-50 border-indigo-100 text-indigo-700"
    },
    {
      num: "03",
      title: "Direction Artistique & UX",
      description: "Je dessine l'expérience utilisateur et l'esthétique du produit : structures épurées, contrastes profonds, typographies d'impact et layouts responsives soignés.",
      icon: Palette,
      color: "bg-amber-50 border-amber-100 text-amber-700"
    },
    {
      num: "04",
      title: "Validation & QA Réelle",
      description: "Je mets le prototype à l'épreuve des terminaux réels. J'audite la latence, l'utilisabilité mobile en conditions de connectivité faible, et la conformité fonctionnelle.",
      icon: ShieldCheck,
      color: "bg-emerald-50 border-emerald-100 text-emerald-700"
    }
  ];

  return (
    <section id="apropos" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16" id="about-heading">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold block mb-2">
            01 / PROFIL
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Architecte fonctionnel & Orchestrateur IA
          </h2>
          <div className="w-12 h-1 bg-indigo-600 rounded mt-4" />
        </div>

        {/* Biography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20" id="about-biography">
          
          {/* Left Column: Photo/Avatar Block */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[340px] bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm text-center relative overflow-hidden group">
              
              {/* Profile Image/Avatar */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-md border border-slate-200 transition-transform duration-500 group-hover:scale-105 bg-slate-100 flex items-center justify-center">
                <img
                  src="/src/assets/images/horacio_avatar_1783542685603.jpg"
                  alt="Horacio Chinkoun"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-display font-bold text-lg text-slate-900">
                Horacio Chinkoun
              </h3>
              <p className="font-mono text-xs text-slate-500 mt-1 uppercase tracking-wider">
                Product Owner IA
              </p>
              
              <div className="w-full h-[1px] bg-slate-200/80 my-5" />
              
              <div className="flex flex-col space-y-3.5 text-left text-sm text-slate-600" id="profile-meta">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs font-bold text-slate-400">ROLE:</span>
                  <span className="font-sans font-medium text-slate-800 text-xs">Architecte Fonctionnel</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs font-bold text-slate-400">LOC:</span>
                  <span className="font-sans font-medium text-slate-800 text-xs">Bénin / Remote</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs font-bold text-slate-400">LANGUE:</span>
                  <span className="font-sans font-medium text-slate-800 text-xs">Français, Anglais</span>
                </div>
              </div>

              {/* Download CV (Discreet as specified) */}
              <div className="mt-6 pt-3 border-t border-slate-100">
                <a
                  href="#contact"
                  className="font-sans text-xs font-semibold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 transition-colors inline-flex items-center"
                  id="cv-download-link"
                >
                  Me contacter pour mon CV &rarr;
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Copy */}
          <div className="lg:col-span-7 space-y-6" id="about-bio-text">
            <h4 className="font-display font-semibold text-xl text-slate-900">
              Piloter la technique par l’IA, cadrer la valeur par l’humain.
            </h4>
            
            {/* Split paragraph text for clean layout */}
            <p className="font-sans text-slate-600 leading-relaxed">
              Je conçois des produits numériques propulsés par l'intelligence artificielle, en assurant la direction stratégique complète : <strong>cadrage fonctionnel</strong>, <strong>définition de l'expérience utilisateur</strong>, <strong>direction artistique</strong> et <strong>pilotage d'agents IA autonomes</strong> pour la réalisation technique. Mon travail couvre des produits variés — outils de transcription vidéo, simulateurs pédagogiques, plateformes d'aide à la préparation d'examens — toujours construits autour d'une architecture pensée pour la sobriété serveur et le traitement client-side.
            </p>
            
            <p className="font-sans text-slate-600 leading-relaxed">
              Mon rôle n'est pas celui d'un développeur traditionnel qui écrit chaque ligne de code manuellement, mais celui d'un directeur de produit exigeant. Je structure le besoin, rédige des spécifications ultra-précises, orchestre les choix techniques, et valide rigoureusement chaque écran. Cette approche hybride me permet d'obtenir des prototypes complets, documentés et performants en un temps record.
            </p>

            {/* Benin / West African Constraint Message */}
            <div className="bg-slate-50 border-l-4 border-slate-900 p-4 rounded-r-lg mt-4">
              <p className="font-sans text-xs text-slate-700 italic leading-relaxed">
                "Dans le contexte de connectivité fluctuante d'Afrique de l'Ouest, je mets un point d'honneur à concevoir des architectures sobres : traitement local au maximum (client-side), optimisation de bande passante et formats d'échange ultra-légers."
              </p>
            </div>
          </div>

        </div>

        {/* Methodology Flow */}
        <div className="pt-12 border-t border-slate-100" id="about-methodology">
          <div className="text-center mb-12">
            <h3 className="font-display font-bold text-2xl text-slate-900">
              Ma Méthodologie en 4 Étapes
            </h3>
            <p className="font-sans text-sm text-slate-500 mt-2 max-w-lg mx-auto">
              Une discipline rigoureuse de bout en bout pour garantir la conformité et la performance des livrables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-slate-50/50 border border-slate-200/60 p-6 rounded-xl hover:bg-white hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col justify-between"
                  id={`methodology-step-${step.num}`}
                >
                  <div>
                    {/* Step Icon & Number */}
                    <div className="flex justify-between items-center mb-6">
                      <div className={`p-2.5 rounded-lg border ${step.color}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-display font-bold text-3xl text-slate-300">
                        {step.num}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-base text-slate-900 mb-3">
                      {step.title}
                    </h4>
                    <p className="font-sans text-slate-600 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
