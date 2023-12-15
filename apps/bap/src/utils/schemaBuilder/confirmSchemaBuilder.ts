import {
  buildContext,
  compassMarketPlaceBillingAddress,
} from './contextBuilder';

export const buildConfirmRequest = (input: any = {}) => {
  const context = buildContext({
    ...input,
    action: 'confirm',
  });
  console.log('context:', context);

  const provider = { id: input?.providerId };

  const items = [{ id: input?.courseId }];

  const order: any = {
    provider,
    items,
    billing: compassMarketPlaceBillingAddress,
  };

  if (input?.applicantProfile) {
    order.fulfillments = [
      {
        customer: {
          person: { name: input?.applicantProfile?.name },
          contact: {
            email: input?.applicantProfile?.email,
            phone: input?.applicantProfile?.phone,
          },
        },
      },
    ];
  }

  if (input?.amount) {
    order.payments = [
      {
        params: {
          amount: input?.amount,
          currency: 'INR',
        },
        status: 'PAID',
      },
    ];
  }
  const message: any = { order };

  return { payload: { context, message } };
};
