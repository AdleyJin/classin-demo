import AddIcon from "@/assets/icons/quickaction-add-primary.svg?react";
import classBg  from "@/assets/images/quickaction-class-bg.png";
import liveBg   from "@/assets/images/quickaction-live-bg.png";

interface QuickActionSectionProps {
  onAction?: (key: "create-class" | "create-live") => void;
}

export default function QuickActionSection({ onAction }: QuickActionSectionProps) {
  return (
    <div className="flex gap-[16px] items-center w-full shrink-0">
      {/* 创建班级：蓝色卡 */}
      <button
        onClick={() => onAction?.("create-class")}
        className="bg-[#4b94f5] flex gap-[8px] h-[72px] items-center overflow-clip px-[18px] py-[12px] relative rounded-[14px] shrink-0 w-[384px] text-left hover:opacity-90 transition-opacity"
      >
        <div className="relative rounded-[6px] shrink-0 size-[24px] flex items-center justify-center z-10">
          <AddIcon className="size-[24px] text-white" />
        </div>

        <div className="flex flex-col gap-[2px] items-start shrink-0 text-white z-10">
          <p className="text-[14px] font-medium leading-normal">创建班级</p>
          <p className="text-[11px] leading-[18px] text-white/80">全新班级，多种学习模式</p>
        </div>

        <div className="absolute left-[200px] top-0 w-[184px] h-[72px] overflow-clip pointer-events-none">
          <img src={classBg} alt="" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        </div>
      </button>

      {/* 创建公开课：浅灰卡，复用同一 AddIcon，颜色改为 #868686 */}
      <button
        onClick={() => onAction?.("create-live")}
        className="bg-[rgba(230,230,230,0.6)] flex gap-[8px] h-[72px] items-center overflow-clip px-[18px] py-[12px] relative rounded-[14px] shrink-0 w-[384px] text-left hover:opacity-90 transition-opacity"
      >
        <div className="relative rounded-[6px] shrink-0 size-[24px] flex items-center justify-center z-10">
          <AddIcon className="size-[24px] text-[#868686]" />
        </div>

        <div className="flex flex-1 flex-col gap-[2px] items-start min-w-0 z-10">
          <p className="text-[14px] font-medium text-[#1a1a1a] leading-normal">创建公开课</p>
          <p className="text-[11px] text-[#868686] leading-[18px] whitespace-nowrap">公开课堂，随时参与</p>
        </div>

        <div className="absolute bottom-0 left-[200px] w-[184px] h-[72px] overflow-clip pointer-events-none">
          <img src={liveBg} alt="" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        </div>
      </button>
    </div>
  );
}
