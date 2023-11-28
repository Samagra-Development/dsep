import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
// import { requestForwarder } from 'utils/utils';
import { OnSearchDTO } from './dto/on_search.dto';
import { RedisStoreService } from '../redis-store/redis-store.service';
import { CourseResponseDto } from '../filter/dto/course-response.dto';
// import { SearchDTO } from 'apps/bg/src/search/dto/search.dto';
import { FilterService } from '../filter/filter.service';

@Injectable()
export class OnSearchService {
  constructor(
      private readonly httpService: HttpService, 
      private readonly redisService: RedisStoreService,
      private readonly filterService: FilterService
    ) {}

  private extractCoursesInfo(onSearchDTO: OnSearchDTO): CourseResponseDto[] {
    const provider_id = onSearchDTO.message.catalog.providers[0].id;
    const provider_name = onSearchDTO.message.catalog.providers[0].descriptor.name;
    const courses = onSearchDTO.message.catalog.providers[0].items;
    return courses.map((course) => {

      let numberOfPurchases: number = 0;
      let languages: string[] = [];

      for(let i:number = 0;i < course.tags.length; i++) {
        if(course.tags[i].descriptor.name === 'courseInfo') {
          for(let j:number = 0;j < course.tags[i].list.length;j++) {
            if(course.tags[i].list[j].descriptor.name == 'numberOfPurchases') {
              numberOfPurchases = course.tags[i].list[j].value[0] as number;
            } 
            if(course.tags[i].list[j].descriptor.name == 'languages') {
              languages = course.tags[i].list[j].value as string[];
            }
          }
        }
      }

      return {
        id: course.id,
        title: course.descriptor.name,
        long_desc: course.descriptor.long_desc,
        provider_name: provider_name,
        provider_id: provider_id,
        price: course.price.value,
        imgUrl: course.descriptor.images[0],
        languages: languages,
        rating: course.rating,
        duration: course.time.duration,
        noOfPurchases: numberOfPurchases
      }
    });
 }  


  async handleOnSearch(onSearchDto: OnSearchDTO) {
    // TODO: validate the request from BPP
    console.log('onsearchdto in on search: ', JSON.stringify(onSearchDto, null, 2));

    // extract course information from the search response sent by BPP
    const courses = this.extractCoursesInfo(onSearchDto);

    // filter to get only those courses added on marketplace and verified by admin 
    const filteredCourses = await this.filterService.verifiedFilter(courses);

    // any further filtering

    // messageId to store the responses
    const messageId: string = onSearchDto.context.message_id;
    const numberOfCourses = filteredCourses.data.length;

    for(let i = 0;i<numberOfCourses;i++) {
      const _ : number = await this.redisService.appendResults(messageId, filteredCourses[i]);
      // Need to add concurrency control (lock the rows). else, possibility of search response data loss.
    }
    
    return;
  }
}
