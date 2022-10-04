import { PartialType } from '@nestjs/mapped-types';
import { CreateOnRatingDto } from './create-on_rating.dto';

export class UpdateOnRatingDto extends PartialType(CreateOnRatingDto) {}
