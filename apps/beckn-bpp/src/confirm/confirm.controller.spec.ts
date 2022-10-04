import { Test, TestingModule } from '@nestjs/testing';
import { ConfirmController } from './confirm.controller';
import { ConfirmService } from './confirm.service';

describe('ConfirmController', () => {
  let controller: ConfirmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfirmController],
      providers: [ConfirmService],
    }).compile();

    controller = module.get<ConfirmController>(ConfirmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
