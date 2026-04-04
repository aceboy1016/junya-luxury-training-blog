# JUNYA ISHIHARA PERSONAL TRAINING

パーソナルトレーナー **石原淳哉** の公式ウェブサイト。  
WordPressテーマ `junya-luxury-training` のリッチなデザイン・コンテンツを Next.js に完全移植し、Vercel でホスティングしています。

## 🌐 公開URL

**[https://junya-luxury-training-blog.vercel.app](https://junya-luxury-training-blog.vercel.app)**

---

## 🚀 技術スタック

| カテゴリ | 技術 |
|---------|------|
| **フレームワーク** | Next.js 16 (App Router) |
| **言語** | TypeScript / React 19 |
| **スタイリング** | Tailwind CSS + カスタムCSS |
| **CMS** | Sanity (ブログ記事管理用) |
| **アイコン** | Remixicon 3.5 (CDN) |
| **ホスティング** | Vercel |
| **リポジトリ** | GitHub (`aceboy1016/junya-luxury-training-blog`) |

---

## 📄 サイト構成（トップページ）

WordPressテーマ `front-page.php` (1,320行) の全セクションを移植済み：

| # | セクション | 内容 |
|---|-----------|------|
| 1 | **Hero** | キャッチコピー「変化を実感するから自然と続けたくなる」、統計カード (3000+/10+/100%)、CTA |
| 2 | **Methodology** | ELITE METHODOLOGY — 4ステップ (Assessment/Design/Execution/Evolution) |
| 3 | **Why Me** | 選ばれる理由 — 多角的アプローチ、確実なステップアップ、コンディショニング重視 |
| 4 | **Concept** | 科学的メソッド × 最高級サービス — Science/Personalized/Holistic/Luxury |
| 5 | **Service Flow** | 初回の流れ — お申し込み → ご来店 → カウンセリング → コンディショニング |
| 6 | **Locations** | HALLEL半蔵門店 / HALLEL恵比寿店 |
| 7 | **Pricing** | 通常セッション (60/90/120分) + 出張セッション (60/90分) |
| 8 | **Testimonials** | お客様の声 3件 + 統計バー |
| 9 | **Profile** | 経歴タイムライン、専門分野スキルバー、保有資格 (NASM-PES) |
| 10 | **Contact** | Googleフォーム / LINE公式 / メール |

---

## 🎨 デザインシステム

### カラーパレット（ゴールド基調）

- `--junya-gold: #F59E0B` — メインアクセント
- `--junya-gold-dark: #D97706` — グラデーション用
- `--junya-gold-darker: #92400E` — ディープアクセント
- `--junya-amber: #FBBF24` — ハイライト

### フォント

- **英語**: Inter
- **日本語**: Hiragino Kaku Gothic Pro / Yu Gothic

### 主要UIパーツ

- `.bg-gold-gradient` — ゴールドグラデーション背景
- `.text-gradient` — ゴールドグラデーションテキスト
- `.glass-effect` — グラスモーフィズム
- `.luxury-card` — ホバーエフェクト付きカード
- `.btn-primary` — ゴールドCTAボタン

---

## 🗂️ ディレクトリ構成

```
src/
├── app/
│   ├── globals.css          # グローバルスタイル（ゴールドテーマ）
│   ├── layout.tsx           # ルートレイアウト（SEO/GA/Remixicon）
│   ├── page.tsx             # トップページ（全10セクション）
│   └── blog/                # ブログページ群
├── components/
│   ├── Header.tsx           # スクロール検知ヘッダー
│   └── Footer.tsx           # フッター（実住所・SNS）
└── lib/
    └── sanity.ts            # Sanity CMS クライアント
```

---

## 🔧 開発

```bash
# 依存関係インストール
npm install --legacy-peer-deps

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# Vercelデプロイ
npx vercel --yes --prod
```

### 環境変数 (`.env.local`)

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk...
NEXT_PUBLIC_SITE_URL=https://junya-luxury-training-blog.vercel.app
```

---

## 📋 開発ログ

### 2026-02-19: WPテーマ → Next.js 完全移植
- WordPressテーマ `junya-luxury-training` の全コンテンツをNext.jsコンポーネントに変換
- `front-page.php` (1,320行) → `page.tsx` の10個のReactコンポーネント
- `header.php` → `Header.tsx` (スクロール検知、モバイルメニュー)
- `footer.php` → `Footer.tsx` (実住所、Remixicon SNSリンク)
- `style.css` → `globals.css` + `tailwind.config.js` (ゴールドテーマ統一)
- Remixicon CDN を `layout.tsx` に追加
- Next.js を最新版にアップデート
- Vercel へ本番デプロイ完了
- Hero背景画像をダンベルから抽象的ラグジュアリー画像に変更

---

## 📌 今後のTODO

- [ ] 独自ドメイン設定 (Vercel)
- [ ] 実際のトレーニング写真への差し替え
- [ ] LINE公式アカウント・Googleフォームのリンク設定
- [ ] Google Analytics (GA4) の設定
- [ ] Sanity CMS でブログ記事の投稿開始
- [ ] OGP画像の設定
- [ ] パフォーマンス最適化 (画像最適化、Lighthouse)

---

## 📜 ライセンス

Private — © 2026 JUNYA ISHIHARA PERSONAL TRAINING. All rights reserved.
