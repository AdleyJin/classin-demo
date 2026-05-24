// ─── 用户 ─────────────────────────────────────────────────────────────────────

export type UserRole = "teacher" | "student";

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  role: UserRole;
}

// ─── 导航 ─────────────────────────────────────────────────────────────────────

export type NavKey =
  | "home"
  | "messages"
  | "todo"
  | "schedule"
  | "space"
  | "blackboard"
  | "screencast";

export interface NavItem {
  key: NavKey;
  label: string;
  /** SF Pro 字体 Unicode 图标字符（可选，与 iconUrl 二选一） */
  iconUnicode?: string;
  /** 图片图标 URL（可选） */
  iconUrl?: string;
  path: string;
  /** main：主功能组；tools：工具组（分隔线下方） */
  group: "main" | "tools";
  badge?: number;
}

// ─── 班级 ─────────────────────────────────────────────────────────────────────

export type ClassRelation = "owner" | "teacher" | "student";

export type ClassFilterKey =
  | "all"
  | "asTeacher"
  | "asStudent"
  | "pending"
  | "archived";

export interface ClassFilterTab {
  key: ClassFilterKey;
  label: string;
  /** 普通数字角标 */
  count?: number;
  /** 字符串角标，如 "99+" */
  badge?: string;
}

export interface ClassItem {
  id: string;
  name: string;
  schoolName: string;
  coverUrl: string;
  /** 当前用户与班级的关系 */
  relation: ClassRelation;
  /** 是否有未读消息，控制红点显示 */
  unread: boolean;
  /** 未读数量（展示徽章用） */
  unreadCount?: number;
  archived: boolean;
  /** 是否有待处理事项（作业/测验待批阅） */
  pending: boolean;
}

// ─── 灵动岛 / 直播 ────────────────────────────────────────────────────────────

export interface LiveClassSummary {
  id: string;
  title: string;
  /** ISO 8601 时间字符串 */
  startedAt: string;
  durationMin: number;
  classId: string;
  className: string;
  teacher: Pick<User, "id" | "name" | "avatarUrl">;
  joinUrl: string;
  status: "live" | "upcoming";
}

export interface LiveIslandData {
  /** 当前正在直播的课程总数 */
  totalLiveCount: number;
  /** 最近/当前一节课（点击灵动岛展开显示） */
  currentLive: LiveClassSummary | null;
}

// ─── 待办 ─────────────────────────────────────────────────────────────────────

export type TodoType = "live" | "homework" | "quiz";
export type TodoTimeGroup = "withinDay" | "withinWeek";

interface TodoBase {
  id: string;
  type: TodoType;
  title: string;
  classId: string;
  className: string;
  teacher: Pick<User, "id" | "name">;
  group: TodoTimeGroup;
  /** 点击 todo 打开的活动页面 URL */
  activityUrl: string;
}

/** 直播课待办 */
export interface TodoLive extends TodoBase {
  type: "live";
  startsAt: string;
  durationMin: number;
  /** live：正在直播中；upcoming：即将开始 */
  liveStatus: "live" | "upcoming";
  /** 出勤统计，仅 live 状态时显示 */
  attendance?: {
    current: number;
    total: number;
  };
  /** 已上课时长（分钟），仅 live 状态时显示 */
  elapsedMin?: number;
  /** 距离开课的倒计时文本，仅 upcoming 状态时显示，如"距上课50分" */
  countdownText?: string;
}

/** 作业待办 */
export interface TodoHomework extends TodoBase {
  type: "homework";
  /** ISO 8601 截止时间 */
  dueAt: string;
  /** 待批阅数量 */
  ungradedCount: number;
}

/** 测验待办 */
export interface TodoQuiz extends TodoBase {
  type: "quiz";
  /** ISO 8601 截止时间 */
  dueAt: string;
}

export type TodoItem = TodoLive | TodoHomework | TodoQuiz;

export interface TodoGroup {
  key: TodoTimeGroup;
  /** 分隔线文字，如"一天内"、"一周内" */
  label: string;
  items: TodoItem[];
}

// ─── 快捷操作入口 ─────────────────────────────────────────────────────────────

export interface QuickAction {
  key: "create-class" | "create-live";
  title: string;
  subtitle: string;
  /** primary：蓝色 #4B94F5 卡；default：白底卡 */
  variant: "primary" | "default";
}

// ─── 页面聚合数据 ──────────────────────────────────────────────────────────────

export interface HomePageData {
  currentUser: User;
  navItems: NavItem[];
  quickActions: QuickAction[];
  classFilters: ClassFilterTab[];
  classes: ClassItem[];
  /** 右侧待办总数（如 72） */
  todoTotalCount: number;
  todoGroups: TodoGroup[];
  liveIsland: LiveIslandData;
}
