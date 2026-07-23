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
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AdminApp from './admin/AdminApp';
import { projects } from './data';
import { collection, onSnapshot, doc } from 'firebase/firestore';
import { db } from './firebase';
import { Project } from './types';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<{ type: 'home' | 'project' | 'admin'; projectId?: string }>({ type: 'home' });
  const [dynamicProjects, setDynamicProjects] = useState<Project[]>(projects);
  const [portfolioContent, setPortfolioContent] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'content', 'portfolio'), (docSnap) => {
      if (docSnap.exists()) {
        setPortfolioContent(docSnap.data());
      } else {
        setPortfolioContent(null);
      }
    }, (error) => {
      console.warn("Firestore: Erreur lors de la synchronisation des contenus, utilisation des valeurs par défaut.", error);
      setPortfolioContent(null);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'projects'), (snapshot) => {
      const list: Project[] = [];
      snapshot.forEach((doc) => {
        list.push(doc.data() as Project);
      });
      if (list.length > 0) {
        setDynamicProjects(list);
      } else {
        setDynamicProjects(projects);
      }
    }, (error) => {
      console.warn("Firestore: Erreur lors de la synchronisation des projets, utilisation des valeurs statiques.", error);
      setDynamicProjects(projects);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/admin')) {
        setCurrentRoute({ type: 'admin' });
        window.scrollTo(0, 0);
      } else if (hash.startsWith('#/projets/')) {
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
    ? dynamicProjects.find(p => p.id === currentRoute.projectId)
    : null;

  if (currentRoute.type === 'admin') {
    return <AdminApp />;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#ea580c] selection:text-white" id="portfolio-app-root">
      {/* Dynamic Floating Navbar with route awareness */}
      <Navbar currentRouteType={currentRoute.type} content={portfolioContent} />

      <main className="flex-grow pt-[80px]" id="main-content-flow">
        {currentRoute.type === 'project' && activeProject ? (
          <CaseStudyPage project={activeProject} />
        ) : (
          <>
            {/* Hero Banner Area */}
            <Hero content={portfolioContent} />

            {/* Professional Profile Bio & Method */}
            {(portfolioContent?.displaySettings?.showAboutSection ?? true) && <About content={portfolioContent} />}

            {/* Skill Matrix */}
            {(portfolioContent?.displaySettings?.showSkillsSection ?? true) && <Skills content={portfolioContent} />}

            {/* Interactive Products Portfolio & Studies Case */}
            {(portfolioContent?.displaySettings?.showProjectsSection ?? true) && <Projects projectsList={dynamicProjects} />}

            {/* Consultation Offerings */}
            {(portfolioContent?.displaySettings?.showServicesSection ?? true) && <Services content={portfolioContent} />}

            {/* Contact Form Block */}
            {(portfolioContent?.displaySettings?.showContactSection ?? true) && <Contact content={portfolioContent} />}
          </>
        )}
      </main>

      {/* Universal Sticky Footer */}
      <Footer content={portfolioContent} />

      {/* Floating WhatsApp Button */}
      {(portfolioContent?.displaySettings?.showFloatingWhatsApp ?? true) && <FloatingWhatsApp content={portfolioContent} />}
    </div>
  );
}
