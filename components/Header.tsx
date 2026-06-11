"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { Menu, X } from "lucide-react";

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
        <a href="#" className="flex items-center gap-3 relative z-50">
          <div className="bg-white p-1 rounded-full overflow-hidden w-12 h-12 flex items-center justify-center shrink-0">
             <img src="/logo original bigpao.jpg" alt={siteConfig.name} className="w-full h-full object-cover" />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {siteConfig.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white hover:text-wheat transition-colors text-sm font-medium"
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
            className="bg-wheat text-coffee hover:bg-cream px-6 py-2.5 rounded-full font-bold text-sm transition-all"
          >
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
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-wine-dark z-40 flex flex-col items-center justify-center pt-20 px-6">
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
              className="bg-whatsapp text-white hover:bg-whatsapp/90 px-8 py-4 rounded-full font-bold text-lg w-full text-center transition-all shadow-lg"
            >
              Pedir pelo WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
