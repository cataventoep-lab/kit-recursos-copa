import Link from "next/link";

const testimonials = [
  {
    text: "Finalmente um material que conecta o que os alunos amam com o que eu preciso ensinar. Usei na época da Copa e eles pediram para continuar depois.",
    author: "Ana Paula R.",
    role: "Professora do 3º ano · São Paulo/SP",
  },
  {
    text: "Trabalho com atendimento individual e os recursos foram perfeitos. Minha aluna com dislexia se engajou de um jeito que raramente vejo.",
    author: "Fernanda M.",
    role: "Psicopedagoga · Curitiba/PR",
  },
  {
    text: "Material bem diagramado, organizado e que funciona de verdade. Já comprei outros kits pedagógicos — esse é o mais completo.",
    author: "Camila T.",
    role: "Professora particular · Belo Horizonte/MG",
  },
  {
    text: "Minha turma do 2º ano pede todo dia para jogar. O engajamento foi imediato — e o conteúdo estava lá do início ao fim.",
    author: "Renata S.",
    role: "Professora da rede municipal · Fortaleza/CE",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="bg-[#1A6B3A] field-pattern"
      style={{ padding: "clamp(3rem,8vw,5rem) clamp(1rem,5vw,2rem)" }}
      aria-labelledby="social-title"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="mb-10 text-center">
          <span
            className="mb-3 inline-block rounded-full bg-[#F5C400] px-4 py-1.5 text-[#145530]"
            style={{ fontFamily: "var(--font-badge)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            O que as professoras estão dizendo
          </span>
          <h2
            id="social-title"
            className="text-white"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,4vw,2.4rem)" }}
          >
            Quem já está usando?
          </h2>
          <p className="mt-2" style={{ fontSize: "clamp(0.95rem,2.5vw,1.1rem)", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
            Resultados reais de professoras em todo o Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/20 bg-white/[0.12] p-5 backdrop-blur-sm"
            >
              <p className="mb-2 text-[#F5C400]" aria-label="5 estrelas" style={{ fontSize: "0.9rem" }}>★★★★★</p>
              <p
                className="mb-4 italic"
                style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <p
                className="text-[#F5C400]"
                style={{ fontFamily: "var(--font-badge)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.05em" }}
              >
                {t.author}
              </p>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", marginTop: "0.15rem" }}>
                {t.role}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="#preco"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F5C400] px-8 py-4 text-[#145530] transition-transform hover:-translate-y-0.5 active:scale-95"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1rem,3vw,1.1rem)",
              boxShadow: "0 4px 0 #d4a900, 0 6px 20px rgba(245,196,0,0.35)",
            }}
            aria-label="Quero o Kit Recursos da Copa"
          >
            QUERO O KIT AGORA →
          </Link>
        </div>
      </div>
    </section>
  );
}
