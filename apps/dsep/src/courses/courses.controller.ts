import { Body, Controller, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Post()
  async getCourses(@Body() body: any) {
    return this.coursesService.getCourses(body);
  }
}
