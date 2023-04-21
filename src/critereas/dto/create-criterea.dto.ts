import { ApiProperty } from "@nestjs/swagger";

export class CreateCritereaDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    rubricId: number;
}
