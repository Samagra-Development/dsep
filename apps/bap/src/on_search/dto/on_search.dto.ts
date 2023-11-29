import { components } from 'types/schema';

export class OnSearchDTO {
  context: components['schemas']['Context'];
  message: {
    catalog: components['schemas']['Catalog'];
  };
  error?: components['schemas']['Error'];
}
