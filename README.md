# A·MAR Yacht Design — site

Site institucional da **A·MAR Yacht Design**, estúdio de design de interiores náuticos, refit e
layout de embarcações (Jessica Zancanella — Santa Catarina, Brasil).

Página única em português, 100% estática, hospedada em **Cloudflare Workers**.

## Stack

| Camada | Escolha | Por quê |
|---|---|---|
| Framework | Astro 7 | Gera HTML estático puro; praticamente zero JS no cliente |
| Estilo | Tailwind CSS v4 (`@theme`) | Paleta e tipografia da marca como tokens |
| Imagens | `astro:assets` + sharp | AVIF/WebP responsivos no build |
| Fontes | woff2 self-hosted (`public/fonts`) | Sem requisição externa, sem CDN de terceiros |
| Deploy | Cloudflare Workers (assets estáticos) | Mesmo padrão do `criticalskillsjobs.com` |

Requer **Node ≥ 22.12** (`.nvmrc` fixa a 22.22.3).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + build → dist/
npm run preview    # serve o dist/
```

## Estrutura

```
src/
  data/site.ts            Fonte única de verdade: contatos, serviços, refit, parceiros
  styles/global.css       @font-face, tokens (@theme) e utilitários da marca
  layouts/Base.astro      <head>, SEO, JSON-LD, observer de scroll
  components/
    Wordmark.astro        Lockup A·MAR em texto real
    SectionHead.astro     Versalete + título
    PhotoSlot.astro       Slot de fotografia com placeholder da paleta
    Nav.astro / Footer.astro
    sections/             Hero, Sobre, Interiores, Refit, Metodo, Parcerias, Contato
  pages/index.astro       A página
  pages/404.astro
public/fonts/             4 woff2 (latin + latin-ext) — ver "Tipografia"
brand/                    Material original da marca (deck, moodboard, paleta)
```

Todo o conteúdo editorial vem de `src/data/site.ts` — mudar um serviço, um item de refit ou o
telefone é editar um array, não um componente.

## Identidade aplicada

Paleta oficial, exposta como tokens Tailwind (`bg-ocean`, `text-limestone`, …):

| Token | Hex | Uso |
|---|---|---|
| `limestone` | `#F6F4EF` | Fundo base |
| `sand` | `#E7E1D6` | Faixas alternadas |
| `taupe` | `#B9B2A6` | Filetes e bordas |
| `oak` | `#D2C4AC` | Campo de madeira/driftwood |
| `graphite` | `#33363A` | Texto corrido |
| `sage` | `#8FA08E` | Acento sobre fundo escuro |
| `ocean` | `#0E2A3D` | Títulos, seção Refit, rodapé |

### Raios — sem canto vivo

Marcenaria de bordo é curva contínua: interior náutico não tem quina. O raio é
vocabulário da marca, não decoração de componente, então está na escala de tokens:

| Token | Valor | Uso |
|---|---|---|
| `rounded-soft` | 0.75rem | elementos miúdos |
| `rounded-card` | 1.5rem | cartões da grade de serviços |
| `rounded-media` | 2rem | fotos, comparadores, placeholders |
| `rounded-full` | — | botões, etiquetas, avatar, pega do comparador |

Consequência de layout: separadores feitos com `gap-px` sobre um fundo (a malha de
filetes de 1px) **não** convivem com raio. Onde havia essa técnica — grade de serviços
e lista do refit — o desenho mudou para cartões soltos com borda fina e para divisores
simples, que não têm canto nenhum.

O `:focus-visible` não fixa `border-radius`: o contorno acompanha o raio do próprio
elemento, então o foco fica arredondado junto.

### Tipografia — substituições temporárias

A identidade especifica **Canela** (serif) e **Suisse International** (sans). As duas são
comerciais e **não há licença web contratada**. O site roda hoje com substitutas livres de
proporção e contraste equivalentes:

| Papel | Especificado | Em uso |
|---|---|---|
| Display | Canela | Cormorant Garamond Variable |
| Texto/UI | Suisse International | Inter Variable |

Ao adquirir as licenças web, a troca é feita em **um lugar só**: os `@font-face` e as variáveis
`--font-display` / `--font-sans` no topo de `src/styles/global.css`.

> Cormorant desenha diacríticos bem altos. O entrelinhamento dos utilitários `display-*` já está
> calibrado para isso — em português, apertar mais faz o acento encostar na linha de cima.

## Fotografia

A seção **Antes e depois** usa fotografia real de um refit em dois ambientes (salão
principal e cockpit), apresentada em um comparador de máscara arrastável
(`components/Comparador.astro`). O controle é um `<input type="range">` transparente
cobrindo a área inteira: arraste com mouse, toque, teclado e semântica de leitor de
tela saem de graça, sem reimplementar nada.

