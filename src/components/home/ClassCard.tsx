import type { ClassItem } from "@/lib/types";
import MoreIcon from "@/assets/icons/more.svg?react";

interface ClassCardProps {
  item: ClassItem;
  onClick?: () => void;
}

export default function ClassCard({ item, onClick }: ClassCardProps) {
  const hasUnread = item.unread && item.unreadCount != null && item.unreadCount > 0;

  return (
    <div
      onClick={onClick}
      className="bg-white border border-[#eee] flex flex-col h-[230px] items-center justify-between pb-[10px] pt-[6px] px-[6px] relative rounded-[16px] w-[184px] cursor-pointer hover:bg-[#f5f5f5] transition-colors duration-200 shrink-0"
    >
      {/* 上半区：封面 + 信息，flex-col gap-[22px] */}
      <div className="flex flex-col gap-[22px] items-start w-full">

        {/* 封面图：98px 高，上方两角圆角 */}
        <div className="h-[98px] relative w-full shrink-0">
          <img
            src={item.coverUrl}
            alt={item.name}
            className="absolute inset-0 max-w-none object-cover size-full rounded-tl-[10px] rounded-tr-[10px]"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />

          {/* 头像：溢出封面底部，left-[12px] bottom-[-12px] */}
          <div className="absolute border border-[rgba(255,255,255,0.8)] bottom-[-12px] left-[12px] rounded-[6px] size-[32px] overflow-hidden bg-[#e8e8e8] z-10 shrink-0">
            <div className="size-full flex items-center justify-center text-[10px] text-[#868686] font-medium bg-gradient-to-br from-slate-200 to-slate-300">
              {item.name.slice(0, 1)}
            </div>
          </div>
        </div>

        {/* 班级信息 */}
        <div className="flex flex-col gap-[4px] items-start px-[11px] w-full">
          <p className="text-[14px] text-[#1a1a1a] leading-normal overflow-hidden text-ellipsis w-full line-clamp-2">
            {item.name}
          </p>
          <p className="text-[12px] text-[#868686] leading-[18px] whitespace-nowrap overflow-hidden text-ellipsis w-full">
            {item.schoolName}
          </p>
        </div>

      </div>

      {/* 底部操作栏 */}
      <div
        className={`flex items-center w-full px-[10px] ${hasUnread ? "justify-between" : "justify-end"}`}
      >
        {/* 未读徽章（有内容时才渲染） */}
        {hasUnread && (
          <div className="bg-[#f04438] flex flex-col items-center justify-center px-[2px] py-px rounded-[8px] shrink-0 size-[16px]">
            <span className="text-[10px] font-semibold text-white leading-normal whitespace-nowrap">
              {(item.unreadCount ?? 0) > 99 ? "99+" : item.unreadCount}
            </span>
          </div>
        )}

        {/* 更多操作按钮 */}
        <button
          className="size-[24px] flex items-center justify-center rounded-[6px] text-[#868686] hover:bg-black/5 transition-colors shrink-0"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <MoreIcon className="size-[18px] text-[#868686]" />
        </button>
      </div>
    </div>
  );
}
