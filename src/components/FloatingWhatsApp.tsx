import React from 'react';

interface FloatingWhatsAppProps {
  content?: {
    contactWhatsapp?: string;
    whatsappImage?: string;
  } | null;
}

export default function FloatingWhatsApp({ content }: FloatingWhatsAppProps) {
  const whatsappNumber = content?.contactWhatsapp || "+229 99 06 25 59";
  const cleanWhatsappNumber = whatsappNumber.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${cleanWhatsappNumber}`;
  const whatsappImg = content?.whatsappImage || "/images/whatsapp.svg";

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float-vertical flex items-center justify-center">
      {/* Onde verte en arrière-plan (green pulse wave) */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-green-pulse pointer-events-none" />
      
      {/* Bouton WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="relative w-14 h-14 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 flex items-center justify-center overflow-hidden border-2 border-white bg-[#25D366]"
        aria-label="Discuter sur WhatsApp"
        id="floating-whatsapp-button"
      >
        <img
          src={whatsappImg}
          alt="WhatsApp"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover rounded-full"
        />
      </a>
    </div>
  );
}

