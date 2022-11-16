import { Body, Controller, Post } from '@nestjs/common';
import { GetCoursesService } from './get-courses.service';

@Controller('get-courses')
export class GetCoursesController {
  constructor(private readonly getCoursesService: GetCoursesService) { }
  @Post()
  async getCourses(@Body() body: any) {
    return this.getCoursesService.getCourses(body);
  }
}
