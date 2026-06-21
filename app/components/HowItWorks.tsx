import { C, F } from "@/app/lib/tokens";

const steps = [
  {
    n: 1,
    title: "Compre e acesse imediatamente",
    desc: "Após a confirmação do pagamento, você recebe o link de download por e-mail.",
  },
  {
    n: 2,
    title: "Baixe o PDF e imprima",
    desc: "Funciona em impressora doméstica ou gráfica — é seu para sempre.",
  },
  {
    n: 3,
    title: "Aplique do seu jeito",
    desc: "Em grupos, duplas ou individualmente — o manual traz sugestões para sala, reforço e clínica.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-[#F0EFEB]"
      style={{ padding: "clamp(3rem,8vw,5rem) clamp(1rem,5vw,2rem)" }}
      aria-labelledby="how-title"
    >
      <div className="mx-auto w-full max-w-[1100px] grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">

        {/* steps */}
        <div>
          <span
            className="mb-3 inline-block rounded-full bg-[#1A6B3A] px-4 py-1.5 text-white"
            style={{ fontFamily: F.badge, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Sem complicação
          </span>
          <h2
            id="how-title"
            className="mb-6 text-[#1C1C1C]"
            style={{ fontFamily: F.display, fontSize: "clamp(1.6rem,4vw,2.4rem)" }}
          >
            Como funciona na prática:
          </h2>

          <ol className="flex flex-col gap-5">
            {steps.map((s) => (
              <li key={s.n} className="flex items-start gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A6B3A] text-white"
                  style={{ fontFamily: F.display, fontSize: "1.1rem", boxShadow: "0 2px 8px rgba(26,107,58,0.3)" }}
                  aria-hidden="true"
                >
                  {s.n}
                </span>
                <div>
                  <strong className="block" style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.15rem" }}>
                    {s.title}
                  </strong>
                  <p className="text-[#4a4a4a]" style={{ fontSize: "0.9rem", lineHeight: 1.5 }}>
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* video placeholder */}
        <div
          className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-white/20 bg-[#1A6B3A]"
          style={{ aspectRatio: "16/9" }}
          role="button"
          tabIndex={0}
          aria-label="Vídeo de demonstração do kit — clique para assistir"
        >
          {/* field SVG */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full opacity-15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="field" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M60 0 L0 0 0 60" fill="none" stroke="#fff" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#field)" />
            <circle cx="50%" cy="50%" r="20%" fill="none" stroke="#fff" strokeWidth="1" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#fff" strokeWidth="1" />
          </svg>

          <div
            className="z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-[3px] border-white/60 bg-white/20 text-3xl transition-transform hover:scale-110 hover:bg-white/30"
            aria-hidden="true"
          >
            ▶
          </div>

          <p
            className="absolute bottom-4 left-0 right-0 text-center"
            style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}
          >
            ▶ Veja o kit funcionando em 3 minutos
          </p>
        </div>

      </div>
    </section>
  );
}
