/*
  Warnings:

  - Added the required column `register_date` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_date` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "register_date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "register_date" TIMESTAMP(3) NOT NULL;
