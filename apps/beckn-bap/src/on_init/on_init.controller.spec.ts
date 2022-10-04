import { Test, TestingModule } from '@nestjs/testing';
import { OnInitController } from './on_init.controller';
import { OnInitService } from './on_init.service';

describe('OnInitController', () => {
  let controller: OnInitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnInitController],
      providers: [OnInitService],
    }).compile();

    controller = module.get<OnInitController>(OnInitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
