import FeedbackFormElementInterface from './FeedbackFormElement.interface';

export default interface FeedbackFormInterface {
  items: ReadonlyArray<FeedbackFormElementInterface>;
}
