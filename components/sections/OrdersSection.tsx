import { siteConfig } from "../../config/site";
import SafeImage from "../SafeImage";

export default function OrdersSection() {
  return (
    <section id="encomendas" className="relative w-full overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[600px]">

        {/* Lado esquerdo — Fundo vinho com texto (50%) */}
        <div className="w-full md:w-1/2 bg-wine-dark flex items-center">
          <div className="w-full px-8 md:px-16 py-16 md:py-24 max-w-xl mx-auto md:mx-0 md:ml-auto">

            <span className="text-wheat text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block">
              Encomendas Especiais
            </span>

            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6 leading-tight">
              Sua ocasião merece um sabor especial
            </h2>

            <p className="text-white/75 text-base mb-4 leading-relaxed">
              Bolos decorados, caixas de café da manhã, tortas e muito mais. Encomende pelo WhatsApp com antecedência e deixe o dia a dia, de jeito que você imaginou.
            </p>

            <p className="text-white/60 text-sm mb-10 leading-relaxed">
              Conte com a Big Pão para preparar opções que tornam comemorações, encontros e presentes ainda mais marcantes. Fale com nossa equipe, conheça as opções disponíveis e encontre a escolha certa para o seu momento.
            </p>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.encomenda)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-wheat text-coffee hover:bg-wheat/85 font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/></svg>
              Fazer encomenda
            </a>
          </div>
        </div>

        {/* Lado direito — Imagem full height (50%) */}
        <div className="w-full md:w-1/2 min-h-[400px] md:min-h-[600px] relative bg-[#c8bfb0]">
          <SafeImage
            src="/_8 encomendas.png"
            alt="Bolos e cestas sob encomenda da Big Pão"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Efeito de fusão suave (blend) com o fundo vinho da seção */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-t from-transparent to-wine-dark md:hidden z-10 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-l from-transparent to-wine-dark hidden md:block z-10 pointer-events-none" />
          {/* Placeholder watermark when image is missing */}
          <span className="absolute inset-0 flex items-center justify-center text-white/10 font-serif text-5xl font-bold italic select-none pointer-events-none">
            Bolos &amp; Cestas
          </span>
        </div>

      </div>
    </section>
  );
}
