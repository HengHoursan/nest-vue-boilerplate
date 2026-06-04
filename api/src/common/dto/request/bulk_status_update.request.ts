import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const BulkStatusUpdateRequestSchema = z.object({
  ids: z.array(z.number()).min(1),
  status: z.boolean(),
});

export class BulkStatusUpdateRequest extends createZodDto(
  BulkStatusUpdateRequestSchema,
) {}
