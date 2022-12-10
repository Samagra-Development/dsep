import { Test, TestingModule } from '@nestjs/testing';
import { OnStatusController } from './on_status.controller';
import { OnStatusService } from './on_status.service';

describe('OnStatusController', () => {
  let controller: OnStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnStatusController],
      providers: [OnStatusService],
    }).compile();

    controller = module.get<OnStatusController>(OnStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
