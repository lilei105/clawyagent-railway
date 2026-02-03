# ClawyAgent - Railway Project

这是一个简单的全栈应用示例，可以部署到Railway

## 项目结构

```
clawyagent-railway/
├── server.js          # Express.js 后端
├── database.js        # PostgreSQL 数据库连接
├── public/            # 前端静态文件
│   ├── index.html
│   └── styles.css
├── package.json        # 依赖配置
└── railway.toml       # Railway 配置文件（可选）
```

## 技术栈

- **后端**: Node.js + Express.js
- **数据库**: PostgreSQL (Railway自带免费实例)
- **前端**: 原生HTML/CSS
- **部署**: Railway (Docker + PostgreSQL)

## 功能

1. 数据库连接测试
2. 简单的API端点
3. 静态网页托管
4. 环境变量管理

## 部署到Railway

不需要API Key！只需连接GitHub即可。
