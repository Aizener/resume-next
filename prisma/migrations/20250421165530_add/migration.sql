-- CreateTable
CREATE TABLE "ai_generator_content" (
    "id" TEXT NOT NULL,
    "gid" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "promp_tokens" INTEGER NOT NULL,
    "completion_tokens" INTEGER NOT NULL,
    "object" TEXT NOT NULL,
    "user_message" TEXT NOT NULL,
    "aiGeneratorId" TEXT,
    "created_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_time" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ai_generator_content_id_key" ON "ai_generator_content"("id");

-- AddForeignKey
ALTER TABLE "ai_generator_content" ADD CONSTRAINT "ai_generator_content_aiGeneratorId_fkey" FOREIGN KEY ("aiGeneratorId") REFERENCES "ai_generator"("id") ON DELETE SET NULL ON UPDATE CASCADE;
