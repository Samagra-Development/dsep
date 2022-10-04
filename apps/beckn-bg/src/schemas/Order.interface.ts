import BillingInterface from './Billing.interface';
import DocumentInterface from './Document.interface';
import FulfillmentInterface from './Fulfillment.interface';
import PaymentInterface from './Payment.interface';
import ProviderInterface from './Provider.interface';
import QuotationInterface from './Quotation.interface';

export default interface OrderInterface {
  id: string;
  state: OrderInterface;
  provider: ProviderInterface;
  documents: ReadonlyArray<DocumentInterface>;
  billing: BillingInterface;
  fulfillment: FulfillmentInterface;
  quote: QuotationInterface;
  payment: PaymentInterface;
  created_at: Date;
  updated_at: Date;
}
