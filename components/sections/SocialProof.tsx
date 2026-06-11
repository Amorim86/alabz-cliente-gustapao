import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";
import { Star } from "lucide-react";

const reviews = [
  { name: "Cliente Satisfeito 01", text: "Excelente atendimento e produtos sempre frescos. Recomendo muito!" },
  { name: "Cliente Satisfeito 02", text: "A melhor padaria da região de São José dos Pinhais, com certeza voltarei." },
  { name: "Cliente Satisfeito 03", text: "Adoro as opções de confeitaria, tudo muito bem preparado e saboroso." },
];

export default function SocialProof() {
  return (
    <SectionWrapper id="avaliacoes" className="bg-soft-white py-24">
      <div className="flex flex-col md:flex-row items-center gap-16">
        
        {/* Destaque (40%) */}
        <div className="w-full md:w-[40%] flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-block border border-wine/20 text-wine-dark text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Quem conhece, recomenda
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-wine-dark mb-6 leading-tight">
            Uma escolha aprovada por milhares de clientes.
          </h2>
          
          <div className="flex flex-col items-center md:items-start mb-6">
            <div className="flex items-center gap-4 mb-2">
              <span className="font-serif text-6xl text-wine">{siteConfig.socialProof.googleRating}</span>
              <div className="flex text-wheat">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-coffee font-medium text-lg">
              Com base em <span className="font-bold">{siteConfig.socialProof.reviewsCount} avaliações</span> no Google.
            </p>
          </div>
          
          <p className="text-coffee/70 text-base leading-relaxed">
            A confiança dos clientes reflete uma trajetória construída com tradição, variedade e atendimento presente no dia a dia da comunidade.
          </p>
        </div>

        {/* Depoimentos Cards (60%) */}
        <div className="w-full md:w-[60%] flex flex-col gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-coffee/5 relative">
              <div className="flex text-wheat mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-coffee/80 text-lg italic mb-6">"{review.text}"</p>
              <p className="text-wine-dark font-bold font-serif">{review.name}</p>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
