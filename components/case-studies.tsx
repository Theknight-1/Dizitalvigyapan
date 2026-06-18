'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingUp, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const caseStudies = [
  {
    id: 1,
    company: 'E-commerce Store',
    industry: 'Online Retail',
    challenge: 'Low organic traffic and poor conversion rates',
    result: '340% increase in organic traffic',
    metric: '340%',
    label: 'Organic Traffic Growth',
    description: 'Implemented comprehensive SEO strategy and optimized product pages resulting in 8x revenue growth.',
    color: 'from-blue-500/10 to-blue-400/10',
  },
  {
    id: 2,
    company: 'Tech Startup',
    industry: 'SaaS',
    challenge: 'Needed rapid user acquisition',
    result: '2,500 qualified leads in 3 months',
    metric: '2,500',
    label: 'Leads Generated',
    description: 'Strategic PPC and content marketing campaigns that delivered high-quality leads with strong conversion.',
    color: 'from-purple-500/10 to-purple-400/10',
  },
  {
    id: 3,
    company: 'Local Services',
    industry: 'Home Services',
    challenge: 'Limited brand awareness in competitive market',
    result: '85% increase in customer inquiries',
    metric: '85%',
    label: 'Inquiry Increase',
    description: 'Built strategic local SEO and social media presence that made the brand a local leader.',
    color: 'from-orange-500/10 to-orange-400/10',
  },
]

function AnimatedCounter({ value, label }: { value: string | number; label: string }) {
  const ref = useRef<HTMLDivElement>(null)

 useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const numValue =
      typeof value === 'string'
        ? parseInt(value.replace(/\D/g, ''), 10)
        : value

    const counter = { value: 0 }

    gsap.to(counter, {
      value: numValue,
      duration: 2,
      ease: 'power2.out',
      snap: { value: 1 },
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = counter.value.toString()
        }
      },
    })
  }, ref)

  return () => ctx.revert()
}, [value])

  return (
    <div>
      <div ref={ref} className="text-4xl font-bold text-primary">
        {value}
      </div>
      <p className="text-sm text-foreground/60 mt-2">{label}</p>
    </div>
  )
}

export function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

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

    const cards = gsap.utils.toArray<HTMLElement>('[data-case-study]')

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
    <section id="case-studies" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <span className="text-sm font-semibold">Case Studies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance mb-6">
            Proven Results, Real Growth
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-balance">
            See how we&apos;ve transformed businesses across industries with data-driven strategies.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              data-case-study
              className="group relative p-8 rounded-2xl border border-border bg-background hover:border-primary/50 transition-all duration-300"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                {/* Metric */}
                <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <AnimatedCounter value={study.metric} label={study.label} />
                </div>

                {/* Company info */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground">{study.company}</h3>
                  <p className="text-sm text-foreground/60">{study.industry}</p>
                </div>

                {/* Challenge & Result */}
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-foreground/50 font-semibold mb-1">Challenge</p>
                    <p className="text-sm text-foreground/70">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">Result</p>
                    <p className="text-sm text-foreground font-medium">{study.result}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/70 mb-6 leading-relaxed">{study.description}</p>

                {/* Read More */}
                <button className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Full Case Study
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-lg border-2 border-primary/30 text-foreground hover:border-primary hover:bg-primary/5 transition-all font-semibold">
            View All Case Studies
          </button>
        </div> */}
      </div>
    </section>
  )
}
