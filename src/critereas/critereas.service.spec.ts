import { Test, TestingModule } from '@nestjs/testing';
import { CritereasService } from './critereas.service';

describe('CritereasService', () => {
  let service: CritereasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CritereasService],
    }).compile();

    service = module.get<CritereasService>(CritereasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
