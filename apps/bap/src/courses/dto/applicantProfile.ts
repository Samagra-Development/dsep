import { ApiProperty } from '@nestjs/swagger';

export class ApplicantProfileDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;
}
