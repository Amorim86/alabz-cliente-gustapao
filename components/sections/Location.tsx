"use client";

import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

export default function Location() {
  return (
    <SectionWrapper id="localizacao" className="bg-white py-24">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        
        {/* Mapa / Fachada / Placeholder (50%) */}
        <div className="w-full md:w-1/2">
          <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl bg-[#e0d9cc] relative flex items-center justify-center overflow-hidden shadow-xl border border-black/5">
             <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
             <img 
               src="/loc-facade.png" 
               alt="Fachada da padaria Big Pão - Unidade Afonso Pena" 
               className="absolute inset-0 w-full h-full object-cover"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
               }}
             />
             <span className="text-wine/20 font-serif text-4xl md:text-5xl font-bold italic z-0 select-none pointer-events-none absolute">
               Mapa / Fachada
             </span>
          </div>
        </div>

        {/* Informações (50%) */}
        <div className="w-full md:w-1/2">
          <div className="inline-block border border-wine/20 text-wine-dark text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Unidade Afonso Pena
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-wine-dark mb-6 leading-tight">
            Venha viver essa experiência de perto.
          </h2>
          
          <p className="text-coffee/80 text-lg mb-10 leading-relaxed">
            Visite a Big Pão no Afonso Pena e encontre variedade para diferentes momentos do seu dia.
          </p>

          <div className="space-y-8 mb-10">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-wheat mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-wine-dark text-lg mb-1">Endereço</h4>
                <p className="text-coffee/80">
                  {siteConfig.contact.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-wheat mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-wine-dark text-lg mb-1">Horários</h4>
                <p className="text-coffee/80">
                  {siteConfig.contact.hours.week}<br/>
                  {siteConfig.contact.hours.sunday}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MessageCircle className="w-6 h-6 text-wheat mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-wine-dark text-lg mb-1">Contatos</h4>
                <p className="text-coffee/80">
                  WhatsApp: {siteConfig.contact.whatsapp}<br/>
                  Telefone: {siteConfig.contact.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.links.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wine-dark hover:bg-wine text-white font-bold text-center py-4 px-8 rounded-full transition-all duration-300 shadow-md"
            >
              Como chegar
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-wine/20 text-wine hover:bg-wine/5 font-bold text-center py-4 px-8 rounded-full transition-all duration-300"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
