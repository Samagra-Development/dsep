import CategoryInterface from 'dsep-beckn-schema/schemas/Category.interface';
import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';
import DescriptorInterface from 'dsep-beckn-schema/schemas/Descriptor.interface';
import FulfillmentInterface from 'dsep-beckn-schema/schemas/Fulfillment.interface';
import ItemInterface from 'dsep-beckn-schema/schemas/Item.interface';
import OfferInterface from 'dsep-beckn-schema/schemas/Offer.interface';
import PaymentInterface from 'dsep-beckn-schema/schemas/Payment.interface';
import ProviderInterface from 'dsep-beckn-schema/schemas/Provider.interface';
import { components } from 'types/schema';

export class SearchDTO {
  context: components['schemas']['Context'];
  message: components['schemas']['Intent'];
}
