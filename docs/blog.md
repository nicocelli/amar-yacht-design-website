# Publicação no blog da A·MAR

O blog fica em `/blog`. A página inicial permanece igual, com a adição do link Blog no menu (desktop e celular) e no rodapé.

## Adicionar um artigo

1. Copie `src/content/blog/primeiro-artigo.md` para um novo arquivo com nome como `refit-por-onde-comecar.md`.
2. Preencha título, descrição, data (`AAAA-MM-DD`), categoria e autor. O nome do arquivo determina o endereço: `/blog/refit-por-onde-comecar`.
3. Escreva o texto em Markdown. Use `##` para subtítulos; eles aparecem automaticamente no sumário do artigo.
4. Mantenha `draft: true` durante a revisão. Não publique o arquivo-modelo.
5. Para publicar, troque para `draft: false`, confira a data e execute `npm run build`. Artigos com data futura não entram no build; é necessário um novo build na data de publicação.
6. Publique pelo fluxo Cloudflare existente. As páginas dos artigos e o sitemap são gerados automaticamente.

Categorias permitidas: Refit e interiores; Materiais e revestimentos; Conforto a bordo; Mercado e novidades.

É possível acrescentar `updatedAt: AAAA-MM-DD` após uma revisão. Datas editoriais são exibidas em UTC para preservar o dia informado.

Imagens podem ser colocadas em `public/blog/` e referenciadas no texto com `![Descrição acessível](/blog/nome-da-imagem.webp)`. Identifique fontes, créditos e simulações no corpo do texto. Não publique fotografias ou alegações técnicas sem revisão.

Sem artigos publicados, o blog apresenta uma mensagem de preparação, sem links para artigos fictícios. Rascunhos e artigos futuros não geram páginas nem aparecem no sitemap. Não foi acrescentado um painel de edição ou um serviço externo.
