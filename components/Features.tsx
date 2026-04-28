import { MapPin, Clock, Users, Monitor, Coffee, ShieldCheck } from "lucide-react";

const items = [
  { icon: MapPin,       title: "Localização Premium",    desc: "Rua Sergipe 435, Jardim dos Estados — fácil acesso e estacionamento disponível." },
  { icon: Clock,        title: "Reserva Flexível",       desc: "Reserve por hora, dia ou mês. Sem contratos longos, sem burocracia." },
  { icon: Users,        title: "Capacidade Variada",     desc: "Salas íntimas para 4 pessoas até espaços para reuniões de 12 participantes." },
  { icon: Monitor,      title: "Totalmente Equipadas",   desc: "TV 4K, projetor, quadro branco, Wi-Fi de alta velocidade e ar condicionado." },
  { icon: Coffee,       title: "Café e Água Inclusos",   desc: "Bebidas incluídas em todos os planos. Ambiente aconchegante para seu time." },
  { icon: ShieldCheck,  title: "Ambiente Profissional",  desc: "Recepção, suporte dedicado e um endereço corporativo que impressiona." },
];

const directions = ["right", "up", "left", "right", "up", "left"] as const;

export function Features() {
  return (
    <section id="sobre" className="py-24 bg-edra-bgAlt">
      <div className="max-w-6xl mx-auto px-8">
        {/* Heading */}
        <div data-reveal="up" className="text-center mb-16">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-tight mb-3">
            Por que escolher o <span className="text-teal">Edra</span>?
          </h2>
          <p className="text-[17px] text-edra-fgMuted max-w-lg mx-auto leading-relaxed">
            Espaços flexíveis para empresas que valorizam produtividade sem compromissos desnecessários.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-reveal={directions[i]}
                data-reveal-delay={String((i % 3) + 1)}
                className="bg-white rounded-2xl p-7 border border-edra-border transition-all duration-300 hover:shadow-hover hover:-translate-y-1 cursor-default"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-teal stroke-[1.75]" />
                </div>
                <h3 className="text-base font-bold mb-2 text-edra-fg">{item.title}</h3>
                <p className="text-sm text-edra-fgMuted leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
