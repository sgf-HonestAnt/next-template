import { z } from 'zod';
import { AppUserWhereUniqueInputObjectSchema } from './objects/AppUserWhereUniqueInput.schema';
import { AppUserCreateInputObjectSchema } from './objects/AppUserCreateInput.schema';
import { AppUserUncheckedCreateInputObjectSchema } from './objects/AppUserUncheckedCreateInput.schema';
import { AppUserUpdateInputObjectSchema } from './objects/AppUserUpdateInput.schema';
import { AppUserUncheckedUpdateInputObjectSchema } from './objects/AppUserUncheckedUpdateInput.schema';

export const AppUserUpsertSchema = z.object({
  where: AppUserWhereUniqueInputObjectSchema,
  create: z.union([
    AppUserCreateInputObjectSchema,
    AppUserUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AppUserUpdateInputObjectSchema,
    AppUserUncheckedUpdateInputObjectSchema,
  ]),
});
