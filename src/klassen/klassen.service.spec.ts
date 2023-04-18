import { Test, TestingModule } from '@nestjs/testing';
import { KlassenService } from './klassen.service';

describe('KlassenService', () => {
  let service: KlassenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KlassenService],
    }).compile();

    service = module.get<KlassenService>(KlassenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
