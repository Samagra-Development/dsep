import PriceInterface from './Price.interface';
import TimeInterface from './Time.interface';
import {
  PaymentStatus,
  PaymentTypes,
  PaymentURIMimeTypes,
} from './types/payment.enum';

export default interface PaymentInterface {
  uri: string;
  uri_mime_type: PaymentURIMimeTypes;
  params: {
    amount: number;
    currency: PriceInterface;
    transaction_id: string;
    bank_account_number: string;
    bank_code: string;
    bank_id_type: string;
    virtual_payment_address: string;
  };
  additionalProperties: string;
  type: PaymentTypes;
  status: PaymentStatus;
  time: TimeInterface;
}
