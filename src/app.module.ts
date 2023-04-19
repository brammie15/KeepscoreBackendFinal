import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StudentsModule } from './students/students.module';
import { KlassenModule } from './klassen/klassen.module';
import { RubricsModule } from './rubrics/rubrics.module';
import { CritereasModule } from './critereas/critereas.module';
import { IndicatorsModule } from './indicators/indicators.module';

@Module({
  imports: [PrismaModule, StudentsModule, KlassenModule, KlassenModule, RubricsModule, CritereasModule, IndicatorsModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
