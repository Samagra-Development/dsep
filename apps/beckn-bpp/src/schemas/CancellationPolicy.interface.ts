import FeeInterface from './Fee.interface';
import {
  CancellationFeeAppliedOn,
  CancellationType,
} from './types/cancellation.enum';

export default interface CancellationPolicyInterface {
  cancellable: boolean;
  cancel_before: Date;
  cancellation_fee: FeeInterface;
  fee_applied_on: CancellationFeeAppliedOn;
  type: CancellationType;
}
