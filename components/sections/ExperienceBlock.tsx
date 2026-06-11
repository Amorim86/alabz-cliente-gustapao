"use client";

import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";

export default function ExperienceBlock() {
  return (
    <SectionWrapper className="bg-soft-white py-0 md:py-16">
      <div className="flex flex-col md:flex-row items-stretch bg-white shadow-xl rounded-none md:rounded-3xl overflow-hidden">
        
        {/* Imagem / Placeholder (60% width on desktop) */}
        <div className="w-full md:w-[60%] min-h-[400px] md:min-h-[600px] bg-[#d9cfbe] relative flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
           <img 
             src="/exp-bakery.png" 
             alt="Ambiente acolhedor da padaria Big Pão" 
             className="absolute inset-0 w-full h-full object-cover"
             onError={(e) => {
               e.currentTarget.style.display = 'none';
             }}
           />
           <span className="text-wine/10 font-serif text-5xl md:text-7xl font-bold italic rotate-[-15deg] px-6 text-center select-none z-0 absolute">
             Ambiente Acolhedor
           </span>
        </div>

        {/* Texto (40% width on desktop) */}
        <div className="w-full md:w-[40%] p-10 md:p-16 flex flex-col justify-center bg-cream">
          <h2 className="font-serif text-3xl md:text-5xl text-wine-dark mb-6 leading-tight">
            Uma pausa gostosa muda o ritmo do dia.
          </h2>
          <p className="text-coffee/80 text-lg mb-8 leading-relaxed">
            Seja para tomar um café, encontrar alguém, fazer uma refeição ou levar suas escolhas favoritas para casa, a Big Pão está pronta para receber você.
          </p>
          <div className="pl-4 border-l-2 border-wheat mb-10">
            <p className="text-coffee font-medium italic">
              Variedade, sabor e uma tradição presente em São José dos Pinhais desde 1984.
            </p>
          </div>
          <div>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.consumoLocal)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-wine text-wine hover:bg-wine hover:text-white font-bold text-center py-3 px-8 rounded-full transition-all duration-300"
            >
              Conhecer nossos produtos
            </a>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
