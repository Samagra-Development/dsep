import ContextInterface from 'src/schemas/Context.interface';

export class SupportDTO {
  context: ContextInterface;
  message: {
    ref_id: string;
  };
}
