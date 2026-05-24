import type { TodoGroup } from "@/lib/types";
import ArrowUpIcon from "@/assets/icons/arrow-up.svg?react";
import TodoItemCard from "./TodoItem";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TodoPanelProps {
  groups: TodoGroup[];
  totalCount: number;
}

export default function TodoPanel({ groups, totalCount }: TodoPanelProps) {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden">

      {/* 固定 head bar：不随列表滚动 */}
      <div className="bg-white pt-[24px] shrink-0 w-full">
        <div className="flex items-center justify-between px-[16px] py-[4px] w-full">
          {/* 左：标题 + 数量，baseline 对齐 */}
          <div className="flex gap-[4px] items-baseline min-w-0 flex-1">
            <span className="text-[14px] font-medium text-[#1a1a1a] leading-normal whitespace-nowrap shrink-0">
              近期待办
            </span>
            <span className="text-[12px] text-[#868686] whitespace-nowrap shrink-0">
              {totalCount}
            </span>
          </div>
          {/* 右：更多按钮（文字 + 向上箭头） */}
          <button className="flex h-[24px] items-center justify-center pl-[8px] pr-[4px] rounded-[6px] shrink-0 hover:bg-black/5 transition-colors">
            <span className="text-[12px] text-[#868686] whitespace-nowrap">更多</span>
            <ArrowUpIcon className="size-[16px] rounded-[4px] text-[#868686]" />
          </button>
        </div>
      </div>

      {/* 可滚动列表区 */}
      <ScrollArea className="flex-1 min-h-0">
        <div className="flex flex-col gap-[12px] items-center px-[16px] pt-[24px] pb-[24px] w-full">
          {groups.map((group) => (
            <GroupSection key={group.key} group={group} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

function GroupSection({ group }: { group: TodoGroup }) {
  return (
    <>
      {/* 分组分隔线：─── 一天内 ─── */}
      <div className="flex gap-[16px] items-center justify-center w-full shrink-0">
        <div className="h-px flex-1 bg-[#e6e6e6]" style={{ maxWidth: 48 }} />
        <span className="text-[10px] font-semibold text-[#bbb] whitespace-nowrap shrink-0">
          {group.label}
        </span>
        <div className="h-px flex-1 bg-[#e6e6e6]" style={{ maxWidth: 48 }} />
      </div>

      {/* 该分组的所有待办 cell，直接 gap-[12px] 无分割线 */}
      {group.items.map((item) => (
        <TodoItemCard key={item.id} item={item} />
      ))}
    </>
  );
}
