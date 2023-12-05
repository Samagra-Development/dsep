import {
  Body,
  Controller,
  Get,
  HttpStatus,
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
  CourseRatingRequestDto,
  UpdateRequestDto,
} from './dto';

@Controller('courses')
@ApiTags('courses')
export class CoursesController {
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
  })
  async search(
    @Res() res,
    @Query('searchText') searchText: string,
  ): Promise<any> {
    const response = await this.coursesService.search(searchText);
    console.log('response-search---------:', JSON.stringify(response, null, 2));
    return res.json({ response });
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
  ) {
    const results = await this.redisStoreService.pollValue(messageId);
    console.log('\n\n---results:', results);
    res.status(HttpStatus.OK).json({
      message: 'New Search responses fetched',
      data: results,
    });
  }

  @Post('/confirm')
  @ApiOperation({
    summary: 'confirm request from consumer and forward it to the bpp',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Acknowledgement of confirm request',
  })
  async confirmOrder(
    @Res() res,
    @Body() confirmDto: ConfirmRequestDto,
  ): Promise<any> {
    const response = await this.coursesService.confirmOrder(confirmDto);
    console.log('response:-confirm-------', JSON.stringify(response, null, 2));
    return res.json({ response });
  }

  @Post('/update')
  @ApiOperation({
    summary: 'update request from consumer and forward it to the bpp',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Acknowledgement of confirm request',
  })
  async updateOrder(
    @Res() res,
    @Body() updateRequestDto: UpdateRequestDto,
  ): Promise<any> {
    const response = await this.coursesService.updateOrder(updateRequestDto);
    console.log('response-update--------:', JSON.stringify(response, null, 2));
    return res.json({ response });
  }

  @Post('/rating')
  @ApiOperation({
    summary: 'course rating request from consumer and forward it to the bpp',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Acknowledgement of confirm request',
  })
  async courseRating(
    @Res() res,
    @Body() courseRatingRequestDto: CourseRatingRequestDto,
  ): Promise<any> {
    const response = await this.coursesService.courseRating(
      courseRatingRequestDto,
    );
    console.log('response-rating-------:', JSON.stringify(response, null, 2));
    return res.json({ response });
  }
}
