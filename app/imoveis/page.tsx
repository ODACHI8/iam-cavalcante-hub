import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corretagem de Imóveis",
  description:
    "Carteira exclusiva e curada, com matrícula, certidões e ônus checados antes do anúncio. Contrato redigido pelo mesmo profissional que negocia.",
};

const navLinks = [
  { label: "Início", href: routes.home },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Comprar", href: "#comprar" },
  { label: "Vender", href: "#vender" },
];

const facts = [
  {
    value: "Análise prévia",
    label: "Matrícula, certidões e ônus checados antes do anúncio.",
  },
  {
    value: "Carteira curada",
    label: "Poucos imóveis, todos com origem e preço verificados.",
  },
  {
    value: "Contrato pelo advogado",
    label: "Quem negocia é quem responde juridicamente pelo negócio.",
  },
];

const properties = [
  {
    photo: "[ foto do imóvel 01 ]",
    kicker: "Residencial · [Bairro]",
    title: "[Nome do empreendimento]",
    specs: "[000] m² · [0] quartos · [0] vagas",
    price: "R$ [000.000]",
  },
  {
    photo: "[ foto do imóvel 02 ]",
    kicker: "Residencial · [Bairro]",
    title: "[Nome do empreendimento]",
    specs: "[000] m² · [0] quartos · [0] vagas",
    price: "R$ [000.000]",
  },
  {
    photo: "[ foto do imóvel 03 ]",
    kicker: "Comercial · [Bairro]",
    title: "[Nome do empreendimento]",
    specs: "[000] m² · [0] salas · [0] vagas",
    price: "R$ [000.000]",
  },
];

const reasons = [
  {
    num: "01",
    title: "Nada é vendido sem análise",
    text: "O imóvel que não passa na conferência documental não entra na carteira. Simples assim.",
  },
  {
    num: "02",
    title: "Contrato sob medida",
    text: "Nada de minuta genérica: cada cláusula é escrita para o seu negócio, com garantias de parte a parte.",
  },
  {
    num: "03",
    title: "Acesso ao mercado de leilões",
    text: "Se o seu perfil admite prazo maior em troca de desconto, avaliamos também lotes em leilão.",
  },
];

