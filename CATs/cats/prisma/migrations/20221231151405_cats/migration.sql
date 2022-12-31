-- CreateTable
CREATE TABLE `Feed` (
    `email` VARCHAR(191) NOT NULL,
    `catname` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `imgUrl` VARCHAR(191) NULL,

    UNIQUE INDEX `Feed_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
