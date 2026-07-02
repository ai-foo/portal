'use client';

import { useMemo, useState } from 'react';
import type { Department } from '@/src/data/types';
import { departments } from '@/src/data/departments';
import { members } from '@/src/data/members';

const departmentMap = new Map<string, Department>(
  departments.map((dept) => [dept.id, dept]),
);

/** 部署カラーの小ドット（ヘッダーのブランドマークと同じ正方形） */
function ToneDot({ tone, className }: { tone: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 ${className ?? 'size-2'}`}
      style={{ backgroundColor: tone }}
    />
  );
}

export default function MemberDirectory() {
  const [query, setQuery] = useState('');
  const [departmentId, setDepartmentId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim();
    return members.filter((member) => {
      if (departmentId !== null && member.departmentId !== departmentId) {
        return false;
      }
      if (q !== '' && !member.name.includes(q) && !member.kana.includes(q)) {
        return false;
      }
      return true;
    });
  }, [query, departmentId]);

  const isFiltered = query.trim() !== '' || departmentId !== null;

  return (
    <section>
      {/* 見出し + 該当件数 */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h1 className="font-display text-2xl font-bold text-ink">名簿</h1>
        <p className="font-mono text-xs text-ink-soft" role="status">
          {isFiltered
            ? `${members.length}名中 ${filtered.length}名を表示`
            : `全${members.length}名`}
        </p>
      </div>

      {/* コントロール行: 検索 + 部署フィルタ */}
      <div className="mt-5 flex flex-col gap-3">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="氏名・かなで検索"
          aria-label="氏名・かなで検索"
          className="w-full max-w-sm rounded-md border border-line bg-card px-3 py-1.5 text-sm text-ink placeholder:text-ink-soft/70"
        />
        <div
          className="flex flex-wrap items-center gap-1.5"
          role="group"
          aria-label="部署で絞り込み"
        >
          <button
            type="button"
            onClick={() => setDepartmentId(null)}
            aria-pressed={departmentId === null}
            className={`rounded-md border px-3 py-1 text-xs transition-colors ${
              departmentId === null
                ? 'border-brand/40 bg-brand-soft font-medium text-brand'
                : 'border-line bg-card text-ink-soft hover:border-brand/40 hover:text-ink'
            }`}
          >
            すべて
          </button>
          {departments.map((dept) => {
            const selected = departmentId === dept.id;
            return (
              <button
                key={dept.id}
                type="button"
                onClick={() => setDepartmentId(selected ? null : dept.id)}
                aria-pressed={selected}
                className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-xs transition-colors ${
                  selected
                    ? 'border-brand/40 bg-brand-soft font-medium text-brand'
                    : 'border-line bg-card text-ink-soft hover:border-brand/40 hover:text-ink'
                }`}
              >
                <ToneDot tone={dept.tone} className="size-1.5" />
                {dept.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 名簿本体 */}
      {filtered.length === 0 ? (
        <p className="mt-4 rounded-md border border-line bg-card px-4 py-10 text-center text-sm text-ink-soft">
          該当する社員がいません。検索条件を変えてみてください。
        </p>
      ) : (
        <div className="mt-4 overflow-x-auto rounded-md border border-line bg-card">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line">
                <th className="px-4 py-2.5 text-xs font-medium text-ink-soft">
                  氏名
                </th>
                <th className="px-4 py-2.5 text-xs font-medium text-ink-soft">
                  部署
                </th>
                <th className="px-4 py-2.5 text-xs font-medium text-ink-soft">
                  役職
                </th>
                <th className="px-4 py-2.5 text-xs font-medium text-ink-soft">
                  入社年
                </th>
                <th className="px-4 py-2.5 text-xs font-medium text-ink-soft">
                  メール
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((member) => {
                const dept = departmentMap.get(member.departmentId);
                return (
                  <tr
                    key={member.id}
                    className="border-b border-line transition-colors last:border-b-0 hover:bg-paper/60"
                  >
                    <td className="px-4 py-2.5">
                      <span className="block font-medium text-ink">
                        {member.name}
                      </span>
                      <span className="block text-xs text-ink-soft">
                        {member.kana}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      {dept ? (
                        <span className="inline-flex items-center gap-1.5 rounded-sm border border-line px-2 py-0.5 text-xs text-ink-soft">
                          <ToneDot tone={dept.tone} className="size-1.5" />
                          {dept.name}
                        </span>
                      ) : (
                        <span className="text-xs text-ink-soft">—</span>
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-ink">{member.role}</td>
                    <td className="px-4 py-2.5 font-mono text-ink-soft">
                      {member.joinedYear}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-ink-soft">
                      {member.email}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
