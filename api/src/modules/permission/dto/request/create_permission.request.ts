import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const CreatePermissionRequestSchema = z.object({
  name: z.string().min(1),
  displayName: z.string().min(1),
  group: z.string().optional(),
  sort: z.number().optional(),
});

export class CreatePermissionRequest extends createZodDto(
  CreatePermissionRequestSchema,
) {}
