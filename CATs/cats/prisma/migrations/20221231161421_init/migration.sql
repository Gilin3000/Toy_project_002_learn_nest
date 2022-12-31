-- CreateTable
CREATE TABLE `Cat` (
    `email` VARCHAR(191) NOT NULL,
    `catname` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `imgUrl` VARCHAR(191) NULL,
    `create` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Cat_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
