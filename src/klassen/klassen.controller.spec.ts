import { Test, TestingModule } from '@nestjs/testing';
import { KlassenController } from './klassen.controller';
import { KlassenService } from './klassen.service';

describe('KlassenController', () => {
  let controller: KlassenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KlassenController],
      providers: [KlassenService],
    }).compile();

    controller = module.get<KlassenController>(KlassenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
