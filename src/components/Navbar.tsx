/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';

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
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Projets', href: '#projets' },
    { name: 'Services', href: '#services' },
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
          ? 'bg-slate-900/95 text-white shadow-md backdrop-blur-md py-4'
          : 'bg-transparent text-slate-900 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Wordmark */}
        <a href={getHref('#accueil')} className="flex items-center space-x-2.5 focus:outline-none" id="nav-logo">
          <Brain className={`w-6 h-6 ${isScrolled || currentRouteType === 'project' ? 'text-indigo-400' : 'text-indigo-600'}`} />
          <span className="font-display font-bold tracking-tight text-lg uppercase">
            Horacio Chinkoun
            <span className={`block text-xs font-mono tracking-wider font-medium normal-case ${isScrolled || currentRouteType === 'project' ? 'text-slate-400' : 'text-slate-500'}`}>
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
              className={`font-sans font-medium text-sm transition-colors relative group py-1 ${
                isScrolled || currentRouteType === 'project' ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-indigo-600'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isScrolled || currentRouteType === 'project' ? 'bg-indigo-400' : 'bg-indigo-600'
              }`} />
            </a>
          ))}
          <a
            href={getHref('#contact')}
            className={`font-sans font-semibold text-xs uppercase tracking-wider py-2.5 px-5 rounded-md transition-all ${
              isScrolled || currentRouteType === 'project'
                ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm'
            }`}
          >
            Discuter d'un projet
          </a>
        </div>

        {/* Mobile Hamburguer Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-inherit"
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
        className={`md:hidden fixed top-[76px] left-0 w-full bg-slate-950 text-white border-t border-slate-800/80 transition-all duration-300 ease-in-out ${
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
              className="font-sans font-medium text-lg text-slate-300 hover:text-white py-2 border-b border-slate-900 focus:outline-none"
            >
              {link.name}
            </a>
          ))}
          <a
            href={getHref('#contact')}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-center font-semibold text-sm uppercase tracking-wider py-3 px-6 rounded-md bg-indigo-500 hover:bg-indigo-600 transition-all text-white shadow-md focus:outline-none"
          >
            Discuter d'un projet
          </a>
        </div>
      </div>
    </nav>
  );
}
