import SectionWrapper from "../SectionWrapper";

export default function HistoryTimeline() {
  return (
    <SectionWrapper id="historia" className="bg-wine-dark py-20 md:py-28 text-cream">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

        {/* Coluna esquerda — Watermark + headline + métricas */}
        <div className="w-full md:w-1/2 relative">

          {/* "1984" watermark enorme */}
          <p
            className="font-serif font-bold text-[9rem] md:text-[14rem] leading-none text-white/5 select-none pointer-events-none absolute -top-8 md:-top-12 -left-4 md:-left-8 tracking-tight"
            aria-hidden="true"
          >
            1984
          </p>

          {/* Label */}
          <span className="text-wheat font-bold text-[10px] uppercase tracking-[0.2em] mb-6 block relative z-10 pt-16 md:pt-20">
            Nossa História
          </span>

          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight mb-8 relative z-10">
            Quatro décadas de amor pela panificação
          </h2>

          {/* Divider */}
          <div className="w-10 h-0.5 bg-wheat mb-8 relative z-10" />

          {/* Métricas */}
          <div className="flex gap-8 relative z-10">
            <div>
              <p className="font-serif text-4xl text-wheat leading-none mb-1">40+</p>
              <p className="text-white/60 text-xs uppercase tracking-wider">Anos de tradição</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-wheat leading-none mb-1">100%</p>
              <p className="text-white/60 text-xs uppercase tracking-wider">Feito artesanalmente</p>
            </div>
          </div>
        </div>

        {/* Coluna direita — Texto narrativo */}
        <div className="w-full md:w-1/2 pt-4 md:pt-28 space-y-5 text-white/80 text-base leading-relaxed">
          <p>
            Há mais de quatro décadas, a Big Pão faz parte da rotina de São José dos Pinhais. Uma história construída com trabalho, dedicação e sabores presentes em diferentes momentos do dia.
          </p>
          <p>
            Na unidade Afonso Pena, tradição e variedade se encontram para receber famílias, amigos e clientes que procuram uma experiência gostosa e acolhedora.
          </p>
          <p>
            Do pão que acompanha o café às escolhas para uma ocasião especial, cada visita ajuda a continuar uma história que atravessa gerações.
          </p>
        </div>

      </div>
    </SectionWrapper>
  );
}
