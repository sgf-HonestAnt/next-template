import { z } from 'zod';
import { AppUserWhereUniqueInputObjectSchema } from './objects/AppUserWhereUniqueInput.schema';

export const AppUserFindUniqueSchema = z.object({
  where: AppUserWhereUniqueInputObjectSchema,
});
