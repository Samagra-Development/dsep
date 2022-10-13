import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';

export class StatusDTO {
  context: ContextInterface;
  message: {
    order_id: string;
  };
}
