CREATE TABLE `unexpectedguide`.`arts` (
    `artId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `koreanName` VARCHAR(200) DEFAULT NULL COMMENT '작품 한글 이름',
    `englishName` VARCHAR(200) NOT NULL COMMENT '작품 영문 이름',
    `artistId` BIGINT DEFAULT NULL COMMENT '작가 ID',
    `thumbImageId` BIGINT DEFAULT NULL COMMENT '썸네일 이미지 ID',
    `description` TEXT(4000) DEFAULT NULL COMMENT '작품 설명',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`artId`)
) COMMENT = '작품 정보';

CREATE TABLE `unexpectedguide`.`artists` (
    `artistId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `koreanName` VARCHAR(100) DEFAULT NULL COMMENT '작가 한글 이름',
    `englishName` VARCHAR(100) NOT NULL COMMENT '작가 영문 이름',
    `imageId` BIGINT DEFAULT NULL COMMENT '작가 이미지',
    `countryId` BIGINT NOT NULL COMMENT '국가 ID',
    `birthday` VARCHAR(20) DEFAULT NULL COMMENT '탄생일',
    `deathday` VARCHAR(20) DEFAULT NULL COMMENT '사망일',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`artistId`)
) COMMENT = '작가 정보';

CREATE TABLE `unexpectedguide`.`voices` (
    `voiceId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `url` VARCHAR(2083) NOT NULL COMMENT '음성 URL',
    `artId` BIGINT NOT NULL COMMENT '작품 ID',
    `docentId` BIGINT NOT NULL COMMENT '도슨트 ID',
    `price` BIGINT DEFAULT 0 COMMENT '음성 가격',
    `avgStarPoint` DOUBLE DEFAULT 0.0 COMMENT '음성 평균 Star 점수',
    `totLikeCount` BIGINT DEFAULT 0 COMMENT '음성 전체 Like 수',
    `description` TEXT(4000) DEFAULT NULL COMMENT '음성 설명',
    `enableStatus` VARCHAR(30) NOT NULL DEFAULT 'ACTIVE' COMMENT '음성 상태(ACTIVE,INACTIVE)',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`voiceId`)
) COMMENT = '음성 정보';

CREATE TABLE `unexpectedguide`.`voices_log` (
    `voiceLogId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `voiceId` BIGINT NOT NULL COMMENT '음성 ID',
    `logType` VARCHAR(30) NOT NULL COMMENT 'Log 종류(PLAY_CHECK,STAR_POINT)',
    `playCheck` INT NOT NULL DEFAULT 0 COMMENT 'play 여부(0,1)',
    `starPoint` FLOAT NOT NULL DEFAULT 0.0 COMMENT 'star 점수',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`voiceLogId`)
) COMMENT = '음성 Log';

CREATE TABLE `unexpectedguide`.`images` (
    `imageId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `url` VARCHAR(2083) NOT NULL COMMENT '이미지 url',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`imageId`)
) COMMENT = '이미지 정보';

CREATE TABLE `unexpectedguide`.`art_images_map` (
    `artImageMapId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `artId` BIGINT NOT NULL COMMENT '작품 ID',
    `imageId` BIGINT NOT NULL COMMENT '이미지 ID',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`artImageMapId`),
    UNIQUE KEY (`artId`, `imageId`)
) COMMENT = '작품과 이미지 간 맵핑 테이블';

CREATE TABLE `unexpectedguide`.`users` (
    `userId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `name` VARCHAR(200) NOT NULL COMMENT '사용자 이름',
    `imageId` BIGINT DEFAULT NULL COMMENT '사용자 이미지',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`userId`)
) COMMENT = '사용자 정보';

CREATE TABLE `unexpectedguide`.`voice_purchases` (
    `voicePurchaseId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `userId` BIGINT NOT NULL COMMENT '사용자 ID',
    `voiceId` BIGINT NOT NULL COMMENT '음성 ID',
    `playStartedAt` DATETIME DEFAULT NULL COMMENT '유효기간',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`voicePurchaseId`),
    UNIQUE KEY (`userId`, `voiceId`)
) COMMENT = '음성 구매 정보';

CREATE TABLE `unexpectedguide`.`docents_log` (
    `docentLogId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `docentId` BIGINT NOT NULL COMMENT '도슨트 ID',
    `logType` VARCHAR(30) NOT NULL COMMENT 'Log 종류(LIKE_CHECK,STAR_POINT)',
    `likeCheck` INT NOT NULL DEFAULT 0 COMMENT 'like 여부(0,1)',
    `starPoint` FLOAT NOT NULL DEFAULT 0.0 COMMENT 'star 점수',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`docentLogId`)
) COMMENT = '도슨트 Log';

CREATE TABLE `unexpectedguide`.`countries` (
    `countryId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `koreanName` VARCHAR(50) DEFAULT NULL COMMENT '국가 한글 이름',
    `englishName` VARCHAR(50) NOT NULL COMMENT '국가 영문 이름',
    `countryCode` VARCHAR(5) NOT NULL COMMENT '국가 코드(IT,FR 등)',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`countryId`)
) COMMENT = '국가 정보';

CREATE TABLE `unexpectedguide`.`copyrights` (
    `copyrightId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `countryId` BIGINT NOT NULL COMMENT '국가 ID',
    `period` INT NOT NULL COMMENT '저작권 유효기간',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`copyrightId`)
) COMMENT = '저작권 정보';