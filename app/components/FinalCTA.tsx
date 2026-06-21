import Link from "next/link";
import { C, F, shadow } from "@/app/lib/tokens";

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-[#F5C400] text-center"
      style={{ padding: "clamp(3rem,8vw,5rem) clamp(1rem,5vw,2rem)" }}
      aria-labelledby="cta-final-title"
    >
      {/* grid pattern */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg,rgba(0,0,0,0.03) 0px,rgba(0,0,0,0.03) 1px,transparent 1px,transparent 40px), repeating-linear-gradient(0deg,rgba(0,0,0,0.03) 0px,rgba(0,0,0,0.03) 1px,transparent 1px,transparent 40px)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1100px]">
        <h2
          id="cta-final-title"
          className="mb-3 text-[#145530]"
          style={{ fontFamily: F.display, fontSize: "clamp(1.8rem,5vw,2.8rem)" }}
        >
          Pronta para usar a Copa a favor da sua aula?
        </h2>

        <p className="mb-7" style={{ fontSize: "clamp(1rem,3vw,1.15rem)", color: "rgba(20,85,48,0.8)" }}>
          Compre agora, imprima hoje e aplique na próxima aula.
        </p>

        <Link
          href="#preco"
          className="inline-flex items-center justify-center rounded-full bg-[#1A6B3A] px-10 py-4 text-white transition-transform hover:-translate-y-0.5 active:scale-95"
          style={{
            fontFamily: F.display,
            fontSize: "clamp(1rem,3vw,1.15rem)",
            boxShadow: shadow.btnGreen,
          }}
          aria-label="Quero o Kit Recursos da Copa agora"
        >
          QUERO O KIT RECURSOS DA COPA →
        </Link>

        <div
          className="mt-6 flex flex-wrap justify-center gap-4 text-[rgba(20,85,48,0.75)]"
          style={{ fontSize: "0.85rem", fontWeight: 700 }}
          aria-label="Garantias"
        >
          <span className="flex items-center gap-1"><span aria-hidden="true">★★★★★</span> 500+ professoras</span>
          <span className="flex items-center gap-1"><span aria-hidden="true">🔒</span> Garantia de 7 dias</span>
          <span className="flex items-center gap-1"><span aria-hidden="true">📄</span> PDF imprimível</span>
        </div>
      </div>
    </section>
  );
}
