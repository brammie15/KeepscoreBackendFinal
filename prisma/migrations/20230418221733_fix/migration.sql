/*
  Warnings:

  - You are about to drop the column `classId` on the `Student` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_classId_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "classId",
ADD COLUMN     "klasId" INTEGER;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_klasId_fkey" FOREIGN KEY ("klasId") REFERENCES "Klas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
