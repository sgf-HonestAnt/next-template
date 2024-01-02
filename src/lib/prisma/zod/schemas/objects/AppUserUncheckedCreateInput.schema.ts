import { z } from 'zod';

import type { Prisma } from '../../../client';

const Schema: z.ZodType<Prisma.AppUserUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    image: z.string().optional().nullable(),
  })
  .strict();

export const AppUserUncheckedCreateInputObjectSchema = Schema;
