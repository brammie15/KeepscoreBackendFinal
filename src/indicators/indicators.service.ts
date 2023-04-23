import { Injectable } from '@nestjs/common';
import { CreateIndicatorDto } from './dto/create-indicator.dto';
import { UpdateIndicatorDto } from './dto/update-indicator.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { StandardResponse, StatusResponse } from 'src/response';
import { HandlePostError } from 'src/ErrorHandler';

@Injectable()
export class IndicatorsService {
  constructor(private prisma: PrismaService) {}
  async create(createIndicatorDto: CreateIndicatorDto) {
    try{
      const indicator = await this.prisma.indicator.create({data: createIndicatorDto});
      return StandardResponse(StatusResponse.SUCCESS, indicator);
    }catch(e){
      HandlePostError(e);
    }
  }

  findAll() {
    return this.prisma.indicator.findMany();
  }

  async findOne(id: number) {
    const indicator=  await this.prisma.indicator.findUnique({where: {id}});
    if(!indicator){
      return StandardResponse(StatusResponse.ERROR, "Indicator not found");
    }else{
      return StandardResponse(StatusResponse.SUCCESS, indicator);
    }
  }

  update(id: number, updateIndicatorDto: UpdateIndicatorDto) {
    return `This action updates a #${id} indicator`;
  }

  remove(id: number) {
    return `This action removes a #${id} indicator`;
  }
}
