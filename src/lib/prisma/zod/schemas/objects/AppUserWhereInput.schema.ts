import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '../../../client';

const Schema: z.ZodType<Prisma.AppUserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AppUserWhereInputObjectSchema),
        z.lazy(() => AppUserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AppUserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AppUserWhereInputObjectSchema),
        z.lazy(() => AppUserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const AppUserWhereInputObjectSchema = Schema;
