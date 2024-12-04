import React from 'react';
import { IndustryTemplate } from '@/components/Industries/IndustryTemplate';
import { 
  Droplet,
  TrendingUp,
  Calendar,
  BarChart,
  MessageSquare,
  Target,
  Settings,
  Clock
} from 'lucide-react';

export function PlumbingPage() {
  const pageData = {
    industry: "Plumbing",
    seo: {
      title: "Plumbing Marketing Software & Automation | Venra",
      description: "Grow your plumbing business with Venra's marketing automation platform. Get more service calls, automate follow-ups, and increase revenue with our proven system.",
      keywords: "plumbing marketing software, plumber lead generation, plumbing digital marketing, plumbing business growth, plumbing advertising"
    },
    hero: {
      headline: "Generate More Emergency Calls & Installation Jobs with Smart Marketing",
      subheadline: "Get a steady stream of qualified leads for repairs, installations, and maintenance with marketing campaigns proven to work for plumbing companies.",
      imageUrl: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1200&q=80"
    },
    problems: [
      {
        problem: "Struggling to compete with larger plumbing companies",
        solution: "Professional marketing campaigns that level the playing field"
      },
      {
        problem: "Missing emergency calls due to slow response times",
        solution: "24/7 automated lead response system that never sleeps"
      },
      {
        problem: "High cost per lead from generic marketing",
        solution: "Targeted campaigns that reach homeowners when plumbing issues arise"
      }
    ],
    benefits: [
      {
        icon: Droplet,
        title: "Emergency Response Ready",
        description: "Never miss an emergency call with instant lead notifications and automated follow-up"
      },
      {
        icon: TrendingUp,
        title: "Consistent Growth",
        description: "Build a steady pipeline of installation jobs and service agreements"
      },
      {
        icon: Calendar,
        title: "Maintenance Programs",
        description: "Automated reminders to book preventive maintenance and inspections"
      }
    ],
    features: [
      {
        icon: BarChart,
        title: "Smart Campaign Management",
        description: "Pre-built ad campaigns for emergency repairs, remodels, and maintenance services"
      },
      {
        icon: MessageSquare,
        title: "24/7 Lead Response",
        description: "AI-powered chat and SMS that instantly engages potential customers"
      },
      {
        icon: Target,
        title: "Local Area Targeting",
        description: "Reach homeowners in your service area when they need plumbing services"
      },
      {
        icon: Settings,
        title: "Service-Specific Landing Pages",
        description: "Conversion-optimized pages for each service you offer"
      }
    ],
    faqs: [
      {
        question: "How quickly can I start getting leads for my plumbing business?",
        answer: "Most plumbing companies start seeing leads within 24-48 hours of launching their first campaign. Our pre-built templates and automation tools help you get up and running quickly."
      },
      {
        question: "Do I need technical knowledge to use Venra?",
        answer: "Not at all! Our platform is designed for busy plumbing professionals. We handle all the technical details while giving you an easy-to-use dashboard to monitor and manage your campaigns."
      },
      {
        question: "How does the emergency response system work?",
        answer: "When someone needs emergency plumbing service, our system instantly responds to their inquiry, collects key information, and notifies you immediately. This helps you respond faster and book more emergency calls."
      },
      {
        question: "What's the typical ROI for plumbing companies using Venra?",
        answer: "Most plumbing companies see a 3-5x return on ad spend within the first 90 days. One emergency service call or installation job typically covers several months of using Venra."
      }
    ],
    cta: {
      headline: "Ready to Grow Your Plumbing Business?",
      subheadline: "Join other successful plumbing companies using Venra to automate their marketing and book more jobs."
    }
  };

  return <IndustryTemplate {...pageData} />;
}