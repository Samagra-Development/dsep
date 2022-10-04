import ContextInterface from 'src/schemas/Context.interface';
import ErrorInterface from 'src/schemas/Error.interface';
import OrderInterface from 'src/schemas/Order.interface';

export class OnStatusDTO {
  context: ContextInterface;
  message: {
    order: OrderInterface;
  };
  error?: ErrorInterface;
}
