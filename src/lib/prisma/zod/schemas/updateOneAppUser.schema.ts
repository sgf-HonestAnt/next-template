import { z } from 'zod';
import { AppUserUpdateInputObjectSchema } from './objects/AppUserUpdateInput.schema';
import { AppUserUncheckedUpdateInputObjectSchema } from './objects/AppUserUncheckedUpdateInput.schema';
import { AppUserWhereUniqueInputObjectSchema } from './objects/AppUserWhereUniqueInput.schema';

export const AppUserUpdateOneSchema = z.object({
  data: z.union([
    AppUserUpdateInputObjectSchema,
    AppUserUncheckedUpdateInputObjectSchema,
  ]),
  where: AppUserWhereUniqueInputObjectSchema,
});
