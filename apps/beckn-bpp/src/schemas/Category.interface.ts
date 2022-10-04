import DescriptorInterface from './Descriptor.interface';
import TagsInterface from './Tags.interface';
import TimeInterface from './Time.interface';

export default interface CategoryInterface {
  id: string;
  parent_category_id: string;
  descriptor: DescriptorInterface;
  time: TimeInterface;
  tags: [TagsInterface];
}
