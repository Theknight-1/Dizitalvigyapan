'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, E-commerce Store',
    company: 'Fashion Forward',
    content:
      'Dizital Vigyapan transformed our online business. Within 6 months, our revenue tripled thanks to their SEO and PPC strategies. The team is professional and results-driven.',
    rating: 5,
    image: '👔',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director',
    company: 'TechStart Solutions',
    content:
      'Working with Dizital has been a game-changer for our startup. They understood our vision and delivered a comprehensive digital strategy that brought quality leads consistently.',
    rating: 5,
    image: '💼',
  },
  {
    name: 'Vikram Patel',
    role: 'Founder',
    company: 'Home Services Network',
    content:
      'The team at Dizital is exceptional. They took time to understand our business and crafted a local SEO strategy that made us the top choice in our market. Highly recommend!',
    rating: 5,
    image: '🏠',
  },
  {
    name: 'Anjali Gupta',
    role: 'Operations Manager',
    company: 'Healthcare Clinic',
    content:
      'From brand building to patient acquisition, Dizital handled everything. Their holistic approach to digital marketing has helped us grow our patient base significantly.',
    rating: 5,
    image: '⚕️',
  },
]

export function Testimonials() {
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

    const cards = gsap.utils.toArray<HTMLElement>('[data-testimonial]')

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
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <span className="text-sm font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-balance">
            Don&apos;t just take our word for it. Hear from the businesses we&apos;ve helped achieve remarkable growth.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-testimonial
              className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6 flex-grow italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-2xl border-2 border-primary/30">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">
                    {testimonial.role} <br /> {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-background border border-border">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-foreground/70">Successful Campaigns</p>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-foreground/70">Average Rating</p>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-foreground/70">Client Retention</p>
          </div>
        </div>
      </div>
    </section>
  )
}
