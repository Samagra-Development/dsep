import { PartialType } from '@nestjs/mapped-types';
import { CreateOnSearchDto } from './create-on_search.dto';

export class UpdateOnSearchDto extends PartialType(CreateOnSearchDto) {}
