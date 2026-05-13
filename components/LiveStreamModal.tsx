import React, { useEffect } from 'react';

interface LiveStreamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LiveStreamModal: React.FC<LiveStreamModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    /* Overlay with backdrop blur */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Transmissão ao vivo"
    >
      {/* Modal box — stop propagation so clicking inside doesn't close */}
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
          aria-label="Fechar modal"
        >
          <span className="material-icons-round text-[20px]">close</span>
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
          {/* Live indicator */}
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
            AO VIVO
          </span>
          <h2 className="text-lg font-extrabold text-primary dark:text-white tracking-tight">
            Transmissão Cabeceira
          </h2>
        </div>

        {/* Video embed area */}
        <div className="aspect-video w-full bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/9EYmDuFdeNo?si=LSPRW2OzDTwSQfVd"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-4 flex items-center justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Acompanhe ao vivo e interaja nos comentários do YouTube.
          </p>
          <button
            onClick={onClose}
            className="text-sm font-medium text-slate-400 hover:text-primary dark:hover:text-accent transition-colors"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};

export default LiveStreamModal;
