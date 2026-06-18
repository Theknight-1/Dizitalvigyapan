'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowRight, TrendingUp } from 'lucide-react'

export function Hero() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      })
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.5'
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.5'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div ref={titleRef} className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <span className="text-sm font-semibold">Welcome to the Future of Marketing</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                We Grow Brands <span className="gradient-text">Digitally</span>
              </h1>
            </div>

            <p ref={subtitleRef} className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl text-balance">
              Transform your business with data-driven digital marketing strategies. From SEO to full-scale brand transformation, we deliver measurable results that grow your revenue.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold flex items-center gap-2 group">
                Start Your Free Audit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-lg border-2 border-primary/30 text-foreground hover:border-primary hover:bg-primary/5 transition-all font-semibold">
                Book a Demo
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary font-bold text-xl">
                  <TrendingUp size={24} />
                  500+
                </div>
                <p className="text-sm text-foreground/60">Successful Campaigns</p>
              </div>
              <div className="space-y-1">
                <div className="font-bold text-xl text-foreground">50+</div>
                <p className="text-sm text-foreground/60">Team Members</p>
              </div>
              <div className="space-y-1">
                <div className="font-bold text-xl text-foreground">10+</div>
                <p className="text-sm text-foreground/60">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right side - Founder image */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 glow-effect">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-13%20at%2010.38.07%20PM-4Ssu3ZjJsp91c55m2Vpvo3T3kyquuV.jpeg"
                alt="Pramod Diwakar - Founder, Digital Marketing Consultant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-xl">Pramod Diwakar</h3>
                <p className="text-sm text-foreground/80">Digital Marketing Consultant</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-primary/50 hover:text-primary transition-colors">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
