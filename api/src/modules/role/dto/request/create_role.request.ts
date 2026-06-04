import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const CreateRoleRequestSchema = z.object({
  name: z.string().min(1),
});

export class CreateRoleRequest extends createZodDto(CreateRoleRequestSchema) {}
