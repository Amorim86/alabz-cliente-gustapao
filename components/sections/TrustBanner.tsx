import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";
import { Clock, MapPin, Star, ShieldCheck } from "lucide-react";

export default function TrustBanner() {
  return (
    <SectionWrapper className="bg-wine-dark py-12 border-y border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
        
        {/* Bloco 1 */}
        <div className="flex flex-col items-center text-center px-4">
          <ShieldCheck className="w-8 h-8 text-wheat mb-3" />
          <span className="font-serif text-2xl text-cream mb-1">{siteConfig.history}</span>
          <span className="text-white/70 text-xs md:text-sm">Mais de quatro décadas de tradição.</span>
        </div>

        {/* Bloco 2 */}
        <div className="flex flex-col items-center text-center px-4">
          <Star className="w-8 h-8 text-wheat mb-3" />
          <span className="font-serif text-2xl text-cream mb-1">{siteConfig.socialProof.googleRating} no Google</span>
          <span className="text-white/70 text-xs md:text-sm">Uma experiência aprovada pelos clientes.</span>
        </div>

        {/* Bloco 3 */}
        <div className="flex flex-col items-center text-center px-4">
          <MapPin className="w-8 h-8 text-wheat mb-3" />
          <span className="font-serif text-2xl text-cream mb-1">{siteConfig.socialProof.reviewsCount} avaliações</span>
          <span className="text-white/70 text-xs md:text-sm">Confiança construída todos os dias.</span>
        </div>

        {/* Bloco 4 */}
        <div className="flex flex-col items-center text-center px-4">
          <Clock className="w-8 h-8 text-wheat mb-3" />
          <span className="font-serif text-2xl text-cream mb-1">Aberto todos os dias</span>
          <span className="text-white/70 text-xs md:text-sm">Para diferentes momentos da rotina.</span>
        </div>

      </div>
    </SectionWrapper>
  );
}