export default function ImoveisPage() {
  return (
    <>
      <SiteHeader links={navLinks} />

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <Link href={routes.home} className="crumb">
              Início
            </Link>
            <span className="crumb-sep">/</span>
            Corretagem de Imóveis
          </span>
          <h1 className="hero-title">
            Carteira exclusiva. Documentação conferida antes da primeira visita.
          </h1>
          <p className="hero-lead">
            Nenhum imóvel entra no portfólio sem passar pela análise documental.
            Você visita apenas o que já está apto a ser vendido — e assina com o
            mesmo profissional que redige o contrato.
          </p>
          <div className="actions">
            <a href={site.whatsapp} className="btn btn-primary">
              Quero conversar
            </a>
            <a href="#portfolio" className="btn btn-ghost">
              Ver portfólio
            </a>
          </div>
        </div>

        <div className="figure-placeholder">
          <span>
            [ imagem: arquitetura de alto padrão
            <br />
            — fachada ou interior amplo ]
          </span>
        </div>
      </section>

      <section className="facts">
        {facts.map((fact) => (
          <div key={fact.value} className="fact">
            <span className="fact-value">{fact.value}</span>
            <span className="fact-label">{fact.label}</span>
          </div>
        ))}
      </section>

      <section id="portfolio" className="section section-paper">
        <div className="portfolio-head">
          <div className="portfolio-head-copy">
            <span className="eyebrow">Portfólio</span>
            <h2 className="section-title" style={{ maxWidth: 640 }}>
              Seleção atual de imóveis disponíveis.
            </h2>
          </div>
          <a href={site.whatsapp} className="portfolio-link">
            Receber a lista completa →
          </a>
        </div>

        <div className="grid-3">
          {properties.map((item) => (
            <div key={item.photo} className="prop-card">
              <div className="prop-photo">
                <span>{item.photo}</span>
              </div>
              <div className="prop-body">
                <span className="prop-kicker">{item.kicker}</span>
                <h3 className="prop-title">{item.title}</h3>
                <span className="prop-specs">{item.specs}</span>
                <span className="prop-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="comprar" className="section section-white">
        <div className="split-even">
          <div className="split-intro">
            <span className="eyebrow">Para quem compra</span>
            <h2 className="split-title" style={{ fontSize: 34, lineHeight: 1.18 }}>
              Você visita menos e decide melhor.
            </h2>
            <p className="about-text">
              Antes de qualquer visita, entendo o objetivo, o orçamento e a forma
              de pagamento. Só então apresento opções — com matrícula em mãos e o
              histórico do vendedor já verificado.
            </p>
            <div className="dash-list">
              <span>
                <span className="dash">—</span> Análise de matrícula, ônus e
                certidões antes da proposta
              </span>
              <span>
                <span className="dash">—</span> Negociação de preço e condições
                com base em avaliação real
              </span>
              <span>
                <span className="dash">—</span> Apoio no financiamento e
                acompanhamento até a escritura
              </span>
            </div>
          </div>

          <div id="vender" className="split-intro">
            <span className="eyebrow">Para quem vende</span>
            <h2 className="split-title" style={{ fontSize: 34, lineHeight: 1.18 }}>
              Preço certo, comprador qualificado, zero dor de cabeça.
            </h2>
            <p className="about-text">
              Precificação baseada em mercado, não em desejo. Resolvo pendências
              documentais antes do anúncio, para que a venda não trave na hora da
              escritura — o motivo mais comum de negócio perdido.
            </p>
            <div className="dash-list">
              <span>
                <span className="dash">—</span> Avaliação e estratégia de preço
                documentadas
              </span>
              <span>
                <span className="dash">—</span> Regularização prévia: inventário,
                averbação, usucapião
              </span>
              <span>
                <span className="dash">—</span> Triagem de propostas e contrato
                redigido por advogado
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-ink">
        <div className="split">
          <div className="split-intro">
            <span className="eyebrow">Por que comigo</span>
            <h2 className="split-title section-title-light">
              Corretor e advogado na mesma mesa.
            </h2>
            <p className="split-text split-text-light">
              O que normalmente exige dois contratos e duas opiniões, aqui é uma
              responsabilidade só.
            </p>
          </div>

          <div className="steps steps-ink">
            {reasons.map((item) => (
              <div key={item.num} className="step">
                <span className="step-num">{item.num}</span>
                <div className="step-body">
                  <h3 className="step-title step-title-light">{item.title}</h3>
                  <p className="step-text step-text-light">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="crosslinks">
          <div className="crosslinks-head">
            <span className="eyebrow">Atuação integrada</span>
            <h2 className="crosslinks-title">
              Outras frentes que podem entrar no seu negócio.
            </h2>
          </div>

          <Link href={routes.advocacia} className="crosslink">
            <h3>Advocacia</h3>
            <p>
              Inventário, usucapião, distrato ou regularização travando a venda?
              Resolvo antes de anunciar.
            </p>
            <span className="crosslink-cta">Consultoria jurídica →</span>
          </Link>

          <Link href={routes.leiloes} className="crosslink">
            <h3>Mediação de Leilões</h3>
            <p>
              Aceita esperar um pouco mais por um preço bem abaixo do mercado? O
              caminho é o leilão.
            </p>
            <span className="crosslink-cta">Oportunidades em leilões →</span>
          </Link>
        </div>
      </section>

      <section className="cta section-paper">
        <span className="eyebrow">Fale comigo</span>
        <h2 className="cta-title">
          Me diga o que você procura — ou o que precisa vender.
        </h2>
        <p className="cta-text">
          Em uma conversa curta já dá para saber se o negócio é viável e por qual
          caminho seguir.
        </p>
        <a href={site.whatsapp} className="btn btn-primary">
          Falar no WhatsApp
        </a>
      </section>

      <SiteFooter />
    </>
  );
}
