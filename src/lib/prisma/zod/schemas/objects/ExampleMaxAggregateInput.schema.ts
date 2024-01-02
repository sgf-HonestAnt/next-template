import { z } from 'zod';

import type { Prisma } from '../../../client';

const Schema: z.ZodType<Prisma.ExampleMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
  })
  .strict();

export const ExampleMaxAggregateInputObjectSchema = Schema;
