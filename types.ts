export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  icon: 'network' | 'spark' | 'lab';
}

export interface PastEvent {
  id: number;
  title: string;
  location: string;
  collisionType: string; // e.g., "Industry met Nature"
  imageUrl: string;
  year: string;
  quote?: string;
  fullDescription?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}