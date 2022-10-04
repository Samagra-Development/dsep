import { PartialType } from '@nestjs/mapped-types';
import { CreateOnConfirmDto } from './create-on_confirm.dto';

export class UpdateOnConfirmDto extends PartialType(CreateOnConfirmDto) {}
