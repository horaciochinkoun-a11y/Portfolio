/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, MessageSquare, Briefcase, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen pt-32 pb-20 flex items-center grid-pattern overflow-hidden bg-[#faf8f5]"
    >
      {/* Soft warm overlays */}
      <div className="absolute top-1/4 right-[-5%] w-[450px] h-[450px] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-5%] w-[350px] h-[350px] rounded-full bg-brand-yellow/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Copy styled with the high-end premium font pairings */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 fade-in" id="hero-content">
          
          {/* Availability Badge */}
          <div 
            className="flex items-center space-x-2 bg-[#f4f1ea] border border-[#e7e2d8] text-slate-800 px-3.5 py-1.5 rounded-none text-[11px] font-mono font-bold tracking-wider uppercase shadow-xs"
            id="availability-badge"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>DISPONIBLE • ORCHESTRATEUR IA & PRODUCT OWNER</span>
          </div>

          {/* Headline H1 with beautiful serif italic keywords */}
          <h1 
            className="font-sans text-4xl md:text-5xl xl:text-6.5xl font-extrabold text-[#181615] leading-[1.08] tracking-tight"
            id="hero-headline"
          >
            Je transforme des <span className="font-serif italic font-normal text-brand-accent pr-1">idées produit</span> en <span className="font-serif italic font-normal text-brand-accent">prototypes IA</span> fonctionnels.
          </h1>

          {/* Sub-headline */}
          <p 
            className="font-sans text-base md:text-lg text-[#292625]/85 max-w-xl leading-relaxed font-normal"
            id="hero-subheadline"
          >
            Architecte fonctionnel & orchestrateur d’IA. Je cadre le besoin, je rédige des spécifications précises, je pilote la réalisation technique par des agents IA, et je valide rigoureusement chaque écran.
          </p>

          <div className="font-mono text-xs text-[#292625]/80 bg-[#f4f1ea]/60 p-4 rounded-none border border-[#e7e2d8] max-w-lg leading-relaxed">
            <Sparkles className="inline-block w-4 h-4 text-brand-accent mr-2 align-text-top" />
            <strong>Transparence méthodologique :</strong> Je supervise et orchestre la technique via prompt engineering d'élite ; l'IA exécute le code sous ma direction.
          </div>

          {/* CTA Group - Sharp flat design */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto pt-2" id="hero-ctas">
            <a
              href="#contact"
              className="font-sans text-center font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-none bg-brand-primary hover:bg-[#292625] transition-all text-white flex items-center justify-center space-x-2 shadow-md"
              id="hero-cta-primary"
            >
              <MessageSquare className="w-4 h-4" />
              <span>DÉMARRER UN PROJET</span>
            </a>
            <a
              href="#projets"
              className="font-sans text-center font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-none bg-transparent hover:bg-[#f4f1ea] text-[#181615] border-2 border-brand-primary transition-all flex items-center justify-center space-x-2"
              id="hero-cta-secondary"
            >
              <Briefcase className="w-4 h-4 text-[#181615]" />
              <span>CONSULTER MES RÉALISATIONS</span>
            </a>
          </div>

          {/* Metrics section matching Aquilas Dev */}
          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#e7e2d8] w-full max-w-lg">
            <div>
              <span className="block text-[10px] font-mono tracking-wider text-slate-500 font-semibold uppercase">MAÎTRISE INTÉLLIGENCE ARTIFICIELLE</span>
              <div className="flex items-baseline space-x-1.5 mt-1">
                <span className="font-serif text-3xl md:text-4xl font-bold text-brand-accent">91%</span>
                <span className="text-xs font-mono text-slate-500">(LLM)</span>
              </div>
            </div>
            <div>
              <span className="block text-[10px] font-mono tracking-wider text-slate-500 font-semibold uppercase">SCORE DE PERFORMANCE</span>
              <div className="flex items-baseline space-x-1.5 mt-1">
                <span className="font-serif text-3xl md:text-4xl font-bold text-[#181615]">75/100</span>
                <span className="text-xs font-mono text-slate-500">(moyenne)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Framed Portrait exactly like the Aquilas Dev screenshot */}
        <div className="lg:col-span-5 flex justify-center items-center relative" id="hero-visual">
          <div className="relative w-full max-w-[380px] aspect-[4/5] p-2">
            
            {/* Background Solid Dark Offset Shadow Frame */}
            <div className="absolute inset-0 bg-[#181615] translate-x-4 translate-y-4 shadow-xl border border-brand-accent/20" />

            {/* Inner frame containing image */}
            <div className="absolute inset-0 bg-white border-2 border-[#181615] p-2 flex flex-col justify-between overflow-hidden relative z-10">
              
              {/* Photo Area */}
              <div className="relative flex-1 bg-slate-100 overflow-hidden border border-[#181615]">
                <img
                  src="/src/assets/images/horacio_avatar_1783542685603.jpg"
                  alt="Horacio Chinkoun"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale"
                />

                {/* Angled Sticker Badge "ORCHESTRATEUR IA" */}
                <div className="absolute top-4 right-4 bg-brand-yellow text-[#181615] font-mono text-[9px] font-bold px-2.5 py-1 uppercase tracking-wider border border-[#181615] shadow-sm transform rotate-2">
                  ORCHESTRATEUR IA & PO
                </div>

                {/* Bottom Left Badge "PROTOTYPES IA" */}
                <div className="absolute bottom-4 left-4 bg-white text-[#181615] font-mono text-[9px] font-bold px-2.5 py-1 uppercase tracking-wider border border-[#181615]">
                  PROTOTYPES IA
                </div>
              </div>

              {/* Bottom Custom Overlay Banner block */}
              <div className="bg-[#181615] text-white p-3.5 mt-2 flex flex-col justify-center items-center text-center space-y-1">
                <div className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">PRODUIT & CODE • 100%</div>
                <div className="font-serif italic text-sm text-brand-yellow font-medium">Sur-mesure & orienté conversion</div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Bounce Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-slate-400 select-none animate-bounce" id="scroll-indicator">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#181615]">Défiler pour explorer</span>
        <ArrowDown className="w-4.5 h-4.5 text-[#181615]" />
      </div>
    </section>
  );
}
