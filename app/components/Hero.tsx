import Link from "next/link";
import { C, F, shadow } from "@/app/lib/tokens";

function HexPattern() {
  return (
    <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="15,2 45,2 58,26 45,50 15,50 2,26" fill="none" stroke="#fff" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  );
}

const kitItems = [
  { n: 1, label: "É GOOL!", sub: "Recurso Versátil" },
  { n: 2, label: "AQUI É O BRASIL", sub: "Cards • Jogo" },
  { n: 3, label: "MATEMÁTICA DA COPA", sub: "4 Operações" },
  { n: 4, label: "CAMPEÃO!", sub: "Jogo Versátil" },
];

export default function Hero() {
  return (
    <section
      aria-label="Apresentação do Kit Recursos da Copa"
      style={{
        position: "relative",
        overflow: "hidden",
        background: C.verde,
        color: "#fff",
        minHeight: "clamp(520px,88vh,760px)",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <HexPattern />

      {/* yellow bottom stripe */}
      <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 6, background: C.amarelo }} />

      <div style={{
        position: "relative", zIndex: 1,
        width: "100%", maxWidth: 1100, margin: "0 auto",
        padding: "clamp(2.5rem,7vw,4.5rem) clamp(1rem,5vw,2rem)",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "2.5rem",
        alignItems: "center",
      }}
        className="md:grid-cols-[1fr_380px]"
      >

        {/* ── Text ── */}
        <div>
          {/* badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1.4rem" }}>
            <span style={{ fontFamily: F.badge, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", background: C.amarelo, color: C.verdeDark, padding: "0.3rem 0.85rem", borderRadius: 4 }}>
              ⚽ Kit Pedagógico Temático
            </span>
            <span style={{ fontFamily: F.badge, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)", padding: "0.3rem 0.85rem", borderRadius: 4 }}>
              1º AO 5º ANO
            </span>
          </div>

          {/* HEADLINE — Bebas Neue */}
          <h1
            aria-label="A Copa é o gancho. O aprendizado é o gol."
            style={{ fontFamily: F.hero, fontSize: "clamp(3.6rem,11vw,7rem)", lineHeight: 0.93, letterSpacing: "0.02em" }}
          >
            <span style={{ display: "block", color: "#fff", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}>
              A{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                COPA
                <svg aria-hidden="true" style={{ position: "absolute", bottom: -2, left: 0, width: "100%" }} height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                  <path d="M0,3 Q12.5,0 25,3 T50,3 T75,3 T100,3" fill="none" stroke={C.amarelo} strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              É O GANCHO.
            </span>
            <span style={{ display: "block", color: "rgba(255,255,255,0.88)" }}>O APRENDIZADO</span>
            <span style={{ display: "block" }}>
              É O{" "}
              <span style={{ color: C.amarelo, textShadow: `0 0 40px rgba(245,196,0,0.45)` }}>
                GOL.
              </span>
            </span>
          </h1>

          {/* subheadline */}
          <p style={{ fontFamily: F.body, fontSize: "clamp(1rem,2.5vw,1.15rem)", color: "rgba(255,255,255,0.82)", lineHeight: 1.65, marginTop: "1.25rem", maxWidth: 480 }}>
            Um kit de recursos com temática da Copa para trabalhar{" "}
            <strong style={{ color: "#fff" }}>Português e Matemática</strong> com seus alunos.
          </p>

          {/* CTA */}
          <div style={{ marginTop: "1.75rem", display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
            <Link
              href="#preco"
              aria-label="Comprar Kit Recursos da Copa agora"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
                fontFamily: F.badge, fontSize: "1rem", fontWeight: 700, letterSpacing: "0.1em",
                background: C.amarelo, color: C.verdeDark,
                padding: "1rem 2rem", borderRadius: 6,
                boxShadow: shadow.btnYellow,
                transition: "transform 0.15s",
              }}
            >
              ⚽ QUERO O KIT AGORA →
            </Link>
          </div>

          {/* social proof */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1.1rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", flexWrap: "wrap" }}>
            <span style={{ color: C.amarelo }} aria-label="5 estrelas">★★★★★</span>
            <span>+500 professoras já estão usando em sala</span>
          </div>
        </div>

        {/* ── Kit card ── */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <span aria-hidden="true" className="float-1" style={{ position: "absolute", top: -16, right: "20%", fontSize: "2.2rem", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))", pointerEvents: "none", zIndex: 2 }}>⚽</span>
          <span aria-hidden="true" className="float-2" style={{ position: "absolute", top: 16, right: -8,   fontSize: "1.6rem", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))", pointerEvents: "none", zIndex: 2 }}>🏆</span>
          <span aria-hidden="true" className="float-3" style={{ position: "absolute", bottom: 8, right: 4,  fontSize: "1.5rem", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))", pointerEvents: "none", zIndex: 2 }}>📣</span>

          <div style={{ width: "100%", maxWidth: 340 }}>
            {/* scoreboard header */}
            <div style={{ background: C.verdeDark, borderRadius: "10px 10px 0 0", padding: "0.6rem 1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: F.badge, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", color: C.amarelo }}>
                KIT RECURSOS DA COPA
              </span>
              <span aria-hidden="true">🇧🇷</span>
            </div>

            {/* list */}
            <div style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderTop: "none", borderRadius: "0 0 10px 10px", padding: "0.75rem", backdropFilter: "blur(8px)" }}>
              {kitItems.map(({ n, label, sub }) => (
                <div key={n} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "rgba(255,255,255,0.07)", borderRadius: 8, padding: "0.65rem 0.75rem", marginBottom: "0.4rem" }}>
                  <span aria-hidden="true" style={{ fontFamily: F.hero, fontSize: "1.2rem", lineHeight: 1, color: C.amarelo, border: `2px solid ${C.amarelo}`, borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {n}
                  </span>
                  <div>
                    <p style={{ fontFamily: F.badge, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.04em", color: "#fff", lineHeight: 1.2 }}>{label}</p>
                    <p style={{ fontFamily: F.badge, fontSize: "0.72rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.05em", marginTop: 2 }}>{sub}</p>
                  </div>
                </div>
              ))}

              {/* includes strip */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", background: "rgba(245,196,0,0.15)", border: `1px solid rgba(245,196,0,0.3)`, borderRadius: 8, padding: "0.5rem", marginTop: "0.2rem" }}>
                <span style={{ color: C.amarelo, fontSize: "0.7rem" }}>✔</span>
                <span style={{ fontFamily: F.badge, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", color: C.amarelo }}>PDF + VÍDEO + MANUAL + BNCC</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
