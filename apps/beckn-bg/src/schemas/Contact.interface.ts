import TagsInterface from './Tags.interface';

export default interface ContactInterface {
  phone: string;
  email: string;
  tags: ReadonlyArray<TagsInterface>;
}
