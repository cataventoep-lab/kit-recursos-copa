import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#1A6B3A] field-pattern text-white"
      style={{ padding: "clamp(2.5rem,8vw,5rem) clamp(1rem,5vw,2rem)" }}
      aria-label="Apresentação do Kit Recursos da Copa"
    >
      {/* decorative circles */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full opacity-[0.08]"
        style={{ width: 500, height: 500, background: "#F5C400", top: -200, right: -150 }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full opacity-[0.08]"
        style={{ width: 300, height: 300, background: "#0047AB", bottom: -100, left: -80 }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">

        {/* ── Text ── */}
        <div>
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5"
            style={{ fontFamily: "var(--font-badge)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            🏆 Kit Pedagógico Temático
          </div>

          <h1
            className="leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,8vw,4rem)" }}
          >
            A{" "}
            <span className="relative inline-block">
              Copa
              <span
                aria-hidden="true"
                className="absolute bottom-0.5 left-0 h-1 w-full rounded-sm bg-[#F5C400] opacity-80"
              />
            </span>{" "}
            é o gancho.
            <br />
            O aprendizado é o{" "}
            <span className="text-[#F5C400]">gol.</span>
          </h1>

          <p
            className="mt-4 mb-6"
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1rem,3vw,1.2rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}
          >
            Um kit de recursos com temática da Copa para trabalhar
            Português e Matemática com seus alunos.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#preco"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F5C400] px-8 py-4 text-[#145530] transition-transform hover:-translate-y-0.5 active:scale-95"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1rem,3vw,1.1rem)",
                boxShadow: "0 4px 0 #d4a900, 0 6px 20px rgba(245,196,0,0.35)",
              }}
              aria-label="Comprar Kit Recursos da Copa agora"
            >
              QUERO O KIT AGORA →
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)" }}>
            <span className="text-[#F5C400]" aria-label="5 estrelas">★★★★★</span>
            <span>Mais de 500 professoras já estão usando em sala</span>
          </div>
        </div>

        {/* ── Mockup card ── */}
        <div className="relative flex justify-center">
          {/* floating stickers */}
          <span aria-hidden="true" className="float-1 pointer-events-none absolute -top-4 right-4 text-3xl drop-shadow-md">⚽</span>
          <span aria-hidden="true" className="float-2 pointer-events-none absolute left-0 top-8 text-2xl drop-shadow-md">🏆</span>
          <span aria-hidden="true" className="float-3 pointer-events-none absolute -right-2 bottom-4 text-xl drop-shadow-md">📣</span>

          <div
            className="w-full max-w-sm rounded-2xl border border-white/25 bg-white/12 p-6 backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.12)" }}
          >
            <p
              className="mb-4 text-[#F5C400]"
              style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem" }}
            >
              Kit Recursos da Copa
            </p>

            {[
              { n: 1, label: "É GOOL! — Recurso Versátil" },
              { n: 2, label: "AQUI É O BRASIL — Cards" },
              { n: 3, label: "MATEMÁTICA DA COPA" },
              { n: 4, label: "CAMPEÃO! — Jogo Versátil" },
            ].map(({ n, label }) => (
              <div
                key={n}
                className="mb-2 flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2.5 last:mb-0"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F5C400] text-[#145530]"
                  style={{ fontFamily: "var(--font-badge)", fontSize: "0.75rem", fontWeight: 700 }}
                  aria-hidden="true"
                >
                  {n}
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
