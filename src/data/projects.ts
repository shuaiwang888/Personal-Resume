import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'bi',
    index: '01',
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
    ],
    tech: ['RAG', 'LLM', 'NoETL', '多租户', 'MQL'],
    image: 'projects/project-1.svg',
    accentColor: '#7CFFC4',
  },
  {
    id: 'ship',
    index: '02',
    title: '渔船轨迹预测与数据分析平台',
    category: '智慧航运 · AI 预测',
    role: '产品经理 / 开发工程师',
    period: '2023.11 - 至今',
    year: '2024',
    description:
      '引入基于 Transformer 优化模型进行轨迹预测，融合 AIS 轨迹、目标终点与海洋环境多源数据。集成大模型智能助手，通过 Function Call / MCP 实现"查询类问题调用 API、分析类问题由 LLM 深度作答"的智能分流。',
    highlights: [
      '每日稳定处理数十万条数据，轨迹预测精度行业领先',
      '将"被动电子围栏"升级为"主动轨迹预警"',
      'SaaS 订阅 + API 授权双轨模式，获东南亚商业合同',
    ],
    tech: ['Transformer', 'LLM', 'MCP', 'Function Call', 'SaaS'],
    image: 'projects/project-2.svg',
    accentColor: '#9B8CFF',
  },
  {
    id: 'uav',
    index: '03',
    title: '无人机路径规划与自主避障系统',
    category: '多智能体 · 自主决策',
    role: '产品经理 / 轨迹规划研发',
    period: '2020.09 - 至今',
    year: '2023',
    description:
      '将 LLM 作为无人机"任务大脑"，通过自然语言理解复杂任务意图。拓展多模态感知能力，融合视觉与雷达方案。利用 VLM 进行场景理解，设计"大模型战略规划 + 经典算法战术执行"的分层决策框架。',
    highlights: [
      '实现无人机从"自主飞行"到"自主任务"的认知跨越',
      '申请 4 项发明专利、发表 7 篇 SCI 论文',
      '已落地地下管廊巡检、森林环境监测等场景',
    ],
    tech: ['LLM', 'VLM', 'Function Call', 'ROS', '点云建图'],
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
