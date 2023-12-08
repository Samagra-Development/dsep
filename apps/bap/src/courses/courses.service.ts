import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SearchDTO } from 'apps/bg/src/search/dto/search.dto';
import axios from 'axios';
import {
  buildConfirmRequest,
  buildRatingRequest,
  buildSearchRequest,
  buildUpdateRequest,
} from '../utils/schemaBuilder';
import {
  ConfirmRequestDto,
  CourseDefaultResponseDto,
  CourseRatingRequestDto,
  UpdateRequestDto,
} from './dto';

@Injectable()
export class CoursesService {
  constructor(private configService: ConfigService) {}

  public async search(searchText: string) {
    const searchRequestSchema = buildSearchRequest({ searchText });

    const BG_URI = this.configService.get('BG_URI');

    let url: string;

    // Check if BG_URI ends with a forward slash or not
    if (BG_URI.endsWith('/')) {
      url = `${BG_URI}search`;
    } else {
      url = `${BG_URI}/search`;
    }

    const payload: SearchDTO = searchRequestSchema.payload;

    const { data } = await axios.post(url, payload);

    return this.generateDefaultResponse(data, searchRequestSchema);
  }

  public async confirmOrder(confirmRequestDto: ConfirmRequestDto) {
    const confirmRequestSchema = buildConfirmRequest(confirmRequestDto);

    const bppUri = confirmRequestDto.bppUri;
    let url: string;

    // Check if bppUri ends with a forward slash
    if (bppUri.endsWith('/')) {
      url = `${bppUri}confirm`;
    } else {
      url = `${bppUri}/confirm`;
    }

    const { data } = await axios.post(url, confirmRequestSchema.payload);

    return this.generateDefaultResponse(data, confirmRequestSchema);
  }

  public async updateOrder(updateRequestDto: UpdateRequestDto) {
    const updateRequestSchema = buildUpdateRequest(updateRequestDto);
    console.log('updateRequestSchema:', updateRequestSchema);

    const bppUri = updateRequestDto.bppUri;

    let url: string;

    // Check if bppUri ends with a forward slash or not
    if (bppUri.endsWith('/')) {
      url = `${bppUri}update`;
    } else {
      url = `${bppUri}/update`;
    }

    const { data } = await axios.post(url, updateRequestSchema.payload);

    return this.generateDefaultResponse(data, updateRequestSchema);
  }

  public async courseRating(courseRatingRequestDto: CourseRatingRequestDto) {
    const courseRatingRequestSchema = buildRatingRequest(
      courseRatingRequestDto,
    );

    const bppUri = courseRatingRequestDto.bppUri;
    let url: string;

    // Check if bppUri ends with a forward slash or not
    if (bppUri.endsWith('/')) {
      url = `${bppUri}rating`;
    } else {
      url = `${bppUri}/rating`;
    }

    const { data } = await axios.post(url, courseRatingRequestSchema.payload);

    return this.generateDefaultResponse(data, courseRatingRequestSchema);
  }

  private generateDefaultResponse(
    response: any,
    context: any,
  ): CourseDefaultResponseDto {
    return {
      status: response?.message?.ack?.status,
      messageId: context?.payload?.context?.message_id,
      transactionId: context?.payload?.context?.transaction_id,
    };
  }
}
