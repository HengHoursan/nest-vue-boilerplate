import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const UpdateProfileRequestSchema = z.object({
  username: z.string().min(3).max(60),
  email: z.string().email(),
  photo: z.string().optional(),
});

export class UpdateProfileRequest extends createZodDto(
  UpdateProfileRequestSchema,
) {}
