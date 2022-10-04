import { PartialType } from '@nestjs/mapped-types';
import { CreateOnInitDto } from './create-on_init.dto';

export class UpdateOnInitDto extends PartialType(CreateOnInitDto) {}
