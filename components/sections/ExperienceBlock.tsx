import { siteConfig } from "../../config/site";
import SafeImage from "../SafeImage";

export default function ExperienceBlock() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[580px]">

        {/* Imagem (55%) */}
        <div className="w-full md:w-[55%] min-h-[360px] md:min-h-[580px] bg-[#c8bfb0] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent z-10" />
          <SafeImage
            src="/exp-bakery.png"
            alt="Ambiente acolhedor da padaria Big Pão"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Efeito de fusão suave (blend) com o fundo creme da seção */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-cream md:hidden z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-r from-transparent to-cream hidden md:block z-10 pointer-events-none" />
          <span className="absolute inset-0 flex items-center justify-center text-white/10 font-serif text-5xl font-bold italic select-none pointer-events-none z-0">
            Ambiente Acolhedor
          </span>
        </div>

        {/* Texto (45%) */}
        <div className="w-full md:w-[45%] bg-cream flex items-center">
          <div className="w-full px-8 md:px-14 py-14 md:py-20 max-w-lg">

            <h2 className="font-serif text-4xl md:text-5xl text-coffee leading-tight mb-6">
              Uma pausa gostosa muda o ritmo do dia.
            </h2>

            <p className="text-coffee/70 text-base mb-8 leading-relaxed">
              Seja para tomar um café, encontrar alguém, fazer uma refeição ou levar suas escolhas favoritas para casa, a Big Pão está pronta para receber você.
            </p>

            {/* Quote block */}
            <div className="pl-5 border-l-2 border-wheat mb-10">
              <p className="text-coffee/60 text-sm italic leading-relaxed">
                Variedade, sabor e uma tradição presente em São José dos Pinhais desde 1984.
              </p>
            </div>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.consumoLocal)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-coffee/25 text-coffee hover:bg-coffee hover:text-white font-semibold py-3 px-7 rounded-full transition-all duration-300 text-sm"
            >
              Conhecer nossos produtos
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
