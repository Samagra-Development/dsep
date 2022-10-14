import AddOnInterface from 'dsep-beckn-schema/schemas/AddOn.interface';
import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';
import ItemInterface from 'dsep-beckn-schema/schemas/Item.interface';
import ItemQuantityInterface from 'dsep-beckn-schema/schemas/ItemQuantity.interface';
import LocationInterface from 'dsep-beckn-schema/schemas/Location.interface';
import OfferInterface from 'dsep-beckn-schema/schemas/Offer.interface';
import ProviderInterface from 'dsep-beckn-schema/schemas/Provider.interface';
import QuotationInterface from 'dsep-beckn-schema/schemas/Quotation.interface';

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
