"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "../../config/site";

const heroImages = [
  "/g1.webp",
  "/g2.webp",
  "/g3.webp",
];

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

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Chave única por slide para forçar restart do keyframe CSS a cada troca
  const [slideKey, setSlideKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      setSlideKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0 bg-wine-dark overflow-hidden">
        {heroImages.map((src, index) => {
          const isActive = index === currentImageIndex;
          // Alterna a direção do pan por índice: par → esquerda, ímpar → direita
          const panClass = index % 2 === 0 ? "hero-pan-left" : "hero-pan-right";
          return (
            <img
              key={`${src}-${isActive ? slideKey : index}`}
              src={src}
              alt="Mesa farta de padaria da Panificadora Gustapão"
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity ease-in-out z-0 ${
                isActive
                  ? `opacity-100 duration-[1500ms] ${panClass}`
                  : "opacity-0 duration-[1500ms] pointer-events-none"
              }`}
            />
          );
        })}
        {/* Overlay — uniforme bg-wine-dark/70 no mobile, gradiente linear no desktop restrito do meio para a esquerda (0% a 45%) para liberar totalmente o lado direito */}
        <div className="absolute inset-0 bg-wine-dark/70 md:bg-transparent md:bg-[linear-gradient(to_right,rgba(100,31,36,0.95)_0%,rgba(100,31,36,0.85)_25%,rgba(100,31,36,0.30)_40%,transparent_50%)] z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 md:px-12 mx-auto max-w-[1400px] pt-24 pb-16">
        <div className="max-w-[600px] text-left">

          {/* Eyebrow / Selo */}
          <p className="text-wheat text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Panificadora Gustapão
          </p>

          {/* Prova Social Google */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-wheat text-sm font-bold">★ 4.5</span>
            <span className="text-white text-xs font-semibold">
              no Google • 2.489 avaliações
            </span>
          </div>

          {/* Headline — editorial, serif grande */}
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-serif text-white leading-[1.1] mb-7 drop-shadow-md">
            Pães, cafés, doces e salgados no Jardim das Américas
          </h1>

          {/* Subheadline — mantido, mas discreto */}
          <p className="text-sm md:text-base text-white/70 font-normal mb-10 max-w-md leading-relaxed">
            Uma padaria completa em Curitiba para café da manhã, lanche, produtos frescos e pedidos pelo iFood.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.geral)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white font-bold py-3.5 px-7 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              <WhatsAppIcon />
              Chamar no WhatsApp
            </a>
            <a
              href={siteConfig.links.ifood}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#EA1D2C] hover:bg-[#c21420] text-white font-bold py-3.5 px-7 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              Pedir pelo iFood
            </a>
            <a
              href={siteConfig.links.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold py-3.5 px-7 rounded-full transition-all duration-300 text-sm"
            >
              Ver rotas
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
