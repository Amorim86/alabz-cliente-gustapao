"use client";

import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";

const categories = [
  { name: "Pães e fornadas", desc: "O sabor e o aroma que tornam qualquer café ainda melhor.", image: "/cat-bread.png" },
  { name: "Doces e confeitaria", desc: "Opções para adoçar a rotina, presentear ou compartilhar.", image: "/cat-pastry.png" },
  { name: "Bolos e tortas", desc: "Sabores especiais para o dia a dia e comemorações.", image: "/cat-cake.png" },
  { name: "Salgados e lanches", desc: "Praticidade e variedade para aquela pausa durante o dia.", image: "/cat-savory.png" },
  { name: "Café da manhã", desc: "Uma forma saborosa de começar bem a manhã.", image: "/cat-breakfast.png" },
  { name: "Cestas e presentes", desc: "Delícias reunidas para surpreender alguém especial.", image: "/cat-gifts.png" },
];

export default function ProductsShowcase() {
  return (
    <SectionWrapper id="produtos" className="py-24 bg-cream">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-wine font-bold text-xs uppercase tracking-widest mb-4">
          Sabores para todos os momentos
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-coffee mb-6 max-w-2xl">
          Tem sempre algo gostoso esperando por você.
        </h2>
        <p className="text-coffee/80 max-w-2xl text-lg">
          Da primeira refeição do dia àquela pausa especial, a Big Pão reúne variedade, tradição e produtos preparados para você aproveitar no local ou levar para casa.
        </p>
      </div>

      {/* Mosaico Editorial com Placeholders Elegantes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {categories.map((cat, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-[320px]">
            {/* Imagem ou Placeholder */}
            <div className="relative flex-1 bg-[#ebe5da] flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10" />
               {cat.image ? (
                 <img 
                   src={cat.image} 
                   alt={cat.name} 
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   onError={(e) => {
                     // Hide image if file is missing, falling back to text
                     e.currentTarget.style.display = 'none';
                   }}
                 />
               ) : null}
               <span className="text-wine/20 font-serif text-3xl font-bold italic rotate-[-10deg] px-6 text-center select-none absolute z-0">
                 {cat.name}
               </span>
            </div>
            
            <div className="p-6 bg-white flex flex-col items-center text-center relative z-20">
              <h3 className="font-serif text-xl text-wine-dark mb-2">{cat.name}</h3>
              <p className="text-sm text-coffee/70">{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.cardapio)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-wine hover:bg-wine-dark text-white font-bold text-center py-4 px-10 rounded-full transition-all duration-300 shadow-md"
        >
          Ver cardápio
        </a>
      </div>
    </SectionWrapper>
  );
}
