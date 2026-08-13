# Ian Cavalcante — Hub

Site institucional de Ian Cavalcante: advocacia, mediação de leilões e corretagem de imóveis.

Construído em **Next.js 15 (App Router)** + TypeScript, sem dependências de UI — o design original
(feito no Claude Design) foi reescrito em componentes React com CSS global tokenizado.

## Rodando

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

## Estrutura

```
app/
  layout.tsx        fontes (Playfair Display + Montserrat), metadata
  globals.css       tokens de design e classes compartilhadas
  page.tsx          Home
  advocacia/        Consultoria jurídica
  leiloes/          Mediação de leilões
  imoveis/          Corretagem de imóveis
components/
  SiteHeader.tsx    header sticky com nav por página
  SiteFooter.tsx    footer com áreas configuráveis
  icons.tsx         ícones SVG inline
lib/
  site.ts           contatos, redes sociais e rotas
public/
  hero.jpeg         foto do hero da Home
  sobre.jpeg        retrato da seção "Sobre"
template/           HTML original do Claude Design (não versionado)
```

## Pendências de conteúdo

Alguns blocos ainda estão com placeholder, aguardando material definitivo:

- Imagens de hero das páginas `/advocacia`, `/leiloes` e `/imoveis`
- Cards do portfólio em `/imoveis` (fotos, nomes, metragens e preços reais)

## Paleta

| Token | Valor | Uso |
| --- | --- | --- |
| `--ink` | `#0F172A` | fundos escuros, títulos |
| `--paper` | `#F8FAFC` | fundo base |
| `--bronze` | `#B4846C` | cor de destaque, CTAs |
| `--body` | `#334155` | texto corrido |
| `--muted` | `#64748B` | texto secundário |
