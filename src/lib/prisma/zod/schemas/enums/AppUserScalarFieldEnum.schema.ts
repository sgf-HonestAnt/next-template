import { z } from 'zod';

export const AppUserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'email',
  'image',
]);
