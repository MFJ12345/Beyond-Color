import { Artwork, Interpretation, Zone } from './types';

export const CURRENT_EXHIBITION = {
  name: "Luminous Structures",
  type: "Digital Art / Immersive",
  location: "Gallery 4, West Wing",
  date: "Oct 12 - Dec 15",
  description: "A journey through light, shadow, and the architecture of color."
};

export const MOCK_ZONES: Zone[] = [
  {
    id: 'A',
    name: 'Zone A: The Void',
    description: 'Exploration of absence and presence through monochrome light.',
    colorCode: '#0c4a6e' // Navy
  },
  {
    id: 'B',
    name: 'Zone B: Prism',
    description: 'Refraction and the breaking of light into constituent parts.',
    colorCode: '#ea580c' // Orange
  },
  {
    id: 'C',
    name: 'Zone C: Resonance',
    description: 'Where sound and color frequencies intersect.',
    colorCode: '#059669' // Green (Accessible Teal)
  }
];

export const MOCK_ARTWORKS: Artwork[] = [
  {
    id: '1',
    title: 'Chromatic Silence No. 5',
    artist: 'Elena Vasko',
    year: '2023',
    imageUrl: 'https://picsum.photos/400/500?grayscale', 
    description: 'An exploration of deep blue and vibrant orange contrasts representing urban isolation.',
    structuralDescription: 'The artwork consists of three vertical bands. The central band presents a high-density texture compared to the smooth, expansive outer regions. This textural difference replaces the original hue contrast.',
    zoneId: 'A'
  },
  {
    id: '2',
    title: 'Echoes of Red',
    artist: 'Kenji Sato',
    year: '2022',
    imageUrl: 'https://picsum.photos/400/400?blur=2',
    description: 'A study in subtle red gradients that challenge visual perception.',
    structuralDescription: 'A radial gradient structure where density decreases from the center outward. The core suggests weight and proximity, while the edges dissolve into open space.',
    zoneId: 'B'
  },
  {
    id: '3',
    title: 'Untitled (Green)',
    artist: 'Maria Rodriguez',
    year: '2024',
    imageUrl: 'https://picsum.photos/400/600',
    description: 'Digital interference patterns in varying shades of emerald.',
    structuralDescription: 'Interlocking geometric planes create a sense of depth. Foreground elements are marked by sharp, high-contrast edges, while background elements fade into soft noise.',
    zoneId: 'B'
  },
  {
    id: '4',
    title: 'Sonic Horizon',
    artist: 'Liam O\'Connor',
    year: '2024',
    imageUrl: 'https://picsum.photos/400/300',
    description: 'Visualizing sound waves as color landscapes.',
    structuralDescription: 'A horizontal oscillation line divides the canvas. Above is chaotic, high-frequency stippling; below is calm, rhythmic undulating lines.',
    zoneId: 'C'
  }
];

export const MOCK_INTERPRETATIONS: Interpretation[] = [
  {
    id: '101',
    artworkId: '1',
    author: 'Curator Team',
    type: 'Structural',
    content: 'Focus on the vertical tension between the central pillar and the void.',
    sharedCount: 45
  },
  {
    id: '102',
    artworkId: '1',
    author: 'Visitor #892',
    type: 'Emotional',
    content: 'The central density feels like a crowded room, while the sides feel like silence.',
    sharedCount: 12
  },
  {
    id: '103',
    artworkId: '2',
    author: 'Visitor #334',
    type: 'Spatial',
    content: 'It feels like looking down a tunnel.',
    sharedCount: 28
  }
];