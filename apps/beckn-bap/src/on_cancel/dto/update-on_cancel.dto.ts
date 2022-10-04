import { PartialType } from '@nestjs/mapped-types';
import { CreateOnCancelDto } from './create-on_cancel.dto';

export class UpdateOnCancelDto extends PartialType(CreateOnCancelDto) {}
