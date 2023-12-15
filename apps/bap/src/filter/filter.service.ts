import { Injectable } from '@nestjs/common';
import { CourseResponseDto } from './dto/course-response.dto';
import axios from 'axios';

@Injectable()
export class FilterService {
  private readonly courseManagerService: string;
  constructor() {
    this.courseManagerService = process.env.COURSE_MANAGER_SERVICE_URL;
  }

  async verifiedFilter(courses: CourseResponseDto[]) {
    const url = this.courseManagerService + '/api/course/verifyFilter';
    const { data } = await axios.post(url, courses);
    return { data: data?.data };
  }

  async getCourseManagerSearchResults(queryInput: string) {
    const url =
      this.courseManagerService +
      '/api/course/search?searchInput=' +
      queryInput;

    const { data } = await axios.get(url);

    return data;
  }
}
