import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { NavItem, User } from "@/lib/types";
import logo from "@/assets/logo.svg";

import NavHomeActive        from "@/assets/icons/nav/nav-home-active.svg?react";
import NavMessagesDefault   from "@/assets/icons/nav/nav-messages-default.svg?react";
import NavTodoDefault       from "@/assets/icons/nav/nav-todo-default.svg?react";
import NavScheduleDefault   from "@/assets/icons/nav/nav-schedule-default.svg?react";
import NavSpaceDefault      from "@/assets/icons/nav/nav-space-default.svg?react";
import NavBlackboardDefault from "@/assets/icons/nav/nav-blackboard-default.svg?react";
import NavScreencastDefault from "@/assets/icons/nav/nav-screencast-default.svg?react";

type NavIconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

const NAV_ICON_MAP: Record<string, NavIconComponent> = {
  home:       NavHomeActive,
  messages:   NavMessagesDefault,
  todo:       NavTodoDefault,
  schedule:   NavScheduleDefault,
  space:      NavSpaceDefault,
  blackboard: NavBlackboardDefault,
  screencast: NavScreencastDefault,
};

interface SidebarProps {
  navItems: NavItem[];
  currentUser: User;
  activeKey?: string;
}

export default function Sidebar({ navItems, currentUser, activeKey = "home" }: SidebarProps) {
  const mainItems = navItems.filter((n) => n.group === "main");
  const toolItems = navItems.filter((n) => n.group === "tools");

  return (
    <aside className="flex flex-col w-[156px] flex-shrink-0 border-r border-[#e6e6e6] h-full pt-[24px] pb-[16px] px-4">
      {/* Logo 容器：124×30px */}
      <div className="w-[124px] h-[30px] mb-5 flex-shrink-0">
        <img src={logo} alt="Classin" className="w-full h-full object-contain object-left" draggable={false} />
      </div>

      {/* 导航列表 */}
      <nav className="flex flex-col gap-[12px] flex-1 min-h-0">
        <div className="flex flex-col gap-[8px]">
          {mainItems.map((item) => (
            <NavRow key={item.key} item={item} active={item.key === activeKey} />
          ))}
        </div>

        <div className="h-px bg-[#e6e6e6] mx-2" />

        <div className="flex flex-col gap-[8px]">
          {toolItems.map((item) => (
            <NavRow key={item.key} item={item} active={item.key === activeKey} />
          ))}
        </div>
      </nav>

      {/* 底部用户区域 */}
      <button className="flex gap-[8px] items-center px-[10px] rounded-[12px] w-full h-[44px] shrink-0 hover:bg-[rgba(26,26,26,0.05)] active:bg-[rgba(26,26,26,0.08)] transition-colors cursor-pointer">
        <Avatar className="size-6 rounded-[12px] flex-shrink-0">
          <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
          <AvatarFallback className="text-[10px] bg-[#b6e3f4]">
            {currentUser.name.slice(0, 1)}
          </AvatarFallback>
        </Avatar>
        <span className="text-[12px] font-medium leading-[18px] text-[#1a1a1a] overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
          {currentUser.name}
        </span>
      </button>
    </aside>
  );
}

function NavRow({ item, active }: { item: NavItem; active: boolean }) {
  const IconComp = NAV_ICON_MAP[item.key];

  return (
    <button
      className={cn(
        "flex items-center gap-[8px] w-full text-left px-[10px] py-[10px] rounded-[12px] transition-colors",
        active
          ? "bg-[rgba(26,26,26,0.05)] font-semibold"
          : "hover:bg-[rgba(26,26,26,0.04)]"
      )}
    >
      <span className="size-6 flex items-center justify-center flex-shrink-0">
        {IconComp ? (
          <IconComp className="size-6 text-[#1a1a1a]" />
        ) : (
          <span className="size-6 bg-[#e6e6e6] rounded" />
        )}
      </span>

      <span className="text-[14px] text-[#1a1a1a] flex-1 truncate leading-[17px]">{item.label}</span>

      {item.badge != null && item.badge > 0 && (
        <span className="text-[10px] text-[#868686] tabular-nums">
          {item.badge > 99 ? "99+" : item.badge}
        </span>
      )}
    </button>
  );
}
