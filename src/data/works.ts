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
  },

  // ─────────────────────────────────────────────────────────────
  // TODO 槽位 2: 复制最上面整块对象，修改 id / title / status / description /
  //   highlights / tech / url / year / accentColor。删掉这整段注释。
  // ─────────────────────────────────────────────────────────────

  // ─────────────────────────────────────────────────────────────
  // TODO 槽位 3: 同上。
  // ─────────────────────────────────────────────────────────────

  // ─────────────────────────────────────────────────────────────
  // TODO 槽位 4: 同上。
  // ─────────────────────────────────────────────────────────────
]
