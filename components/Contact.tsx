import { MapPin, Mail, Phone, Instagram, MessageCircle } from "lucide-react";

const info = [
  {
    icon:  MapPin,
    label: "Endereço",
    val:   "Rua Sergipe 435, Jardim dos Estados\nCEP 79020-160, Campo Grande, MS",
  },
  { icon: Mail,      label: "Email",     val: "coworking.edra@gmail.com" },
  { icon: Phone,     label: "Telefone",  val: "(67) 99920-3312" },
  { icon: Instagram, label: "Instagram", val: "@edra.arquitetura_colab" },
];

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-edra-bg">
      <div className="max-w-6xl mx-auto px-8">
        {/* Heading */}
        <div data-reveal="up" className="text-center mb-16">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-tight mb-3">
            Entre em Contato
          </h2>
          <p className="text-[17px] text-edra-fgMuted max-w-md mx-auto leading-relaxed">
            Estamos prontos para ajudar você a encontrar o espaço perfeito.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info list */}
          <div data-reveal="right" className="flex flex-col gap-7">
            {info.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-teal stroke-[1.75]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-edra-fgMuted mb-1">{item.label}</p>
                    <p className="text-[15px] text-edra-fg font-medium whitespace-pre-line leading-snug">{item.val}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA card */}
          <div
            data-reveal="left"
            data-reveal-delay="2"
            className="bg-white rounded-[20px] p-9 border border-edra-border shadow-hover"
          >
            <h3 className="text-[22px] font-extrabold tracking-tight mb-2">Reserve Agora</h3>
            <p className="text-[15px] text-edra-fgMuted leading-relaxed mb-8">
              Entre em contato via WhatsApp para discutir suas necessidades e receber um orçamento personalizado.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/5567999203312?text=Olá, gostaria de mais informações sobre o Edra Coworking.",
                  "_blank"
                )
              }
              className="w-full flex items-center justify-center gap-2.5 bg-teal text-white font-bold text-base h-13 rounded-xl hover:bg-teal-hover transition-all hover:-translate-y-px shadow-[0_4px_20px_rgba(74,171,181,0.28)]"
              style={{ height: 52 }}
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </button>
            <div className="flex items-center gap-2 justify-center mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs text-edra-fgMuted">Geralmente respondemos em menos de 1 hora</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
