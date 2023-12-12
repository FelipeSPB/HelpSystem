/*
  Warnings:

  - You are about to drop the `_QuestionToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_QuestionToUser_B_index";

-- DropIndex
DROP INDEX "_QuestionToUser_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_QuestionToUser";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Question_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Question" ("content", "id", "title") SELECT "content", "id", "title" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
