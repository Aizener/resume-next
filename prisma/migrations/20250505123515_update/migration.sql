/*
  Warnings:

  - A unique constraint covering the columns `[path]` on the table `template` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "template_path_key" ON "template"("path");
