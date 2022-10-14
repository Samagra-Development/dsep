import { Module } from '@nestjs/common';
import { GetCoursesService } from './get-courses.service';

@Module({
  providers: [GetCoursesService]
})
export class GetCoursesModule {}
