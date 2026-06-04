import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const UpdateUserRequestSchema = z.object({
  id: z.number(),
  username: z.string().optional(),
  password: z.string().optional(),
  email: z.string().email().optional(),
  roleId: z.number().optional(),
  photo: z.string().optional(),
});

export class UpdateUserRequest extends createZodDto(UpdateUserRequestSchema) {}
