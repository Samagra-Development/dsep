import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';
import ErrorInterface from 'dsep-beckn-schema/schemas/Error.interface';
import TrackingInterface from 'dsep-beckn-schema/schemas/Tracking.interface';

export class OnTrackDTO {
  context: ContextInterface;
  message: {
    tracking: TrackingInterface;
  };
  error?: ErrorInterface;
}
