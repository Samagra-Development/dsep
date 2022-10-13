import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';

export class SupportDTO {
  context: ContextInterface;
  message: {
    ref_id: string;
  };
}
