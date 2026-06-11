import { siteConfig } from "../../config/site";

const metrics = [
  {
    value: "1984",
    label: "Mais de 40 anos de história",
  },
  {
    value: "4,6★",
    label: "Excelente no Google",
  },
  {
    value: "4.027",
    label: "Clientes satisfeitos",
  },
  {
    value: "7×",
    label: "Aberto todos os dias",
  },
];

export default function TrustBanner() {
  return (
    <div className="bg-wine-dark">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-white/10">
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="flex flex-col items-center text-center py-8 md:py-10 px-4"
            >
              <span className="font-serif text-3xl md:text-4xl text-wheat font-normal leading-none mb-2">
                {metric.value}
              </span>
              <span className="text-white/60 text-xs md:text-sm leading-tight max-w-[120px]">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

