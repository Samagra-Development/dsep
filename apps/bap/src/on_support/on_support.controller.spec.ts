import { Test, TestingModule } from '@nestjs/testing';
import { OnSupportController } from './on_support.controller';
import { OnSupportService } from './on_support.service';

describe('OnSupportController', () => {
  let controller: OnSupportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnSupportController],
      providers: [OnSupportService],
    }).compile();

    controller = module.get<OnSupportController>(OnSupportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
