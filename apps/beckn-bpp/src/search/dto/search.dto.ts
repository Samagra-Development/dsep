import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';
import IntentInterface from 'dsep-beckn-schema/schemas/Intent.interface';

export class SearchDTO {
  // @IsNotEmpty()
  context: ContextInterface;
  // @IsNotEmpty()
  message: {
    intent: IntentInterface;
  };
}
