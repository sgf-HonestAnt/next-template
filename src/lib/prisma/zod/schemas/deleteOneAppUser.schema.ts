import { z } from 'zod';
import { AppUserWhereUniqueInputObjectSchema } from './objects/AppUserWhereUniqueInput.schema';

export const AppUserDeleteOneSchema = z.object({
  where: AppUserWhereUniqueInputObjectSchema,
});
