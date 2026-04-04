# CLAUDE MD - Junya Luxury Training Blog Project

## 概要
石原淳哉（Jun）のパーソナルトレーニングブランド「HALLEL / TOPFORM」の公式ブログ＆ポートフォリオ。
「しなきゃをしたいに変える」という哲学をデザインとコンテンツで体現する。

## 技術スタック
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS (Navy-500: #262636 / Zinc / white neutrals)
- **CMS**: Sanity.io (記事・画像アセット管理)
- **Deployment**: Vercel
- **Command**: `npm install --legacy-peer-deps` (必須)

## デザイン基準 (Design Standard)
- **Color**: Navy-500 (#262636) を基調、Zincと白を用いた「プレミアム・ミニマリズム」。
- **Typography**: Outfit (Headings: TRACKING TIGHT / BOLD) / Inter (Body: LEGIBLE).
- **Icons**: RemixIcon (CDN) - アイコンの過剰使用は避け、洗練さを保つ。
- **Image**: /junya-profile.png (石原淳哉の姿) / HALLEL公式施設写真（外部URL）を使用。

## 開発・コンテンツ更新フロー
1. **GitHub First**: 全ての変更はGitHubリポジトリに履歴を残す。
2. **Branding Check**: UI変更時は `.claude/rules/branding.md` を常に参照。
3. **SEO Check**: 公開前には必ず `.claude/agents/seo-checker.md` で各項目を監査。
4. **Sanity Sync**: 記事更新時はSanity入稿後、Vercelの再デプロイ（Webhook推奨）を伴う。

## iPhone/モバイルからの管理
- `.claude/` フォルダの設定により、iPhoneのGitHub Appやモバイル版Claude.aiからでも、指示一つで同様の品質管理が可能。

---
© 2026 JUNYA ISHIHARA PERSONAL TRAINING. ALL RIGHTS RESERVED.
