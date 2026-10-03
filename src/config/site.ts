/** All sample names, projects, and contact details below are fictional demo content. */
export const site = {
  companyName: '澄序科技',
  englishName: 'CLARITY SYSTEMS',
  logo: '', // Set to a public path such as '/logo.svg' to replace the CSS mark.
  tagline: '让复杂的系统，变成清晰的增长路径。',
  description: '澄序科技是一家用于展示本模板的虚构技术服务公司。我们以清晰的方法连接战略、产品与交付。',
  shortDescription: '面向成长型企业的数字产品、业务系统与技术咨询。',
  heroEyebrow: '面向下一阶段的企业数字能力',
  heroTitle: ['复杂问题，', '清晰解法。'],
  heroDescription: '从业务目标到数字体验，我们把想法拆解为可执行的产品与系统。每一步，都有章可循。',
  email: 'hello@example.com',
  phone: '请替换为企业电话',
  address: '请替换为企业地址',
  social: {
    linkedin: '',
    github: '',
  },
  about: {
    belief: '我们相信，好的数字项目不从工具开始，而从理解实际问题开始。',
    story: '这是一家虚构的演示公司。这个页面展示企业官网如何介绍自己的观点、工作方式与合作理念。使用此模板时，请换成贵公司的真实故事与信息。',
    note: '一个好的网站应该让访客快速了解你做什么、如何做，以及为什么值得交流。我们把这样的清晰感贯穿在每个页面里。',
  },
  primaryCta: '谈谈你的项目',
  secondaryCta: '了解我们的服务',
  process: [
    { number: '01', title: '理解问题', description: '厘清业务目标、用户需求与当前系统的真实约束。' },
    { number: '02', title: '设计路径', description: '把复杂需求转化为有优先级、可验证的实施方案。' },
    { number: '03', title: '稳步交付', description: '以清晰的节奏推进开发、上线和持续优化。' },
  ],
  values: [
    { number: '01', title: '先理解，再动手', description: '我们从问题和目标出发，让每个功能都有明确的价值。' },
    { number: '02', title: '保持清晰', description: '透明的过程、可读的方案和容易维护的成果。' },
    { number: '03', title: '为长期使用而设计', description: '兼顾当下交付与未来扩展，减少不必要的技术负担。' },
  ],
  seo: {
    home: { title: '首页', description: '澄序科技示例企业官网：展示数字产品、业务系统与技术咨询服务。所有公司与项目信息均为演示内容。' },
    services: { title: '服务与能力', description: '了解示例公司的产品设计、业务系统和技术咨询服务，以及从发现到交付的合作方式。' },
    projects: { title: '项目案例', description: '浏览用于展示企业官网结构的虚构项目案例。所有案例均为演示内容，不代表真实客户或业绩。' },
    about: { title: '关于我们', description: '了解澄序科技示例公司的理念、工作方式与团队价值观。所有资料均为演示内容。' },
    contact: { title: '联系我们', description: '查看示例企业的联系页面和可配置联系方式。本模板不包含后端表单。' },
    notFound: { title: '页面未找到', description: '这个页面不存在。返回示例企业官网首页继续浏览。' },
  },
} as const;

export type Service = {
  number: string;
  category: string;
  title: string;
  summary: string;
  details: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    number: '01', category: 'STRATEGY & DESIGN', title: '数字产品设计',
    summary: '把模糊的构想，变成真正好用的产品体验。',
    details: '围绕用户旅程与业务目标，梳理信息结构、交互方式和视觉语言，让产品从第一版就具备清晰方向。',
    deliverables: ['需求梳理', '用户体验设计', '界面设计', '设计系统'],
  },
  {
    number: '02', category: 'SYSTEMS & DELIVERY', title: '业务系统开发',
    summary: '为日常运营搭建稳定、易维护的数字基础。',
    details: '根据业务流程设计适配的系统架构，连接数据、人员与工作环节，减少重复操作。',
    deliverables: ['业务流程数字化', '企业网站', '内部工作台', '系统集成'],
  },
  {
    number: '03', category: 'ADVISORY & GROWTH', title: '技术咨询与优化',
    summary: '在变化中找到下一步，让技术决策更有依据。',
    details: '评估现有技术方案与交付流程，制定符合阶段目标的改进计划，帮助团队稳步推进。',
    deliverables: ['技术评估', '架构规划', '性能优化', '团队协作建议'],
  },
];

export type Project = {
  number: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  tags: string[];
  visual: 'grid' | 'flow' | 'signal';
};

/** Fictional examples: replace with consented, accurate project data before launch. */
export const projects: Project[] = [
  {
    number: '01', title: '业务协同工作台', type: '业务系统 · 演示案例', year: '概念示例',
    summary: '为跨职能团队构想的一体化任务与信息空间。',
    challenge: '分散的信息和重复的沟通，让团队难以看到同一张业务全貌。',
    approach: '以统一工作台整合任务、状态和知识入口，建立清晰的协作路径。',
    tags: ['系统规划', '信息架构', '界面设计'], visual: 'grid',
  },
  {
    number: '02', title: '服务流程数字化', type: '流程设计 · 演示案例', year: '概念示例',
    summary: '把多步骤服务流程变为可追踪的线上体验。',
    challenge: '客户请求需要经过多个环节，状态不透明，难以快速定位阻塞。',
    approach: '建立从提交、分配到反馈的结构化流程，让每个节点都有明确负责人。',
    tags: ['流程梳理', '产品设计', '自动化'], visual: 'flow',
  },
  {
    number: '03', title: '运营数据观察台', type: '数据体验 · 演示案例', year: '概念示例',
    summary: '面向日常决策的简洁数据视图概念。',
    challenge: '关键指标分散在不同工具中，团队很难及时看出变化。',
    approach: '围绕决策场景组织数据视图，突出趋势、异常与下一步行动。',
    tags: ['数据可视化', '仪表盘', '体验设计'], visual: 'signal',
  },
];
