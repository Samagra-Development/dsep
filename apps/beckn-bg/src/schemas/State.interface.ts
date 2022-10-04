import DescriptorInterface from './Descriptor.interface';

export default interface StateInterface {
  descriptor: DescriptorInterface;
  updated_at: Date;
  updated_by: string;
}
