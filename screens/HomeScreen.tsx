import React from 'react';
import { ArrowRight, ScanLine, Map, ChevronRight } from 'lucide-react';
import { CURRENT_EXHIBITION, MOCK_ARTWORKS } from '../constants';
import { ScreenName, Artwork } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: ScreenName, artwork?: Artwork) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex-1 overflow-y-auto pb-24 no-scrollbar bg-museum-50">
      {/* Header Logo */}
      <div className="pt-14 pb-6 px-6 flex justify-between items-end">
        <div>
           <p className="text-xs font-bold text-terra-600 uppercase tracking-widest mb-1">Welcome to</p>
           <h1 className="text-3xl font-serif text-ocean-900">Beyond Color</h1>
        </div>
      </div>

      {/* Contextual Message */}
      <div className="px-6 mb-8">
        <p className="text-museum-600 text-sm leading-relaxed border-l-4 border-terra-400 pl-4 py-1 bg-terra-50 rounded-r-lg">
          Helping you see the <span className="font-semibold text-terra-700">structure</span> and <span className="font-semibold text-terra-700">meaning</span> behind the color.
        </p>
      </div>

      {/* Current Exhibition Card (Interactive) */}
      <div className="px-6 mb-10">
        <button 
          onClick={() => onNavigate(ScreenName.GUIDE)}
          className="w-full text-left bg-gradient-to-br from-ocean-900 to-ocean-800 p-6 rounded-2xl shadow-xl border border-ocean-700 group relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-ocean-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-terra-500/10 rounded-full blur-xl -ml-10 -mb-5"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-block px-2 py-1 bg-ocean-800/50 text-ocean-100 text-[10px] uppercase tracking-wider font-semibold rounded mb-2 border border-ocean-600/50">
                  Current Exhibition
                </span>
                <h2 className="text-2xl font-serif text-white mb-1">{CURRENT_EXHIBITION.name}</h2>
                <p className="text-ocean-200 text-sm font-light">{CURRENT_EXHIBITION.type}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs text-ocean-100 font-medium border-t border-ocean-700/50 pt-4 mt-2">
              <div className="flex items-center gap-4">
                 <span>{CURRENT_EXHIBITION.location}</span>
                 <span className="w-1 h-1 bg-ocean-400 rounded-full"></span>
                 <span>{CURRENT_EXHIBITION.date}</span>
              </div>
              <div className="flex items-center gap-1 text-terra-300 group-hover:translate-x-1 transition-transform">
                 <span className="font-bold">Enter Guide</span>
                 <ChevronRight size={14} />
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Primary Actions */}
      <div className="px-6 mb-10 grid grid-cols-2 gap-4">
        <button 
          onClick={() => onNavigate(ScreenName.INTERPRETATION, MOCK_ARTWORKS[0])}
          className="flex flex-col items-center justify-center p-6 bg-white border border-museum-200 rounded-xl text-ocean-900 shadow-sm active:scale-95 transition-all hover:border-ocean-300 hover:shadow-md"
        >
          <div className="w-12 h-12 bg-ocean-50 rounded-full flex items-center justify-center mb-3 text-ocean-600">
             <ScanLine size={24} />
          </div>
          <span className="text-sm font-bold text-ocean-900">Scan & Interpret</span>
        </button>

        <button 
          onClick={() => onNavigate(ScreenName.GUIDE)}
          className="flex flex-col items-center justify-center p-6 bg-white border border-museum-200 rounded-xl text-ocean-900 shadow-sm active:scale-95 transition-all hover:border-terra-300 hover:shadow-md"
        >
          <div className="w-12 h-12 bg-terra-50 rounded-full flex items-center justify-center mb-3 text-terra-600">
             <Map size={24} />
          </div>
          <span className="text-sm font-bold text-ocean-900">Exhibition Map</span>
        </button>
      </div>

      {/* Recommendations */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-ocean-900 uppercase tracking-wide">Featured Artworks</h3>
          <button className="text-xs text-terra-600 font-semibold flex items-center hover:text-terra-800">
            View List <ArrowRight size={12} className="ml-1" />
          </button>
        </div>
        
        <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 no-scrollbar">
          {MOCK_ARTWORKS.map((artwork) => (
            <div 
              key={artwork.id} 
              onClick={() => onNavigate(ScreenName.INTERPRETATION, artwork)}
              className="min-w-[180px] w-[180px] bg-white rounded-xl overflow-hidden border border-museum-200 shadow-sm cursor-pointer group hover:shadow-md transition-all"
            >
              <div className="h-32 bg-museum-200 relative overflow-hidden">
                <img src={artwork.imageUrl} alt={artwork.title} className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-ocean-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-bold text-ocean-900 truncate mb-1">{artwork.title}</h4>
                <p className="text-xs text-museum-500 truncate">{artwork.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;