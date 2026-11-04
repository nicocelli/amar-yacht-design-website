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

export const collections = { blog };
