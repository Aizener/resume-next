/*
  Warnings:

  - You are about to drop the column `generate_record_id` on the `download_record` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `generate_record` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `generate_record` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `generate_record` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "download_record" DROP CONSTRAINT "download_record_generate_record_id_fkey";

-- AlterTable
ALTER TABLE "download_record" DROP COLUMN "generate_record_id",
ADD COLUMN     "generate_record_detail_id" TEXT;

-- AlterTable
ALTER TABLE "generate_record" DROP COLUMN "status",
DROP COLUMN "title",
DROP COLUMN "url";

-- CreateTable
CREATE TABLE "generate_record_detail" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "generate_record_id" TEXT,
    "created_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_time" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "generate_record_detail_id_key" ON "generate_record_detail"("id");

-- AddForeignKey
ALTER TABLE "generate_record_detail" ADD CONSTRAINT "generate_record_detail_generate_record_id_fkey" FOREIGN KEY ("generate_record_id") REFERENCES "generate_record"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "download_record" ADD CONSTRAINT "download_record_generate_record_detail_id_fkey" FOREIGN KEY ("generate_record_detail_id") REFERENCES "generate_record_detail"("id") ON DELETE SET NULL ON UPDATE CASCADE;
