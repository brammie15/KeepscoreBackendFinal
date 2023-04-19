import { PartialType } from '@nestjs/swagger';
import { CreateCritereaDto } from './create-criterea.dto';

export class UpdateCritereaDto extends PartialType(CreateCritereaDto) {}
