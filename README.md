# JUNYA ISHIHARA ブログシステム - Next.js Web App

既存のパーソナルトレーニングサイト「JUNYA ISHIHARA PERSONAL TRAINING」のデザインに完全に合わせたSanityベースのブログシステムのフロントエンド部分です。

## 🚀 機能

- ✅ **完全レスポンシブデザイン** - モバイル・タブレット・デスクトップ対応
- ✅ **JUNYA ISHIHARAデザインシステム** - 既存サイトと統一されたUI/UX
- ✅ **高速パフォーマンス** - Next.js 14 App Router + 静的サイト生成
- ✅ **SEO最適化** - メタタグ、構造化データ、サイトマップ自動生成
- ✅ **Sanity CMS連携** - 直感的なコンテンツ管理
- ✅ **検索機能** - 全文検索対応
- ✅ **カテゴリー機能** - 記事の分類・絞り込み
- ✅ **目次自動生成** - 記事内の見出しから目次を自動作成
- ✅ **シェア機能** - SNS・URLコピー対応
- ✅ **関連記事表示** - 同カテゴリーの記事を自動表示

## 🎨 デザインシステム

### カラーパレット
```css
--junya-orange: #E49B3F     /* メインオレンジ */
--junya-text: #333333       /* メインテキスト */
--junya-gray: #666666       /* セカンダリーテキスト */
--junya-light: #F8F9FA      /* ライト背景 */
--junya-border: #E5E5E5     /* ボーダー */
```

## 🛠 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + カスタムデザインシステム
- **CMS**: Sanity
- **Image Optimization**: Next.js Image + Sanity CDN
- **SEO**: 構造化データ + 自動サイトマップ生成
- **Deployment**: Vercel対応

## 🚀 セットアップ

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 環境変数の設定
`.env.local`ファイルを作成し、以下を設定:
```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# サイト設定
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 3. 開発サーバーの起動
```bash
npm run dev
```

ブラウザで [http://localhost:3000/blog](http://localhost:3000/blog) を開いてください。

## 📱 レスポンシブ対応

完全レスポンシブデザインで、モバイル・タブレット・デスクトップすべてに最適化されています。

## 🔍 SEO機能

- 自動メタタグ生成
- OGP・TwitterCard対応
- 構造化データ
- 自動サイトマップ生成
- robots.txt自動生成

## 🚀 本番デプロイ

### Vercelデプロイ（推奨）
```bash
npm run build
vercel --prod
```

## 📂 主要ディレクトリ

```
src/
├── app/blog/              # ブログページ
├── components/            # 再利用可能コンポーネント
└── lib/sanity.ts         # Sanity設定・クエリ
```

## 📞 サポート

### 必要環境
- Node.js 18+
- npm 9+

このプロジェクトは JUNYA ISHIHARA PERSONAL TRAINING の専用ブログシステムです。
