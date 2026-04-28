"use client";

import Image from "next/image";
import { Users, ArrowRight } from "lucide-react";

const rooms = [
  {
    img:   "/images/room-executive.jpg",
    title: "Sala Executiva",
    cap:   "Até 8 pessoas",
    tag:   "TV 4K · Som · AC",
    price: "R$80/h",
    dir:   "right",
  },
  {
    img:   "/images/room-conference.jpg",
    title: "Sala de Conferência",
    cap:   "Até 12 pessoas",
    tag:   "Projetor · Videoconf",
    price: "Sob consulta",
    dir:   "scale",
  },
  {
    img:   "/images/room-compact.jpg",
    title: "Sala Compacta",
    cap:   "Até 4 pessoas",
    tag:   "Aconchegante · Privativa",
    price: "R$80/h",
    dir:   "left",
  },
];

export function Rooms() {
  return (
    <section id="salas" className="py-24 bg-edra-bg">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header row */}
        <div data-reveal="up" className="flex justify-between items-end mb-14">
          <div>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-tight mb-2">
              Nossas Salas
            </h2>
            <p className="text-base text-edra-fgMuted max-w-sm leading-relaxed">
              Espaços modernos e profissionais equipados para reuniões produtivas.
            </p>
          </div>
          <button
            onClick={() => window.open("https://wa.me/5567999203312", "_blank")}
            className="hidden md:flex items-center gap-2 bg-teal-50 text-teal border border-teal-100 font-semibold text-sm px-5 h-10 rounded-xl hover:bg-teal hover:text-white transition-all shrink-0"
          >
            Consultar disponibilidade
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <div
              key={room.title}
              data-reveal={room.dir}
              data-reveal-delay={String(i + 1)}
              className="group rounded-[20px] overflow-hidden bg-white border border-edra-border shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={room.img}
                  alt={room.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 right-3.5 bg-white rounded-lg px-3 py-1 text-xs font-bold text-teal">
                  {room.price}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 pb-6">
                <div className="flex justify-between items-start mb-1.5">
                  <h3 className="text-[17px] font-bold text-edra-fg">{room.title}</h3>
                  <span className="flex items-center gap-1 text-xs text-edra-fgMuted font-medium shrink-0 ml-2 mt-0.5">
                    <Users size={12} />
                    {room.cap}
                  </span>
                </div>
                <p className="text-xs text-edra-fgMuted mb-5">{room.tag}</p>
                <button
                  onClick={() => window.open("https://wa.me/5567999203312", "_blank")}
                  className="w-full h-10 bg-teal-50 text-teal border border-teal-100 font-semibold text-[13px] rounded-xl hover:bg-teal hover:text-white transition-all"
                >
                  Reservar esta sala
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
