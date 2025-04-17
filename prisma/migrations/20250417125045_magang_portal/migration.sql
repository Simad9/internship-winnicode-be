/*
  Warnings:

  - You are about to drop the column `id_akun` on the `like` table. All the data in the column will be lost.
  - You are about to drop the column `id_berita` on the `like` table. All the data in the column will be lost.
  - You are about to alter the column `like` on the `like` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to drop the `akun` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `berita` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `komentar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `peniliaan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `publish` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `newsId` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Like` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `berita` DROP FOREIGN KEY `Berita_id_penulis_fkey`;

-- DropForeignKey
ALTER TABLE `komentar` DROP FOREIGN KEY `Komentar_id_akun_fkey`;

-- DropForeignKey
ALTER TABLE `komentar` DROP FOREIGN KEY `Komentar_id_berita_fkey`;

-- DropForeignKey
ALTER TABLE `like` DROP FOREIGN KEY `Like_id_akun_fkey`;

-- DropForeignKey
ALTER TABLE `like` DROP FOREIGN KEY `Like_id_berita_fkey`;

-- DropForeignKey
ALTER TABLE `peniliaan` DROP FOREIGN KEY `Peniliaan_id_akun_admin_fkey`;

-- DropForeignKey
ALTER TABLE `peniliaan` DROP FOREIGN KEY `Peniliaan_id_akun_jurnalis_fkey`;

-- DropForeignKey
ALTER TABLE `publish` DROP FOREIGN KEY `Publish_id_akun_admin_fkey`;

-- DropForeignKey
ALTER TABLE `publish` DROP FOREIGN KEY `Publish_id_berita_fkey`;

-- DropIndex
DROP INDEX `Like_id_akun_fkey` ON `like`;

-- DropIndex
DROP INDEX `Like_id_berita_fkey` ON `like`;

-- AlterTable
ALTER TABLE `like` DROP COLUMN `id_akun`,
    DROP COLUMN `id_berita`,
    ADD COLUMN `newsId` INTEGER NOT NULL,
    ADD COLUMN `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `userId` INTEGER NOT NULL,
    MODIFY `like` BOOLEAN NOT NULL;

-- DropTable
DROP TABLE `akun`;

-- DropTable
DROP TABLE `berita`;

-- DropTable
DROP TABLE `komentar`;

-- DropTable
DROP TABLE `peniliaan`;

-- DropTable
DROP TABLE `publish`;

-- CreateTable
CREATE TABLE `User` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `profile_picture` VARCHAR(191) NULL,
    `university` VARCHAR(191) NULL,
    `major` VARCHAR(191) NULL,
    `internship_date` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `id_task` INTEGER NOT NULL AUTO_INCREMENT,
    `task_title` VARCHAR(191) NOT NULL,
    `task_deadline` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id_task`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id_category` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(191) NOT NULL,
    `status` ENUM('accepted', 'decline') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id_category`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `News` (
    `id_news` INTEGER NOT NULL AUTO_INCREMENT,
    `taskId` INTEGER NOT NULL,
    `newsId` INTEGER NOT NULL,
    `pendingId` INTEGER NULL,
    `authorId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id_news`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Save` (
    `id_save` INTEGER NOT NULL AUTO_INCREMENT,
    `newsId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `saved_news` BOOLEAN NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_save`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id_comment` INTEGER NOT NULL AUTO_INCREMENT,
    `newsId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_comment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pending` (
    `id_pending` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('pending', 'approved', 'revised') NOT NULL DEFAULT 'pending',
    `note` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `resolved_at` DATETIME(3) NULL,

    PRIMARY KEY (`id_pending`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `News` ADD CONSTRAINT `News_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`id_task`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `News` ADD CONSTRAINT `News_newsId_fkey` FOREIGN KEY (`newsId`) REFERENCES `Category`(`id_category`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `News` ADD CONSTRAINT `News_pendingId_fkey` FOREIGN KEY (`pendingId`) REFERENCES `Pending`(`id_pending`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `News` ADD CONSTRAINT `News_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_newsId_fkey` FOREIGN KEY (`newsId`) REFERENCES `News`(`id_news`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Save` ADD CONSTRAINT `Save_newsId_fkey` FOREIGN KEY (`newsId`) REFERENCES `News`(`id_news`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Save` ADD CONSTRAINT `Save_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_newsId_fkey` FOREIGN KEY (`newsId`) REFERENCES `News`(`id_news`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
