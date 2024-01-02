import { z } from 'zod';

import type { Prisma } from '../../../client';

const Schema: z.ZodType<Prisma.NestedIntNullableFilter> = z
  .object({
    equals: z.number().optional().nullable(),
    in: z.union([z.number().array(), z.number()]).optional().nullable(),
    notIn: z.union([z.number().array(), z.number()]).optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntNullableFilterObjectSchema)])
      .optional()
      .nullable(),
    isSet: z.boolean().optional(),
  })
  .strict();

export const NestedIntNullableFilterObjectSchema = Schema;
