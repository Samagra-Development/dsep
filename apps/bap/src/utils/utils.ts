export function generateResponse(payload: any): any {
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
