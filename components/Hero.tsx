"use client";

import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-24 bg-edra-bg">
      {/* Parallax blobs */}
      <div
        id="hero-blob-1"
        className="absolute -top-20 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "rgba(74,171,181,0.10)", filter: "blur(80px)", willChange: "transform" }}
      />
      <div
        id="hero-blob-2"
        className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "rgba(74,171,181,0.10)", filter: "blur(60px)", willChange: "transform" }}
      />

      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          {/* Location badge */}
          <div className="animate-fade-right [animation-delay:0.1s] inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            <span className="text-xs font-semibold text-teal-600">Jardim dos Estados · Campo Grande</span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up [animation-delay:0.2s] text-[clamp(2.4rem,4vw,3.6rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-edra-fg text-balance mb-5">
            Coworking e salas<br />
            <span className="text-teal">privativas</span> para<br />
            empresas modernas
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up [animation-delay:0.35s] text-[17px] text-edra-fgMuted leading-relaxed max-w-[460px] mb-9">
            Transforme suas reuniões com espaços premium totalmente equipados.
            Reserve por hora ou mês no coração de Campo Grande.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up [animation-delay:0.5s] flex flex-wrap gap-3">
            <button
              onClick={() => window.open("https://wa.me/5567999203312", "_blank")}
              className="flex items-center gap-2 bg-teal text-white font-bold text-[15px] px-7 h-[50px] rounded-xl hover:bg-teal-hover transition-all hover:-translate-y-px shadow-[0_4px_20px_rgba(74,171,181,0.30)]"
            >
              <MessageCircle size={17} />
              Reservar Sala
            </button>
            <button
              onClick={() => document.getElementById("salas")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 bg-transparent text-edra-fg font-semibold text-[15px] px-6 h-[50px] rounded-xl border border-edra-border hover:border-teal hover:text-teal transition-all"
            >
              Ver Espaços
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up [animation-delay:0.65s] flex gap-8 mt-12">
            {[
              { value: "12", suffix: "+", label: "Empresas atendidas" },
              { value: "3",  suffix: "",  label: "Tipos de sala" },
              { value: "80", prefix: "R$", suffix: "", label: "/hora — sem surpresas" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[22px] font-extrabold tracking-tight text-edra-fg">
                  {s.prefix}{s.value}{s.suffix}
                </div>
                <div className="text-xs text-edra-fgMuted font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image with parallax */}
        <div className="animate-fade-in [animation-delay:0.4s] relative overflow-hidden rounded-3xl">
          <div
            id="hero-img-wrap"
            className="rounded-3xl overflow-hidden shadow-hero aspect-[4/3] relative"
            style={{ willChange: "transform" }}
          >
            <Image
              src="/images/room-executive.jpg"
              alt="Sala Executiva Edra"
              fill
              className="object-cover"
              priority
            />
            {/* Availability badge */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2.5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[13px] font-semibold text-edra-fg">Disponível hoje</span>
            </div>
          </div>

          {/* Floating price card */}
          <div className="absolute -top-5 -right-5 bg-white border border-edra-border rounded-2xl px-5 py-3.5 shadow-hover">
            <div className="text-[11px] text-edra-fgMuted font-semibold mb-0.5">Sala Executiva</div>
            <div className="text-xl font-extrabold text-teal tracking-tight">
              R$ 80<span className="text-xs font-medium text-edra-fgMuted">/hora</span>
            </div>
          </div>

          {/* Decorative teal block */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-teal rounded-2xl -z-10 opacity-30" />
        </div>
      </div>
    </section>
  );
}
