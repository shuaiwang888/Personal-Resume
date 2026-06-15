# 王帅 · AI 产品经理 · 金融大模型 — 个人作品集

一个使用 **React + Vite + TypeScript + Tailwind CSS + Framer Motion** 搭建的暗色系个人作品集网站。

**线上地址**: <https://shuaiwang888.github.io/Personal-Resume/>

---

## ✨ 特性

- ⚡️ **Vite 8** + **React 19** + **TypeScript 6** — 极速冷启动（~300ms）与构建（~400ms）
- 🎨 **Tailwind CSS 4**（CSS-first 配置）— 暗色主题、薄荷绿强调色,设计 token 全部以 CSS 变量声明在 `index.css` 的 `@theme` 中
- 🎬 **Framer Motion 12** — 滚动入场、磁性按钮、计数动画、移动端汉堡菜单
- 📊 **访问统计(后端)** — section 曝光、CTA 点击、外链跳转,实时落盘到 HF Dataset
- 📱 **响应式** — 桌面 / 平板 / 手机三端适配
- 🔒 **零 PII 泄漏** — 邮箱/手机走 env,源码与 dist 不出现明文
- ♿ **可访问性** — `prefers-reduced-motion` 自动降级、键盘焦点环、语义化标签
- 📦 **精简依赖** — 10 个 production dep,无 ESLint/PostCSS,无历史包袱

---

## 🏗️ 架构

本仓只装前端。后端在**同级目录**的独立 Git 仓 `Personal-Resume-Analytics/`:

```
/Users/appstore/AI-Code/提升项目/
├── Personal-Resume/          ← 本仓(前端,SPA,部署到 GitHub Pages)
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json         ← 已合并(原 3 个 tsconfig → 1 个)
│   └── package.json
│
└── Personal-Resume-Analytics/  ← 独立仓(后端,部署到 HuggingFace Space)
    ├── app/                  ← FastAPI 后端
    │   ├── main.py
    │   ├── config.py
    │   ├── models.py
    │   ├── storage.py        ← JSONL 落盘 + 60s 批量上传 HF Dataset
    │   ├── routes/           ← /api/events /api/stats /api/health
    │   └── core/             ← privacy / logging
    ├── Dockerfile
    ├── requirements.txt
    └── scripts/
        └── deploy-to-hf-space.sh
```

**端到端链路**:

```
浏览器 → shuaiwang888.github.io/Personal-Resume/  (静态 SPA)
       ↓ fetch /api/events
       ↓
HF Space appstoreqaq-personal-resume.hf.space    (FastAPI)
       ↓ 批量上传
       ↓
HF Dataset appStoreQAQ/Personal-Resume-Data       (JSONL 归档)
       ↑ GET /api/stats 实时聚合(读最近 7 天)
       ↑
浏览器 /api/stats 可视化(后续迭代)
```

详细后端 / 数据集 / CSP / 隐私策略,见 `USAGE.md`。

---

## 🚀 快速开始

```bash
# 安装依赖(165 MB,约 1 分钟)
npm install

# 启动开发服务器 — 默认 http://localhost:5173
npm run dev

# 生产构建 — 输出到 dist/(tsc 类型检查 + vite build,共约 400ms)
npm run build

# 本地预览构建产物 — http://localhost:4173
npm run preview

# 图片优化(头像多尺寸生成,prebuild 钩子自动跑)
npm run optimize:images
```

### 环境变量

复制 `.env.example` 为 `.env.local` 填值:

```env
# 联系方式(从 .env.local 注入,不入仓)
VITE_PUBLIC_EMAIL=you@example.com
VITE_PUBLIC_PHONE=+86-1XX-XXXX-XXXX

# 后端 base URL(本地留空 = 关埋点;生产填 HF Space URL)
VITE_API_BASE=
```

CI 走 GitHub Actions Secrets 注入,密钥路径: `Settings → Secrets and variables → Actions`。

---

## 📁 目录结构

