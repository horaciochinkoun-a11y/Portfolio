/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentRouteType?: 'home' | 'project';
  content?: any;
}

export default function Navbar({ currentRouteType = 'home', content }: NavbarProps) {
  const showSocials = content?.displaySettings?.showSocialLinksNavbar ?? true;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // States for backdoor admin panel (3s long press)
  const [isPressing, setIsPressing] = useState(false);
  const [pressProgress, setPressProgress] = useState(0); // 0 to 100
  const [pressStartTime, setPressStartTime] = useState<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;
    
    if (isPressing && pressStartTime !== null) {
      const updateProgress = () => {
        const elapsed = Date.now() - pressStartTime;
        const progress = Math.min((elapsed / 3000) * 100, 100);
        setPressProgress(progress);
        
        if (elapsed < 3000) {
          animationFrameId = requestAnimationFrame(updateProgress);
        } else {
          // Success triggered
          setIsPressing(false);
          setPressStartTime(null);
          setPressProgress(100);
          window.location.hash = '#/admin';
        }
      };
      animationFrameId = requestAnimationFrame(updateProgress);
    } else {
      // Fast reset to 0 when released
      if (pressProgress > 0) {
        const resetProgress = () => {
          setPressProgress((prev) => {
            const next = prev - 8;
            if (next <= 0) return 0;
            animationFrameId = requestAnimationFrame(resetProgress);
            return next;
          });
        };
        animationFrameId = requestAnimationFrame(resetProgress);
      }
    }
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPressing, pressStartTime]);

  const handlePressStart = (e: React.MouseEvent | React.TouchEvent) => {
    // Only primary click
    if ('button' in e && e.button !== 0) return;
    setIsPressing(true);
    setPressStartTime(Date.now());
  };

  const handlePressEnd = () => {
    setIsPressing(false);
    setPressStartTime(null);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If the user has held the button for a while, cancel the normal navigation anchor click
    if (pressProgress > 5) {
      e.preventDefault();
    }
  };

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
        {/* Logo / Wordmark - Double Stylized Triangles in Orange - Backdoor 3s long press */}
        <a 
          href={getHref('#accueil')} 
          onClick={handleLogoClick}
          onMouseDown={handlePressStart}
          onMouseUp={handlePressEnd}
          onMouseLeave={handlePressEnd}
          onTouchStart={handlePressStart}
          onTouchEnd={handlePressEnd}
          className="flex items-center space-x-3 focus:outline-none select-none relative group" 
          id="nav-logo"
        >
          <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
            {/* Background glowing ring on press */}
            {isPressing && (
              <div className="absolute inset-0 bg-[#ea580c]/10 rounded-full animate-ping pointer-events-none" />
            )}
            
            {/* Circle progress ring */}
            <svg className="absolute inset-0 -rotate-90 w-full h-full" viewBox="0 0 40 40">
              {/* Backing track (thin/subtle grey/orange) */}
              {isPressing && (
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="2"
                  className="opacity-10"
                />
              )}
              {/* Foreground progress track */}
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="url(#progress-gradient)"
                strokeWidth="2.5"
                strokeDasharray={`${2 * Math.PI * 18}`}
                strokeDashoffset={`${2 * Math.PI * 18 * (1 - pressProgress / 100)}`}
                strokeLinecap="round"
                className="transition-all duration-75 ease-out"
              />
              <defs>
                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ea580c" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </svg>

            {/* Logo Triangles with scale/rotation animation */}
            <div 
              className="w-8 h-8 flex items-center justify-center transition-all duration-150"
              style={{
                transform: `scale(${1 + (pressProgress / 100) * 0.15}) rotate(${(pressProgress / 100) * 180}deg)`,
              }}
            >
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 34 L18 8 L30 34 Z" fill="#ea580c" />
                <path d="M16 34 L28 8 L40 34 Z" fill="#f97316" opacity="0.8" />
              </svg>
            </div>
          </div>

          <span className="font-display font-bold tracking-tight text-base uppercase leading-tight relative">
            Horacio Chinkoun
            <span className="block text-[10px] font-mono tracking-wider font-semibold normal-case text-slate-500">
              Orchestrateur IA & PO
            </span>

            {/* Floating dynamic countdown tooltip when holding down */}
            {isPressing && (
              <span className="absolute -bottom-6 left-0 right-0 mx-auto w-max text-[9px] font-mono font-bold tracking-widest text-[#ea580c] bg-[#181615] text-white px-2 py-0.5 rounded shadow-sm flex items-center space-x-1 uppercase animate-pulse z-50">
                <span>Console dans</span>
                <span className="text-orange-400 font-black">
                  {Math.max(0, Math.ceil((3000 - (pressProgress / 100) * 3000) / 1000))}s
                </span>
              </span>
            )}
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
