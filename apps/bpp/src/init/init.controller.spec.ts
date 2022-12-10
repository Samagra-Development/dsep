import { Test, TestingModule } from '@nestjs/testing';
import { InitController } from './init.controller';
import { InitService } from './init.service';

describe('InitController', () => {
  let controller: InitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InitController],
      providers: [InitService],
    }).compile();

    controller = module.get<InitController>(InitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
