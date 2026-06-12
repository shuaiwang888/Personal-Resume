import type { Work } from './types'

/**
 * 个人作品 —— 工作之外的可交互 Demo。
 * 留 4 个槽位（4 张卡片 = 2×2 网格最协调），已填 1 个。
 * 新增作品：复制最下面那段注释块，删掉注释，填好字段即可。
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

  // ─────────────────────────────────────────────────────────────
  // TODO 槽位 3: 复制最上面整块对象，修改 id / title / status / description /
  //   highlights / tech / url / year / accentColor。删掉这整段注释。
  // ─────────────────────────────────────────────────────────────

  // ─────────────────────────────────────────────────────────────
  // TODO 槽位 3: 同上。
  // ─────────────────────────────────────────────────────────────

  // ─────────────────────────────────────────────────────────────
  // TODO 槽位 4: 同上。
  // ─────────────────────────────────────────────────────────────
]
