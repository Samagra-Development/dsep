import { components } from 'types/schema';

export class SearchDTO {
  context: components['schemas']['Context'];
  message: { intent: components['schemas']['Intent'] };
}
