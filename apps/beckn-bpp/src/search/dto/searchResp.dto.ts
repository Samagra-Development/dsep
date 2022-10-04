import AckInterface from 'src/schemas/Ack.interface';

export class SearchRespDTO {
  message: {
    ack: AckInterface;
  };
}
