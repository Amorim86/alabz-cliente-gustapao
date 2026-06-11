import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.054 23.75a.5.5 0 0 0 .616.625l6.08-1.594A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 0 1-4.951-1.355l-.355-.211-3.68.965.981-3.589-.231-.369A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  );
}

export default function FinalCTA() {
  return (
    <SectionWrapper className="bg-wine-dark relative py-28 md:py-36 overflow-hidden border-t border-wine/30">
      {/* Watermark decorativo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="text-white/[0.03] font-serif text-[18vw] font-bold leading-none whitespace-nowrap tracking-tight">
          Big Pão
        </span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        <span className="inline-block bg-wheat/15 border border-wheat/30 text-wheat text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-8">
          Bateu a vontade?
        </span>

        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05] drop-shadow-md">
          Seu próximo momento gostoso começa aqui.
        </h2>

        <p className="text-white/65 text-base md:text-lg mb-12 max-w-xl leading-relaxed">
          Consulte o cardápio, faça seu pedido ou fale com a equipe da Big Pão pelo WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.geral)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5 hover:shadow-2xl text-sm"
          >
            <WhatsAppIcon />
            Pedir pelo WhatsApp
          </a>
          <a
            href={siteConfig.links.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border border-white/25 text-white hover:bg-white/10 font-semibold py-4 px-10 rounded-full transition-all duration-300 text-sm"
          >
            Como chegar
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
