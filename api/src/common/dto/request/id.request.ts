import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const IdRequestSchema = z.object({
  id: z.coerce.number(),
});

export class IdRequest extends createZodDto(IdRequestSchema) {}
