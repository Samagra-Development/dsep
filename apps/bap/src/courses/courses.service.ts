import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SearchDTO } from 'apps/bg/src/search/dto/search.dto';
import axios from 'axios';
import { FilterService } from '../filter/filter.service';
import {
  buildConfirmRequest,
  buildRatingRequest,
  buildSearchRequest,
  buildUpdateRequest,
} from '../utils/schemaBuilder';
import {
  ConfirmRequestDto,
  CourseRatingRequestDto,
  SearchRequestDto,
  UpdateRequestDto,
} from './dto';

@Injectable()
export class CoursesService {
  constructor(
    private readonly filterService: FilterService,
    private configService: ConfigService,
  ) {}

  public async search(searchRequestDto: SearchRequestDto) {
    const searchRequestSchema = buildSearchRequest(searchRequestDto);

    const BG_URI = this.configService.get('BG_URI');

    const BG_SearchURL = `${BG_URI}search`;

    const payload: SearchDTO = searchRequestSchema.payload;

    const { data } = await axios.post(BG_SearchURL, payload);

    const courses = await this.filterService.getCourseManagerSearchResults(
      searchRequestDto.searchText,
    );

    return {
      status: data?.message?.ack?.status,
      messageId: searchRequestSchema?.payload?.context?.message_id,
      data: courses?.data,
    };
  }

  public async confirmOrder(confirmRequestDto: ConfirmRequestDto) {
    if (confirmRequestDto.bppId && confirmRequestDto.bppUri) {
      const confirmRequestSchema = buildConfirmRequest(confirmRequestDto);
      const bppConfirmUrl = `${confirmRequestDto.bppUri}` + 'confirm';

      const { data } = await axios.post(
        bppConfirmUrl,
        confirmRequestSchema.payload,
      );
      // TODO: send the request to bpp, update to course manager portal and return needed data
      return data;
    }
    //TODO: If there is no BPP then send request to course manager portal and return needed data
    return confirmRequestDto;
  }

  public async updateOrder(updateRequestDto: UpdateRequestDto) {
    if (updateRequestDto.bppId && updateRequestDto.bppUri) {
      const updateRequestSchema = buildUpdateRequest(updateRequestDto);
      const bppUpdateUrl = `${updateRequestDto.bppUri}` + 'update';

      const { data } = await axios.post(
        bppUpdateUrl,
        updateRequestSchema.payload,
      );

      // TODO: send the request to bpp, update to course manager portal and return needed data
      return data;
    }
    //TODO: If there is no BPP then send request to course manager portal and return needed data
    return updateRequestDto;
  }

  public async courseRating(courseRatingRequestDto: CourseRatingRequestDto) {
    if (courseRatingRequestDto.bppId && courseRatingRequestDto.bppUri) {
      const courseRatingRequestSchema = buildRatingRequest(
        courseRatingRequestDto,
      );
      // TODO: send the request to bpp, update to course manager portal and return needed data
      const bppUpdateUrl = `${courseRatingRequestDto.bppUri}` + 'rating';

      const { data } = await axios.post(
        bppUpdateUrl,
        courseRatingRequestSchema.payload,
      );

      return data;
    }
    //TODO: If there is no BPP then send request to course manager portal and return needed data
    return courseRatingRequestDto;
  }
}
