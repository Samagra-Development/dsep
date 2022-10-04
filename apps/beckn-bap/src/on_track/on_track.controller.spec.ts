import { Test, TestingModule } from '@nestjs/testing';
import { OnTrackController } from './on_track.controller';
import { OnTrackService } from './on_track.service';

describe('OnTrackController', () => {
  let controller: OnTrackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnTrackController],
      providers: [OnTrackService],
    }).compile();

    controller = module.get<OnTrackController>(OnTrackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
