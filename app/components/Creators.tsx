import Link from "next/link";

export default function Creators() {
  return (
    <section
      id="criadoras"
      className="bg-[#FAFAF7]"
      style={{ padding: "clamp(3rem,8vw,5rem) clamp(1rem,5vw,2rem)" }}
      aria-labelledby="criadoras-title"
    >
      <div className="mx-auto w-full max-w-[1100px] grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] md:items-center">

        {/* photo */}
        <div className="flex justify-center">
          <div
            className="flex h-44 w-44 items-center justify-center rounded-full text-6xl"
            style={{
              background: "linear-gradient(135deg,#e8f5ee 0%,#F0EFEB 100%)",
              border: "4px solid #1A6B3A",
              boxShadow: "0 4px 20px rgba(26,107,58,0.2)",
            }}
            role="img"
            aria-label="Foto das criadoras"
          >
            👩‍🏫
          </div>
        </div>

        {/* text */}
        <div>
          <span
            className="mb-3 inline-block rounded-full bg-[#1A6B3A] px-4 py-1.5 text-white"
            style={{ fontFamily: "var(--font-badge)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Feito por quem está na sala de aula
          </span>

          <h2
            id="criadoras-title"
            className="mb-4 text-[#1C1C1C]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,4vw,2.2rem)" }}
          >
            Quem são as criadoras?
          </h2>

          <p className="mb-3 text-[#4a4a4a]" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
            Somos professoras com experiência nos Anos Iniciais.
            Criamos o Kit Recursos da Copa porque conhecemos o desafio de engajar
            crianças no conteúdo — e sabemos o quanto um bom material muda a aula.
          </p>
          <p className="mb-5 text-[#4a4a4a]" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
            Cada recurso foi testado com alunos reais, em turmas reais,
            antes de chegar até você.
          </p>

          <Link
            href="#preco"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A6B3A] px-8 py-4 text-white transition-transform hover:-translate-y-0.5 active:scale-95"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(0.95rem,2.5vw,1.05rem)",
              boxShadow: "0 4px 0 #145530, 0 6px 20px rgba(26,107,58,0.30)",
            }}
            aria-label="Quero transformar minhas aulas com o Kit"
          >
            QUERO TRANSFORMAR MINHAS AULAS →
          </Link>
        </div>

      </div>
    </section>
  );
}
