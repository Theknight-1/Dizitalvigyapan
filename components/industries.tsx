'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShoppingBag, Utensils, Home, Stethoscope, BookOpen, Building2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const industries = [
  {
    icon: ShoppingBag,
    name: 'E-commerce & Retail',
    description: 'Drive online sales, increase AOV, and build customer loyalty through targeted campaigns',
    color: 'from-blue-500/20 to-blue-400/20',
  },
  {
    icon: Utensils,
    name: 'Food & Hospitality',
    description: 'Attract diners, boost reservations, and build brand reputation with social strategies',
    color: 'from-orange-500/20 to-orange-400/20',
  },
  {
    icon: Home,
    name: 'Real Estate & Properties',
    description: 'Generate high-quality leads, showcase properties, and accelerate closures',
    color: 'from-emerald-500/20 to-emerald-400/20',
  },
  {
    icon: Stethoscope,
    name: 'Healthcare & Medical',
    description: 'Build patient trust, increase appointments, and establish digital authority',
    color: 'from-red-500/20 to-red-400/20',
  },
  {
    icon: BookOpen,
    name: 'EdTech & Education',
    description: 'Increase enrollment, engage students, and build community around your courses',
    color: 'from-purple-500/20 to-purple-400/20',
  },
  {
    icon: Building2,
    name: 'B2B & SaaS',
    description: 'Generate qualified leads, establish thought leadership, and drive enterprise sales',
    color: 'from-indigo-500/20 to-indigo-400/20',
  },
]

export function Industries() {
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

    const cards = gsap.utils.toArray<HTMLElement>('[data-industry-card]')

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
    <section id="industries" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <span className="text-sm font-semibold">Industries We Serve</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance mb-6">
            Expertise Across Multiple Sectors
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-balance">
            We bring specialized knowledge to help businesses in various industries achieve their digital marketing goals.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                data-industry-card
                className="group relative p-8 rounded-2xl border border-border hover:border-primary/50 bg-background hover:bg-background/80 transition-all duration-300 cursor-pointer"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-foreground transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">{industry.description}</p>

                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all gap-0">
                    Explore
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Don&apos;t see your industry?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            We work with businesses across all sectors. Let&apos;s discuss how we can help your specific industry thrive digitally.
          </p>
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
