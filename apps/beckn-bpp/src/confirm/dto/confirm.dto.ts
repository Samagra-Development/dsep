import ContextInterface from 'src/schemas/Context.interface';
import OrderInterface from 'src/schemas/Order.interface';

export class ConfirmDTO {
  context: ContextInterface;
  message: {
    order: OrderInterface;
  };
}
