import type { Profile, ContactChannel } from './types'

// 联系方式从环境变量读取（build-time 注入），避免明文 PII 出现在公开仓库源码中
// 本地 dev：复制 .env.example 为 .env.local 填入真实值
// CI：GitHub Actions secrets 注入
// 占位符保证 dev 不会因为缺 env 而失败
const PUBLIC_EMAIL =
  import.meta.env.VITE_PUBLIC_EMAIL || '[邮箱待配置]'
const PUBLIC_PHONE =
  import.meta.env.VITE_PUBLIC_PHONE || '[电话待配置]'

export const profile: Profile = {
  name: '王帅',
  initial: 'W',
  title: 'AI 产品经理 · 金融大模型方向',
  tagline: '从后端架构到 AI 产品落地，把工程深度转化为金融智能的产品价值',
  location: '成都 / 远程',
  status: '求职意向 · AI 产品经理',
  email: PUBLIC_EMAIL,
  phone: PUBLIC_PHONE,
  intro: [
    '具备从后端、算法到 AI 产品搭建的全链路经验，深刻理解 RAG、大模型微调、AI Agent、LLM 开发框架及知识图谱等核心技术原理与边界。能基于业务目标选择最优技术路径，主导从 0 到 1 的产品规划、架构设计与迭代优化。',
    '拥有主导生成式商业智能（AIGC+BI）、军事情报问答与决策支持、智慧航运等大型 AI 产品的成功落地经验。擅长将前沿 AI 技术与复杂行业场景深度融合，实现产品的商业价值。',
    '熟悉大模型产品本地化部署；熟练运用 n8n、Dify 等低代码平台快速搭建和测试大模型应用工作流。成功推动产品由项目制向 SaaS 模式转型，制定 API 授权等多元化商业策略。',
  ],
  metrics: [
    { value: 4, suffix: '款', label: '主导 AI 产品', description: '从 0 到 1 全流程孵化' },
    { value: 96, suffix: '%+', label: 'ChatBI 准确率', description: 'NoETL 语义层数据问答' },
    { value: 93, suffix: '%+', label: '军事情报准确率', description: 'RAG 智能问答系统' },
    { value: 2, suffix: '款', label: 'SaaS 化转型', description: '项目制转向订阅模式' },
  ],
  experiences: [
    {
      company: '航天恒星科技有限公司四川（中国空间技术研究院 503 所）',
      role: '产品、应用软件设计师',
      period: '2023.06 - 至今',
      location: '成都',
      bullets: [
        '主导部门 AI 产品线战略规划、需求挖掘、产品设计与项目管理；聚焦 AIGC / RAG / 大模型在军工、政企等垂直领域落地',
        '设计并孵化生成式商业智能（AIGC+BI）平台、军事情报问答与决策支持平台、渔船轨迹预测与数据分析平台三款核心 AI 产品',
        '成功推动渔船与 BI 平台向 SaaS 模式转型，确立产品在军、政、企三方客户中的技术领先地位',
      ],
    },
    {
      company: '重庆梧桐车联科技有限公司（实习）',
      role: 'Android 开发工程师',
      period: '2023.03 - 2023.05',
      location: '重庆',
      bullets: [
        '负责车机系统 Android 应用开发，涵盖 UI 交互、功能实现与系统优化',
        '针对不同车型与硬件环境优化应用适配性，保障软件的稳定性与流畅度',
      ],
    },
    {
      company: '北京快手科技有限公司（实习）',
      role: '后端开发工程师',
      period: '2021.12 - 2022.06',
      location: '北京',
      bullets: [
        '参与快手商城、快手食堂、物联网中台等核心业务系统的后端开发',
        '负责独立模块后端逻辑实现，与产品沟通需求，参与前后端联调、测试和上线',
      ],
    },
  ],
  education: [
    {
      school: '重庆大学',
      degree: '硕士',
      major: '电子信息',
      period: '2020 - 2023',
      tag: '985',
    },
    {
      school: '重庆理工大学',
      degree: '本科',
      major: '电气工程及其自动化',
      period: '2016 - 2020',
    },
  ],
}

export const contactChannels: ContactChannel[] = [
  {
    id: 'email',
    label: '邮箱',
    value: PUBLIC_EMAIL,
    href: `mailto:${PUBLIC_EMAIL}`,
    icon: 'Mail',
  },
  {
    id: 'phone',
    label: '电话',
    value: PUBLIC_PHONE,
    href: `tel:${PUBLIC_PHONE}`,
    icon: 'Phone',
  },
  {
    id: 'location',
    label: '所在地',
    value: '成都 / 远程',
    href: '#',
    icon: 'MapPin',
  },
]
