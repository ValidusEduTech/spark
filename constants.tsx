import { TimelineItem, PastEvent, NavLink, Testimonial } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Upcoming', href: '#upcoming' },
  { label: 'The Ecosystem', href: '#ecosystem' },
  { label: 'The Evidence', href: '#evidence' },
  { label: 'The Narrative', href: '#narrative' },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'step1',
    title: 'Curated Networking',
    description: 'No small talk. We filter for shared innovation goals, not job titles. You are matched with minds that challenge your baseline.',
    icon: 'network'
  },
  {
    id: 'step2',
    title: 'Identity Workshops',
    description: 'Identify your unique "Spark". We strip away the corporate persona to find the raw capability underneath. Move from who you are to what you are capable of.',
    icon: 'spark'
  },
  {
    id: 'step3',
    title: 'Cross-Disciplinary Labs',
    description: 'The friction point. Tech meets Design. Business meets Art. You build the result in high-pressure, low-ego environments.',
    icon: 'lab'
  }
];

export const PAST_EVENTS: PastEvent[] = [
  {
    id: 10,
    title: "Malgund Expedition",
    location: "Malgund",
    collisionType: "Where Strategy met Solitude",
    year: "Event 10",
    imageUrl: "https://picsum.photos/seed/spark10/600/400",
    quote: "Silence is the loudest strategy.",
    fullDescription: "Removed from the noise of the city, participants found that their best strategic thinking happened not in boardrooms, but in the quiet expanse of the coast. We deconstructed business models against the backdrop of the horizon."
  },
  {
    id: 11,
    title: "Pasli Heights",
    location: "Pasli",
    collisionType: "Where Industry met Nature",
    year: "Event 11",
    imageUrl: "https://picsum.photos/seed/spark11/600/400",
    quote: "The wind at the peak didn't care about our quarterly reports.",
    fullDescription: "At 3000ft, 40 strategists were stripped of their titles and forced to rely on instinct. The result was a raw, unfiltered exchange of ideas that reshaped three major startups involved in the session."
  },
  {
    id: 12,
    title: "The Intrapreneur",
    location: "Urban Loft",
    collisionType: "Where Corporate met Chaos",
    year: "Event 12",
    imageUrl: "https://picsum.photos/seed/spark12/600/400",
    quote: "Innovation is messy. We embraced the mess.",
    fullDescription: "We took corporate structure and introduced controlled chaos. Participants learned to navigate ambiguity, turning 'red tape' into a lattice for growth."
  },
  {
    id: 13,
    title: "Company Perspective",
    location: "Tech Park",
    collisionType: "Where Systems met Soul",
    year: "Event 13",
    imageUrl: "https://picsum.photos/seed/spark13/600/400",
    quote: "Code without empathy is just syntax.",
    fullDescription: "Engineers sat with psychologists. Designers sat with CFOs. We explored the human element behind every system architecture, finding the soul in the machine."
  },
  {
    id: 14,
    title: "People Perspective",
    location: "Community Hall",
    collisionType: "Where Empathy met Metrics",
    year: "Event 14",
    imageUrl: "https://picsum.photos/seed/spark14/600/400",
    quote: "Data tells you 'what'. People tell you 'why'.",
    fullDescription: "A deep dive into the qualitative side of business. We proved that metrics are lagging indicators of human sentiment, and how to influence the latter to drive the former."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "I came for the networking. I stayed because I realized I was pitching to the wrong room my entire career. SPARK realigned my trajectory.",
    author: "Sarah J.",
    role: "Product Lead @ Fintech Unicorn"
  },
  {
    id: 't2',
    quote: "The 'collision' isn't just a buzzword. Putting a structural engineer next to an abstract painter in a problem-solving scenario was genius.",
    author: "David K.",
    role: "Architect & Founder"
  },
  {
    id: 't3',
    quote: "No business cards. No elevator pitches. Just raw problem solving. It's the only event where I can drop the mask.",
    author: "Elena R.",
    role: "Venture Associate"
  }
];