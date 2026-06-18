'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: 'How long does it take to see results from digital marketing?',
    answer:
      'Most strategies show results within 3-6 months. SEO and organic strategies take longer (3-6 months) while PPC campaigns can show immediate results. We provide monthly reports to track progress and make optimizations.',
  },
  {
    question: 'What is included in your digital marketing services?',
    answer:
      'We offer comprehensive services including SEO, SEM/PPC, content marketing, social media management, brand design, analytics, and more. We create customized packages based on your specific needs and budget.',
  },
  {
    question: 'How do you measure the success of campaigns?',
    answer:
      'We track multiple metrics including traffic, conversions, ROI, leads generated, engagement rates, and revenue impact. Monthly reports detail all KPIs with actionable insights for improvement.',
  },
  {
    question: 'Can you work with small budgets?',
    answer:
      'Absolutely! We work with businesses of all sizes. We can create efficient, targeted campaigns that maximize ROI within any budget. Let&apos;s discuss your goals and find the right approach.',
  },
  {
    question: 'Do you provide ongoing support and optimization?',
    answer:
      'Yes, all our services include ongoing optimization and support. We continuously monitor campaigns, test new strategies, and refine based on data to ensure sustained growth.',
  },
  {
    question: 'How do you stay updated with digital marketing trends?',
    answer:
      'Our team regularly attends industry conferences, certifications, and training. We test new strategies and tools to ensure we bring cutting-edge solutions to our clients.',
  },
]

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
    if (!isOpen && contentRef.current) {
      gsap.to(contentRef.current, {
        height: 'auto',
        duration: 0.3,
        ease: 'power2.out',
      })
    } else if (contentRef.current) {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.3,
        ease: 'power2.in',
      })
    }
  }

  return (
    <div className="border-b border-border">
      <button
        onClick={toggleOpen}
        className="w-full py-6 px-0 flex items-start gap-4 hover:text-primary transition-colors text-left group"
      >
        <span className="font-bold text-primary group-hover:scale-110 transition-transform flex-shrink-0 mt-1">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-grow">
          <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors text-balance">
            {question}
          </h4>
        </div>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: isOpen ? 'auto' : 0 }}
      >
        <p className="pb-6 pl-12 text-foreground/70 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export function FAQ() {
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

      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="mb-16 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <span className="text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70 text-balance">
            Find answers to common questions about our services and how we can help your business grow.
          </p>
        </div>

        <div ref={containerRef} className="bg-card border border-border rounded-2xl p-8 md:p-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-6">Didn&apos;t find your answer?</p>
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  )
}
