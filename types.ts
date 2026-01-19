export enum ScreenName {
  HOME = 'HOME',
  INTERPRETATION = 'INTERPRETATION',
  COMPARISON = 'COMPARISON',
  EXPLORE = 'EXPLORE',
  PROFILE = 'PROFILE',
  GUIDE = 'GUIDE',
}

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: string;
  imageUrl: string;
  description: string;
  structuralDescription: string;
  zoneId?: string; // Link artwork to a zone
}

export interface Zone {
  id: string;
  name: string;
  description: string;
  colorCode: string; // Hex code for map visualization
}

export interface Interpretation {
  id: string;
  artworkId: string;
  author: string;
  type: 'Structural' | 'Emotional' | 'Spatial';
  content: string;
  sharedCount: number;
}

export interface UserPreferences {
  defaultMode: 'Structural' | 'Descriptive';
  highContrast: boolean;
}