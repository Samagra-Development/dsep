import AckInterface from 'src/schemas/Ack.interface';
import ErrorInterface from 'src/schemas/Error.interface';

export class ConfirmResp {
  message: {
    ack: AckInterface;
  };
  error?: ErrorInterface;
}
