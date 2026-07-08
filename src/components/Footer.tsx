/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Brain, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800" id="main-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo & Slogan */}
          <div className="flex items-center space-x-3 text-center md:text-left" id="footer-logo">
            <Brain className="w-5 h-5 text-indigo-400" />
            <div>
              <span className="font-display font-bold tracking-tight text-sm uppercase block">
                Horacio Chinkoun
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                Architecte Fonctionnel & Orchestrateur de Produits IA
              </span>
            </div>
          </div>

          {/* Quick legal/tech indicators */}
          <div className="text-center md:text-right space-y-1.5" id="footer-details">
            <p className="font-sans text-xs text-slate-400">
              &copy; {currentYear} Horacio Chinkoun. Tous droits réservés.
            </p>
            <p className="font-mono text-[9px] text-slate-500">
              Prototype Statique compilé avec Vite & React. Dirigé par IA.
            </p>
          </div>

        </div>

        {/* Back to top anchor */}
        <div className="mt-8 pt-8 border-t border-slate-800/60 flex justify-center">
          <a
            href="#accueil"
            className="inline-flex items-center space-x-1.5 font-sans text-[11px] text-slate-400 hover:text-white uppercase tracking-wider font-semibold transition-colors focus:outline-none"
            id="back-to-top-link"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Retour en haut</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
