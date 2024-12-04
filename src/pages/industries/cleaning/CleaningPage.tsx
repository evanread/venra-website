import React from 'react';
import { IndustryTemplate } from '@/components/Industries/IndustryTemplate';
import { 
  Sparkles,
  TrendingUp,
  Calendar,
  BarChart,
  MessageSquare,
  Target,
  Settings,
  Star
} from 'lucide-react';

export function CleaningPage() {
  const pageData = {
    industry: "Cleaning",
    seo: {
      title: "Cleaning Service Marketing Software & Automation | Venra",
      description: "Grow your cleaning business with Venra's marketing automation platform. Get more cleaning contracts, automate follow-ups, and increase revenue with our proven system.",
      keywords: "cleaning service marketing, cleaning business software, cleaning company marketing, cleaning service advertising, maid service marketing"
    },
    hero: {
      headline: "Book More Cleaning Contracts with Smart Marketing",
      subheadline: "Get a steady stream of qualified leads for residential and commercial cleaning services with marketing campaigns proven to work for cleaning companies.",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
    },
    problems: [
      {
        problem: "High customer turnover making it hard to grow consistently",
        solution: "Automated retention campaigns that convert one-time cleanings into recurring contracts"
      },
      {
        problem: "Difficulty competing with low-price cleaning services",
        solution: "Marketing that emphasizes your quality, reliability, and professional standards"
      },
      {
        problem: "Wasting time on leads that aren't a good fit",
        solution: "Smart lead qualification that filters prospects based on service needs and budget"
      }
    ],
    benefits: [
      {
        icon: Sparkles,
        title: "Quality First",
        description: "Attract clients who value professional cleaning services and are willing to pay for quality"
      },
      {
        icon: TrendingUp,
        title: "Recurring Revenue",
        description: "Build a stable base of weekly and monthly cleaning contracts"
      },
      {
        icon: Star,
        title: "Brand Building",
        description: "Stand out from competitors with professional marketing that builds trust"
      }
    ],
    features: [
      {
        icon: BarChart,
        title: "Smart Campaign Management",
        description: "Pre-built campaigns for residential cleaning, commercial services, and specialty cleaning"
      },
      {
        icon: MessageSquare,
        title: "24/7 Lead Response",
        description: "AI-powered chat and SMS that qualifies leads and schedules cleaning estimates"
      },
      {
        icon: Target,
        title: "Local Area Targeting",
        description: "Reach homeowners and businesses in your service area looking for quality cleaning"
      },
      {
        icon: Settings,
        title: "Service-Specific Landing Pages",
        description: "Conversion-optimized pages for different cleaning services and packages"
      }
    ],
    faqs: [
      {
        question: "How quickly can I start getting leads for my cleaning business?",
        answer: "Most cleaning companies start seeing leads within 24-48 hours of launching their first campaign. Our pre-built templates and automation tools help you get up and running quickly."
      },
      {
        question: "Can I promote both residential and commercial cleaning?",
        answer: "Yes! Our platform allows you to run separate campaigns for residential and commercial cleaning services, each with its own targeting, messaging, and pricing strategies."
      },
      {
        question: "How does the recurring contract system work?",
        answer: "After a successful first cleaning, our system automatically follows up with clients to offer recurring service packages. It handles scheduling, reminders, and feedback collection to maintain long-term relationships."
      },
      {
        question: "What's the typical ROI for cleaning companies using Venra?",
        answer: "Most cleaning companies see a 3-5x return on ad spend within the first 90 days. One recurring contract typically covers several months of using Venra."
      }
    ],
    cta: {
      headline: "Ready to Grow Your Cleaning Business?",
      subheadline: "Join other successful cleaning companies using Venra to automate their marketing and win more contracts."
    }
  };

  return <IndustryTemplate {...pageData} />;
}