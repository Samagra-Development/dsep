import { Test, TestingModule } from '@nestjs/testing';
import { OnConfirmController } from './on_confirm.controller';
import { OnConfirmService } from './on_confirm.service';

describe('OnConfirmController', () => {
  let controller: OnConfirmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnConfirmController],
      providers: [OnConfirmService],
    }).compile();

    controller = module.get<OnConfirmController>(OnConfirmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
