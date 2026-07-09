import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  content?: {
    contactWhatsapp?: string;
  } | null;
}

export default function FloatingWhatsApp({ content }: FloatingWhatsAppProps) {
  const whatsappNumber = content?.contactWhatsapp || "+229 99 06 25 59";
  const cleanWhatsappNumber = whatsappNumber.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${cleanWhatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Discuter sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
