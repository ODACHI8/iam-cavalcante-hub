import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CountUp from "@/components/CountUp";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mediação de Leilões",
  description:
    "Análise de edital, matrícula, dívidas e ocupação antes do lance. Condução da arrematação até a imissão na posse e o registro.",
};

const navLinks = [
  { label: "Início", href: routes.home },
  { label: "Como funciona", href: "#etapas" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Riscos", href: "#riscos" },
];

const facts = [
  {
    value: "Parecer antes do lance",
    label: "Você só dá lance depois de saber exatamente o que está comprando.",
  },
  {
    value: "Custo total calculado",
    label: "Lance, comissão, ITBI, dívidas e desocupação — no mesmo cálculo.",
  },
  {
    value: "Até a chave na mão",
    label: "Imissão na posse e registro conduzidos pelo mesmo advogado.",
  },
];

const steps = [
  {
    num: "01",
    title: "Perfil e garimpo",
    text: "Definimos faixa de valor, região e objetivo — morar, revender ou rentabilizar. A partir daí, seleciono os lotes que fazem sentido.",
  },
  {
    num: "02",
    title: "Análise do edital e da matrícula",
    text: "Processo de origem, penhoras, credores, dívidas de IPTU e condomínio, situação de ocupação e regularidade da intimação do devedor.",
  },
  {
    num: "03",
    title: "Cálculo de rentabilidade",
    text: "Valor de mercado real, custo total de aquisição e prazo estimado de desocupação. Define-se o lance máximo — e ele não é ultrapassado.",
  },
  {
    num: "04",
    title: "Habilitação e lance",
    text: "Cadastro na plataforma, documentação e acompanhamento do pregão. Auto de arrematação e carta assinados com conferência jurídica.",
  },
  {
    num: "05",
    title: "Posse, registro e saída",
    text: "Imissão na posse, registro da carta e, se o objetivo for revender, a venda pela minha carteira de corretagem.",
  },
];

const modalities = [
  {
    title: "Judicial",
    text: "Imóveis penhorados em execuções. Preço competitivo, mas exige leitura do processo: nulidades, embargos e o risco de anulação da arrematação.",
  },
  {
    title: "Extrajudicial",
    text: "Retomadas por alienação fiduciária, geralmente bancárias. Processo rápido, porém sensível a vícios na notificação do devedor.",
  },
  {
    title: "Venda direta",
    text: "Imóveis não arrematados, negociados diretamente com a instituição. Menos disputa, condições de pagamento mais flexíveis.",
  },
];

const risks = [
  {
    num: "01",
    title: "Dívidas que acompanham o imóvel",
    text: "IPTU, condomínio e taxas: verifico o que é obrigação propter rem e o que cai por conta do produto da arrematação.",
  },
  {
    num: "02",
    title: "Imóvel ocupado",
    text: "Estimo prazo e custo da imissão na posse antes do lance, e conduzo a ação — ou a negociação amigável de saída.",
  },
  {
    num: "03",
    title: "Anulação da arrematação",
    text: "Confiro intimações, prazos e a regularidade do processo. Edital com vício é lote descartado — por mais atraente que pareça.",
  },
];

export default function LeiloesPage() {
  return (
    <>
      <SiteHeader links={navLinks} />

      <section className="hero">
        <div className="hero-copy cascade">
          <span className="eyebrow">
            <Link href={routes.home} className="crumb">
              Início
            </Link>
            <span className="crumb-sep">/</span>
            Mediação de Leilões
          </span>
          <h1 className="hero-title">
            Arremate abaixo do mercado — sem herdar o problema de ninguém.
          </h1>
          <p className="hero-lead">
            Leilão é oportunidade para quem lê o edital com olhos de advogado.
            Analiso matrícula, dívidas e ocupação antes do lance, e conduzo o
            processo até a posse e o registro em seu nome.
          </p>
          <div className="actions">
            <a href={site.whatsapp} className="btn btn-primary">
              Analisar um edital
            </a>
            <a href="#etapas" className="btn btn-ghost">
              Como funciona
            </a>
          </div>
        </div>

        <div className="figure-placeholder cascade-figure">
          <span>
            [ imagem: fachada de imóvel de alto padrão
            <br />
            ou detalhe de edital sobre a mesa ]
          </span>
        </div>
      </section>

      <section className="facts">
        {facts.map((fact, index) => (
          <div
            key={fact.value}
            className="fact reveal"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <CountUp value={fact.value} className="fact-value" />
            <span className="fact-label">{fact.label}</span>
          </div>
        ))}
      </section>

      <section id="etapas" className="section section-paper">
        <div className="split">
          <div className="split-intro reveal">
            <span className="eyebrow">Como funciona</span>
            <h2 className="split-title">
              Cinco etapas entre a oportunidade e a escritura.
            </h2>
            <p className="split-text">
              Você define o perfil de investimento. Eu filtro, analiso e conduzo.
              Nada é levado a lance sem parecer escrito.
            </p>
          </div>

          <div className="steps">
            {steps.map((item, index) => (
              <div
                key={item.num}
                className="step reveal"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="step-num">{item.num}</span>
                <div className="step-body">
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="modalidades" className="section section-white">
        <div className="section-head reveal">
          <span className="eyebrow">Modalidades</span>
          <h2 className="section-title" style={{ maxWidth: 720 }}>
            Cada tipo de leilão tem uma regra — e um risco diferente.
          </h2>
        </div>

        <div className="grid-3">
          {modalities.map((item, index) => (
            <div
              key={item.title}
              className="crosslink reveal"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="riscos" className="section section-ink">
        <div className="split">
          <div className="split-intro reveal">
            <span className="eyebrow">Riscos que eu elimino</span>
            <h2 className="split-title section-title-light">
              O desconto do leilão só é real depois da conta completa.
            </h2>
            <p className="split-text split-text-light">
              A maioria dos prejuízos em leilão nasce de informação que estava no
              edital — e não foi lida.
            </p>
          </div>

          <div className="steps steps-ink">
            {risks.map((item, index) => (
              <div
                key={item.num}
                className="step reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
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
          <div className="crosslinks-head reveal">
            <span className="eyebrow">Atuação integrada</span>
            <h2 className="crosslinks-title">
              O leilão é o começo. O que vem depois também é comigo.
            </h2>
          </div>

          <Link
            href={routes.advocacia}
            className="crosslink reveal"
            style={{ transitionDelay: "0ms" }}
          >
            <h3>Advocacia</h3>
            <p>
              Imissão na posse, defesa da arrematação e regularização do bem
              conduzidas pelo mesmo profissional que analisou o edital.
            </p>
            <span className="crosslink-cta">Consultoria jurídica →</span>
          </Link>

          <Link
            href={routes.imoveis}
            className="crosslink reveal"
            style={{ transitionDelay: "120ms" }}
          >
            <h3>Corretagem de Imóveis</h3>
            <p>
              Arrematou para revender? Coloco o imóvel na carteira com avaliação
              de mercado e documentação já conferida.
            </p>
            <span className="crosslink-cta">Portfólio de imóveis →</span>
          </Link>
        </div>
      </section>

      <section className="cta section-paper">
        <span className="eyebrow reveal">Fale comigo</span>
        <h2 className="cta-title reveal" style={{ transitionDelay: "80ms" }}>
          Encontrou um lote interessante? Me mande o edital.
        </h2>
        <p className="cta-text reveal" style={{ transitionDelay: "160ms" }}>
          Devolvo uma leitura honesta do risco e do preço-teto. Se o negócio não
          valer a pena, eu digo antes do lance.
        </p>
        <a
          href={site.whatsapp}
          className="btn btn-primary reveal"
          style={{ transitionDelay: "240ms" }}
        >
          Falar no WhatsApp
        </a>
      </section>

      <SiteFooter />
    </>
  );
}
