import React from 'react';
import { IndustryTemplate } from '@/components/Industries/IndustryTemplate';
import { 
  Thermometer,
  TrendingUp,
  Calendar,
  BarChart,
  MessageSquare,
  Target,
  Zap,
  Settings
} from 'lucide-react';

export function HVACPage() {
  const pageData = {
    industry: "HVAC",
    seo: {
      title: "HVAC Marketing Software & Automation | Venra",
      description: "Grow your HVAC business with Venra's marketing automation platform. Get more service calls, automate follow-ups, and increase revenue with our proven system.",
      keywords: "hvac marketing software, hvac lead generation, hvac digital marketing, hvac business growth, hvac advertising"
    },
    hero: {
      headline: "Book More HVAC Service Calls with Smart Marketing Automation",
      subheadline: "Get a steady stream of qualified leads for AC repairs, installations, and maintenance with marketing campaigns proven to work for HVAC companies.",
      imageUrl: "https://img.freepik.com/free-photo/low-angle-people-working-with-drill_23-2149366670.jpg?t=st=1733197579~exp=1733201179~hmac=2f5781ad732d4fbf52b491319ee0521a359adba300acafa9ae8f81d7047fe000&w=2000"
    },
    problems: [
      {
        problem: "Seasonal demand fluctuations making it hard to maintain steady revenue",
        solution: "Smart campaign templates optimized for different seasons and weather conditions"
      },
      {
        problem: "Wasting money on ads that don't generate quality leads",
        solution: "Pre-built HVAC ad templates with proven targeting and messaging"
      },
      {
        problem: "Missing potential customers due to slow follow-up",
        solution: "Instant AI-powered responses that engage leads 24/7"
      }
    ],
    benefits: [
      {
        icon: Thermometer,
        title: "Seasonal Campaign Tools",
        description: "Easily adjust your campaigns based on weather patterns and seasonal demand"
      },
      {
        icon: TrendingUp,
        title: "Predictable Growth",
        description: "Generate a consistent flow of service calls and installation requests year-round"
      },
      {
        icon: Calendar,
        title: "Maintenance Reminders",
        description: "Automated follow-ups to book seasonal tune-ups and maintain recurring revenue"
      }
    ],
    features: [
      {
        icon: BarChart,
        title: "Smart Campaign Management",
        description: "Pre-built ad campaigns for AC repair, heating service, installations, and maintenance agreements"
      },
      {
        icon: MessageSquare,
        title: "24/7 Lead Response",
        description: "AI-powered chat and SMS that instantly engages potential customers and books appointments"
      },
      {
        icon: Target,
        title: "Local Area Targeting",
        description: "Reach homeowners in your service area when they need HVAC services most"
      },
      {
        icon: Settings,
        title: "Service-Specific Landing Pages",
        description: "Conversion-optimized pages for each service you offer, from repairs to installations"
      }
    ],
    faqs: [
      {
        question: "How quickly can I start getting leads for my HVAC business?",
        answer: "Most HVAC companies start seeing leads within 24-48 hours of launching their first campaign. Our pre-built templates and automation tools help you get up and running quickly."
      },
      {
        question: "Do I need technical knowledge to use Venra?",
        answer: "Not at all! Our platform is designed for busy HVAC professionals. We handle all the technical details while giving you an easy-to-use dashboard to monitor and manage your campaigns."
      },
      {
        question: "How do seasonal campaign tools work?",
        answer: "Our platform provides campaign templates and recommendations for different seasons. You can easily adjust your budget and messaging to capitalize on peak demand periods like summer heat waves or winter cold snaps."
      },
      {
        question: "What's the typical ROI for HVAC companies using Venra?",
        answer: "Most HVAC companies see a 3-5x return on ad spend within the first 90 days. One service call or installation typically covers several months of using Venra."
      }
    ],
    cta: {
      headline: "Ready to Grow Your HVAC Business?",
      subheadline: "Join other successful HVAC companies using Venra to automate their marketing and book more jobs."
    }
  };

  return <IndustryTemplate {...pageData} />;
}