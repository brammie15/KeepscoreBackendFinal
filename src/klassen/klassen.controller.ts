import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KlassenService } from './klassen.service';
import { CreateKlassenDto } from './dto/create-klassen.dto';
import { UpdateKlassenDto } from './dto/update-klassen.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('klassen')
@ApiTags("Klassen")
export class KlassenController {
  constructor(private readonly klassenService: KlassenService) {}

  @Post()
  create(@Body() createKlassenDto: CreateKlassenDto) {
    return this.klassenService.create(createKlassenDto);
  }

  @Get()
  findAll() {
    return this.klassenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.klassenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKlassenDto: UpdateKlassenDto) {
    return this.klassenService.update(+id, updateKlassenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.klassenService.remove(+id);
  }
}
