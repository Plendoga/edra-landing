import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edra — Coworking & Salas Privativas em Campo Grande",
  description:
    "Coworking e salas privativas para empresas modernas. Reserve por hora ou mês no Jardim dos Estados, Campo Grande, MS.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
