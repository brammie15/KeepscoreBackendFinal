import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StudentsModule } from './students/students.module';
import { KlassenModule } from './klassen/klassen.module';

@Module({
  imports: [PrismaModule, StudentsModule, KlassenModule, KlassenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
