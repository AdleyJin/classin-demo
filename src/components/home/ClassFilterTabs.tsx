import { cn } from "@/lib/utils";
import type { ClassFilterKey, ClassFilterTab } from "@/lib/types";

interface ClassFilterTabsProps {
  tabs: ClassFilterTab[];
  activeKey: ClassFilterKey;
  /** TODO: 切换 tab 后更新筛选条件 */
  onChange?: (key: ClassFilterKey) => void;
}

export default function ClassFilterTabs({ tabs, activeKey, onChange }: ClassFilterTabsProps) {
  return (
    <div className="flex items-center gap-0">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange?.(tab.key)}
          className={cn(
            "flex items-center gap-1 px-4 py-1 text-sm rounded-full transition-colors whitespace-nowrap",
            activeKey === tab.key
              ? "text-[#1a1a1a] font-semibold"
              : "text-[#868686] hover:text-[#1a1a1a]"
          )}
        >
          <span>{tab.label}</span>
          {tab.badge && (
            <span className="text-xs text-[#ff5f57] font-medium leading-none">{tab.badge}</span>
          )}
          {tab.count != null && (
            <span className="text-xs text-[#868686]">{tab.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}
