import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { BuildingIcon, GavelIcon, ScalesIcon } from "@/components/icons";
import { routes, site } from "@/lib/site";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de atuação", href: "#areas" },
  { label: "Diferenciais", href: "#diferenciais" },
];

const stats = [
  {
    value: "Conselheiro Federal",
    label: "OAB · Presidente da Comissão Notarial e Registral",
  },
  { value: "+10 estados", label: "Atuação do escritório" },
  { value: "~20 anos", label: "De experiência jurídica" },
];

const trajectory = [
  "Conselheiro Federal da OAB e Presidente da Comissão Notarial e Registral da CFOAB",
  "Diretor Estadual do IBRADIM (2024–2027) e Vice-Presidente da Comissão Nacional de REURB",
  "Presidente da Associação Piauiense dos Advogados — APAC (2021–2024)",
  "Vice-Presidente da Comissão de Leilões da Associação Brasileira de Advogados (2023–2025)",
];

const areas = [
  {
    href: routes.advocacia,
    icon: <ScalesIcon />,
    title: "Advocacia",
    text: "Proteção patrimonial, direito imobiliário e contratos que não deixam brecha. Da análise de matrícula à regularização, cada cláusula é escrita para blindar o seu lado.",
    items: [
      "Due diligence de imóveis e vendedores",
      "Contratos de compra, venda e locação",
      "Usucapião, inventário e regularização",
    ],
    cta: "Consultoria jurídica →",
  },
  {
    href: routes.leiloes,
    icon: <GavelIcon />,
    title: "Mediação de Leilões",
    text: "Arrematar bem é comprar barato sem herdar problema. Faço a leitura completa do edital e da matrícula antes do lance — e conduzo a posse até o registro.",
    items: [
      "Análise de edital, dívidas e ocupação",
      "Estudo de rentabilidade antes do lance",
      "Imissão na posse e registro do bem",
    ],
    cta: "Oportunidades em leilões →",
  },
  {
    href: routes.imoveis,
    icon: <BuildingIcon />,
    title: "Corretagem de Imóveis",
    text: "Carteira exclusiva e curada. Cada imóvel entra no portfólio só depois de passar pela análise documental — você visita apenas o que já está apto a ser vendido.",
    items: [
      "Análise documental prévia de cada oferta",
      "Avaliação e precificação de mercado",
      "Negociação e escritura acompanhadas",
    ],
    cta: "Portfólio de imóveis →",
  },
];

