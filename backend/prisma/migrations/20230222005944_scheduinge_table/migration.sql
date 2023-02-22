-- CreateTable
CREATE TABLE "scheduling" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "citizen_id" TEXT NOT NULL,
    "scheduling_date" DATETIME NOT NULL,
    "scheduling_state" TEXT NOT NULL DEFAULT 'PENDING',
    "bi_situation" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "scheduling_citizen_id_fkey" FOREIGN KEY ("citizen_id") REFERENCES "citizens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
