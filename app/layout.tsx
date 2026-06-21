import type { Metadata } from "next";
import { Fredoka, Nunito, Barlow_Condensed, Bebas_Neue } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const nunito = Nunito({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hero",
  display: "swap",
});

const barlow = Barlow_Condensed({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-badge",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kit Recursos da Copa – Material Pedagógico para Anos Iniciais",
  description:
    "Kit pedagógico temático da Copa do Mundo para 1º ao 5º ano. 4 recursos imprimíveis de Português e Matemática alinhados à BNCC.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${fredoka.variable} ${nunito.variable} ${barlow.variable} ${bebas.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
