import type { Project } from './types'

/**
 * 在岗项目履历 —— 4 个核心项目，去掉渔船 / 无人机：
 * 1. NL2SQL（同花顺）—— 当前主力
 * 2. mchunk 拆解（同花顺）—— nl2sql 的前置解析基建
 * 3. AIGC+BI（航天恒星）—— 生成式商业智能
 * 4. 军事情报（航天恒星）—— RAG 智能问答
 *
 * Skill 生产 / Agent 评测见 Works 区（同款 demo）：
 * - iwencai-skillhub → Skill 生产
 * - fin-evalops → Agent 评测
 * - findatapilot → nl2sql 智能体
 */
export const projects: Project[] = [
  {
    id: 'nl2sql',
    index: '01',
    title: '金融取数解析（NL2SQL）',
    category: 'NL2SQL · 金融智能体',
    role: '核心解析负责人 / 训练语料生产',
    period: '2025.09 - 至今',
    year: '2025',
    description:
      '同花顺核心业务：把中文金融问句解析为可执行取数条件，驱动问财产品日均百万级数据问答。基于自研"7 类逻辑算子"拆解规则，搭建「LLM 解析 + 规则兜底 + 评测闭环」三件套，让用户用一句中文拿到多条件、多标的、多指标的复杂数据。',
    highlights: [
      '设计 INTERSECT / UNION / JOIN / EXIST / EXCEPT / COUNT 等 7 类逻辑算子的判定标准，覆盖 95%+ 真实金融问句结构',
      '搭建 LLM 解析 + 规则兜底双链路：模型层做意图理解与条件抽取，规则层兜底格式与边界 case，断网时仍可服务',
      '主导解析评测体系：13 类自研评测 Skill × 多模型 LLM Judge，持续追踪线上 query 的解析准确率与根因归因',
      '解析能力同时赋能问财 × OpenClaw 官方技能库（20+ Skill）与 FinDataPilot 智能体，是金融 Agent 的能力底座',
    ],
    tech: ['中文金融问句解析', 'NL2SQL', 'LLM 解析 + 规则兜底', '7 类逻辑算子', '训练语料生产', 'Prompt Engineering', '问财 query2data', '评测闭环'],
    image: 'projects/project-1.svg',
    accentColor: '#7CFFC4',
  },

  {
    id: 'mchunk',
    index: '02',
    title: '中文长问句 mchunk 拆解',
    category: 'NLP · LLM 训练数据工程',
    role: '规则设计 / 训练集生产 / 评测',
    period: '2025.09 - 至今',
    year: '2025',
    description:
      '为金融取数解析搭建前置基建：把"一个长复合问句"拆成"多个语义独立、补全前后提及实体/时间信息的短问句"。自研拆解规则 + 大规模训练语料 + generalization 测试集一体化工程，是 NL2SQL 解析效果的关键保障。',
    highlights: [
      '自研拆解规则 8 条 + 7 类逻辑算子判定标准，覆盖 INTERSECT / UNION / JOIN / EXIST / EXCEPT / COUNT 等复合结构',
      '生产 50 万+ 条高质量训练语料（2 批次 jsonl：24 万 + 25 万），单条问句最多拆解 14 个语义独立子句',
      '构建 generalization 测试集 2 套（180 / 258 样本），用于监控模型对未见过句式的拆解稳定性',
      '规则与训练集直接反哺 NL2SQL 解析微调，让模型对"复合条件 + 时间/实体省略 + 多标的×多指标"场景鲁棒可解释',
    ],
    tech: ['中文金融 NLP', '规则工程', 'jsonl 训练集', 'LLM 微调', '数据增强', 'Generalization 评测', 'JSON Schema 设计'],
    image: 'projects/project-2.svg',
    accentColor: '#9B8CFF',
  },

  {
    id: 'bi',
    index: '03',
    title: '生成式商业智能（AIGC+BI）平台',
    category: 'AIGC · 商业智能',
    role: '产品负责人',
    period: '2024.08 - 至今',
    year: '2024',
    description:
      '规避传统 NL-To-SQL 在准确性、安全性与扩展性上的缺陷，搭建"自然语言 (NL) → 指标查询语言 (MQL) → SQL"三段式架构，构建 NoETL 明细数据语义层，实现企业级多租户 ChatBI。',
    highlights: [
      '基于 NoETL 语义层的数据问答准确率突破 96%',
      '成功交付中石油、中国广电等大型企业复杂场景',
      '支持自然语言查询到智能洞察生成、报告输出',
      '推动平台从项目制向 SaaS 订阅模式转型，制定 API 授权等多元化商业策略',
    ],
    tech: ['RAG', 'LLM', 'NoETL', '多租户', 'MQL', 'SaaS'],
    image: 'projects/project-3.svg',
    accentColor: '#3DDC97',
  },

  {
    id: 'intel',
    index: '04',
    title: '军事情报问答与决策支持平台',
    category: 'RAG · 知识库',
    role: '产品经理 / 后端开发',
    period: '2024.02 - 2024.12',
    year: '2024',
    description:
      '基于 LangChain 设计灵活的自适应 RAG 交互框架，支持"直接 LLM 生成"与"RAG 知识库问答"模式自由切换。设计 Hybrid-Retrieval RAG 核心架构，ES 负责关键词检索，FAISS 进行向量语义检索。',
    highlights: [
      '问答准确率达到 93% 以上',
      '响应时间稳定 2-3 秒，支持高并发查询',
      '成功交付中国人民解放军 619xx 部队，获高度认可',
    ],
    tech: ['LangChain', 'RAG', 'ElasticSearch', 'FAISS', '向量检索'],
    image: 'projects/project-4.svg',
    accentColor: '#7CFFC4',
  },
]