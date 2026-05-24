import type { ClassItem } from "@/lib/types";

/**
 * 班级封面图 - 使用 Unsplash 抽象/自然风格占位图
 * 对应设计稿中的彩色渐变封面
 */
const COVERS = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop", // 蓝紫渐变
  "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=200&fit=crop", // 粉橙渐变
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=200&fit=crop", // 彩虹渐变
  "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=400&h=200&fit=crop", // 绿蓝渐变
  "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=200&fit=crop", // 深蓝渐变
  "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=400&h=200&fit=crop", // 橙黄渐变
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop", // 红橙渐变
  "https://images.unsplash.com/photo-1636955816868-fcb881e57954?w=400&h=200&fit=crop", // 紫蓝渐变
  "https://images.unsplash.com/photo-1604076913837-52ab5629fde9?w=400&h=200&fit=crop", // 暖橙渐变
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=200&fit=crop", // 青蓝渐变
  "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=400&h=200&fit=crop", // 纯蓝渐变
  "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=400&h=200&fit=crop", // 粉紫渐变
];

export const mockClasses: ClassItem[] = [
  // ── 正常数据 ──────────────────────────────────────────────────────────────
  {
    id: "class-001",
    name: "人大附2023级(3)班",
    schoolName: "中国人民大学附属中学",
    coverUrl: COVERS[0],
    relation: "teacher",
    unread: true,
    unreadCount: 3,
    archived: false,
    pending: false,
  },
  {
    id: "class-002",
    name: "初一生物9班",
    schoolName: "庆云县中丁乡初级中学",
    coverUrl: COVERS[1],
    relation: "teacher",
    unread: true,
    unreadCount: 1,
    archived: false,
    pending: true,
  },
  {
    id: "class-003",
    name: "科学选修：记忆的艺术",
    schoolName: "庆云县中丁乡初级中学",
    coverUrl: COVERS[2],
    relation: "owner",
    unread: false,
    archived: false,
    pending: false,
  },
  {
    id: "class-004",
    name: "初一道德与法治11班",
    schoolName: "庆云县中丁乡初级中学",
    coverUrl: COVERS[3],
    relation: "teacher",
    unread: false,
    archived: false,
    pending: true,
  },
  {
    id: "class-005",
    name: "初一数学6班",
    schoolName: "庆云县中丁乡初级中学",
    coverUrl: COVERS[4],
    relation: "teacher",
    unread: false,
    archived: false,
    pending: false,
  },
  {
    id: "class-006",
    name: "力学探秘社生活物理实践班",
    schoolName: "中国人民大学附属中学",
    coverUrl: COVERS[5],
    relation: "owner",
    unread: true,
    unreadCount: 12,
    archived: false,
    pending: true,
  },

  // ── 边界情况：超长班级名（两行截断场景） ────────────────────────────────
  {
    id: "class-007",
    name: "口语练习冲刺班级 精英班精英(艺术中心)",
    schoolName: "庆云县中丁乡初级中学",
    coverUrl: COVERS[6],
    relation: "teacher",
    unread: false,
    archived: false,
    pending: false,
  },
  {
    id: "class-008",
    name: "讲座：智能社会的纳米科技应用在医疗中的临床实践",
    schoolName: "庆云县中丁乡初级中学",
    coverUrl: COVERS[7],
    relation: "student",
    unread: false,
    archived: false,
    pending: false,
  },

  // ── 边界情况：学生身份 ───────────────────────────────────────────────────
  {
    id: "class-009",
    name: "高中化学·选修三 物质结构与性质",
    schoolName: "上海市七宝中学",
    coverUrl: COVERS[8],
    relation: "student",
    unread: true,
    unreadCount: 5,
    archived: false,
    pending: false,
  },
  {
    id: "class-010",
    name: "英语口语进阶B班",
    schoolName: "北京市第八中学",
    coverUrl: COVERS[9],
    relation: "student",
    unread: false,
    archived: false,
    pending: false,
  },

  // ── 边界情况：已结课（archived） ─────────────────────────────────────────
  {
    id: "class-011",
    name: "2022-2023春季·初三物理强化班",
    schoolName: "庆云县中丁乡初级中学",
    coverUrl: COVERS[10],
    relation: "teacher",
    unread: false,
    archived: true,
    pending: false,
  },
  {
    id: "class-012",
    name: "美术鉴赏与创作·入门",
    schoolName: "深圳市南山外国语学校",
    coverUrl: COVERS[11],
    relation: "student",
    unread: false,
    archived: true,
    pending: false,
  },

  // ── 边界情况：超长学校名 ─────────────────────────────────────────────────
  {
    id: "class-013",
    name: "地理研学实践班",
    schoolName: "内蒙古自治区呼和浩特市第二中学国际部实验班",
    coverUrl: COVERS[0],
    relation: "teacher",
    unread: false,
    archived: false,
    pending: false,
  },

  // ── 边界情况：超多未读 ───────────────────────────────────────────────────
  {
    id: "class-014",
    name: "全校公共选修·人工智能与未来社会",
    schoolName: "中国人民大学附属中学",
    coverUrl: COVERS[3],
    relation: "owner",
    unread: true,
    unreadCount: 99,
    archived: false,
    pending: true,
  },
];
