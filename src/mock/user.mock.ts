import type { User, NavItem, QuickAction, ClassFilterTab } from "@/lib/types";

// ─── 当前登录用户 ─────────────────────────────────────────────────────────────

export const mockCurrentUser: User = {
  id: "user-001",
  name: "吴雨桐",
  avatarUrl:
    "https://api.dicebear.com/9.x/notionists/svg?seed=wuyutong&backgroundColor=b6e3f4",
  role: "teacher",
};

// ─── 导航项 ──────────────────────────────────────────────────────────────────

export const mockNavItems: NavItem[] = [
  {
    key: "home",
    label: "主页",
    path: "/home",
    group: "main",
  },
  {
    key: "messages",
    label: "消息",
    path: "/messages",
    group: "main",
    badge: 3,
  },
  {
    key: "todo",
    label: "待办",
    path: "/todo",
    group: "main",
    badge: 72,
  },
  {
    key: "schedule",
    label: "课程表",
    path: "/schedule",
    group: "main",
  },
  {
    key: "space",
    label: "空间",
    path: "/space",
    group: "main",
  },
  {
    key: "blackboard",
    label: "黑板",
    path: "/blackboard",
    group: "tools",
  },
  {
    key: "screencast",
    label: "投屏",
    path: "/screencast",
    group: "tools",
  },
];

// ─── 快捷操作 ─────────────────────────────────────────────────────────────────

export const mockQuickActions: QuickAction[] = [
  {
    key: "create-class",
    title: "创建班级",
    subtitle: "全新班级，多种学习模式",
    variant: "primary",
  },
  {
    key: "create-live",
    title: "创建公开课",
    subtitle: "公开课堂，随时参与",
    variant: "default",
  },
];

// ─── 班级筛选 Tab ─────────────────────────────────────────────────────────────

export const mockClassFilters: ClassFilterTab[] = [
  { key: "all", label: "全部班级" },
  { key: "asTeacher", label: "我是教师" },
  { key: "asStudent", label: "我是学生" },
  { key: "pending", label: "待处理", badge: "99+" },
  { key: "archived", label: "已结课" },
];