Cada par é recortado na mesma proporção 4:5, e as larguras servidas são limitadas ao
tamanho do original para nunca ampliar. Os PNGs de 0,7 a 2,4 MB viram WebP de 16 a 120 KB.

A abertura usa `PilhaFotos`: uma coleção empilhada como um maço de cópias impressas.
Em repouso as bordas das cartas de trás aparecem, o que anuncia que há mais de uma foto.
Com o cursor sobre a pilha ela avança sozinha; em telas sem hover, avança devagar
enquanto está visível. Um botão cobrindo a pilha dá o mesmo avanço por clique, toque e
teclado, e carrega o rótulo para leitor de tela. Com `prefers-reduced-motion` nada gira
sozinho e as transições somem, mas o clique continua funcionando.

A separação entre as cartas vem de um `outline` na cor do fundo: invisível contra a
página na carta da frente, e limpo onde elas se sobrepõem.

> **As quatro fotos do hero são provisórias.** Vieram do Pexels (uso comercial livre) só
> para a abertura não ficar vazia. Substituir por fotografia própria — ver
> `src/assets/README.md`.

A seção Refit também usa banco de imagens provisório (`refit-detalhe-teca.jpg`).

O material da apresentação da marca **não** foi usado: é banco de imagens do Canva,
saturado, fora da paleta e sem licença para redistribuição web; os tiles do moodboard
têm ~135px. Por isso a direção geral do site é tipográfica e material, e a fotografia
entra só onde tem função — provar o refit e ambientar a abertura.

Não há mais slots vazios. O `<PhotoSlot>` segue disponível para áreas novas: sem `src`,
ele desenha um campo de cor da paleta com a legenda do enquadramento desejado.

## Faixa de marcas

A seção `Marcas.astro` é uma esteira contínua com nomes de estaleiros, definida em
`marcasNauticas` (`src/data/site.ts`).

> **A lista é provisória e precisa de curadoria.** São os estaleiros mais relevantes do
> mercado brasileiro e os líderes globais, levantados em pesquisa — **não** são clientes
> nem parceiros da A·MAR. Por isso o rótulo da seção ("Estaleiros e marcas do mercado
> náutico") descreve o mercado, e não uma relação comercial. Se a lista final passar a
> ser de parceiros ou clientes reais, o rótulo deve mudar junto.

A animação pausa no hover e no foco, e com `prefers-reduced-motion` a faixa vira uma
lista rolável na horizontal em vez de se mover sozinha.

## Contato / conversão

Não há backend. O formulário monta uma mensagem já formatada e abre o **WhatsApp** —
canal real desse público no Brasil. Nada é armazenado no site, então não há LGPD a tratar
nem endpoint para manter.

Telefone, Instagram e handle ficam em `src/data/site.ts`. O e-mail está como `null` (o cartão
saiu com o campo em branco) — ao definir, preencher `contact.email` e o bloco aparece sozinho
na seção de contato.

## Deploy — Cloudflare

`wrangler.jsonc` publica **apenas `./dist`**, então a raiz do repo (incluindo `brand/` e `.git/`)
nunca vai para a CDN.

```bash
npm run deploy      # build + wrangler deploy
```

Para Workers Builds (deploy automático a cada push na `main`):

1. Workers & Pages → Create → Workers → conectar este repositório
2. Build command: `npm run build`
3. Deploy command: `npx wrangler deploy`
4. Variável de ambiente do build: `NODE_VERSION = 22.22.3`

### Domínio

**`amaryacht.design`** — já configurado em `wrangler.jsonc` (apex + `www`) e em `SITE_URL`
(`src/data/site.ts`), que alimenta canonical, OG, sitemap e `robots.txt`.

O `custom_domain` exige que a zona `amaryacht.design` esteja na mesma conta Cloudflare; o
registro DNS é criado automaticamente no primeiro `wrangler deploy`.

> Apex e `www` servem o mesmo conteúdo. O `<link rel="canonical">` aponta sempre para o apex,
> então não há conteúdo duplicado para o Google. Se preferir um redirecionamento de verdade,
> remova a rota `www` e crie uma **Redirect Rule** (`www.amaryacht.design/*` → `https://amaryacht.design/$1`, 301).

### Antes de publicar

- [ ] Preencher `contact.email` se houver e-mail da marca
- [ ] Substituir os `PhotoSlot` por fotografia real
- [ ] Regerar `public/og.png` se a chamada principal mudar

## Acessibilidade

Idioma `pt-BR`, skip link, foco visível, `prefers-reduced-motion` respeitado (as revelações de
scroll são desligadas e o conteúdo nasce visível), menu mobile operável por teclado com `Esc`,
e contraste de texto verificado — o taupe da paleta é usado só em filetes e bordas, nunca em
texto, onde entra o `--color-ink-muted`.
