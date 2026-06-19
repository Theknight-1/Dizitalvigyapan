"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import {
  Briefcase,
  TrendingUp,
  BarChart3,
  Headphones,
  Target,
  Sparkles,
  Award,
  Users,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Briefcase,
    title: "5+ Years Experience",
    description:
      "Over five years of hands-on digital marketing experience helping businesses grow online.",
  },
  {
    icon: Award,
    title: "500+ Campaigns Managed",
    description:
      "Successfully planned, executed, and optimized hundreds of marketing campaigns across industries.",
  },
  {
    icon: Target,
    title: "Customized Strategies",
    description:
      "Every business is unique, so we create tailored marketing strategies designed for your goals.",
  },
  {
    icon: Sparkles,
    title: "Creative & Innovative",
    description:
      "From social media marketing to eye-catching graphic design, we combine creativity with performance.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Focus",
    description:
      "Our campaigns are designed to generate quality leads, increase sales, and accelerate growth.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven ROI",
    description:
      "We use analytics, tracking, and performance insights to maximize your marketing investment.",
  },
  {
    icon: Users,
    title: "Transparent Communication",
    description:
      "Regular updates, clear reporting, and complete visibility into your campaign performance.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "We believe in long-term partnerships and provide continuous support to help your business succeed.",
  },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Individual card animations
      const valueCards = gsap.utils.toArray<HTMLElement>("[data-value-card]");

      valueCards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <div ref={contentRef} className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
              <span className="text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-2xl md:text-5xl font-bold leading-tight text-balance">
              Your Success is Our Mission
            </h2>
            <p className=" text-foreground/70 leading-relaxed">
              Hi, I'm Pramod Diwakar, Founder of Dizital Vigyapan, a digital
              marketing agency in Bareilly. With 5+ years of experience and 500+
              successful campaigns managed, I help businesses grow through SEO,
              Google Ads, Meta Ads, Social Media Marketing, Website Development,
              and Lead Generation, increase their online visibility, attract
              quality customers, and achieve measurable growth.
            </p>
            <p className=" text-foreground/70 leading-relaxed">
              At Dizital Vigyapan, we create customized digital marketing
              strategies that deliver real results and maximize return on
              investment. Whether you're a local business, startup, clinic, or
              growing brand, we're committed to helping you build a stronger
              digital presence and achieve long-term success.
            </p>
            {/* <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold inline-block mt-6">
              Learn Our Story
            </button> */}
          </div>

          {/* Right side - Video/Image placeholder */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="relative w-full max-w-full aspect-3/2 rounded-2xl overflow-hidden border-2 border-primary/30 glow-effect">
              <img
                src={`/digitalvigyapan.jpeg?v=${Date.now()}`}
                alt="Pramod Diwakar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-xl">Pramod Diwakar</h3>
                <p className="text-sm text-foreground/80">
                  Digital Marketing Consultant
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                data-value-card
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
