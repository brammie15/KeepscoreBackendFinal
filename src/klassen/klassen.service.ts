import { Injectable } from '@nestjs/common';
import { CreateKlassenDto } from './dto/create-klassen.dto';
import { UpdateKlassenDto } from './dto/update-klassen.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { StandardResponse, StandardResponseMessage, StatusResponse } from 'src/response';

@Injectable()
export class KlassenService {
  constructor(private prisma: PrismaService) {}

  async create(createKlassenDto: CreateKlassenDto) {
    const klas = await this.prisma.klas.create({ data: createKlassenDto });
    if(!klas) {
      return StandardResponseMessage(StatusResponse.ERROR, "Klas could not be created");
    }else{
      return StandardResponse(StatusResponse.SUCCESS, klas);
    }
  }

  async findAll() {
    const klassen = await this.prisma.klas.findMany({include: {students: true}});
    if(!klassen) {
      return StandardResponseMessage(StatusResponse.ERROR, "Klassen not found");
    }else{
      return StandardResponse(StatusResponse.SUCCESS, klassen);
    }
  }

  async findOne(id: number) {
    const klas = await this.prisma.klas.findUnique({ where: { id }, include: { students: true } });
    if(!klas) {
      return StandardResponseMessage(StatusResponse.ERROR, "Klas not found");
    }else{
      return StandardResponse(StatusResponse.SUCCESS, klas);
    }
  }

  update(id: number, updateKlassenDto: UpdateKlassenDto) {
    return `This action updates a #${id} klassen`;
  }

  remove(id: number) {
    return `This action removes a #${id} klassen`;
  }
}
