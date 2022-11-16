import { Test, TestingModule } from '@nestjs/testing';
import { GetCoursesController } from './get-courses.controller';

describe('GetCoursesController', () => {
  let controller: GetCoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetCoursesController],
    }).compile();

    controller = module.get<GetCoursesController>(GetCoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
