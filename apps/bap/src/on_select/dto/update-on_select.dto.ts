import { PartialType } from '@nestjs/mapped-types';
import { CreateOnSelectDto } from './create-on_select.dto';

export class UpdateOnSelectDto extends PartialType(CreateOnSelectDto) {}
