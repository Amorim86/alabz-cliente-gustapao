import { siteConfig } from "../../config/site";
import SectionWrapper from "../SectionWrapper";
import SafeImage from "../SafeImage";

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.73 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

export default function Location() {
  return (
    <SectionWrapper id="localizacao" className="bg-soft-white py-20">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

        {/* Informações (50%) */}
        <div className="w-full md:w-1/2">
          <span className="text-wine font-bold text-[10px] uppercase tracking-[0.2em] mb-6 block">
            Onde Estamos
          </span>

          <h2 className="font-serif text-4xl md:text-5xl text-coffee leading-tight mb-8">
            Panificadora Gustapão
          </h2>

          <div className="space-y-6 mb-8">

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-wine-dark/8 flex items-center justify-center text-wine-dark shrink-0 mt-0.5">
                <MapPinIcon />
              </div>
              <div>
                <h4 className="font-semibold text-coffee text-sm mb-1">Endereço</h4>
                <p className="text-coffee/65 text-sm leading-relaxed">
                  {siteConfig.contact.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-wine-dark/8 flex items-center justify-center text-wine-dark shrink-0 mt-0.5">
                <ClockIcon />
              </div>
              <div>
                <h4 className="font-semibold text-coffee text-sm mb-1">Horários</h4>
                <p className="text-coffee/65 text-sm leading-relaxed">
                  {siteConfig.contact.hours.week}<br />
                  {siteConfig.contact.hours.saturday}<br />
                  {siteConfig.contact.hours.sunday}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-wine-dark/8 flex items-center justify-center text-wine-dark shrink-0 mt-0.5">
                <PhoneIcon />
              </div>
              <div>
                <h4 className="font-semibold text-coffee text-sm mb-1">WhatsApp / Telefone</h4>
                <p className="text-coffee/65 text-sm leading-relaxed">
                  {siteConfig.contact.whatsapp}<br />
                  {siteConfig.contact.phone}
                </p>
              </div>
            </div>

          </div>

          <p className="text-[11px] text-coffee/50 mb-8 italic">
            * Horários sujeitos a alteração. Confirme antes de sair, se necessário.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={siteConfig.links.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-wine-dark hover:bg-wine text-white font-bold py-3 px-7 rounded-full transition-all duration-300 shadow-md text-sm"
            >
              Como chegar
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-coffee/20 text-coffee hover:bg-coffee/5 font-semibold py-3 px-7 rounded-full transition-all duration-300 text-sm"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        {/* Mapa (50%) */}
        <div className="w-full md:w-1/2">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-coffee/8 relative bg-[#e0d9cc]">
            <iframe
              src="https://maps.google.com/maps?q=Av.+Cel.+Francisco+H.+dos+Santos%2C+951+-+Jardim+das+Am%C3%A9ricas%2C+Curitiba+-+PR%2C+81530-000&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Panificadora Gustapão - Jardim das Américas"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
