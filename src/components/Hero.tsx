/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, MessageSquare, Briefcase, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen pt-32 pb-20 flex items-center bg-radial from-slate-50 via-slate-100 to-slate-200 overflow-hidden"
    >
      {/* Background Decorative Mesh Elements */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-200/40 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] rounded-full bg-slate-300/40 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Copy */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 fade-in" id="hero-content">
          
          {/* Location / Availability Badge */}
          <div 
            className="flex items-center space-x-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-mono font-medium"
            id="availability-badge"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Cotonou, Bénin & Remote</span>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" />
            <span className="text-emerald-700 font-sans font-semibold">Disponible</span>
          </div>

          {/* Headline H1 */}
          <h1 
            className="font-display text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight tracking-tight"
            id="hero-headline"
          >
            Je transforme des <span className="text-indigo-600 relative inline-block">idées produit</span> en prototypes IA fonctionnels.
          </h1>

          {/* Sub-headline */}
          <p 
            className="font-sans text-lg text-slate-600 max-w-2xl leading-relaxed"
            id="hero-subheadline"
          >
            Architecte fonctionnel & orchestrateur d’IA. Je cadre le besoin, je rédige des spécifications précises, je pilote la réalisation technique par des agents IA, et je valide rigoureusement chaque écran.
          </p>

          <p className="font-mono text-xs text-slate-500 bg-slate-100 px-3 py-2 rounded border border-slate-200/60 max-w-lg leading-relaxed">
            <Sparkles className="inline-block w-3.5 h-3.5 text-indigo-500 mr-1.5 align-text-top" />
            <strong>Transparence méthodologique :</strong> Je supervise et orchestre la technique via prompt engineering d'élite ; l'IA exécute le code sous ma direction.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto pt-4" id="hero-ctas">
            <a
              href="#contact"
              className="font-sans text-center font-semibold text-sm uppercase tracking-wider py-4 px-8 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition-all text-white shadow-lg shadow-indigo-100 flex items-center justify-center space-x-2 focus:outline-none"
              id="hero-cta-primary"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discutons de votre projet</span>
            </a>
            <a
              href="#projets"
              className="font-sans text-center font-semibold text-sm uppercase tracking-wider py-4 px-8 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center space-x-2 focus:outline-none"
              id="hero-cta-secondary"
            >
              <Briefcase className="w-4 h-4 text-slate-500" />
              <span>Voir mes projets</span>
            </a>
          </div>

        </div>

        {/* Right Side: Abstract Visual Canvas of Conductor/Orchestrator */}
        <div className="lg:col-span-5 flex justify-center items-center relative" id="hero-visual">
          <div className="w-full max-w-[420px] aspect-square bg-white rounded-2xl border border-slate-200 shadow-xl p-8 relative flex flex-col justify-between overflow-hidden group hover:shadow-2xl transition-all duration-500">
            
            {/* Visual Header */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-[10px] text-slate-400">orchestration_engine.ts</span>
            </div>

            {/* Simulated Architecture Loop Diagram */}
            <div className="flex-1 flex flex-col justify-center space-y-5 my-6">
              
              {/* Human Cadrage Block */}
              <div className="flex items-center space-x-3 bg-slate-50 border border-slate-100 p-3 rounded-lg hover:border-indigo-200 hover:bg-indigo-50/20 transition-all">
                <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">HC</div>
                <div className="flex-1 min-w-0">
                  <div className="font-sans font-semibold text-xs text-slate-800">Cadrage Fonctionnel Humain</div>
                  <div className="font-mono text-[10px] text-slate-500 truncate">specs, UX wireframes, requirements</div>
                </div>
              </div>

              {/* Conductor/Prompts Pipeline */}
              <div className="flex flex-col items-center py-1">
                <div className="h-4 w-0.5 bg-slate-300 border-dashed border" />
                <div className="bg-indigo-600 text-white font-mono text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-sm animate-pulse my-1">
                  Prompt Pipeline (Elite PE)
                </div>
                <div className="h-4 w-0.5 bg-slate-300 border-dashed border" />
              </div>

              {/* AI Agent Engine */}
              <div className="flex items-center space-x-3 bg-indigo-50/50 border border-indigo-100/80 p-3 rounded-lg hover:bg-indigo-50 hover:border-indigo-300 transition-all">
                <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-sans font-semibold text-xs text-indigo-900">Agents IA de Développement</div>
                  <div className="font-mono text-[10px] text-indigo-600 truncate">code output generation & iteration</div>
                </div>
              </div>

              {/* Final QA and Validation */}
              <div className="flex flex-col items-center py-1">
                <div className="h-4 w-0.5 bg-slate-300 border-dashed border" />
                <div className="font-mono text-[9px] text-indigo-500 uppercase tracking-widest font-bold">
                  QA, Mobile Audits & Delivery
                </div>
                <div className="h-4 w-0.5 bg-indigo-200 border-dashed border" />
              </div>

              <div className="bg-emerald-50 border border-emerald-100 p-2.5 rounded-lg flex items-center space-x-2.5 justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-mono text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                  Prototype Fonctionnel Validé
                </span>
              </div>

            </div>

            {/* Visual Footer */}
            <div className="text-center pt-2 border-t border-slate-100">
              <span className="font-mono text-[10px] text-slate-400">
                100% Client-Side Prototyping
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Bounce Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-slate-400 select-none animate-bounce" id="scroll-indicator">
        <span className="font-mono text-[10px] uppercase tracking-widest">Découvrir</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
