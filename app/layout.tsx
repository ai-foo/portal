import type { Metadata } from "next";
import Link from "next/link";
import { IBM_Plex_Mono, IBM_Plex_Sans_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-kaku",
  display: "swap",
});

const plexSans = IBM_Plex_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ai-foo 社内ポータル",
    template: "%s | ai-foo 社内ポータル",
  },
  description: "ai-foo株式会社の社内ポータル（デモ）。データはすべて架空です。",
};

const navItems = [
  { href: "/", label: "ダッシュボード" },
  { href: "/departments", label: "部署" },
  { href: "/members", label: "名簿" },
  { href: "/faq", label: "FAQ" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenKaku.variable} ${plexSans.variable} ${plexMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <header className="sticky top-0 z-10 border-b border-line bg-paper/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3">
            <Link
              href="/"
              className="flex items-baseline gap-2 rounded-md"
              aria-label="ai-foo 社内ポータル トップページ"
            >
              <span
                aria-hidden="true"
                className="inline-block size-2.5 translate-y-[-1px] bg-brand"
              />
              <span className="font-mono text-lg font-medium tracking-tight text-ink">
                ai-foo
              </span>
              <span className="text-xs font-normal text-ink-soft">社内ポータル</span>
            </Link>
            <nav aria-label="メインナビゲーション">
              <ul className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-1.5 text-ink-soft transition-colors hover:bg-brand-soft hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">{children}</main>

        <footer className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-6">
            <p className="text-xs text-ink-soft">
              ai-foo株式会社 社内ポータル — このサイトはデモです。データはすべて架空です。
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
