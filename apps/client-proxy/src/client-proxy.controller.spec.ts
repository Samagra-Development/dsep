import { Test, TestingModule } from '@nestjs/testing';
import { ClientProxyController } from './client-proxy.controller';
import { ClientProxyService } from './client-proxy.service';

describe('ClientProxyController', () => {
  let clientProxyController: ClientProxyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientProxyController],
      providers: [ClientProxyService],
    }).compile();

    clientProxyController = app.get<ClientProxyController>(ClientProxyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(clientProxyController.getHello()).toBe('Hello World!');
    });
  });
});
