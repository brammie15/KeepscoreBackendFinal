import { PartialType } from '@nestjs/swagger';
import { CreateKlassenDto } from './create-klassen.dto';

export class UpdateKlassenDto extends PartialType(CreateKlassenDto) {}
