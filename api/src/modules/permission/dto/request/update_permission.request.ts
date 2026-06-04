import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const UpdatePermissionRequestSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  displayName: z.string().optional(),
  group: z.string().optional(),
  sort: z.number().optional(),
});

export class UpdatePermissionRequest extends createZodDto(
  UpdatePermissionRequestSchema,
) {}
