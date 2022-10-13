import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';
import OrderInterface from 'dsep-beckn-schema/schemas/Order.interface';

export class SelectDTO {
  context: ContextInterface;
  message: {
    order: OrderInterface;
  };
}
