import { Injectable } from '@nestjs/common';
import { CreateCritereaDto } from './dto/create-criterea.dto';
import { UpdateCritereaDto } from './dto/update-criterea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CritereasService {
  constructor(private prisma: PrismaService) {}
  create(createCritereaDto: CreateCritereaDto) {
    return 'This action adds a new criterea';
  }
  
  findAll() {
    return `This action returns all critereas`;
  }
  findByRubric(id: number) {
    const rubric = this.prisma.rubric.findUnique({where: {id: id}, include: {Criterea: true}});
    return rubric;
  }

  findOne(id: number) {
    return `This action returns a #${id} criterea`;
  }

  update(id: number, updateCritereaDto: UpdateCritereaDto) {
    return `This action updates a #${id} criterea`;
  }

  remove(id: number) {
    return `This action removes a #${id} criterea`;
  }
}
