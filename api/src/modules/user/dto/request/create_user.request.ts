import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const CreateUserRequestSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  email: z.string().email(),
  roleId: z.number(),
  photo: z.string().optional(),
});

export class CreateUserRequest extends createZodDto(CreateUserRequestSchema) {}
