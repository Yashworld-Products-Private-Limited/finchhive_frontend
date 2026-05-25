import { BentoItem } from "@/components/BentoGrid";
import { link } from "fs";
import {
  BadgeDollarSign,
  Building2,
  Camera,
  Clapperboard,
  FileText,
  Globe,
  Heart,
  Inspect,
  Layout,
  Link2,
  Megaphone,
  MessageCircleMore,
  Mic2,
  Palette,
  PenTool,
  Users,
} from "lucide-react";

export const services = [
  {
    title: "Social Media Marketing",
    desc: "Strategic social media management and growth systems for Instagram, Facebook, LinkedIn, and YouTube.",
    icon: Megaphone,
    link: "/services/social-media-marketing",
  },
  {
    title: "Reel Creation & Short-Form Content",
    desc: "High-impact cinematic reels, YouTube Shorts, and viral-ready content optimized for engagement and reach.",
    icon: Clapperboard,
    link: "/services/social-media-marketing",
  },
  {
    title: "Brand Storytelling",
    desc: "Emotion-driven visual storytelling that helps brands connect deeply with their audience and build long-term trust.",
    icon: FileText,
    link: "/services/social-media-marketing",
  },
  {
    title: "Influencer & Creator Collaborations",
    desc: "Strategic influencer partnerships and creator campaigns designed to amplify brand reach, build social proof, and drive authentic audience engagement across digital platforms.",
    icon: Users,
    link: "/services/social-media-marketing",
  },
];

export const servicesPage = [
  {
    title: "Social Media Marketing",
    desc: "Strategic social media management and growth systems for Instagram, Facebook, LinkedIn, and YouTube.",
    icon: Megaphone,
    link: "/services/social-media-marketing#social-media-marketing",
  },
  {
    title: "Reel Creation & Short-Form Content",
    desc: "High-impact cinematic reels, YouTube Shorts, and viral-ready content optimized for engagement and reach.",
    icon: Clapperboard,
    link: "/services/social-media-marketing#reel-creation",
  },
  {
    title: "Brand Storytelling",
    desc: "Emotion-driven visual storytelling that helps brands connect deeply with their audience and build long-term trust.",
    icon: FileText,
    link: "/services/social-media-marketing#brand-storytelling",
  },
  {
    title: "Influencer & Creator Collaborations",
    desc: "Strategic influencer partnerships and creator campaigns designed to amplify brand reach, build social proof, and drive authentic audience engagement across digital platforms.",
    icon: Users,
    link: "/services/social-media-marketing#influencer-collaborations",
  },
  {
    title: "Interior & Architectural Shoots",
    desc: "Luxury visual content for interior designers, architects, cafés, hospitality brands, and real estate projects.",
    icon: Building2,
    link: "/services/social-media-marketing#interior-architectural-shoots",
  },
  // {
  //   title: "Performance Marketing",
  //   desc: "Meta Ads, Google Ads, lead generation campaigns, and ROI-driven advertising strategies built to scale businesses.",
  //   icon: Globe,
  //   link: "/services/social-media-marketing",
  // },
  // {
  //   title: "Website & Digital Platform Solutions",
  //   desc: "Modern websites, landing pages, e-commerce platforms, and conversion-focused digital systems tailored for scalable growth.",
  //   icon: Layout,
  //   link: "/services/social-media-marketing",
  // },
  // {
  //   title: "Brand Strategy & Positioning",
  //   desc: "Build a strong brand identity, market positioning, and digital presence designed for long-term authority, recall, and recognition.",
  //   icon: Inspect,
  //   link: "/services/social-media-marketing",
  // },
  // {
  //   title: "Event & Wedding Coverage",
  //   desc: "Cinematic event coverage, wedding films, brand activations, conferences, and social-media-first storytelling.",
  //   icon: Camera,
  //   link: "/services/social-media-marketing",
  // },
  {
    title: "Creative Design & Visual Identity",
    desc: "Premium graphic design, visual systems, ad creatives, brand aesthetics, and digital-first creative direction.",
    icon: Palette,
    link: "/services/social-media-marketing#creative-design",
  },
  {
    title: "Logo Designing & Brand Marks",
    desc: "Crafting timeless, memorable logo identities and brand marks that define your visual identity across all platforms.",
    icon: PenTool,
    link: "/services/social-media-marketing#logo-design",
  },
  // {
  //   title: "Podcast Production",
  //   desc: "Professional multi-camera podcast shoots, long-form editing, and short-form content repurposing for creators and brands.",
  //   icon: Mic2,
  //   link: "/services/social-media-marketing",
  // },
];

