/*
  Warnings:

  - You are about to drop the column `profile_id` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `score` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "invite" DROP CONSTRAINT "invite_invitee_id_fkey";

-- DropForeignKey
ALTER TABLE "invite" DROP CONSTRAINT "invite_inviter_id_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_profile_id_fkey";

-- DropIndex
DROP INDEX "user_profile_id_key";

-- AlterTable
ALTER TABLE "score" ADD COLUMN     "user_id" TEXT;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "profile_id";

-- CreateTable
CREATE TABLE "sign" (
    "id" TEXT NOT NULL,
    "date" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_time" TIMESTAMP(3) NOT NULL,
    "updated_time" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "ai_generator" (
    "id" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "date" INTEGER NOT NULL,
    "times" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_time" TIMESTAMP(3) NOT NULL,
    "updated_time" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "sign_id_key" ON "sign"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ai_generator_id_key" ON "ai_generator"("id");

-- CreateIndex
CREATE UNIQUE INDEX "score_user_id_key" ON "score"("user_id");

-- AddForeignKey
ALTER TABLE "sign" ADD CONSTRAINT "sign_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_generator" ADD CONSTRAINT "ai_generator_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "score" ADD CONSTRAINT "score_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invite" ADD CONSTRAINT "invite_inviter_id_fkey" FOREIGN KEY ("inviter_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invite" ADD CONSTRAINT "invite_invitee_id_fkey" FOREIGN KEY ("invitee_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