```
src/
├── App.tsx                     # 主装配(顶层 useEffect 发 app_loaded)
├── main.tsx
├── index.css                   # Tailwind 4 @theme + 全局 base + 自定义 utility
│
├── components/
│   ├── layout/                 # 导航、底部
│   ├── hero/                   # 全屏 Hero(useSectionImpression('hero'))
│   ├── about/                  # 个人经历
│   ├── projects/               # 精选项目
│   ├── works/                  # 作品集(WorkCard 含 try_it CTA 埋点)
│   ├── advantages/             # 个人优势
│   ├── contact/                # 联系方式(mailto / tel / PDF 埋点)
│   └── ui/                     # 通用 UI 原子
│
├── data/                       # 📝 文案集中地(改这里就能换内容)
│   ├── profile.ts              # 含 PII,读取 import.meta.env
│   ├── projects.ts
│   ├── works.ts                # 5 个作品
│   ├── advantages.ts
│   ├── nav.ts
│   └── types.ts
│
├── hooks/
│   ├── useCountUp.ts           # 数字滚动动画
│   ├── useMediaQuery.ts        # 响应式断点
│   ├── useSectionImpression.ts # IntersectionObserver 曝光追踪
│   └── useTrackEvent.ts        # 任意时点触发事件
│
└── lib/
    ├── api.ts                  # trackEvent 统一入口(beacon / keepalive / fetch)
    ├── cn.ts                   # clsx + tailwind-merge
    └── constants.ts            # SITE / ANIMATION
```

---

## ✏️ 替换内容

所有文案集中在 `src/data/*.ts`:

| 文件 | 内容 |
|---|---|
| `profile.ts` | 姓名、标题、自我介绍、工作经历、教育背景、PII(env 注入)|
| `projects.ts` | 精选项目(标题、描述、技术栈、亮点、图片路径)|
| `works.ts` | 5 个作品(标题、描述、技术栈、demo URL、cover 图)|
| `advantages.ts` | 个人能力卡片 |
| `nav.ts` | 导航锚点 |

---

## 🖼️ 资源占位

`public/` 已按用途分类:

| 目录 | 用途 | 约定 |
|---|---|---|
| `public/avatar/` | 头像 | 源图 `avatar.jpg`,构建时自动生成 256/384/512/768/1024 五档 WebP + JPG |
| `public/projects/` | 项目大图 | `project-{1..4}.svg` |
| `public/works/` | 作品集封面图 | `cover-*.{svg,png,jpg}` |
| `public/hero/` | Hero 视频/封面 | 视频 `hero-bg.mp4`(<5MB),封面 `hero-poster.jpg` |
| `public/documents/` | 简历 PDF | `resume.pdf` |
| `public/decor/` | 装饰资源 | `noise.svg` 噪点纹理 |

完整清单:

| 资源 | 路径 | 说明 |
|---|---|---|
| 头像源图 | `public/avatar/avatar.jpg` | About 模块;自动生成多尺寸 |
| 项目图 1-4 | `public/projects/project-{1..4}.svg` | SVG 矢量 |
| 作品封面 | `public/works/cover-*.{svg,png,jpg}` | 5 个作品各一张 |
| Hero 视频 | `public/hero/hero-bg.mp4` | 可选,删除则用渐变兜底 |
| Hero 封面 | `public/hero/hero-poster.jpg` | 视频加载前占位 |
| 简历 PDF | `public/documents/resume.pdf` | Contact 模块下载按钮 |
| Favicon | `public/favicon.svg` | 当前 "W" |
| 噪点 | `public/decor/noise.svg` | 不可见装饰 |

---

## 🎨 自定义主题

**Tailwind 4 风格** — 设计 token 全部以 CSS 变量声明在 `src/index.css` 的 `@theme` 块:

```css
@theme {
  --color-bg-base: #0a0a0b;
  --color-bg-surface: #111114;
  --color-ink-primary: #f5f5f7;
  --color-accent: #7cffc4;       /* 薄荷绿主色 */
  --color-accent-violet: #9b8cff;
  /* ... 共 14 个色 token / 3 字体 / 7 流体字号 / 4 spacing / 5 动画 */
}
```