export const caseStudies = [
  {
    image: "/imgs/sadashiv.png",
    title: "Sada Shive Music Festival",
    desc: "How Razor Sharp Barbershop Grew its Clientele with Digital Marketing",
    bgGlow: "from-[#c8b08a]/40 via-[#8b5e3c]/20 to-[#3b2416]/30",
    cardBg: "#d8c3a5",
    shadow: "shadow-[0_40px_120px_rgba(92,58,33,0.45)]",
    link: "/case-studies/sadashiv",
    stats: [
      { value: "30%", label: "New client bookings" },
      { value: "50%", label: "Local search" },
    ],
  },
  {
    image: "/imgs/serv2.jpg",
    title: "Kalras Kitchen",
    desc: "Boosting memberships through targeted campaigns",
    stats: [
      { value: "45%", label: "Membership growth" },
      { value: "60%", label: "Engagement rate" },
    ],
    link: "/case-studies/kalras-kitchen",
  },
  {
    image: "/imgs/serv3.avif",
    title: "Veidor Social Media Brand",
    desc: "Driving conversions with performance marketing",
    stats: [
      { value: "70%", label: "Revenue growth" },
      { value: "35%", label: "Conversion rate" },
    ],
    link: "/case-studies/veidor",
  },
  {
    image: "/imgs/serv3.avif",
    title: "Studio 9 India",
    desc: "Driving conversions with performance marketing",
    stats: [
      { value: "70%", label: "Revenue growth" },
      { value: "35%", label: "Conversion rate" },
    ],
    link: "/case-studies/studio-nine",
  },
];

export const testimonials = [
  {
    name: "Mark Chen",
    role: "M.D. Brightstar Technologies",
    text: "Choosing Celestial Solutions was one of the best decisions we made for our company. Their innovative approach and dedication exceeded expectations.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Michael Johnson",
    role: "CEO, Brightsun",
    text: "Celestial Solutions has been instrumental in transforming our online presence with data-driven strategies.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    name: "David Smith",
    role: "Founder, GrowthX",
    text: "Working with them has been a game-changer. Their commitment and expertise helped us scale rapidly.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Mark Chen",
    role: "M.D. Brightstar Technologies",
    text: "Choosing Celestial Solutions was one of the best decisions we made for our company. Their innovative approach and dedication exceeded expectations.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Michael Johnson",
    role: "CEO, Brightsun",
    text: "Celestial Solutions has been instrumental in transforming our online presence with data-driven strategies.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    name: "David Smith",
    role: "Founder, GrowthX",
    text: "Working with them has been a game-changer. Their commitment and expertise helped us scale rapidly.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Mark Chen",
    role: "M.D. Brightstar Technologies",
    text: "Choosing Celestial Solutions was one of the best decisions we made for our company. Their innovative approach and dedication exceeded expectations.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Michael Johnson",
    role: "CEO, Brightsun",
    text: "Celestial Solutions has been instrumental in transforming our online presence with data-driven strategies.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    name: "David Smith",
    role: "Founder, GrowthX",
    text: "Working with them has been a game-changer. Their commitment and expertise helped us scale rapidly.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
];

export const videos = [
  {
    name: "Magnus Hawthorne",
    role: "OWNER, BAYLEAF",
    videoId: "ysz5S6PUM-U", // sample YouTube video
  },
  {
    name: "Thaddeus Montgomery",
    role: "OWNER, GOLDGARDEN",
    videoId: "ScMzIvxBSi4",
  },
];

export const FeaturesServices = [
  {
    title: "Strategy-First Approach",
    description:
      "We build every project around research, audience understanding and scalable digital planning not random execution.",
    icon: "rocket",
  },
  {
    title: "Complete Digital Solutions",
    description:
      "From branding and content to websites, marketing, and growth systems everything works together under one ecosystem.",
    icon: "network",
  },
  {
    title: "Platform-Specific Execution",
    description:
      "Every platform has different audience behavior. We create customized strategies for Instagram, YouTube, LinkedIn, Facebook, and more.",
    icon: "focus",
  },
  {
    title: "Cinematic Content Creation",
    description:
      "We create premium-quality reels, brand films, podcasts, and visual storytelling designed to make your brand unforgettable.",
    icon: "chat",
  },
  {
    title: "Performance Driven Growth",
    description:
      "Every campaign, design, and strategy is optimized for engagement, conversions, visibility, and measurable business growth.",
    icon: "support",
  },
  {
    title: "Built for Modern Brands",
    description:
      "FINCHHIVE is designed for startups, creators, premium brands, and businesses that want long-term digital authority and scalability.",
    icon: "atom",
  },
];

export const KalraServices = [
  {
    title: "Audience-First Always",
    description:
      "We study your audience's psychology before we pick up a camera. Every decision dish, hook, format, music is backed by data on what your specific audience responds to.",
    icon: "rocket",
  },
  {
    title: "Zero Trend Dependency",
    description:
      "We don't build your brand on borrowed momentum. Trends fade. Audience understanding compounds. FINCHHIVE builds content that works because it's relevant, not because it's riding a wave.",
    icon: "network",
  },
  {
    title: "Cinematic Production Quality",
    description:
      "Premium visual quality is not optional. The way your food looks on screen is your brand. We shoot with cinematic standards so your content commands attention and respect.",
    icon: "focus",
  },
  {
    title: "Business Results, Not Vanity Metrics",
    description:
      "Views are nice. Footfall is better. We measure success by whether content drives real business outcomes new customers, increased orders, higher brand recall in your local market.",
    icon: "chat",
  },
  {
    title: "Platform Psychology Expertise",
    description:
      "Instagram, Facebook, YouTube each platform has distinct algorithms and audience behaviors. We engineer content specifically for how each platform distributes and rewards content.",
    icon: "support",
  },
  {
    title: "Strategy That Compounds",
    description:
      "We don't produce isolated pieces. We build content systems where each reel informs the next creating compounding brand equity and consistently improving performance over time.",
    icon: "atom",
  },
];

export const reels = [
  {
    name: "Social Growth",
    profile:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    video: "/imgs/reels1.mp4",
  },
  {
    name: "Brand Marketing",
    profile:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    video: "/imgs/reels2.mp4",
  },
  {
    name: "Creative Ads",
    profile:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop",
    video: "/imgs/reels3.mp4",
  },
  {
    name: "Luxury Branding",
    profile:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop",
    video: "/imgs/reels4.mp4",
  },
  {
    name: "Creative Ads",
    profile:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop",
    video: "/imgs/reels5.mp4",
  },
  {
    name: "Luxury Branding",
    profile:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop",
    video: "/imgs/reels6.mp4",
  },
];

export const logos = [
  "/imgs/logo1.png",
  "/imgs/logo2.png",
  "/imgs/logo3.png",
  "/imgs/logo4.png",
  "/imgs/logo5.png",
  "/imgs/logo6.png",
  "/imgs/logo7.png",
  "/imgs/logo8.png",
];

export const platforms = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968830.png",
    className:
      "top-[10%] left-[8%] rotate-[-12deg] shadow-[0_20px_40px_rgba(0,0,0,0.25)]",
    bg: "bg-white",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    className:
      "top-[0%] left-1/2 -translate-x-1/2 shadow-[0_20px_40px_rgba(255,0,0,0.25)]",
    bg: "bg-red-600",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg",
    className:
      "top-[12%] right-[8%] rotate-[10deg] shadow-[0_20px_40px_rgba(255,255,0,0.25)]",
    bg: "bg-[#fffc00]",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png",
    className:
      "bottom-[4%] left-[20%] rotate-[-14deg] shadow-[0_20px_40px_rgba(0,0,0,0.25)]",
    bg: "bg-black",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    className:
      "bottom-[4%] right-[18%] rotate-[14deg] shadow-[0_20px_40px_rgba(255,0,120,0.25)]",
    bg: "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600",
  },
];

