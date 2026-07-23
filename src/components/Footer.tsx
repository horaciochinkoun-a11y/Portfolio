/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ content }: any) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#181615] text-white py-16 border-t border-[#292625]" id="main-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo & Slogan */}
          <div className="flex items-center space-x-4 text-center md:text-left" id="footer-logo">
            <span className="font-sans font-black text-white text-xl tracking-widest uppercase shrink-0">
              H<span className="text-brand-accent">.</span>C
            </span>
            <div className="border-l border-[#292625] pl-4">
              <span className="font-sans font-extrabold tracking-widest text-[11px] uppercase block">
                Horacio Chinkoun
              </span>
              <span className="font-sans text-[10px] text-gray-400">
                Architecte Fonctionnel & Orchestrateur de Produits IA
              </span>
            </div>
          </div>

          {/* Quick legal/tech indicators */}
          <div className="text-center md:text-right space-y-1.5" id="footer-details">
            <p className="font-sans text-xs text-gray-400">
              &copy; {currentYear} Horacio CHINKOUN. Tous droits réservés.
            </p>
            <p className="font-mono text-[9px] text-[#faf8f5]/40">
              CONVAINCU PAR LA RIGUEUR
            </p>
          </div>

        </div>

        {/* Back to top anchor */}
        <div className="mt-8 pt-8 border-t border-[#292625]/60 flex justify-center">
          <a
            href="#accueil"
            className="inline-flex items-center space-x-1.5 font-sans text-[10px] text-gray-400 hover:text-white uppercase tracking-widest font-extrabold transition-colors focus:outline-none"
            id="back-to-top-link"
          >
            <ArrowUp className="w-3.5 h-3.5 text-brand-accent" />
            <span>Retour en haut</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
