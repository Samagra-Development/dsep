import { Test, TestingModule } from '@nestjs/testing';
import { OnRatingController } from './on_rating.controller';
import { OnRatingService } from './on_rating.service';

describe('OnRatingController', () => {
  let controller: OnRatingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnRatingController],
      providers: [OnRatingService],
    }).compile();

    controller = module.get<OnRatingController>(OnRatingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
