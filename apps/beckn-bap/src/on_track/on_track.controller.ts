import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OnTrackDTO } from './dto/on_track.dto';
import { OnTrackService } from './on_track.service';

@Controller('on-track')
export class OnTrackController {
  constructor(private readonly onTrackService: OnTrackService) { }

  @Post()
  create(@Body() onTrackDto: OnTrackDTO) {
    return this.onTrackService.create(onTrackDto);
  }
}
