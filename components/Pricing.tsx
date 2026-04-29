"use client";

import { Check } from "lucide-react";

const plans = [
  {
    name:     "Sala por Hora",
    price:    "R$ 80",
    period:   "/hora",
    desc:     "Ideal para reuniões pontuais.",
    popular:  false,
    dir:      "right",
    features: [
      "Qualquer sala privativa",
      "Equipamentos audiovisuais",
      "Wi-Fi de alta velocidade",
      "Quadro branco incluso",
      "Café e água inclusos",
      "Cancelamento flexível",
    ],
  },
  {
    name:     "Plano Mensal",
    price:    "R$ 800",
    period:   "/mês",
    desc:     "Acesso recorrente com sala privativa compartilhada.",
    popular:  true,
    dir:      "scale",
    features: [
      "Acesso a todo o espaço",
      "Sala privativa compartilhada",
      "Wi-Fi de alta velocidade",
      "Café e água inclusos",
      "Recepção compartilhada",
      "Estacionamento disponível",
    ],
  },
  {
    name:     "Sala de Reunião",
    price:    "Sob consulta",
    period:   "",
    desc:     "Para grupos maiores com necessidades especiais.",
    popular:  false,
    dir:      "left",
    features: [
      "Capacidade para grupos grandes",
      "Equipamentos premium",
      "Videoconferência",
      "Serviço de catering",
      "Suporte dedicado",
      "Configuração personalizada",
    ],
  },
];

export function Pricing() {
  return (
    <section id="precos" className="py-24 bg-edra-bgAlt">
      <div className="max-w-6xl mx-auto px-8">
        {/* Heading */}
        <div data-reveal="up" className="text-center mb-16">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-tight mb-3">
            Planos e Preços
          </h2>
          <p className="text-[17px] text-edra-fgMuted max-w-md mx-auto leading-relaxed">
            Preços transparentes, sem taxas ocultas. Todos os planos incluem nossas comodidades principais.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              data-reveal={plan.dir}
              data-reveal-delay={String(i + 1)}
              className={`rounded-[20px] p-8 relative ${
                plan.popular
                  ? "bg-edra-fg text-white shadow-[0_20px_60px_rgba(30,29,27,0.22)] scale-[1.04]"
                  : "bg-white border border-edra-border shadow-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Mais Popular
                </div>
              )}

              <p className={`text-sm font-bold mb-2 ${plan.popular ? "text-white/60" : "text-edra-fgMuted"}`}>
                {plan.name}
              </p>
              <div className="flex items-baseline gap-1 mb-1.5">
                <span className={`font-extrabold tracking-tight ${plan.price.length > 6 ? "text-xl" : "text-[2rem]"} ${plan.popular ? "text-white" : "text-edra-fg"}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-sm font-medium ${plan.popular ? "text-white/50" : "text-edra-fgMuted"}`}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p className={`text-[13px] mb-7 leading-snug ${plan.popular ? "text-white/55" : "text-edra-fgMuted"}`}>
                {plan.desc}
              </p>

              <ul className="flex flex-col gap-2.5 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px]">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-teal" : "bg-teal-50"}`}>
                      <Check size={10} strokeWidth={3} className={plan.popular ? "text-white" : "text-teal"} />
                    </span>
                    <span className={plan.popular ? "text-white/80" : "text-edra-fg"}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/5567999203312?text=${encodeURIComponent("Olá, tenho interesse no plano: " + plan.name)}`,
                    "_blank"
                  )
                }
                className={`w-full h-11 rounded-xl font-bold text-sm transition-all hover:-translate-y-px hover:opacity-90 ${
                  plan.popular
                    ? "bg-teal text-white"
                    : "border border-edra-border text-edra-fg hover:border-teal hover:text-teal bg-transparent"
                }`}
              >
                Consultar {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
