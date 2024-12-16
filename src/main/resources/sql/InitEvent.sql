-- 创建数据库并设置字符集为 utf8mb4
CREATE DATABASE IF NOT EXISTS volunteer CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 使用数据库
USE volunteer;

-- 如果表存在则删除
DROP TABLE IF EXISTS Event;

-- 创建表，使用 utf8mb4 字符集
CREATE TABLE Event (
                       id INT PRIMARY KEY AUTO_INCREMENT,          -- id 自增
                       title VARCHAR(255) NOT NULL,                -- 活动标题，非空
                       date DATETIME NOT NULL,                     -- 活动日期，非空
                       location VARCHAR(255) NOT NULL,             -- 活动地点，非空
                       duration VARCHAR(50),                        -- 活动时长
                       content TEXT,                                -- 活动内容
                       attachmentLink VARCHAR(255),                 -- 附件链接
                       imageUrl VARCHAR(255)                        -- 图片链接
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 插入数据
INSERT INTO Event (title, date, location, duration, content, attachmentLink, imageUrl)
VALUES
    ('志愿者活动', '2024-01-01 10:00:00', '公园', '3小时', '新年志愿者活动，欢迎大家参与！', 'http://example.com/attachment1', 'http://example.com/image1.jpg'),
    ('社区清扫', '2024-01-15 09:00:00', '社区广场', '2小时', '定期的社区清扫活动，请大家踊跃参加。', 'http://example.com/attachment2', 'http://example.com/image2.jpg'),
    ('义务献血', '2024-02-01 08:00:00', '医院', '4小时', '参与义务献血活动，帮助需要帮助的人。', 'http://example.com/attachment3', 'http://example.com/image3.jpg');
