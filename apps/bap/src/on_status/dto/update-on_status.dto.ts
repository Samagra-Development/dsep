import { PartialType } from '@nestjs/mapped-types';
import { CreateOnStatusDto } from './create-on_status.dto';

export class UpdateOnStatusDto extends PartialType(CreateOnStatusDto) {}
