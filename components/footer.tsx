'use client'

import { Mail, Phone, MapPin, Copy } from 'lucide-react'
import { useState } from 'react'

export function Footer() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('dizitalvigyapan@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const year = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground">Dizital</span>
                <span className="text-xs text-primary font-semibold">विज्ञापन</span>
              </div>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              We grow brands digitally with data-driven strategies and innovative solutions.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <span className="text-lg">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Services', 'About Us', 'Case Studies', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {['SEO Services', 'SEM & PPC', 'Content Marketing', 'Social Media', 'Brand Design'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-foreground/60">Phone</p>
                  <a href="tel:+918899316670" className="text-foreground hover:text-primary transition-colors font-medium">
                    +91 88993 16670
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-foreground/60">Email</p>
                  <button
                    onClick={copyEmail}
                    className="text-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-2 group"
                  >
                    dizitalvigyapan@gmail.com
                    <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  {copied && <p className="text-xs text-primary mt-1">Copied!</p>}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-foreground/60">Location</p>
                  <p className="text-foreground text-sm">
                    Bisalpur Road Near Green Park, Bareilly-243005
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>© {year} Dizital Vigyapan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
