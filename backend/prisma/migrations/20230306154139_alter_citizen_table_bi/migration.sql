/*
  Warnings:

  - A unique constraint covering the columns `[bi]` on the table `citizens` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "citizens_bi_key" ON "citizens"("bi");
