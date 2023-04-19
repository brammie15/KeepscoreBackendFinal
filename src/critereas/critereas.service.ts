import { Injectable } from '@nestjs/common';
import { CreateCritereaDto } from './dto/create-criterea.dto';
import { UpdateCritereaDto } from './dto/update-criterea.dto';

@Injectable()
export class CritereasService {
  create(createCritereaDto: CreateCritereaDto) {
    return 'This action adds a new criterea';
  }

  findAll() {
    return `This action returns all critereas`;
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
