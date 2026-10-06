import { ShowcaseProject } from '../types';

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'luxury-fashion',
    title: 'AURA Atelier',
    client: 'Aura Joaillerie & Haute Couture',
    category: 'Luxury Fashion',
    tagline: 'Sculptural elegance meets timeless digital craftsmanship',
    description: 'A bespoke editorial showcase engineered for high-net-worth collectors. Features tactile fluid galleries, micro-staggered typography, and interactive private salon bookings.',
    accentColor: '#D4AF37', // Gold / Champagne
    theme: 'dark',
    stats: [
      { label: 'Private Inquiries', value: '+318%' },
      { label: 'Avg. Dwell Time', value: '4m 12s' },
      { label: 'Cart Value', value: '€4,850' }
    ],
    tags: ['Next.js', 'WebGL', 'Tailwind', 'Bespoke CMS'],
    features: ['3D Jewelry Turntable', 'VIP Salon Concierge', 'Curated Editorial Journal']
  },
  {
    id: 'tech-startup',
    title: 'NEXUS Core',
    client: 'Nexus Autonomous Intelligence',
    category: 'Modern Tech Startup',
    tagline: 'Next-generation cloud intelligence for enterprise engineering',
    description: 'A futuristic yet ultra-refined SaaS interface presenting distributed neural networks. Engineered with interactive live architecture maps, dark frosted glass, and real-time benchmark telemetry.',
    accentColor: '#06B6D4', // Cyan
    theme: 'dark',
    stats: [
      { label: 'Enterprise Signups', value: '14.8k' },
      { label: 'Trial Conversion', value: '28.4%' },
      { label: 'Page Load Speed', value: '0.4s' }
    ],
    tags: ['React 19', 'TypeScript', 'Motion', 'Tailwind v4'],
    features: ['Interactive Node Graph', 'Live Latency Simulator', 'Self-Serve API Playground']
  },
  {
    id: 'restaurant',
    title: 'L\'Arpège Atelier',
    client: 'L\'Arpège Paris & Tokyo',
    category: 'Restaurant',
    tagline: 'Sensory gastronomy and intimate seasonal table reservations',
    description: 'A cinematic culinary experience that immerses visitors in seasonal tasting menus, wine pairing cellar narratives, and a seamless reservation system.',
    accentColor: '#E07A5F', // Terracotta / warm copper
    theme: 'dark',
    stats: [
      { label: 'Direct Bookings', value: '94%' },
      { label: 'Menu Engagement', value: '+185%' },
      { label: 'Mobile Checkout', value: '99.4%' }
    ],
    tags: ['Vite', 'Smooth Scroll', 'OpenTable API', 'Tailwind'],
    features: ['Interactive Tasting Menu', 'Cellar Vintage Filter', 'Chef Table Concierge']
  },
  {
    id: 'portfolio',
    title: 'Elena Rostova',
    client: 'Elena Rostova Studio',
    category: 'Personal Portfolio',
    tagline: 'Architectural minimalism and monolithic spatial direction',
    description: 'A striking personal identity platform for a globally recognized architect. Large-scale structural photography, smooth horizontal project timelines, and clean unboxed typography.',
    accentColor: '#94A3B8', // Architectural slate
    theme: 'light',
    stats: [
      { label: 'Biennale Feature', value: '2026' },
      { label: 'Press Inquiries', value: '82/mo' },
      { label: 'Award Shortlists', value: '7' }
    ],
    tags: ['React', 'Editorial Grid', 'Framer Motion'],
    features: ['Monolith Project Slider', 'Spatial Blueprint Modal', 'Curated Press Archive']
  },
  {
    id: 'fitness-brand',
    title: 'KINETIC Athletics',
    client: 'Kinetic Movement Lab',
    category: 'Fitness Brand',
    tagline: 'High-performance apparel engineered for boundary pushers',
    description: 'A high-energy, dark kinetic e-commerce experience. Stark high-contrast typography, interactive garment fiber breakdowns, and lightning-fast checkout paths.',
    accentColor: '#10B981', // Kinetic Emerald
    theme: 'dark',
    stats: [
      { label: 'Checkout Speed', value: '1.2s' },
      { label: 'Return Customer Rate', value: '44%' },
      { label: 'Mobile Conversion', value: '6.2%' }
    ],
    tags: ['Shopify Headless', 'Tailwind', 'Stripe Integration'],
    features: ['Fabric Compression Visualizer', 'Dynamic Sizing Matrix', 'Express 1-Click Buy']
  },
  {
    id: 'creative-agency',
    title: 'Atelier V',
    client: 'Atelier V Spatial Film',
    category: 'Creative Agency',
    tagline: 'Provocative film direction and spatial brand architecture',
    description: 'An avant-garde showreel experience combining soundscapes, micro-interactive video playback, and asymmetric editorial layouts that won Site of the Year.',
    accentColor: '#8B5CF6', // Electric Violet
    theme: 'dark',
    stats: [
      { label: 'Industry Awards', value: '14' },
      { label: 'Client Inbound', value: '+260%' },
      { label: 'Avg Project Deal', value: '$85k' }
    ],
    tags: ['WebGL', 'Audio API', 'React 19', 'Tailwind'],
    features: ['Interactive Showreel Scrubbing', 'Case Study Flyout', 'Direct Pitch Scheduler']
  }
];

export const INITIAL_USER_PROJECTS = [
  {
    id: 'proj-1',
    name: 'AURA Joaillerie Flagship',
    category: 'Luxury Fashion',
    style: 'Minimalist Luxe',
    theme: 'dark' as const,
    accentColor: '#D4AF37',
    typography: 'elegant' as const,
    layout: 'editorial' as const,
    status: 'Published' as const,
    updatedAt: '2 hours ago',
    views: 84200,
    conversion: '4.8%'
  },
  {
    id: 'proj-2',
    name: 'Neural Cloud Platform',
    category: 'Startup SaaS',
    style: 'Modern Tech',
    theme: 'midnight' as const,
    accentColor: '#06B6D4',
    typography: 'modern' as const,
    layout: 'bento' as const,
    status: 'Published' as const,
    updatedAt: 'Yesterday',
    views: 64000,
    conversion: '12.4%'
  },
  {
    id: 'proj-3',
    name: 'Rostova Architectural Monograph',
    category: 'Portfolio',
    style: 'Editorial Monolith',
    theme: 'minimal' as const,
    accentColor: '#E2E8F0',
    typography: 'editorial' as const,
    layout: 'split' as const,
    status: 'Draft' as const,
    updatedAt: '3 days ago',
    views: 1240,
    conversion: '9.1%'
  }
];
