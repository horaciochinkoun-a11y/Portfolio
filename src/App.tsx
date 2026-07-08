/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyPage from './components/CaseStudyPage';
import { projects } from './data';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<{ type: 'home' | 'project'; projectId?: string }>({ type: 'home' });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/projets/')) {
        const projectId = hash.replace('#/projets/', '');
        setCurrentRoute({ type: 'project', projectId });
        window.scrollTo(0, 0); // Scroll to top immediately on route changes
      } else {
        setCurrentRoute({ type: 'home' });
        // Smooth scroll to home anchor if hash exists
        if (hash && hash.startsWith('#') && hash !== '#/') {
          const targetId = hash.replace('#', '').replace('/', '');
          const element = document.getElementById(targetId);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      }
    };

    // Initialize on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activeProject = currentRoute.type === 'project' && currentRoute.projectId
    ? projects.find(p => p.id === currentRoute.projectId)
    : null;

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#ea580c] selection:text-white" id="portfolio-app-root">
      {/* Dynamic Floating Navbar with route awareness */}
      <Navbar currentRouteType={currentRoute.type} />

      <main className="flex-grow pt-[80px]" id="main-content-flow">
        {currentRoute.type === 'project' && activeProject ? (
          <CaseStudyPage project={activeProject} />
        ) : (
          <>
            {/* Hero Banner Area */}
            <Hero />

            {/* Professional Profile Bio & Method */}
            <About />

            {/* Skill Matrix */}
            <Skills />

            {/* Interactive Products Portfolio & Studies Case */}
            <Projects />

            {/* Consultation Offerings */}
            <Services />

            {/* Contact Form Block */}
            <Contact />
          </>
        )}
      </main>

      {/* Universal Sticky Footer */}
      <Footer />
    </div>
  );
}
