import React from 'react';
import { IndustryTemplate } from '@/components/Industries/IndustryTemplate';
import { 
  Zap,
  TrendingUp,
  Calendar,
  BarChart,
  MessageSquare,
  Target,
  Settings,
  Shield
} from 'lucide-react';

export function ElectricianPage() {
  const pageData = {
    industry: "Electrician",
    seo: {
      title: "Electrician Marketing Software & Automation | Venra",
      description: "Grow your electrical business with Venra's marketing automation platform. Get more service calls, automate follow-ups, and increase revenue with our proven system.",
      keywords: "electrician marketing software, electrical contractor marketing, electrical business growth, electrician advertising, electrical service marketing"
    },
    hero: {
      headline: "Power Up Your Electrical Business with Smart Marketing",
      subheadline: "Get a steady stream of qualified leads for electrical repairs, installations, and upgrades with marketing campaigns proven to work for electrical contractors.",
      imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
    },
    problems: [
      {
        problem: "Difficulty standing out in a competitive market",
        solution: "Professional marketing that highlights your expertise and reliability"
      },
      {
        problem: "Inconsistent flow of new projects and service calls",
        solution: "Targeted campaigns that generate steady leads year-round"
      },
      {
        problem: "Time wasted on unqualified leads",
        solution: "Smart pre-qualification that filters leads based on project type and budget"
      }
    ],
    benefits: [
      {
        icon: Zap,
        title: "Emergency Service Ready",
        description: "Capture urgent electrical repair requests with instant response systems"
      },
      {
        icon: TrendingUp,
        title: "Project Pipeline",
        description: "Build a consistent flow of residential and commercial projects"
      },
      {
        icon: Shield,
        title: "Trust Building",
        description: "Showcase your licenses, certifications, and safety record to build confidence"
      }
    ],
    features: [
      {
        icon: BarChart,
        title: "Smart Campaign Management",
        description: "Pre-built campaigns for electrical repairs, upgrades, and commercial services"
      },
      {
        icon: MessageSquare,
        title: "24/7 Lead Response",
        description: "AI-powered chat and SMS that qualifies leads and books appointments"
      },
      {
        icon: Target,
        title: "Local Area Targeting",
        description: "Reach property owners in your service area when they need electrical work"
      },
      {
        icon: Settings,
        title: "Service-Specific Landing Pages",
        description: "Conversion-optimized pages for residential and commercial electrical services"
      }
    ],
    faqs: [
      {
        question: "How quickly can I start getting leads for my electrical business?",
        answer: "Most electrical contractors start seeing leads within 24-48 hours of launching their first campaign. Our pre-built templates and automation tools help you get up and running quickly."
      },
      {
        question: "Can I target both residential and commercial clients?",
        answer: "Yes! Our platform allows you to run separate campaigns for residential and commercial services, each with its own targeting, messaging, and landing pages."
      },
      {
        question: "How does the lead qualification system work?",
        answer: "Our AI-powered system asks potential clients key questions about their electrical needs, timeline, and budget. This helps filter out unqualified leads before they reach you."
      },
      {
        question: "What's the typical ROI for electrical contractors using Venra?",
        answer: "Most electrical contractors see a 3-5x return on ad spend within the first 90 days. One commercial project or several residential service calls typically cover several months of using Venra."
      }
    ],
    cta: {
      headline: "Ready to Grow Your Electrical Business?",
      subheadline: "Join other successful electrical contractors using Venra to automate their marketing and book more jobs."
    }
  };

  return <IndustryTemplate {...pageData} />;
}