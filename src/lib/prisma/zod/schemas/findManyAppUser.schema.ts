import { z } from 'zod';
import { AppUserOrderByWithRelationInputObjectSchema } from './objects/AppUserOrderByWithRelationInput.schema';
import { AppUserWhereInputObjectSchema } from './objects/AppUserWhereInput.schema';
import { AppUserWhereUniqueInputObjectSchema } from './objects/AppUserWhereUniqueInput.schema';
import { AppUserScalarFieldEnumSchema } from './enums/AppUserScalarFieldEnum.schema';

export const AppUserFindManySchema = z.object({
  orderBy: z
    .union([
      AppUserOrderByWithRelationInputObjectSchema,
      AppUserOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AppUserWhereInputObjectSchema.optional(),
  cursor: AppUserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AppUserScalarFieldEnumSchema).optional(),
});
