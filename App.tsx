import React, { useState } from 'react';
import { MobileContainer } from './components/Layout';
import Navigation from './components/Navigation';
import HomeScreen from './screens/HomeScreen';
import InterpretationScreen from './screens/InterpretationScreen';
import ComparisonScreen from './screens/ComparisonScreen';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExhibitionGuideScreen from './screens/ExhibitionGuideScreen';
import { ScreenName, Artwork } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>(ScreenName.HOME);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | undefined>(undefined);

  // Navigation handlers
  const navigateTo = (screen: ScreenName, artwork?: Artwork) => {
    if (artwork) {
      setSelectedArtwork(artwork);
    }
    setCurrentScreen(screen);
    // Reset scroll to top when changing screens
    window.scrollTo(0,0);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case ScreenName.HOME:
        return <HomeScreen onNavigate={navigateTo} />;
      case ScreenName.GUIDE:
        return <ExhibitionGuideScreen onNavigate={navigateTo} onBack={() => navigateTo(ScreenName.HOME)} />;
      case ScreenName.INTERPRETATION:
        return selectedArtwork ? (
          <InterpretationScreen 
            artwork={selectedArtwork} 
            onBack={() => navigateTo(ScreenName.HOME)} 
            onCompare={() => navigateTo(ScreenName.COMPARISON)}
          />
        ) : <HomeScreen onNavigate={navigateTo} />;
      case ScreenName.COMPARISON:
        return selectedArtwork ? (
          <ComparisonScreen 
            artwork={selectedArtwork} 
            onBack={() => navigateTo(ScreenName.INTERPRETATION)}
          />
        ) : <HomeScreen onNavigate={navigateTo} />;
      case ScreenName.EXPLORE:
        return <ExploreScreen />;
      case ScreenName.PROFILE:
        return <ProfileScreen />;
      default:
        return <HomeScreen onNavigate={navigateTo} />;
    }
  };

  return (
    <MobileContainer>
      {renderScreen()}
      
      {/* 
        Show Navigation on primary tabs. 
        Hide it on deep dive screens to focus user.
      */}
      {(currentScreen === ScreenName.HOME || 
        currentScreen === ScreenName.EXPLORE || 
        currentScreen === ScreenName.PROFILE) && (
        <Navigation 
          currentScreen={currentScreen} 
          onNavigate={(screen) => navigateTo(screen)} 
        />
      )}
    </MobileContainer>
  );
};

export default App;