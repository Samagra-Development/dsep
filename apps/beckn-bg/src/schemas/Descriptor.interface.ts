import ImageInterface from './Image.interface';

export default interface DescriptorInterface {
  name: string;
  code: string;
  symbol: string;
  short_desc: string;
  long_desc: string;
  images?: [ImageInterface];
  audio?: string;
  _3d_render?: string;
}
