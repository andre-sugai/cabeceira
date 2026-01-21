
import React, { useState } from 'react';

interface StudioModeProps {
  images: Record<string, string>;
  setImages: (images: Record<string, string>) => void;
  onReset: () => void;
}

const StudioMode: React.FC<StudioModeProps> = ({ images, setImages, onReset }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (key: string, value: string) => {
    const newImages = { ...images, [key]: value };
    setImages(newImages);
    localStorage.setItem('cabeceira_images', JSON.stringify(newImages));
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[60] bg-primary dark:bg-accent text-white dark:text-primary w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        title="Modo Studio - Alterar Fotos"
      >
        <span className="material-icons-round">settings</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[70] flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl overflow-y-auto p-8 border-l border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-primary dark:text-white flex items-center gap-2">
                <span className="material-icons-round text-accent">edit_note</span>
                Modo Studio
              </h2>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                <span className="material-icons-round">close</span>
              </button>
            </div>

            <p className="text-sm text-slate-500 mb-6">Cole as URLs das fotos da sua empresa para personalizar a página em tempo real.</p>

            <div className="space-y-6">
              {Object.entries(images).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">{key.replace('_', ' ')}</label>
                  <div className="flex gap-2">
                    <img src={value} className="w-12 h-12 rounded object-cover border border-slate-200" alt="Preview" />
                    <input 
                      type="text" 
                      value={value}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="flex-1 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-accent focus:border-accent"
                      placeholder="URL da imagem..."
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <button 
                onClick={() => { if(confirm('Resetar todas as fotos?')) onReset(); }}
                className="w-full py-3 text-red-500 font-bold border border-red-200 dark:border-red-900/30 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                Resetar para o Padrão
              </button>
              <p className="text-[10px] text-center mt-4 text-slate-400">As alterações são salvas automaticamente no seu navegador.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudioMode;
