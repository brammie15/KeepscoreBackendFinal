import { Criterea } from "@prisma/client";

export class Rubric {
    id: number;
    name: string;np
    criterea: Criterea[];
    createdAt: Date;
    updatedAt: Date;
}
