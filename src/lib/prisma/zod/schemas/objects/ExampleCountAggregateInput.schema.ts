import { z } from 'zod';

import type { Prisma } from '../../../client';

const Schema: z.ZodType<Prisma.ExampleCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ExampleCountAggregateInputObjectSchema = Schema;
