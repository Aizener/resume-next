-- AlterTable
ALTER TABLE "ai_generator" ALTER COLUMN "created_time" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "download" ALTER COLUMN "created_time" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "invite" ALTER COLUMN "created_time" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "created_time" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "resume" ALTER COLUMN "created_time" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "role" ALTER COLUMN "created_time" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "score" ALTER COLUMN "created_time" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "sign" ALTER COLUMN "created_time" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "template" ALTER COLUMN "created_time" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "created_time" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "works" ALTER COLUMN "created_time" SET DEFAULT CURRENT_TIMESTAMP;
