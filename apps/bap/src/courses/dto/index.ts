export * from './confirmRequest.dto';
export * from './updateRequest.dto';
export * from './searchRequest.dto';
export * from './courseRatingRequest.dto';

export class CourseDefaultResponseDto {
  readonly status: string;
  readonly messageId: string;
  readonly transactionId: string;
  readonly message?: string;
}
