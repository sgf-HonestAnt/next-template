import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../client';

const Schema: z.ZodType<Prisma.ExampleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExampleWhereInputObjectSchema),
        z.lazy(() => ExampleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExampleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExampleWhereInputObjectSchema),
        z.lazy(() => ExampleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const ExampleWhereInputObjectSchema = Schema;
