import BillingInterface from 'src/schemas/Billing.interface';
import ContextInterface from 'src/schemas/Context.interface';
import ErrorInterface from 'src/schemas/Error.interface';
import FulfillmentInterface from 'src/schemas/Fulfillment.interface';
import PaymentInterface from 'src/schemas/Payment.interface';
import ProviderInterface from 'src/schemas/Provider.interface';
import QuotationInterface from 'src/schemas/Quotation.interface';

export class OnInitDTO {
  context: ContextInterface;
  message: {
    order: {
      provider: string;
      provider_location: string;
      items: ReadonlyArray<{ id: string; quantity: number }>;
      add_ons: ReadonlyArray<{ id: string }>;
      offers: ReadonlyArray<{ id: string }>;
      billing?: BillingInterface;
      fulfillment?: FulfillmentInterface;
      quote?: QuotationInterface;
      payment?: PaymentInterface;
    };
    error?: ErrorInterface;
  };
}
