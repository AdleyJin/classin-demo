import type { TodoGroup } from "@/lib/types";

// ─── 班级详情页 Mock 数据 ──────────────────────────────────────────────────────

export type ActivityType = "homework" | "discussion" | "classroom";
export type ActivityStatus = "ongoing" | "ended" | "draft";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  title: string;
  status: ActivityStatus;
  statusLabel: string;
  dateInfo: string;
  teacher: string;
  participation: string;
  action: {
    label: string;
    count?: number;
  } | null;
}

export const mockActivities: ActivityItem[] = [
  {
    id: "a-001",
    type: "homework",
    title: "光影里的语文-微电影脚本创作",
    status: "ongoing",
    statusLabel: "作业 I 进行中",
    dateInfo: "7月15日 周二 17:35 开始",
    teacher: "李老师",
    participation: "已参与 0/40",
    action: { label: "去批阅", count: 2 },
  },
  {
    id: "a-002",
    type: "discussion",
    title: "当古诗遇见 AI 绘画 —— 数字技术能否诠释文学意境？",
    status: "ongoing",
    statusLabel: "讨论 I 进行中",
    dateInfo: "7月8日 周五 15:25 截止",
    teacher: "李老师",
    participation: "已参与 16/40",
    action: { label: "去评分", count: 1 },
  },
  {
    id: "a-003",
    type: "discussion",
    title: "弹幕文化会消解文本深度吗？",
    status: "ongoing",
    statusLabel: "讨论 I 进行中",
    dateInfo: "7月8日 周五 15:25 截止",
    teacher: "李老师",
    participation: "已参与 16/40",
    action: { label: "去评分", count: 2 },
  },
  {
    id: "a-004",
    type: "homework",
    title: "城市语文地图-项目调研",
    status: "ongoing",
    statusLabel: "作业 I 进行中",
    dateInfo: "7月15日 周二 17:35 开始",
    teacher: "李老师",
    participation: "已参与 0/40",
    action: { label: "去批阅", count: 3 },
  },
  {
    id: "a-005",
    type: "discussion",
    title: "短视频文案算不算文学创作？",
    status: "ongoing",
    statusLabel: "讨论 I 进行中",
    dateInfo: "7月8日 周五 15:25 截止",
    teacher: "李老师",
    participation: "已参与 16/40",
    action: { label: "去评分" },
  },
  {
    id: "a-006",
    type: "discussion",
    title: "短视频文案算不算文学创作？",
    status: "ongoing",
    statusLabel: "讨论 I 进行中",
    dateInfo: "7月6日 周五 15:25 截止",
    teacher: "李老师",
    participation: "已参与 16/40",
    action: { label: "去评分" },
  },
  {
    id: "a-007",
    type: "classroom",
    title: "墨韵书香：经典文本细读与思辨写作（第三课时）",
    status: "ended",
    statusLabel: "课堂 I 已结束",
    dateInfo: "7月1日 周一 10:00",
    teacher: "李老师",
    participation: "已参与 38/40",
    action: null,
  },
  {
    id: "a-008",
    type: "homework",
    title: "古典诗词意象分析——以《静夜思》为例",
    status: "ended",
    statusLabel: "作业 I 已结束",
    dateInfo: "6月28日 周五截止",
    teacher: "李老师",
    participation: "已参与 40/40",
    action: { label: "去批阅" },
  },
  {
    id: "a-009",
    type: "discussion",
    title: "网络语言是否会影响正式写作？",
    status: "ended",
    statusLabel: "讨论 I 已结束",
    dateInfo: "6月25日 周二截止",
    teacher: "李老师",
    participation: "已参与 35/40",
    action: null,
  },
  {
    id: "a-010",
    type: "homework",
    title: "名著导读读书笔记——《红楼梦》人物分析",
    status: "ongoing",
    statusLabel: "作业 I 进行中",
    dateInfo: "7月20日 周日截止",
    teacher: "李老师",
    participation: "已参与 5/40",
    action: { label: "去批阅" },
  },
  {
    id: "a-011",
    type: "classroom",
    title: "诗词格律专题讲解——平仄与押韵",
    status: "draft",
    statusLabel: "课堂 I 待发布",
    dateInfo: "7月18日 周四 14:00",
    teacher: "李老师",
    participation: "-",
    action: null,
  },
  {
    id: "a-012",
    type: "discussion",
    title: "AI 时代文学创作的价值与意义",
    status: "ongoing",
    statusLabel: "讨论 I 进行中",
    dateInfo: "7月10日 周日截止",
    teacher: "李老师",
    participation: "已参与 8/40",
    action: { label: "去评分" },
  },
];

// ─── 课程列表 ──────────────────────────────────────────────────────────────────
export interface CourseItem {
  id: string;
  name: string;
}

