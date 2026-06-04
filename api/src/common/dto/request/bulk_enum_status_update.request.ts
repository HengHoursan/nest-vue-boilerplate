import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const BulkEnumStatusUpdateRequestSchema = z.object({
  ids: z.array(z.number()).min(1),
  status: z.string().min(1),
});

export class BulkEnumStatusUpdateRequest extends createZodDto(
  BulkEnumStatusUpdateRequestSchema,
) {}
