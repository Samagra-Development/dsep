export function generateResponse(payload: any): any {
  const order = payload?.message?.order;
  const customer = order?.fulfillments?.[0]?.customer;

  return {
    providerId: order?.provider?.id,
    providerName: order?.provider?.descriptor?.name,
    providerCourseId: order?.items?.[0]?.id,
    providerOrderId: order?.id,
    courseName: order?.items?.[0]?.descriptor?.name,
    price: order?.items?.[0]?.price,
    status: order?.fulfillments?.[0]?.state?.descriptor?.code,
    customer: {
      name: customer?.person?.name,
      phone: customer?.contact?.phone,
      email: customer?.contact?.email,
    },
  };
}
