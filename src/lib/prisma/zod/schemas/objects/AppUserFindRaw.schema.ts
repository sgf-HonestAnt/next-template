import { z } from 'zod';

import type { Prisma } from '../../../client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.AppUserFindRawArgs> = z
  .object({
    filter: jsonSchema.optional(),
    options: jsonSchema.optional(),
  })
  .strict();

export const AppUserFindRawObjectSchema = Schema;
