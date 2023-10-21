-- CreateTable
CREATE TABLE "usuário" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "doc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nm_event" TEXT NOT NULL,
    "nm_user_id" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "evento_nm_user_id_fkey" FOREIGN KEY ("nm_user_id") REFERENCES "usuário" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
