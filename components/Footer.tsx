import { HeartPulse, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const creditText = `© ${currentYear} - Desenvolvido por Alabz - Soluções Digitais`;
  const chars = creditText.split("");
  const totalChars = chars.length;
  const loopDuration = 12.0;

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-6 border-t border-brand-primary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-brand-accent/10 rounded-xl text-brand-accent">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-tight">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] text-brand-accent font-semibold tracking-widest uppercase">
                  {siteConfig.subtitle}
                </span>
              </div>
            </div>
            
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm uppercase tracking-wider text-brand-accent mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-brand-accent mb-4">
              Contatos Clínicos
            </h4>
            
            <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                <a href={siteConfig.contact.phoneUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Developer Branding */}
          <div className="md:col-span-3 flex flex-col items-center text-center relative md:-left-8">
            <h4 className="font-bold text-sm uppercase tracking-wider text-brand-accent mb-4 w-full">
              Desenvolvido por
            </h4>
            <a
              href="https://alabz.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity flex items-center justify-center relative -top-[10px]"
              title="Desenvolvido por Alabz - Soluções Digitais"
            >
              <img
                src="/Logofooter 1.png"
                alt="Desenvolvido por Alabz - Soluções Digitais"
                className="h-[120px] w-auto object-contain"
              />
            </a>
          </div>
        </div>

        {/* Legal and Compliance Footer */}
        <div className="text-[11px] text-white/50 leading-relaxed">
          <div className="border-t border-brand-primary/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
            <p className="font-bold">
              {siteConfig.name} | {siteConfig.crm}
            </p>

            
            {/* Animacão do Pac-Man comendo as letras, pegando Powerup e perseguindo o Fantasma */}
            <div className="relative overflow-hidden z-10 inline-block px-1 py-2 pr-[40px]">
              <style>{`
                @keyframes pacmanMove {
                  0% { left: -30%; transform: translateY(-50%) scaleX(-1) scale(1); }
                  48% { left: 102%; transform: translateY(-50%) scaleX(-1) scale(1); }
                  48.1% { left: 102%; transform: translateY(-50%) scaleX(-1) scale(1.28); }
                  49.5% { left: 102%; transform: translateY(-50%) scaleX(-1) scale(1.28); }
                  49.6% { left: 102%; transform: translateY(-50%) scaleX(1) scale(1.28); }
                  54% { left: 102%; transform: translateY(-50%) scaleX(1) scale(1.28); }
                  70% { left: 20%; transform: translateY(-50%) scaleX(1) scale(1.28); }
                  80%, 100% { left: -30%; transform: translateY(-50%) scaleX(1) scale(1.28); }
                }
                @keyframes ghostMove {
                  0% { left: -60%; transform: translateY(-50%) scaleX(1); }
                  48% { left: 90%; transform: translateY(-50%) scaleX(1); }
                  49.5% { left: 90%; transform: translateY(-50%) scaleX(1); }
                  49.6% { left: 90%; transform: translateY(-50%) scaleX(-1); }
                  51% { left: 90%; transform: translateY(-50%) scaleX(-1); }
                  70% { left: 20%; transform: translateY(-50%) scaleX(-1); }
                  70.1%, 100% { left: -60%; transform: translateY(-50%) scaleX(1); }
                }
                @keyframes ghostOpacity {
                  0%, 70% { opacity: 1; }
                  70.1%, 100% { opacity: 0; }
                }
                @keyframes ghostBodyColor {
                  0%, 48.5% { fill: #FF0000; }
                  48.6%, 65% { fill: #2135a5; }
                  65.1%, 67% { fill: #ffffff; }
                  67.1%, 69% { fill: #2135a5; }
                  69.1%, 70% { fill: #ffffff; }
                  70.1%, 100% { fill: #FF0000; }
                }
                @keyframes normalEyesOpacity {
                  0%, 48.5% { opacity: 1; }
                  48.6%, 70% { opacity: 0; }
                  70.1%, 100% { opacity: 1; }
                }
                @keyframes scaredFaceOpacity {
                  0%, 48.5% { opacity: 0; }
                  48.6%, 70% { opacity: 1; }
                  70.1%, 100% { opacity: 0; }
                }
                @keyframes chompUpper {
                  0%, 100% { transform: rotate(0deg); }
                  50% { transform: rotate(35deg); }
                }
                @keyframes chompLower {
                  0%, 100% { transform: rotate(0deg); }
                  50% { transform: rotate(-35deg); }
                }
                @keyframes pelletExist {
                  0%, 48% { opacity: 1; }
                  48.1%, 100% { opacity: 0; }
                }
                @keyframes pelletBlink {
                  0%, 100% { transform: scale(1); opacity: 1; }
                  50% { transform: scale(0.6); opacity: 0.4; }
                }
              `}</style>
              
              <div className="relative">
                <p className="font-bold relative z-10">
                  <a
                    href="https://alabz.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-accent transition-colors flex items-center"
                    title="Desenvolvido por Alabz - Soluções Digitais"
                  >
                    {chars.map((char, index) => {
                      const ratio = totalChars > 1 ? index / (totalChars - 1) : 0.5;
                      const eatPercent = ((0.30 + ratio) / 1.30) * 48;
                      const reappearPercent = eatPercent + 10;
                      return (
                        <span
                          key={index}
                          className="inline-block relative z-10"
                          style={{
                            animation: `letterEat_${index} ${loopDuration}s linear infinite`,
                          }}
                        >
                          <style>{`
                            @keyframes letterEat_${index} {
                              0%, ${Math.max(0, eatPercent - 1)}% { transform: scale(1); opacity: 1; }
                              ${eatPercent - 0.5}% { transform: scale(1.2) rotate(-5deg); opacity: 1; }
                              ${eatPercent}%, ${reappearPercent}% { transform: scale(0); opacity: 0; }
                              ${reappearPercent + 1}%, 100% { transform: scale(1); opacity: 1; }
                            }
                          `}</style>
                          {char === " " ? "\u00A0" : char}
                        </span>
                      );
                    })}
                  </a>
                </p>

                {/* Power Pellet (Ponto de Poder) */}
                <svg
                  viewBox="0 0 10 10"
                  className="absolute top-1/2 pointer-events-none z-20"
                  style={{
                    width: '8px',
                    height: '8px',
                    left: '102%',
                    transform: 'translateY(-50%)',
                    animation: `pelletExist ${loopDuration}s step-end infinite`,
                  }}
                >
                  <circle
                    cx="5"
                    cy="5"
                    r="4"
                    fill="#FFD200"
                    style={{ transformOrigin: 'center', animation: 'pelletBlink 0.8s infinite ease-in-out' }}
                  />
                </svg>
                
                {/* Pac-Man Amarelo SVG */}
                <svg
                  viewBox="0 0 24 24"
                  className="absolute top-1/2 pointer-events-none z-30"
                  style={{
                    width: '28px',
                    height: '28px',
                    animation: `pacmanMove ${loopDuration}s linear infinite`,
                  }}
                >
                  <g transform="translate(12, 12)">
                    {/* Mandíbula Superior com Olho */}
                    <g style={{ transformOrigin: '0px 0px', animation: 'chompUpper 0.25s infinite ease-in-out' }}>
                      <path d="M0 0 L-10 0 A10 10 0 0 1 10 0 Z" fill="#FFD200" />
                      <circle cx="2" cy="-5" r="1.5" fill="#000" />
                    </g>
                    {/* Mandíbula Inferior */}
                    <path
                      d="M0 0 L-10 0 A10 10 0 0 0 10 0 Z"
                      fill="#FFD200"
                      style={{ transformOrigin: '0px 0px', animation: 'chompLower 0.25s infinite ease-in-out' }}
                    />
                  </g>
                </svg>

                {/* Fantasminha Vermelho SVG */}
                <svg
                  viewBox="0 0 24 24"
                  className="absolute top-1/2 pointer-events-none z-30"
                  style={{
                    width: '28px',
                    height: '28px',
                    animation: `ghostMove ${loopDuration}s linear infinite, ghostOpacity ${loopDuration}s step-end infinite`,
                  }}
                >
                  {/* Red Body that changes color when scared */}
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12v10l3-3 3 3 4-4 4 4 3-3 3 3V12c0-5.52-4.48-10-10-10z"
                    style={{ animation: `ghostBodyColor ${loopDuration}s step-end infinite` }}
                  />
                  
                  {/* Normal Eyes (white + blue pupils looking right) */}
                  <g style={{ animation: `normalEyesOpacity ${loopDuration}s step-end infinite` }}>
                    <ellipse cx="9" cy="11" rx="2.5" ry="3.5" fill="#FFFFFF" />
                    <ellipse cx="15" cy="11" rx="2.5" ry="3.5" fill="#FFFFFF" />
                    <circle cx="10" cy="11" r="1.2" fill="#0066FF" />
                    <circle cx="16" cy="11" r="1.2" fill="#0066FF" />
                  </g>
                  {/* Scared Face (blue ghost squiggly mouth + eyes) */}
                  <g style={{ animation: `scaredFaceOpacity ${loopDuration}s step-end infinite` }}>
                    <circle cx="9" cy="11" r="1.5" fill="#FFB8AE" />
                    <circle cx="15" cy="11" r="1.5" fill="#FFB8AE" />
                    <path
                      d="M 8,15 Q 10,13 12,15 Q 14,13 16,15"
                      stroke="#FFB8AE"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
