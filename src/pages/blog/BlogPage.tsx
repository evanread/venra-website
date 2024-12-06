import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogHero } from '@/components/Blog/BlogHero';
import { BlogGrid } from '@/components/Blog/BlogGrid';
import { BlogCategories } from '@/components/Blog/BlogCategories';
import { BlogNewsletter } from '@/components/Blog/BlogNewsletter';
import { Section } from '@/components/ui/Section';

export function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog - Marketing Tips for Home Service Businesses | Venra</title>
        <meta 
          name="description" 
          content="Expert marketing advice and strategies for home service businesses. Learn how to grow your HVAC, plumbing, electrical, or other home service business." 
        />
        <meta 
          name="keywords" 
          content="home service marketing, business growth tips, marketing strategies, lead generation, digital marketing" 
        />
        <link rel="canonical" href="https://venra.io/blog" />
      </Helmet>

      <Section background="gradient">
        <BlogHero />
      </Section>
      
      <Section>
        <BlogCategories />
        <BlogGrid />
        <BlogNewsletter />
      </Section>
    </>
  );
}