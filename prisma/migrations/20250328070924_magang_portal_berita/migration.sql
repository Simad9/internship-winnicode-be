-- CreateTable
CREATE TABLE `Berita` (
    `id_berita` INTEGER NOT NULL AUTO_INCREMENT,
    `id_penulis` INTEGER NOT NULL,
    `judul` VARCHAR(191) NOT NULL,
    `isi` TEXT NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `cover_gambar` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_berita`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Publish` (
    `id_publish` INTEGER NOT NULL AUTO_INCREMENT,
    `id_berita` INTEGER NOT NULL,
    `id_akun_admin` INTEGER NOT NULL,
    `disetujui` ENUM('setuju', 'revisi', 'tolak') NOT NULL,
    `review` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id_publish`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Akun` (
    `id_akun` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('admin', 'magang', 'pengunjung') NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `tgl_lahir` DATE NOT NULL,

    PRIMARY KEY (`id_akun`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Peniliaan` (
    `id_peneliaian` INTEGER NOT NULL AUTO_INCREMENT,
    `id_akun_jurnalis` INTEGER NOT NULL,
    `id_akun_admin` INTEGER NOT NULL,
    `nilai` INTEGER NOT NULL,
    `catatan` VARCHAR(191) NOT NULL,
    `tanggal_nilai` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_peneliaian`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Like` (
    `id_like` INTEGER NOT NULL AUTO_INCREMENT,
    `id_berita` INTEGER NOT NULL,
    `id_akun` INTEGER NOT NULL,
    `like` INTEGER NOT NULL,

    PRIMARY KEY (`id_like`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Komentar` (
    `id_komentar` INTEGER NOT NULL AUTO_INCREMENT,
    `id_berita` INTEGER NOT NULL,
    `id_akun` INTEGER NOT NULL,
    `komentar` INTEGER NOT NULL,

    PRIMARY KEY (`id_komentar`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Berita` ADD CONSTRAINT `Berita_id_penulis_fkey` FOREIGN KEY (`id_penulis`) REFERENCES `Akun`(`id_akun`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Publish` ADD CONSTRAINT `Publish_id_berita_fkey` FOREIGN KEY (`id_berita`) REFERENCES `Berita`(`id_berita`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Publish` ADD CONSTRAINT `Publish_id_akun_admin_fkey` FOREIGN KEY (`id_akun_admin`) REFERENCES `Akun`(`id_akun`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Peniliaan` ADD CONSTRAINT `Peniliaan_id_akun_jurnalis_fkey` FOREIGN KEY (`id_akun_jurnalis`) REFERENCES `Akun`(`id_akun`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Peniliaan` ADD CONSTRAINT `Peniliaan_id_akun_admin_fkey` FOREIGN KEY (`id_akun_admin`) REFERENCES `Akun`(`id_akun`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_id_akun_fkey` FOREIGN KEY (`id_akun`) REFERENCES `Akun`(`id_akun`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_id_berita_fkey` FOREIGN KEY (`id_berita`) REFERENCES `Berita`(`id_berita`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Komentar` ADD CONSTRAINT `Komentar_id_akun_fkey` FOREIGN KEY (`id_akun`) REFERENCES `Akun`(`id_akun`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Komentar` ADD CONSTRAINT `Komentar_id_berita_fkey` FOREIGN KEY (`id_berita`) REFERENCES `Berita`(`id_berita`) ON DELETE RESTRICT ON UPDATE CASCADE;
