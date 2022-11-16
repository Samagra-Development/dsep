import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { filter, lastValueFrom, map } from 'rxjs';
import { catalogueGenerator } from 'utils/generators';
import { DSEP_SEARCH_FILTER } from 'utils/types';

@Injectable()
export class CoursesService {
  constructor(private readonly httpService: HttpService) { }

  async getCourses(filters: DSEP_SEARCH_FILTER) {
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': process.env.SECRET,
      },
    };
    /**(where: {competency: {_gt: ${filters.competency}}, course_level: {_eq: ${filters.course_level}}, course_type: {_eq: ${filters.course_type}}, exams: {_ilike: %${filters.exams}%}, isCertified: {_eq: ${filters.isCertified}
}, max_price: { _eq: ${filters.max_price} }, min_price: { _eq: ${filters.min_price} }, name: { _ilike: %${filters.query}% }, provider: { _ilike: %${filters.provider}% }, subjects: { _ilike: %${filters.exams} }, rating: { _gt: ${filters.rating} }}) */

    const gql = `query GetCourses {
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

    console.log('response data: ', responseData);

    const resp = catalogueGenerator(
      filters.query || ' some string',
      responseData.data.course_products_courses,
    );
    console.log('response data in mock api: ', resp);

    return resp;
  }
}
