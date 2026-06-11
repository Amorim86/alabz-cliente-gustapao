import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function InstagramGallery() {
  return (
    <SectionWrapper className="bg-cream py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-wine font-bold text-xs uppercase tracking-widest mb-4">
          Novidades da Big Pão
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-coffee mb-6 max-w-2xl">
          Sabores que também conquistam pelas imagens.
        </h2>
        <p className="text-coffee/80 max-w-2xl text-lg mb-10">
          Acompanhe nossos produtos, novidades e momentos especiais nas redes sociais.
        </p>
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-transparent border-2 border-wine text-wine hover:bg-wine hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
        >
          <InstagramIcon className="w-5 h-5" />
          Ver Instagram
        </a>
      </div>

      {/* Grade de Imagens Estáticas (Placeholders) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square bg-[#d9cfbe] rounded-2xl relative overflow-hidden group shadow-sm border border-black/5">
             <div className="absolute inset-0 bg-wine-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
               <InstagramIcon className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
             </div>
             <span className="absolute inset-0 flex items-center justify-center text-wine/10 font-serif text-3xl font-bold italic z-0 select-none pointer-events-none">
               Foto
             </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
