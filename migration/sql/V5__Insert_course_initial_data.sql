-- ************************************
-- Basic Information
-- ************************************
INSERT INTO states(stateId, koreanName, englishName, countryId) VALUES
(1, '파리', 'Paris', 2);

INSERT INTO artists(artistId, koreanName, englishName, imageId, countryId, birthday, deathday) VALUES
(1, '조토 디 본도네', 'Giotto di Bondone', 100, 1, '1267-99-99', '1337-01-08'),
(2, '라파엘로 산치오 다 우르비노', 'Raffaello Sanzio da Urbino', 101, 1, '1483-04-06', '1520-04-06'),
(3, '레오나르도 디 세르 피에로 다 빈치', 'Leonardo di ser Piero da Vinci', 102, 1, '1452-04-15', '1519-05-02');

INSERT INTO locations(locationId, koreanName, englishName, zipCode, address, lat, lng) VALUES
(1, null, 'Restaurant L\'Ange 20', '75004', '44 Rue des Tournelles', 48.856561, 2.366127),
(2, null, 'Chez Janou', '75003', '2 Rue Roger Verlomme', 48.856682, 2.367200),
(3, null, 'Le Petit Marché', '75003', '9 Rue de Béarn', 48.857268, 2.366041),
(4, null, 'Le Loir dans La Théière', '75004', '3 Rue des Rosiers', 48.856231, 2.360988),
(5, null, 'L’éclair de Génie', '75004', '14 Rue Pavée', 48.856188, 2.360698),
(6, '르브르 박물관', 'Louvre Museum', '75001', 'Rue de Rivoli', 48.860621, 2.337642);

-- ************************************
-- Courses
-- ************************************
INSERT INTO courses(courseId, stateId, prelistenVoiceId, mapImageId, routeImageId, guideId, title, price, buildingCount, artCount, restaurantCount, totRunningTime, avgStarPoint, totReviewCount, totLikeCount, totViewCount, description, enableStatus) VALUES
(1, 1, 1, 100001, 10010, 6, '조형재와 함께 떠나는 프랑스 맛집 투어', 5000, 1, 0, 4, 12000, 4.5, 5, 101, 204, '프랑스 하면 어떠오르는 맛집들? 뻔한 맛집보다는 현지인으로 살아가면서 느꼈던 감동을 전해드립니다.', 'ACTIVE'),
(2, 1, 1, 100001, 10010, 6, '조형재의 르브르 박물관 투어', 6000, 0, 5, 0, 12000, 4.7, 6, 88, 155, '르브르 박물관에서 꼭 봐야하는 게 있다면 이것들이 아닐까요? 저와 함께 떠나요!', 'ACTIVE');

INSERT INTO course_images(courseImageId, courseId, imageId) VALUES
(1, 1, 10001),
(2, 1, 10002),
(3, 1, 10003),
(4, 1, 10004),
(5, 1, 10005),
(6, 2, 10006),
(7, 2, 10007),
(8, 2, 10008),
(9, 2, 10009),
(10, 2, 10010);

INSERT INTO course_spots(courseSpotId, courseId, spotId) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 2, 10),
(7, 2, 11),
(8, 2, 12);

INSERT INTO hash_tags(hashTagId, courseId, tagName) VALUES
(1, 1, '파스타 맛집'),
(2, 1, '파리 먹방'),
(3, 1, '파리지앵'),
(4, 2, '르브르 박물관'),
(5, 2, '모나리자 친구들');

INSERT INTO course_reviews(courseReviewId, courseId, userId, starPoint, comments) VALUES
(1, 1, 1, 4.5, '우왕 굳'),
(2, 1, 2, 4.5, '우왕 굳'),
(3, 1, 3, 4.5, '우왕 굳'),
(4, 1, 4, 4.5, '우왕 굳'),
(5, 1, 5, 4.5, '우왕 굳'),
(6, 1, 6, 4.5, '우왕 굳'),
(7, 2, 1, 4.5, '우왕 굳'),
(8, 2, 2, 4.5, '우왕 굳'),
(9, 2, 3, 4.5, '우왕 굳'),
(10, 2, 4, 4.5, '우왕 굳'),
(11, 2, 5, 4.5, '우왕 굳');

INSERT INTO course_likes(courseLikeId, courseId, userId) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 4),
(5, 2, 5);

-- ************************************
-- Spot
-- ************************************
INSERT INTO spots(spotId, thumbImageId, artistId, voiceId, locationId, koreanName, englishName, description, spotType, enableStatus) VALUES
(1, 1, null, 1, 1, null, 'Restaurant L\'Ange 20', '봉골레가 맛있는 집(실은 나도 잘 몰라)', 'BUILDING', 'ACTIVE'),
(2, 1, null, 2, 2, null, 'Chez Janou', null, 'BUILDING', 'ACTIVE'),
(3, 1, null, 3, 3, null, 'Le Petit Marché', '크림파스타 맛집', 'BUILDING', 'ACTIVE'),
(4, 1, null, 4, 4, null, 'Le Loir dans La Théière', null, 'BUILDING', 'ACTIVE'),
(5, 1, null, 5, 5, null, 'L’éclair de Génie', '음식점인데 이상하게 환타가 제일 맛나', 'BUILDING', 'ACTIVE'),
(10, 1, 1, 6, 6, '스테파네스키 세폭 제단화', 'The Stefaneschi Triptych', '추기경 스테파네스키의 주문으로 세 폭 제단화를 제작한다. 이 제단화는 처음에 바티칸의 옛 성 베드로 성당의 제단화로 사용되다가 현재는 바티칸 박물관 내 회화관에 소장되어 있다. 제단화 앞면 중앙 패널에는 옥좌에 앉은 예수님이, 양쪽 패널에는 각각 성 베드로와 성 바오로의 순교 장면이 묘사되어 있다.', 'ART', 'ACTIVE'),
(11, 1, 2, 7, 6, '그리스도의 변용', 'The Transfiguration', '타보르산에서 있었던 예수 그리스도의 거룩한 변모를 소재로 한 이 그림은 세 부분으로 나누어 볼 수 있다. 그림의 윗부분에는 예수 그리스도와 모세, 엘리야가 그려져 있는데, 환상적인 조용함과 정숙함으로 성서의 말씀대로 하나님의 음성을 느낄 수 있도록 표현되어 있다. 가운뎃부분에는 예수 그리스도의 제자들이 놀라는 모습과 경탄하는 모습을 그렸으며, 그 아랫부분에는 세상 사람들의 갈등과 혼돈을 표현하고 있다.', 'ART', 'ACTIVE'),
(12, 1, 3, 8, 6, '광야의 성 히에로니무스', 'St. Jerome in the Wilderness', '참회하는 수행자의 모습을 그린 <광야의 성 히에로니무스> 아시아 최초로 소개되는 레오나르도 다 빈치의 <광야의 성 히에로니무스>는 예술사에서 가장 수수께끼 같은 그림 가운데 하나다. 단색화의 이 목판은 성 히에로니무스의 모습을 담고 있는데, 은수자 히에로니무스는 기도하는 자세로 땅에 무릎을 꿇은 채 오른손에 돌을 쥐고서 왼손으로 가리키는 가슴을 치고 있다. 옷도 입지않고 추기경 모자는 땅에 버려져 있는데 이는 세상 명예를 버렸음을 상징한다. 성인 곁에는 자주 사자가 등장하는데, 히에로니무스가 사자의 발에 박힌 가시를 빼주었더니 고마움을 잊지 못하여 늘 따라다녔다고 한다.', 'ART', 'ACTIVE');