const differentials = [
  {
    num: "01",
    title: "Risco eliminado na origem",
    text: "O mesmo profissional que aponta o imóvel é quem responde pela sua análise jurídica. Não existe negócio “aprovado pelo corretor e reprovado pelo advogado” depois do sinal pago.",
  },
  {
    num: "02",
    title: "Burocracia reduzida a um interlocutor",
    text: "Certidões, edital, cartório, financiamento e escritura em uma só linha de comunicação. Você explica seu objetivo uma vez — e acompanha, não administra.",
  },
  {
    num: "03",
    title: "Análise completa: preço e direito juntos",
    text: "Avalio o valor de mercado e o passivo oculto no mesmo parecer. É assim que se identifica a oportunidade real — e se descarta o desconto que sai caro.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader links={navLinks} brandLinksHome={false} />

      <section className="hero hero-home">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-rule" />
            Visão 360º em negócios patrimoniais
          </span>
          <h1 className="hero-title hero-title-home">
            Segurança jurídica, inteligência imobiliária e oportunidades de
            leilão. Em um só lugar.
          </h1>
          <p className="hero-lead">
            Advogado, mediador de leilões e corretor de imóveis. Cada negócio é
            analisado sob três olhares — o contrato, a oportunidade e o imóvel —
            para que você compre, invista e venda sem risco.
          </p>
          <div className="actions">
            <a href={site.whatsapp} className="btn btn-primary">
              Falar no WhatsApp
            </a>
            <a href="#areas" className="btn btn-ghost">
              Conheça minhas áreas de atuação
            </a>
          </div>
          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.value} className="stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="figure">
          <Image
            src="/hero.jpeg"
            alt="Ian Cavalcante em palestra"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            style={{ objectPosition: "50% 18%" }}
          />
          <div className="figure-scrim" />
          <div className="figure-caption">
            <span className="figure-caption-name">{site.name}</span>
            <span className="figure-caption-role">
              Advogado · Leilões · Imóveis
            </span>
          </div>
        </div>
      </section>

      <section id="sobre" className="section-lg section-white about">
        <div className="figure figure-light">
          <Image
            src="/sobre.jpeg"
            alt="Ian Samitrius Lima Cavalcante"
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            style={{ objectPosition: "50% 22%" }}
          />
          <div className="figure-scrim" />
          <div className="figure-caption">
            <span className="figure-caption-name">{site.name}</span>
            <span className="figure-caption-role">
              Conselheiro Federal da OAB
            </span>
          </div>
        </div>

        <div className="about-copy">
          <span className="eyebrow">Sobre</span>
          <h2 className="about-title">Ian Samitrius Lima Cavalcante</h2>
          <p className="about-text">
            Advogado com atuação destacada em Direito Imobiliário e de Família,
            reconhecido por aliar visão estratégica, experiência institucional e
            compromisso ético em cada causa que conduz. Quase vinte anos de
            trajetória, construída no Piauí e expandida para todo o país.
          </p>
          <p className="about-text">
            À frente da Ian Cavalcante Sociedade de Advogados — escritório full
            service com origem no Piauí e atuação em mais de dez estados —,
            lidera uma equipe movida por um mesmo propósito: uma advocacia
            moderna, humana e estratégica, voltada a resultados concretos para o
            cliente.
          </p>
          <p className="about-text">
            Professor, gestor e palestrante, atua também na formação de novos
            profissionais e na disseminação do conhecimento jurídico —
            reafirmando que liderar é servir e inspirar.
          </p>

          <div className="about-track">
            <span className="about-track-label">Trajetória institucional</span>
            <div className="about-track-grid">
              {trajectory.map((item) => (
                <span key={item}>
                  <span className="dash">—</span> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="quote">“Liderar é servir e inspirar.”</div>
        </div>
      </section>

      <section id="areas" className="section-lg section-paper">
        <div className="section-head">
          <span className="eyebrow">Áreas de atuação</span>
          <h2 className="section-title">
            Três frentes complementares. Escolha por onde começar.
          </h2>
          <p className="section-sub">
            Cada área tem uma página própria, com escopo, etapas e formas de
            contratação.
          </p>
        </div>

        <div className="grid-3 grid-3-wide">
          {areas.map((area) => (
            <Link key={area.title} href={area.href} className="card">
              {area.icon}
              <h3 className="card-title">{area.title}</h3>
              <p className="card-text">{area.text}</p>
              <ul className="card-list">
                {area.items.map((item) => (
                  <li key={item}>
                    <span className="dash">—</span> {item}
                  </li>
                ))}
              </ul>
              <span className="card-cta">{area.cta}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="diferenciais" className="section-lg section-ink">
        <div className="split">
          <div className="split-intro">
            <span className="eyebrow">Por que um especialista 3 em 1</span>
            <h2 className="split-title section-title-light">
              Menos intermediários. Menos risco. Menos tempo perdido.
            </h2>
            <p className="split-text split-text-light">
              Contratar três profissionais custa três honorários e gera três
              versões da mesma história. Aqui, a responsabilidade é uma só.
            </p>
          </div>

          <div className="steps steps-ink">
            {differentials.map((item) => (
              <div key={item.num} className="step step-lg">
                <span className="step-num">{item.num}</span>
                <div className="step-body step-body-lg">
                  <h3 className="step-title step-title-lg step-title-light">
                    {item.title}
                  </h3>
                  <p className="step-text step-text-light">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta section-white">
        <span className="eyebrow">Ainda em dúvida?</span>
        <h2 className="cta-title">
          Descreva seu caso em uma mensagem. Eu digo por onde começar.
        </h2>
        <p className="cta-text">
          Primeira conversa sem compromisso. Se o seu caso não for comigo, indico
          quem resolve.
        </p>
        <a href={site.whatsapp} className="btn btn-primary">
          Falar no WhatsApp
        </a>
      </section>

      <SiteFooter />
    </>
  );
}
