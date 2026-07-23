/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ClipboardCopy, Cpu, HelpCircle, Layers, FileText, Ban } from 'lucide-react';
import { services as defaultServices } from '../data';

interface ServicesProps {
  content?: {
    services?: Array<{
      id: string;
      title: string;
      description: string;
      forWhom: string;
      details: string[];
    }>;
    exclusions?: Array<{
      title: string;
      text: string;
    }>;
    displaySettings?: {
      showServicesSection?: boolean;
    }
  } | null;
}

export default function Services({ content }: ServicesProps) {
  const showServicesSection = content?.displaySettings?.showServicesSection ?? true;
  if (!showServicesSection) return null;

  const servicesList = content?.services || defaultServices;
  const exclusionsList = content?.exclusions || [
    { title: "Le code lourd from scratch", text: "Je ne vends pas d'heures de programmation manuelle de bas niveau." },
    { title: "La cybersécurité certifiée", text: "Je n'audite pas la sécurité réseau ou système (cryptographie)." },
    { title: "La conformité légale pure", text: "Je dessine des schémas d'utilisabilité RGPD, pas des contrats légaux certifiés." }
  ];

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
    <section id="services" className="py-24 bg-[#faf8f5] grid-pattern border-b border-[#e7e2d8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Heading */}
        <div className="mb-16" id="services-heading">
          <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent font-bold block mb-3">
            PRESTATIONS & CONSEIL
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-[#181615] tracking-tight">
            Mes Services d'Orchestrateur
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#292625]/80 mt-2 max-w-xl">
            Des services de conseil et de pilotage rigoureux pour propulser vos projets de l'idée au livrable final.
          </p>
        </div>

        {/* Services Grid (2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="services-grid">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#e7e2d8] p-8 rounded-none shadow-xs hover:border-[#181615] transition-all duration-300 flex flex-col justify-between"
              id={`service-card-${service.id}`}
            >
              <div>
                {/* Header: Icon, Title & For Whom */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 rounded-none bg-[#faf8f5] border border-[#e7e2d8] text-brand-accent shrink-0">
                    {getIcon(service.id, "w-6 h-6")}
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-base text-[#181615] uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-sans text-[10px] text-brand-accent font-bold mt-1 uppercase tracking-wider">
                      Cible : {service.forWhom}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-[#292625]/85 text-xs leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet details list */}
                <ul className="space-y-2.5 mb-8" id={`service-bullets-${service.id}`}>
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="font-sans text-[#292625]/85 text-xs flex items-start space-x-2.5">
                      <span className="text-brand-accent font-bold shrink-0 text-sm leading-none">&bull;</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#e7e2d8]">
                <a
                  href="#contact"
                  className="font-sans text-[10px] font-extrabold uppercase tracking-widest text-[#181615] hover:text-brand-accent transition-colors inline-block focus:outline-none"
                >
                  DEMANDER UNE PROPOSITION &rarr;
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Explicit Exclusions "Ce que je ne fais pas" */}
        <div className="mt-16 bg-white border border-[#e7e2d8] p-8 rounded-none shadow-xs" id="services-exclusions">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="p-3 bg-[#faf8f5] text-[#181615] border border-[#e7e2d8] rounded-none shrink-0">
              <Ban className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-xs text-[#181615] uppercase tracking-wider flex items-center">
                Limites contractuelles (Ce que je ne propose pas)
              </h4>
              <p className="font-sans text-xs text-slate-500 leading-relaxed mt-1.5 max-w-2xl">
                Par souci de transparence absolue et de professionnalisme, je n'accepte aucune prestation impliquant :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-[11px] font-sans text-slate-600">
                {exclusionsList.map((exc, idx) => (
                  <div key={idx} className="bg-[#faf8f5] p-3 border border-[#e7e2d8]">
                    <strong className="text-brand-primary">{exc.title} :</strong> {exc.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
