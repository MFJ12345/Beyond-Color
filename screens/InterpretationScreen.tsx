import React from 'react';
import { ArrowLeft, Maximize2, Layers } from 'lucide-react';
import { Artwork } from '../types';
import { Header } from '../components/Layout';

interface InterpretationScreenProps {
  artwork: Artwork;
  onBack: () => void;
  onCompare: () => void;
}

const InterpretationScreen: React.FC<InterpretationScreenProps> = ({ artwork, onBack, onCompare }) => {
  return (
    <div className="flex-1 flex flex-col h-full bg-museum-50">
      <Header 
        leftAction={
          <button onClick={onBack} className="p-2 -ml-2 text-ocean-900 hover:text-terra-600 transition-colors">
            <ArrowLeft size={24} />
          </button>
        }
        title="Interpretation"
      />

      <div className="flex-1 overflow-y-auto pb-24 no-scrollbar">
        {/* Artwork Preview Area */}
        <div className="px-6 mb-8">
          <div className="relative aspect-[4/5] bg-museum-200 rounded-xl overflow-hidden shadow-lg mb-4 group ring-1 ring-black/5">
             <img 
                src={artwork.imageUrl} 
                alt={artwork.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold text-ocean-900 shadow-sm flex items-center gap-1.5 hover:bg-ocean-50 cursor-pointer">
                 <Maximize2 size={10} />
                 <span>Expand</span>
              </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-ocean-50 rounded-lg border border-ocean-100">
            <div className="p-1 bg-ocean-100 rounded-full mt-0.5 text-ocean-600">
               <Layers size={14} />
            </div>
            <p className="text-xs text-ocean-800 leading-relaxed">
              Some meaning in <span className="font-bold italic">{artwork.title}</span> is conveyed through color relationships.
            </p>
          </div>
        </div>

        {/* Interpretation Section */}
        <div className="bg-white rounded-t-3xl shadow-[0_-4px_30px_rgba(0,0,0,0.04)] min-h-[400px] flex-1 px-6 pt-8 pb-10 relative">
          {/* Decorative pill at top for 'pull up' feel */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-museum-200 rounded-full"></div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif text-ocean-900">Understanding Color</h2>
          </div>

          {/* Structural Interpretation Area (Abstract Grayscale Diagram) */}
          <div className="mb-6 p-6 border border-museum-200 rounded-2xl bg-museum-50 flex items-center justify-center relative overflow-hidden">
             {/* Abstract CSS Art representing structure without color */}
             <div className="w-full h-48 relative opacity-80">
                {/* Simulated structural layers */}
                <div className="absolute inset-0 flex">
                   <div 
                      className="w-1/3 h-full border-r border-museum-300"
                      style={{ 
                        backgroundImage: 'radial-gradient(circle, #78716c 1px, transparent 1px)', 
                        backgroundSize: '10px 10px' 
                      }}
                   ></div>
                   <div 
                      className="w-1/3 h-full bg-museum-200 flex items-center justify-center"
                   >
                      <div className="w-12 h-full bg-museum-300/50 blur-sm"></div>
                   </div>
                   <div 
                      className="w-1/3 h-full border-l border-museum-300"
                      style={{ 
                        backgroundImage: 'linear-gradient(45deg, #a8a29e 25%, transparent 25%, transparent 50%, #a8a29e 50%, #a8a29e 75%, transparent 75%, transparent)',
                        backgroundSize: '20px 20px'
                      }}
                   ></div>
                </div>
                {/* Annotation lines */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-terra-400/50 border-t border-dashed border-terra-400"></div>
             </div>
             <span className="absolute bottom-2 right-2 text-[10px] text-terra-600 font-bold font-mono tracking-widest uppercase bg-terra-50 px-2 py-0.5 rounded">Structural Map</span>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-sm font-bold text-ocean-900">Structural Analysis</h3>
            <p className="text-sm text-museum-600 leading-7 font-light">
              {artwork.structuralDescription}
            </p>
            <p className="text-xs text-ocean-600 italic mt-2 border-l-2 border-ocean-300 pl-3">
              This contrast was originally conveyed through color. Here, it is translated into spatial and structural information.
            </p>
          </div>

          <button 
            onClick={onCompare}
            className="w-full py-4 bg-ocean-900 text-white rounded-xl text-sm font-bold tracking-wide shadow-lg shadow-ocean-900/20 hover:bg-ocean-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Layers size={18} />
            View Comparison
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterpretationScreen;