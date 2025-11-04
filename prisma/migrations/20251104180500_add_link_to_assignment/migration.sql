-- Add optional link field to Assignment
ALTER TABLE "Assignment" ADD COLUMN IF NOT EXISTS "link" TEXT;
