import { Test, TestingModule } from '@nestjs/testing';
import { OnCancelController } from './on_cancel.controller';
import { OnCancelService } from './on_cancel.service';

describe('OnCancelController', () => {
  let controller: OnCancelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnCancelController],
      providers: [OnCancelService],
    }).compile();

    controller = module.get<OnCancelController>(OnCancelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
