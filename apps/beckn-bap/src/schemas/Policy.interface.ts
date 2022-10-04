import DescriptorInterface from './Descriptor.interface';
import TimeInterface from './Time.interface';

export default interface PolicyInterface {
  id: string;
  descriptor: DescriptorInterface;
  parent_policy_id: string;
  time: TimeInterface;
}
