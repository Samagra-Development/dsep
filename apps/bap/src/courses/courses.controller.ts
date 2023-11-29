import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import {
  ConfirmRequestDto,
  CourseRatingRequestDto,
  SearchRequestDto,
  UpdateRequestDto,
} from './dto';

@Controller('courses')
@ApiTags('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post('/search')
  @ApiOperation({
    summary: 'search request from consumer and forward it to the onest network',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Acknowledgement of confirm request',
  })
  async search(
    @Res() res,
    @Body() searchRequestDto: SearchRequestDto,
  ): Promise<any> {
    const response = await this.coursesService.search(searchRequestDto);
    console.log('response:', JSON.stringify(response, null, 2));
    return res.json({ response });
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
    console.log('response:', JSON.stringify(response, null, 2));
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
    console.log('response:', JSON.stringify(response, null, 2));
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
    console.log('response:', JSON.stringify(response, null, 2));
    return res.json({ response });
  }
}
