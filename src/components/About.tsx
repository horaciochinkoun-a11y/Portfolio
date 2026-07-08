/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Layers, Shield } from 'lucide-react';

// Vrais logos officiels des technologies
const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#339933" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L1.474 6.077V17.92L12 24l10.526-6.08V6.077L12 0zm-1.125 18.067V10.16L3.93 6.077l6.945 4.083V18.07zm1.125-9.13L5.056 4.854 12 1.076l6.944 3.778L12 8.937zm1.125 9.13V10.16l6.945-4.083-6.945 4.083V18.07z"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#38BDF8" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6.036c-2.4 0-4.38 1.564-4.38 4.693 0 2.877 1.98 4.14 1.98 6.04 0 1.258-.88 2.04-2.18 2.04-1.63 0-2.82-1.282-3.21-3.14l-.06-.296-1.54.34.05.27C3.19 20.088 5.25 22 7.6 22c2.4 0 4.38-1.564 4.38-4.693 0-2.877-1.98-4.14-1.98-6.04 0-1.258.88-2.04 2.18-2.04 1.63 0 2.82 1.282 3.21 3.14l.06.296 1.54-.34-.05-.27C16.41 6.036 14.35 4 12 4zM12 .036C9.6.036 7.62 1.6 7.62 4.73c0 2.876 1.98 4.139 1.98 6.04 0 1.257-.88 2.039-2.18 2.039-1.63 0-2.82-1.282-3.21-3.14l-.06-.296-1.54.34.05.27C3.19 14.088 5.25 16 7.6 16c2.4 0 4.38-1.564 4.38-4.693 0-2.877-1.98-4.14-1.98-6.04 0-1.258.88-2.04 2.18-2.04 1.63 0 2.82 1.282 3.21 3.14l.06.296 1.54-.34-.05-.27C16.41.088 14.35 0 12 0z"/>
  </svg>
);

const PostgresIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#336791" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.344 14.808a.508.508 0 01-.137.498 8.163 8.163 0 01-2.984 1.84c-1.396.48-2.88.66-4.354.516a8.87 8.87 0 01-4.043-1.442l-.547.452a.511.511 0 01-.676-.027l-.608-.57a.509.509 0 01-.004-.716l.248-.255A9.684 9.684 0 014.2 11.393a10.457 10.457 0 01-.2-2.146.505.505 0 01.353-.474l4.243-1.41a.508.508 0 01.59.208 6.444 6.444 0 001.248 1.48 4.49 4.49 0 002.327.973 3.327 3.327 0 001.996-.403 3.633 3.633 0 001.402-1.637 4.194 4.194 0 00.222-1.895 4.887 4.887 0 00-.916-2.22 5.642 5.642 0 00-2.314-1.748 6.275 6.275 0 00-3.037-.367A6.47 6.47 0 007.49 3.013 5.485 5.485 0 005.9 5.344a.508.508 0 01-.482.353H1.543a.507.507 0 01-.498-.597 7.514 7.514 0 012.353-3.896A8.497 8.497 0 017.51.103a9.554 9.554 0 014.49.207c1.474.453 2.81 1.282 3.844 2.392A8.536 8.536 0 0117.9 6.27a7.272 7.272 0 01-.013 3.195 6.5 6.5 0 01-1.077 2.45c1.042-.1 2.086.07 3.048.496.963.425 1.77 1.107 2.348 1.983a.509.509 0 01-.137.69l-2.724 1.724zm-1.896 6.307c-1.12.325-2.288.468-3.454.423a10.076 10.076 0 01-3.924-.954.51.51 0 01-.22-.656c.205-.443.432-.876.68-1.294a.507.507 0 01.69-.184l3.187 1.838a.508.508 0 00.567-.043l1.83-1.464a.508.508 0 01.71.054l1.378 1.544a.507.507 0 01-.444.736zm-.493-4.14a.509.509 0 01-.11-.497c.22-.614.364-1.25.43-1.892a.507.507 0 01.378-.44l2.457-.614a.508.508 0 01.597.356c.193.593.33 1.2.408 1.815a.511.511 0 01-.355.545l-3.805 1.227z"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#3178C6" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0zm20.076 18.995c.29-.18.423-.464.423-.872V14.54h-1.89v1.988c0 .248-.13.387-.393.387h-.795V8.584h2.7v-1.71h-8.082v1.71h2.7v8.327h-.792c-.267 0-.396-.14-.396-.388V14.54H11.6v3.583c0 .408.135.69.426.872a2.43 2.43 0 001.326.25h5.4c.504 0 .954-.083 1.325-.25zM7.18 19.245c1.696 0 2.863-.823 2.863-2.316 0-1.424-.875-1.928-2.316-2.553l-.68-.293c-.933-.404-1.3-.77-1.3-1.353 0-.616.487-1.018 1.253-1.018.775 0 1.29.356 1.486 1.013l1.833-.762C9.8 10.378 8.448 9.245 6.94 9.245c-1.576 0-2.82.933-2.82 2.378 0 1.41.868 1.956 2.193 2.518l.732.31c1.037.443 1.41.868 1.41 1.492 0 .666-.566 1.12-1.464 1.12-1.013 0-1.636-.492-1.851-1.22l-1.848.746c.452 1.583 1.96 2.666 3.618 2.666z"/>
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#about-gemini-grad)"/>
    <defs>
      <linearGradient id="about-gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9b51e0" />
        <stop offset="50%" stopColor="#3085f3" />
        <stop offset="100%" stopColor="#ff7bca" />
      </linearGradient>
    </defs>
  </svg>
);

