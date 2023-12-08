import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
// import { requestForwarder } from 'utils/utils';
import { CourseResponseDto } from '../filter/dto/course-response.dto';
import { RedisStoreService } from '../redis-store/redis-store.service';
import { OnSearchDTO } from './dto/on_search.dto';
// import { SearchDTO } from 'apps/bg/src/search/dto/search.dto';

@Injectable()
export class OnSearchService {
  constructor(
    private readonly httpService: HttpService,
    private readonly redisService: RedisStoreService,
  ) {}

  private extractCoursesInfo(onSearchDTO: OnSearchDTO): CourseResponseDto[] {
    const providerId = onSearchDTO.message.catalog.providers[0].id;

    const providerName =
      onSearchDTO.message.catalog.providers[0].descriptor.name;

    const courses: any = onSearchDTO.message.catalog.providers[0].items;

    return courses.map((course) => {
      let numberOfPurchases = 0;
      let language: string[] = [];
      const competencies: { [key: string]: any } = {};
      let author: string;

      for (const tag of course.tags) {
        switch (tag?.descriptor?.name) {
          case 'courseInfo':
            tag.list.forEach((data) => {
              switch (data?.descriptor?.name) {
                case 'numberOfPurchases':
                  numberOfPurchases = parseInt(data.value[0]) || 0;
                  break;
                case 'languages':
                  language = data.value
                    .split(',')
                    .map((lang: string) => lang.trim());
                  break;
                case 'Course Instructor':
                  author = data?.value;
                  break;
              }
            });
            break;
          case 'competencyInfo':
            tag.list.forEach((competency) => {
              competencies[competency.descriptor.name] = competency.value
                .split(',')
                .map((comp: string) => comp.trim());
            });
            break;
        }
      }

      if (!competencies || Object.keys(competencies).length === 0) return; // not including the courses without any competency

      const result: CourseResponseDto = {
        courseId: course.id,
        title: course.descriptor.name,
        description: course.descriptor.long_desc,
        providerId,
        providerName,
        credits: +course.price.value,
        imgLink: course.descriptor.images[0]?.url,
        author,
        language,
        avgRating: +course.rating,
        competency: competencies,
        numOfUsers: numberOfPurchases,
        bppId: onSearchDTO?.context?.bpp_id,
        bppUri: onSearchDTO?.context?.bpp_uri,
      };

      return result;
    });
  }

  private filterNullishValues(
    courses: CourseResponseDto[],
  ): CourseResponseDto[] {
    return courses.filter(Boolean);
  }

  async handleOnSearch(onSearchDto: OnSearchDTO) {
    // TODO: validate the request from BPP to check if all the required information is available or not
    console.log(
      'onsearchdto in on search: ',
      JSON.stringify(onSearchDto, null, 2),
    );

    // extract course information from the search response sent by BPP
    const courses = this.extractCoursesInfo(onSearchDto);

    // filter to get only those courses added on marketplace and verified by admin
    const filteredCourses = await this.filterNullishValues(courses);

    // any further filtering

    // messageId to store the responses
    const messageId: string = onSearchDto.context.message_id;
    // const numberOfCourses = filteredCourses.data.length;

    await this.redisService.appendResults(messageId, filteredCourses);

    return;
  }
}