export const stats = [
  {
    text: "$80K Sales",
    icon: BadgeDollarSign,
    className: "top-[13%] left-[8%] rotate-[-14deg]",
  },
  {
    text: "100k+ Followers",
    users: true,
    className: "top-[0%] left-1/2 -translate-x-1/2",
  },
  {
    text: "500k+ Likes",
    icon: Heart,
    className: "top-[13%] right-[8%] rotate-[14deg]",
  },
  {
    text: "10k Replies",
    icon: MessageCircleMore,
    className: "bottom-[13%] left-[20%] rotate-[10deg]",
  },
  {
    text: "70k Clicks",
    icon: Link2,
    className: "bottom-[13%] right-[20%] rotate-[-10deg]",
  },
];

export const cards = [
  {
    title: "Card 1",
    desc: "Experience the ultimate in luxury living.",
  },
  {
    title: "Card 2",
    desc: "Modern design meets timeless elegance.",
  },
  {
    title: "Card 3",
    desc: "Indulge in a home that redefines luxury.",
  },
  {
    title: "Card 4",
    desc: "Experience the ultimate in luxury living.",
  },
  {
    title: "Card 5",
    desc: "Modern design meets timeless elegance.",
  },
  {
    title: "Card 6",
    desc: "Indulge in a home that redefines luxury.",
  },
  {
    title: "Card 7",
    desc: "Experience the ultimate in luxury living.",
  },
  {
    title: "Card 8",
    desc: "Modern design meets timeless elegance.",
  },
  {
    title: "Card 9",
    desc: "Indulge in a home that redefines luxury.",
  },
  {
    title: "Card 10",
    desc: "Experience the ultimate in luxury living.",
  },
];

export const SocialImages: BentoItem[] = [
  {
    id: 1,
    title: "Creative Studio",
    desc: "Modern digital branding",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-2 row-span-1 md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Workspace",
    desc: "Minimal setup",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    title: "Architecture",
    desc: "Luxury spaces",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-1 row-span-2 md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    title: "Innovation",
    desc: "Future technology",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 5,
    title: "Fashion",
    desc: "Bold visual identity",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-1 row-span-2 md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    title: "Urban Design",
    desc: "Creative architecture",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    title: "Digital Agency",
    desc: "Modern production",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 8,
    title: "Interior Vision",
    desc: "Elegant lifestyle",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-2 row-span-1 md:col-span-2 md:row-span-1 ",
  },
];
