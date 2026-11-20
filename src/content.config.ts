import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum(['Refit e interiores', 'Materiais e revestimentos', 'Conforto a bordo', 'Mercado e novidades']),
    author: z.string().default('Jessica Zancanella'),
    draft: z.boolean().default(true),
  }),
});

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    embarcacao: z.string().min(1),
    tipo: z.enum(['Interiores', 'Refit parcial', 'Refit completo', 'Personalização']),
    natureza: z.enum(['Projeto executado', 'Estudo conceitual', 'Projeto acadêmico']),
    ano: z.number().int(),
    local: z.string().optional(),
    ambientes: z.array(z.string()).default([]),
    capa: z.string().startsWith('/projetos/'),
    capaAlt: z.string().min(1),
    ordem: z.number().default(100),
    artigo: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { blog, projetos };
