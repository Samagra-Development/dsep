import ContextInterface from 'src/schemas/Context.interface';
import OrderInterface from 'src/schemas/Order.interface';

export class UpdateDTO {
  context: ContextInterface;
  message: {
    updated_target: string;
    order: OrderInterface;
  };
}
