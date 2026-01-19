import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const MobileContainer: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-stone-100 flex justify-center">
      <div className="w-full max-w-md bg-museum-50 min-h-screen shadow-2xl relative overflow-hidden flex flex-col font-sans text-museum-900">
        {children}
      </div>
    </div>
  );
};

export const Header: React.FC<{ title?: string; subtitle?: string; leftAction?: React.ReactNode; rightAction?: React.ReactNode; transparent?: boolean }> = ({ title, subtitle, leftAction, rightAction, transparent = false }) => {
  return (
    <header className={`px-6 pt-12 pb-4 ${transparent ? 'bg-transparent' : 'bg-museum-50/90'} backdrop-blur-sm sticky top-0 z-40 flex items-center justify-between transition-colors duration-300`}>
      <div className="flex items-center gap-4">
        {leftAction}
        <div>
          {title && <h1 className="text-xl font-serif text-ocean-900 tracking-tight">{title}</h1>}
          {subtitle && <p className="text-xs text-terra-600 font-bold uppercase tracking-wider mt-0.5">{subtitle}</p>}
        </div>
      </div>
      <div>
        {rightAction}
      </div>
    </header>
  );
};