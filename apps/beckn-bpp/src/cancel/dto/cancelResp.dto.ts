import AckInterface from 'src/schemas/Ack.interface';
import ErrorInterface from 'src/schemas/Error.interface';

export class CancelRespDTO {
  message: {
    ack: AckInterface;
  };
  error?: ErrorInterface;
}
