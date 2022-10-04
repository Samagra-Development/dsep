import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OnRatingService } from './on_rating.service';
import { OnRatingDTO } from './dto/on_rating.dto';

@Controller('on-rating')
export class OnRatingController {
  constructor(private readonly onRatingService: OnRatingService) { }

  @Post()
  create(@Body() onRatingDto: OnRatingDTO) {
    return this.onRatingService.create(onRatingDto);
  }
}
