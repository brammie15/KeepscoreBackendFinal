import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CritereasService } from './critereas.service';
import { CreateCritereaDto } from './dto/create-criterea.dto';
import { UpdateCritereaDto } from './dto/update-criterea.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('critereas')
@ApiTags("Critereas")
export class CritereasController {
  constructor(private readonly critereasService: CritereasService) {}

  @Post()
  create(@Body() createCritereaDto: CreateCritereaDto) {
    return this.critereasService.create(createCritereaDto);
  }

  @Get()
  findAll() {
    return this.critereasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.critereasService.findOne(+id);
  }

  @Get("byRubric/:id")
  findByRubric(@Param('id') id: string) {
    return this.critereasService.findByRubric(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCritereaDto: UpdateCritereaDto) {
    return this.critereasService.update(+id, updateCritereaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.critereasService.remove(+id);
  }
}
