import CategoryInterface from './Category.interface';
import DescriptorInterface from './Descriptor.interface';
import FulfillmentInterface from './Fulfillment.interface';
import OfferInterface from './Offer.interface';
import PaymentInterface from './Payment.interface';
import ProviderInterface from './Provider.interface';

export default interface CatalogInterface {
  descriptor: DescriptorInterface;
  categories: ReadonlyArray<CategoryInterface>;
  fulfillment: ReadonlyArray<FulfillmentInterface>;
  payments: ReadonlyArray<PaymentInterface>;
  offers: ReadonlyArray<OfferInterface>;
  providers: ReadonlyArray<ProviderInterface>;
  exp: Date; //Expiry time after which we refresh the catalog
}
