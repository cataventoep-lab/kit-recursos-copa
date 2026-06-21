import { C, F, shadow } from "@/app/lib/tokens";

const items = [
  {
    icon: "📄",
    title: "Kit completo em PDF para imprimir",
    detail: "Alta resolução — funciona em impressora doméstica ou gráfica",
    accent: C.verde,
  },
  {
    icon: "🎥",
    title: "Aulas explicativas do Kit",
    detail: "Vídeos curtos mostrando como aplicar cada recurso",
    accent: C.amarelo,
  },
  {
    icon: "📋",
    title: "Manual de formas de uso",
    detail: "Sugestões para sala de aula, reforço, atendimento individual e clínica",
    accent: C.azul,
  },
  {
    icon: "✅",
    title: "Alinhado à BNCC",
    detail: "Habilidades mapeadas para cada recurso do kit",
    accent: C.verde,
  },
];

export default function Deliverables() {
  return (
    <section
      id="receber"
      className="bg-[#F0EFEB]"
      style={{ padding: "clamp(3rem,8vw,5rem) clamp(1rem,5vw,2rem)" }}
      aria-labelledby="del-title"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="mb-10 text-center">
          <span
            className="mb-3 inline-block rounded-full bg-[#1A6B3A] px-4 py-1.5 text-white"
            style={{ fontFamily: F.badge, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Tudo que vem no kit
          </span>
          <h2
            id="del-title"
            className="text-[#1C1C1C]"
            style={{ fontFamily: F.display, fontSize: "clamp(1.6rem,4vw,2.4rem)" }}
          >
            Veja tudo que você vai receber:
          </h2>
          <p className="mt-2 text-[#4a4a4a]" style={{ fontSize: "clamp(0.95rem,2.5vw,1.1rem)", lineHeight: 1.6 }}>
            Pronto para imprimir, aplicar e guardar para sempre.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 transition-transform hover:-translate-y-0.5"
              style={{ borderLeft: `4px solid ${item.accent}`, boxShadow: shadow.card }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl"
                style={{ background: i === 1 ? "#fffbe6" : i === 2 ? C.azulLight : C.verdeLight }}
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <div>
                <p
                  className="text-[#1C1C1C]"
                  style={{ fontFamily: F.display, fontSize: "1rem", marginBottom: "0.2rem" }}
                >
                  {item.title}
                </p>
                <p className="text-[#4a4a4a]" style={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
