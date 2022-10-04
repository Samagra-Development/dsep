import { FulfillmentAuthorizationType } from './types/FulfillmentAuthorisationType.enum';

export default interface FulfillmentAuthorizationInterface {
  type: FulfillmentAuthorizationType;
  token: string;
  valid_from: Date;
  valid_to: Date;
}
