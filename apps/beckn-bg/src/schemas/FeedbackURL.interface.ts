import { tlMethodTypes } from './types/feedback.enum';

export default interface FeebbackURLInterface {
  url: string;
  tl_method: tlMethodTypes;
  params: {
    feedback_id: string;
    additionalProperties?: string;
  };
}
