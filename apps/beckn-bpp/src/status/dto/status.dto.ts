import ContextInterface from 'src/schemas/Context.interface';

export class StatusDTO {
  context: ContextInterface;
  message: {
    order_id: string;
  };
}
