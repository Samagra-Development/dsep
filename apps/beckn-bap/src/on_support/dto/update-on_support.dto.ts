import { PartialType } from '@nestjs/mapped-types';
import { CreateOnSupportDto } from './create-on_support.dto';

export class UpdateOnSupportDto extends PartialType(CreateOnSupportDto) {}
