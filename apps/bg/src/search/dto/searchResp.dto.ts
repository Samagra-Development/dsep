import AckInterface from 'dsep-beckn-schema/schemas/Ack.interface';
import ErrorInterface from 'dsep-beckn-schema/schemas/Error.interface';

export class SearchRespDTO {
  message: {
    ack: AckInterface;
  };
  error?: ErrorInterface;
}
