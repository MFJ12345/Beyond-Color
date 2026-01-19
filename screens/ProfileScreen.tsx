import React from 'react';
import { Settings, Clock, Bookmark, Info, ChevronRight } from 'lucide-react';
import { Header } from '../components/Layout';

const ProfileScreen: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full bg-museum-50">
      <Header 
        title="My Trace"
      />

      <div className="flex-1 overflow-y-auto pb-24 px-6 pt-4 no-scrollbar">
         {/* Introduction */}
         <div className="mb-8">
            <p className="text-sm text-museum-500">
               Your personal viewing history and structural preferences. 
               This data is stored locally on your device.
            </p>
         </div>

         {/* Section: History */}
         <div className="mb-8">
            <h3 className="text-xs font-bold text-museum-400 uppercase tracking-widest mb-3 pl-2">Recently Viewed</h3>
            <div className="bg-white rounded-xl shadow-sm border border-museum-200 overflow-hidden">
               {[
                  { label: 'Chromatic Silence No. 5', sub: 'Today, 10:23 AM' },
                  { label: 'Echoes of Red', sub: 'Yesterday' },
                  { label: 'Untitled (Green)', sub: 'Oct 24' }
               ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border-b border-museum-100 last:border-0 hover:bg-ocean-50 transition-colors cursor-pointer group">
                     <div className="flex items-center gap-3">
                        <div className="bg-museum-100 p-2 rounded-full text-museum-500 group-hover:bg-ocean-100 group-hover:text-ocean-600 transition-colors">
                           <Clock size={16} />
                        </div>
                        <div>
                           <div className="text-sm font-bold text-ocean-900">{item.label}</div>
                           <div className="text-[10px] text-museum-400">{item.sub}</div>
                        </div>
                     </div>
                     <ChevronRight size={16} className="text-museum-300 group-hover:text-ocean-400" />
                  </div>
               ))}
            </div>
         </div>

         {/* Section: Preferences */}
         <div className="mb-8">
            <h3 className="text-xs font-bold text-museum-400 uppercase tracking-widest mb-3 pl-2">Preferences</h3>
            <div className="bg-white rounded-xl shadow-sm border border-museum-200 overflow-hidden">
               <div className="p-4 border-b border-museum-100 flex justify-between items-center hover:bg-ocean-50/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                     <div className="bg-museum-100 p-2 rounded-full text-museum-500">
                        <Settings size={16} />
                     </div>
                     <div className="text-sm font-bold text-ocean-900">Default Mode</div>
                  </div>
                  <span className="text-xs text-ocean-700 font-bold bg-ocean-100 px-2 py-1 rounded">Structural</span>
               </div>
               <div className="p-4 flex justify-between items-center hover:bg-ocean-50/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                     <div className="bg-museum-100 p-2 rounded-full text-museum-500">
                        <Bookmark size={16} />
                     </div>
                     <div className="text-sm font-bold text-ocean-900">Saved Interpretations</div>
                  </div>
                  <span className="text-xs text-museum-500 font-medium">12 Items</span>
               </div>
            </div>
         </div>

         {/* Section: About */}
         <div className="mb-8">
             <div className="bg-museum-200/50 rounded-xl p-6 text-center border border-museum-200">
                <Info size={24} className="mx-auto text-ocean-400 mb-2" />
                <h4 className="text-sm font-bold text-ocean-900 mb-1">About Beyond Color</h4>
                <p className="text-xs text-museum-500 leading-relaxed mb-4">
                   Version 1.0.2<br/>
                   Designed for inclusivity in digital art spaces.
                </p>
                <button className="text-xs font-bold text-terra-600 underline decoration-terra-300 hover:text-terra-800">
                   Privacy Policy
                </button>
             </div>
         </div>
      </div>
    </div>
  );
};

export default ProfileScreen;