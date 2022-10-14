import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';
import ErrorInterface from 'dsep-beckn-schema/schemas/Error.interface';
import OrderInterface from 'dsep-beckn-schema/schemas/Order.interface';

export class OnCancelDTO {
  context: ContextInterface;
  message: {
    order: OrderInterface;
  };
  error?: ErrorInterface;
}
