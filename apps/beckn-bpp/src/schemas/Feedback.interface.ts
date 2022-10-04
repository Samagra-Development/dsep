import FeedbackFormInterface from './FeedbackForm.interface';
import FeebbackURLInterface from './FeedbackURL.interface';

export default interface FeedbackInterface {
  feedback_form: FeedbackFormInterface;
  feedback_url: FeebbackURLInterface;
}
