import FeedbackFormInterface from './FeedbackForm.interface';

export default interface RatingInterface {
  rating_category: string;
  id: string;
  value: number;
  feedback_form: FeedbackFormInterface;
  feedback_id: string;
}
