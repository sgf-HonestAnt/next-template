import { z } from 'zod';
import { AppUserWhereInputObjectSchema } from './objects/AppUserWhereInput.schema';

export const AppUserDeleteManySchema = z.object({
  where: AppUserWhereInputObjectSchema.optional(),
});
