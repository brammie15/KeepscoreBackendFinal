import { Injectable } from '@nestjs/common';
import { CreateKlassenDto } from './dto/create-klassen.dto';
import { UpdateKlassenDto } from './dto/update-klassen.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KlassenService {
  constructor(private prisma: PrismaService) {}

  create(createKlassenDto: CreateKlassenDto) {
    return this.prisma.klas.create({ data: createKlassenDto });
  }

  findAll() {
    return this.prisma.klas.findMany();
  }

  findOne(id: number) {
    return this.prisma.klas.findUnique({ where: { id } });
  }

  update(id: number, updateKlassenDto: UpdateKlassenDto) {
    return `This action updates a #${id} klassen`;
  }

  remove(id: number) {
    return `This action removes a #${id} klassen`;
  }
}
