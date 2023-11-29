import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import {
  ConfirmRequestDto,
  CourseRatingRequestDto,
  SearchRequestDto,
  UpdateRequestDto,
} from './dto';
import {
  buildConfirmRequest,
  buildRatingRequest,
  buildSearchRequest,
  buildUpdateRequest,
} from '../utils/schemaBuilder';

@Injectable()
export class CoursesService {
  constructor(private readonly httpService: HttpService) {}

  public async search(payload: SearchRequestDto) {
    const SearchRequestSchema = buildSearchRequest(payload);
    // TODO: send the request to backen gateway and get courses, get course from course manager portal and return needed data
    return SearchRequestSchema;
  }

  public async confirmOrder(payload: ConfirmRequestDto) {
    if (payload.bppId && payload.bppUri) {
      const confirmRequestSchema = buildConfirmRequest(payload);
      // TODO: send the request to bpp, update to course manager portal and return needed data
      return confirmRequestSchema;
    }
    //TODO: If there is no BPP then send request to course manager portal and return needed data
    return payload;
  }

  public async updateOrder(payload: UpdateRequestDto) {
    if (payload.bppId && payload.bppUri) {
      const updateRequestSchema = buildUpdateRequest(payload);
      // TODO: send the request to bpp, update to course manager portal and return needed data
      return updateRequestSchema;
    }
    //TODO: If there is no BPP then send request to course manager portal and return needed data
    return payload;
  }

  public async courseRating(payload: CourseRatingRequestDto) {
    if (payload.bppId && payload.bppUri) {
      const courseRatingRequestSchema = buildRatingRequest(payload);
      // TODO: send the request to bpp, update to course manager portal and return needed data
      return courseRatingRequestSchema;
    }
    //TODO: If there is no BPP then send request to course manager portal and return needed data
    return payload;
  }
}
