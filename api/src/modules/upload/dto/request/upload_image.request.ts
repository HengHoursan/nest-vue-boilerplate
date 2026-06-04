import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const UploadImageRequestSchema = z.object({
  image: z.any(),
});

export class UploadImageRequest extends createZodDto(UploadImageRequestSchema) {
  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  image: Express.Multer.File;
}
