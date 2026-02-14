import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppCTA = ({ phone, text }) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  return (
    <a 
      href={url}
      target="_blank"
      rel="noreferrer"
      className="w-full max-w-[30rem]
 bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-teal-900/30 mb-6"
    >
      <MessageCircle size={22} />
      Order via WhatsApp
    </a>
  );
};

export default WhatsAppCTA;