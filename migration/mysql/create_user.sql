-- 유저생성
CREATE USER 'succeednicely'@'%' IDENTIFIED BY 'failnicely';

USE mysql;

-- DB 별 권한 부여
GRANT DELETE ON unexpectedguide.* TO 'succeednicely'@'%';
GRANT INSERT ON unexpectedguide.* TO 'succeednicely'@'%';
GRANT SELECT ON unexpectedguide.* TO 'succeednicely'@'%';
GRANT UPDATE ON unexpectedguide.* TO 'succeednicely'@'%';

-- 마무리
FLUSH PRIVILEGES;
