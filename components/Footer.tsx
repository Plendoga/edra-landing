import Image from "next/image";
import { Instagram } from "lucide-react";

const services = ["Salas de Reunião", "Espaços de Conferência", "Salas Privativas", "Coworking"];
const company  = ["Sobre Nós", "Localização", "Carreiras", "Contato"];
const support  = ["Central de Ajuda", "Termos de Serviço", "Política de Privacidade"];

export function Footer() {
  return (
    <footer className="bg-edra-fg text-white/60">
      <div className="max-w-6xl mx-auto px-8 pt-12 pb-7">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/images/edra-logo.png" alt="Edra" width={30} height={30} className="object-contain" />
              <span className="text-base font-bold text-white">Edra</span>
            </div>
            <p className="text-[13px] leading-relaxed max-w-[220px]">
              Espaços profissionais de coworking e reunião para empresas modernas em Campo Grande.
            </p>
          </div>

          {/* Cols */}
          {[["Serviços", services], ["Empresa", company], ["Suporte", support]].map(([title, items]) => (
            <div key={title as string}>
              <h4 className="text-[13px] font-bold text-white mb-4 tracking-wide">{title as string}</h4>
              <ul className="flex flex-col gap-2.5">
                {(items as string[]).map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2025 Edra. Todos os direitos reservados.</p>
          <a
            href="https://www.instagram.com/edra.arquitetura_colab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
