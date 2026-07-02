import type { Metadata } from "next";
import { faqItems } from "@/src/data/faq";
import type { FaqCategory, FaqItem } from "@/src/data/types";

export const metadata: Metadata = {
  title: "FAQ・申請ガイド",
  description:
    "経費精算・休暇・リモート勤務・入退社・IT など、社内の申請・手続きに関するよくある質問。",
};

/** 表示順を固定したカテゴリ定義（アンカー用の slug 付き） */
const categories: { name: FaqCategory; slug: string }[] = [
  { name: "経費精算", slug: "expenses" },
  { name: "休暇・勤怠", slug: "leave" },
  { name: "リモート勤務", slug: "remote" },
  { name: "入退社手続き", slug: "onboarding" },
  { name: "IT・アカウント", slug: "it-account" },
];

function itemsByCategory(category: FaqCategory): FaqItem[] {
  return faqItems.filter((item) => item.category === category);
}

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl">
      {/* 見出し + 導入 */}
      <header className="border-b border-line pb-6">
        <h1 className="font-display text-2xl font-bold tracking-tight text-ink">
          FAQ・申請ガイド
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          申請・手続きの方法はここで調べられます。見つからない場合は Slack の
          <span className="mx-1 font-mono text-[0.8125rem] text-brand">#ask-corporate</span>
          へどうぞ。
        </p>

        {/* カテゴリへのアンカーリンク */}
        <nav aria-label="カテゴリ一覧" className="mt-5">
          <ul className="flex flex-wrap gap-2">
            {categories.map(({ name, slug }) => (
              <li key={slug}>
                <a
                  href={`#${slug}`}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-line bg-card px-2.5 py-1 text-xs text-ink-soft transition-colors hover:border-brand hover:text-brand"
                >
                  <span aria-hidden="true" className="font-mono text-[0.625rem] text-brand">
                    ¶
                  </span>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* カテゴリごとのセクション */}
      {categories.map(({ name, slug }) => {
        const items = itemsByCategory(name);
        return (
          <section
            key={slug}
            id={slug}
            aria-labelledby={`${slug}-heading`}
            className="scroll-mt-24 border-b border-line py-8"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2
                id={`${slug}-heading`}
                className="font-display text-lg font-bold tracking-tight text-ink"
              >
                {name}
              </h2>
              <span className="font-mono text-xs text-ink-soft">
                {String(items.length).padStart(2, "0")} 件
              </span>
            </div>

            <div className="mt-4 divide-y divide-line rounded-md border border-line bg-card">
              {items.map((item) => (
                <details key={item.id} className="group">
                  <summary className="flex cursor-pointer items-baseline gap-3 px-4 py-3.5 text-sm font-medium text-ink transition-colors hover:text-brand [&::-webkit-details-marker]:hidden [&::marker]:content-['']">
                    <span
                      aria-hidden="true"
                      className="w-3 shrink-0 select-none text-center font-mono text-ink-soft group-open:text-brand"
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                    <span className="min-w-0">
                      Q. {item.question}
                    </span>
                  </summary>
                  <div className="border-t border-dashed border-line px-4 py-3.5 pl-11">
                    <p className="text-sm leading-7 text-ink-soft">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        );
      })}

      <p className="py-6 text-xs text-ink-soft">
        掲載内容で解決しない場合や記載の誤りに気づいた場合は、コーポレート部（
        <span className="font-mono text-[0.6875rem]">#ask-corporate</span>
        ）までご連絡ください。
      </p>
    </div>
  );
}
