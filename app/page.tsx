import Image from "next/image";
import Faq from "./components/Faq";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      {/* SECTION 1 — BARRA DE TOPO */}
      <div className="topbar" role="banner">
        ⚽ <strong>Atenção:</strong>&nbsp; Exclusivo para Professoras Particulares, Psicopedagogas/Neuropsicopedagogas, Pedagogas de 1º ao 5º ano
      </div>

      {/* SECTION 2 — HERO */}
      <section className="hero" aria-label="Apresentação do Kit Recursos da Copa">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__text">
              <div className="hero__badge">🏆 Kit Pedagógico Temático</div>

              <h1 className="hero__title">
                A <span className="highlight-copa">Copa</span> é o gancho.{" "}
                O aprendizado é o <span className="highlight-gol">gol.</span>
              </h1>

              <p className="hero__sub">
                Um kit com 4 recursos da Copa para desenvolver habilidades, cumprir desafios e
                revisar conteúdos de português, matemática ou qualquer outra disciplina com seus
                estudantes.
              </p>

              <div className="hero__cta-wrap">
                <a
                  href="#preco"
                  className="btn btn--primary"
                  aria-label="Comprar Kit Recursos da Copa agora"
                >
                  QUERO O KIT AGORA →
                </a>
              </div>

              <div className="hero__social" style={{ marginTop: "1.25rem" }}>
                <span className="stars">★★★★★</span>
                <span>Mais de 500 professoras já estão usando nossos recursos em sala e/ou em atendimentos individuais/clínicos</span>
              </div>
            </div>

            <div className="hero__mockup">
              <Image
                src="/kit-hero.png"
                alt="Kit Recursos da Copa — material imprimível temático de futebol"
                width={480}
                height={420}
                priority
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIVISOR FLUTUANTE */}
      <div className="section-divider" aria-hidden="true">
        <span>⚽</span><span>🏆</span><span>🇧🇷</span><span>⚽</span><span>🥅</span><span>⚽</span><span>🏆</span><span>🇧🇷</span><span>⚽</span><span>🥅</span>
      </div>

      {/* SECTION 3 — O QUE VOCÊ VAI RECEBER */}
      <section className="deliverables" id="receber" aria-labelledby="del-title">
        <div className="container">
          <div className="deliverables__header">
            <span className="eyebrow eyebrow--verde">Tudo que vem no kit</span>
            <h2 className="section-title" id="del-title">
              Veja tudo que você vai receber:
            </h2>
            <p className="section-sub">
              Pronto para imprimir e usar sempre que quiser!
            </p>
          </div>

          <div className="deliverables__grid">
            <div className="del-card">
              <div className="del-card__icon" aria-hidden="true">📄</div>
              <div>
                <div className="del-card__title">Kit completo em PDF para imprimir</div>
                <div className="del-card__detail">
                  Alta resolução — funciona em impressora doméstica ou gráfica
                </div>
              </div>
            </div>

            <div className="del-card">
              <div className="del-card__icon" aria-hidden="true">🎥</div>
              <div>
                <div className="del-card__title">Aulas explicativas do Kit</div>
                <div className="del-card__detail">
                  Vídeos curtos mostrando como aplicar cada recurso
                </div>
              </div>
            </div>

            <div className="del-card">
              <div className="del-card__icon" aria-hidden="true">📋</div>
              <div>
                <div className="del-card__title">Manual de formas de uso</div>
                <div className="del-card__detail">
                  Sugestões para sala de aula, reforço, atendimento individual e clínica
                </div>
              </div>
            </div>

            <div className="del-card">
              <div className="del-card__icon" aria-hidden="true">✅</div>
              <div>
                <div className="del-card__title">Alinhado à BNCC</div>
                <div className="del-card__detail">
                  Habilidades mapeadas para cada recurso do kit
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISOR FLUTUANTE */}
      <div className="section-divider" aria-hidden="true">
        <span>🥅</span><span>⚽</span><span>🏆</span><span>🇧🇷</span><span>⚽</span><span>🥅</span><span>⚽</span><span>🏆</span><span>🇧🇷</span><span>⚽</span>
      </div>

      {/* SECTION 4 — OS 4 RECURSOS */}
      <section className="recursos" id="recursos" aria-labelledby="rec-title">
        <div className="container">
          <div className="recursos__header">
            <span className="eyebrow eyebrow--amarelo">⚽ Os 4 Recursos do Kit</span>
            <h2 className="section-title" id="rec-title">
              Cada um com um propósito pedagógico claro —
            </h2>
            <p className="section-sub">e a paixão pela Copa como ponto de partida.</p>
          </div>

          {/* Recurso 01 */}
          <article className="recurso-card" aria-label="Recurso 01: É GOOL!">
            <div className="recurso-card__img">
              <Carousel images={[1,2,3,4].map(n => ({ src: `/jogos/%C3%89%20GOL/egol-${n}.jpg`, alt: `É GOOL! – foto ${n}` }))} />
            </div>
            <div className="recurso-card__body">
              <div className="recurso-card__number">RECURSO 01</div>
              <span className="recurso-card__badge badge--verde">⚽ Recurso Versátil</span>
              <h3 className="recurso-card__title">É GOOL!</h3>
              <p className="recurso-card__desc">
                Cartaz envelope para escrever desafios — de leitura, escrita, matemática ou
                revisão de um conteúdo. Cada seleção cumpre o desafio e marca gols no placar!
              </p>
              <div className="recurso-card__tags" aria-label="Habilidades pedagógicas">
                <span className="tag">Leitura</span>
                <span className="tag">Escrita</span>
                <span className="tag">Revisão</span>
              </div>
            </div>
          </article>

          {/* Recurso 02 */}
          <article className="recurso-card" aria-label="Recurso 02: AQUI É O BRASIL">
            <div className="recurso-card__img">
              <Carousel images={[1,2,3,4].map(n => ({ src: `/jogos/AQUI%20%C3%89%20O%20BRASIL/aqui-brasil-${n}.jpg`, alt: `Aqui É o Brasil – foto ${n}` }))} />
            </div>
            <div className="recurso-card__body">
              <div className="recurso-card__number">RECURSO 02</div>
              <span className="recurso-card__badge badge--amarelo">🃏 Cards • Jogo</span>
              <h3 className="recurso-card__title">AQUI É O BRASIL!</h3>
              <p className="recurso-card__desc">
                40 cards com animais, objetos, comidas e lugares brasileiros. O desafio é
                descobrir quem &ldquo;eu sou&rdquo;. Inclui tabelas para formação de listas
                de palavras e frases.
              </p>
              <div className="recurso-card__tags" aria-label="Habilidades pedagógicas">
                <span className="tag">Vocabulário</span>
                <span className="tag">Cultura</span>
                <span className="tag">Leitura</span>
              </div>
            </div>
          </article>

          {/* Recurso 03 */}
          <article className="recurso-card" aria-label="Recurso 03: MATEMÁTICA DA COPA">
            <div className="recurso-card__img">
              <Carousel images={[1,2,3,4].map(n => ({ src: `/jogos/MATEMATICA%20DA%20COPA/matematica-${n}.jpg`, alt: `Matemática da Copa – foto ${n}` }))} />
            </div>
            <div className="recurso-card__body">
              <div className="recurso-card__number">RECURSO 03</div>
              <span className="recurso-card__badge badge--azul">➕ Matemática • 4 Operações</span>
              <h3 className="recurso-card__title">MATEMÁTICA DA COPA</h3>
              <p className="recurso-card__desc">
                Tabuleiros com as 4 operações, diferentes legendas e 10 seleções para efetuar
                cálculos. O desafio é encontrar o resultado considerando o valor que cada
                seleção representa.
              </p>
              <div className="recurso-card__tags" aria-label="Habilidades pedagógicas">
                <span className="tag">Adição</span>
                <span className="tag">Subtração</span>
                <span className="tag">4 Operações</span>
              </div>
            </div>
          </article>

          {/* Recurso 04 */}
          <article className="recurso-card" aria-label="Recurso 04: CAMPEÃO!">
            <div className="recurso-card__img">
              <Carousel images={[
                { src: "/jogos/CAMPE%C3%83O/campeao-1.jpeg", alt: "Campeão! – foto 1" },
                { src: "/jogos/CAMPE%C3%83O/campeao-2.jpg",  alt: "Campeão! – foto 2" },
                { src: "/jogos/CAMPE%C3%83O/campeao-3.jpg",  alt: "Campeão! – foto 3" },
              ]} />
            </div>
            <div className="recurso-card__body">
              <div className="recurso-card__number">RECURSO 04</div>
              <span className="recurso-card__badge badge--verde">🎲 Jogo Versátil</span>
              <h3 className="recurso-card__title">CAMPEÃO!</h3>
              <p className="recurso-card__desc">
                120 desafios com a temática da Copa — de matemática, português, conhecimentos
                gerais e alfabetização. O desafio é responder as perguntas até fazer o gol,
                pulando pelas bolas de futebol.
              </p>
              <div className="recurso-card__tags" aria-label="Habilidades pedagógicas">
                <span className="tag">Revisão</span>
                <span className="tag">Jogo</span>
                <span className="tag">Versátil</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* DIVISOR FLUTUANTE */}
      <div className="section-divider" aria-hidden="true">
        <span>⚽</span><span>🏆</span><span>🇧🇷</span><span>⚽</span><span>🥅</span><span>⚽</span><span>🏆</span><span>🇧🇷</span><span>⚽</span><span>🥅</span>
      </div>

      {/* SECTION 5 — PROVA SOCIAL */}
      <section className="social" id="depoimentos" aria-labelledby="social-title">
        <div className="container">
          <div className="social__header">
            <span className="eyebrow eyebrow--amarelo">
              O que as professoras estão dizendo
            </span>
            <h2 className="section-title" id="social-title">
              Quem já está usando?
            </h2>
            <p className="section-sub">Resultados reais de professoras em todo o Brasil</p>
          </div>

          <div className="testimonials">
            <div className="testimonial-card">
              <div className="testimonial-card__stars stars" aria-label="5 estrelas">★★★★★</div>
              <p className="testimonial-card__text">
                Minha aluna da sala de recursos tem hiperfoco em bandeiras. Será sensacional
                utilizar com ela.
              </p>
              <div className="testimonial-card__author">Aline Teixeira</div>
              <div className="testimonial-card__role">Professora</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-card__stars stars" aria-label="5 estrelas">★★★★★</div>
              <p className="testimonial-card__text">
                Que incrível, meninas! Vou tentar acessar a plataforma esses dias para ver as
                aulas e pegar os materiais, mas já estou amando tudo só de ver aqui rapidinho 😍😍🤎
              </p>
              <div className="testimonial-card__author">Júlie Barros</div>
              <div className="testimonial-card__role">Professora</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-card__stars stars" aria-label="5 estrelas">★★★★★</div>
              <p className="testimonial-card__text">
                Os materiais transformaram minha prática: otimizaram meu tempo e tornaram os
                atendimentos mais dinâmicos, intencionais e eficazes.
              </p>
              <div className="testimonial-card__author">Renata Castro</div>
              <div className="testimonial-card__role">Psicopedagoga</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-card__stars stars" aria-label="5 estrelas">★★★★★</div>
              <p className="testimonial-card__text">
                Usei o mesmo recurso com diferentes alunos e para trabalhar diversos objetivos.
                Por ser adaptável, interativo e envolver movimento, conquistou as crianças e
                tornou as aulas muito mais leves e envolventes. 💚💛💚💛
              </p>
              <div className="testimonial-card__author">Luiza Puntel</div>
              <div className="testimonial-card__role">Professora</div>
            </div>
          </div>

          <div className="social__cta">
            <a href="#preco" className="btn btn--primary" aria-label="Quero o Kit Recursos da Copa">
              QUERO O KIT AGORA →
            </a>
          </div>
        </div>
      </section>

      {/* DIVISOR FLUTUANTE */}
      <div className="section-divider" aria-hidden="true">
        <span>🥅</span><span>⚽</span><span>🏆</span><span>🇧🇷</span><span>⚽</span><span>🥅</span><span>⚽</span><span>🏆</span><span>🇧🇷</span><span>⚽</span>
      </div>

      {/* SECTION 6 — COMO FUNCIONA */}
      <section className="how" id="como-funciona" aria-labelledby="how-title">
        <div className="container">
          <div className="how__inner">
            <div>
              <span className="eyebrow eyebrow--verde">Sem complicação</span>
              <h2 className="section-title" id="how-title">
                Como funciona na prática:
              </h2>

              <div className="how__steps" style={{ marginTop: "1.5rem" }}>
                <div className="how__step">
                  <div className="how__step-num" aria-hidden="true">1</div>
                  <div className="how__step-text">
                    <strong>Compre e acesse imediatamente</strong>
                    <p>
                      Após a confirmação do pagamento, você recebe o link de download por
                      e-mail.
                    </p>
                  </div>
                </div>
                <div className="how__step">
                  <div className="how__step-num" aria-hidden="true">2</div>
                  <div className="how__step-text">
                    <strong>Baixe o PDF e imprima</strong>
                    <p>Funciona em impressora doméstica ou gráfica — é seu para sempre.</p>
                  </div>
                </div>
                <div className="how__step">
                  <div className="how__step-num" aria-hidden="true">3</div>
                  <div className="how__step-text">
                    <strong>Aplique do seu jeito</strong>
                    <p>
                      Em grupos, duplas ou individualmente — o manual traz sugestões para
                      sala, reforço e clínica.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="how__video" aria-label="Vídeo de demonstração do kit">
              <div className="how__video-bg" aria-hidden="true">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  style={{ position: "absolute", inset: 0, opacity: 0.15 }}
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
              </div>
              <div className="how__video-play" aria-hidden="true">▶</div>
              <div className="how__video-label">▶ Veja o kit funcionando em 3 minutos</div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISOR FLUTUANTE */}
      <div className="section-divider" aria-hidden="true">
        <span>⚽</span><span>🏆</span><span>🇧🇷</span><span>⚽</span><span>🥅</span><span>⚽</span><span>🏆</span><span>🇧🇷</span><span>⚽</span><span>🥅</span>
      </div>

      {/* SECTION 7 — RESUMO + PREÇO */}
      <section className="preco" id="preco" aria-labelledby="preco-title">
        <div className="container">
          <div className="preco__inner">
            <div className="preco__includes">
              <span className="eyebrow eyebrow--verde" style={{ marginBottom: "1rem" }}>
                O que está incluído
              </span>
              <h2 className="section-title" id="preco-title" style={{ marginBottom: "1.25rem" }}>
                Tudo que você precisa para dar uma aula incrível
              </h2>
              <ul className="preco__list" aria-label="Lista de itens incluídos">
                <li>4 recursos pedagógicos imprimíveis em PDF</li>
                <li>Aulas explicativas em vídeo para cada recurso</li>
                <li>Manual de formas de uso (sala, clínica, reforço)</li>
                <li>Habilidades da BNCC mapeadas</li>
                <li>Versões diferenciadas por nível</li>
                <li>Acesso vitalício ao material digital</li>
              </ul>
            </div>

            <div className="preco__card" aria-label="Informações de preço">
              <div className="preco__discount-badge">🔥 71% OFF — Oferta limitada</div>
              <div className="preco__card-name">Kit Recursos da Copa</div>
              <div className="preco__card-de">De R$ 97,90</div>
              <div className="preco__card-price">
                <sup>R$</sup>27,90
              </div>
              <div className="preco__card-installment">Ou 2x de R$ 14,69 sem juros</div>
              <p className="preco__urgency">⏳ Esse preço pode subir a qualquer momento.</p>

              <a href="#" className="btn btn--primary preco__card-btn" aria-label="Quero o Kit Recursos da Copa">
                QUERO O KIT AGORA →
              </a>

              <div className="preco__card-guarantee">
                <span aria-hidden="true">🔒</span>
                <span><strong>Garantia de 7 dias</strong> — devolvemos 100% do seu dinheiro, sem perguntas.</span>
              </div>

              <div className="preco__seals" aria-label="Selos de confiança">
                <span className="preco__seal"><span aria-hidden="true">🔒</span> Compra segura</span>
                <span className="preco__seal"><span aria-hidden="true">✅</span> Acesso imediato</span>
                <span className="preco__seal"><span aria-hidden="true">📄</span> PDF imprimível</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISOR FLUTUANTE */}
      <div className="section-divider" aria-hidden="true">
        <span>🥅</span><span>⚽</span><span>🏆</span><span>🇧🇷</span><span>⚽</span><span>🥅</span><span>⚽</span><span>🏆</span><span>🇧🇷</span><span>⚽</span>
      </div>

      {/* SECTION 8 — FAQ */}
      <section className="faq" id="faq" aria-labelledby="faq-title">
        <div className="container">
          <div className="faq__header">
            <span className="eyebrow eyebrow--verde">Dúvidas?</span>
            <h2 className="section-title" id="faq-title">
              Perguntas Frequentes
            </h2>
          </div>

          <Faq />
        </div>
      </section>

      {/* DIVISOR FLUTUANTE */}
      <div className="section-divider" aria-hidden="true">
        <span>⚽</span><span>🏆</span><span>🇧🇷</span><span>⚽</span><span>🥅</span><span>⚽</span><span>🏆</span><span>🇧🇷</span><span>⚽</span><span>🥅</span>
      </div>

      {/* SECTION 9 — QUEM CRIOU */}
      <section className="criadoras" id="criadoras" aria-labelledby="criadoras-title">
        <div className="container">
          <div className="criadoras__inner">
            <div className="criadoras__photo">
              <div className="criadoras__photo-box">
                <Image
                  src="/foto_autoras.jpeg"
                  alt="Professoras Fernanda e Luiza, criadoras do Kit Recursos da Copa"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", borderRadius: "50%" }}
                />
              </div>
            </div>

            <div className="criadoras__text">
              <span className="eyebrow eyebrow--verde">Feito por quem vive a educação todos os dias.</span>
              <h2 id="criadoras-title">Quem são as criadoras?</h2>
              <p>
                Somos Fernanda e Luiza, professoras com experiência na Educação Infantil e nos
                Anos Iniciais desde 2014. Criamos o Kit Recursos da Copa para transformar o
                interesse das crianças pelo futebol em aprendizagem.
              </p>
              <p>
                Cada recurso foi pensado a partir da nossa prática e testado com alunos reais
                antes de chegar até você.
              </p>
              <a href="#preco" className="btn btn--verde" style={{ marginTop: "1.25rem" }} aria-label="Quero transformar minhas aulas com o Kit">
                QUERO TRANSFORMAR MINHAS AULAS →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — CTA FINAL */}
      <section className="cta-final" aria-labelledby="cta-final-title">
        <div className="container">
          <h2 id="cta-final-title">Pronta para usar a Copa a favor da sua aula?</h2>
          <p>Compre agora, imprima hoje e aplique na próxima aula.</p>

          <a href="#preco" className="btn btn--verde" style={{ fontSize: "1.1rem", padding: "1.1rem 2.5rem" }} aria-label="Quero o Kit Recursos da Copa agora">
            QUERO O KIT RECURSOS DA COPA →
          </a>

          <div className="cta-final__seals" aria-label="Garantias">
            <span><span aria-hidden="true">★★★★★</span> 500+ professoras</span>
            <span><span aria-hidden="true">🔒</span> Garantia de 7 dias</span>
            <span><span aria-hidden="true">📄</span> PDF imprimível</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Kit Recursos da Copa · Todos os direitos reservados</p>
        <p>
          <a href="#">Termos de uso</a> · <a href="#">Política de privacidade</a> ·{" "}
          <a href="#">Contato</a>
        </p>
      </footer>

    </>
  );
}
