import { Injectable } from '@nestjs/common';
import { RatingDTO } from './dto/rating.dto';

@Injectable()
export class RatingService {
  create(ratingDto: RatingDTO) {
    const { context, message } = ratingDto;
    return 'This action adds a new rating';
  }

  /*findAll() {
    return `This action returns all rating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rating`;
  }

  update(id: number, updateRatingDto: UpdateRatingDto) {
    return `This action updates a #${id} rating`;
  }

  remove(id: number) {
    return `This action removes a #${id} rating`;
  }*/
}
