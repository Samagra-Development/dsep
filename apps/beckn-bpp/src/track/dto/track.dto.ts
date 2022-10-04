import ContextInterface from 'src/schemas/Context.interface';

export class TrackDTO {
  context: ContextInterface;
  message: {
    order_id: string;
    callback_url: string;
  };
}
