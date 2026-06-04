import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const AssignPermissionsRequestSchema = z.object({
  roleId: z.number(),
  permissionIds: z.array(z.number()),
});

export class AssignPermissionsRequest extends createZodDto(
  AssignPermissionsRequestSchema,
) {}
