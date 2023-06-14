-- CreateTable
CREATE TABLE `_EbookToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_EbookToUser_AB_unique`(`A`, `B`),
    INDEX `_EbookToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_EbookToUser` ADD CONSTRAINT `_EbookToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Ebooks`(`EbookID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EbookToUser` ADD CONSTRAINT `_EbookToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `Users`(`UserID`) ON DELETE CASCADE ON UPDATE CASCADE;
