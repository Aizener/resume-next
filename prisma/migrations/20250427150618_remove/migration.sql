/*
  Warnings:

  - You are about to drop the `projects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `works` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_resume_id_fkey";

-- DropForeignKey
ALTER TABLE "works" DROP CONSTRAINT "works_resume_id_fkey";

-- AlterTable
ALTER TABLE "resume" ADD COLUMN     "projects" TEXT,
ADD COLUMN     "works" TEXT;

-- DropTable
DROP TABLE "projects";

-- DropTable
DROP TABLE "works";
