import { TrackingStatus } from './types/tracking.enum';

export default interface TrackingInterface {
  url: string;
  status: TrackingStatus;
}
