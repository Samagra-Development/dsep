import { ApiProperty } from '@nestjs/swagger';

export class CourseRatingRequestDto {
  @ApiProperty()
  rating: number;

  @ApiProperty()
  courseId: string;

  @ApiProperty()
  bppId?: string;

  @ApiProperty()
  bppUri?: string;
}
