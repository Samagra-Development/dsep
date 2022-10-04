import CategoryInterface from './Category.interface';
import DescriptorInterface from './Descriptor.interface';
import ItemInterface from './Item.interface';
import LocationInterface from './Location.interface';
import TimeInterface from './Time.interface';

export default interface OfferInterface {
  id: string;
  descriptor: DescriptorInterface;
  location_ids: ReadonlyArray<LocationInterface>;
  category_ids: ReadonlyArray<CategoryInterface>;
  item_ids: ReadonlyArray<ItemInterface>;
  time: TimeInterface;
}
