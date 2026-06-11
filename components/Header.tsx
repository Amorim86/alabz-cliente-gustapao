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
      className="w-4 h-4"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.054 23.75a.5.5 0 0 0 .616.625l6.08-1.594A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 0 1-4.951-1.355l-.355-.211-3.68.965.981-3.589-.231-.369A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
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
          <div className="bg-white p-0.5 rounded-full overflow-hidden w-9 h-9 flex items-center justify-center shrink-0">
            <img src="/logo original bigpao.jpg" alt={siteConfig.name} className="w-full h-full object-cover" />
          </div>
          <span className="text-white font-bold text-base tracking-wide hidden sm:block">Big Pão</span>
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
