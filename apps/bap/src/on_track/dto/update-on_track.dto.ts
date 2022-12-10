import { PartialType } from '@nestjs/mapped-types';
import { CreateOnTrackDto } from './create-on_track.dto';

export class UpdateOnTrackDto extends PartialType(CreateOnTrackDto) {}
