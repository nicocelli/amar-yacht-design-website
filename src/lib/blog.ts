import { getCollection } from 'astro:content';

export const blogCategories = [
  { title: 'Refit e interiores', description: 'Planejamento e transformação dos espaços a bordo.' },
  { title: 'Materiais e revestimentos', description: 'Escolhas que unem conforto, estética e desempenho.' },
  { title: 'Conforto a bordo', description: 'Ideias para aproveitar e viver melhor a embarcação.' },
  { title: 'Mercado e novidades', description: 'Um olhar sobre os movimentos do universo náutico.' },
];

export async function publishedPosts() {
  const now = new Date();
  return (await getCollection('blog', ({ data }) => !data.draft && data.publishedAt <= now))
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

export const formatDate = (date: Date) => new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
}).format(date);
