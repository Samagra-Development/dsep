import CatalogInterface from 'src/schemas/Catalog.interface';
import ContextInterface from 'src/schemas/Context.interface';
import ErrorInterface from 'src/schemas/Error.interface';

export class OnSearchDTO {
  context: ContextInterface;
  message?: {
    catalog: CatalogInterface;
  };
  error?: ErrorInterface;
}
