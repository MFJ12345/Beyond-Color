import React, { useState } from 'react';
import { ArrowLeft, MapPin, ChevronRight, Layers } from 'lucide-react';
import { ScreenName, Artwork, Zone } from '../types';
import { Header } from '../components/Layout';
import { MOCK_ZONES, MOCK_ARTWORKS } from '../constants';

interface ExhibitionGuideScreenProps {
  onNavigate: (screen: ScreenName, artwork?: Artwork) => void;
  onBack: () => void;
}

const ExhibitionGuideScreen: React.FC<ExhibitionGuideScreenProps> = ({ onNavigate, onBack }) => {
  const [activeTab, setActiveTab] = useState<'ZONES' | 'MAP'>('ZONES');
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);

  const displayedArtworks = selectedZone 
    ? MOCK_ARTWORKS.filter(a => a.zoneId === selectedZone.id)
    : MOCK_ARTWORKS;

  return (
    <div className="flex-1 flex flex-col h-full bg-museum-50">
      <Header 
        leftAction={
          <button onClick={onBack} className="p-2 -ml-2 text-ocean-900 hover:text-terra-600 transition-colors">
            <ArrowLeft size={24} />
          </button>
        }
        title="Exhibition Guide"
      />

      {/* Tabs */}
      <div className="px-6 mb-6">
        <div className="flex p-1 bg-museum-200 rounded-xl">
          <button 
            onClick={() => setActiveTab('ZONES')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all duration-300 ${activeTab === 'ZONES' ? 'bg-white text-ocean-900 shadow-sm' : 'text-museum-500 hover:text-ocean-700'}`}
          >
            Zone List
          </button>
          <button 
            onClick={() => setActiveTab('MAP')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all duration-300 ${activeTab === 'MAP' ? 'bg-white text-ocean-900 shadow-sm' : 'text-museum-500 hover:text-ocean-700'}`}
          >
            Interactive Map
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 px-6 no-scrollbar">
        
        {activeTab === 'ZONES' && (
          <div className="space-y-6">
            <div className="space-y-3">
              {MOCK_ZONES.map(zone => {
                 const isSelected = selectedZone?.id === zone.id;
                 return (
                  <button 
                    key={zone.id}
                    onClick={() => setSelectedZone(isSelected ? null : zone)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden
                      ${isSelected ? 'bg-white border-ocean-300 shadow-md ring-1 ring-ocean-100' : 'bg-white border-museum-200 shadow-sm hover:border-ocean-200'}
                    `}
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${zone.id === 'A' ? 'bg-ocean-800' : zone.id === 'B' ? 'bg-terra-500' : 'bg-green-600'}`}></div>
                    <div className="pl-3">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className={`font-serif font-medium ${isSelected ? 'text-ocean-900' : 'text-museum-700'}`}>{zone.name}</h3>
                        <ChevronRight size={16} className={`transition-transform duration-300 ${isSelected ? 'rotate-90 text-ocean-500' : 'text-museum-300'}`} />
                      </div>
                      <p className="text-xs text-museum-500 leading-relaxed pr-4">{zone.description}</p>
                    </div>
                  </button>
                 );
              })}
            </div>

            {/* Artworks List Header */}
            <div className="pt-4">
               <h3 className="text-xs font-bold text-museum-400 uppercase tracking-widest mb-4">
                 {selectedZone ? `Artworks in ${selectedZone.name.split(':')[0]}` : 'All Artworks'}
               </h3>
               
               <div className="grid grid-cols-1 gap-4">
                 {displayedArtworks.map(artwork => (
                    <div 
                      key={artwork.id}
                      onClick={() => onNavigate(ScreenName.INTERPRETATION, artwork)} 
                      className="flex bg-white p-3 rounded-lg shadow-sm border border-museum-100 hover:shadow-md transition-shadow cursor-pointer group"
                    >
                       <div className="w-20 h-20 bg-museum-200 rounded-lg overflow-hidden flex-shrink-0 relative">
                          <img src={artwork.imageUrl} className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-110 transition-transform duration-500" alt="" />
                          <div className="absolute bottom-1 right-1 bg-black/60 backdrop-blur rounded p-1">
                             <Layers size={10} className="text-white" />
                          </div>
                       </div>
                       <div className="ml-4 flex flex-col justify-center">
                          <h4 className="text-sm font-bold text-ocean-900 mb-1">{artwork.title}</h4>
                          <p className="text-xs text-museum-500 mb-2">{artwork.artist}</p>
                          <div className="flex items-center text-[10px] text-terra-600 font-medium bg-terra-50 self-start px-2 py-0.5 rounded">
                             <MapPin size={10} className="mr-1" />
                             {MOCK_ZONES.find(z => z.id === artwork.zoneId)?.name.split(':')[0] || 'Gallery'}
                          </div>
                       </div>
                    </div>
                 ))}
               </div>
            </div>
          </div>
        )}

        {activeTab === 'MAP' && (
          <div className="h-full flex flex-col">
            <div className="bg-white rounded-xl shadow-inner border border-museum-200 p-6 flex-1 relative overflow-hidden mb-6 min-h-[400px]">
               {/* Simplified Abstract CSS Map */}
               <div className="absolute inset-0 bg-museum-50 opacity-50" style={{backgroundImage: 'radial-gradient(#d6d3d1 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
               
               {/* Zone A */}
               <div 
                  onClick={() => setSelectedZone(MOCK_ZONES[0])}
                  className={`absolute top-10 left-6 right-1/2 height-40 bg-ocean-100/80 border-2 border-ocean-800 rounded-tl-3xl rounded-br-3xl p-4 cursor-pointer hover:bg-ocean-200 transition-colors ${selectedZone?.id === 'A' ? 'ring-4 ring-ocean-200' : ''}`}
                  style={{height: '180px'}}
               >
                  <span className="font-bold text-ocean-900 text-xs bg-white/80 px-2 py-1 rounded">Zone A</span>
               </div>

               {/* Zone B */}
               <div 
                  onClick={() => setSelectedZone(MOCK_ZONES[1])}
                  className={`absolute top-10 right-6 left-1/2 ml-4 bg-terra-100/80 border-2 border-terra-500 rounded-tr-3xl rounded-bl-3xl p-4 cursor-pointer hover:bg-terra-200 transition-colors ${selectedZone?.id === 'B' ? 'ring-4 ring-terra-200' : ''}`}
                  style={{height: '240px'}}
               >
                  <span className="font-bold text-terra-900 text-xs bg-white/80 px-2 py-1 rounded">Zone B</span>
               </div>

               {/* Zone C */}
               <div 
                  onClick={() => setSelectedZone(MOCK_ZONES[2])}
                  className={`absolute top-[210px] left-6 width-40 bg-emerald-100/80 border-2 border-emerald-600 rounded-xl p-4 cursor-pointer hover:bg-emerald-200 transition-colors ${selectedZone?.id === 'C' ? 'ring-4 ring-emerald-200' : ''}`}
                  style={{width: '45%', height: '120px'}}
               >
                  <span className="font-bold text-emerald-900 text-xs bg-white/80 px-2 py-1 rounded">Zone C</span>
               </div>

               {/* You are here marker */}
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
                  <MapPin size={24} className="text-ocean-900 fill-current" />
                  <span className="text-[10px] font-bold bg-white px-2 rounded shadow text-ocean-900 mt-1">Entrance</span>
               </div>
            </div>

            {selectedZone && (
              <div className="bg-white p-4 rounded-xl shadow-lg border-l-4" style={{borderColor: selectedZone.colorCode}}>
                 <h4 className="font-bold text-sm text-museum-900">{selectedZone.name}</h4>
                 <p className="text-xs text-museum-500 mt-1">{selectedZone.description}</p>
                 <button 
                    onClick={() => setActiveTab('ZONES')}
                    className="mt-3 text-xs font-bold text-ocean-600 underline"
                 >
                    View Artworks in this Zone
                 </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default ExhibitionGuideScreen;