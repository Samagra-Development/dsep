import ContextInterface from 'src/schemas/Context.interface';
import OrderInterface from 'src/schemas/Order.interface';

export class InitDTO {
  context: ContextInterface;
  message: {
    order: OrderInterface;
  };
}