export const mockCourses: CourseItem[] = [
  { id: "c-001", name: "语文与写作" },
  { id: "c-002", name: "现代文学鉴赏" },
  { id: "c-003", name: "古典诗词精读" },
];

// ─── 共创列表 ──────────────────────────────────────────────────────────────────
export interface CoCreationItem {
  id: string;
  emoji: string;
  name: string;
  badge?: string;
}

export const mockCoCreation: CoCreationItem[] = [
  { id: "cc-001", emoji: "✍️", name: "好词好句积累", badge: "示例" },
  { id: "cc-002", emoji: "📚", name: "作文素材库", badge: "示例" },
  { id: "cc-003", emoji: "📖", name: "推荐书单", badge: "示例" },
  { id: "cc-004", emoji: "👉", name: "关于共创" },
  { id: "cc-005", emoji: "🗑", name: "回收站" },
];

// ─── AI 应用列表 ───────────────────────────────────────────────────────────────
export interface AiAppItem {
  id: string;
  avatarUrl: string;
  name: string;
}

export const mockAiApps: AiAppItem[] = [
  {
    id: "ai-001",
    avatarUrl: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=40&h=40&fit=crop",
    name: "AI 助教",
  },
  {
    id: "ai-002",
    avatarUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=40&h=40&fit=crop",
    name: "AI 学情",
  },
  {
    id: "ai-003",
    avatarUrl: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=40&h=40&fit=crop",
    name: "作文批改智能体",
  },
  {
    id: "ai-004",
    avatarUrl: "https://images.unsplash.com/photo-1636490165193-bf5d2d2c7a80?w=40&h=40&fit=crop",
    name: "阅读理解解析助手",
  },
  {
    id: "ai-005",
    avatarUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=40&h=40&fit=crop",
    name: "诗词意象分析工具",
  },
];

// ─── 右侧面板 ──────────────────────────────────────────────────────────────────
export const mockMembers = [
  "https://i.pravatar.cc/48?img=1",
  "https://i.pravatar.cc/48?img=2",
  "https://i.pravatar.cc/48?img=3",
  "https://i.pravatar.cc/48?img=4",
  "https://i.pravatar.cc/48?img=5",
  "https://i.pravatar.cc/48?img=6",
];

// ─── 右侧待办（本班级数据，复用主页 TodoGroup/TodoItem 类型） ──────────────────

function hoursFromNow(h: number): string {
  return new Date(Date.now() + h * 60 * 60 * 1000).toISOString();
}
function daysFromNow(d: number): string {
  return hoursFromNow(d * 24);
}

export const mockClassTodoGroups: TodoGroup[] = [
  {
    key: "withinDay",
    label: "一天内",
    items: [
      {
        id: "cd-live-001",
        type: "live",
        title: "墨韵书香：经典文本细读与现代思辨的写作（第四课时）",
        classId: "class-001",
        className: "人大附2023级(3)班",
        teacher: { id: "teacher-002", name: "李老师" },
        group: "withinDay",
        activityUrl: "",
        startsAt: hoursFromNow(-0.17),
        durationMin: 45,
        liveStatus: "live",
        attendance: { current: 38, total: 40 },
        elapsedMin: 10,
      },
      {
        id: "cd-live-002",
        type: "live",
        title: "诗词格律专题讲解——平仄与押韵",
        classId: "class-001",
        className: "人大附2023级(3)班",
        teacher: { id: "teacher-002", name: "李老师" },
        group: "withinDay",
        activityUrl: "",
        startsAt: hoursFromNow(0.83),
        durationMin: 45,
        liveStatus: "upcoming",
        countdownText: "距上课50分",
      },
    ],
  },
  {
    key: "withinWeek",
    label: "一周内",
    items: [
      {
        id: "cd-hw-001",
        type: "homework",
        title: "家庭力学小侦探：寻找 3 种力学现象并撰写探究报告",
        classId: "class-001",
        className: "人大附2023级(3)班",
        teacher: { id: "teacher-002", name: "李老师" },
        group: "withinWeek",
        activityUrl: "",
        dueAt: daysFromNow(2),
        ungradedCount: 12,
      },
      {
        id: "cd-hw-002",
        type: "homework",
        title: "古典诗词意象分析——以《静夜思》为例",
        classId: "class-001",
        className: "人大附2023级(3)班",
        teacher: { id: "teacher-002", name: "李老师" },
        group: "withinWeek",
        activityUrl: "",
        dueAt: daysFromNow(4),
        ungradedCount: 5,
      },
      {
        id: "cd-quiz-001",
        type: "quiz",
        title: "现代文阅读理解综合测评",
        classId: "class-001",
        className: "人大附2023级(3)班",
        teacher: { id: "teacher-002", name: "李老师" },
        group: "withinWeek",
        activityUrl: "",
        dueAt: daysFromNow(5),
      },
    ],
  },
];

export const mockClassTodoTotalCount = 5;
