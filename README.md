# 王帅 · AI 产品经理 · 金融大模型 — 个人作品集

一个使用 **React + Vite + TypeScript + Tailwind CSS + Framer Motion** 搭建的暗色系个人作品集网站。

## 特性

- ⚡️ **Vite 8** + **React 19** + **TypeScript 6** — 极速冷启动与构建
- 🎨 **Tailwind CSS 3** — 暗色主题、薄荷绿强调色
- 🎬 **Framer Motion** — 滚动入场、磁性按钮、计数动画、移动端汉堡菜单
- 📱 **响应式** — 桌面 / 平板 / 手机三端适配
- 🚀 **零配置部署** — 静态构建产物 (`dist/`) 可部署到任何静态托管
- ♿ **可访问性** — `prefers-reduced-motion` 自动降级、键盘焦点环、语义化标签

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 生产构建（输出到 dist/）
npm run build

# 本地预览构建产物
npm run preview
```

## 目录结构

```
src/
├── components/
│   ├── layout/      # 导航、底部
│   ├── hero/        # 全屏 Hero
│   ├── about/       # 个人经历
│   ├── projects/    # 精选项目
│   ├── advantages/  # 个人优势
│   ├── contact/     # 联系方式
│   └── ui/          # 通用 UI 原子
├── data/            # 📝 文案集中地（修改这里即可换内容）
│   ├── profile.ts
│   ├── projects.ts
│   ├── advantages.ts
│   └── nav.ts
├── hooks/           # 自定义 hooks
├── lib/             # 工具函数、常量
├── App.tsx          # 主装配
├── main.tsx
└── index.css        # Tailwind + 自定义工具类
```

## 替换内容

所有文案集中在 `src/data/*.ts`，按需修改：

- `profile.ts` — 姓名、标题、自我介绍、联系方式、工作经历、教育背景
- `projects.ts` — 精选项目（标题、描述、技术栈、亮点、图片路径）
- `advantages.ts` — 个人能力卡片
- `nav.ts` — 导航锚点

## 替换占位资源

| 资源 | 路径 | 说明 |
|---|---|---|
| Hero 视频 | `public/hero-bg.mp4` | MP4，<5MB 推荐。删除则使用渐变兜底背景 |
| Hero 封面 | `public/hero-poster.jpg` | 视频加载前的占位图 |
| 头像 | `public/avatar.jpg` | 可选，About 模块当前使用首字母 SVG 占位 |
| 项目图 1-4 | `public/projects/project-{1..4}.svg` | 4 张项目大图 |
| Favicon | `public/favicon.svg` | 当前为首字母 "W" |
| 噪点 | `public/noise.svg` | 不可见装饰，可保持原样 |

## 自定义主题

`tailwind.config.js` 中可调整：

- `colors.bg.*` / `colors.ink.*` / `colors.accent.*` — 配色
- `fontFamily` — 字体（默认 Space Grotesk + Inter + JetBrains Mono）
- `fontSize` — 流体字号
- `keyframes` / `animation` — 动画

## 部署

### 部署到根域名（推荐）

修改 `vite.config.ts`：

```ts
base: '/',
```

构建后上传 `dist/` 全部内容到任意静态托管：

- **Vercel**：`vercel --prod`
- **Netlify**：拖拽 `dist/` 到 https://app.netlify.com/drop
- **GitHub Pages**：上传 `dist/` 到 `gh-pages` 分支
- **腾讯云 / 阿里云 OSS**：开启静态网站托管，上传 `dist/`
- **Nginx**：复制 `dist/` 到 `/usr/share/nginx/html/`

### 部署到子路径

保持 `vite.config.ts` 中 `base: './'`，构建后可放在任意子目录下访问。

### 部署前自检

```bash
npm run build
npm run preview  # 在浏览器中访问 http://localhost:4173 验证
```

## 浏览器支持

- Chrome / Edge / Safari / Firefox 最近 2 个大版本
- 移动端 iOS Safari 14+ / Android Chrome 90+

## 后续迭代建议

1. 替换 `public/projects/` 中的占位图为真实产品截图
2. 在 `public/hero-bg.mp4` 放一段抽象科技视频（推荐 Coverr.co 下载）
3. 修改 `src/data/profile.ts` 中 `intro` 段落为最新自我介绍
4. 在 `index.html` 的 `<meta>` 中更新 `og:image`
5. 修改 `SITE.url` 在 `src/lib/constants.ts` 中
