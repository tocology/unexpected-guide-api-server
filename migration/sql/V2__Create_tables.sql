CREATE TABLE `uxguide`.`prevoices` (
    `prevoiceId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `userId` BIGINT NOT NULL COMMENT '사용자 ID',
    `artName` VARCHAR(200) NOT NULL COMMENT '작품 이름',
    `artistName` VARCHAR(100) DEFAULT NULL COMMENT '작가 이름',
    `address` VARCHAR(500) DEFAULT NULL COMMENT '주소',
    `zipCode` VARCHAR(10) DEFAULT NULL COMMENT '우편 번호',
    `description` TEXT(4000) DEFAULT NULL COMMENT '음성 설명',
    `price` BIGINT DEFAULT 0 COMMENT '음성 가격',
    `url` VARCHAR(2083) NOT NULL COMMENT '음성 URL',
    `prevoiceStatus` VARCHAR(30) NOT NULL DEFAULT 'PENDING' COMMENT '예비음성 상태(PENDING, REGISTERED, ...)',
    `prevoiceType` VARCHAR(30) NOT NULL COMMENT '예비음성 타입(ART, PLACE, ...)',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`prevoiceId`)
) COMMENT = '예비음성 정보';

CREATE TABLE `uxguide`.`users` (
    `userId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `uid` VARCHAR(200) NOT NULL COMMENT '사용자 uid',
    `userName` VARCHAR(200) NOT NULL COMMENT '사용자 이름',
    `email` VARCHAR(200) NOT NULL COMMENT '사용자 email',
    `imageId` BIGINT DEFAULT NULL COMMENT '사용자 이미지',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`userId`)
) COMMENT = '사용자 정보';

CREATE TABLE `uxguide`.`voices` (
    `voiceId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `url` VARCHAR(2083) NOT NULL COMMENT '음성 URL',
    `voiceName` VARCHAR(200) NOT NULL COMMENT '음성 이름',
    `guideId` BIGINT NOT NULL COMMENT '가이드 ID',
    `price` BIGINT DEFAULT 0 COMMENT '음성 가격',
    `runningTime` BIGINT DEFAULT 0 COMMENT '음성 시간',
    `avgStarPoint` DOUBLE DEFAULT 0.0 COMMENT '음성 평균 Star 점수',
    `totLikeCount` BIGINT DEFAULT 0 COMMENT '음성 전체 Like 수',
    `description` TEXT(4000) DEFAULT NULL COMMENT '음성 설명',
    `enableStatus` VARCHAR(30) NOT NULL DEFAULT 'ACTIVE' COMMENT '음성 상태(ACTIVE,INACTIVE)',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`voiceId`)
) COMMENT = '음성 정보';

CREATE TABLE `uxguide`.`voice_images` (
    `voiceImageId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `voiceId` BIGINT NOT NULL COMMENT '음성 ID',
    `imageId` BIGINT NOT NULL COMMENT '이미지 ID',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`voiceImageId`),
    UNIQUE KEY (`voiceId`, `imageId`)
) COMMENT = '음성 이미지 정보';

CREATE TABLE `uxguide`.`voices_log` (
    `voiceLogId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `voiceId` BIGINT NOT NULL COMMENT '음성 ID',
    `userId` BIGINT DEFAULT NULL COMMENT '사용자 ID',
    `logType` VARCHAR(30) NOT NULL COMMENT 'Log 종류(PLAY_CHECK,STAR_POINT)',
    `playCheck` INT NOT NULL DEFAULT 0 COMMENT 'play 여부(0,1)',
    `starPoint` FLOAT NOT NULL DEFAULT 0.0 COMMENT 'star 점수',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`voiceLogId`)
) COMMENT = '음성 Log';

CREATE TABLE `uxguide`.`images` (
    `imageId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `url` VARCHAR(2083) NOT NULL COMMENT '이미지 url',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`imageId`)
) COMMENT = '이미지 정보';

CREATE TABLE `uxguide`.`guides_log` (
    `guideLogId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `guideId` BIGINT NOT NULL COMMENT '가이드 ID',
    `logType` VARCHAR(30) NOT NULL COMMENT 'Log 종류(LIKE_CHECK,STAR_POINT)',
    `likeCheck` INT NOT NULL DEFAULT 0 COMMENT 'like 여부(0,1)',
    `starPoint` FLOAT NOT NULL DEFAULT 0.0 COMMENT 'star 점수',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`guideLogId`)
) COMMENT = '가이드 Log';

CREATE TABLE `uxguide`.`countries` (
    `countryId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `koreanName` VARCHAR(50) DEFAULT NULL COMMENT '국가 한글 이름',
    `englishName` VARCHAR(50) NOT NULL COMMENT '국가 영문 이름',
    `countryCode` VARCHAR(5) NOT NULL COMMENT '국가 코드(IT,FR 등)',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`countryId`)
) COMMENT = '국가 정보';

CREATE TABLE `uxguide`.`copyrights` (
    `copyrightId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `countryId` BIGINT NOT NULL COMMENT '국가 ID',
    `period` INT NOT NULL COMMENT '저작권 유효기간',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`copyrightId`)
) COMMENT = '저작권 정보';