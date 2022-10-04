import ContextInterface from 'src/schemas/Context.interface';
import IntentInterface from 'src/schemas/Intent.interface';

export class SearchDTO {
  // @IsNotEmpty()
  context: ContextInterface;
  // @IsNotEmpty()
  message: {
    intent: IntentInterface;
  };
}
