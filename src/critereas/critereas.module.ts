import { Module } from '@nestjs/common';
import { CritereasService } from './critereas.service';
import { CritereasController } from './critereas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CritereasController],
  providers: [CritereasService],
  imports: [PrismaModule]
})
export class CritereasModule {}
