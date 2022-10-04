import { RefundAmountType, RefundType } from './types/itemrefundpolicy.enum';

export default interface ItemRefunPolicyInterface {
  refundable: boolean;
  refund_applicable_till: Date;
  refund_type: RefundType;
  refund_amount_type: RefundAmountType;
  refund_amount_value: number;
}
