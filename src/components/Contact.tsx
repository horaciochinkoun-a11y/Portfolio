/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle, Copy, MessageCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import emailjs from '@emailjs/browser';

// Fonction pour jouer un effet sonore élégant de succès via la Web Audio API
const playSuccessSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    const ctx = new AudioContextClass();
    
    // Première note (Do5 / C5) pour une attaque douce
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    
    gain1.gain.setValueAtTime(0.12, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    
    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.15);
    
    // Deuxième note (Mi5 / E5), légèrement décalée pour l'effet de carillon ascendant ("ding-ling!")
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
    
    gain2.gain.setValueAtTime(0, ctx.currentTime);
    gain2.gain.setValueAtTime(0.12, ctx.currentTime + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    
    osc2.start(ctx.currentTime + 0.08);
    osc2.stop(ctx.currentTime + 0.35);
  } catch (error) {
    console.warn("L'effet sonore n'a pas pu être joué :", error);
  }
};

interface ContactProps {
  content?: {
    contactEmail?: string;
    contactLinkedin?: string;
    contactWhatsapp?: string;
    contactLocation?: string;
  } | null;
}

export default function Contact({ content }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'client', // client, recruteur, other
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState('');

  const emailAddress = content?.contactEmail || "horaciochinkoun@gmail.com";
  const linkedinUrl = content?.contactLinkedin || "https://linkedin.com/in/horacio-chinkoun";
  const whatsappNumber = content?.contactWhatsapp || "+229 99 06 25 59";
  const locationText = content?.contactLocation || "Cotonou, Bénin (Remote disponible)";

  // Format clean WhatsApp number (digits only, e.g., '22999062559')
  const cleanWhatsappNumber = whatsappNumber.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${cleanWhatsappNumber}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // 1. Enregistrement Firestore (Rapprochement & Console Admin)
      await addDoc(collection(db, 'messages'), {
        ...formData,
        read: false,
        createdAt: serverTimestamp()
      });

      // 2. Notification par email via EmailJS si configuré
      const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
      const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        try {
          await emailjs.send(
            serviceId,
            templateId,
            {
              from_name: formData.name,
              from_email: formData.email,
              role: formData.role === 'client' ? 'Client (Besoin d\'un cadrage / MVP)' : formData.role === 'recruteur' ? 'Recruteur (Opportunité)' : 'Autre collaboration',
              message: formData.message,
              to_name: 'Horacio CHINKOUN',
            },
            publicKey
          );
        } catch (emailErr) {
          console.error("Erreur lors de l'envoi d'email via EmailJS:", emailErr);
          // Ne pas bloquer l'état succès si le message a bien été enregistré dans Firestore
        }
      } else {
        console.warn("Configuration EmailJS manquante. Le message a été enregistré dans l'administration Firestore.");
      }

      setIsSuccess(true);
      playSuccessSound();
      setFormData({ name: '', email: '', role: 'client', message: '' });
    } catch (err: any) {
      console.error(err);
      setError("Une erreur est survenue lors de l'envoi du message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#faf8f5] grid-pattern border-b border-[#e7e2d8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Heading */}
        <div className="mb-16" id="contact-heading">
          <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent font-bold block mb-3">
            05 / CONTACT
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-[#181615] tracking-tight">
            Commençons une collaboration
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#292625]/80 mt-2 max-w-xl">
            Que vous soyez un recruteur à la recherche d’un talent de premier ordre ou un porteur de projet en quête de cadrage d’excellence.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="contact-grid">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6" id="contact-info">
            
            <div className="bg-white border border-[#e7e2d8] p-6 rounded-none space-y-6 shadow-xs">
              
              <h3 className="font-sans font-extrabold text-sm text-[#181615] pb-3 border-b border-[#e7e2d8] uppercase tracking-wider">
                Coordonnées Directes
              </h3>

              {/* Email Card (with click-to-copy) */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#faf8f5] border border-[#e7e2d8] text-brand-accent rounded-none shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                    Email direct
                  </span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="font-mono text-xs text-slate-800 hover:text-brand-accent font-semibold break-all block"
                  >
                    {emailAddress}
                  </a>
                  
                  <button
                    onClick={handleCopyEmail}
                    className="mt-2 inline-flex items-center space-x-1 text-[#181615] hover:bg-[#faf8f5] font-mono text-[9px] font-bold tracking-wider uppercase bg-white border border-[#181615] px-2.5 py-1 rounded-none cursor-pointer transition-all"
                  >
                    {isCopied ? (
                      <>
                        <CheckCircle className="w-3 h-3 text-emerald-500 mr-1" />
                        <span className="text-emerald-700 font-sans">Copié !</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 mr-1" />
                        <span className="font-sans">Copier l'adresse</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn Link */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#faf8f5] border border-[#e7e2d8] text-brand-accent rounded-none shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                    Réseaux pro
                  </span>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-xs text-slate-800 hover:text-brand-accent font-semibold block"
                  >
                    {linkedinUrl.replace('https://', '')}
                  </a>
                </div>
              </div>

              {/* WhatsApp Link */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#faf8f5] border border-[#e7e2d8] text-brand-accent rounded-none shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                    Messagerie instantanée
                  </span>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-xs text-slate-800 hover:text-brand-accent font-semibold block"
                  >
                    {whatsappNumber}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#faf8f5] border border-[#e7e2d8] text-brand-accent rounded-none shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                    Localisation & Mobilité
                  </span>
                  <span className="font-sans text-xs text-slate-800 font-semibold block">
                    {locationText}
                  </span>
                </div>
              </div>

            </div>

            {/* Note about Forms/Brief */}
            <div className="bg-white border border-[#e7e2d8] p-5 rounded-none shadow-xs">
              <p className="font-sans text-[11px] text-slate-500 leading-relaxed">
                <strong>Hébergement LWS :</strong> Ce site est conçu pour être entièrement statique. En production, le formulaire peut être connecté à un service tiers gratuit comme <em>Formspree</em> ou <em>Web3Forms</em> pour un acheminement instantané de vos e-mails vers ma boîte de réception, sans nécessiter de serveur Node.js actif.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="bg-white border border-[#e7e2d8] p-8 rounded-none shadow-xs">
              
              {isSuccess ? (
                <div className="text-center py-12 space-y-4" id="form-success-state">
                  <div className="w-16 h-16 bg-[#faf8f5] text-emerald-500 border border-[#e7e2d8] rounded-none flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-sans font-bold text-lg text-slate-900">
                    Message transmis avec succès !
                  </h3>
                  <p className="font-sans text-slate-600 text-xs max-w-sm mx-auto leading-relaxed">
                    Merci pour votre message. Je prendrai connaissance de votre demande d'ici 24 heures ouvrées pour organiser notre échange.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-accent hover:text-[#181615] transition-colors pt-4 focus:outline-none"
                  >
                    Renvoyer un nouveau message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" id="form-inputs">
                  
                  {/* Row: Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="input-name" className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">
                        Votre nom complet <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="input-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                        placeholder="Ex: Marc Lalo"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="input-email" className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">
                        Votre adresse e-mail <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="input-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                        placeholder="Ex: marc@entreprise.com"
                      />
                    </div>
                  </div>

                  {/* Dropdown: Role Selection (Recruteur / Client / Autre) */}
                  <div className="space-y-2">
                    <label htmlFor="input-role" className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">
                      Vous êtes : <span className="text-brand-accent">*</span>
                    </label>
                    <select
                      id="input-role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
                    >
                      <option value="client">Un client potentiel (Besoin d'un cadrage / MVP)</option>
                      <option value="recruteur">Un recruteur (Opportunité de poste salarié)</option>
                      <option value="other">Autre demande de collaboration</option>
                    </select>
                  </div>

                  {/* Textarea: Message */}
                  <div className="space-y-2">
                    <label htmlFor="input-message" className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">
                      Votre Message <span className="text-brand-accent">*</span>
                    </label>
                    <textarea
                      id="input-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all resize-none focus:outline-none"
                      placeholder="Décrivez brièvement les contours de votre besoin..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-sans font-extrabold text-xs uppercase tracking-widest py-4 px-8 rounded-none bg-[#181615] hover:bg-brand-accent disabled:bg-slate-300 text-white transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer focus:outline-none"
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
