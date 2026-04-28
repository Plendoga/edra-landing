"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    ["inicio",  "Início"],
    ["sobre",   "Sobre"],
    ["salas",   "Salas"],
    ["precos",  "Preços"],
    ["contato", "Contato"],
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-edra-bg/90 backdrop-blur-md border-b border-edra-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <Image src="/images/edra-logo.png" alt="Edra" width={36} height={36} className="object-contain" />
          <span className="text-lg font-bold tracking-tight text-edra-fg">Edra</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === id
                  ? "text-teal-400"
                  : "text-edra-fgMuted hover:text-edra-fg"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() =>
            window.open(
              "https://wa.me/5567999203312?text=Olá, gostaria de informações sobre o Edra Coworking.",
              "_blank"
            )
          }
          className="flex items-center gap-2 bg-teal text-white font-semibold text-sm px-4 h-9 rounded-lg hover:bg-teal-hover transition-colors"
        >
          <MessageCircle size={15} />
          Reservar via WhatsApp
        </button>
      </div>
    </header>
  );
}
