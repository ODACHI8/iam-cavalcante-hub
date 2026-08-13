import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CountUp from "@/components/CountUp";
import {
  BriefcaseIcon,
  BuildingIcon,
  ClockIcon,
  DocumentIcon,
  FamilyIcon,
  ScalesIcon,
} from "@/components/icons";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Advocacia",
  description:
    "Consultoria jurídica em seis frentes do direito, com destaque em Imobiliário e Família. Escritório full service com atuação em mais de dez estados.",
};

const navLinks = [
  { label: "Início", href: routes.home },
  { label: "Áreas do direito", href: "#areas" },
  { label: "Como trabalho", href: "#processo" },
  { label: "Loja", href: "#loja" },
];

const facts = [
  {
    value: "Parecer em 72h",
    label: "Resposta objetiva sobre a viabilidade do seu caso.",
  },
  {
    value: "Honorários fechados",
    label: "Escopo e valores por escrito, sem custo surpresa.",
  },
  {
    value: "Acompanhamento direto",
    label: "Você fala comigo, não com um departamento.",
  },
];

const areas = [
  {
    icon: <ScalesIcon size={32} />,
    title: "Direito Civil",
    text: "Contratos, relações de consumo e responsabilidade civil. Avaliação de políticas comerciais, campanhas publicitárias e cláusulas contratuais antes que virem litígio — e defesa firme quando já viraram.",
    meta: "Contratos · Consumidor · Indenizações · Cobranças",
  },
  {
    icon: <FamilyIcon size={32} />,
    title: "Direito de Família",
    text: "Questões e litígios entre membros da família, conduzidos com discrição e foco em acordo. Aplicação das normas que seguem a orientação constitucional do conceito de família — sempre olhando o patrimônio envolvido.",
    meta: "Divórcio · Partilha · Guarda · Inventário · Pensão",
  },
  {
    icon: <ClockIcon size={32} />,
    title: "Direito Previdenciário",
    text: "Ramo do direito público nascido da conquista dos direitos sociais, que regula a seguridade social. Levantamento completo do seu histórico contributivo para pedir o benefício certo, no melhor momento.",
    meta: "Aposentadorias · Revisões · Auxílios · Benefícios negados",
  },
  {
    icon: <BuildingIcon size={32} />,
    title: "Direito Imobiliário",
    badge: "Especialidade",
    text: "Relações jurídicas de posse, compra, venda, doação, sucessão, troca e propriedade de bens imóveis. Aqui o trabalho se conecta diretamente à corretagem e aos leilões: uma análise só, do edital à escritura.",
    meta: "Matrícula · Usucapião · Distratos · Regularização · Locação",
  },
  {
    icon: <BriefcaseIcon size={32} />,
    title: "Direito Empresarial",
    text: "As relações privadas que envolvem a empresa e o empresário. Estrutura societária, contratos e o exercício da atividade econômica organizada — com separação clara entre o patrimônio da empresa e o da família.",
    meta: "Societário · Contratos · Blindagem patrimonial · Sucessão",
  },
  {
    icon: <DocumentIcon size={32} />,
    title: "Direito Trabalhista",
    text: "Regulação das relações de trabalho e do conjunto de normas que asseguram o cumprimento das obrigações das partes. Atuação para empregados e empregadores, com foco em resolver antes da audiência.",
    meta: "Rescisões · Verbas · Acordos · Defesa do empregador",
  },
];

const process = [
  {
    num: "01",
    title: "Conversa inicial",
    text: "Você expõe o caso pelo WhatsApp ou presencialmente. Sem custo, sem compromisso.",
  },
  {
    num: "02",
    title: "Análise documental e parecer",
    text: "Leitura dos documentos, riscos mapeados e cenários possíveis — em linguagem que você entende.",
  },
  {
    num: "03",
    title: "Proposta e escopo fechados",
    text: "Estratégia, prazo estimado e honorários definidos por escrito antes de qualquer providência.",
  },
  {
    num: "04",
    title: "Execução e acompanhamento",
    text: "Condução do caso com relatórios a cada etapa. Dúvida respondida no mesmo dia útil.",
  },
];

const footerAreas = [
  { label: "Civil e Consumidor", href: "#areas" },
  { label: "Família e Sucessões", href: "#areas" },
  { label: "Previdenciário", href: "#areas" },
  { label: "Imobiliário", href: "#areas" },
  { label: "Empresarial", href: "#areas" },
  { label: "Trabalhista", href: "#areas" },
];

