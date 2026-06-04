import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const RefreshTokenRequestSchema = z.object({
  refreshToken: z.string().min(1),
});

export class RefreshTokenRequest extends createZodDto(
  RefreshTokenRequestSchema,
) {}
