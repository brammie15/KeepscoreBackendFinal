import { ApiProperty } from "@nestjs/swagger";

export class CreateRubricDto {
    @ApiProperty()
    name: string;
}
