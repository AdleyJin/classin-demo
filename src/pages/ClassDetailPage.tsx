import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import HeadBar from "@/components/layout/HeadBar";
import TodoPanel from "@/components/home/TodoPanel";
import SettingsIcon      from "@/assets/icons/settings.svg?react";
import AddIcon           from "@/assets/icons/add.svg?react";
import NotificationIcon  from "@/assets/icons/notification.svg?react";
import ChevronUpDownIcon from "@/assets/icons/chevron-up-down.svg?react";
import {
  mockActivities,
  mockCourses,
  mockCoCreation,
  mockAiApps,
  mockMembers,
  mockClassTodoGroups,
  mockClassTodoTotalCount,
  type ActivityItem,
  type ActivityType,
  type ActivityStatus,
} from "@/mock/class-detail.mock";

// ─── 资源 ────────────────────────────────────────────────────────────────────
const BANNER_URL =
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=220&fit=crop";
const CLASS_AVATAR_URL =
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=80&h=80&fit=crop";

// ─── 工具函数 ─────────────────────────────────────────────────────────────────
function getActivityIcon(type: ActivityType) {
  switch (type) {
    case "homework":
      return (
        <span className="text-[15px] leading-none" title="作业">📝</span>
      );
    case "discussion":
      return (
        <span className="text-[15px] leading-none" title="讨论">💬</span>
      );
    case "classroom":
      return (
        <span className="text-[15px] leading-none" title="课堂">🖥</span>
      );
  }
}

function getStatusStyle(status: ActivityStatus): string {
  switch (status) {
    case "ongoing":
      return "bg-[rgba(46,224,102,0.15)] text-[#20994b]";
    case "ended":
      return "bg-[rgba(26,26,26,0.06)] text-[#868686]";
    case "draft":
      return "bg-[rgba(255,165,0,0.15)] text-orange-600";
  }
}

// ─── 左侧侧边栏公共子组件 ──────────────────────────────────────────────────────

/** 24px 图标按钮，rounded-[6px] */
function IconBtn({ children, onClick }: { children: React.ReactNode; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <button
      onClick={onClick}
      className="w-6 h-6 flex items-center justify-center rounded-[6px] hover:bg-[rgba(26,26,26,0.08)] transition-colors flex-shrink-0"
    >
      {children}
    </button>
  );
}

/** 分区标题行 */
function SectionTitle({ label, buttons }: { label: string; buttons: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-[8px]">
      <span className="text-[12px] font-medium text-[#bbb] leading-[18px]">{label}</span>
      <div className="flex items-center gap-[8px]">{buttons}</div>
    </div>
  );
}

/** 课程 icon */
function CourseIcon() {
  return (
    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3.5" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 3.5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 8h6M5 10.5h3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function MoreDotsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="4.5" cy="9" r="1.2" fill="#868686" />
      <circle cx="9" cy="9" r="1.2" fill="#868686" />
      <circle cx="13.5" cy="9" r="1.2" fill="#868686" />
    </svg>
  );
}

