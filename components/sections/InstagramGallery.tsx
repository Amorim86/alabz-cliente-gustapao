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

const instagramPosts = [
  {
    image: "/balcao.webp",
    alt: "Vitrine Gustapão – pães, doces e salgados expostos no balcão",
    label: "Vitrine",
    url: siteConfig.social.instagram,
  },
  {
    image: "/comercomosolhos.webp",
    alt: "Pães e doces frescos saindo do forno do Gustapão",
    label: "Produtos",
    url: siteConfig.social.instagram,
  },
  {
    image: "/g3.webp",
    alt: "Pão de queijo e chipa quentinhos do Gustapão",
    label: "Favorito",
    url: siteConfig.social.instagram,
  },
  {
    image: "/g7.webp",
    alt: "Ambiente agradável e aconchegante da Panificadora Gustapão",
    label: "O Local",
    url: siteConfig.social.instagram,
  },
  {
    image: "/g5.webp",
    alt: "Pães artesanais e de forno da Gustapão",
    label: "Tradição",
    url: siteConfig.social.instagram,
  },
];

export default function InstagramGallery() {
  return (
    <SectionWrapper className="bg-cream py-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <div className="max-w-[700px]">
          <span className="text-wine font-bold text-[10px] uppercase tracking-[0.2em] mb-3 block">
            Novidades da Gustapão
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-coffee leading-tight mb-4">
            Sabores que também conquistam pelas imagens
          </h2>
          <p className="text-coffee/65 text-sm leading-relaxed tracking-wide">
            Acompanhe nossos produtos, novidades e momentos especiais nas redes sociais.
          </p>
        </div>
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 bg-coffee text-white hover:bg-coffee/85 font-semibold text-sm py-3 px-6 rounded-full transition-all duration-300 shadow-sm"
        >
          <InstagramIcon className="w-4 h-4" />
          @gustapao.curitiba
        </a>
      </div>

      {/* Galeria */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        {instagramPosts.map((post, i) => (
          <a
            key={i}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            {/* Quadrinho */}
            <div className="aspect-square w-full rounded-xl relative overflow-hidden shadow-sm border border-black/5 bg-wine-dark/5">
              <img
                src={post.image}
                alt={post.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-wine-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <InstagramIcon className="text-white w-7 h-7 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </div>
            {/* Label */}
            <span className="text-coffee font-semibold text-sm text-center leading-tight">
              {post.label}
            </span>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
