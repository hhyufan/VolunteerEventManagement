-- 创建数据库并设置字符集为 utf8mb4
CREATE DATABASE IF NOT EXISTS volunteer CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 使用数据库
USE volunteer;

-- 如果表存在则删除
DROP TABLE IF EXISTS event_record;

-- 创建表，使用 utf8mb4 字符集
CREATE TABLE event_record (
                                         id INT PRIMARY KEY AUTO_INCREMENT,          -- 记录的唯一标识符
                                         volunteer_id INT NOT NULL,                  -- 外键，指向志愿者
                                         event_id INT NOT NULL,                      -- 外键，指向活动
                                         completed BOOLEAN NOT NULL                 -- 活动是否完成         -- 外键约束
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- 插入数据
-- 插入志愿者活动记录
INSERT INTO event_record (volunteer_id, event_id, completed)
VALUES
    (1, 1, TRUE),  -- 志愿者 1 完成了活动 1
    (1, 2, FALSE),        -- 志愿者 1 没有完成活动 2
    (2, 1, TRUE),  -- 志愿者 2 完成了活动 1
    (3, 3, TRUE);  -- 志愿者 3 完成了活动 3
