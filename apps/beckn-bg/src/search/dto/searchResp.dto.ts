import AckInterface from 'src/schemas/Ack.interface';
import ErrorInterface from 'src/schemas/Error.interface';

export class SearchRespDTO {
  message: {
    ack: AckInterface;
  };
  error?: ErrorInterface;
}
