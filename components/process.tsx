'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Lightbulb, BarChart3, Rocket, TrendingUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description: 'We analyze your business, competitors, and market to craft a winning strategy tailored to your goals.',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Planning & Setup',
    description: 'Detailed planning of campaigns, creative assets, and systems for flawless execution.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execution & Optimization',
    description: 'We launch campaigns and continuously optimize for better performance and ROI.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Reporting & Growth',
    description: 'Monthly detailed reports with insights and strategies for sustained growth and scale.',
  },
]

export function Process() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      })

      const steps = containerRef.current?.querySelectorAll('[data-process-step]')
      if (steps) {
        gsap.from(steps, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.6,
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <span className="text-sm font-semibold">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance mb-6">
            How We Deliver Results
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-balance">
            Our proven 4-step methodology ensures strategic thinking, flawless execution, and continuous improvement.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-30"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} data-process-step className="flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50 flex items-center justify-center mb-6 relative">
                    <span className="text-4xl font-bold text-primary">{step.number}</span>
                    <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse"></div>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 -mt-12 relative z-20">
                    <Icon size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>

                  {/* Arrow for next step */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-12 top-32">
                      <svg className="w-8 h-8 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7m0 0l-7 7m7-7H6" />
                      </svg>
                    </div>
                  )}

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-6">
                      <svg className="w-6 h-6 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-foreground/70 mb-6">Ready to get started with our proven methodology?</p>
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold inline-block">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  )
}
