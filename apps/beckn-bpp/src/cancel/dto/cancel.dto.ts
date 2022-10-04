import ContextInterface from 'src/schemas/Context.interface';
import DescriptorInterface from 'src/schemas/Descriptor.interface';

export class CancelDTO {
  context: ContextInterface;
  message: {
    order_id: string;
    cancellation_reason_id: string;
    descriptor: DescriptorInterface;
  };
}
