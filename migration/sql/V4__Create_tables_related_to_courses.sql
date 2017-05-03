-- ************************************
-- Basic Information
-- ************************************
CREATE TABLE `uxguide`.`states` (
    `stateId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `koreanName` VARCHAR(50) DEFAULT NULL COMMENT '도시 한글 이름',
    `englishName` VARCHAR(50) NOT NULL COMMENT '도시 영문 이름',
    `countryId` BIGINT NOT NULL COMMENT '국가 ID',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`stateId`)
) COMMENT = '도시 정보';

CREATE TABLE `uxguide`.`artists` (
    `artistId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `imageId` BIGINT DEFAULT NULL COMMENT '작가 이미지',
    `countryId` BIGINT NOT NULL COMMENT '국가 ID',
    `koreanName` VARCHAR(100) DEFAULT NULL COMMENT '작가 한글 이름',
    `englishName` VARCHAR(100) NOT NULL COMMENT '작가 영문 이름',
    `birthday` VARCHAR(20) DEFAULT NULL COMMENT '탄생일',
    `deathday` VARCHAR(20) DEFAULT NULL COMMENT '사망일',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`artistId`)
) COMMENT = '작가 정보';

CREATE TABLE `uxguide`.`locations` (
    `locationId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `koreanName` VARCHAR(100) DEFAULT NULL COMMENT '위치 한글 이름',
    `englishName` VARCHAR(100) DEFAULT NULL COMMENT '위치 영문 이름',
    `zipCode` VARCHAR(10) NOT NULL COMMENT '우편번호',
    `address` VARCHAR(255) NOT NULL COMMENT '주소',
    `lat` DOUBLE NOT NULL COMMENT '위도',
    `lng` DOUBLE NOT NULL COMMENT '경도',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`locationId`)
) COMMENT = '위치 정보';

-- ************************************
-- Course
-- ************************************
CREATE TABLE `uxguide`.`courses` (
    `courseId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `stateId` BIGINT NOT NULL COMMENT '도시 ID',
    `prelistenVoiceId` BIGINT NOT NULL COMMENT '미리듣기 음성 ID',
    `mapImageId` BIGINT NOT NULL COMMENT '맵 이미지 ID',
    `guideId` BIGINT NOT NULL COMMENT '가이드 ID',
    `title` VARCHAR(200) NOT NULL COMMENT '코스 타이틀(이름)',
    `price` BIGINT DEFAULT 0 COMMENT '코스 가격',
    `totRunningTime` BIGINT DEFAULT 0 COMMENT '총 음성 시간',
    `avgStarPoint` DOUBLE DEFAULT 0.0 COMMENT '코스 평균 Star 점수',
    `totLikeCount` BIGINT DEFAULT 0 COMMENT '코스 전체 Like 수',
    `description` TEXT(4000) DEFAULT NULL COMMENT '코스 설명',
    `enableStatus` VARCHAR(30) NOT NULL DEFAULT 'ACTIVE' COMMENT '코스 상태(ACTIVE,INACTIVE)',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`courseId`)
) COMMENT = '코스 정보';

CREATE TABLE `uxguide`.`course_images` (
    `courseImageId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `courseId` BIGINT NOT NULL COMMENT '코스 ID',
    `imageId` BIGINT NOT NULL COMMENT '이미지 ID',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`courseImageId`),
    UNIQUE KEY (`courseId`, `imageId`)
) COMMENT = '코스 이미지 정보';

CREATE TABLE `uxguide`.`course_spots` (
    `courseSpotId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `courseId` BIGINT NOT NULL COMMENT '코스 ID',
    `spotId` BIGINT NOT NULL COMMENT '장소 ID',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`courseSpotId`),
    UNIQUE KEY (`courseId`, `spotId`)
) COMMENT = '코스 장소 정보';

CREATE TABLE `uxguide`.`hash_tags` (
    `hashTagId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `courseId` BIGINT NOT NULL COMMENT '코스 ID',
    `tagName` VARCHAR(20) NOT NULL COMMENT '테그 이름',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`hashTagId`)
) COMMENT = '해쉬 테그 정보';

CREATE TABLE `uxguide`.`course_purchases` (
    `coursePurchaseId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `userId` BIGINT NOT NULL COMMENT '사용자 ID',
    `courseId` BIGINT NOT NULL COMMENT '코스 ID',
    `playStartedAt` DATETIME DEFAULT NULL COMMENT '유효기간',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`coursePurchaseId`),
    UNIQUE KEY (`userId`, `courseId`)
) COMMENT = '코스 구매 정보';

CREATE TABLE `uxguide`.`courses_log` (
    `courseLogId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `courseId` BIGINT NOT NULL COMMENT '코스 ID',
    `userId` BIGINT DEFAULT NULL COMMENT '사용자 ID',
    `logType` VARCHAR(30) NOT NULL COMMENT 'Log 종류(PLAY_CHECK,STAR_POINT)',
    `playCheck` INT NOT NULL DEFAULT 0 COMMENT 'play 여부(0,1)',
    `starPoint` FLOAT NOT NULL DEFAULT 0.0 COMMENT 'star 점수',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`courseLogId`)
) COMMENT = '코스 Log';

-- ************************************
-- Spot
-- ************************************
CREATE TABLE `uxguide`.`spots` (
    `spotId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `artistId` BIGINT DEFAULT NULL COMMENT '작가 ID',
    `voiceId` BIGINT DEFAULT NULL COMMENT '음성 ID',
    `locationId` BIGINT NOT NULL COMMENT '위치 ID',
    `koreanName` VARCHAR(200) DEFAULT NULL COMMENT '지점 한글 이름',
    `englishName` VARCHAR(200) NOT NULL COMMENT '지점 영문 이름',
    `description` TEXT(4000) DEFAULT NULL COMMENT '지점 설명',
    `spotType` VARCHAR(30) NOT NULL DEFAULT 'BUILDING' COMMENT '지점 타입(BUILDING, ART)',
    `enableStatus` VARCHAR(30) NOT NULL DEFAULT 'ACTIVE' COMMENT '지점 상태(ACTIVE,INACTIVE)',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`spotId`)
) COMMENT = '지점 정보';

CREATE TABLE `uxguide`.`spot_images` (
    `spotImageId` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `spotId` BIGINT NOT NULL COMMENT '지점 ID',
    `imageId` BIGINT NOT NULL COMMENT '이미지 ID',
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정 일시',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
    PRIMARY KEY (`spotImageId`),
    UNIQUE KEY (`spotId`, `imageId`)
) COMMENT = '지점 이미지 정보';
