export class CourseResponseDto {
  readonly courseId: string;
  readonly providerId: string;
  readonly title: string;
  readonly description: string;
  readonly imgLink: string;
  readonly credits: number;
  readonly language: string[];
  readonly competency: Record<string, any>;
  readonly author: string;
  readonly avgRating: number | null;
  readonly numOfUsers?: number;
  readonly providerName?: string;
  readonly bppId: string;
  readonly bppUri: string;
}