export default function About() {
  return (
    <section id="apropos" className="py-24 bg-[#faf8f5] grid-pattern border-t border-[#e7e2d8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16" id="about-heading">
          <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent font-bold block mb-3">
            PRÉSENTATION & PHILOSOPHIE
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-[#181615] tracking-tight leading-[1.1] max-w-4xl">
            À l'intersection de <span className="font-serif italic font-normal text-brand-accent">l'ingénierie rigoureuse</span> et de la <span className="font-serif italic font-normal text-brand-accent">stratégie d'impact</span>.
          </h2>
        </div>

        {/* Biography & Stack Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16" id="about-biography">
          
          {/* Left Column: Big Card - Le Cheminement */}
          <div className="lg:col-span-7 bg-white border border-[#e7e2d8] p-8 md:p-10 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block">
                LE CHEMINEMENT
              </span>
              <h3 className="font-sans font-extrabold text-2xl text-[#181615] tracking-tight">
                Bâtir des prototypes d'excellence qui durent.
              </h3>
              
              <div className="space-y-4 text-sm text-[#292625]/85 leading-relaxed">
                <p>
                  Je conçois des produits numériques propulsés par l'intelligence artificielle, en assurant la direction stratégique complète : <strong className="font-semibold text-brand-primary">cadrage fonctionnel</strong>, <strong className="font-semibold text-brand-primary">définition de l'expérience utilisateur</strong>, <strong className="font-semibold text-brand-primary">direction artistique</strong> et <strong className="font-semibold text-brand-primary">pilotage d'agents IA autonomes</strong> pour la réalisation technique.
                </p>
                <p>
                  Mon rôle n'est pas celui d'un développeur traditionnel qui écrit chaque ligne de code manuellement, mais celui d'un directeur de produit exigeant. Je structure le besoin, rédige des spécifications ultra-précises, orchestre les choix techniques, et valide rigoureusement chaque écran. Cette approche hybride me permet d'obtenir des prototypes complets, documentés et performants en un temps record.
                </p>
              </div>
            </div>

            {/* West African constraint card inside biography */}
            <div className="mt-8 pt-6 border-t border-[#e7e2d8] flex items-start space-x-3">
              <span className="text-xl text-brand-accent font-serif font-bold">“</span>
              <p className="font-sans text-xs text-[#292625]/85 italic leading-relaxed">
                Dans le contexte de connectivité fluctuante d'Afrique de l'Ouest, je mets un point d'honneur à concevoir des architectures sobres : traitement local au maximum (client-side), optimisation de bande passante et formats d'échange ultra-légers.
              </p>
            </div>
          </div>

          {/* Right Column: Ecosystème de travail Card */}
          <div className="lg:col-span-5 bg-white border border-[#e7e2d8] p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block">
                ÉCOSYSTÈME DE TRAVAIL
              </span>
              <h3 className="font-sans font-extrabold text-2xl text-[#181615] tracking-tight">
                Technologies clés
              </h3>
              <p className="font-sans text-xs text-[#292625]/80 leading-relaxed">
                Sélection de frameworks et langages maîtrisés au quotidien pour garantir de la vélocité, de la scalabilité et une intégration IA harmonieuse.
              </p>

              {/* Styled technology grids/logos */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#faf8f5] border border-[#e7e2d8] p-3 flex flex-col items-center justify-center text-center space-y-1.5 hover:border-brand-accent transition-colors">
                  <NodeIcon />
                  <span className="font-mono text-[9px] font-bold text-slate-700">Node.js</span>
                </div>
                <div className="bg-[#faf8f5] border border-[#e7e2d8] p-3 flex flex-col items-center justify-center text-center space-y-1.5 hover:border-brand-accent transition-colors">
                  <ReactIcon />
                  <span className="font-mono text-[9px] font-bold text-slate-700">React</span>
                </div>
                <div className="bg-[#faf8f5] border border-[#e7e2d8] p-3 flex flex-col items-center justify-center text-center space-y-1.5 hover:border-brand-accent transition-colors">
                  <TailwindIcon />
                  <span className="font-mono text-[9px] font-bold text-slate-700">Tailwind</span>
                </div>
                <div className="bg-[#faf8f5] border border-[#e7e2d8] p-3 flex flex-col items-center justify-center text-center space-y-1.5 hover:border-brand-accent transition-colors">
                  <PostgresIcon />
                  <span className="font-mono text-[9px] font-bold text-slate-700">PostgreSQL</span>
                </div>
                <div className="bg-[#faf8f5] border border-[#e7e2d8] p-3 flex flex-col items-center justify-center text-center space-y-1.5 hover:border-brand-accent transition-colors">
                  <TypeScriptIcon />
                  <span className="font-mono text-[9px] font-bold text-slate-700">TypeScript</span>
                </div>
                <div className="bg-[#faf8f5] border border-[#e7e2d8] p-3 flex flex-col items-center justify-center text-center space-y-1.5 hover:border-brand-accent transition-colors">
                  <GeminiIcon />
                  <span className="font-mono text-[9px] font-bold text-slate-700">Gemini/LLM</span>
                </div>
              </div>
            </div>

            {/* Bottom features text */}
            <div className="mt-8 pt-4 border-t border-[#e7e2d8] text-center">
              <span className="font-mono text-[9px] font-extrabold text-[#181615] tracking-widest uppercase">
                CI/CD • TESTING • REST APIS • ARCHITECTURE SQL/NOSQL
              </span>
            </div>
          </div>

        </div>

        {/* Feature performance cards below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white border border-[#e7e2d8] p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-8 h-8 rounded-none bg-[#faf8f5] border border-[#e7e2d8] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-brand-accent" />
              </div>
              <h4 className="font-sans font-bold text-base text-[#181615] uppercase tracking-tight">
                Performance sans compromis
              </h4>
              <p className="font-sans text-xs text-[#292625]/85 leading-relaxed">
                Chaque milliseconde de chargement en moins se traduit par une amélioration du taux de conversion. L'optimisation technique est au cœur de ma démarche.
              </p>
            </div>
            <span className="font-serif italic text-xs text-brand-accent font-medium mt-6 block">
              Web Vitals optimales
            </span>
          </div>

          <div className="bg-white border border-[#e7e2d8] p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-8 h-8 rounded-none bg-[#faf8f5] border border-[#e7e2d8] flex items-center justify-center">
                <Layers className="w-4 h-4 text-brand-accent" />
              </div>
              <h4 className="font-sans font-bold text-base text-[#181615] uppercase tracking-tight">
                Interfaces orientées produit
              </h4>
              <p className="font-sans text-xs text-[#292625]/85 leading-relaxed">
                Le design ne doit pas seulement être beau, il doit être logique. J'étudie le parcours utilisateur pour concevoir des parcours intuitifs et fluides.
              </p>
            </div>
            <span className="font-serif italic text-xs text-brand-accent font-medium mt-6 block">
              Design System & logique UX
            </span>
          </div>

          <div className="bg-white border border-[#e7e2d8] p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-8 h-8 rounded-none bg-[#faf8f5] border border-[#e7e2d8] flex items-center justify-center">
                <Shield className="w-4 h-4 text-brand-accent" />
              </div>
              <h4 className="font-sans font-bold text-base text-[#181615] uppercase tracking-tight">
                Autonomie & Clarté
              </h4>
              <p className="font-sans text-xs text-[#292625]/85 leading-relaxed">
                Rapports réguliers, intégration continue, code auto-documenté et tests automatisés. Un processus de développement fluide jusqu'à la mise en production.
              </p>
            </div>
            <span className="font-serif italic text-xs text-brand-accent font-medium mt-6 block">
              Transparence & Rigueur
            </span>
          </div>

        </div>

        {/* Formations and Mentorship banner card */}
        <div className="bg-white border-2 border-[#181615] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-[9px] uppercase bg-[#faf8f5] border border-[#e7e2d8] px-2 py-1 text-slate-700 font-bold tracking-wider inline-block">
              🎓 MENTORAT & TRANSMISSION
            </span>
            <h3 className="font-sans font-extrabold text-xl md:text-2xl text-[#181615] tracking-tight">
              Propulsez vos compétences tech au niveau supérieur.
            </h3>
            <p className="font-sans text-xs text-[#292625]/85 leading-relaxed">
              J'enseigne les architectures avancées, les performances de rendu React et l'ingénierie moderne à travers des formations structurées et pragmatiques.
            </p>
          </div>
          <a
            href="#services"
            className="font-sans font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-none bg-brand-yellow text-[#181615] hover:bg-amber-400 transition-colors w-full md:w-auto text-center border border-[#181615] shrink-0"
          >
            DÉCOUVRIR MES FORMATIONS
          </a>
        </div>

      </div>
    </section>
  );
}
