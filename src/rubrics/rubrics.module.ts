import { Module } from '@nestjs/common';
import { RubricsService } from './rubrics.service';
import { RubricsController } from './rubrics.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RubricsController],
  providers: [RubricsService],
  imports: [PrismaModule]
})
export class RubricsModule {}
