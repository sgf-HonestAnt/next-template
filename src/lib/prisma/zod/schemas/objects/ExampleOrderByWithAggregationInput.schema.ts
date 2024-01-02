import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExampleCountOrderByAggregateInputObjectSchema } from './ExampleCountOrderByAggregateInput.schema';
import { ExampleMaxOrderByAggregateInputObjectSchema } from './ExampleMaxOrderByAggregateInput.schema';
import { ExampleMinOrderByAggregateInputObjectSchema } from './ExampleMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../client';

const Schema: z.ZodType<Prisma.ExampleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ExampleCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ExampleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ExampleMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ExampleOrderByWithAggregationInputObjectSchema = Schema;
