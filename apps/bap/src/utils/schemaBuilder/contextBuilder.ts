import * as moment from 'moment';
import { v4 as uuid } from 'uuid';

export const buildContext = (input: any = {}) => {
  const context: any = {
    transaction_id: uuid(),
    domain: `onest:learning-experiences`,
    action: input.action ?? '',
    version: `${process.env.CORE_VERSION}`,
    bap_id: process.env.BAP_ID || (input?.bapId ?? ''),
    bap_uri: process.env.BAP_URI || (input?.bapUri ?? ''),
    message_id: uuid(),
    timestamp: moment().toISOString(),
    ttl: 'PT10M',
  };

  if (input?.bppId) {
    context.bpp_id = input?.bppId;
  }
  if (input?.bppUri) {
    context.bpp_uri = input?.bppUri;
  }
  return context;
};

export const compassMarketPlaceBillingAddress = {
  name: 'Compass Marketplace BAP',
  organization: {
    address: 'Compass Headquarter, Main Road, bengaluru',
    city: 'Bengaluru',
    state: 'Karnataka',
    contact: {
      email: 'example@gmail.in',
      phone: '1234567890',
    },
  },
};
