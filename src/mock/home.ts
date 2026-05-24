/**
 * Home 页 Mock 数据聚合入口
 *
 * 使用方式：
 *   import { mockHomeData } from "@/mock/home"
 *   import type { HomePageData } from "@/lib/types"
 */

import type { HomePageData } from "@/lib/types";

import { mockCurrentUser, mockNavItems, mockQuickActions, mockClassFilters } from "./user.mock";
import { mockClasses } from "./classes.mock";
import { mockTodoGroups, mockTodoTotalCount } from "./todos.mock";
import { mockLiveIsland } from "./live-island.mock";

export const mockHomeData: HomePageData = {
  currentUser: mockCurrentUser,
  navItems: mockNavItems,
  quickActions: mockQuickActions,
  classFilters: mockClassFilters,
  classes: mockClasses,
  todoTotalCount: mockTodoTotalCount,
  todoGroups: mockTodoGroups,
  liveIsland: mockLiveIsland,
};

// 各子模块单独导出，方便细粒度使用
export {
  mockCurrentUser,
  mockNavItems,
  mockQuickActions,
  mockClassFilters,
  mockClasses,
  mockTodoGroups,
  mockTodoTotalCount,
  mockLiveIsland,
};

export { mockTodos } from "./todos.mock";
export {
  mockLiveIslandActive,
  mockLiveIslandUpcoming,
  mockLiveIslandEmpty,
  mockLiveIslandLongTitle,
} from "./live-island.mock";
