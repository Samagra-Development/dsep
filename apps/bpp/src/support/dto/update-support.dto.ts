import { PartialType } from '@nestjs/mapped-types';
import { CreateSupportDto } from './create-support.dto';

export class UpdateSupportDto extends PartialType(CreateSupportDto) {}
