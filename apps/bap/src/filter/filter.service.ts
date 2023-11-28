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
        const url = this.courseManagerService + "/filterCourses";
        const reqBody = {
            data: courses
        }
        const filteredCourses = await axios.post(url, reqBody);
        return filteredCourses;
    }


}
