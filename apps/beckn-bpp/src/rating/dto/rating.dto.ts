import ContextInterface from 'src/schemas/Context.interface';
import RatingInterface from 'src/schemas/Rating.interface';

export class RatingDTO {
  context: ContextInterface;
  message: {
    rating: RatingInterface;
  };
}
