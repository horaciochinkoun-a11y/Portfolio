/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ClipboardCopy, Cpu, HelpCircle, Layers, FileText, Ban } from 'lucide-react';
import { services } from '../data';

export default function Services() {
  // Helper to map services to icons
  const getIcon = (id: string, className = "w-5 h-5") => {
    switch (id) {
      case 'cadrage-fonctionnel':
        return <Layers className={className} />;
      case 'prompt-engineering':
        return <Cpu className={className} />;
      case 'direction-artistique':
        return <ClipboardCopy className={className} />;
      case 'redaction-documentaire':
        return <FileText className={className} />;
      default:
        return <HelpCircle className={className} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Heading */}
        <div className="text-center md:text-left mb-16" id="services-heading">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold block mb-2">
            04 / SERVICES
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Mes Prestations d'Orchestrateur
          </h2>
          <p className="font-sans text-sm text-slate-500 mt-2 max-w-lg">
            Des services de conseil et de pilotage rigoureux pour propulser vos projets de l'idée au livrable.
          </p>
          <div className="w-12 h-1 bg-indigo-600 rounded mt-4" />
        </div>

        {/* Services Grid (2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
              id={`service-card-${service.id}`}
            >
              <div>
                {/* Header: Icon, Title & For Whom */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 shrink-0">
                    {getIcon(service.id, "w-6 h-6")}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900">
                      {service.title}
                    </h3>
                    <p className="font-sans text-[11px] text-indigo-600 font-medium mt-0.5">
                      <strong>Cible :</strong> {service.forWhom}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-slate-600 text-xs leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet details list */}
                <ul className="space-y-2.5 mb-8" id={`service-bullets-${service.id}`}>
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="font-sans text-slate-700 text-xs flex items-start space-x-2.5">
                      <span className="text-indigo-500 font-bold shrink-0 text-sm leading-none">&bull;</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#contact"
                  className="font-sans text-xs font-semibold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 transition-colors inline-block focus:outline-none"
                >
                  Demander une proposition &rarr;
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Explicit Exclusions "Ce que je ne fais pas" (Crucial for credibility) */}
        <div className="mt-16 bg-slate-100/50 border border-slate-200 rounded-2xl p-8" id="services-exclusions">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="p-3 bg-slate-200 text-slate-600 rounded-lg shrink-0 border border-slate-300/40">
              <Ban className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center">
                Limites contractuelles (Ce que je ne propose pas)
              </h4>
              <p className="font-sans text-xs text-slate-500 leading-relaxed mt-1.5 max-w-2xl">
                Par souci de transparence absolue et de professionnalisme, je n'accepte aucune prestation impliquant :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-[11px] font-sans text-slate-600">
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <strong>Le code lourd from scratch :</strong> Je ne vends pas d'heures de programmation manuelle de bas niveau.
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <strong>La cybersécurité certifiée :</strong> Je n'audite pas la sécurité réseau ou système (cryptographie).
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <strong>La conformité légale pure :</strong> Je dessine des schémas d'utilisabilité RGPD, pas des contrats légaux certifiés.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
