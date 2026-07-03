"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { Menu, X } from "lucide-react";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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
        isScrolled ? "bg-wine-dark shadow-md py-2.5" : "bg-transparent py-4"
      }`}
    >
      <div className="w-full px-4 md:px-8 grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* Lado Esquerdo - Logo */}
        <div className="flex justify-start">
          <a href="#" className="flex items-center relative z-50 text-white hover:text-wheat transition-colors select-none gap-2">
            <img src="/Logo Gustapao.svg" alt={siteConfig.name} className="h-10 w-auto object-contain" />
          </a>
        </div>

        {/* Centro - Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center">
          <ul className="flex items-center gap-8">
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
        </nav>

        {/* Lado Direito - Redes Sociais ou Botão Mobile */}
        <div className="flex justify-end items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-white">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-wheat transition-colors p-1"
              aria-label="Facebook da Big Pão"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-wheat transition-colors p-1"
              aria-label="Instagram da Big Pão"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

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

          {/* Redes sociais mobile */}
          <div className="flex items-center gap-6 text-white mt-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-wheat transition-colors p-2"
              aria-label="Facebook da Big Pão"
            >
              <FacebookIcon className="w-7 h-7" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-wheat transition-colors p-2"
              aria-label="Instagram da Big Pão"
            >
              <InstagramIcon className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
