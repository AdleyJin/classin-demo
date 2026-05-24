import type { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AppShellProps {
  headBar: ReactNode;
  sidebar: ReactNode;
  main: ReactNode;
  rightPanel: ReactNode;
}

/**
 * 整体三栏布局壳
 * 仿 macOS 客户端风格：圆角窗口 + 灰色底板
 */
export default function AppShell({ headBar, sidebar, main, rightPanel }: AppShellProps) {
  return (
    /* 全屏灰色底板 */
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center p-4">
      {/* 窗口容器：固定 756px 高，宽度最大 1356px，圆角 + 投影 */}
      <div className="w-full max-w-[1356px] h-[756px] rounded-[24px] border border-[#d9d9d9] shadow-[0px_12px_40px_0px_rgba(0,0,0,0.2)] bg-[#f2f2f2] overflow-hidden flex flex-col">
        {/* 头栏 48px */}
        {headBar}

        {/* 内容容器：剩余高度，白底圆角卡 */}
        <div className="mx-2 mb-2 flex flex-1 bg-white border border-[#e6e6e6] rounded-[16px] overflow-hidden min-h-0">
          {/* 左侧导航 */}
          {sidebar}

          {/* 中间主内容 */}
          <main className="flex-1 min-w-0 min-h-0 overflow-hidden">
            <ScrollArea className="h-full">
              {main}
            </ScrollArea>
          </main>

          {/* 右侧面板 */}
          <aside className="w-[304px] flex-shrink-0 border-l border-[#e6e6e6] flex flex-col">
            {rightPanel}
          </aside>
        </div>
      </div>
    </div>
  );
}
