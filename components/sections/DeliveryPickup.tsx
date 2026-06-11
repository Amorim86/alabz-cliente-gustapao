import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";
import { PackageOpen, ShoppingBag } from "lucide-react";

export default function DeliveryPickup() {
  return (
    <SectionWrapper className="bg-cream py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-wine font-bold text-xs uppercase tracking-widest mb-4">
          Mais praticidade
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-coffee mb-6 max-w-2xl">
          Peça do jeito mais fácil para você.
        </h2>
        <p className="text-coffee/80 max-w-2xl text-lg">
          Escolha suas delícias favoritas e fale diretamente com nossa equipe para consultar as opções disponíveis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Delivery Card */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-coffee/5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center text-wine mb-6">
            <PackageOpen className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl text-wine-dark mb-4">Receba seu pedido</h3>
          <p className="text-coffee/70 mb-8 flex-1">
            Consulte a disponibilidade de entrega para sua região e faça seu pedido pelo WhatsApp.
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.delivery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-transparent border-2 border-wine text-wine hover:bg-wine hover:text-white font-bold text-center py-3 px-6 rounded-full transition-all duration-300"
          >
            Consultar Delivery
          </a>
        </div>

        {/* Retirada Card */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-coffee/5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center text-wine mb-6">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl text-wine-dark mb-4">Retire na unidade Afonso Pena</h3>
          <p className="text-coffee/70 mb-8 flex-1">
            Antecipe seu pedido e retire diretamente na Big Pão.
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.retirada)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-transparent border-2 border-wine text-wine hover:bg-wine hover:text-white font-bold text-center py-3 px-6 rounded-full transition-all duration-300"
          >
            Pedir para Retirar
          </a>
        </div>

      </div>
    </SectionWrapper>
  );
}
