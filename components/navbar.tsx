"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Pricing", href: "#pricing" },
    { label: "Why Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="hidden sm:flex flex-col">
              <Image
                src="/logo.png"
                alt="Dizital Vigyapan"
                width={100}
                height={30}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918899316670"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
            >
              <Phone size={16} />
              Call Us
            </a>
            <a
              href="https://wa.me/918899316670"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-1 rounded-lg bg-[#25D366] text-primary-foreground hover:bg-[#128C7E] transition-colors text-sm font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-8 h-8"
              >
                <circle cx="16" cy="16" r="16" fill="#25D366" />
                <path
                  fill="#FFF"
                  d="M24.3 8.3A10.9 10.9 0 0 0 6.5 21.4L5 27l5.8-1.5A10.9 10.9 0 1 0 24.3 8.3zm-8.3 16a9.1 9.1 0 0 1-4.7-1.3l-.3-.2-3.4.9.9-3.3-.2-.3A9.1 9.1 0 1 1 16 24.3zm5-6.8c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.5.1-.2.3-.7.9-.9 1.1-.1.1-.3.2-.5.1-1.5-.8-2.4-1.4-3.4-3.2-.1-.2 0-.3.1-.4.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2.1-.3 0-.5-.1-.1-.5-1.3-.8-1.8-.3-.5-.5-.4-.7-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3z"
                />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 space-y-2 border-t border-border">
              <a
                href="tel:+918899316670"
                className="block px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                📞 Call: +91 88993 16670
              </a>
              <a
                href="https://wa.me/918899316670"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
