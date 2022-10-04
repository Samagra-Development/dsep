import { Test, TestingModule } from '@nestjs/testing';
import { OnTrackService } from './on_track.service';

describe('OnTrackService', () => {
  let service: OnTrackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnTrackService],
    }).compile();

    service = module.get<OnTrackService>(OnTrackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
