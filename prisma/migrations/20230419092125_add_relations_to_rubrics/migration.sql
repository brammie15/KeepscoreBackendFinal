-- AlterTable
ALTER TABLE "Criterea" ADD COLUMN     "rubricId" INTEGER;

-- AlterTable
ALTER TABLE "Indicator" ADD COLUMN     "critereaId" INTEGER;

-- AddForeignKey
ALTER TABLE "Criterea" ADD CONSTRAINT "Criterea_rubricId_fkey" FOREIGN KEY ("rubricId") REFERENCES "Rubric"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Indicator" ADD CONSTRAINT "Indicator_critereaId_fkey" FOREIGN KEY ("critereaId") REFERENCES "Criterea"("id") ON DELETE SET NULL ON UPDATE CASCADE;
