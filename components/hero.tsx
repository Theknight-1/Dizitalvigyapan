"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
      })
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.5",
        );

      gsap.to(".floating-card", {
        y: "-=15",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 pb-0 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div ref={titleRef} className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <span className="text-sm font-semibold">
                  Welcome to the Future of Marketing
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                We Grow Your Brands{" "}
                <span className="gradient-text">Digitally</span>
              </h1>
            </div>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl text-balance"
            >
              Transform your business with data-driven digital marketing
              strategies. From SEO to full-scale brand transformation, we
              deliver measurable results that grow your revenue.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSf0rFtMcXdHWcM0dnGF3n2ebOU1brUQu5VB1Wd23tCevKFlYw/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 cursor-pointer rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold flex items-center gap-2 group">
                  Book a Free Consultation
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary font-bold text-xl">
                  <TrendingUp size={24} />
                  500+
                </div>
                <p className="text-sm text-foreground/60">
                  Successful Campaigns
                </p>
              </div>
              <div className="space-y-1">
                <div className="font-bold text-xl text-foreground">20+</div>
                <p className="text-sm text-foreground/60">Team Members</p>
              </div>
              <div className="space-y-1">
                <div className="font-bold text-xl text-foreground">5+</div>
                <p className="text-sm text-foreground/60">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right side - Marketing Dashboard */}
          <div className="relative h-120 flex items-center justify-center">
            {/* Background glow */}
            <div className="absolute w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

            {/* Main Revenue Card */}
            <div className="floating-card absolute top-10 left-10 w-72 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-foreground/60">
                  Revenue Growth
                </span>
                <span className="text-green-500 font-semibold">+342%</span>
              </div>

              <div className="text-3xl font-bold mb-4">₹24.8L</div>

              <div className="flex items-end gap-2 h-20">
                {[20, 40, 35, 60, 55, 80, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/80 rounded-t-md"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Meta Ads */}
            <div className="floating-card absolute top-0 right-0 w-48 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="text-sm text-foreground/60 mb-2">Meta Ads</div>
              <div className="text-2xl font-bold">8.2x</div>
              <div className="text-green-500 text-sm">ROAS</div>
            </div>

            {/* SEO */}
            <div className="floating-card absolute bottom-16 left-0 w-52 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="text-sm text-foreground/60 mb-2">SEO Ranking</div>
              <div className="text-2xl font-bold">#1</div>
              <div className="text-green-500 text-sm">+78 Positions</div>
            </div>

            {/* Leads */}
            <div className="floating-card absolute bottom-0 right-8 w-56 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="text-sm text-foreground/60 mb-2">
                Leads Generated
              </div>
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-green-500 text-sm">This Month</div>
            </div>

            {/* AI Card */}
            <div className="floating-card absolute top-1/2 right-0 -translate-y-1/2 w-48 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="text-sm text-foreground/60 mb-2">AI Content</div>
              <div className="text-2xl font-bold">1,250</div>
              <div className="text-primary text-sm">Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
