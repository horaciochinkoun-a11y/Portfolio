/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowDown, MessageSquare, Briefcase, Sparkles } from 'lucide-react';

interface HeroProps {
  content?: {
    heroTitle?: string;
    heroSub?: string;
    heroNotice?: string;
    heroImage?: string;
    displaySettings?: {
      showHeroImage?: boolean;
      showHeroNotice?: boolean;
    }
  } | null;
}

export default function Hero({ content }: HeroProps) {
  const heroTitleText = content?.heroTitle !== undefined ? content.heroTitle : "Je transforme des idées produit en prototypes IA fonctionnels.";
  const heroSubText = content?.heroSub !== undefined ? content.heroSub : "Architecte fonctionnel & orchestrateur d’IA. Je cadre le besoin, je rédige des spécifications précises, je pilote la réalisation technique par des agents IA, et je valide rigoureusement chaque écran.";
  const heroNoticeText = content?.heroNotice !== undefined ? content.heroNotice : "Transparence méthodologique : Je supervise et orchestre la technique via prompt engineering d'élite ; l'IA exécute le code sous ma direction.";
  const heroImageSrc = content?.heroImage || "/images/horacio.png";
  
  const showHeroImage = (content?.displaySettings?.showHeroImage ?? true) && !!heroImageSrc;
  const showHeroNotice = (content?.displaySettings?.showHeroNotice ?? true) && !!heroNoticeText;

  return (
    <section
      id="accueil"
      className="relative min-h-screen pt-20 lg:pt-16 pb-32 lg:pb-40 flex items-center grid-pattern overflow-hidden bg-white"
    >
      {/* Soft warm overlays */}
      <div className="absolute top-1/4 right-[-5%] w-[450px] h-[450px] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-5%] w-[350px] h-[350px] rounded-full bg-brand-yellow/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Copy styled with the high-end premium font pairings */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 fade-in" id="hero-content">
          
          {/* Headline H1 with beautiful serif italic keywords */}
          {heroTitleText && (
            <h1 
              className="font-sans text-4xl md:text-5xl xl:text-6.5xl font-extrabold text-[#181615] leading-[1.08] tracking-tight"
              id="hero-headline"
            >
              {heroTitleText}
            </h1>
          )}

          {/* Sub-headline */}
          {heroSubText && (
            <p 
              className="font-sans text-base md:text-lg text-[#292625]/85 max-w-xl leading-relaxed font-normal"
              id="hero-subheadline"
            >
              {heroSubText}
            </p>
          )}

          {showHeroNotice && (
            <div className="font-mono text-xs text-[#292625]/80 bg-[#f4f1ea]/60 p-4 rounded-none border border-[#e7e2d8] max-w-lg leading-relaxed">
              <Sparkles className="inline-block w-4 h-4 text-brand-accent mr-2 align-text-top" />
              <span>{heroNoticeText}</span>
            </div>
          )}

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
        </div>

        {/* Right Side: Clean Portrait exactly like the Aquilas Dev screenshot */}
        {showHeroImage && (
          <div className="lg:col-span-5 flex justify-center items-center relative" id="hero-visual">
            <div className="relative w-full max-w-[420px] aspect-[4/5]">
              <img
                src={heroImageSrc}
                alt="Horacio Chinkoun"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        )}
      </div>

      {/* Bounce Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-slate-400 select-none animate-bounce" id="scroll-indicator">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#181615]">Défiler pour explorer</span>
        <ArrowDown className="w-4.5 h-4.5 text-[#181615]" />
      </div>
    </section>
  );
}
