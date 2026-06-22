"use client";

import { useState } from "react";

const items = [
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

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq__list" role="list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="faq-item" role="listitem" key={i}>
            <button
              className="faq-item__btn"
              aria-expanded={isOpen}
              aria-controls={`faq${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {item.q}
              <span className="faq-item__icon" aria-hidden="true">+</span>
            </button>
            <div
              className={`faq-item__body${isOpen ? " open" : ""}`}
              id={`faq${i}`}
              role="region"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
