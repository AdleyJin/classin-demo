import type { ClassItem, ClassFilterKey } from "@/lib/types";
import ClassCard from "./ClassCard";

interface ClassCardGridProps {
  classes: ClassItem[];
  activeFilter: ClassFilterKey;
  onOpenClass?: (classId: string) => void;
}

function filterClasses(classes: ClassItem[], key: ClassFilterKey): ClassItem[] {
  switch (key) {
    case "asTeacher":
      return classes.filter((c) => c.relation === "teacher" || c.relation === "owner");
    case "asStudent":
      return classes.filter((c) => c.relation === "student");
    case "pending":
      return classes.filter((c) => c.pending);
    case "archived":
      return classes.filter((c) => c.archived);
    default:
      return classes.filter((c) => !c.archived);
  }
}

export default function ClassCardGrid({ classes, activeFilter, onOpenClass }: ClassCardGridProps) {
  const filtered = filterClasses(classes, activeFilter);

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-[#868686]">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-3 opacity-30">
          <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
          <path d="M16 24h16M24 18v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <p className="text-sm">暂无班级</p>
      </div>
    );
  }

  return (
    /* 设计稿：4列网格，gap-x-[16px] gap-y-[16px] */
    <div className="grid gap-x-[16px] gap-y-[16px]" style={{ gridTemplateColumns: "repeat(4, 184px)" }}>
      {filtered.map((cls) => (
        <ClassCard
          key={cls.id}
          item={cls}
          onClick={() => onOpenClass?.(cls.id)}
        />
      ))}
    </div>
  );
}
