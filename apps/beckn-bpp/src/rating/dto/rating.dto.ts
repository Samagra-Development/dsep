import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';
import RatingInterface from 'dsep-beckn-schema/schemas/Rating.interface';

export class RatingDTO {
  context: ContextInterface;
  message: {
    rating: RatingInterface;
  };
}
