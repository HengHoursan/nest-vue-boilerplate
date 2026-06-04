import { createZodDto } from 'nestjs-zod';
import { CreateActivityLogSchema } from './create_activity_log.dto';

export class UpdateActivityLogDto extends createZodDto(
  CreateActivityLogSchema.partial(),
) {}
