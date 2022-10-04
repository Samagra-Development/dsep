import DescriptorInterface from './Descriptor.interface';
import PriceInterface from './Price.interface';
import RateableInterface from './Rateable.interface';
import TagsInterface from './Tags.interface';
import TimeInterface from './Time.interface';

export default interface ItemInterface {
  id: string;
  parent_item_id: string;
  descriptor: DescriptorInterface;
  price: PriceInterface;
  category_id: string;
  fulfillment_id: string;
  rating: number;
  time: TimeInterface;
  location_id: string;
  rateable: RateableInterface;
  matched: boolean;
  related: boolean;
  recommended: boolean;
  tags: [TagsInterface];
}
