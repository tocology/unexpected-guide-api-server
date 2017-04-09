-- 유저생성
CREATE USER 'succeednicely'@'%' IDENTIFIED BY 'failnicely';

USE mysql;

-- DB 별 권한 부여
GRANT DELETE ON uxguide.* TO 'succeednicely'@'%';
GRANT INSERT ON uxguide.* TO 'succeednicely'@'%';
GRANT SELECT ON uxguide.* TO 'succeednicely'@'%';
GRANT UPDATE ON uxguide.* TO 'succeednicely'@'%';

-- 마무리
FLUSH PRIVILEGES;
