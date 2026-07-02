import { announcements } from "@/src/data/announcements";
import { company, kpis } from "@/src/data/company";
import { departments } from "@/src/data/departments";
import { events } from "@/src/data/events";
import { quickLinks } from "@/src/data/links";
import type { AnnouncementCategory } from "@/src/data/types";

// ダッシュボードの基準日（デモデータに合わせて固定）
const TODAY = "2026-07-02";

function formatToday(iso: string): string {
  const date = new Date(`${iso}T00:00:00+09:00`);
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    timeZone: "Asia/Tokyo",
  }).format(date);
}

/** "2026-07-06" -> "07/06" */
function formatMonthDay(iso: string): string {
  const [, month, day] = iso.split("-");
  return `${month}/${day}`;
}

const categoryBadgeClass: Record<AnnouncementCategory, string> = {
  全社: "border-brand/30 bg-brand-soft text-brand",
  人事: "border-line bg-paper text-ink-soft",
  IT: "border-line bg-paper text-ink-soft",
  イベント: "border-line bg-paper text-ink-soft",
  プロダクト: "border-line bg-paper text-ink-soft",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b border-line pb-2 font-display text-sm font-bold tracking-wide text-ink">
      {children}
    </h2>
  );
}

export default function Home() {
  const sortedAnnouncements = [...announcements].sort((a, b) =>
    b.date.localeCompare(a.date),
  );
  const sortedEvents = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const departmentById = new Map(departments.map((d) => [d.id, d]));

  return (
    <div className="space-y-8">
      {/* ページヘッダー */}
      <section className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h1 className="font-display text-2xl font-bold text-ink">ダッシュボード</h1>
          <p className="text-xs text-ink-soft">{company.name} の今日のようす</p>
        </div>
        <p className="font-mono text-sm text-ink-soft">{formatToday(TODAY)}</p>
      </section>

      {/* KPI ストリップ */}
      <section aria-labelledby="kpi-heading">
        <h2 id="kpi-heading" className="sr-only">
          会社 KPI
        </h2>
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="bg-card px-4 py-3.5">
              <dt className="text-xs font-medium tracking-wide text-ink-soft">
                {kpi.label}
              </dt>
              <dd className="mt-1.5">
                <p className="flex items-baseline gap-2">
                  <span className="font-mono text-2xl font-medium tracking-tight text-ink">
                    {kpi.value}
                  </span>
                  <span
                    className={`font-mono text-xs ${
                      kpi.delta.startsWith("-")
                        ? "text-[#9d4242]"
                        : "text-brand"
                    }`}
                  >
                    {kpi.delta}
                  </span>
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                  {kpi.note}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 2 カラム: お知らせ / クイックリンク + イベント */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* お知らせ */}
        <section aria-label="お知らせ" className="lg:col-span-2">
          <SectionHeading>お知らせ</SectionHeading>
          <ul className="divide-y divide-line">
            {sortedAnnouncements.map((announcement) => (
              <li key={announcement.id} className="py-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <time
                    dateTime={announcement.date}
                    className="font-mono text-xs text-ink-soft"
                  >
                    {announcement.date}
                  </time>
                  <span
                    className={`inline-block rounded-sm border px-1.5 py-0.5 text-[11px] leading-none ${categoryBadgeClass[announcement.category]}`}
                  >
                    {announcement.category}
                  </span>
                </div>
                <h3 className="mt-1.5 text-sm font-bold text-ink">
                  {announcement.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {announcement.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* サイドカラム */}
        <div className="space-y-8">
          {/* クイックリンク */}
          <section aria-label="クイックリンク">
            <SectionHeading>クイックリンク</SectionHeading>
            <ul className="divide-y divide-line">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-3 rounded-sm px-1 py-2.5 transition-colors hover:bg-brand-soft/60"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-7 shrink-0 items-center justify-center rounded-sm border border-line bg-card font-mono text-xs text-ink-soft group-hover:border-brand/30 group-hover:text-brand"
                    >
                      {link.initial}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-ink group-hover:text-brand">
                        {link.label}
                      </span>
                      <span className="block truncate text-xs text-ink-soft">
                        {link.description}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* 今月のイベント */}
          <section aria-label="今月のイベント">
            <SectionHeading>今月のイベント</SectionHeading>
            <ul className="divide-y divide-line">
              {sortedEvents.map((event) => {
                const department = event.departmentId
                  ? departmentById.get(event.departmentId)
                  : undefined;
                return (
                  <li key={event.id} className="flex gap-3 py-3">
                    <time
                      dateTime={event.date}
                      className="pt-0.5 font-mono text-xs text-ink-soft"
                    >
                      {formatMonthDay(event.date)}
                    </time>
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-ink">
                        {event.title}
                      </h3>
                      <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-ink-soft">
                        <span>{event.place}</span>
                        {department && (
                          <span className="inline-flex items-center gap-1.5">
                            <span
                              aria-hidden="true"
                              className="inline-block size-1.5 rounded-full"
                              style={{ backgroundColor: department.tone }}
                            />
                            {department.name}
                          </span>
                        )}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
