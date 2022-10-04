import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingDTO } from './dto/rating.dto';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) { }

  @Post()
  create(@Body() ratingDto: RatingDTO) {
    return this.ratingService.create(ratingDto);
  }

  /*@Get()
  findAll() {
    return this.ratingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ratingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRatingDto: UpdateRatingDto) {
    return this.ratingService.update(+id, updateRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ratingService.remove(+id);
  }*/
}
