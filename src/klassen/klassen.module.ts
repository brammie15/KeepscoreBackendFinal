import { Module } from '@nestjs/common';
import { KlassenService } from './klassen.service';
import { KlassenController } from './klassen.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [KlassenController],
  providers: [KlassenService],
  imports: [PrismaModule]
})
export class KlassenModule {}
