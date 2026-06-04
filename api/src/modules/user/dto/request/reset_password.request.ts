import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const ResetPasswordRequestSchema = z.object({
  userId: z.number(),
  newPassword: z.string().min(6),
});

export class ResetPasswordRequest extends createZodDto(
  ResetPasswordRequestSchema,
) {}
