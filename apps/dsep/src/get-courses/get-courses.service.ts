import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class GetCoursesService {
  constructor(private readonly httpService: HttpService) { }

  async getCourses(filters: any) {
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const gql = `query MyQuery {
      course_products_courses {
        competency
        course_level
        course_type
        exams
        id
        isCertified
        max_price
        min_price
        name
        provider
        rating
        seller_email
        seller_name
        subjects
      }
    }`;

    const responseData = await lastValueFrom(
      this.httpService
        .post(process.env.HASURA_URI, { query: gql }, requestOptions)
        .pipe(map((item) => item.data)),
    );

    return responseData.data;
  }
}
