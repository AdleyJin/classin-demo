import type { TodoItem, TodoGroup } from "@/lib/types";

/** 辅助：生成相对于"现在"的 ISO 时间字符串（仅 Mock 用） */
function hoursFromNow(h: number): string {
  return new Date(Date.now() + h * 60 * 60 * 1000).toISOString();
}
function daysFromNow(d: number): string {
  return hoursFromNow(d * 24);
}

// ─── 一天内（withinDay） ──────────────────────────────────────────────────────

const withinDayItems: TodoItem[] = [
  // 直播课：正在上课中
  {
    id: "todo-live-001",
    type: "live",
    title: "趣味实验拆解：身边的力与运动",
    classId: "class-006",
    className: "力学探秘社生活物理实践班",
    teacher: { id: "teacher-001", name: "张扬" },
    group: "withinDay",
    activityUrl: "https://class.example.com/live/live-001",
    startsAt: hoursFromNow(-0.17), // 10 分钟前开始
    durationMin: 45,
    liveStatus: "live",
    attendance: { current: 186, total: 200 },
    elapsedMin: 10,
  },
  // 直播课：即将开始
  {
    id: "todo-live-002",
    type: "live",
    title: "生活中的简单机械：原理与创意应用",
    classId: "class-006",
    className: "力学探秘社生活物理实践班",
    teacher: { id: "teacher-001", name: "张扬" },
    group: "withinDay",
    activityUrl: "https://class.example.com/live/live-002",
    startsAt: hoursFromNow(0.83), // 50 分钟后开始
    durationMin: 45,
    liveStatus: "upcoming",
    countdownText: "距上课50分",
  },
  // 边界：超长标题的直播课（即将开始）
  {
    id: "todo-live-003",
    type: "live",
    title: "量子力学入门：从双缝实验到薛定谔的猫——颠覆你的经典物理认知",
    classId: "class-001",
    className: "人大附2023级(3)班",
    teacher: { id: "teacher-002", name: "李娜" },
    group: "withinDay",
    activityUrl: "https://class.example.com/live/live-003",
    startsAt: hoursFromNow(5),
    durationMin: 90,
    liveStatus: "upcoming",
    countdownText: "距上课5小时",
  },
];

// ─── 一周内（withinWeek） ─────────────────────────────────────────────────────

const withinWeekItems: TodoItem[] = [
  // 作业：有待批阅
  {
    id: "todo-hw-001",
    type: "homework",
    title: "家庭力学小侦探：寻找 3 种力学现象并撰写探究报告",
    classId: "class-006",
    className: "力学探秘社生活物理实践班",
    teacher: { id: "teacher-001", name: "张扬" },
    group: "withinWeek",
    activityUrl: "https://class.example.com/homework/hw-001",
    dueAt: daysFromNow(2), // 周日 08:00
    ungradedCount: 99,
  },
  // 作业：待批阅数较少
  {
    id: "todo-hw-002",
    type: "homework",
    title: '简易机械创意设计：制作"省力小工具"并说明原理',
    classId: "class-006",
    className: "力学探秘社生活物理实践班",
    teacher: { id: "teacher-001", name: "张扬" },
    group: "withinWeek",
    activityUrl: "https://class.example.com/homework/hw-002",
    dueAt: daysFromNow(2),
    ungradedCount: 24,
  },
  // 测验：无操作按钮（单行结构）
  {
    id: "todo-quiz-001",
    type: "quiz",
    title: "从实验观察到原理解析综合测评",
    classId: "class-006",
    className: "力学探秘社生活物理实践班",
    teacher: { id: "teacher-001", name: "张扬" },
    group: "withinWeek",
    activityUrl: "https://class.example.com/quiz/quiz-001",
    dueAt: daysFromNow(3),
  },
  // 边界：超长标题作业（两行截断场景）
  {
    id: "todo-hw-003",
    type: "homework",
    title: "综合实践报告：以牛顿第二定律为核心，设计并实施一项测量摩擦系数的实验方案",
    classId: "class-001",
    className: "人大附2023级(3)班",
    teacher: { id: "teacher-002", name: "李娜" },
    group: "withinWeek",
    activityUrl: "https://class.example.com/homework/hw-003",
    dueAt: daysFromNow(4),
    ungradedCount: 38,
  },
  // 边界：待批阅为 0（无人提交的边界态）
  {
    id: "todo-hw-004",
    type: "homework",
    title: "课后反思小作文：本节课我的最大收获",
    classId: "class-009",
    className: "高中化学·选修三 物质结构与性质",
    teacher: { id: "teacher-003", name: "陈伟" },
    group: "withinWeek",
    activityUrl: "https://class.example.com/homework/hw-004",
    dueAt: daysFromNow(5),
    ungradedCount: 0,
  },
  // 边界：含特殊字符的测验标题
  {
    id: "todo-quiz-002",
    type: "quiz",
    title: "Unit 5 & 6 综合词汇测试（含 100+ 核心词组 & 短语）",
    classId: "class-010",
    className: "英语口语进阶B班",
    teacher: { id: "teacher-004", name: "王芳" },
    group: "withinWeek",
    activityUrl: "https://class.example.com/quiz/quiz-002",
    dueAt: daysFromNow(6),
  },
  // 边界：同一天多个截止
  {
    id: "todo-hw-005",
    type: "homework",
    title: "地图阅读与路线规划作业",
    classId: "class-013",
    className: "地理研学实践班",
    teacher: { id: "teacher-005", name: "刘晨" },
    group: "withinWeek",
    activityUrl: "https://class.example.com/homework/hw-005",
    dueAt: daysFromNow(6),
    ungradedCount: 15,
  },
  // 边界：AI 相关特殊字符名称
  {
    id: "todo-quiz-003",
    type: "quiz",
    title: "AI×教育专题：ChatGPT 伦理与应用边界——期中考核",
    classId: "class-014",
    className: "全校公共选修·人工智能与未来社会",
    teacher: { id: "teacher-001", name: "张扬" },
    group: "withinWeek",
    activityUrl: "https://class.example.com/quiz/quiz-003",
    dueAt: daysFromNow(7),
  },
];

// ─── 分组聚合 ──────────────────────────────────────────────────────────────────

export const mockTodoGroups: TodoGroup[] = [
  {
    key: "withinDay",
    label: "一天内",
    items: withinDayItems,
  },
  {
    key: "withinWeek",
    label: "一周内",
    items: withinWeekItems,
  },
];

/** 全部待办展开的扁平列表（部分组件直接遍历用） */
export const mockTodos: TodoItem[] = [
  ...withinDayItems,
  ...withinWeekItems,
];

/** 右侧面板显示的待办总数 */
export const mockTodoTotalCount = 72;
