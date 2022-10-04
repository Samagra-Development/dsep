import ContextInterface from 'src/schemas/Context.interface';
import ErrorInterface from 'src/schemas/Error.interface';
import TrackingInterface from 'src/schemas/Tracking.interface';

export class OnTrackDTO {
  context: ContextInterface;
  message: {
    tracking: TrackingInterface;
  };
  error?: ErrorInterface;
}
