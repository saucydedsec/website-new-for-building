export type ThemeType = 'light' | 'dark' | 'midnight' | 'minimal' | 'luxury' | 'vibrant';
export type TypographyType = 'modern' | 'elegant' | 'minimal' | 'bold' | 'editorial';
export type LayoutType = 'minimal' | 'split' | 'bento' | 'fullwidth' | 'editorial';
export type AnimationType = 'subtle' | 'smooth' | 'dynamic' | 'cinematic';

export interface CustomizerState {
  theme: ThemeType;
  accentColor: string;
  typography: TypographyType;
  layout: LayoutType;
  animation: AnimationType;
  brandName: string;
  tagline: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  client: string;
  category: 'Luxury Fashion' | 'Modern Tech Startup' | 'Restaurant' | 'Personal Portfolio' | 'Fitness Brand' | 'Creative Agency';
  tagline: string;
  description: string;
  accentColor: string;
  theme: 'dark' | 'light' | 'editorial';
  stats: { label: string; value: string }[];
  tags: string[];
  features: string[];
}

export interface UserProject {
  id: string;
  name: string;
  category: string;
  style: string;
  theme: ThemeType;
  accentColor: string;
  typography: TypographyType;
  layout: LayoutType;
  status: 'Published' | 'Draft' | 'Reviewing';
  updatedAt: string;
  views: number;
  conversion: string;
  previewUrl?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  joinedDate: string;
}

export interface BuilderElementConfig {
  id: string;
  type: 'hero' | 'headline' | 'subheading' | 'button' | 'card' | 'grid' | 'navbar';
  label: string;
  text?: string;
  subtext?: string;
  fontSize: number;
  fontWeight: string;
  textColor: string;
  bgColor: string;
  borderRadius: number;
  shadow: 'none' | 'subtle' | 'medium' | 'glow';
  padding: number;
  animation: 'none' | 'fade-up' | 'scale' | 'slide-left';
}
