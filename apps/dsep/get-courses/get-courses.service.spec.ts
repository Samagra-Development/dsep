import { Test, TestingModule } from '@nestjs/testing';
import { GetCoursesService } from './get-courses.service';

describe('GetCoursesService', () => {
  let service: GetCoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetCoursesService],
    }).compile();

    service = module.get<GetCoursesService>(GetCoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
