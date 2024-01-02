import { z } from 'zod';

import type { Prisma } from '../../../client';

const Schema: z.ZodType<Prisma.ExampleUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
  })
  .strict();

export const ExampleUncheckedCreateInputObjectSchema = Schema;
