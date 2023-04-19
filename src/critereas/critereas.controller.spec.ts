import { Test, TestingModule } from '@nestjs/testing';
import { CritereasController } from './critereas.controller';
import { CritereasService } from './critereas.service';

describe('CritereasController', () => {
  let controller: CritereasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CritereasController],
      providers: [CritereasService],
    }).compile();

    controller = module.get<CritereasController>(CritereasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
