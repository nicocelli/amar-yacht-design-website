# Página de Projetos (portfólio)

A página fica em `/projetos`, com o link **Projetos** no menu (desktop e celular) e no rodapé. Cada projeto ganha uma página própria em `/projetos/nome-do-arquivo`.

O formato é de **estudo de caso**: cada projeto conta o ponto de partida, o conceito, o que mudou e o resultado, em vez de só uma galeria de fotos.

## Adicionar um projeto

1. Copie `src/content/projetos/refit-phantom-500-ht.md` para um novo arquivo, por exemplo `interiores-azimut-55.md`. O nome do arquivo vira o endereço.
2. Coloque as imagens em `public/projetos/` (WebP de preferência, com nomes começando pelo projeto) e aponte a capa em `capa`.
3. Preencha a ficha:
   - `title`, `description` (uma frase, aparece no cartão e no Google)
   - `embarcacao` (modelo do barco)
   - `tipo`: Interiores; Refit parcial; Refit completo; Personalização
   - `natureza`: Projeto executado; Estudo conceitual; Projeto acadêmico
   - `ano`, `local` (opcional), `ambientes` (lista)
   - `capa` e `capaAlt` (descrição da imagem para leitor de tela)
   - `ordem`: número menor aparece primeiro; o primeiro projeto ganha destaque largo
   - `artigo` (opcional): nome do arquivo de um artigo do blog relacionado, sem `.md`
4. Escreva o texto em Markdown com `##` para cada etapa: O ponto de partida, O conceito, O que mudou, O resultado.
5. Mantenha `draft: true` durante a revisão. Para publicar, troque para `draft: false` e faça o deploy.

Sempre identifique simulações, renders e estudos conceituais no texto e no campo `natureza`. Projetos que não são de cliente real não devem parecer obra executada.

Sem projetos publicados, a página mostra uma mensagem de preparação.
