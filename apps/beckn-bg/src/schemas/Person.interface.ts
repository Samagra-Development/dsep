import ImageInterface from './Image.interface';
import NameInterface from './Name.interface';
import TagsInterface from './Tags.interface';

export default interface PersonInterface {
  name: NameInterface;
  image: ImageInterface;
  dob: Date;
  gender: string;
  cred: string;
  tags: ReadonlyArray<TagsInterface>;
}
