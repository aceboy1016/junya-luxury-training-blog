# AGENTS.md

このリポジトリで作業するエージェント（Codex など）向けの入口です。

1. まず `docs/CODEX_SPEC.md`（システム開発仕様書）を読んでください。担当範囲・タスク・受け入れ基準がまとまっています。
2. プロジェクトのルールは `CLAUDE.md` と `.claude/rules/*.md` にあります。
3. 依存のインストールは `npm install --legacy-peer-deps`（必須）。
4. デザイン（`src/app/page.tsx` のレイアウト、`globals.css`、`tailwind.config.js`、`src/components/motion/**`、Header / Footer の見た目）は Claude の担当です。変更しないでください。
5. `main` には直接 push せず、作業ブランチからプルリクエストでマージしてください（`main` は本番に自動デプロイされます）。
