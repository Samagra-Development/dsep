import { buildContext } from './contextBuilder';

export const buildUpdateRequest = (input: any = {}) => {
  const context = buildContext({
    ...input,
    action: 'update',
  });

  const fulfillments = [
    { state: { descriptor: { code: input?.status ?? 'completed' } } },
  ];
  const orderId = input?.providerOrderId;
  const update_target = input?.customer;

  const order: any = { id: orderId, fulfillments, update_target };
  const message: any = { order };

  return { payload: { context, message } };
};
