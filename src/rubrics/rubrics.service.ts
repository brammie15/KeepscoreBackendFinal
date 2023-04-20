import { Injectable } from '@nestjs/common';
import { CreateRubricDto } from './dto/create-rubric.dto';
import { UpdateRubricDto } from './dto/update-rubric.dto';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { HandlePostError } from 'src/ErrorHandler';
import { StandardResponse, StatusResponse } from 'src/response';

@Injectable()
export class RubricsService {
  constructor(private prisma: PrismaService) {}
  async create(createRubricDto: CreateRubricDto) {
    try{
      const newRubric = await this.prisma.rubric.create({data: createRubricDto});
      return StandardResponse(StatusResponse.SUCCESS, newRubric);
    }catch(e){
      HandlePostError(e);
    }
  }

  async findAll() {
    const rubrics = await this.prisma.rubric.findMany({include: {Criterea: true}});
    if(!rubrics){
      return StandardResponse(StatusResponse.ERROR, "Rubrics not found");
    }else{
      return StandardResponse(StatusResponse.SUCCESS, rubrics);
    }
  }

  async findOne(id: number) {
    const rubric = await this.prisma.rubric.findUnique({where: {id}, include: {Criterea: true}});
    if(!rubric){
      return StandardResponse(StatusResponse.ERROR, "Rubric not found");
    }else{
      return StandardResponse(StatusResponse.SUCCESS, rubric);
    }
  }

  update(id: number, updateRubricDto: UpdateRubricDto) {
    return `This action updates a #${id} rubric`;
  }

  remove(id: number) {
    return `This action removes a #${id} rubric`;
  }
}
