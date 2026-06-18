'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const pricingPlans = [
  {
    name: 'Starter',
    price: '7,000',
    period: 'month',
    badge: null,
    description: 'Perfect for startups and new brands',
    features: [
      'Social Media Handle Setup (2 platforms)',
      '6 Social Media Posts',
      'Logo Design',
      '2 Meta Ads Campaigns',
      'Basic Analytics',
      'Email Support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '10,000',
    period: 'month',
    badge: 'Popular',
    description: 'Best for growing businesses',
    features: [
      'Social Media Handle Setup (3 platforms)',
      '10 Social Posts + 2 Videos',
      'Logo Design',
      'Digital Visiting Card',
      '3 Meta Ads Campaigns',
      'Performance Analytics',
      'Priority Email Support',
      'Monthly Strategy Call',
    ],
    cta: 'Choose Plan',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '15,000',
    period: 'month',
    badge: null,
    description: 'For serious growth seekers',
    features: [
      'Social Media Handle Setup (4 platforms)',
      '12 Social Posts + 4 Videos',
      'Professional Logo Design',
      'Digital Visiting Card',
      'Google Business Profile Setup',
      '5 Meta Ads Campaigns',
      'Advanced Analytics Dashboard',
      'Bi-weekly Strategy Calls',
      'Content Calendar Planning',
      'Dedicated Account Manager',
    ],
    cta: 'Start Pro',
    highlighted: false,
  },
]

export function Pricing() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    const cards = gsap.utils.toArray<HTMLElement>('[data-pricing-card]')

    cards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.6,
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
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <span className="text-sm font-semibold">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-balance">
            Flexible packages designed to scale with your business. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-8 lg:gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              data-pricing-card
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'md:scale-105 border-2 border-primary bg-card/50 shadow-2xl shadow-primary/20'
                  : 'border border-border bg-card hover:border-primary/30'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="p-8">
                {/* Plan name and description */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-primary">₹{plan.price}</span>
                    <span className="text-foreground/60 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-foreground/50 mt-2">
                    Perfect for {plan.name.toLowerCase()} stage businesses
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                    plan.highlighted
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30'
                      : 'border border-primary/50 text-primary hover:bg-primary/10'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-foreground/70 uppercase tracking-wide">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional services section */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Custom Solutions?</h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Our expert team can create a tailored package combining SEO, Performance Marketing, Web Development, and Email Marketing—perfectly aligned with your budget and goals.
          </p>
          <button className="px-8 py-3 rounded-lg bg-primary/10 border border-primary/50 text-primary hover:bg-primary/20 transition-all font-semibold">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  )
}
