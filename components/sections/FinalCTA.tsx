import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";

export default function FinalCTA() {
  return (
    <SectionWrapper className="bg-wine-dark relative py-32 overflow-hidden border-t border-wine/20">
      {/* Background Decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-wine-dark/80 to-wine-dark z-10" />
        <div className="w-full h-full bg-[#531a1e] opacity-30 flex items-center justify-center">
          <span className="text-white/5 font-serif text-[20vw] font-bold italic rotate-[-5deg] select-none pointer-events-none whitespace-nowrap">
            Big Pão
          </span>
        </div>
      </div>

      <div className="relative z-20 max-w-3xl mx-auto text-center flex flex-col items-center">
        <div className="inline-block bg-wheat text-wine-dark text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 shadow-sm">
          Bateu a vontade?
        </div>
        
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight drop-shadow-md">
          Seu próximo momento gostoso começa aqui.
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl font-medium leading-relaxed">
          Consulte o cardápio, faça seu pedido ou fale com a equipe da Big Pão pelo WhatsApp.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.geral)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp/90 text-white font-bold text-center py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl text-lg"
          >
            Pedir pelo WhatsApp
          </a>
          <a
            href={siteConfig.links.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent border-2 border-white/50 text-white hover:bg-white/10 font-bold text-center py-4 px-10 rounded-full transition-all duration-300 text-lg"
          >
            Como chegar
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
