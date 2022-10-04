import { Test, TestingModule } from '@nestjs/testing';
import { UpdateController } from './update.controller';
import { UpdateService } from './update.service';

describe('UpdateController', () => {
  let controller: UpdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateController],
      providers: [UpdateService],
    }).compile();

    controller = module.get<UpdateController>(UpdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
