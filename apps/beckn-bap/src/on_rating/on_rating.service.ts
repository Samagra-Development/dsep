import { Injectable } from '@nestjs/common';
import { OnRatingDTO } from './dto/on_rating.dto';

@Injectable()
export class OnRatingService {
  create(onRatingDto: OnRatingDTO) {
    return 'This action adds a new onRating';
  }
}
