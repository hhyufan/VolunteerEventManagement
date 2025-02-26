# 志愿者资源管理系统

这是一个基于 **Spring Boot** + **MyBatis** 的后端和 **React** 的前端的志愿者管理系统。该项目使用了 **Axios** 进行 HTTP 请求，**Material-UI** 进行 UI 组件展示，后端使用了 **MySQL** 数据库，通过 MyBatis 进行数据访问，使用 **Maven** 管理项目依赖，**Tomcat** 作为应用服务器，**Lombok** 简化 Java 代码，**Log4j** 用于日志记录。

## 项目结构

### 前端：

- **React** + **Vite**
- **Axios** 进行 API 调用
- **Material-UI** 进行 UI 组件展示

### 后端：

- **Spring Boot** + **MyBatis**
- **Maven** 管理依赖
- **Tomcat** 作为服务器
- **MySQL** 数据库
- **Lombok** 简化 Java 代码
- **Log4j** 进行日志记录

## 功能特性

- 查看志愿者列表
- 添加新志愿者
- 编辑志愿者信息
- 删除志愿者

## 前端设置

### 安装依赖

确保您已经安装了 Node.js 和 npm。然后在项目的前端目录下运行：

```bash
npm install
```

### 运行开发服务器

在项目的前端目录下运行以下命令启动开发服务器：

```bash
npm run dev
```

### 构建项目

运行以下命令构建项目：

```bash
npm run build
```

## 后端设置

### 环境要求

- Java 8 或更高版本
- Apache Maven
- MySQL 数据库
- Tomcat 服务器

### 数据库设置

创建数据库和表：

```sql
CREATE DATABASE volunteer CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE volunteer;
CREATE TABLE Volunteer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL
);
```

插入初始数据：

```sql
INSERT INTO Volunteer (name, email, phone) VALUES 
('张三', 'zhangsan@example.com', '13800138000'), 
('李四', 'lisi@example.com', '13900139000'), 
('王五', 'wangwu@example.com', '13700137000');
```

### 配置文件

在 `src/main/resources` 中创建 `application.properties` 文件，配置数据库连接信息：

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/volunteer?useUnicode=true&characterEncoding=utf8mb4
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

### 编译和部署

使用 Maven 编译项目：

```bash
mvn clean install
```

将生成的 WAR 文件部署到 Tomcat 的 `webapps` 目录。

### 启动服务器

启动 Tomcat 服务器，访问 `http://localhost:8080/` 查看应用。

## 日志记录

项目使用 Log4j 进行日志记录。确保在 `src/main/resources` 中有 `log4j2.xml` 配置文件，配置日志输出。

## 注意事项

- **数据库配置**：确保 `application.properties` 文件中的数据库连接信息正确。
- **编码**：确保所有文件使用 UTF-8 编码，以避免字符显示问题。
- **依赖管理**：确保 Maven 和 npm 依赖正确安装。
- **日志配置**：确保 Log4j 配置文件存在并正确配置。

## 许可证

本项目使用 MIT 许可证。详情请参阅 LICENSE 文件。

## 开发者指南

### 前端开发

- **组件开发**：前端组件位于 `src/components` 目录下，确保新组件的命名和风格一致。
- **状态管理**：使用 React 的 `useState` 和 `useEffect` 钩子进行状态管理。
- **样式**：CSS 样式文件位于 `src/styles` 目录下，可以使用 CSS-in-JS 或 CSS 模块。

### 后端开发

- **Controller**：控制器文件位于 `src/main/java/com/example/controller` 目录下，确保每个控制器的 URL 映射正确。
- **Service**：服务层文件位于 `src/main/java/com/example/service` 目录下，处理业务逻辑。
- **Mapper**：数据访问层文件位于 `src/main/java/com/example/mapper` 目录下，使用 MyBatis 进行数据库操作。

## 常见问题解决

- **数据库连接失败**：检查 `application.properties` 文件的配置是否正确，并确保 MySQL 服务正在运行。
- **前端编译失败**：确保 Node.js 和 npm 版本兼容，检查 `package.json` 中的依赖是否正确安装。
- **Tomcat 启动失败**：检查 Tomcat 端口是否被占用，检查 WAR 文件是否部署正确。
