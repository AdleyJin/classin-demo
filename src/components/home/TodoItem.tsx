import type { TodoItem } from "@/lib/types";
import LiveIcon     from "@/assets/icons/todo-live.svg?react";
import HomeworkIcon from "@/assets/icons/todo-homework.svg?react";
import QuizIcon     from "@/assets/icons/todo-quiz.svg?react";

interface TodoItemProps {
  item: TodoItem;
}

export default function TodoItemCard({ item }: TodoItemProps) {
  return (
    <div
      className="flex gap-[6px] items-start w-full cursor-pointer"
      onClick={() => {
        // TODO: window.open(item.activityUrl, '_blank')
      }}
    >
      {/* 类型图标：24×24px */}
      <div className="flex items-center justify-center shrink-0 size-[24px]">
        <TypeIcon type={item.type} />
      </div>

      {/* 内容区 */}
      <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0">

        {/* 信息行组 */}
        <div className={`flex flex-col items-start w-full ${item.type === "live" ? "gap-[2px]" : "gap-[4px]"}`}>

          {/* 标题 */}
          <p className="text-[14px] text-[#1a1a1a] leading-normal overflow-hidden w-full line-clamp-2">
            {item.title}
          </p>

          {/* 时间 · 教师 */}
          <div className="flex gap-[8px] h-[17px] items-center w-full">
            <span className="text-[12px] text-[#868686] whitespace-nowrap shrink-0">
              <TimeText item={item} />
            </span>
            {/* 竖向分隔线 */}
            <div className="w-px h-[10px] bg-[#e6e6e6] shrink-0" />
            <span className="text-[12px] text-[#868686] whitespace-nowrap shrink-0">
              {item.teacher.name}
            </span>
          </div>

          {/* 班级名 + 箭头 */}
          <div className="flex gap-[2px] items-center text-[12px] text-[#868686] whitespace-nowrap">
            <span className="shrink-0">{item.className}</span>
            <span className="shrink-0 text-[10px]">›</span>
          </div>
        </div>

        {/* 底部操作行 */}
        <ActionRow item={item} />
      </div>
    </div>
  );
}

// ─── 时间文本 ─────────────────────────────────────────────────────────────────

function TimeText({ item }: { item: TodoItem }) {
  if (item.type === "live") {
    const d = new Date(item.startsAt);
    const hh = d.getHours().toString().padStart(2, "0");
    const mm = d.getMinutes().toString().padStart(2, "0");
    const prefix = item.liveStatus === "live" ? "今天" : "今天";
    return <>{prefix} {hh}:{mm} 开始（{item.durationMin}分钟）</>;
  }
  const due = new Date((item as { dueAt: string }).dueAt);
  const days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const hh = due.getHours().toString().padStart(2, "0");
  const mm = due.getMinutes().toString().padStart(2, "0");
  return <>{days[due.getDay()]} {hh}:{mm} 截止</>;
}

// ─── 底部操作行 ───────────────────────────────────────────────────────────────

function ActionRow({ item }: { item: TodoItem }) {
  if (item.type === "live") {
    if (item.liveStatus === "live") {
      return (
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-[8px] items-center">
            {item.attendance && (
              <span className="text-[12px] font-medium text-[#109443] whitespace-nowrap">
                出勤{item.attendance.current}/{item.attendance.total}
              </span>
            )}
            {item.attendance && item.elapsedMin != null && (
              <div className="w-px h-[10px] bg-[#e6e6e6]" />
            )}
            {item.elapsedMin != null && (
              <span className="text-[12px] font-medium text-[#109443] whitespace-nowrap">
                已上课{item.elapsedMin}分
              </span>
            )}
          </div>
          <button className="bg-[#2ee066] flex h-[32px] items-center justify-center px-[16px] py-[8px] rounded-[40px] w-[63px] shrink-0">
            <span className="text-[14px] font-medium text-black leading-6">上课</span>
          </button>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-between w-full">
        <span className="text-[12px] font-medium text-[#109443] whitespace-nowrap">
          {item.countdownText}
        </span>
        <button className="bg-[#d6ffe0] flex h-[32px] items-center justify-center py-[7px] rounded-[32px] w-[63px] shrink-0">
          <span className="text-[14px] font-medium text-[#166e32] leading-6">备课</span>
        </button>
      </div>
    );
  }

  if (item.type === "homework") {
    return (
      <div className="flex h-[32px] items-center justify-end w-full">
        <button className="bg-[rgba(26,26,26,0.05)] flex flex-col items-center justify-center px-[8px] py-[7px] rounded-[32px] w-[92px] shrink-0">
          <span className="text-[12px] font-medium text-[#1a1a1a] leading-[18px] whitespace-nowrap">
            去批阅 {item.ungradedCount > 99 ? "99+" : item.ungradedCount}
          </span>
        </button>
      </div>
    );
  }

  // 测验：无底部操作行
  return null;
}

// ─── 类型图标 ─────────────────────────────────────────────────────────────────

function TypeIcon({ type }: { type: TodoItem["type"] }) {
  if (type === "live")     return <LiveIcon     className="size-[24px] text-[#1a1a1a]" />;
  if (type === "homework") return <HomeworkIcon className="size-[24px] text-[#1a1a1a]" />;
  return <QuizIcon className="size-[24px] text-[#1a1a1a]" />;
}
