/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle, Copy } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'client', // client, recruteur, other
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const emailAddress = "horaciochinkoun@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', role: 'client', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Heading */}
        <div className="text-center md:text-left mb-16" id="contact-heading">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold block mb-2">
            05 / CONTACT
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Commençons une collaboration
          </h2>
          <p className="font-sans text-sm text-slate-500 mt-2 max-w-lg">
            Que vous soyez un recruteur à la recherche d’un talent de premier ordre ou un porteur de projet en quête de cadrage d’excellence.
          </p>
          <div className="w-12 h-1 bg-indigo-600 rounded mt-4" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-grid">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6" id="contact-info">
            
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-6">
              
              <h3 className="font-display font-bold text-base text-slate-900 pb-3 border-b border-slate-200">
                Coordonnées Directes
              </h3>

              {/* Email Card (with click-to-copy) */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                    Email direct
                  </span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="font-mono text-xs text-slate-800 hover:text-indigo-600 font-semibold break-all block"
                  >
                    {emailAddress}
                  </a>
                  
                  <button
                    onClick={handleCopyEmail}
                    className="mt-1.5 inline-flex items-center space-x-1 text-slate-500 hover:text-slate-800 font-mono text-[10px] bg-white border border-slate-200 px-2 py-1 rounded cursor-pointer transition-all"
                  >
                    {isCopied ? (
                      <>
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-700 font-sans">Copié !</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="font-sans">Copier l'adresse</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn Link */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-xl shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                    Réseaux pro
                  </span>
                  <a
                    href="https://linkedin.com/in/horacio-chinkoun"
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-xs text-slate-800 hover:text-indigo-600 font-semibold block"
                  >
                    linkedin.com/in/horacio-chinkoun
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                    Localisation & Mobilité
                  </span>
                  <span className="font-sans text-xs text-slate-800 font-semibold block">
                    Cotonou, Bénin (Remote disponible)
                  </span>
                </div>
              </div>

            </div>

            {/* Note about Forms/Brief */}
            <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl">
              <p className="font-sans text-[11px] text-slate-500 leading-relaxed">
                <strong>Hébergement LWS :</strong> Ce site est conçu pour être entièrement statique. En production, le formulaire peut être connecté à un service tiers gratuit comme <em>Formspree</em> ou <em>Web3Forms</em> pour un acheminement instantané de vos e-mails vers ma boîte de réception, sans nécessiter de serveur Node.js actif.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
              
              {isSuccess ? (
                <div className="text-center py-12 space-y-4" id="form-success-state">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 border border-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Message transmis avec succès !
                  </h3>
                  <p className="font-sans text-slate-600 text-xs max-w-sm mx-auto leading-relaxed">
                    Merci pour votre message. Je prendrai connaissance de votre demande d'ici 24 heures ouvrées pour organiser notre échange.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="font-sans text-xs font-semibold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 transition-colors pt-4 focus:outline-none"
                  >
                    Renvoyer un nouveau message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" id="form-inputs">
                  
                  {/* Row: Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="input-name" className="font-sans font-semibold text-[11px] text-slate-700 uppercase tracking-wider block">
                        Votre nom complet <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="input-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 rounded-lg py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                        placeholder="Ex: Marc Lalo"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="input-email" className="font-sans font-semibold text-[11px] text-slate-700 uppercase tracking-wider block">
                        Votre adresse e-mail <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="input-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-200 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 rounded-lg py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                        placeholder="Ex: marc@entreprise.com"
                      />
                    </div>
                  </div>

                  {/* Dropdown: Role Selection (Recruteur / Client / Autre) */}
                  <div className="space-y-2">
                    <label htmlFor="input-role" className="font-sans font-semibold text-[11px] text-slate-700 uppercase tracking-wider block">
                      Vous êtes : <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="input-role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-white border border-slate-200 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 rounded-lg py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                    >
                      <option value="client">Un client potentiel (Besoin d'un cadrage / MVP)</option>
                      <option value="recruteur">Un recruteur (Opportunité de poste salarié)</option>
                      <option value="other">Autre demande de collaboration</option>
                    </select>
                  </div>

                  {/* Textarea: Message */}
                  <div className="space-y-2">
                    <label htmlFor="input-message" className="font-sans font-semibold text-[11px] text-slate-700 uppercase tracking-wider block">
                      Votre Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="input-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-slate-200 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 rounded-lg py-3 px-4 text-xs text-slate-800 transition-all resize-none focus:outline-none"
                      placeholder="Décrivez brièvement les contours de votre besoin..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-sans font-semibold text-xs uppercase tracking-wider py-4 px-8 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white transition-all shadow-md shadow-indigo-100 flex items-center justify-center space-x-2 cursor-pointer focus:outline-none"
                    id="submit-contact-form"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmission en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmettre le message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
