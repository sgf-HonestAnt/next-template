import { z } from 'zod';
import { AppUserCreateManyInputObjectSchema } from './objects/AppUserCreateManyInput.schema';

export const AppUserCreateManySchema = z.object({
  data: z.union([
    AppUserCreateManyInputObjectSchema,
    z.array(AppUserCreateManyInputObjectSchema),
  ]),
});
