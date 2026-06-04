import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const RegisterRequestSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  email: z.string().email(),
  roleId: z.number(),
});

export class RegisterRequest extends createZodDto(RegisterRequestSchema) {}
