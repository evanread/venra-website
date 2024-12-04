import React from 'react';
import { IndustryTemplate } from '@/components/Industries/IndustryTemplate';
import { 
  Home,
  TrendingUp,
  Shield,
  BarChart,
  MessageSquare,
  Target,
  Settings,
  Umbrella
} from 'lucide-react';

export function RoofingPage() {
  const pageData = {
    industry: "Roofing",
    seo: {
      title: "Roofing Marketing Software & Automation | Venra",
      description: "Grow your roofing business with Venra's marketing automation platform. Get more roofing projects, automate follow-ups, and increase revenue with our proven system.",
      keywords: "roofing marketing software, roofing lead generation, roofing contractor marketing, roofing business growth, roofing company advertising"
    },
    hero: {
      headline: "Book More Roofing Projects with Smart Marketing",
      subheadline: "Get a steady stream of qualified leads for roof replacements, repairs, and inspections with marketing campaigns proven to work for roofing contractors.",
      imageUrl: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=1200&q=80"
    },
    problems: [
      {
        problem: "High competition for roofing leads driving up costs",
        solution: "Targeted campaigns that reach homeowners at the right time with the right message"
      },
      {
        problem: "Difficulty converting inspection requests into full projects",
        solution: "Automated follow-up sequences that nurture leads and showcase your expertise"
      },
      {
        problem: "Seasonal demand affecting business stability",
        solution: "Year-round marketing strategies that keep your pipeline full in every season"
      }
    ],
    benefits: [
      {
        icon: Home,
        title: "Project Pipeline",
        description: "Build a consistent flow of roofing projects throughout the year"
      },
      {
        icon: Shield,
        title: "Trust Building",
        description: "Showcase your warranties, certifications, and quality workmanship"
      },
      {
        icon: Umbrella,
        title: "Emergency Ready",
        description: "Capture urgent repair requests with instant response systems"
      }
    ],
    features: [
      {
        icon: BarChart,
        title: "Smart Campaign Management",
        description: "Pre-built campaigns for roof replacements, repairs, and storm damage"
      },
      {
        icon: MessageSquare,
        title: "24/7 Lead Response",
        description: "AI-powered chat and SMS that qualifies leads and schedules inspections"
      },
      {
        icon: Target,
        title: "Local Area Targeting",
        description: "Reach homeowners in your service area when they need roofing services"
      },
      {
        icon: Settings,
        title: "Service-Specific Landing Pages",
        description: "Conversion-optimized pages for different roofing services and materials"
      }
    ],
    faqs: [
      {
        question: "How quickly can I start getting leads for my roofing business?",
        answer: "Most roofing companies start seeing leads within 24-48 hours of launching their first campaign. Our pre-built templates and automation tools help you get up and running quickly."
      },
      {
        question: "How does the inspection scheduling system work?",
        answer: "When potential customers request an inspection, our AI-powered system automatically collects key information and helps schedule the inspection at a convenient time. This streamlines your process and improves conversion rates."
      },
      {
        question: "Can I target specific types of roofing projects?",
        answer: "Yes! Our platform allows you to create targeted campaigns for different services like replacements, repairs, or specific roofing materials. Each campaign can have its own budget, targeting, and messaging."
      },
      {
        question: "What's the typical ROI for roofing companies using Venra?",
        answer: "Most roofing companies see a 3-5x return on ad spend within the first 90 days. One roof replacement project typically covers several months of using Venra."
      }
    ],
    cta: {
      headline: "Ready to Grow Your Roofing Business?",
      subheadline: "Join other successful roofing contractors using Venra to automate their marketing and win more projects."
    }
  };

  return <IndustryTemplate {...pageData} />;
}