import { z } from 'zod';
import { AppUserOrderByWithRelationInputObjectSchema } from './objects/AppUserOrderByWithRelationInput.schema';
import { AppUserWhereInputObjectSchema } from './objects/AppUserWhereInput.schema';
import { AppUserWhereUniqueInputObjectSchema } from './objects/AppUserWhereUniqueInput.schema';
import { AppUserCountAggregateInputObjectSchema } from './objects/AppUserCountAggregateInput.schema';
import { AppUserMinAggregateInputObjectSchema } from './objects/AppUserMinAggregateInput.schema';
import { AppUserMaxAggregateInputObjectSchema } from './objects/AppUserMaxAggregateInput.schema';

export const AppUserAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), AppUserCountAggregateInputObjectSchema])
    .optional(),
  _min: AppUserMinAggregateInputObjectSchema.optional(),
  _max: AppUserMaxAggregateInputObjectSchema.optional(),
});
