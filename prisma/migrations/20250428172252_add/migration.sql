/*
  Warnings:

  - You are about to drop the column `desc` on the `ai_generator` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `download` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `download` table. All the data in the column will be lost.
  - Added the required column `desc` to the `ai_generator_content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `download` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ai_generator" DROP COLUMN "desc",
ALTER COLUMN "date" DROP NOT NULL,
ALTER COLUMN "times" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ai_generator_content" ADD COLUMN     "desc" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "download" DROP COLUMN "title",
DROP COLUMN "url",
ADD COLUMN     "date" INTEGER,
ADD COLUMN     "times" INTEGER,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "generate_record" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "date" INTEGER,
    "times" INTEGER,
    "resume_id" TEXT,
    "user_id" TEXT,
    "created_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_time" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "download_record" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "download_id" TEXT,
    "generate_record_id" TEXT,
    "created_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_time" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "generate_record_id_key" ON "generate_record"("id");

-- CreateIndex
CREATE UNIQUE INDEX "download_record_id_key" ON "download_record"("id");

-- AddForeignKey
ALTER TABLE "generate_record" ADD CONSTRAINT "generate_record_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resume"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "generate_record" ADD CONSTRAINT "generate_record_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "download" ADD CONSTRAINT "download_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "download_record" ADD CONSTRAINT "download_record_download_id_fkey" FOREIGN KEY ("download_id") REFERENCES "download"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "download_record" ADD CONSTRAINT "download_record_generate_record_id_fkey" FOREIGN KEY ("generate_record_id") REFERENCES "generate_record"("id") ON DELETE SET NULL ON UPDATE CASCADE;
