"use client";

import { useState } from "react";
import { C, F, shadow } from "@/app/lib/tokens";

const faqs = [
  {
    q: "Para qual ano escolar é o kit?",
    a: "Para os Anos Iniciais — do 1º ao 5º ano. Cada recurso tem versões diferenciadas para atender diferentes níveis de aprendizagem.",
  },
  {
    q: "Preciso de internet para usar?",
    a: "Não. Você baixa o PDF, é seu para sempre. Imprime e usa — sem depender de nenhuma plataforma.",
  },
  {
    q: "Posso usar em atendimento individual ou clínica?",
    a: "Sim. O manual de uso traz sugestões específicas para atendimento individual, reforço escolar e contextos de intervenção pedagógica e clínica.",
  },
  {
    q: "O material é alinhado à BNCC?",
    a: "Sim. As habilidades da BNCC estão mapeadas em cada recurso — facilitando o planejamento e o registro pedagógico.",
  },
  {
    q: "Como recebo o material após a compra?",
    a: "O acesso é imediato. Após a confirmação do pagamento, você recebe o link de download por e-mail e já pode começar a imprimir.",
  },
  {
    q: "O kit funciona fora do período da Copa?",
    a: "Sim. Futebol é cultura brasileira o ano inteiro. O kit funciona em qualquer mês — especialmente quando a turma está animada com esporte.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section
      id="faq"
      className="bg-[#F0EFEB]"
      style={{ padding: "clamp(3rem,8vw,5rem) clamp(1rem,5vw,2rem)" }}
      aria-labelledby="faq-title"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="mb-10 text-center">
          <span
            className="mb-3 inline-block rounded-full bg-[#1A6B3A] px-4 py-1.5 text-white"
            style={{ fontFamily: F.badge, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Dúvidas?
          </span>
          <h2
            id="faq-title"
            className="text-[#1C1C1C]"
            style={{ fontFamily: F.display, fontSize: "clamp(1.6rem,4vw,2.4rem)" }}
          >
            Perguntas Frequentes
          </h2>
        </div>

        <div className="mx-auto max-w-[720px] flex flex-col gap-3" role="list">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg bg-white"
              style={{ boxShadow: shadow.card }}
              role="listitem"
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-[#1C1C1C] transition-colors hover:bg-[#F0EFEB]"
                style={{ fontFamily: F.body, fontSize: "0.95rem", background: open === i ? C.verdeLight : "#fff", color: open === i ? C.verdeDark : C.texto }}
                aria-expanded={open === i}
                aria-controls={`faq-body-${i}`}
                onClick={() => toggle(i)}
              >
                {f.q}
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1A6B3A] text-sm font-black text-white transition-transform"
                  style={{ transform: open === i ? "rotate(45deg)" : "none", background: open === i ? C.verdeDark : C.verde }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  id={`faq-body-${i}`}
                  className="px-5 pb-4 text-[#4a4a4a]"
                  style={{ fontSize: "0.9rem", lineHeight: 1.7 }}
                  role="region"
                >
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
