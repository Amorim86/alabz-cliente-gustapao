"use client";

import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";

const products = [
  {
    name: "Pães Fresquinhos",
    tag: "Forno Diário",
    image: "/g5.webp",
    size: "large", // 2x2
  },
  {
    name: "Pão de Queijo & Chipa",
    tag: "Favorito",
    image: "/g6.webp",
    size: "medium",
  },
  {
    name: "Doces & Bolos",
    tag: "Confeitaria",
    image: "/g7.webp",
    size: "medium",
  },
  {
    name: "Salgados Crocantes",
    tag: "Mais Pedido",
    image: "/g8.webp",
    size: "wide", // spans 2 cols
  },
  {
    name: "Lanches & Bebidas",
    tag: "Cafeteria",
    image: "/milkshake.jpg",
    size: "medium",
  },
];

function ProductCard({
  name,
  tag,
  image,
  className = "",
}: {
  name: string;
  tag: string;
  image: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden bg-[#c8bfb0] ${className}`}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      {/* Gradient overlay bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent z-10" />

      {/* Tag */}
      <div className="absolute top-4 left-4 z-20">
        <span className="bg-wheat text-coffee text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
          {tag}
        </span>
      </div>

      {/* Name */}
      <div className="absolute bottom-4 left-4 z-20">
        <p className="text-white font-serif text-lg leading-tight font-normal">
          {name}
        </p>
      </div>
    </div>
  );
}

export default function ProductsShowcase() {
  return (
    <SectionWrapper id="produtos" className="py-20 bg-cream">
      {/* Header row: title left, CTA right */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-wine font-bold text-[10px] uppercase tracking-[0.2em] mb-3 block">
            Nossos Produtos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-coffee leading-tight max-w-md">
             Tem sempre algo gostoso esperando por você
          </h2>
        </div>
        <div className="shrink-0">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.cardapio)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-coffee/20 text-coffee hover:bg-coffee hover:text-white font-semibold text-sm py-2.5 px-6 rounded-full transition-all duration-300"
          >
            Ver catálogo completo
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-[320px_220px] md:grid-rows-[380px_260px] gap-3 md:gap-4 rounded-2xl overflow-hidden">
        {/* Large cell — top left, spans 1 col on mobile, 1 col on md */}
        <ProductCard
          {...products[0]}
          className="col-span-1 md:col-span-1 row-span-2 md:row-span-1 rounded-none"
        />

        {/* Right column top — Pão de Queijo */}
        <ProductCard
          {...products[1]}
          className="col-span-1 rounded-none"
        />

        {/* Right column top right — Croissant */}
        <ProductCard
          {...products[2]}
          className="col-span-1 rounded-none"
        />

        {/* Bottom row left wide — Cesta de Pães, spans 2 cols */}
        <ProductCard
          {...products[3]}
          className="col-span-1 md:col-span-2 rounded-none"
        />

        {/* Bottom row right — Pão Fatiado */}
        <ProductCard
          {...products[4]}
          className="col-span-1 rounded-none hidden md:block"
        />
      </div>
    </SectionWrapper>
  );
}
