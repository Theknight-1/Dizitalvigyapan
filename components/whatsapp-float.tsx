"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918899316670"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-999
        flex
        items-center
        gap-3
        rounded-full
        bg-[#25D366]
        px-5
        py-4
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:scale-105
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-10 h-10"
      >
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        <path
          fill="#FFF"
          d="M24.3 8.3A10.9 10.9 0 0 0 6.5 21.4L5 27l5.8-1.5A10.9 10.9 0 1 0 24.3 8.3zm-8.3 16a9.1 9.1 0 0 1-4.7-1.3l-.3-.2-3.4.9.9-3.3-.2-.3A9.1 9.1 0 1 1 16 24.3zm5-6.8c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.5.1-.2.3-.7.9-.9 1.1-.1.1-.3.2-.5.1-1.5-.8-2.4-1.4-3.4-3.2-.1-.2 0-.3.1-.4.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2.1-.3 0-.5-.1-.1-.5-1.3-.8-1.8-.3-.5-.5-.4-.7-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3z"
        />
      </svg>
      <span className="font-medium whitespace-nowrap">Chat on WhatsApp</span>
    </a>
  );
}
