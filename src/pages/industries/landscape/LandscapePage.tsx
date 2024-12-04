import React from 'react';
import { IndustryTemplate } from '@/components/Industries/IndustryTemplate';
import { 
  Leaf,
  TrendingUp,
  Calendar,
  BarChart,
  MessageSquare,
  Target,
  Settings,
  Sun
} from 'lucide-react';

export function LandscapePage() {
  const pageData = {
    industry: "Landscape",
    seo: {
      title: "Landscape Marketing Software & Automation | Venra",
      description: "Grow your landscaping business with Venra's marketing automation platform. Get more landscaping projects, automate follow-ups, and increase revenue with our proven system.",
      keywords: "landscape marketing software, landscaping lead generation, lawn care marketing, landscaping business growth, landscape company advertising"
    },
    hero: {
      headline: "Grow Your Landscaping Business with Smart Marketing",
      subheadline: "Get a steady stream of qualified leads for landscaping projects, maintenance contracts, and seasonal services with proven marketing campaigns.",
      imageUrl: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=1200&q=80"
    },
    problems: [
      {
        problem: "Seasonal revenue fluctuations affecting business stability",
        solution: "Year-round marketing strategies that maximize each season's opportunities"
      },
      {
        problem: "Difficulty converting one-time clients into recurring customers",
        solution: "Automated nurture campaigns that promote maintenance contracts"
      },
      {
        problem: "Competing with low-price competitors",
        solution: "Marketing that showcases your quality and expertise to attract better clients"
      }
    ],
    benefits: [
      {
        icon: Leaf,
        title: "Seasonal Success",
        description: "Maximize revenue with campaigns tailored to each landscaping season"
      },
      {
        icon: TrendingUp,
        title: "Recurring Revenue",
        description: "Build a stable base of maintenance contracts and repeat customers"
      },
      {
        icon: Sun,
        title: "Quality Clients",
        description: "Attract customers who value quality and are willing to pay for expertise"
      }
    ],
    features: [
      {
        icon: BarChart,
        title: "Smart Campaign Management",
        description: "Pre-built campaigns for landscaping projects, maintenance, and seasonal services"
      },
      {
        icon: MessageSquare,
        title: "24/7 Lead Response",
        description: "AI-powered chat and SMS that qualifies leads and schedules consultations"
      },
      {
        icon: Target,
        title: "Local Area Targeting",
        description: "Reach property owners in your service area looking for landscaping services"
      },
      {
        icon: Settings,
        title: "Service-Specific Landing Pages",
        description: "Conversion-optimized pages for different landscaping services and packages"
      }
    ],
    faqs: [
      {
        question: "How quickly can I start getting leads for my landscaping business?",
        answer: "Most landscaping companies start seeing leads within 24-48 hours of launching their first campaign. Our pre-built templates and automation tools help you get up and running quickly."
      },
      {
        question: "How do seasonal marketing campaigns work?",
        answer: "Our platform provides campaign templates optimized for each season, from spring cleanup to fall maintenance. You can easily adjust your messaging and services to match seasonal demand."
      },
      {
        question: "Can I promote both residential and commercial services?",
        answer: "Yes! Our platform allows you to run separate campaigns for residential and commercial landscaping services, each with targeted messaging and specific service offerings."
      },
      {
        question: "What's the typical ROI for landscaping companies using Venra?",
        answer: "Most landscaping companies see a 3-5x return on ad spend within the first 90 days. One large project or several maintenance contracts typically cover several months of using Venra."
      }
    ],
    cta: {
      headline: "Ready to Grow Your Landscaping Business?",
      subheadline: "Join other successful landscaping companies using Venra to automate their marketing and win more projects."
    }
  };

  return <IndustryTemplate {...pageData} />;
}