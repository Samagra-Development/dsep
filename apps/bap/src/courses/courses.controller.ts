import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Logger,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CourseResponseDto } from '../filter/dto/course-response.dto';
import { RedisStoreService } from '../redis-store/redis-store.service';
import { CoursesService } from './courses.service';
import {
  ConfirmRequestDto,
  CourseDefaultResponseDto,
  CourseRatingRequestDto,
  UpdateRequestDto,
} from './dto';

@Controller('courses')
@ApiTags('courses')
export class CoursesController {
  private readonly logger = new Logger(CoursesController.name);
  constructor(
    private readonly coursesService: CoursesService,
    private readonly redisStoreService: RedisStoreService,
  ) {}

  @Get('/search')
  @ApiOperation({
    summary: 'search request from consumer and forward it to the onest network',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Acknowledgement of confirm request',
    type: CourseDefaultResponseDto,
  })
  async search(
    @Res() res,
    @Query('searchText') searchText: string,
  ): Promise<CourseDefaultResponseDto> {
    try {
      this.logger.log(
        `Initiated triggering backen gateway for searching courses on onest network for:- ${searchText}`,
      );

      const response = await this.coursesService.search(searchText);

      this.logger.log(
        `Successfully triggered backen gateway to search courses on onest network for:- ${searchText}`,
      );

      return res.status(HttpStatus.OK).json(response);
    } catch (error) {
      this.logger.error(
        `Failed to trigger backen gateway to  search courses on onest network for:- ${searchText}`,
        error,
      );

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }

  @Get('/poll/:messageId')
  @ApiOperation({
    summary:
      'Api to poll search results for a specific search query(a particular messageId)',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: CourseResponseDto,
    isArray: true,
  })
  async pollSearchResults(
    @Param('messageId', ParseUUIDPipe) messageId: string,
    @Res() res,
  ): Promise<CourseResponseDto[]> {
    try {
      this.logger.log(
        `Initiated polling search result for message id #${messageId} on redis`,
      );
      const results = await this.redisStoreService.pollValue(messageId);

      this.logger.log(
        `Successfully polled search result for message id #${messageId} on redis`,
      );

      return res.status(HttpStatus.OK).json({
        message: 'New Search responses fetched',
        data: results,
      });
    } catch (error) {
      this.logger.error(
        `Failed to poll search result for message id #${messageId} on redis`,
        error,
      );

      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Post('/confirm')
  @ApiOperation({
    summary: 'confirm request from consumer and forward it to the bpp',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Acknowledgement of confirm request',
    type: CourseDefaultResponseDto,
  })
  async confirmOrder(
    @Res() res,
    @Body() confirmDto: ConfirmRequestDto,
  ): Promise<CourseDefaultResponseDto> {
    try {
      this.logger.log(
        `Initiated triggering bpp uri for confirmation of course with id #${confirmDto.courseId} and provider id #${confirmDto.providerId}`,
      );
      const response = await this.coursesService.confirmOrder(confirmDto);

      this.logger.log(
        `Successfully triggered bpp uri for confirmation course with id #${confirmDto.courseId} and provider id #${confirmDto.providerId}`,
      );

      return res.status(HttpStatus.OK).json(response);
    } catch (error) {
      this.logger.error(
        `Failed to trigger bpp uri for confirmation of course with id #${confirmDto.courseId} and provider id #${confirmDto.providerId}`,
        error,
      );

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }

  @Post('/update')
  @ApiOperation({
    summary: 'update request from consumer and forward it to the bpp',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Acknowledgement of confirm request',
    type: CourseDefaultResponseDto,
  })
  async updateOrder(
    @Res() res,
    @Body() updateRequestDto: UpdateRequestDto,
  ): Promise<CourseDefaultResponseDto> {
    try {
      this.logger.log(
        `Initiated triggering bpp uri for status updating of purchased course with message id #${updateRequestDto.messageId} and transactionId id #${updateRequestDto.transactionId}`,
      );
      const response = await this.coursesService.updateOrder(updateRequestDto);
      this.logger.log(
        `Successfully triggered bpp uri for status updating of purchased course with message id #${updateRequestDto.messageId} and transactionId id #${updateRequestDto.transactionId}`,
      );

      return res.status(HttpStatus.OK).json(response);
    } catch (error) {
      this.logger.error(
        `Failed to trigger bpp uri for status updating of purchased course with message id #${updateRequestDto.messageId} and transactionId id #${updateRequestDto.transactionId}`,
        error,
      );
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Post('/rating')
  @ApiOperation({
    summary: 'course rating request from consumer and forward it to the bpp',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Acknowledgement of confirm request',
    type: CourseDefaultResponseDto,
  })
  async courseRating(
    @Res() res,
    @Body() courseRatingRequestDto: CourseRatingRequestDto,
  ): Promise<CourseDefaultResponseDto> {
    try {
      this.logger.log(
        `Initiated triggering bpp uri for rating of course with id #${courseRatingRequestDto.courseId}`,
      );

      const response = await this.coursesService.courseRating(
        courseRatingRequestDto,
      );

      this.logger.log(
        `Successfully to trigger bpp uri for rating of course with id #${courseRatingRequestDto.courseId}`,
      );

      return res.status(HttpStatus.OK).json(response);
    } catch (error) {
      this.logger.error(
        `Failed to trigger bpp uri for rating of course with id #${courseRatingRequestDto.courseId}`,
        error,
      );

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }
}
