import { Test, TestingModule } from '@nestjs/testing';
import { CancelController } from './cancel.controller';
import { CancelService } from './cancel.service';

describe('CancelController', () => {
  let controller: CancelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CancelController],
      providers: [CancelService],
    }).compile();

    controller = module.get<CancelController>(CancelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
