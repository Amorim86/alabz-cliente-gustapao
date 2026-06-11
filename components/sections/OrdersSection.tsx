"use client";

import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";

export default function OrdersSection() {
  return (
    <SectionWrapper id="encomendas" className="bg-wine-dark py-24 border-t border-wine">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Texto (50%) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1">
          <div className="inline-block border border-wheat/30 text-wheat text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 self-start">
            Momentos Especiais
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6 leading-tight">
            Sua ocasião merece um sabor especial.
          </h2>
          
          <p className="text-white/90 text-lg mb-6 leading-relaxed">
            Conte com a Big Pão para preparar opções que tornam comemorações, encontros e presentes ainda mais marcantes.
          </p>
          
          <p className="text-white/70 text-base mb-10 leading-relaxed">
            Fale com nossa equipe, conheça as opções disponíveis e encontre a escolha certa para o seu momento.
          </p>
          
          <div>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.encomenda)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-wheat text-coffee hover:bg-white font-bold text-center py-4 px-10 rounded-full transition-all duration-300 shadow-md"
            >
              Fazer encomenda
            </a>
          </div>
        </div>

        {/* Imagem / Placeholder (50%) */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="w-full aspect-square md:aspect-[4/5] rounded-[2rem] bg-[#531a1e] relative flex items-center justify-center overflow-hidden shadow-2xl border border-wine">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent z-10" />
              <img 
                src="/orders-cakes.png" 
                alt="Bolos e cestas sob encomenda da Big Pão" 
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-wine-dark/50 font-serif text-4xl md:text-6xl font-bold italic rotate-12 px-6 text-center select-none z-0 absolute">
                Bolos & Cestas
              </span>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
