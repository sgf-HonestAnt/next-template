import { z } from 'zod';
import { AppUserCreateInputObjectSchema } from './objects/AppUserCreateInput.schema';
import { AppUserUncheckedCreateInputObjectSchema } from './objects/AppUserUncheckedCreateInput.schema';

export const AppUserCreateOneSchema = z.object({
  data: z.union([
    AppUserCreateInputObjectSchema,
    AppUserUncheckedCreateInputObjectSchema,
  ]),
});
