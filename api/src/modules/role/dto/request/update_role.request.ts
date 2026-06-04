import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const UpdateRoleRequestSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
});

export class UpdateRoleRequest extends createZodDto(UpdateRoleRequestSchema) {}
