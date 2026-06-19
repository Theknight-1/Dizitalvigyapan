"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const testimonials = [
  {
    company: "Google Ads",
    color: "text-blue-500",
    quote:
      "Dizital Vigyapan helped us generate quality leads consistently while reducing acquisition costs.",
    name: "Local Business Owner",
    role: "Bareilly",
    image: "🚀",
  },
  {
    company: "SEO",
    color: "text-green-500",
    quote:
      "Our website traffic increased significantly and rankings improved within a few months.",
    name: "Retail Brand",
    role: "SEO Client",
    image: "📈",
  },
  {
    company: "Meta Ads",
    color: "text-pink-500",
    quote:
      "Their targeting strategy brought us high-quality inquiries and excellent ROI.",
    name: "Startup Founder",
    role: "Meta Ads Client",
    image: "🎯",
  },
  {
    company: "Lead Generation",
    color: "text-orange-500",
    quote: "The team understands local business marketing extremely well.",
    name: "Business Owner",
    role: "Lead Generation",
    image: "💼",
  },
  {
    company: "Website Design",
    color: "text-cyan-500",
    quote:
      "They created a modern website that immediately improved our credibility.",
    name: "Healthcare Brand",
    role: "Website Client",
    image: "🌐",
  },
  {
    company: "Social Media",
    color: "text-purple-500",
    quote: "Our engagement and customer inquiries increased substantially.",
    name: "Restaurant Owner",
    role: "Social Media Client",
    image: "⭐",
  },
];

export default function Testimonials() {
  const row1 = useRef(null);
  const row2 = useRef(null);

  useEffect(() => {
    gsap.to(row1.current, {
      xPercent: -50,
      duration: 40,
      repeat: -1,
      ease: "none",
    });

    gsap.to(row2.current, {
      xPercent: 50,
      duration: 40,
      repeat: -1,
      ease: "none",
    });
  }, []);

  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="py-10 px-4 bg-card">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="py-12 text-center space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
            <span className="text-sm font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Trusted by Businesses,
            <br />
            Not Just Promises.
          </h2>

          <p className="text-zinc-400 text-lg">
            Real experiences from brands we've helped grow.
          </p>
        </div>

        {/* Fade Masks */}
        <div className="absolute left-0 top-0 h-full w-32 z-20 bg-linear-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 z-20 bg-linear-to-l from-black to-transparent pointer-events-none" />

        {/* Row 1 */}
        <div className="overflow-hidden">
          <div ref={row1} className="flex w-max">
            {duplicated.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden border-t border-white/10">
          <div ref={row2} className="flex w-max">
            {duplicated.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ item }: any) {
  return (
    <div
      className="
        w-[420px]
        h-[260px]
        p-8
        border-r
        border-white/10
        flex
        flex-col
        justify-between
        bg-black
      "
    >
      <div>
        <div className={`font-bold text-xl mb-8 ${item.color}`}>
          {item.company}
        </div>

        <p className="text-zinc-300 text-lg leading-relaxed">{item.quote}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-zinc-800 flex items-center justify-center text-xl">
          {item.image}
        </div>

        <div>
          <div className="text-white font-medium">{item.name}</div>

          <div className="text-zinc-500 text-sm">{item.role}</div>
        </div>
      </div>
    </div>
  );
}
