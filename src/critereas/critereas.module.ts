import { Module } from '@nestjs/common';
import { CritereasService } from './critereas.service';
import { CritereasController } from './critereas.controller';

@Module({
  controllers: [CritereasController],
  providers: [CritereasService]
})
export class CritereasModule {}
