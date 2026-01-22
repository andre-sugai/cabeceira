import React from 'react';
import { CONTACT_WHATSAPP } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={CONTACT_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-8 z-50 p-4 rounded-full shadow-2xl bg-[#25D366] text-white hover:scale-110 transition-transform duration-300 flex items-center justify-center hover:shadow-green-500/30"
      aria-label="Falar no WhatsApp"
    >
      <span style={{ fontSize: '24px' }}>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </span>
    </a>
  );
};

export default WhatsAppButton;
