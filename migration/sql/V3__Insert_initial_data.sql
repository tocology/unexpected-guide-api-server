INSERT INTO users(userId, uid, userName, email, imageId) VALUES
(1, 'test', '김윤희', 'test@test.com', 1),
(2, 'test', '진형탁', 'test@test.com', 2),
(3, 'BNLBXG35lBW8q71RHkV2FG4Fuk32', '조형재', 'jhj0108go@naver.com', 3),
(4, 'test', '황준호', 'test@test.com', 4),
(5, 'test', '안소연', 'test@test.com', null),
(6, 'kPZ6XQnbd3POcfNxqXCgOZePrsu2', '조형재', 'jhj12010@gmail.com', 3),
(7, '2vJ5zUyNYRWm6lbPgbP4kiNjwB73', 'Junho Hwang', 'hwangjun7777@gmail.com', 1002);

INSERT INTO voices(voiceId, url, guideId, price, avgStarPoint, totLikeCount, description, enableStatus) VALUES
(1, 'voice/voice_01.mp3', 1, 500, 4.8, 131,  '역사적 설명에 기반한 작품으로 떠나는 여행', 'ACTIVE'),
(2, 'voice/voice_01.mp3', 1, 1000, 4.6, 192, '숨겨두었던 스토리를 들을 수 있는 기회', 'ACTIVE'),
(3, 'voice/voice_01.mp3', 2, 1000, 4.2, 204, '안녕하세요. 가이드 조형재입니다. 지금 바로 시작합니다.', 'ACTIVE'),
(4, 'voice/voice_01.mp3', 2, 1200, 4.9, 41, '가이드 황준호입니다. 과거로 떠나는 여행, 제단화의 숨겨진 비밀을 알려드립니다.', 'ACTIVE'),
(5, 'voice/voice_02.mp3', 3, 700, 4.7, 502, '스테파네스키는 어떤 내용을 숨기고 있을까요? 답을 알려드립니다.', 'ACTIVE'),
(6, 'voice/voice_02.mp3', 3, 800, 4.1, 255, '20년동안 이 이야기를 다뤄왔습니다. 함께 떠나세요.', 'ACTIVE'),
(7, 'voice/voice_02.mp3', 4, 1400, 5.0, 1, '가이드 황준호입니다.', 'ACTIVE'),
(8, 'voice/voice_02.mp3', 4, 500, 0.0, 0, '', 'ACTIVE'),
(9, 'voice/voice_02.mp3', 1, 700, 4.5, 24, null, 'ACTIVE'),
(10, 'voice/voice_02.mp3', 1, 900, 5.0, 2, '', 'ACTIVE');

INSERT INTO countries(countryId, koreanName, englishName, countryCode) VALUES
(1, '이탈리아', 'Italy', 'IT'),
(2, '프랑스', 'France', 'FR');

INSERT INTO images(imageId, url) VALUES
(1, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/user-image/joy.png'),
(2, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/user-image/tak.png'),
(3, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/user-image/curl.png'),
(4, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/user-image/camry.png'),
(10, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/art-image/vatican_image_1.jpg'),
(11, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/art-image/vatican_image_2.jpg'),
(12, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/art-image/vatican_image_3.jpg'),
(100, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/artist-image/giotto_di_bondone.jpg'),
(101, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/artist-image/selfportrait_of_Raffaelo.jpg'),
(102, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/artist-image/leonardo_da_vinci.jpg'),
(1000, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/art-image/vatican_image_4.jpg'),
(1001, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/art-image/vatican_image_5.jpg'),
(1002, 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg'),
(10001, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/course-image/1.jpg'),
(10002, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/course-image/2.jpg'),
(10003, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/course-image/3.jpg'),
(10004, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/course-image/4.jpg'),
(10005, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/course-image/5.jpg'),
(10006, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/course-image/6.jpg'),
(10007, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/course-image/7.jpg'),
(10008, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/course-image/8.jpg'),
(10009, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/course-image/9.jpg'),
(10010, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/course-image/10.jpg'),
(100001, 'https://s3.ap-northeast-2.amazonaws.com/unexpected-guide/course-image/1000.png');

INSERT INTO voice_purchases(voicePurchaseId, userId, voiceId, playStartedAt) VALUES
(1, 1, 3, DATE_SUB(NOW(), INTERVAL 1 HOUR)),
(2, 1, 4, null),
(3, 3, 1, null),
(4, 3, 3, DATE_SUB(NOW(), INTERVAL 1 HOUR)),
(5, 5, 1, null),
(6, 5, 2, null),
(7, 6, 2, null),
(8, 7, 1, null);

INSERT INTO prevoices(prevoiceId, userId, artName, artistName, address, zipCode, description, price, url, prevoiceStatus, prevoiceType) VALUES
(1, 6, '불국사', null, '경상북도 경주시 진현동 15', '780-400', '한국 불교의 역사가 살아 숨쉬는 이곳의 스토리를 들려드려요', 500, 'voice/voice_02.mp3', 'PENDING', 'PLACE'),
(2, 7, '백제고분', null, '서울특별시 송파구 방이동 산47-4', '05629', '과연 이 고분의 주인공은 누구인가?', 500, 'voice/voice_02.mp3', 'REGISTERED', 'PLACE');