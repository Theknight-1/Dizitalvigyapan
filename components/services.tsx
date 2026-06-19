'use client'

import {  useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import {
  Search,
  Users,
  Megaphone,
  Globe,
  Bot,
  Palette,
  Star,
  Settings,
  Target,
} from 'lucide-react'


const services = [
  {
    icon: Users,
    title: 'Social Media Marketing',
    description:
      'Build a powerful social presence that increases engagement, brand awareness, and customer loyalty.',
    features: [
      'Social Media Strategy',
      'Content Creation',
      'Community Management',
      'Audience Growth',
      'Monthly Content Calendar',
      'Performance Reporting',
    ],
  },
  {
    icon: Target,
    title: 'Lead Generation',
    description:
      'Generate high-quality leads through targeted campaigns designed to convert prospects into customers.',
    features: [
      'Lead Funnel Setup',
      'Landing Pages',
      'Audience Targeting',
      'Lead Qualification',
      'CRM Integration',
      'Conversion Tracking',
    ],
  },
  {
    icon: Megaphone,
    title: 'Ads Marketing',
    description:
      'Scale your business with high-converting Meta Ads and Google Ads campaigns.',
    features: [
      'Meta Ads Management',
      'Google Ads Campaigns',
      'Retargeting Campaigns',
      'Creative Development',
      'Audience Research',
      'ROI Optimization',
    ],
  },
  {
    icon: Globe,
    title: 'Website Design',
    description:
      'Modern, responsive websites built to attract visitors and convert them into customers.',
    features: [
      'Custom Website Design',
      'Responsive Development',
      'Landing Pages',
      'Speed Optimization',
      'Conversion-Focused UI/UX',
      'Maintenance & Support',
    ],
  },
  {
    icon: Bot,
    title: 'AI Content Creation',
    description:
      'Leverage AI-powered content production to create engaging, scalable content faster.',
    features: [
      'AI Copywriting',
      'Blog Content',
      'Social Media Content',
      'Video Scripts',
      'Marketing Content',
      'Content Optimization',
    ],
  },
  {
    icon: Palette,
    title: 'Branding',
    description:
      'Create a memorable brand identity that builds trust and stands out in the market.',
    features: [
      'Brand Strategy',
      'Logo Design',
      'Visual Identity',
      'Brand Guidelines',
      'Messaging Framework',
      'Creative Assets',
    ],
  },
  {
    icon: Star,
    title: 'Influencer Marketing',
    description:
      'Collaborate with the right influencers to expand reach and drive authentic engagement.',
    features: [
      'Influencer Discovery',
      'Campaign Planning',
      'Partnership Management',
      'Content Collaboration',
      'Performance Tracking',
      'ROI Reporting',
    ],
  },
  {
    icon: Settings,
    title: 'Social Media Handle Setup',
    description:
      'Professional setup and optimization of social media accounts across multiple platforms.',
    features: [
      'Account Creation',
      'Profile Optimization',
      'Brand Integration',
      'Platform Configuration',
      'Initial Content Setup',
      'Growth Strategy',
    ],
  },
  {
    icon: Search,
    title: 'SEO',
    description:
      'Improve visibility and rankings with a complete search engine optimization strategy.',
    features: [
      'Technical SEO',
      'Keyword Research',
      'On-Page SEO',
      'Local SEO',
      'Link Building',
      'SEO Reporting',
    ],
  },
]

export function Services() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)

  useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray('[data-service-card]')

    cards.forEach((card: any) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    })

    ScrollTrigger.refresh()
  }, containerRef)

  return () => ctx.revert()
}, [])

  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <span className="text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance mb-3">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-lg text-foreground/70 max-w-6xl mx-auto text-balance">
            From strategy to execution, we handle every aspect of your digital presence to drive growth and revenue.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                data-service-card
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:bg-card/80"
              >
                {/* Gradient hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-foreground/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* <button className="text-primary font-semibold hover:gap-2 transition-all flex items-center gap-1">
                    Learn More
                    <span>→</span>
                  </button> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
