export enum PaymentURIMimeTypes {
  text_html = 'text/html',
  text_plain = 'text/plain',
  application_octet = 'application/octet-stream;provider=$application_id',
}

export enum PaymentTypes {
  ON_ORDER = 'ON-ORDER',
  PRE_FULFILLMENT = 'PRE-FULFILLMENT',
  ON_FULFILLMENT = 'ON-FULFILLMENT',
  POST_FULFILLMENT = 'POST-FULFILLMENT',
}

export enum PaymentStatus {
  PAID = 'PAID',
  NOT_PAID = 'NOT-PAID',
}
