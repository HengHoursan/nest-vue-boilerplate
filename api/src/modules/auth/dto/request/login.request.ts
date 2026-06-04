import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const LoginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export class LoginRequest extends createZodDto(LoginRequestSchema) {}
