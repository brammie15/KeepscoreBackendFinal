import { ApiProperty } from "@nestjs/swagger";

export class CreateKlassenDto {
    @ApiProperty()
    name: string;
}
