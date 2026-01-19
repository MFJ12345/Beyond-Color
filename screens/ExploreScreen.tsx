import React from 'react';
import { MOCK_INTERPRETATIONS, MOCK_ARTWORKS } from '../constants';
import { Header } from '../components/Layout';
import { Users, Sparkles, MessageSquareQuote } from 'lucide-react';

const ExploreScreen: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full bg-museum-50">
      <Header 
        title="Explore" 
        subtitle="Community Perspectives"
      />

      <div className="flex-1 overflow-y-auto pb-24 px-6 no-scrollbar">
        {/* Guiding Message */}
        <div className="mb-8 mt-2">
           <h2 className="text-2xl font-serif text-ocean-900 leading-tight mb-2">
             Different ways of seeing <br/>
             <span className="text-terra-600 italic">together</span> shape meaning.
           </h2>
        </div>

        {/* Popular Section */}
        <div className="mb-10">
          <h3 className="text-xs font-bold text-museum-400 uppercase tracking-widest mb-4">Popular Interpretations</h3>
          <div className="space-y-4">
            {MOCK_ARTWORKS.slice(0, 2).map(artwork => (
              <div key={artwork.id} className="flex bg-white p-3 rounded-lg shadow-sm border border-museum-200 hover:border-ocean-200 transition-colors">
                 <div className="w-16 h-16 bg-museum-200 rounded overflow-hidden flex-shrink-0">
                    <img src={artwork.imageUrl} className="w-full h-full object-cover grayscale" alt="" />
                 </div>
                 <div className="ml-4 flex flex-col justify-center">
                    <h4 className="text-sm font-bold text-ocean-900">{artwork.title}</h4>
                    <div className="flex items-center mt-1.5 text-xs text-museum-500">
                       <Users size={12} className="mr-1.5 text-ocean-400" />
                       <span>24 shared interpretations</span>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feed */}
        <div>
          <h3 className="text-xs font-bold text-museum-400 uppercase tracking-widest mb-4">Latest Insights</h3>
          <div className="space-y-6">
             {MOCK_INTERPRETATIONS.map(item => {
                const artwork = MOCK_ARTWORKS.find(a => a.id === item.artworkId);
                return (
                   <div key={item.id} className="relative pl-6 border-l-2 border-museum-200 py-1 hover:border-ocean-200 transition-colors">
                      <div className={`absolute left-[-7px] top-2 w-3 h-3 rounded-full border-2 border-museum-50 ${
                          item.type === 'Structural' ? 'bg-ocean-400' :
                          item.type === 'Emotional' ? 'bg-terra-400' :
                          'bg-museum-400'
                      }`}></div>
                      <div className="bg-white p-5 rounded-xl shadow-sm border border-museum-100">
                         <div className="flex justify-between items-start mb-2">
                           <span className={`text-[10px] px-2 py-0.5 rounded border ${
                              item.type === 'Structural' ? 'bg-ocean-50 border-ocean-100 text-ocean-700' :
                              item.type === 'Emotional' ? 'bg-terra-50 border-terra-100 text-terra-700' :
                              'bg-stone-50 border-stone-200 text-stone-600'
                           } uppercase tracking-wider font-semibold`}>
                              {item.type}
                           </span>
                           <span className="text-[10px] text-museum-400">Just now</span>
                         </div>
                         <h4 className="text-xs font-bold text-ocean-900 mb-1">{artwork?.title}</h4>
                         <p className="text-sm text-museum-600 mb-3 font-light leading-relaxed">
                            "{item.content}"
                         </p>
                         <div className="flex items-center justify-between border-t border-museum-50 pt-3">
                            <span className="text-xs text-museum-500 font-medium">{item.author}</span>
                            <div className="flex items-center text-xs text-terra-600">
                               <Sparkles size={12} className="mr-1" />
                               <span>Resonates with {item.sharedCount}</span>
                            </div>
                         </div>
                      </div>
                   </div>
                )
             })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreScreen;