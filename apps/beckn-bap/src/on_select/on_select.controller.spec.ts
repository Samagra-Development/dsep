import { Test, TestingModule } from '@nestjs/testing';
import { OnSelectController } from './on_select.controller';
import { OnSelectService } from './on_select.service';

describe('OnSelectController', () => {
  let controller: OnSelectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnSelectController],
      providers: [OnSelectService],
    }).compile();

    controller = module.get<OnSelectController>(OnSelectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
