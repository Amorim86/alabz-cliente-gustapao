import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-start overflow-hidden">
      {/* Background Image / Placeholder */}
      <div className="absolute inset-0 z-0 bg-[#e0d9cc] overflow-hidden">
        {/* Gradient overlay to ensure text contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-wine-dark/95 via-wine-dark/75 to-transparent z-10" />
        <img 
          src="/hero-bakery.png" 
          alt="Mesa farta de padaria da Big Pão" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 animate-pulse-subtle"
          style={{ animationDuration: '6s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 md:px-12 mx-auto max-w-[1400px] pt-20">
        <div className="max-w-2xl text-left">
          
          {/* Selo */}
          <div className="inline-block bg-wheat text-wine-dark text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Panificadora e Confeitaria desde 1984
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 drop-shadow-sm">
            Tradição e sabores que fazem parte do seu dia.
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-xl leading-relaxed">
            Pães fresquinhos, confeitaria e uma variedade preparada para deixar o café, o lanche e os momentos especiais ainda mais gostosos.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.geral)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white font-bold text-center py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Pedir pelo WhatsApp
            </a>
            <a
              href="#produtos"
              className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-bold text-center py-4 px-8 rounded-full transition-all duration-300"
            >
              Ver cardápio
            </a>
          </div>

          {/* Info Complementar */}
          <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-wheat" />
            Unidade Afonso Pena • São José dos Pinhais
          </div>

        </div>
      </div>
    </section>
  );
}
