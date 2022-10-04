import ContextInterface from 'src/schemas/Context.interface';
import ErrorInterface from 'src/schemas/Error.interface';
import RatingAckInterface from 'src/schemas/RatingAck.interface';

export class OnRatingDTO {
  context: ContextInterface;
  message: RatingAckInterface;
  error?: ErrorInterface;
}
