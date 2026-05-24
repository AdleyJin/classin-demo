import type { LiveIslandData } from "@/lib/types";
import SearchIcon        from "@/assets/icons/headbar-search.svg?react";
import AddIcon           from "@/assets/icons/headbar-add.svg?react";
import RefreshIcon       from "@/assets/icons/headbar-refresh.svg?react";
import SidebarToggleIcon from "@/assets/icons/headbar-sidebar-toggle.svg?react";
import LiveIndicatorIcon from "@/assets/icons/live-indicator.svg?react";

interface HeadBarProps {
  liveIsland: LiveIslandData;
}

export default function HeadBar({ liveIsland }: HeadBarProps) {
  const { totalLiveCount } = liveIsland;

  return (
    <div className="relative h-12 flex-shrink-0 select-none">

      {/* 左：macOS 三色按钮 */}
      <div className="absolute flex items-center gap-[8px] left-[4px] top-[18px] px-[12px]">
        <span className="size-3 rounded-full bg-[#ff5f57] border-[0.5px] border-black/20" />
        <span className="size-3 rounded-full bg-[#febc2e] border-[0.5px] border-black/20" />
        <span className="size-3 rounded-full bg-[#28c840] border-[0.5px] border-black/20" />
      </div>

      {/* 中：搜索 + 灵动岛 + 加号 */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[6px] flex items-center gap-[12px] h-[36px]">

        {/* 搜索 icon button：32×32 rounded-[8px] */}
        <button className="flex items-center justify-center rounded-[8px] size-[32px] hover:bg-black/5 transition-colors">
          <SearchIcon className="size-[24px] text-[#1a1a1a]" />
        </button>

        {/* 灵动岛胶囊：黑色背景，p-[8px] gap-[4px] rounded-[26px] */}
        {totalLiveCount > 0 && (
          <div className="flex items-center gap-[4px] p-[8px] rounded-[26px] bg-[#1a1a1a] cursor-pointer overflow-clip w-[96px]">
            <LiveIndicatorIcon className="size-[20px] text-[#2ee066] shrink-0" />
            <span className="text-white text-[12px] leading-[18px] text-center w-[44px] shrink-0">
              {totalLiveCount} 节课
            </span>
          </div>
        )}

        {/* 加号 icon button：32×32 rounded-[8px] */}
        <button className="flex items-center justify-center rounded-[8px] size-[32px] hover:bg-black/5 transition-colors">
          <AddIcon className="size-[24px] text-[#1a1a1a]" />
        </button>
      </div>

      {/* 右：刷新 + 收起侧边栏 */}
      <div className="absolute right-0 top-[8px] flex items-center gap-[8px] pr-3">

        {/* 刷新 icon button：32×32 rounded-[8px] */}
        <button className="flex items-center justify-center rounded-[8px] size-[32px] hover:bg-black/5 transition-colors">
          <RefreshIcon className="size-[24px] text-[#1a1a1a]" />
        </button>

        {/* 收起侧边栏 icon button：32×32 rounded-[8px] */}
        <button className="flex items-center justify-center rounded-[8px] size-[32px] hover:bg-black/5 transition-colors">
          <SidebarToggleIcon className="size-[24px] text-[#1a1a1a]" />
        </button>
      </div>

    </div>
  );
}
