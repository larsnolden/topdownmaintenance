import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'engine-mechanical',
      'cooling-system',
      'intake-fuel-system',
      'ignition-system',
      'clutch-transmission',
      'brakes',
      'suspension',
      'steering-alignment',
      'electrical-system',
      'tires-wheels',
      'convertible-top-exterior-trim',
      'body-interior',
      'rust-prevention',
      'hvac-climate-control',
      'appendices'
    ]),
    difficulty: z.number().int().min(1).max(5),
    difficultyLabel: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert']),
    estimatedTime: z.string(),
    applicableModels: z.array(z.enum(['NB1', 'NB2'])).min(1),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    relatedGuides: z.array(z.string()).default([]),
    order: z.number().int().optional(),
    updatedAt: z.string().optional()
  })
});

export const collections = { guides };
