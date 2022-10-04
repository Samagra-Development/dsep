import DescriptorInterface from './Descriptor.interface';
import PriceInterface from './Price.interface';

export default interface AddOnInterface {
  id?: string;
  item_id: string;
  optional?: boolean; //DEFAULT: false
  descriptor?: DescriptorInterface;
  price?: PriceInterface;
}
