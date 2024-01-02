import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AppUserCountOrderByAggregateInputObjectSchema } from './AppUserCountOrderByAggregateInput.schema';
import { AppUserMaxOrderByAggregateInputObjectSchema } from './AppUserMaxOrderByAggregateInput.schema';
import { AppUserMinOrderByAggregateInputObjectSchema } from './AppUserMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../client';

const Schema: z.ZodType<Prisma.AppUserOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AppUserCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => AppUserMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AppUserMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const AppUserOrderByWithAggregationInputObjectSchema = Schema;
