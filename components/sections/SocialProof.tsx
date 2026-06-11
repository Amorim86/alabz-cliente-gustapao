import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";

const reviews = [
  {
    name: "Maria S.",
    text: "Excelente atendimento e produtos sempre frescos. Recomendo muito!",
    stars: 5,
  },
  {
    name: "João P.",
    text: "A melhor padaria da região de São José dos Pinhais, com certeza voltarei.",
    stars: 5,
  },
  {
    name: "Ana L.",
    text: "Adoro as opções de confeitaria, tudo muito bem preparado e saboroso.",
    stars: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-wheat">
      {[...Array(count)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <SectionWrapper id="avaliacoes" className="bg-soft-white py-20">
      <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">

        {/* Destaque nota (40%) */}
        <div className="w-full md:w-[38%]">
          <span className="text-wine font-bold text-[10px] uppercase tracking-[0.2em] mb-6 block">
            Quem conhece, recomenda
          </span>

          <h2 className="font-serif text-4xl md:text-5xl text-coffee leading-tight mb-8">
             Uma escolha aprovada por milhares de clientes
          </h2>

          {/* Nota grande */}
          <div className="flex items-end gap-4 mb-3">
            <span className="font-serif text-7xl text-wine-dark leading-none">{siteConfig.socialProof.googleRating}</span>
            <div className="mb-2">
              <Stars />
              <p className="text-coffee/50 text-xs mt-1">no Google</p>
            </div>
          </div>

          <p className="text-coffee/60 text-sm leading-relaxed">
            Com base em <span className="font-semibold text-coffee/80">{siteConfig.socialProof.reviewsCount} avaliações</span> verificadas. A confiança dos clientes reflete uma trajetória construída com tradição e atendimento presente no dia a dia.
          </p>
        </div>

        {/* Depoimentos (60%) */}
        <div className="w-full md:w-[62%] flex flex-col gap-4">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-coffee/6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Stars count={review.stars} />
              <p className="text-coffee/75 text-base leading-relaxed my-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-wine-dark font-semibold text-sm font-serif">{review.name}</p>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
