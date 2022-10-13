import AckInterface from 'dsep-beckn-schema/schemas/Ack.interface';

export class SearchRespDTO {
  message: {
    ack: AckInterface;
  };
}
