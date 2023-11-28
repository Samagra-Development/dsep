export class CourseResponseDto {
    readonly id: string;
    readonly title: string;
    readonly long_desc: string;
    readonly provider_name: string;
    readonly provider_id: string;
    readonly price: string;
    readonly languages: string[];
    readonly imgUrl: string;
    readonly rating: string;
    readonly duration: string;
    readonly noOfPurchases: number;
}