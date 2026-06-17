type Resource = {
  num: string;
  badge: string;
  badgeStyle: "verde" | "amarelo" | "azul";
  title: string;
  emoji: string;
  gradient: string;
  placeholderTextColor: string;
  placeholderBorderColor: string;
};

const resources: Resource[] = [
  {
    num: "RECURSO 01",
    badge: "⚽ Recurso Versátil",
    badgeStyle: "verde",
    title: "É GOOL!",
    emoji: "⚽",
    gradient: "linear-gradient(135deg,#e8f5ee 0%,#d0edd9 100%)",
    placeholderTextColor: "rgba(26,107,58,0.5)",
    placeholderBorderColor: "rgba(26,107,58,0.3)",
  },
  {
    num: "RECURSO 02",
    badge: "🃏 Cards • Jogo",
    badgeStyle: "amarelo",
    title: "AQUI É O BRASIL",
    emoji: "🇧🇷",
    gradient: "linear-gradient(135deg,#fffbe6 0%,#fff3b0 100%)",
    placeholderTextColor: "rgba(180,140,0,0.6)",
    placeholderBorderColor: "rgba(180,140,0,0.35)",
  },
  {
    num: "RECURSO 03",
    badge: "➕ Matemática • 4 Operações",
    badgeStyle: "azul",
    title: "MATEMÁTICA DA COPA",
    emoji: "🔢",
    gradient: "linear-gradient(135deg,#dce8ff 0%,#b8d0ff 100%)",
    placeholderTextColor: "rgba(0,71,171,0.5)",
    placeholderBorderColor: "rgba(0,71,171,0.3)",
  },
  {
    num: "RECURSO 04",
    badge: "🎲 Jogo Versátil",
    badgeStyle: "verde",
    title: "CAMPEÃO!",
    emoji: "🏆",
    gradient: "linear-gradient(135deg,#e8f5ee 0%,#c5e5d0 100%)",
    placeholderTextColor: "rgba(26,107,58,0.5)",
    placeholderBorderColor: "rgba(26,107,58,0.3)",
  },
];

const badgeClasses: Record<Resource["badgeStyle"], string> = {
  verde:   "bg-[#e8f5ee] text-[#145530] border border-[rgba(26,107,58,0.2)]",
  amarelo: "bg-[#fffbe6] text-[#8a6d00] border border-[rgba(245,196,0,0.4)]",
  azul:    "bg-[#dce8ff] text-[#0047AB] border border-[rgba(0,71,171,0.2)]",
};

export default function Resources() {
  return (
    <section
      id="recursos"
      className="bg-[#FAFAF7]"
      style={{ padding: "clamp(3rem,8vw,5rem) clamp(1rem,5vw,2rem)" }}
      aria-labelledby="rec-title"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        {/* header */}
        <div className="mb-10 text-center">
          <span
            className="mb-3 inline-block rounded-full bg-[#F5C400] px-4 py-1.5 text-[#145530]"
            style={{ fontFamily: "var(--font-badge)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            ⚽ Os 4 Recursos do Kit
          </span>
          <h2
            id="rec-title"
            className="text-[#1C1C1C]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,4vw,2.4rem)" }}
          >
            Cada um com um propósito pedagógico claro —
          </h2>
          <p className="mt-2 text-[#4a4a4a]" style={{ fontSize: "clamp(0.95rem,2.5vw,1.1rem)", lineHeight: 1.6 }}>
            e a paixão pela Copa como ponto de partida.
          </p>
        </div>

        {/* cards */}
        <div className="flex flex-col gap-6">
          {resources.map((r, i) => (
            <article
              key={r.num}
              className="overflow-hidden rounded-2xl border border-black/[0.06]"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.10)" }}
              aria-label={`${r.num}: ${r.title}`}
            >
              {/*
                Mobile: image always on top.
                Desktop: alternate — odd (0,2) img right, even (1,3) img left.
              */}
              <div className={`flex flex-col md:grid md:grid-cols-2 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>

                {/* image area */}
                <div
                  className="flex min-h-[220px] items-center justify-center border-2 border-dashed border-[rgba(26,107,58,0.25)]"
                  style={{ background: r.gradient }}
                  aria-label={`Espaço para foto do recurso ${r.title}`}
                >
                  <div className="p-8 text-center">
                    <div className="mb-2 text-5xl" aria-hidden="true">{r.emoji}</div>
                    <span
                      className="inline-block rounded-lg border-2 border-dashed px-4 py-2"
                      style={{
                        fontFamily: "var(--font-badge)",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: r.placeholderTextColor,
                        borderColor: r.placeholderBorderColor,
                      }}
                    >
                      Foto do recurso<br />a inserir
                    </span>
                  </div>
                </div>

                {/* body */}
                <div className="bg-white p-6">
                  <p
                    className="mb-1 opacity-60"
                    style={{ fontFamily: "var(--font-badge)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}
                  >
                    {r.num}
                  </p>
                  <span
                    className={`mb-3 inline-block rounded-full px-3 py-1 ${badgeClasses[r.badgeStyle]}`}
                    style={{ fontFamily: "var(--font-badge)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}
                  >
                    {r.badge}
                  </span>
                  <h3
                    className="mb-3 text-[#1C1C1C]"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem" }}
                  >
                    {r.title}
                  </h3>
                  <div
                    className="mb-4 min-h-[60px] rounded-xl border-2 border-dashed border-black/10 bg-[#F0EFEB] px-4 py-3 italic text-black/40"
                    style={{ fontSize: "0.85rem" }}
                    role="note"
                    aria-label="Descrição a preencher"
                  >
                    ✏️ Descrição a ser preenchida pela criadora...
                  </div>
                  <div className="flex flex-wrap gap-1.5" aria-label="Habilidades pedagógicas">
                    <span
                      className="rounded-full border border-black/[0.08] bg-[#F0EFEB] px-3 py-1 text-[#4a4a4a]"
                      style={{ fontFamily: "var(--font-badge)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.05em" }}
                    >
                      Habilidades a definir
                    </span>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
