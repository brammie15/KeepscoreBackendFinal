import { Injectable } from '@nestjs/common';
import { CreateRubricDto } from './dto/create-rubric.dto';
import { UpdateRubricDto } from './dto/update-rubric.dto';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RubricsService {
  constructor(private prisma: PrismaService) {}
  create(createRubricDto: CreateRubricDto) {
  }

  findAll() {
    return `This action returns all rubrics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rubric`;
  }

  update(id: number, updateRubricDto: UpdateRubricDto) {
    return `This action updates a #${id} rubric`;
  }

  remove(id: number) {
    return `This action removes a #${id} rubric`;
  }
}
