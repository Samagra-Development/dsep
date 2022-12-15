import { components } from 'types/schema';

export class SelectDTO {
  context: components['schemas']['Context'];
  message: { order: components['schemas']['Order'] };
}
