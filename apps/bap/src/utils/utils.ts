interface CustomerPayload {
  name: string;
  phone: string;
  email: string;
}

interface PricePayload {
  currency: string;
  value: string;
}

export interface OrderConfirmationPayload {
  messageId: string;
  transactionId: string;
  bppId: string;
  bppUri: string;
  providerId: string;
  providerName: string;
  providerCourseId: string;
  providerOrderId: string;
  courseName: string;
  courseLink: string;
  price: PricePayload;
  status: string;
  customer: CustomerPayload;
}

export function generateResponse(payload: any): OrderConfirmationPayload {
  const order = payload?.message?.order;
  const customer = order?.fulfillments?.[0]?.customer;
  const courseTagLists: any[] = order?.items?.[0]?.tags?.[0]?.list || [];
  const courseLinkData = courseTagLists.find(
    (val) => val?.descriptor?.code === 'course-link',
  );

  return {
    messageId: payload?.context?.message_id,
    transactionId: payload?.context?.transaction_id,
    bppId: payload?.context?.bpp_id,
    bppUri: payload?.context?.bap_uri,
    providerId: order?.provider?.id,
    providerName: order?.provider?.descriptor?.name,
    providerCourseId: order?.items?.[0]?.id,
    providerOrderId: order?.id,
    courseName: order?.items?.[0]?.descriptor?.name,
    courseLink: courseLinkData?.value,
    price: order?.items?.[0]?.price,
    status: order?.fulfillments?.[0]?.state?.descriptor?.code,
    customer: {
      name: customer?.person?.name,
      phone: customer?.contact?.phone,
      email: customer?.contact?.email,
    },
  };
}
