import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Artwork } from '../types';
import { Header } from '../components/Layout';

interface ComparisonScreenProps {
  artwork: Artwork;
  onBack: () => void;
}

const ComparisonScreen: React.FC<ComparisonScreenProps> = ({ artwork, onBack }) => {
  const [viewMode, setViewMode] = useState<'original' | 'beyond'>('beyond');

  return (
    <div className="flex-1 flex flex-col h-full bg-museum-50">
      <Header 
        leftAction={
          <button onClick={onBack} className="p-2 -ml-2 text-ocean-900 hover:text-terra-600 transition-colors">
            <ArrowLeft size={24} />
          </button>
        }
        title="Comparison"
      />

      <div className="flex-1 overflow-y-auto pb-6 px-6 no-scrollbar">
        {/* Toggle Control */}
        <div className="flex p-1 bg-museum-200 rounded-xl mb-8 relative">
           <button 
              onClick={() => setViewMode('original')}
              className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all duration-300 ${viewMode === 'original' ? 'bg-white text-ocean-900 shadow-sm' : 'text-museum-500 hover:text-ocean-700'}`}
           >
              Original View
           </button>
           <button 
              onClick={() => setViewMode('beyond')}
              className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all duration-300 ${viewMode === 'beyond' ? 'bg-white text-ocean-900 shadow-sm' : 'text-museum-500 hover:text-ocean-700'}`}
           >
              Beyond Color View
           </button>
        </div>

        {/* Comparison Visual */}
        <div className="relative aspect-[4/5] bg-white rounded-xl overflow-hidden shadow-lg border border-museum-200 mb-6">
           <img 
              src={artwork.imageUrl} 
              alt={artwork.title} 
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${viewMode === 'beyond' ? 'grayscale opacity-40 blur-[1px]' : ''}`} 
            />
            
            {/* Structural Overlay (Visible only in Beyond Mode) */}
            <div className={`absolute inset-0 transition-opacity duration-700 ${viewMode === 'beyond' ? 'opacity-100' : 'opacity-0'}`}>
                {/* This mimics the analysis layer */}
                <div className="w-full h-full flex flex-col">
                   <div className="flex-1 border-b border-ocean-900/10 bg-ocean-900/5"></div>
                   <div className="flex-[2] border-b border-ocean-900/10 flex">
                      <div className="flex-1 bg-ocean-900/10 pattern-dots"></div>
                      <div className="flex-1 bg-transparent"></div>
                   </div>
                   <div className="flex-1 bg-ocean-900/20 pattern-lines"></div>
                </div>
                
                {/* Labels */}
                <div className="absolute top-10 left-4 bg-ocean-900/90 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur font-bold tracking-wide border border-ocean-700 shadow-sm">
                  High Contrast Zone
                </div>
                <div className="absolute bottom-20 right-4 bg-terra-600/90 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur font-bold tracking-wide border border-terra-500 shadow-sm">
                  Structural Density
                </div>
            </div>

            {/* Status Icon */}
            <div className="absolute top-4 right-4 text-ocean-600 bg-white/90 p-1.5 rounded-full backdrop-blur shadow-sm">
               {viewMode === 'original' ? <Eye size={16} /> : <EyeOff size={16} />}
            </div>
        </div>

        {/* Reflective Caption */}
        <div className="bg-white p-5 rounded-xl border-l-4 border-terra-400 shadow-sm">
           <p className="text-sm text-museum-600 italic leading-relaxed">
             "When meaning is conveyed only through color, some viewers may miss key relationships. The structural view exposes the weight and balance intended by the artist."
           </p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonScreen;