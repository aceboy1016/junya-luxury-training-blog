# システム開発仕様書（Codex向け）

最終更新: 2026-11-24 / 対象リポジトリ: `aceboy1016/junya-luxury-training-blog`

このドキュメントは、Codex にシステム（データ・CMS・API・SEO・インフラ）まわりを担当してもらうための仕様書です。
デザイン（見た目・アニメーション）は Claude が担当しています。**デザイン担当のファイルは原則として触らないでください**（詳細は「1. 役割分担」）。

---

## 0. プロジェクト概要

| 項目 | 内容 |
|---|---|
| サイト | 石原淳哉（パーソナルトレーナー）の公式サイト＋ブログ |
| ブランドの核 | 「しなきゃ」を「したい！」に変える |
| 本番URL | https://junya-luxury-training-blog.vercel.app （独自ドメインは未取得） |
| ホスティング | Vercel（`main` への push で本番に自動デプロイ。ブランチ push でプレビュー） |
| フレームワーク | Next.js 16（App Router）/ React 19 / TypeScript |
| スタイル | Tailwind CSS 3 |
| CMS | Sanity（クライアントのみ実装済み。**Studio・スキーマは未作成**） |
| モーション | GSAP（ScrollTrigger / SplitText）＋ Lenis |
| インストール | **`npm install --legacy-peer-deps`（必須）** |

関連ルール（必ず読むこと）:
- `CLAUDE.md`
- `.claude/rules/seo.md`（SEO・Sanity入稿ルール）
- `.claude/rules/branding.md`（デザイン。Codex は参照のみ）

---

## 1. 役割分担（重要）

### Codex の担当（システム系）
- Sanity（Studio、スキーマ、データ取得、Webhook、画像）
- API Routes（`src/app/api/**`）
- データ取得・キャッシュ・再検証（ISR / revalidate）
- SEO の仕組み（メタデータ、構造化データ、サイトマップ、robots）
- 環境変数・Vercel・ドメイン・DNS（Cloudflare）
- ビルド設定、型エラー、不要ファイルの整理
- フォーム・外部サービス連携（Googleフォーム、LINE など）

### Claude の担当（デザイン系）— Codex は原則変更しない
| ファイル | 内容 |
|---|---|
| `src/app/page.tsx` | ホーム（10セクション）。**文言・リンク先の差し替えはOK、レイアウトとクラスは変更しない** |
| `src/app/globals.css` | デザイン・モーション用CSS |
| `tailwind.config.js` | 色（`breeze` / `deep` / `navy`）・フォント |
| `src/components/Header.tsx` / `Footer.tsx` | ヘッダー・フッター（リンク先の変更はOK） |
| `src/components/motion/**` | モーション基盤（`MotionProvider` / `Preloader` / `Cursor` / `TokyoClock`） |
| `public/junya-portrait*.{jpg,webp}` | 加工済みポートレート |

ブログページ（`src/app/blog/**`）の**見た目の刷新は Claude が後日行う**予定です。Codex はデータ取得・ロジック・SEOを担当し、マークアップの大きな変更は避けてください（コンポーネントの削除や props の変更が必要な場合は可）。

### デザインを壊さないための注意
1. **`MotionProvider` を `layout.tsx` に移さないこと。** ページの描画（ハイドレーション）が終わる前にDOMを分割して、React のハイドレーションエラー（#418）になります。ページの最後に置く今の形を保ってください。
2. `data-split` / `data-reveal` / `data-stagger` / `data-hero` / `data-clip` などの `data-*` 属性は、アニメーションの対象です。消さないでください（これらは JS が動く前は CSS で非表示になっています）。
3. `layout.tsx` の `<head>` 内のインラインスクリプト（`js` / `pl-seen` クラスを付けるもの）は削除しないでください。
4. 変更後は「8. 受け入れ基準」の確認を必ず行ってください。

---

## 2. 現状（2026-11-24 時点）

- ブログのページ（`/blog`、`/blog/[slug]`、`/blog/category/[slug]`、`/blog/search`、`/blog/embed`）は復元済み。
- `src/lib/sanity.ts` の取得関数は、**Sanity 未設定時・取得失敗時に空データを返す**ので、ビルドは通ります（今は「記事がありません」と表示）。
- 記事・カテゴリ・サイトマップは `revalidate = 60`（60秒ごとに再生成）。`/blog` はリクエストごとに描画。
- Vercel に Sanity の環境変数は**未設定**（オーナーが設定する）。
- Sanity Studio とスキーマはリポジトリに**存在しない**。

---

## 3. タスク一覧

優先度: **P0 = 公開運用に必須** / P1 = 早めに / P2 = 余裕があれば

### P0-1. Sanity Studio とスキーマの構築
- Studio を Next.js 内に埋め込む（`/studio`、`next-sanity` の `NextStudio` を使用）。
  - `sanity.config.ts` と `src/sanity/schemas/**` を新規作成。
  - `/studio` は `robots` で `noindex`、`sitemap` から除外。
  - Studio のルートはヘッダー・フッター・`MotionProvider` を含まないレイアウトにすること（`src/app/studio/[[...tool]]/` に専用 `layout.tsx`）。
- スキーマは **既存のGROQクエリと型（`src/lib/sanity.ts`）に完全に合わせる**。詳細は「4. データモデル」。
- 入稿時のバリデーション:
  - `slug` は英小文字・数字・ハイフンのみ（`/^[a-z0-9]+(?:-[a-z0-9]+)*$/`）。日本語不可（`.claude/rules/seo.md`）。
  - `title` 必須、`publishedAt` 必須、`seo.metaDescription` は120文字以内。
- Sanity の管理画面で、CORS origin に本番URL・`http://localhost:3000` を追加する手順を README に記載（作業自体はオーナーが行う）。

**完了条件**: `/studio` でログインし、記事・カテゴリ・著者を作成→公開すると、`/blog` と `/blog/[slug]` に表示される。

### P0-2. 環境変数
| 変数名 | 公開 | 用途 | 必須 |
|---|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ○ | Sanity プロジェクトID | 必須 |
| `NEXT_PUBLIC_SANITY_DATASET` | ○ | 通常 `production` | 必須 |
| `SANITY_API_TOKEN` | × | 閲覧数の書き込み用（Editor 権限） | 閲覧数機能を使うなら |
| `SANITY_REVALIDATE_SECRET` | × | Webhook の署名検証（新規） | P0-3 で必須 |
| `NEXT_PUBLIC_SITE_URL` | ○ | 正式URL。現状 `https://junya-luxury-training-blog.vercel.app` | 推奨 |
| `NEXT_PUBLIC_GA_ID` | ○ | GA4 測定ID | 任意 |
| `GOOGLE_SITE_VERIFICATION` | ○ | Search Console 確認 | 任意 |

- `.env.example` を作成し、上の変数を**値なし**で列挙する。実際の値は絶対にコミットしない。
- README に「Vercel → Settings → Environment Variables に登録 → Redeploy」の手順を書く。

### P0-3. 記事公開の即時反映（Sanity Webhook）
- `POST /api/revalidate` を新規作成。
  - Sanity Webhook の署名を `SANITY_REVALIDATE_SECRET` で検証（`next-sanity/webhook` の `parseBody` を使用）。
  - 受け取った `_type` と `slug` に応じて `revalidatePath`（`/blog`、`/blog/[slug]`、`/blog/category/[slug]`、`/sitemap.xml`）を実行。
- 既存の `revalidate = 60` は保険として残す。
- README に Sanity 側の Webhook 設定手順（URL、トリガー: create/update/delete、フィルタ `_type in ["post","category","author"]`、Secret）を記載。

**完了条件**: Studio で記事を公開・更新すると、数秒以内に本番に反映される。

### P0-4. お問い合わせリンクの接続
- 現在、ホームの Contact セクションの「Googleフォーム」「LINE公式」のリンクが `#`（未設定）。
- `src/config/site.ts`（新規）に連絡先をまとめて定義し、`page.tsx` の `contacts` 配列から参照する。
  ```ts
  export const siteConfig = {
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://junya-luxury-training-blog.vercel.app',
    contact: {
      googleForm: '', // オーナーからURLを受領して設定
      line: '',       // 同上
      email: 'junya1995@gmail.com',
    },
  }
  ```
- URL が空の場合は、そのボタンを表示しない（`#` のリンクを出さない）。
- **`page.tsx` は `contacts` 配列の `href` だけを変更し、マークアップは変えないこと。**

### P1-1. 公開ページから開発用の機能を外す
- 記事ページ（`src/app/blog/[slug]/page.tsx`）に、`SEOAnalysis`（SEO分析）と `ArticleTags`（自動タグ生成）が**一般公開状態で表示されている**。これは編集者向けの機能なので、公開ページから外す。
  - 必要なら Studio のカスタムツール、または `/admin` 配下（認証付き）に移す。
- `/admin/tag-generator` は `noindex` にし、Basic 認証などで保護する（`middleware.ts`）。

### P1-2. 閲覧数カウントの安全化
- `/api/increment-views` は認証なしで誰でも呼べ、Sanity に直接書き込む。以下を実装:
  - 同一IP・同一記事の連打を防ぐ（Cookie または簡易レート制限）。
  - ボット（User-Agent）を除外。
  - `postId` が実在する公開記事か検証。
- Sanity クライアントを **読み取り用（CDN・トークンなし）** と **書き込み用（トークンあり・サーバー専用）** に分ける。書き込み用は `import 'server-only'` を付けたファイルに置く。
  - 現状 `src/components/TagCloud.tsx`（クライアントコンポーネント）が `client` を直接 import している。読み取り専用クライアントに切り替えるか、サーバー側で取得して props で渡す。

### P1-3. `/api/posts` の画像URL修正
- `mainImage` に存在しない `/api/image/...` を返している。`urlFor(post.mainImage).width(1200).url()` で Sanity CDN のURLを返すように修正。

### P1-4. SEO（`.claude/rules/seo.md` 準拠）
- タイトルテンプレートをルールに合わせる: `[Page Title] | J. ISHIHARA Premium Personal Training`（現状 `layout.tsx` は `%s | JUNYA ISHIHARA PERSONAL TRAINING`）。
- ホームの description にキーワード（コンディショニング / パーソナルトレーニング / 恵比寿・半蔵門）を含め、120文字以内。
- 構造化データ:
  - トップ: `Person` と `LocalBusiness`（HALLEL 半蔵門・恵比寿の2拠点。住所は `page.tsx` の `studios` を参照）。
  - 記事: `BlogPosting`（既存の `StructuredData.tsx` を確認・修正）。
  - `layout.tsx` の Organization JSON-LD は `NEXT_PUBLIC_SITE_URL` が未設定だと `url` が `undefined` になる → `siteConfig.url` を使う。
- OG画像: `public/logo.png` が存在しないのに参照している。`/junya-portrait.jpg` を使うか、`opengraph-image.tsx` で生成する（ブランドルール: OG画像は石原本人の写真かスタジオ写真）。
- `sitemap.xml` に全記事・全カテゴリを含め、`/studio` と `/admin` を除外。`robots.txt` も同様。
- 見出し階層の確認（H1は1ページ1つ）。※ホームはデザイン側で対応済み。

### P1-5. サブページの整理
- `/about`、`/service`、`/price`、`/contact` はナビから外れており、`/about` は存在しない画像（`/profile-junya.jpg`）を参照して壊れている。
- 推奨: `next.config.ts` の `redirects()` で、ホームの各セクションへ 301 リダイレクトする。
  - `/about` → `/#profile`、`/service` → `/#service-flow`、`/price` → `/#pricing`、`/contact` → `/#contact`
- `/privacy` の連絡先 `info@junya-personal-training.com` は**存在しないドメイン**。`siteConfig.contact.email` に置き換える。

### P1-6. ビルドの健全化
- `next.config.ts` の `eslint` キーは Next.js 16 で無効（ビルド時に警告）。削除する。
- `package.json` の `"lint": "next lint"` は Next.js 16 で廃止されたコマンド。`"lint": "eslint ."` に変更し、`eslint.config.mjs` で動くようにする。
- `typescript.ignoreBuildErrors: true` を外せるよう、型エラーを解消する（`npx tsc --noEmit`）。
- 不要ファイルを削除: `nextjs.log`、`*.org`（`README.md.org`、`page.tsx.org`、`Header.tsx.org`、`Footer.tsx.org` など）、`push_to_github.sh`、`HYBRID_SETUP.md`（WordPress連携の古い手順。不要なら）。
- `.gitignore` に `tsconfig.tsbuildinfo`、`.env*`（`.env.example` は除く）を追加。

### P2-1. アクセス解析・Search Console
- GA4（`NEXT_PUBLIC_GA_ID`）が有効になることを確認。
- Cookie同意バナー（`CookieConsent`）は現在コメントアウト。使うかどうかをオーナーと決め、使う場合は GA の読み込みを同意後に限定する。

### P2-2. 独自ドメイン（取得後）
- ドメインを Cloudflare で管理し、Vercel に接続する（Cloudflare の DNS は「DNS only（グレー雲）」で Vercel に向けるのが推奨）。
- `NEXT_PUBLIC_SITE_URL` と `siteConfig.url` を新ドメインに更新。旧URL（`*.vercel.app`）から 301 リダイレクト。
- Sanity の CORS origin、Webhook の URL も更新。

---

## 4. データモデル（Sanity スキーマ）

既存のクエリ・型（`src/lib/sanity.ts`）が前提にしているフィールドです。**名前を変えないでください。**

### `post`（記事）
| フィールド | 型 | 必須 | 備考 |
|---|---|---|---|
| `title` | string | ○ | |
| `slug` | slug（source: title） | ○ | 英小文字・ハイフンのみ |
| `excerpt` | text | | 一覧・OG説明に使用 |
| `mainImage` | image（hotspot, `alt` 付き） | | `alt` 必須にする |
| `body` | array（Portable Text: block + image） | ○ | `src/components/PortableText.tsx` が描画 |
| `categories` | array of reference → `category` | | |
| `tags` | array of string | | 教材DB（Notion）と揃えたカテゴリ分けを推奨 |
| `author` | reference → `author` | ○ | |
| `publishedAt` | datetime | ○ | |
| `isPublished` | boolean | ○ | 既定値 false。true のものだけ表示 |
| `isFeatured` | boolean | | おすすめ記事（最大3件） |
| `views` | number | | 読み取り専用。API が加算 |
| `seo` | object | | 下記 |

