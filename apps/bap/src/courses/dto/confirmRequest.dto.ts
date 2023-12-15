import { ApiProperty } from '@nestjs/swagger';
import { ApplicantProfileDto } from './applicantProfile';

export class ConfirmRequestDto {
  @ApiProperty()
  providerId: string;

  @ApiProperty()
  courseId: string;

  @ApiProperty()
  amount: string;

  @ApiProperty()
  bppId?: string;

  @ApiProperty()
  bppUri?: string;

  @ApiProperty()
  applicantProfile: ApplicantProfileDto;
}
