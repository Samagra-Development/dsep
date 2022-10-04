import { Test, TestingModule } from '@nestjs/testing';
import { OnRatingService } from './on_rating.service';

describe('OnRatingService', () => {
  let service: OnRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnRatingService],
    }).compile();

    service = module.get<OnRatingService>(OnRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
