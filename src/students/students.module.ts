import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { KlassenController } from 'src/klassen/klassen.controller';
import { KlassenModule } from 'src/klassen/klassen.module';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [PrismaModule],
})
export class StudentsModule {}
