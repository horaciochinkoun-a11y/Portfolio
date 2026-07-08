/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentRouteType?: 'home' | 'project';
}

export default function Navbar({ currentRouteType = 'home' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bio', href: '#apropos' },
    { name: 'Réalisations', href: '#projets' },
    { name: 'Expertise', href: '#competences' },
    { name: 'Formations', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const getHref = (href: string) => {
    if (currentRouteType === 'project' && href.startsWith('#')) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || currentRouteType === 'project'
          ? 'bg-[#faf8f5]/95 text-[#181615] border-b border-[#faf8f5]/10 shadow-sm backdrop-blur-md py-4'
          : 'bg-transparent text-[#181615] py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Wordmark - Double Stylized Triangles in Orange */}
        <a href={getHref('#accueil')} className="flex items-center space-x-3 focus:outline-none" id="nav-logo">
          <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
            {/* Custom stylized 'AD' styled triangles */}
            <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 34 L18 8 L30 34 Z" fill="#ea580c" />
              <path d="M16 34 L28 8 L40 34 Z" fill="#f97316" opacity="0.8" />
            </svg>
          </div>
          <span className="font-display font-bold tracking-tight text-base uppercase leading-tight">
            Horacio Chinkoun
            <span className="block text-[10px] font-mono tracking-wider font-semibold normal-case text-slate-500">
              Orchestrateur IA & PO
            </span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8" id="desktop-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={getHref(link.href)}
              className="font-sans font-medium text-sm transition-colors text-slate-700 hover:text-brand-accent relative group py-1"
            >
              {link.name}
              {link.name === 'Formations' && (
                <span className="inline-block text-[9px] align-top ml-0.5 text-brand-accent">↗</span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={getHref('#contact')}
            className="font-sans font-bold text-[11px] uppercase tracking-wider py-3 px-6 rounded-none bg-brand-primary text-white hover:bg-[#292625] transition-all shadow-sm"
          >
            DÉMARRER UN PROJET
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none p-1.5 rounded-md hover:bg-slate-100 transition-colors text-inherit"
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-[72px] left-0 w-full bg-[#faf8f5] text-[#181615] border-t border-slate-200/80 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
        id="mobile-nav-drawer"
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={getHref(link.href)}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans font-semibold text-lg text-slate-800 hover:text-brand-accent py-2 border-b border-slate-200 focus:outline-none"
            >
              {link.name}
              {link.name === 'Formations' && <span className="text-xs ml-1 text-brand-accent">↗</span>}
            </a>
          ))}
          <a
            href={getHref('#contact')}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-center font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-none bg-brand-primary hover:bg-[#292625] transition-all text-white shadow-md focus:outline-none"
          >
            DÉMARRER UN PROJET
          </a>
        </div>
      </div>
    </nav>
  );
}
