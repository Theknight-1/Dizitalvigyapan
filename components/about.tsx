'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Award, Users, Target, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver premium quality in every project with attention to detail.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients as true partners in growth.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every strategy is data-backed and focused on measurable outcomes.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay ahead of trends and use cutting-edge tools and techniques.',
  },
]

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // Content animation
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    // Individual card animations
    const valueCards = gsap.utils.toArray<HTMLElement>('[data-value-card]')

    valueCards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
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
    <section id="about" ref={containerRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <div ref={contentRef} className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
              <span className="text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
              Your Success is Our Mission
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              With over 10 years of expertise in digital marketing, we&apos;ve helped 500+ businesses achieve their growth goals. Our team of 50+ specialists brings diverse skills and proven strategies to deliver exceptional results.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We don&apos;t believe in one-size-fits-all solutions. Every strategy is customized to your unique business needs, market position, and growth objectives.
            </p>
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold inline-block mt-6">
              Learn Our Story
            </button>
          </div>

          {/* Right side - Video/Image placeholder */}
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/20 to-accent/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                <p className="text-foreground/60 font-medium">Watch Our Story</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                data-value-card
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">{value.title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
