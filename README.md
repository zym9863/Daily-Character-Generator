[English Version](./README_EN.md)

# 今日份人设生成器

一个基于 React + TypeScript + Vite 的简洁网页应用，随机生成有趣的人物设定（性格、爱好、职业、特质），适合写作灵感、角色扮演等场景。

## ✨ 主要功能
- 一键生成全新的人物设定
- 展示性格、爱好、职业、特质等属性
- 简洁美观的前端界面，支持渐变背景和卡片样式

## 🛠️ 技术栈
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) 极速开发环境

## 🚀 快速开始
1. 安装依赖：
   ```bash
   npm install
   ```
2. 启动开发服务器：
   ```bash
   npm run dev
   ```
3. 打开浏览器访问 `http://localhost:5173` 即可体验。

## 📁 项目结构简述
```
src/
├── App.tsx              # 主页面组件，包含核心逻辑和UI
├── App.css              # 页面样式文件
├── data/
│   └── characterData.json   # 人设数据源
├── utils/
│   └── characterGenerator.ts # 随机人设生成逻辑
├── main.tsx             # 入口文件
```

## 📝 自定义与扩展
- 可在 `src/data/characterData.json` 中自定义人物设定库
- 样式可在 `src/App.css` 进行调整

---

如需反馈或建议，欢迎提 issue！
