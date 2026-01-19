import React from 'react';
import { Home, Compass, User } from 'lucide-react';
import { ScreenName } from '../types';

interface NavigationProps {
  currentScreen: ScreenName;
  onNavigate: (screen: ScreenName) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    { name: ScreenName.HOME, icon: Home, label: 'Home' },
    { name: ScreenName.EXPLORE, icon: Compass, label: 'Explore' },
    { name: ScreenName.PROFILE, icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-museum-200 pb-safe pt-2 px-6 h-20 flex justify-between items-start z-50 max-w-md mx-auto shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      {navItems.map((item) => {
        const isActive = currentScreen === item.name || 
                        (item.name === ScreenName.HOME && (currentScreen === ScreenName.INTERPRETATION || currentScreen === ScreenName.COMPARISON || currentScreen === ScreenName.GUIDE));
        
        return (
          <button
            key={item.name}
            onClick={() => onNavigate(item.name)}
            className="flex flex-col items-center justify-center w-16 group"
          >
            <div className={`
              mb-1 transition-all duration-300 transform
              ${isActive ? 'text-ocean-700 scale-110' : 'text-museum-400 group-hover:text-ocean-500'}
            `}>
              <item.icon size={26} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span className={`text-[10px] font-medium tracking-wide ${isActive ? 'text-ocean-900' : 'text-museum-400'}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Navigation;