export default function AdvocaciaPage() {
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
            Advocacia
          </span>
          <h1 className="hero-title">
            Consultoria jurídica para proteger o que você levou anos para
            construir.
          </h1>
          <p className="hero-lead">
            Atuação preventiva e contenciosa em seis frentes do direito, com
            destaque em Imobiliário e Família. Escritório full service com origem
            no Piauí e atuação em mais de dez estados.
          </p>
          <div className="actions">
            <a href={site.whatsapp} className="btn btn-primary">
              Agendar consulta
            </a>
            <a href="#areas" className="btn btn-ghost">
              Ver áreas do direito
            </a>
          </div>
        </div>

        <div className="figure-placeholder cascade-figure">
          <span>
            [ detalhe: caneta sobre contrato
            <br />
            ou estante de códigos ]
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

      <section id="areas" className="section-lg section-paper">
        <div className="section-head reveal">
          <span className="eyebrow">Áreas de atuação</span>
          <h2 className="section-title">
            Seis frentes do direito, uma mesma leitura patrimonial.
          </h2>
          <p className="section-sub">
            Encontre a área do seu caso — ou descreva a situação e eu indico o
            caminho.
          </p>
        </div>

        <div className="grid-2">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className={`card card-compact reveal${area.badge ? " card-accent" : ""}`}
              style={{ transitionDelay: `${(index % 2) * 120}ms` }}
            >
              <div className="card-head">
                {area.icon}
                <h3 className="card-title card-title-sm">{area.title}</h3>
                {area.badge && <span className="badge">{area.badge}</span>}
              </div>
              <p className="card-text">{area.text}</p>
              <span className="card-meta">{area.meta}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="processo" className="section section-ink">
        <div className="split">
          <div className="split-intro reveal">
            <span className="eyebrow">Como trabalho</span>
            <h2 className="split-title section-title-light">
              Do primeiro contato ao desfecho, sem você ficar no escuro.
            </h2>
            <p className="split-text split-text-light">
              Processo é longo; comunicação não precisa ser lenta. Você recebe
              posição a cada movimentação relevante.
            </p>
          </div>

          <div className="steps steps-ink">
            {process.map((item, index) => (
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

      <section id="loja" className="section-lg section-paper">
        <div className="section-head reveal">
          <span className="eyebrow">Loja</span>
          <h2 className="section-title">
            Um capítulo a mais na sua estante jurídica.
          </h2>
          <p className="section-sub">
            Livro coordenado por mim, reunindo artigos de referência sobre a
            advocacia que resolve fora do processo.
          </p>
        </div>

        <div className="shop">
          <div className="shop-figure reveal reveal-scale">
            <Image
              src="/livro-advocacia.jpeg"
              alt="Capa do livro Advocacia Extrajudicial: Desafios, Práticas e Transformações do Direito Contemporâneo"
              width={640}
              height={860}
              sizes="(max-width: 1024px) 70vw, 26vw"
            />
          </div>

          <div className="shop-info reveal" style={{ transitionDelay: "120ms" }}>
            <span className="badge">Lançamento 2026</span>
            <span className="shop-authors">
              Coordenação: <strong>Ian Samitrius Lima Cavalcante</strong> e
              Marcos Costa Salomão
            </span>
            <h3 className="shop-title">Advocacia Extrajudicial</h3>
            <p className="shop-text">
              Desafios, práticas e transformações do direito contemporâneo —
              uma obra coletiva sobre a advocacia que resolve fora do processo:
              leilões, regularização imobiliária, mediação e os novos caminhos
              da atuação jurídica. Editora Foco, 2026.
            </p>

            <div className="shop-meta-list">
              <span>
                <span className="dash">—</span> Capítulos sobre mediação de
                leilões e regularização imobiliária
              </span>
              <span>
                <span className="dash">—</span> Coautoria de advogados de
                referência em direito extrajudicial
              </span>
              <span>
                <span className="dash">—</span> Edição 2026, Editora Foco
              </span>
            </div>

            <span className="shop-status">Pré-venda aberta</span>

            <div className="shop-actions">
              <a href={site.whatsapp} className="btn btn-primary">
                Comprar agora
              </a>
              <a href={site.whatsapp} className="btn btn-ghost">
                Falar com o autor
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="crosslinks">
          <div className="crosslinks-head reveal">
            <span className="eyebrow">Atuação integrada</span>
            <h2 className="crosslinks-title">
              Seu caso jurídico raramente termina no processo.
            </h2>
          </div>

          <Link
            href={routes.leiloes}
            className="crosslink reveal"
            style={{ transitionDelay: "0ms" }}
          >
            <h3>Mediação de Leilões</h3>
            <p>
              Ganhou um imóvel em partilha ou quer investir com desconto? Analiso
              o edital e conduzo a arrematação até o registro.
            </p>
            <span className="crosslink-cta">Ver leilões →</span>
          </Link>

          <Link
            href={routes.imoveis}
            className="crosslink reveal"
            style={{ transitionDelay: "120ms" }}
          >
            <h3>Corretagem de Imóveis</h3>
            <p>
              Precisa vender o bem partilhado ou comprar com segurança? Carteira
              curada e documentação conferida antes da visita.
            </p>
            <span className="crosslink-cta">Ver portfólio →</span>
          </Link>
        </div>
      </section>

      <section className="cta section-paper">
        <span className="eyebrow reveal">Fale comigo</span>
        <h2 className="cta-title reveal" style={{ transitionDelay: "80ms" }}>
          Descreva seu caso. Você recebe uma leitura honesta antes de decidir.
        </h2>
        <p className="cta-text reveal" style={{ transitionDelay: "160ms" }}>
          Se a melhor saída for um acordo — ou não fazer nada —, eu digo. Ética
          antes de honorário.
        </p>
        <a
          href={site.whatsapp}
          className="btn btn-primary reveal"
          style={{ transitionDelay: "240ms" }}
        >
          Falar no WhatsApp
        </a>
      </section>

      <SiteFooter areasTitle="Áreas do direito" areas={footerAreas} />
    </>
  );
}
