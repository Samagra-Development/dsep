export class CourseResponseDto {
  readonly id: string;
  readonly title: string;
  readonly long_desc: string;
  readonly provider_name: string;
  readonly provider_id: string;
  readonly price: string;
  readonly languages: string[];
  readonly competency: Record<string, any>;
  readonly imgUrl: string;
  readonly rating: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly noOfPurchases: number;
  readonly bppId: string;
  readonly bppUri: string;
}
