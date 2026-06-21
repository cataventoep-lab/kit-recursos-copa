import Link from "next/link";

/* ── Hexagon SVG for football skin pattern ── */
function HexPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon
            points="15,2 45,2 58,26 45,50 15,50 2,26"
            fill="none"
            stroke="#fff"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  );
}

/* ── Diagonal stripe accent ── */
function DiagonalStripe() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* dark vertical band on right side (desktop) */}
      <div
        className="absolute right-0 top-0 hidden h-full w-[42%] md:block"
        style={{ background: "rgba(0,0,0,0.18)" }}
      />
      {/* diagonal cut between both halves */}
      <div
        className="absolute hidden h-full md:block"
        style={{
          right: "calc(42% - 60px)",
          top: 0,
          width: 120,
          background: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.18) 100%)",
          clipPath: "polygon(60px 0,120px 0,60px 100%,0 100%)",
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#1A6B3A] text-white"
      style={{ minHeight: "clamp(520px,90vh,780px)" }}
      aria-label="Apresentação do Kit Recursos da Copa"
    >
      {/* layers */}
      <HexPattern />
      <DiagonalStripe />

      {/* yellow bottom stripe accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#F5C400]"
      />

      {/* content */}
      <div
        className="relative z-10 mx-auto flex h-full w-full max-w-[1100px] flex-col gap-0 md:grid md:grid-cols-[1fr_400px] md:items-stretch"
        style={{ padding: "clamp(2.5rem,7vw,4.5rem) clamp(1rem,5vw,2rem)" }}
      >

        {/* ── LEFT — text ── */}
        <div className="flex flex-col justify-center">

          {/* eyebrow badge */}
          <div className="mb-5 flex items-center gap-3 flex-wrap">
            <span
              className="inline-flex items-center gap-1.5 rounded-sm bg-[#F5C400] px-3 py-1 text-[#145530]"
              style={{ fontFamily: "var(--font-badge)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}
            >
              ⚽ Kit Pedagógico Temático
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-sm border border-white/30 px-3 py-1 text-white/80"
              style={{ fontFamily: "var(--font-badge)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em" }}
            >
              1º AO 5º ANO
            </span>
          </div>

          {/* HEADLINE — Bebas Neue sports poster style */}
          <h1
            aria-label="A Copa é o gancho. O aprendizado é o gol."
            className="leading-[0.92] tracking-wide"
            style={{ fontFamily: "var(--font-hero)", fontSize: "clamp(3.8rem,12vw,7.5rem)" }}
          >
            <span className="block text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              A{" "}
              <span className="relative inline-block">
                COPA
                {/* wavy underline */}
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 100 6"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,3 Q12.5,0 25,3 T50,3 T75,3 T100,3"
                    fill="none"
                    stroke="#F5C400"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              É O GANCHO.
            </span>
            <span className="block">
              <span className="text-white/90">O APRENDIZADO</span>
            </span>
            <span className="block">
              É O{" "}
              <span
                className="relative"
                style={{
                  color: "#F5C400",
                  textShadow: "0 0 40px rgba(245,196,0,0.4)",
                }}
              >
                GOL.
                {/* glare */}
                <span
                  aria-hidden="true"
                  className="absolute -right-3 -top-2 text-[0.3em] text-white opacity-80"
                  style={{ fontFamily: "var(--font-badge)" }}
                >
                  ✦
                </span>
              </span>
            </span>
          </h1>

          {/* sub */}
          <p
            className="mt-5 max-w-md"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem,2.5vw,1.15rem)",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.65,
            }}
          >
            Um kit de recursos com temática da Copa para trabalhar
            <strong className="text-white"> Português e Matemática</strong> com seus alunos.
          </p>

          {/* CTA row */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#preco"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#F5C400] px-8 py-4 text-[#145530] transition-transform hover:-translate-y-0.5 active:scale-95"
              style={{
                fontFamily: "var(--font-badge)",
                fontSize: "1.05rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                boxShadow: "0 5px 0 #d4a900, 0 8px 24px rgba(245,196,0,0.35)",
              }}
              aria-label="Comprar Kit Recursos da Copa agora"
            >
              ⚽ QUERO O KIT AGORA →
            </Link>
          </div>

          {/* social proof */}
          <div
            className="mt-5 flex flex-wrap items-center gap-2"
            style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" }}
          >
            <span className="text-[#F5C400]" aria-label="5 estrelas">★★★★★</span>
            <span>+500 professoras já estão usando em sala</span>
          </div>
        </div>

        {/* ── RIGHT — kit card ── */}
        <div className="mt-8 flex items-center justify-center md:mt-0">

          {/* floating stickers */}
          <span aria-hidden="true" className="float-1 pointer-events-none absolute right-[38%] top-6 text-4xl drop-shadow-lg md:right-[43%]">⚽</span>
          <span aria-hidden="true" className="float-2 pointer-events-none absolute right-4 top-6 text-2xl drop-shadow-lg md:top-10">🏆</span>
          <span aria-hidden="true" className="float-3 pointer-events-none absolute bottom-8 right-6 text-2xl drop-shadow-lg">📣</span>

          <div className="w-full max-w-[340px]">

            {/* scoreboard-style header */}
            <div
              className="rounded-t-lg px-4 py-2 flex items-center justify-between"
              style={{ background: "#145530" }}
            >
              <span
                style={{ fontFamily: "var(--font-badge)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", color: "#F5C400" }}
              >
                KIT RECURSOS DA COPA
              </span>
              <span style={{ fontSize: "0.9rem" }} aria-hidden="true">🇧🇷</span>
            </div>

            {/* kit list card */}
            <div
              className="rounded-b-lg p-4"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
              }}
            >
              {[
                { n: 1, label: "É GOOL!", sub: "Recurso Versátil" },
                { n: 2, label: "AQUI É O BRASIL", sub: "Cards • Jogo" },
                { n: 3, label: "MATEMÁTICA DA COPA", sub: "4 Operações" },
                { n: 4, label: "CAMPEÃO!", sub: "Jogo Versátil" },
              ].map(({ n, label, sub }) => (
                <div
                  key={n}
                  className="mb-2 flex items-center gap-3 rounded-md px-3 py-2.5 last:mb-0 transition-colors hover:bg-white/10"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  {/* jersey number style */}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#F5C400] text-[#F5C400]"
                    style={{ fontFamily: "var(--font-hero)", fontSize: "1.1rem", lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {n}
                  </span>
                  <div>
                    <p
                      className="text-white leading-none"
                      style={{ fontFamily: "var(--font-badge)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.04em" }}
                    >
                      {label}
                    </p>
                    <p
                      className="mt-0.5"
                      style={{ fontFamily: "var(--font-badge)", fontSize: "0.72rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.05em" }}
                    >
                      {sub}
                    </p>
                  </div>
                </div>
              ))}

              {/* included tag */}
              <div
                className="mt-3 flex items-center justify-center gap-1.5 rounded-md py-2"
                style={{ background: "rgba(245,196,0,0.15)", border: "1px solid rgba(245,196,0,0.3)" }}
              >
                <span className="text-[#F5C400]" style={{ fontSize: "0.75rem" }}>✔</span>
                <span
                  className="text-[#F5C400]"
                  style={{ fontFamily: "var(--font-badge)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em" }}
                >
                  PDF + VÍDEO + MANUAL + BNCC
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
