'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Search, TrendingUp, FileText, Users, Palette, BarChart3 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings with comprehensive SEO strategies that drive organic traffic and sustainable growth.',
    features: ['Technical SEO Audit', 'Keyword Research & Strategy', 'On-Page Optimization', 'Link Building', 'Local SEO', 'Monthly Reporting'],
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns focused on measurable ROI and conversion optimization across all channels.',
    features: ['Conversion Rate Optimization', 'Funnel Analysis', 'A/B Testing', 'Budget Optimization', 'Attribution Modeling', 'Real-time Reporting'],
  },
  {
    icon: FileText,
    title: 'Ads Marketing',
    description: 'Strategic paid advertising on Meta Ads and Google Ads platforms for maximum reach and conversions.',
    features: ['Meta Ads Campaigns', 'Google Ads Management', 'Audience Targeting', 'Ad Creative Development', 'Remarketing', 'Campaign Analytics'],
  },
  {
    icon: Users,
    title: 'Social Media Marketing',
    description: 'Build engaged communities and amplify your brand presence across all major social platforms.',
    features: ['Social Media Strategy', 'Content Creation & Posting', 'Community Management', 'Social Listening', 'Influencer Outreach', 'Engagement Analytics'],
  },
  {
    icon: Palette,
    title: 'Social Media Handle Setup',
    description: 'Complete social media account setup, optimization, and management across 2-4 platforms.',
    features: ['Account Creation & Setup', 'Profile Optimization', 'Brand Guidelines Implementation', 'Logo Design', 'Initial Content Creation', 'Platform-Specific Strategy'],
  },
  {
    icon: BarChart3,
    title: 'Email Marketing & Automation',
    description: 'Nurture leads and drive conversions with targeted email campaigns and automated workflows.',
    features: ['Email List Building', 'Campaign Design', 'Automation Sequences', 'A/B Testing', 'Segmentation', 'Performance Analytics'],
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

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
