import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';
import ErrorInterface from 'dsep-beckn-schema/schemas/Error.interface';
import RatingAckInterface from 'dsep-beckn-schema/schemas/RatingAck.interface';

export class OnRatingDTO {
  context: ContextInterface;
  message: RatingAckInterface;
  error?: ErrorInterface;
}
