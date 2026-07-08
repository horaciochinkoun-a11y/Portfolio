/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-indigo-500 selection:text-white" id="portfolio-app-root">
      {/* Dynamic Floating Navbar */}
      <Navbar />

      <main className="flex-grow" id="main-content-flow">
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
      </main>

      {/* Universal Sticky Footer */}
      <Footer />
    </div>
  );
}