改 token → 编译时自动重新生成 `.bg-bg-surface` / `.text-ink-primary` 等 utility。

---

## 🖼️ 图片优化(自动)

`AboutAvatar` 组件用 `<picture>` 响应式加载:

- 浏览器自动选最合适尺寸(移动端 256w → 桌面 1024w)
- 支持 WebP 的优先 WebP(节省 50%+),降级 JPG
- 缺失图片自动用首字母 SVG 占位

**新增/替换头像后**:

```bash
npm run build          # prebuild 钩子自动跑 optimize:images
# 或手动
npm run optimize:images
```

脚本扫描 `public/avatar/` / `public/projects/` / `public/hero/` 下的 JPG/PNG 源图,按预设尺寸生成 WebP + JPG 变体,跳过已有产物。

---

## 📊 访问统计(后端联动)

前端埋点 — 见 `src/lib/api.ts`:

| 事件 | 触发点 | 传输策略 |
|---|---|---|
| `app_loaded` | `App.tsx` 顶层 `useEffect` | `fetch` |
| `section_impression:{name}` | 6 个 section 进入视区 50% | `fetch` + `triggerOnce` |
| `cta_click` | works 的 "Try it" / Contact mailto/tel | `fetch({keepalive: true})` |
| `outbound_link` | 外链(AI-Chatbot、Fin-DataPilot 等)| `sendBeacon` |

session_id 内存生成,不写 cookie / localStorage,不放 PII。

后端 / 持久化 / 隐私策略详见 [USAGE.md](./USAGE.md) §3 / §7 / §10。

---

## 🚢 部署

### 前端(本仓)— GitHub Pages

推 `main` → GitHub Actions → `peaceiris/actions-gh-pages@v4` → 强推到 `gh-pages` 分支(`force_orphan: true`,单 commit 不膨胀)。

**GitHub Pages 子路径**: `https://shuaiwang888.github.io/Personal-Resume/`(`VITE_BASE=/Personal-Resume/` 在 CI 注入)。

### 后端(独立仓 `Personal-Resume-Analytics/`)— HuggingFace Space

```bash
cd /Users/appstore/AI-Code/提升项目/Personal-Resume-Analytics
HF_TOKEN=hf_xxx bash scripts/deploy-to-hf-space.sh
# 脚本自动:
#   1. clone git@hf.co:spaces/appStoreQAQ/Personal-Resume
#   2. cp app/ + Dockerfile + requirements.txt
#   3. 写 .gitignore(防 __pycache__/.data 污染)
#   4. commit + push
# HF Space 自动 rebuild(~2-3 分钟)
```

### 部署前自检

```bash
npm run build
# 1) 0 type error
# 2) dist 体积正常(JS ~83 KB, CSS ~53 KB)
# 3) 安全扫描:
grep -rE 'hf_[a-zA-Z0-9]{20,}|sk-[a-zA-Z0-9]{20,}' dist/ src/  # 必须 0 命中
```

---

## 🌐 浏览器支持

- Chrome / Edge / Safari / Firefox 最近 2 个大版本
- 移动端 iOS Safari 14+ / Android Chrome 90+

---

## 📚 进阶

- **完整运维文档**:`USAGE.md`(15 章,含 Dataset 字段解读、安全审计、stats 实时调试)
- **后端 API 约定**:`USAGE.md` §3
- **HF Dataset 数据样本**:`USAGE.md` §7
- **安全自检脚本**:`USAGE.md` §13

---

## 🗺️ 后续迭代

1. 替换 `public/projects/` / `public/works/` 占位图为真实产品截图
2. 在 `public/hero-bg.mp4` 放一段抽象科技视频(推荐 [Coverr.co](https://coverr.co/))
3. 修改 `src/data/profile.ts` 中 `intro` 段落为最新自我介绍
4. 在 `index.html` 的 `<meta>` 中更新 `og:image` + 站点预览图
5. 在简历上挂一个"实时访问量"小卡片(读 `GET /api/stats`,2 位有效数字)
