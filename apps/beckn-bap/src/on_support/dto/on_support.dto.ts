import ContextInterface from 'src/schemas/Context.interface';
import ErrorInterface from 'src/schemas/Error.interface';

export class OnSupportDTO {
  context: ContextInterface;
  message: {
    phone: string;
    email: string;
    uri: string;
  };
  error?: ErrorInterface;
}
