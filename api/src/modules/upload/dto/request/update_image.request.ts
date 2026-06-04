import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const UpdateImageRequestSchema = z.object({
  old_image_url: z.string().min(1),
  new_image: z.any().optional(),
});

export class UpdateImageRequest extends createZodDto(UpdateImageRequestSchema) {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
  })
  new_image?: Express.Multer.File;

  @ApiProperty({
    required: true,
  })
  old_image_url: string;
}
