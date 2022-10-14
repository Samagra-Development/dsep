import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';
import ErrorInterface from 'dsep-beckn-schema/schemas/Error.interface';

export class OnSupportDTO {
  context: ContextInterface;
  message: {
    phone: string;
    email: string;
    uri: string;
  };
  error?: ErrorInterface;
}
