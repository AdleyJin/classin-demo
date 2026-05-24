import type { LiveIslandData } from "@/lib/types";

/**
 * 场景 A：当前有正在进行的课（上课中）
 * 灵动岛显示「10 节课」，点击展开显示当前直播信息
 */
export const mockLiveIslandActive: LiveIslandData = {
  totalLiveCount: 10,
  currentLive: {
    id: "live-001",
    title: "趣味实验拆解：身边的力与运动",
    startedAt: new Date(Date.now() - 10 * 60 * 1000).toISOString(), // 10 分钟前
    durationMin: 45,
    classId: "class-006",
    className: "力学探秘社生活物理实践班",
    teacher: {
      id: "teacher-001",
      name: "张扬",
      avatarUrl:
        "https://api.dicebear.com/9.x/notionists/svg?seed=zhangyang&backgroundColor=ffd5dc",
    },
    joinUrl: "https://class.example.com/live/live-001/join",
    status: "live",
  },
};

/**
 * 场景 B：即将开始的课（upcoming），灵动岛显示倒计时
 */
export const mockLiveIslandUpcoming: LiveIslandData = {
  totalLiveCount: 3,
  currentLive: {
    id: "live-002",
    title: "生活中的简单机械：原理与创意应用",
    startedAt: new Date(Date.now() + 50 * 60 * 1000).toISOString(), // 50 分钟后
    durationMin: 45,
    classId: "class-006",
    className: "力学探秘社生活物理实践班",
    teacher: {
      id: "teacher-001",
      name: "张扬",
      avatarUrl:
        "https://api.dicebear.com/9.x/notionists/svg?seed=zhangyang&backgroundColor=ffd5dc",
    },
    joinUrl: "https://class.example.com/live/live-002/join",
    status: "upcoming",
  },
};

/**
 * 场景 C：无直播（灵动岛收起/隐藏）
 */
export const mockLiveIslandEmpty: LiveIslandData = {
  totalLiveCount: 0,
  currentLive: null,
};

/**
 * 场景 D：超长课程标题（边界测试）
 */
export const mockLiveIslandLongTitle: LiveIslandData = {
  totalLiveCount: 1,
  currentLive: {
    id: "live-004",
    title:
      "量子力学入门：从双缝实验到薛定谔的猫——颠覆你经典物理认知的公开课",
    startedAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    durationMin: 120,
    classId: "class-014",
    className: "全校公共选修·人工智能与未来社会",
    teacher: {
      id: "teacher-001",
      name: "张扬",
      avatarUrl:
        "https://api.dicebear.com/9.x/notionists/svg?seed=zhangyang&backgroundColor=ffd5dc",
    },
    joinUrl: "https://class.example.com/live/live-004/join",
    status: "live",
  },
};

/** 默认导出：使用"正在上课中"场景 */
export const mockLiveIsland = mockLiveIslandActive;
