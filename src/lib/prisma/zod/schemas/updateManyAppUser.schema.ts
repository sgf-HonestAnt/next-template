import { z } from 'zod';
import { AppUserUpdateManyMutationInputObjectSchema } from './objects/AppUserUpdateManyMutationInput.schema';
import { AppUserWhereInputObjectSchema } from './objects/AppUserWhereInput.schema';

export const AppUserUpdateManySchema = z.object({
  data: AppUserUpdateManyMutationInputObjectSchema,
  where: AppUserWhereInputObjectSchema.optional(),
});
