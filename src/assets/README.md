# Fotografia

Fotos reais (JPG ou PNG, lado maior ≥ 2000px quando possível). O Astro gera
AVIF/WebP responsivos no build — não otimize antes, envie o original.

## Em uso

| Arquivo | Onde aparece |
|---|---|
| `refit-salao-antes.png` / `refit-salao-depois.png` | Comparador "Antes e depois", ambiente Salão principal |
| `refit-cockpit-antes.png` / `refit-cockpit-depois.png` | Comparador "Antes e depois", ambiente Cockpit |
| `hero-colecao-1-entardecer.jpg` | **PROVISÓRIA** — pilha do hero, carta 1 (horizonte ao entardecer) |
| `hero-colecao-2-interior.jpg` | **PROVISÓRIA** — pilha do hero, carta 2 (interior) |
| `hero-colecao-3-aerea.jpg` | **PROVISÓRIA** — pilha do hero, carta 3 (vista aérea) |
| `hero-colecao-4-detalhe.jpg` | **PROVISÓRIA** — pilha do hero, carta 4 (detalhe de convés) |
| `refit-detalhe-teca.jpg` | **PROVISÓRIA** — seção Refit |

### As fotos do hero são provisórias

As quatro `hero-colecao-*.jpg` vieram do Pexels (licença Pexels: uso comercial
livre, sem atribuição obrigatória) e existem só para a abertura não ficar vazia.
**Substituir por fotografia própria da A·MAR.**

Elas formam a pilha do componente `PilhaFotos`, cada uma cobrindo um aspecto
diferente da embarcação: horizonte, interior, vista aérea e detalhe de acabamento.
Manter essa variedade é o que dá sentido à coleção — quatro fotos parecidas não
justificariam o empilhamento.

Para trocar, sobrescreva os arquivos mantendo os nomes. Para mudar a quantidade
de cartas, edite o array `colecao` em `sections/Hero.astro`: o componente aceita
qualquer número de fotos, mas o CSS só posiciona até quatro — acima disso, basta
acrescentar as regras `[data-pos='4']` e seguintes em `PilhaFotos.astro`.

Recorte: as cartas são 2:3 no desktop e quadradas no mobile, com `object-cover`.
Enquadramento ideal deixa respiro para o corte quadrado não amputar o assunto.

### Comparadores antes/depois

Os dois pares são recortados na mesma proporção 4:5 pelo componente `Comparador`,
então cada par deve ter **o mesmo enquadramento** nas duas fotos — é o que faz a
máscara arrastável parecer uma foto só. As larguras servidas estão limitadas ao
tamanho do original para nunca ampliar.

Para adicionar um ambiente, acrescente um item ao array `ambientes` em
`src/components/sections/AntesDepois.astro`.

## Slots vazios

Nenhum. Todas as áreas de imagem do site estão preenchidas — as de projeto com
fotografia real da A·MAR, as demais com banco de imagens marcado como provisório.

Para trocar qualquer uma, sobrescreva o arquivo mantendo o nome. O `PhotoSlot`
continua disponível para áreas novas: sem `src`, ele desenha um campo de cor da
paleta com a legenda do enquadramento desejado.

```astro
---
import foto from '../../assets/nome-do-arquivo.jpg';
---
<PhotoSlot src={foto} alt="Descrição do que se vê" class="aspect-[3/4]" />
```
