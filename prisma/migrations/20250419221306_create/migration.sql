/*
  Warnings:

  - A unique constraint covering the columns `[profile_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "profile_id" TEXT,
ADD COLUMN     "status" TEXT;

-- CreateTable
CREATE TABLE "score" (
    "id" TEXT NOT NULL,
    "score" INTEGER,
    "grade" INTEGER,
    "created_time" TIMESTAMP(3) NOT NULL,
    "updated_time" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "invite" (
    "id" TEXT NOT NULL,
    "inviter_id" TEXT,
    "invitee_id" TEXT,
    "created_time" TIMESTAMP(3) NOT NULL,
    "updated_time" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "resume" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "realname" TEXT DEFAULT '',
    "age" INTEGER,
    "education" TEXT DEFAULT '',
    "address" TEXT DEFAULT '',
    "mobile" TEXT DEFAULT '',
    "email" TEXT DEFAULT '',
    "status" TEXT DEFAULT '',
    "industry" TEXT DEFAULT '',
    "user_id" TEXT,
    "template_id" TEXT,
    "created_time" TIMESTAMP(3) NOT NULL,
    "updated_time" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "works" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "resume_id" TEXT NOT NULL,
    "created_time" TIMESTAMP(3) NOT NULL,
    "updated_time" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "resume_id" TEXT NOT NULL,
    "created_time" TIMESTAMP(3) NOT NULL,
    "updated_time" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "template" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "path" TEXT NOT NULL DEFAULT '',
    "type" TEXT DEFAULT '',
    "created_time" TIMESTAMP(3) NOT NULL,
    "updated_time" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "download" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "created_time" TIMESTAMP(3) NOT NULL,
    "updated_time" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "score_id_key" ON "score"("id");

-- CreateIndex
CREATE UNIQUE INDEX "invite_id_key" ON "invite"("id");

-- CreateIndex
CREATE UNIQUE INDEX "resume_id_key" ON "resume"("id");

-- CreateIndex
CREATE UNIQUE INDEX "resume_title_key" ON "resume"("title");

-- CreateIndex
CREATE UNIQUE INDEX "works_id_key" ON "works"("id");

-- CreateIndex
CREATE UNIQUE INDEX "projects_id_key" ON "projects"("id");

-- CreateIndex
CREATE UNIQUE INDEX "template_id_key" ON "template"("id");

-- CreateIndex
CREATE UNIQUE INDEX "download_id_key" ON "download"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_profile_id_key" ON "user"("profile_id");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "score"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invite" ADD CONSTRAINT "invite_inviter_id_fkey" FOREIGN KEY ("inviter_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invite" ADD CONSTRAINT "invite_invitee_id_fkey" FOREIGN KEY ("invitee_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resume" ADD CONSTRAINT "resume_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resume" ADD CONSTRAINT "resume_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "template"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;
