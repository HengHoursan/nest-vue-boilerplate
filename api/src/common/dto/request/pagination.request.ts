import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const PaginationRequestSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(500).default(10),
  search: z.string().optional(),
  filter: z.record(z.string(), z.string()).optional(),
  sortBy: z.string().default('id'),
  sortOrder: z
    .preprocess(
      (val) => (typeof val === 'string' ? val.toUpperCase() : val),
      z.enum(['ASC', 'DESC']),
    )
    .default('DESC'),
});

export class PaginationRequest extends createZodDto(PaginationRequestSchema) {}
