"use client";

import SectionWrapper from "../SectionWrapper";

export default function HistoryTimeline() {
  return (
    <SectionWrapper id="historia" className="bg-coffee py-24 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Número 1984 Destaque Gráfico */}
        <div className="relative mb-8 select-none">
          <span className="font-serif text-8xl md:text-[180px] leading-none text-white/5 font-bold tracking-tighter absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none">
            1984
          </span>
          <div className="relative z-10 bg-wheat text-wine-dark text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
            Nossa História
          </div>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl text-cream mb-10 leading-tight relative z-10">
          Uma tradição que começou em 1984.
        </h2>
        
        <div className="space-y-6 text-white/80 text-lg leading-relaxed text-center relative z-10">
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

        {/* Foto Histórica ou Produção */}
        <div className="mt-16 w-full max-w-3xl aspect-[16/9] bg-wine-dark rounded-3xl relative overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
          <img 
            src="/history-bakery.png" 
            alt="História e tradição da Big Pão" 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="text-white/20 font-serif text-3xl font-bold italic z-0 select-none absolute">
            Foto Histórica ou Produção
          </span>
        </div>

      </div>
    </SectionWrapper>
  );
}
