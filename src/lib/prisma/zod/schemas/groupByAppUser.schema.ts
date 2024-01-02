import { z } from 'zod';
import { AppUserWhereInputObjectSchema } from './objects/AppUserWhereInput.schema';
import { AppUserOrderByWithAggregationInputObjectSchema } from './objects/AppUserOrderByWithAggregationInput.schema';
import { AppUserScalarWhereWithAggregatesInputObjectSchema } from './objects/AppUserScalarWhereWithAggregatesInput.schema';
import { AppUserScalarFieldEnumSchema } from './enums/AppUserScalarFieldEnum.schema';

export const AppUserGroupBySchema = z.object({
  where: AppUserWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AppUserOrderByWithAggregationInputObjectSchema,
      AppUserOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: AppUserScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AppUserScalarFieldEnumSchema),
});
