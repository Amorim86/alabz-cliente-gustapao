import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";

function TruckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/>
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

export default function DeliveryPickup() {
  return (
    <SectionWrapper className="bg-cream py-20">
      {/* Header */}
      <div className="mb-12">
        <span className="text-wine font-bold text-[10px] uppercase tracking-[0.2em] mb-3 block text-center">
          Como Recebe
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-coffee leading-tight">
          Do nosso forno para a sua mesa
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">

        {/* Entrega a Domicílio */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-coffee/5 flex flex-col hover:shadow-md transition-shadow duration-300">
          <div className="w-12 h-12 rounded-full bg-wine-dark/10 flex items-center justify-center text-wine-dark mb-6 shrink-0">
            <TruckIcon />
          </div>
          <h3 className="font-serif text-xl text-coffee mb-3">Entrega a domicílio</h3>
          <p className="text-coffee/65 text-sm leading-relaxed mb-6 flex-1">
            Entregas no Afonso Pena e bairros vizinhos. Pedidos pelo WhatsApp com agendamento. Fale conosco para verificar a disponibilidade para o seu endereço.
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessages.delivery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-wine font-semibold text-sm hover:underline transition-all"
          >
            Pedir delivery <ArrowRightIcon />
          </a>
        </div>

        {/* Retirada na Loja */}
        <div className="bg-white rounded-2xl p-8 shadow-md border border-coffee/10 flex flex-col hover:shadow-lg transition-shadow duration-300 ring-1 ring-coffee/8">
          <div className="w-12 h-12 rounded-full bg-wheat/30 flex items-center justify-center text-wine-dark mb-6 shrink-0">
            <StoreIcon />
          </div>
          <h3 className="font-serif text-xl text-coffee mb-3">Retirada na loja</h3>
          <p className="text-coffee/65 text-sm leading-relaxed mb-6 flex-1">
            Venha nos visitar! Aberta todos os dias, das 6h às 22h. Retire os seus pedidos fresquinhos na R. Alm. Alexandrino, 2301 — Afonso Pena.
          </p>
          <a
            href={siteConfig.links.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-wine font-semibold text-sm hover:underline transition-all"
          >
            Ver endereço <ArrowRightIcon />
          </a>
        </div>

      </div>
    </SectionWrapper>
  );
}
