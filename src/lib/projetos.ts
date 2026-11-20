import { getCollection } from 'astro:content';

/** Projetos publicados: sem rascunhos, ordenados por `ordem` e depois pelo ano mais recente. */
export async function publishedProjects() {
  return (await getCollection('projetos', ({ data }) => !data.draft))
    .sort((a, b) => a.data.ordem - b.data.ordem || b.data.ano - a.data.ano);
}
