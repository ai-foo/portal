import type { Metadata } from "next";
import { departments } from "@/src/data/departments";
import { company } from "@/src/data/company";

export const metadata: Metadata = {
  title: "部署",
  description: "ai-foo株式会社の部署一覧。各部署のミッション・部長・人数・使用ツールを掲載しています。",
};

export default function DepartmentsPage() {
  return (
    <section>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line pb-4">
        <h1 className="font-display text-2xl font-bold text-ink">部署</h1>
        <p className="text-sm text-ink-soft">
          総従業員{" "}
          <span className="font-mono font-medium text-ink">{company.employees}</span>
          名
          <span aria-hidden="true" className="mx-3 text-line">
            /
          </span>
          <span className="font-mono font-medium text-ink">{departments.length}</span>
          部署
        </p>
      </div>

      <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {departments.map((dept) => (
          <li key={dept.id}>
            <article
              className="flex h-full flex-col rounded-md border border-line border-t-2 bg-card px-5 py-4"
              style={{ borderTopColor: dept.tone }}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="flex items-baseline gap-2 font-display text-lg font-bold text-ink">
                  <span
                    aria-hidden="true"
                    className="inline-block size-2 translate-y-[-2px] rounded-full"
                    style={{ backgroundColor: dept.tone }}
                  />
                  {dept.name}
                </h2>
                <p className="shrink-0 text-sm text-ink-soft">
                  <span className="font-mono font-medium text-ink">{dept.headcount}</span>
                  名
                </p>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{dept.mission}</p>

              <dl className="mt-4 flex items-baseline gap-2 border-t border-line pt-3 text-sm">
                <dt className="shrink-0 text-xs text-ink-soft">部長</dt>
                <dd className="font-medium text-ink">{dept.head}</dd>
              </dl>

              <div className="mt-3 flex items-baseline gap-2">
                <h3 className="shrink-0 text-xs text-ink-soft">使用ツール</h3>
                <ul className="flex flex-wrap gap-1.5">
                  {dept.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-sm border border-line bg-paper px-1.5 py-0.5 text-xs text-ink-soft"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
