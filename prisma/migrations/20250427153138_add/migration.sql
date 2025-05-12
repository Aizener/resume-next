/*
  Warnings:

  - You are about to drop the column `ohter` on the `resume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "resume" DROP COLUMN "ohter",
ADD COLUMN     "other" VARCHAR(1000);
