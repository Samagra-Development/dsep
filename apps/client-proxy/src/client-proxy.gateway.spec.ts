import { Test, TestingModule } from '@nestjs/testing';
import { ClientProxyGateway } from './client-proxy.gateway';

describe('ClientProxyGateway', () => {
  let gateway: ClientProxyGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientProxyGateway],
    }).compile();

    gateway = module.get<ClientProxyGateway>(ClientProxyGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
