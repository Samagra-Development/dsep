import TagsInterface from './Tags.interface';
import { SupportTypes } from './types/support.enum';

export default interface SupportInterface {
  type: SupportTypes;
  ref_id: string;
  channels: ReadonlyArray<TagsInterface>;
}