// ─── 左侧侧边栏 ───────────────────────────────────────────────────────────────
function ClassDetailLeftSidebar() {
  // 三组列表共享同一个选中状态
  const [selectedId, setSelectedId] = useState<string>("c-001");

  const itemCls = (id: string) =>
    `group flex items-center gap-[8px] h-9 px-[8px] rounded-[8px] cursor-pointer transition-colors ${
      selectedId === id
        ? "bg-[rgba(26,26,26,0.05)]"
        : "hover:bg-[rgba(26,26,26,0.05)]"
    }`;

  return (
    <aside className="w-[272px] flex-shrink-0 border-r border-[#e6e6e6] flex flex-col h-full overflow-hidden">
      <ScrollArea className="flex-1">
        <div className="flex flex-col">

          {/* ── 班级信息 head ── */}
          <div className="pt-[12px] pb-[8px] px-[16px]">
            <div className="flex items-center gap-[8px] p-[8px] rounded-[16px] hover:bg-[rgba(26,26,26,0.03)] cursor-pointer">
              <img
                src={CLASS_AVATAR_URL}
                alt="班级头像"
                className="w-10 h-10 rounded-[8px] object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-[16px] font-semibold text-black leading-normal truncate">
                  人大附2023级(3)班
                </p>
                <p className="text-[12px] text-[#868686] leading-[16px] truncate">
                  人民大学附属中学
                </p>
              </div>
              <IconBtn>
                <ChevronUpDownIcon className="w-[18px] h-[18px] text-[#868686]" />
              </IconBtn>
            </div>
          </div>

          {/* ── 分区列表 ── */}
          <div className="flex flex-col gap-[16px] px-[16px] pb-4">

            {/* 课程 */}
            <div className="flex flex-col gap-[2px]">
              <SectionTitle
                label="课程"
                buttons={
                  <>
                    <IconBtn><SettingsIcon className="w-[18px] h-[18px] text-[#868686]" /></IconBtn>
                    <IconBtn><AddIcon className="w-[18px] h-[18px] text-[#868686]" /></IconBtn>
                  </>
                }
              />
              <div className="flex flex-col gap-px mt-[2px]">
                {mockCourses.map((course) => (
                  <div
                    key={course.id}
                    className={itemCls(course.id)}
                    onClick={() => setSelectedId(course.id)}
                  >
                    <CourseIcon />
                    <span className={`text-[12px] leading-[18px] truncate flex-1 ${selectedId === course.id ? "font-medium" : "font-normal"} text-[#1a1a1a]`}>
                      {course.name}
                    </span>
                    <span className="hidden group-hover:flex items-center flex-shrink-0">
                      <IconBtn onClick={(e) => e.stopPropagation()}><MoreDotsIcon /></IconBtn>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 共创 */}
            <div className="flex flex-col gap-[2px]">
              <SectionTitle
                label="共创"
                buttons={
                  <>
                    <IconBtn><NotificationIcon className="w-[18px] h-[18px] text-[#868686]" /></IconBtn>
                    <IconBtn><SettingsIcon className="w-[18px] h-[18px] text-[#868686]" /></IconBtn>
                    <IconBtn><AddIcon className="w-[18px] h-[18px] text-[#868686]" /></IconBtn>
                  </>
                }
              />
              <div className="flex flex-col gap-px mt-[2px]">
                {mockCoCreation.map((item) => (
                  <div
                    key={item.id}
                    className={itemCls(item.id)}
                    onClick={() => setSelectedId(item.id)}
                  >
                      <span className="w-5 h-5 flex items-center justify-center text-[14px] flex-shrink-0">
                        {item.emoji}
                      </span>
                      <span className={`text-[12px] leading-[18px] truncate flex-1 ${selectedId === item.id ? "font-medium" : "font-normal"} text-[#1a1a1a]`}>
                        {item.name}
                      </span>
                      {/* badge 时：hover 替换为 ···；无 badge 时：hover 直接显示 ··· */}
                      {item.badge ? (
                        <>
                          <span className="text-[10px] text-[#868686] bg-[rgba(26,26,26,0.05)] px-[6px] py-[2px] rounded-full flex-shrink-0 group-hover:hidden">
                            {item.badge}
                          </span>
                          <span className="hidden group-hover:flex items-center flex-shrink-0">
                            <IconBtn onClick={(e) => e.stopPropagation()}><MoreDotsIcon /></IconBtn>
                          </span>
                        </>
                      ) : (
                        <span className="hidden group-hover:flex items-center flex-shrink-0">
                          <IconBtn onClick={(e) => e.stopPropagation()}><MoreDotsIcon /></IconBtn>
                        </span>
                      )}
                    </div>
                ))}
              </div>
            </div>

            {/* AI 应用 */}
            <div className="flex flex-col gap-[2px]">
              <SectionTitle
                label="AI 应用"
                buttons={
                  <>
                    <IconBtn><NotificationIcon className="w-[18px] h-[18px] text-[#868686]" /></IconBtn>
                    <IconBtn><SettingsIcon className="w-[18px] h-[18px] text-[#868686]" /></IconBtn>
                    <IconBtn><AddIcon className="w-[18px] h-[18px] text-[#868686]" /></IconBtn>
                  </>
                }
              />
              <div className="flex flex-col mt-[2px]">
                {mockAiApps.map((app) => (
                  <div
                    key={app.id}
                    className={itemCls(app.id)}
                    onClick={() => setSelectedId(app.id)}
                  >
                    <img
                      src={app.avatarUrl}
                      alt={app.name}
                      className="w-5 h-5 rounded-full object-cover flex-shrink-0"
                    />
                    <span className={`text-[12px] leading-[18px] truncate flex-1 ${selectedId === app.id ? "font-medium" : "font-normal"} text-[#1a1a1a]`}>
                      {app.name}
                    </span>
                    <span className="hidden group-hover:flex items-center flex-shrink-0">
                      <IconBtn onClick={(e) => e.stopPropagation()}><MoreDotsIcon /></IconBtn>
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}

// ─── 活动列表单项 ─────────────────────────────────────────────────────────────
function ActivityRow({ item }: { item: ActivityItem }) {
  return (
    <div className="flex items-center gap-3 px-2 py-1 rounded-[12px] hover:bg-[rgba(26,26,26,0.03)] min-h-[60px]">
      {/* 左：图标 + 文字信息 */}
      <div className="flex items-start gap-1 flex-1 min-w-0 py-[3px]">
        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
          {getActivityIcon(item.type)}
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-1 pt-0.5">
          <p className="text-[14px] font-medium text-[#1a1a1a] leading-normal truncate">
            {item.title}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-[10px] px-1 py-px rounded-[4px] flex-shrink-0 ${getStatusStyle(item.status)}`}
            >
              {item.statusLabel}
            </span>
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="text-[12px] text-[#868686] leading-[18px] truncate">
                {item.dateInfo}
              </span>
              {item.teacher && (
                <>
                  <span className="w-px h-2 bg-[#e0e0e0] flex-shrink-0" />
                  <span className="text-[12px] text-[#868686] leading-[18px] flex-shrink-0">
                    {item.teacher}
                  </span>
                </>
              )}
              {item.participation && item.participation !== "-" && (
                <>
                  <span className="w-px h-2 bg-[#e0e0e0] flex-shrink-0" />
                  <span className="text-[12px] text-[#868686] leading-[18px] flex-shrink-0">
                    {item.participation}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 右：操作按钮 */}
      {item.action && (
        <div className="flex-shrink-0">
          <button className="bg-[rgba(26,26,26,0.05)] hover:bg-[rgba(26,26,26,0.09)] text-[#1a1a1a] text-[14px] font-medium leading-[18px] rounded-[32px] w-[80px] h-8 flex items-center justify-center transition-colors">
            {item.action.label}
            {item.action.count != null ? ` ${item.action.count}` : ""}
          </button>
        </div>
      )}
    </div>
  );
}

// ─── 中间主内容区 ─────────────────────────────────────────────────────────────
function ClassDetailMain() {
  return (
    <div className="flex-1 min-w-0 flex flex-col gap-4 pt-5 px-5 pb-4 overflow-hidden">
      {/* Banner 封面 */}
      <div className="w-full h-[110px] rounded-[16px] overflow-hidden flex-shrink-0 bg-[#f5f5f5]">
        <img
          src={BANNER_URL}
          alt="课程封面"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 课程标题 + 工具栏 */}
      <div className="flex flex-col gap-4 px-3 flex-shrink-0">
        <h1 className="text-[24px] font-semibold text-[#1a1a1a] leading-normal">
          墨韵书香：经典文本细读与现代思辨的写作
        </h1>

        {/* 工具栏 */}
        <div className="flex items-center justify-between">
          {/* 左：切换 Tab */}
          <div className="relative">
            <div className="bg-[rgba(26,26,26,0.07)] rounded-[20px] h-8 w-[136px]" />
            <div className="absolute inset-0 flex items-center px-0.5">
              <button className="bg-white drop-shadow-sm text-[#1a1a1a] text-[14px] font-medium leading-[18px] rounded-[20px] h-7 w-[52px] flex items-center justify-center">
                全部
              </button>
              <button className="text-[#1a1a1a] text-[14px] leading-[18px] rounded-[8px] h-7 px-3 flex items-center justify-center">
                只看课堂
              </button>
            </div>
          </div>

          {/* 右：操作按钮 */}
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.05)] rounded-[8px]">
              <SortIcon />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.05)] rounded-[8px]">
              <FilterIcon />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.05)] rounded-[8px]">
              <TagIcon />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.05)] rounded-[8px]">
              <MoreIcon />
            </button>
            <button className="bg-[#1a1a1a] text-white text-[14px] font-medium leading-[18px] rounded-[32px] h-8 px-3 hover:bg-[#333] transition-colors">
              新建
            </button>
          </div>
        </div>

        {/* 快捷创建按钮 */}
        <div className="flex gap-3">
          <button className="flex items-center gap-[90px] pl-3 h-[60px] bg-[rgba(174,226,255,0.2)] border border-[rgba(178,227,255,0.1)] rounded-[12px] w-[360px] hover:bg-[rgba(174,226,255,0.3)] transition-colors relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-300 rounded-full opacity-70" />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <div className="w-8 h-8 rounded-full bg-blue-200 opacity-60" />
            </div>
            <span className="text-[14px] font-medium text-[#1a1a1a]">创建教学方案</span>
          </button>
          <button className="flex items-center gap-[90px] pl-3 h-[60px] bg-[rgba(232,207,255,0.2)] border border-[rgba(232,207,255,0.1)] rounded-[12px] w-[360px] hover:bg-[rgba(232,207,255,0.3)] transition-colors relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <div className="w-8 h-8 rounded-full bg-purple-200 opacity-60" />
            </div>
            <span className="text-[14px] font-medium text-[#1a1a1a]">创建学习方案</span>
          </button>
        </div>
      </div>

      {/* 活动列表 */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex flex-col gap-1 pb-4">
            {mockActivities.map((item) => (
              <ActivityRow key={item.id} item={item} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

// ─── 右侧面板 ─────────────────────────────────────────────────────────────────
function ClassDetailRightPanel() {
  return (
    <aside className="w-[272px] flex-shrink-0 border-l border-[#e6e6e6] flex flex-col overflow-hidden rounded-tr-[16px] rounded-br-[16px]">

      {/* 固定头部：成员、公告、聊天 */}
      <div className="flex-shrink-0 pt-[7px]">

        {/* 成员 */}
        <div className="px-6 pb-3">
          <div className="flex items-center justify-between h-11 py-[10px]">
            <span className="text-[12px] font-medium text-[#1a1a1a]">成员</span>
            <div className="flex items-center gap-0.5">
              <span className="text-[12px] text-[#868686]">40人</span>
              <button className="w-4 h-6 flex items-end justify-center pb-0.5">
                <ChevronRightIcon size={12} />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {mockMembers.map((url, i) => (
              <img key={i} src={url} alt={`成员${i + 1}`}
                className="w-6 h-6 rounded-full object-cover border border-white" />
            ))}
            <button className="w-6 h-6 rounded-full bg-[rgba(26,26,26,0.06)] flex items-center justify-center text-[#868686] text-[12px]">
              +
            </button>
          </div>
        </div>

        <div className="mx-6 h-px bg-[#f0f0f0]" />

        {/* 公告 */}
        <div className="px-6 pb-3">
          <div className="flex items-center justify-between h-11 py-[10px]">
            <span className="text-[12px] font-medium text-[#1a1a1a]">公告</span>
            <div className="flex items-center gap-0.5">
              <span className="bg-[#f04438] text-white text-[9px] font-semibold px-[3px] py-px rounded-[4px] leading-normal">2</span>
              <button className="w-4 h-6 flex items-end justify-center pb-0.5">
                <ChevronRightIcon size={12} />
              </button>
            </div>
          </div>
          <p className="text-[12px] text-[#868686] leading-normal line-clamp-3">
            亲爱的同学们，请注意：本周五下午3点，我们将在礼堂举行班级才艺展示会。请大家积极参与，展示自己的特长。具体安排和报名方式请查看班级群通知。期待大家的精彩表现！【班主任】
          </p>
        </div>

        <div className="mx-6 h-px bg-[#f0f0f0]" />

        {/* 聊天 */}
        <div className="px-6">
          <div className="flex items-center justify-between h-11 py-[10px]">
            <span className="text-[12px] font-medium text-[#1a1a1a]">聊天</span>
            <div className="flex items-center gap-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f04438]" />
              <button className="w-4 h-6 flex items-end justify-center pb-0.5">
                <ChevronRightIcon size={12} />
              </button>
            </div>
          </div>
        </div>

        <div className="mx-6 h-px bg-[#f0f0f0]" />
      </div>

      {/* 待办列表：复用主页 TodoPanel 组件，数据换为本班级 */}
      <div className="flex-1 min-h-0">
        <TodoPanel groups={mockClassTodoGroups} totalCount={mockClassTodoTotalCount} />
      </div>

    </aside>
  );
}

// ─── 内联 SVG 图标 ────────────────────────────────────────────────────────────
function SortIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 6h18M7 12h10M11 18h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function FilterIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function TagIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );
}
function MoreIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="5" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="19" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
function ChevronRightIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M6 4l4 4-4 4" stroke="#868686" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── 班级详情页主组件 ──────────────────────────────────────────────────────────
interface ClassDetailPageProps {
  onBack?: () => void;
}

export default function ClassDetailPage({ onBack }: ClassDetailPageProps) {
  const liveIsland = { totalLiveCount: 10, currentLive: null };

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center p-4">
      <div className="w-full max-w-[1356px] h-[756px] rounded-[24px] border border-[#d9d9d9] shadow-[0px_12px_40px_0px_rgba(0,0,0,0.2)] bg-[#f2f2f2] overflow-hidden flex flex-col">
        {/* 顶部标题栏 */}
        <HeadBar liveIsland={liveIsland} onBack={onBack} />

        {/* 三栏内容区 */}
        <div className="mx-2 mb-2 flex flex-1 bg-white border border-[#e6e6e6] rounded-[16px] overflow-hidden min-h-0">
          <ClassDetailLeftSidebar />
          <ClassDetailMain />
          <ClassDetailRightPanel />
        </div>
      </div>
    </div>
  );
}
