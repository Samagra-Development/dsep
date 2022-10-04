import ContextInterface from 'src/schemas/Context.interface';
import IntentInterface from 'src/schemas/Intent.interface';

export class SearchDTO {
  context: ContextInterface;
  message: {
    intent: IntentInterface;
  };
}
