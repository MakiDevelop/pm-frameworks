import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const frameworks = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/frameworks' }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    titleEn: z.string(),
    category: z.enum([
      '使用者洞察',
      '問題定義',
      '創意發想',
      '驗證測試',
      '執行落地',
      '成長策略',
      '系統思維',
    ]),
    oneLiner: z.string(),
    author: z.string(),
    source: z.string(),
    stage: z.string(),
    duration: z.string(),
    year: z.number(),
    similarTo: z.array(z.object({
      slug: z.string(),
      difference: z.string(),
    })).optional(),
  }),
});

export const collections = { frameworks };
