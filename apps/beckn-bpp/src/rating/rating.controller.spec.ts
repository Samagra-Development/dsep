import { Test, TestingModule } from '@nestjs/testing';
import { RatingController } from './rating.controller';
import { RatingService } from './rating.service';

describe('RatingController', () => {
  let controller: RatingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RatingController],
      providers: [RatingService],
    }).compile();

    controller = module.get<RatingController>(RatingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
