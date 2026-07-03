"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";

const reviews = [
  {
    name: "Amanda",
    text: "É uma delícia tomar café da manhã ou da tarde nesta panificadora. Todos os salgados e doces são muito gostosos, os funcionários são muito atenciosos e os preços são justos. Recomendo provar a chipa de cebolinha, a melhor que já comi.",
    stars: 5,
  },
  {
    name: "Ivan dos Santos",
    text: "Padaria completa, com produtos e serviço muito bons. Abre às 6h30 e fecha às 22h. Tem espaço para lanchar no local também.",
    stars: 5,
  },
  {
    name: "Fernanda Machado",
    text: "O pãozinho é ótimo, os doces são maravilhosos. Experimentei o bombom de morango e gostei muito. Pão de queijo muito bom, sem falar do atendimento: a maioria é muito simpática. Super indico!",
    stars: 5,
  },
  {
    name: "Flavio Toczek",
    text: "Panificadora top das galáxias. Compro no local há 25 anos. Excelente atendimento! Equipe nota 1000.",
    stars: 5,
  },
  {
    name: "Larissa Batista",
    text: "Sempre compro salgados e bolos, e peço um misto com ovo que sempre vem caprichado. Tudo muito saboroso e fresquinho. Os atendentes são atenciosos e simpáticos.",
    stars: 5,
  },
  {
    name: "Gerson Santana",
    text: "O pão é muito bom. Os doces são muito apetitosos. O atendimento é sempre agradável e bem-humorado. Tenho várias panificadoras mais próximas à minha casa, mas prefiro ir até a Gustapão.",
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

function TestimonialsColumn(props: {
  className?: string;
  testimonials: typeof reviews;
  duration?: number;
}) {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map((review, i) => (
                <div
                  key={`${review.name}-${index}-${i}`}
                  className="bg-white p-7 rounded-2xl border border-coffee/6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Stars count={review.stars} />
                  <p className="text-coffee/75 text-sm leading-relaxed my-4 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="text-wine-dark font-semibold text-xs font-serif">{review.name}</p>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
}

export default function SocialProof() {
  const firstColumn = reviews.slice(0, 3);
  const secondColumn = reviews.slice(3, 6);

  return (
    <SectionWrapper id="avaliacoes" className="bg-soft-white py-20 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* Destaque nota (38% no desktop) */}
        <div className="w-full md:w-[38%] shrink-0">
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

        {/* Depoimentos (62% no desktop) rolando em 100vh de contêiner */}
        <div className="w-full md:w-[62%] flex gap-4 h-[520px] overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <TestimonialsColumn 
            testimonials={firstColumn} 
            duration={22} 
            className="flex-1" 
          />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            duration={28} 
            className="flex-1 hidden sm:block" 
          />
        </div>

      </div>
    </SectionWrapper>
  );
}
