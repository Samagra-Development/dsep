import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';
import DescriptorInterface from 'dsep-beckn-schema/schemas/Descriptor.interface';

export class CancelDTO {
  context: ContextInterface;
  message: {
    order_id: string;
    cancellation_reason_id: string;
    descriptor: DescriptorInterface;
  };
}