`seo` オブジェクト: `metaTitle`(string) / `metaDescription`(text, 120文字以内) / `keywords`(array of string) / `ogImage`(image, `alt` 付き) / `noIndex`(boolean) / `canonicalUrl`(url)

### `category`（カテゴリ）
| フィールド | 型 | 必須 | 備考 |
|---|---|---|---|
| `title` | string | ○ | |
| `slug` | slug | ○ | フッターのリンクが `training` / `nutrition` / `lifestyle` を想定 |
| `description` | text | | |
| `color` | string | ○ | バッジ色。ブランドに合わせ `#4A98D0` などの空色・紺系を推奨 |
| `order` | number | | 並び順 |
| `isActive` | boolean | ○ | 既定値 true |

初期データとして `training`（Training Method）、`nutrition`（Performance Meal）、`lifestyle`（Mind & Lifestyle）の3カテゴリを用意する（フッターのリンク先と一致させる）。

### `author`（著者）
| フィールド | 型 | 必須 | 備考 |
|---|---|---|---|
| `name` | string | ○ | 初期データ: 石原 淳哉 |
| `slug` | slug | ○ | |
| `image` | image（`alt` 付き） | | |
| `bio` | text | | |
| `qualification` | array of string | | 例: NASM-PES |
| `socialLinks` | object | | `instagram` / `twitter` / `facebook` / `youtube` / `website`（すべて url） |
| `isActive` | boolean | ○ | 既定値 true |

---

## 5. ディレクトリ構成（追加・変更後の想定）

```
src/
  app/
    page.tsx                  … ホーム（デザイン担当）
    layout.tsx                … ルートレイアウト（メタデータ部分は Codex 可）
    blog/**                   … ブログ（ロジックは Codex、見た目は後日 Claude）
    studio/[[...tool]]/       … 新規: Sanity Studio
    api/
      revalidate/route.ts     … 新規: Webhook
      increment-views/        … 安全化
      posts/                  … 画像URL修正
    sitemap.xml/ robots.txt/  … SEO
  config/site.ts              … 新規: サイト設定・連絡先
  lib/sanity.ts               … 読み取りクライアント・クエリ
  lib/sanity.server.ts        … 新規: 書き込みクライアント（server-only）
  sanity/schemas/**           … 新規: スキーマ
sanity.config.ts              … 新規
.env.example                  … 新規
docs/CODEX_SPEC.md            … 本書
```

---

## 6. 開発の進め方

- `main` に直接 push しない。作業ブランチを作り、プルリクエストでマージする（`main` に入ると本番に即デプロイされるため）。
- 1つのPRは1つのタスク（上の番号単位）を目安にする。
- コミットメッセージは英語、PR本文は日本語で可。
- 秘密情報（トークン、`.env`）はコミットしない。
- 依存の追加は `npm install --legacy-peer-deps <pkg>`。

---

## 7. オーナー（石原さん）に依頼が必要なもの

Codex 側では用意できないため、作業前にオーナーへ確認してください。

1. Sanity のアカウントとプロジェクト（プロジェクトID、データセット名）
2. Sanity の API トークン（Editor 権限）→ Vercel に直接登録してもらう
3. Googleフォームの URL、LINE公式アカウントの友だち追加 URL
4. GA4 の測定ID（使う場合）
5. 独自ドメインを取得するかどうか（Cloudflare で管理予定）
6. Cookie同意バナーを出すかどうか

---

## 8. 受け入れ基準（全タスク共通）

- [ ] `npm run build` が成功する（警告の増加なし）。
- [ ] `npx tsc --noEmit` でエラーが増えていない。
- [ ] 本番ビルド（`npm run build && npm start`）でホームを開き、ブラウザのコンソールに **React のハイドレーションエラー（#418）が出ない**。
- [ ] ホームのオープニング（「しなきゃ」→「したい！」）とファーストビューの見出しアニメーションが動く。
- [ ] 「視差効果を減らす」（`prefers-reduced-motion`）でも、全コンテンツが表示される。
- [ ] スマホ幅（390px）とPC幅（1440px）で、レイアウト崩れや横スクロールが出ない。
- [ ] Sanity の環境変数が**未設定でも**ビルドが通り、ブログは「記事がありません」と表示される。
- [ ] 秘密情報がリポジトリに含まれていない。
