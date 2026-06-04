import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const RevokePermissionsRequestSchema = z.object({
  roleId: z.number(),
  permissionIds: z.array(z.number()),
});

export class RevokePermissionsRequest extends createZodDto(
  RevokePermissionsRequestSchema,
) {}
