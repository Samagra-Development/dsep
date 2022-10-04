import { Test, TestingModule } from '@nestjs/testing';
import { OnUpdateController } from './on_update.controller';
import { OnUpdateService } from './on_update.service';

describe('OnUpdateController', () => {
  let controller: OnUpdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnUpdateController],
      providers: [OnUpdateService],
    }).compile();

    controller = module.get<OnUpdateController>(OnUpdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
