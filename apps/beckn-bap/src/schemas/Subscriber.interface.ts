import DomainInterface from './Domain.interface';
import { SubscriberStatus, SubscriberType } from './types/subscriber.enum';

export default interface SubscriberInterface {
  subscriber_id: string;
  type: SubscriberType;
  cb_url: string;
  domain: DomainInterface;
  city: string;
  country: string;
  signing_public_key: string;
  encryption_public_key: string;
  created: Date;
  updated: Date;
  expires: Date;
  status: SubscriberStatus;
}
