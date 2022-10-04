import CategoryInterface from './Category.interface';
import DescriptorInterface from './Descriptor.interface';
import FulfillmentInterface from './Fulfillment.interface';
import ItemInterface from './Item.interface';
import OfferInterface from './Offer.interface';
import PaymentInterface from './Payment.interface';
import ProviderInterface from './Provider.interface';
import TagsInterface from './Tags.interface';

export default interface IntentInterface {
  descriptor: DescriptorInterface;
  provider: ProviderInterface;
  fulfillment: FulfillmentInterface;
  payment: PaymentInterface;
  category: CategoryInterface;
  offer: OfferInterface;
  item: ItemInterface;
  tags: [TagsInterface];
}
