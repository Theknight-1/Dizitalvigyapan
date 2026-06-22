'use client'

import { Mail, Phone, MapPin, Copy } from 'lucide-react'
import Image from "next/image";
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
              <div className="flex flex-col">
                <Image
                  src="/logo.png"
                  alt="Dizital Vigyapan"
                  width={100}
                  height={30}
                />
              </div>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              We grow brands digitally with data-driven strategies and
              innovative solutions.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/Dizitalvigyapan"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <span className="text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <path d="M14 8h-2a2 2 0 0 0-2 2v2H8v3h2v5h3v-5h2.5l.5-3H13v-1.5c0-.5.5-.5 1-.5h2V8z" />
                  </svg>
                </span>
              </a>
              <a
                href="https://www.instagram.com/dizitalvigyapan?igsh=MTdqODl1Z3pqZXM2cA%3D%3D"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <span className="text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />

                    <circle cx="12" cy="12" r="4" />

                    <circle cx="17.5" cy="6.5" r="1" />
                  </svg>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/84350027/admin/dashboard/"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <span className="text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="4" />

                    <circle
                      cx="8"
                      cy="8"
                      r="0.8"
                      fill="currentColor"
                      stroke="none"
                    />
                    <path d="M8 11v5" />

                    <path d="M12 16v-5" />
                    <path d="M12 13c0-1.1.9-2 2-2s2 .9 2 2v3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "About Us", "Case Studies", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-foreground/60 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "SEO Services",
                "SEM & PPC",
                "Content Marketing",
                "Social Media",
                "Brand Design",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
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
                  <a
                    href="tel:+918899316670"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
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
                    <Copy
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                  {copied && (
                    <p className="text-xs text-primary mt-1">Copied!</p>
                  )}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-foreground/60">
          <p>© {year} Dizital Vigyapan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
