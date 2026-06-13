import type { Work } from './types'

/**
 * 个人作品 —— 工作之外的可交互 Demo。
 * 设计容量 2×2 = 4 个最协调；第 5 个起单独一行居中（孤儿卡）。
 * 当前已填 5 个：4 + 1（孤儿）。
 */
export const works: Work[] = [
  {
    id: 'quant-backtest',
    title: 'A 股量化回测平台',
    status: '已上线 / Live',
    year: '2026',
    accentColor: '#7CFFC4',
    description:
      '一个零成本的 A 股量化研究工作台：围绕同花顺问财 OpenAPI 实现自然语言取数、选股、单标的 / 指数 / 股票池回测，并接入大模型对每次回测做 AI 复盘，让策略迭代从"猜参数"变成"读报告"。',
    highlights: [
      '8 套策略：5 套自研（动量 / 均线 / RSI / 通道 / 量能）+ 3 套 WorldQuant 101-Alpha 因子',
      '网格搜索 + Sharpe / Calmar 热力图，按稳健度排序输出 Top-10 候选',
      '每次回测自动调用 LLM 生成复盘报告，把"结果数字"翻译成"调参建议"',
    ],
    tech: [
      'Python',
      'http.server',
      'React 18',
      'Vite',
      'MySQL 8',
      'iwencai API',
      'MiniMax M2.7',
      'Render',
      'GitHub Pages',
    ],
    url: 'https://shuaiwang888.github.io/Quantitative-Backtesting/?api=https://quant-backtest.onrender.com',
    coverImage: 'works/quant-backtest-cover',
  },

  {
    id: 'iwencai-skillhub',
    title: '问财金融 Skill 上线',
    status: '已上线 / Live',
    year: '2026',
    accentColor: '#9B8CFF',
    description:
      '把"自然语言选股 / 查公告 / 拉行情"封装成 20+ 个标准化 Skill，发布到问财 × OpenClaw 官方技能库 —— 让 Claude、Cursor 以及任何兼容 MCP 协议的客户端都能用一句中文调用同花顺 20 年沉淀的金融数据。',
    highlights: [
      '20+ 个 Skill：覆盖新闻 / 公告 / 研报 / 选股 / 选基 / 期货期权 / 港美股 / 宏观数据等全场景',
      '全栈兼容 OpenClaw / MCP 协议，任意 Agent 框架（Claude / Cursor / 自研）开箱即用',
      '官方出品徽章背书 ——"由同花顺官方团队开发、品质保障"，可直接被用户一键收藏',
    ],
    tech: [
      'OpenClaw / MCP',
      '问财 OpenAPI',
      'Prompt Engineering',
      'Claude',
      'Cursor',
      '技能市场',
    ],
    url: 'https://www.iwencai.com/skillhub',
    coverImage: 'works/iwencai-skillhub-cover',
  },

  {
    id: 'findatapilot',
    title: 'FinDataPilot · 金融数据智能体',
    status: '本地运行 / Local-only',
    year: '2026',
    accentColor: '#38bdf8',
    description:
      '本地优先 · 自然语言驱动的金融数据智能体。从一句中文金融问题到结构化数据：LLM 规划 → 问财取数 → 清洗 → 智能可视化 → MySQL 落库 → 总结复盘，一气呵成。',
    highlights: [
      'LLM 智能规划：MiniMax 拆解意图 / 定字段 / 定口径，断网时本地规则兜底',
      '流式回答：SSE 协议打字机效果，前端实时呈现每一步执行状态',
      '智能可视化：表格 + 按数据特征自动选图（柱/折/饼），少行/纯文本自动不画图',
      '全链路落库：MySQL 持久化 query_runs / query_columns / query_rows + CSV / Parquet 导出',
      '优雅降级：MySQL 不可用 / LLM 不可用 / 前端包缺失 —— 全部不致命，CLI 仍能跑',
    ],
    tech: [
      'Python 3.10',
      'FastAPI',
      'MySQL 8',
      'pandas',
      'MiniMax M2.7',
      '问财 query2data',
      'SSE',
      'React + Vite',
    ],
    url: 'http://127.0.0.1:8011/',
    coverImage: 'works/findatapilot-cover',
  },

  {
    id: 'fin-evalops',
    title: 'Fin-EvalOps · 金融 Agent 评测平台',
    status: '已部署 / Deployed',
    year: '2026',
    accentColor: '#F59E0B',
    description:
      '针对金融 Agent 输出做自动化评测：13 类自研评测 Skill × 65 真实金融问句样本 × 多模型 LLM Judge，按"5 步评测协议 + 六档分量表 + 封顶规则 + 根因归因"产出结构化结果，Web 端可视化分数趋势 / 雷达图 / 根因时间线，并支持 Data Agent 对话式分析。',
    highlights: [
      '13 类自研评测 Skill × 65 真实金融问句 × 多模型 LLM Judge，多视角打分防单模型偏置',
      '5 步评测协议 + 六档分量表 + 封顶规则 + 根因归因 —— 评测结果可解释可追责',
      'Web 端可视化：分数趋势 / 雷达图 / 根因时间线 + Data Agent 对话式分析',
      '端到端部署：FastAPI + SQLite 后端 (Render) + React/AntD/ECharts 前端 (GitHub Pages)',
    ],
    tech: [
      'Python 3.11',
      'FastAPI',
      'SQLAlchemy',
      'SQLite',
      'React + TypeScript',
      'Vite',
      'AntD',
      'ECharts',
      'Render',
      'GitHub Pages',
    ],
    url: 'https://shuaiwang888.github.io/Fin-EvalOps',
    // 无 cover image → 走 accent 渐变占位封面（右上 amber 135deg）
  },

  {
    id: 'ai-chatbot',
    title: 'AI-Chatbot · 私人 Agent 智能客服',
    status: '本地运行 / Local-only',
    year: '2026',
    accentColor: '#10B981',
    description:
      '基于多模态文档 (PDF / Word / 图片) 的 RAG + Agent 问答系统。LangGraph 多轮对话、Docling 结构化解析、BGE-M3 混合检索 + BGE-Reranker 精排、引用源追踪、5 个工具调用、零成本部署 (HF Spaces + GH Pages + HF Dataset 持久化)。',
    highlights: [
      '多格式摄入: PDF / Word / PPT / Excel / 图片 (中英 OCR), Docling 结构感知 + 跨页表',
      '混合检索: BGE-M3 dense + sparse + ColBERT 三路 → RRF 融合, 再走 BGE-reranker 精排 + CRAG 自校正',
      'LangGraph 多轮对话: SQLite checkpoint 持久化, 每次回答附 page + heading + snippet + score',
      '零成本部署: HF Spaces (FastAPI) + GitHub Pages (React) + HF Dataset (Git LFS 持久化)',
    ],
    tech: [
      'Python 3.11',
      'FastAPI',
      'LangGraph',
      'Docling',
      'BGE-M3',
      'BGE-Reranker',
      'ChromaDB',
      'React 19',
      'Vite',
      'shadcn/ui',
    ],
    url: 'http://127.0.0.1:5173/#/chat',
    // 无 cover image → 走 accent 渐变占位封面（emerald 135deg）; 等用户截图后补 coverImage
  },
]
