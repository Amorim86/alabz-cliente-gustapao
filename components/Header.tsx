"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { Menu, X } from "lucide-react";

function WhatsAppIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-4 h-4 shrink-0"
    >
      <path d="M12.031 2a9.965 9.965 0 0 0-9.961 9.96c0 1.942.555 3.756 1.517 5.295L2 22l4.905-1.285A9.92 9.92 0 0 0 12.03 22a9.967 9.967 0 0 0 9.97-9.96A9.97 9.97 0 0 0 12.03 2zM6.924 16.73l-.326-.519a7.962 7.962 0 0 1-1.22-4.25c0-4.41 3.59-8 8.007-8 4.417 0 8.007 3.59 8.007 8s-3.59 8-8.007 8a7.96 7.96 0 0 1-4.265-1.23l-.539-.34L5.358 19.3l.566-3.864-.32-.509-.001-.001zm8.793-2.92c-.244-.12-.14-.07-.549-.68a2.16 2.16 0 0 0-.48-.38c-.149-.07-.3-.03-.43.1-.12.12-.53.67-.65.81-.12.14-.24.15-.49.03a5.55 5.55 0 0 1-1.83-1.13 6.13 6.13 0 0 1-1.27-1.58c-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.24-.42.08-.17.04-.32-.02-.44-.06-.12-.53-1.28-.73-1.75-.19-.47-.39-.4-.53-.41-.14-.01-.3-.01-.46-.01a.88.88 0 0 0-.64.3c-.22.24-.84.82-.84 2s.87 2.33.99 2.49c.12.16 1.71 2.62 4.14 3.67.58.25 1.03.4 1.39.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z"/>
    </svg>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-wine-dark shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 relative z-50">
          <img 
            src="/logo original bigpao sem fundo v2.png" 
            alt={siteConfig.name} 
            className="w-12 h-12 object-contain shrink-0 [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges]" 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {siteConfig.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white hover:text-wheat transition-colors text-sm font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-wheat after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.pedido)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-wheat text-coffee hover:bg-wheat/90 hover:scale-[1.03] active:scale-[0.97] px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-sm"
          >
            <WhatsAppIcon />
            Pedir pelo WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav */}
        <div
          className={`fixed inset-0 bg-wine-dark z-40 flex flex-col items-center justify-center pt-20 px-6 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 mb-8 text-center">
            {siteConfig.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-wheat transition-colors text-xl font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.pedido)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-whatsapp text-white hover:bg-whatsapp/90 px-8 py-4 rounded-full font-bold text-lg w-full max-w-xs text-center transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
