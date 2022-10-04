import { FeedbackFormElementAnswerType } from './types/feedback.enum';

export default interface FeedbackFormElementInterface {
  id: string;
  parent_id: string;
  question: string;
  answer: string;
  answer_type: FeedbackFormElementAnswerType;
}
