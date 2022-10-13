import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';
import OrderInterface from 'dsep-beckn-schema/schemas/Order.interface';

export class UpdateDTO {
  context: ContextInterface;
  message: {
    updated_target: string;
    order: OrderInterface;
  };
}
