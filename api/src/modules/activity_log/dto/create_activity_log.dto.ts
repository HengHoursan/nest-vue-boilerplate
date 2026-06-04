import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const CreateActivityLogSchema = z.object({});

export class CreateActivityLogDto extends createZodDto(
  CreateActivityLogSchema,
) {}
