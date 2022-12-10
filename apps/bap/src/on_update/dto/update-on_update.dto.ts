import { PartialType } from '@nestjs/mapped-types';
import { CreateOnUpdateDto } from './create-on_update.dto';

export class UpdateOnUpdateDto extends PartialType(CreateOnUpdateDto) {}
