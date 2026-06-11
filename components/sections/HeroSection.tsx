import { siteConfig } from "../../config/site";

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.054 23.75a.5.5 0 0 0 .616.625l6.08-1.594A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 0 1-4.951-1.355l-.355-.211-3.68.965.981-3.589-.231-.369A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-wine-dark overflow-hidden">
        <img
          src="/hero-bakery.png"
          alt="Mesa farta de padaria da Big Pão"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 z-0 hero-animate"
        />
        {/* Gradient overlay — oculto no mobile (smart) e exibido apenas no desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-wine-dark/98 via-wine-dark/75 to-black/10 z-10 hidden md:block" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 md:px-12 mx-auto max-w-[1400px] pt-24 pb-16">
        <div className="max-w-[600px] text-left">

          {/* Eyebrow / Selo */}
          <p className="text-wheat text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Panificadora e Confeitaria desde 1984
          </p>

          {/* Headline — editorial, serif grande */}
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-serif text-white leading-[1.05] mb-7 drop-shadow-md">
            Tradição e sabores que fazem parte do seu dia.
          </h1>

          {/* Subheadline — mantido, mas discreto */}
          <p className="text-sm md:text-base text-white/70 font-normal mb-10 max-w-md leading-relaxed">
            Pães fresquinhos, confeitaria e uma variedade preparada para deixar o café, o lanche e os momentos especiais ainda mais gostosos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.geral)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white font-bold py-3.5 px-7 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              <WhatsAppIcon />
              Pedir pelo WhatsApp
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold py-3.5 px-7 rounded-full transition-all duration-300 text-sm"
            >
              Ver cardápio
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
