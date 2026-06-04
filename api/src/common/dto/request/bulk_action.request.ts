import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const BulkActionRequestSchema = z.object({
  ids: z.array(z.number()).min(1),
});

export class BulkActionRequest extends createZodDto(BulkActionRequestSchema) {}
