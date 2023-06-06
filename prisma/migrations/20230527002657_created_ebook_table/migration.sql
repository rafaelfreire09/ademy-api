-- CreateTable
CREATE TABLE `Ebooks` (
    `EbookID` INTEGER NOT NULL AUTO_INCREMENT,
    `Title` VARCHAR(191) NOT NULL,
    `Slug` VARCHAR(191) NOT NULL,
    `Image` VARCHAR(191) NOT NULL,
    `Author` VARCHAR(191) NOT NULL,
    `Price` DOUBLE NOT NULL,
    `Description` TEXT NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Ebooks_Slug_key`(`Slug`),
    PRIMARY KEY (`EbookID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
