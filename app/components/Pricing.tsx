import Link from "next/link";
import { C, F } from "@/app/lib/tokens";

const includes = [
  "4 recursos pedagógicos imprimíveis em PDF",
  "Aulas explicativas em vídeo para cada recurso",
  "Manual de formas de uso (sala, clínica, reforço)",
  "Habilidades da BNCC mapeadas",
  "Versões diferenciadas por nível",
  "Acesso vitalício ao material digital",
];

export default function Pricing() {
  return (
    <section
      id="preco"
      className="bg-[#FAFAF7]"
      style={{ padding: "clamp(3rem,8vw,5rem) clamp(1rem,5vw,2rem)" }}
      aria-labelledby="preco-title"
    >
      <div className="mx-auto w-full max-w-[1100px] grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">

        {/* includes */}
        <div>
          <span
            className="mb-4 inline-block rounded-full bg-[#1A6B3A] px-4 py-1.5 text-white"
            style={{ fontFamily: F.badge, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            O que está incluído
          </span>
          <h2
            id="preco-title"
            className="mb-5 text-[#1C1C1C]"
            style={{ fontFamily: F.display, fontSize: "clamp(1.6rem,4vw,2.2rem)" }}
          >
            Tudo que você precisa para dar uma aula incrível
          </h2>
          <ul className="flex flex-col gap-3" aria-label="Lista de itens incluídos">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5" style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
                <span className="mt-0.5 shrink-0 font-black text-[#1A6B3A]" aria-hidden="true">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* price card */}
        <div
          className="relative overflow-hidden rounded-2xl bg-[#1A6B3A] p-8 text-white"
          style={{ boxShadow: "0 8px 32px rgba(26,107,58,0.25)" }}
          aria-label="Informações de preço"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/[0.06]"
          />

          <p
            className="mb-3 text-white/70"
            style={{ fontFamily: F.badge, fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Kit Recursos da Copa
          </p>

          <p className="mb-1 text-white/60 line-through" style={{ fontSize: "0.95rem" }} aria-label="De R$ PREÇO ORIGINAL">
            De R$ [PREÇO ORIGINAL]
          </p>

          <p
            className="mb-1 leading-none text-[#F5C400]"
            style={{ fontFamily: F.display, fontSize: "clamp(2.8rem,8vw,3.5rem)" }}
            aria-label="Por R$ PREÇO PROMOCIONAL"
          >
            <sup style={{ fontSize: "1.4rem", fontFamily: F.body, fontWeight: 800, verticalAlign: "super" }}>R$</sup>
            [PREÇO]
          </p>

          <p className="mb-6 text-white/75" style={{ fontSize: "0.9rem" }}>
            Ou [X]x de R$ [PARCELA] sem juros
          </p>

          <Link
            href="#"
            className="mb-4 flex w-full items-center justify-center rounded-full bg-[#F5C400] py-4 text-[#145530] transition-transform hover:-translate-y-0.5 active:scale-95"
            style={{
              fontFamily: F.display,
              fontSize: "clamp(1rem,3vw,1.1rem)",
              boxShadow: `0 4px 0 ${C.amareloD}`,
            }}
            aria-label="Quero o Kit Recursos da Copa"
          >
            QUERO O KIT AGORA →
          </Link>

          <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.75)" }}>
            <span aria-hidden="true">🔒</span>
            <span>Garantia de 7 dias — devolvemos 100% do seu dinheiro, sem perguntas.</span>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4" aria-label="Selos de confiança">
            {[["🔒","Compra segura"], ["✅","Acesso imediato"], ["📄","PDF imprimível"]].map(([icon, label]) => (
              <span key={label} className="flex items-center gap-1 text-white/75" style={{ fontSize: "0.78rem", fontWeight: 600 }}>
                <span aria-hidden="true">{icon}</span>{label}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
