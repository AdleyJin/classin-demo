import { useState } from "react";

import AppShell from "@/components/layout/AppShell";
import HeadBar from "@/components/layout/HeadBar";
import Sidebar from "@/components/layout/Sidebar";
import QuickActionSection from "@/components/home/QuickActionSection";
import ClassFilterTabs from "@/components/home/ClassFilterTabs";
import ClassCardGrid from "@/components/home/ClassCardGrid";
import TodoPanel from "@/components/home/TodoPanel";

import { mockHomeData } from "@/mock/home";
import type { ClassFilterKey } from "@/lib/types";

export default function HomePage() {
  const {
    currentUser,
    navItems,
    classFilters,
    classes,
    todoGroups,
    todoTotalCount,
    liveIsland,
  } = mockHomeData;

  const [activeFilter, setActiveFilter] = useState<ClassFilterKey>("all");

  return (
    <AppShell
      headBar={<HeadBar liveIsland={liveIsland} />}
      sidebar={
        <Sidebar
          navItems={navItems}
          currentUser={currentUser}
          activeKey="home"
        />
      }
      main={
        <div className="px-[53px] py-[37px] flex flex-col gap-6 min-h-full">
          {/* 顶部快捷操作：创建班级 + 创建公开课 */}
          <QuickActionSection
            onAction={(key) => {
              // TODO: 打开对应的创建弹窗
              console.log("open dialog:", key);
            }}
          />

          {/* 班级列表区 */}
          <div className="flex flex-col gap-3">
            {/* 筛选 Tab */}
            <ClassFilterTabs
              tabs={classFilters}
              activeKey={activeFilter}
              onChange={setActiveFilter}
            />

            {/* 班级卡片网格（展示前 8 条，满足"5 条以上"要求） */}
            <ClassCardGrid
              classes={classes.slice(0, 8)}
              activeFilter={activeFilter}
            />
          </div>
        </div>
      }
      rightPanel={
        <TodoPanel
          groups={todoGroups}
          totalCount={todoTotalCount}
        />
      }
    />
  );
}
