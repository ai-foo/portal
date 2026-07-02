---
issue: 8
stream: H
status: completed
updated: 2026-07-02
---

# Stream H 進捗: GitHub Actions による GitHub Pages デプロイ

## 実施内容

- `.github/workflows/deploy.yml` を新規作成
  - name: Deploy to GitHub Pages
  - trigger: `push: branches: [master]` + `workflow_dispatch`
  - permissions: `contents: read` / `pages: write` / `id-token: write`
  - concurrency: `group: pages`, `cancel-in-progress: false`
  - build ジョブ (ubuntu-latest): actions/checkout@v4 → actions/setup-node@v4 (node 24, cache: npm) → `npm ci` → `npm run build` → actions/configure-pages@v5 → actions/upload-pages-artifact@v3 (path: out)
  - deploy ジョブ: needs build, environment: github-pages (url: deploy-pages の output), actions/deploy-pages@v4

## 検証

- YAML 構文検証: `python3 -c "import yaml; yaml.safe_load(...)"` → OK
- package.json に `build: next build` スクリプトが存在することを確認

## 備考

- Pages の有効化（build_type: workflow）はマージ後に gh api で実施（本タスクの範囲外）
