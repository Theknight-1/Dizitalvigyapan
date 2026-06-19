'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Industries } from '@/components/industries'
import { Process } from '@/components/process'
import { CaseStudies } from '@/components/case-studies'
import Testimonials from "@/components/testimonials";
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
