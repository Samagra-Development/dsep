import AddOnInterface from 'src/schemas/AddOn.interface';
import ContextInterface from 'src/schemas/Context.interface';
import ItemInterface from 'src/schemas/Item.interface';
import ItemQuantityInterface from 'src/schemas/ItemQuantity.interface';
import LocationInterface from 'src/schemas/Location.interface';
import OfferInterface from 'src/schemas/Offer.interface';
import ProviderInterface from 'src/schemas/Provider.interface';
import QuotationInterface from 'src/schemas/Quotation.interface';

export class OnSelectDTO {
  context: ContextInterface;
  message: {
    order: {
      provider: ProviderInterface;
      provider_location: LocationInterface;
      items: ReadonlyArray<{
        item: ItemInterface;
        quantity: ItemQuantityInterface;
      }>;
    };
    add_ons: ReadonlyArray<AddOnInterface>;
    offers: ReadonlyArray<OfferInterface>;
    quote: QuotationInterface;
  };
}
