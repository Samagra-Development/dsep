import BillingInterface from 'dsep-beckn-schema/schemas/Billing.interface';
import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';
import ErrorInterface from 'dsep-beckn-schema/schemas/Error.interface';
import FulfillmentInterface from 'dsep-beckn-schema/schemas/Fulfillment.interface';
import PaymentInterface from 'dsep-beckn-schema/schemas/Payment.interface';
import ProviderInterface from 'dsep-beckn-schema/schemas/Provider.interface';
import QuotationInterface from 'dsep-beckn-schema/schemas/Quotation.interface';

export class OnInitDTO {
  context: ContextInterface;
  message: {
    order: {
      provider: ProviderInterface;
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
