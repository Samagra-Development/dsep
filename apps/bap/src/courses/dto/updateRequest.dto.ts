import { ApiProperty } from '@nestjs/swagger';
import { ApplicantProfileDto } from './applicantProfile';

export class UpdateRequestDto {
  @ApiProperty()
  providerOrderId: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  customer: ApplicantProfileDto;

  @ApiProperty()
  bppId?: string;

  @ApiProperty()
  bppUri?: string;
}
