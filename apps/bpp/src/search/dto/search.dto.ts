import CategoryInterface from 'dsep-beckn-schema/schemas/Category.interface';
import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';
import DescriptorInterface from 'dsep-beckn-schema/schemas/Descriptor.interface';
import FulfillmentInterface from 'dsep-beckn-schema/schemas/Fulfillment.interface';
import IntentInterface from 'dsep-beckn-schema/schemas/Intent.interface';
import ItemInterface from 'dsep-beckn-schema/schemas/Item.interface';
import OfferInterface from 'dsep-beckn-schema/schemas/Offer.interface';
import PaymentInterface from 'dsep-beckn-schema/schemas/Payment.interface';
import ProviderInterface from 'dsep-beckn-schema/schemas/Provider.interface';

export class SearchDTO {
  context: ContextInterface;
  message: {
    intent: {
      descriptor: DescriptorInterface;
      provider: ProviderInterface;
      fulfillment: FulfillmentInterface;
      payment: PaymentInterface;
      category: CategoryInterface;
      offer: OfferInterface;
      item: ItemInterface;
      tags: {
        course_level: string;
        course_mode: string;
        competency: string;
        exams: string;
        subjects: string;
        isCertified: boolean;
        course_credits: boolean;
        course_duration: string;
      };
    };
  };
}
