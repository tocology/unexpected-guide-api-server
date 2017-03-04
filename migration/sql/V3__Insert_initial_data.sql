INSERT INTO users(userId, name, imageId) VALUES
(1, '김윤희', 1),
(2, '진형탁', 2),
(3, '조형재', 3),
(4, '황준호', 4),
(5, '안소연', null);

INSERT INTO arts(artId, koreanName, englishName, artistId, thumbImageId, description) VALUES
(1, '스테파네스키 세폭 제단화', 'The Stefaneschi Triptych', 1, 10, '추기경 스테파네스키의 주문으로 세 폭 제단화를 제작한다. 이 제단화는 처음에 바티칸의 옛 성 베드로 성당의 제단화로 사용되다가 현재는 바티칸 박물관 내 회화관에 소장되어 있다. 제단화 앞면 중앙 패널에는 옥좌에 앉은 예수님이, 양쪽 패널에는 각각 성 베드로와 성 바오로의 순교 장면이 묘사되어 있다.'),
(2, '그리스도의 변용', 'The Transfiguration', 2, 11, '타보르산에서 있었던 예수 그리스도의 거룩한 변모를 소재로 한 이 그림은 세 부분으로 나누어 볼 수 있다. 그림의 윗부분에는 예수 그리스도와 모세, 엘리야가 그려져 있는데, 환상적인 조용함과 정숙함으로 성서의 말씀대로 하나님의 음성을 느낄 수 있도록 표현되어 있다. 가운뎃부분에는 예수 그리스도의 제자들이 놀라는 모습과 경탄하는 모습을 그렸으며, 그 아랫부분에는 세상 사람들의 갈등과 혼돈을 표현하고 있다.'),
(3, '광야의 성 히에로니무스', 'St. Jerome in the Wilderness', 3, 12, '참회하는 수행자의 모습을 그린 <광야의 성 히에로니무스> 아시아 최초로 소개되는 레오나르도 다 빈치의 <광야의 성 히에로니무스>는 예술사에서 가장 수수께끼 같은 그림 가운데 하나다. 단색화의 이 목판은 성 히에로니무스의 모습을 담고 있는데, 은수자 히에로니무스는 기도하는 자세로 땅에 무릎을 꿇은 채 오른손에 돌을 쥐고서 왼손으로 가리키는 가슴을 치고 있다. 옷도 입지않고 추기경 모자는 땅에 버려져 있는데 이는 세상 명예를 버렸음을 상징한다. 성인 곁에는 자주 사자가 등장하는데, 히에로니무스가 사자의 발에 박힌 가시를 빼주었더니 고마움을 잊지 못하여 늘 따라다녔다고 한다.');

INSERT INTO art_images_map(artImageMapId, artId, imageId) VALUES
(1, 1, 1000),
(2, 1, 1001);

INSERT INTO artists(artistId, koreanName, englishName, imageId, countryId, birthday, deathday) VALUES
(1, '조토 디 본도네', 'Giotto di Bondone', 100, 1, '1267-99-99', '1337-01-08'),
(2, '라파엘로 산치오 다 우르비노', 'Raffaello Sanzio da Urbino', 101, 1, '1483-04-06', '1520-04-06'),
(3, '레오나르도 디 세르 피에로 다 빈치', 'Leonardo di ser Piero da Vinci', 102, 1, '1452-04-15', '1519-05-02');

INSERT INTO voices(voiceId, url, artId, docentId, price, avgStarPoint, totLikeCount, description, enableStatus) VALUES
(1, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/voice/voice_01.mp3', 1, 1, 500, 4.8, 131,  '역사적 설명에 기반한 작품으로 떠나는 여행', 'ACTIVE'),
(2, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/voice/voice_01.mp3', 1, 1, 1000, 4.6, 192, '숨겨두었던 스토리를 들을 수 있는 기회', 'ACTIVE'),
(3, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/voice/voice_01.mp3', 1, 2, 1000, 4.2, 204, '안녕하세요. 도슨트 조형재입니다. 지금 바로 시작합니다.', 'ACTIVE'),
(4, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/voice/voice_01.mp3', 1, 2, 1200, 4.9, 41, '도슨트 황준호입니다. 과거로 떠나는 여행, 제단화의 숨겨진 비밀을 알려드립니다.', 'ACTIVE'),
(5, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/voice/voice_02.mp3', 1, 3, 700, 4.7, 502, '스테파네스키는 어떤 내용을 숨기고 있을까요? 답을 알려드립니다.', 'ACTIVE'),
(6, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/voice/voice_02.mp3', 1, 3, 800, 4.1, 255, '20년동안 이 이야기를 다뤄왔습니다. 함께 떠나세요.', 'ACTIVE'),
(7, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/voice/voice_02.mp3', 1, 4, 1400, 5.0, 1, '도슨트 황준호입니다.', 'ACTIVE'),
(8, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/voice/voice_02.mp3', 1, 4, 500, 0.0, 0, '', 'ACTIVE'),
(9, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/voice/voice_02.mp3', 1, 1, 700, 4.5, 24, null, 'ACTIVE'),
(10, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/voice/voice_02.mp3', 1, 1, 900, 5.0, 2, '', 'ACTIVE');

INSERT INTO countries(countryId, koreanName, englishName, countryCode) VALUES
(1, '이탈리아', 'Italy', 'IT');

INSERT INTO images(imageId, url) VALUES
(1, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/docent_image/joy.png'),
(2, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/docent_image/tak.png'),
(3, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/docent_image/curl.png'),
(4, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/docent_image/camry.png'),
(10, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/art_image/vatican_image_1.jpg'),
(11, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/art_image/vatican_image_2.jpg'),
(12, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/art_image/vatican_image_3.jpg'),
(100, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/artist_image/giotto_di_bondone.jpg'),
(101, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/artist_image/selfportrait_of_Raffaelo.jpg'),
(102, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/artist_image/leonardo_da_vinci.jpg'),
(1000, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/art_image/vatican_image_4.jpg'),
(1001, 'https://s3.ap-northeast-2.amazonaws.com/unexpectedguide/art_image/vatican_image_5.jpg');

INSERT INTO voice_purchases(voicePurchaseId, userId, voiceId, playStartedAt) VALUES
(1, 1, 3, DATE_SUB(NOW(), INTERVAL 1 HOUR)),
(2, 1, 4, null),
(3, 3, 1, null),
(4, 3, 3, DATE_SUB(NOW(), INTERVAL 1 HOUR)),
(5, 5, 1, null),
(6, 5, 2, null);

