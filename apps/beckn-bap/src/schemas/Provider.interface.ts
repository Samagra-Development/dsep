import CategoryInterface from './Category.interface';
import DescriptorInterface from './Descriptor.interface';
import FulfillmentInterface from './Fulfillment.interface';
import ItemInterface from './Item.interface';
import LocationInterface from './Location.interface';
import OfferInterface from './Offer.interface';
import PaymentInterface from './Payment.interface';
import RateableInterface from './Rateable.interface';
import TagsInterface from './Tags.interface';

export default interface ProviderInterface {
  id: string;
  descriptor: DescriptorInterface;
  category_id: string;
  rating: string;
  time: Date;
  categories: ReadonlyArray<CategoryInterface>;
  fulfillments: ReadonlyArray<FulfillmentInterface>;
  payments: ReadonlyArray<PaymentInterface>;
  offers: ReadonlyArray<OfferInterface>;
  items: ReadonlyArray<ItemInterface>;
  exp: string;
  rateable: RateableInterface;
  tags: ReadonlyArray<TagsInterface>;
  locations: ReadonlyArray<LocationInterface>;
}
