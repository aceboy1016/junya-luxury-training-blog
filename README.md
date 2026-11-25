# J. ISHIHARA — システム運用

Next.js 16 / React 19 / Sanity Studio。デザインの担当範囲は `CLAUDE.md` と `.claude/rules/branding.md` を参照。`main` への push は本番公開になるため、作業ブランチからPRで変更してください。

## ローカル起動

Node.js 22.23.5（`.nvmrc`）で検証しています。Sanityの内部依存がNode.js 22.22.2以上を必要とするため、Node 22系の最新パッチを使用してください。Vercelは `package.json` の `engines.node: "22.x"` に合わせます。

```sh
npm install --legacy-peer-deps
cp .env.example .env.local
npm run dev
```

Sanity 未設定でもビルドでき、ブログは空状態、`/studio` は設定案内になります。実際の値やトークンをコミットしないでください。

```sh
npm run audit
npm run lint
npm test
npx tsc --noEmit
npm run build
npm start
```

## あとから設定するもの

`.env.example` はすべて値なしです。ローカルは `.env.local`、本番は **Vercel → Project → Settings → Environment Variables** に登録し、**Redeploy** します。公開変数もビルド時に埋め込まれるため再デプロイが必要です。Preview / Production の適用先を確認してください。

| 変数 | 用途 |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity のプロジェクトID（公開可） |
| `NEXT_PUBLIC_SANITY_DATASET` | データセット名。通常 `production`（公開可） |
| `SANITY_API_TOKEN` | Editor権限。閲覧数書き込みと初期データ投入時だけ必要。サーバー専用 |
| `SANITY_REVALIDATE_SECRET` | Sanity Webhook と一致するランダムな秘密文字列。サーバー専用 |
| `NEXT_PUBLIC_SITE_URL` | サイトの正式URL。未設定時は `https://junya-luxury-training-blog.vercel.app` |
| `NEXT_PUBLIC_GA_ID` | 任意のGA4測定ID。未設定ならGAは読み込まない |
| `GOOGLE_SITE_VERIFICATION` | 任意のSearch Console確認値 |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD` | 旧編集補助ツールのBasic認証。両方未設定なら閉鎖（503） |

Sanityのデータセットは **public** にしてください。サイトはトークンなしで公開データを読みます。読み取りクライアントはCDN対応、ページ取得はWebhook後の古いCDN応答を避けるため `useCdn: false` / `cache: 'no-store'` を指定します。記事・カテゴリ・サイトマップの `revalidate = 60` は維持しています。

## Sanity Studio と初期データ

1. Sanity管理画面でプロジェクトとpublicデータセットを用意します。
2. 上記のプロジェクトID・データセット名を設定し再デプロイします。
3. Sanity管理画面 → API → CORS origins に次を追加し、**Allow credentials** を有効にします。
   - `https://junya-luxury-training-blog.vercel.app`
   - `http://localhost:3000`
   - プレビューでStudioを使う場合は、そのプレビューの正確なoriginも追加します。
4. `/studio` を開いてSanityアカウントでログインします。権限はSanity側で管理します。
5. 必要な場合のみEditorトークンを `.env.local` に設定し、`npm run sanity:seed` を一度実行します。`training` / `nutrition` / `lifestyle` と「石原 淳哉」を作成します。同じ固定IDの既存ドキュメントは上書きしません。既存カテゴリが別IDで同じスラッグを使っている場合は投入せず、既存データを利用してください。
6. 著者・カテゴリを選び、記事のタイトル・英小文字/数字/ハイフンのslug・本文・公開日時を入力します。**「サイトに公開する」をONにしたうえでPublish**してください。画像にはaltを入れます。本文はH2から開始します。
7. `/blog` と `/blog/入力したslug` で確認します。おすすめは公開日の新しい順に最大3件です。

Studioにはヘッダー・フッター・MotionProviderを入れていません。メタデータでnoindexにし、robotsとサイトマップから除外しています。

## 即時反映するWebhook

Sanity管理画面 → API → Webhooks → Create webhook:

- URL: `https://junya-luxury-training-blog.vercel.app/api/revalidate`
- Dataset: 対象データセット
- Method: POST
- Trigger: **Create / Update / Delete**
- Drafts: 無効
- Filter: `_type in ["post", "category", "author"]`
- Secret: Vercelの `SANITY_REVALIDATE_SECRET` と同じ値
- Projection:

```groq
{
  "_type": coalesce(after()._type, before()._type),
  "slug": coalesce(after().slug.current, before().slug.current),
  "previousSlug": before().slug.current
}
```

署名検証には `next-sanity/webhook` の `parseBody` を使用します。伝播待機後にブログ、記事、カテゴリ、サイトマップを無効化し、次のアクセスで再生成します。スラッグ変更前のURL、削除、著者更新も対象です。SanityのWebhookログで200と `{ "revalidated": true }` を確認してください。署名なし/不一致は401、Secret未設定は503です。閲覧数の更新もこのフィルタに一致します。利用が増えた場合は、記事内容の変更だけに絞るフィルタを検討してください。

公式資料: [Sanity Webhooks](https://www.sanity.io/docs/nextjs/validating-sanity-webhooks-nextjs)

## お問い合わせと解析

`src/config/site.ts` の `contact.googleForm` / `contact.line` に受領したHTTPS URLを設定してPRにします。空欄の項目はホームに表示しません。メールは同ファイルに集約しています。

GAは有効な `G-...` を設定した場合に読み込みます。現状は同意バナーを有効化していません。Cookie同意方針を決めるまでは測定IDを空にしてください。同意後のみ読み込む運用へ変更する場合は別途実装・動作確認します。

## 管理画面・閲覧数

`/admin/tag-generator` と `/api/generate-tags`、`/api/seo-analysis` は同じBasic認証で保護します。Next.js 16の名称に合わせ `src/proxy.ts` を使用しています（旧 `middleware.ts` 相当）。本番はHTTPSで利用してください。

閲覧数は任意機能です。トークン未設定ならカウントせず正常応答します。公開記事の存在とリビジョンを確認して加算し、ボット・クロスサイト要求を除外します。同じブラウザは記事別HttpOnly Cookieで30分抑制し、同じIP・記事の連打もプロセス内で抑制します。IPはハッシュ化して一時保持し、ログ/DBには保存しません。**分散環境全体での厳密な一意計測ではありません**。Cookie削除や別インスタンスを跨ぐ悪用対策が必要になれば共有レート制限ストアを導入してください。

## 公開前の確認

- 環境変数なしで build / tsc が通り、ブログが空状態になる。
- 本番ビルドでホームのオープニング・見出しアニメーションが動き、React #418 が出ない。
- 390px / 1440px で横スクロール・レイアウト崩れがない。
- reduced-motionで全コンテンツが見える。
- Studioで記事・カテゴリ・著者を作成/公開し、ブログで表示される。
- 更新・非公開・削除・slug変更後にブログとサイトマップに反映される。
- `.env.local` やトークンがgitに含まれない。

独自ドメイン取得後は `NEXT_PUBLIC_SITE_URL`、Sanity CORS / Webhook URL、Vercelドメイン設定をまとめて更新します。旧ホストのリダイレクトは新ドメイン確定後に設定してください。

## 依存関係とCI

2026-11-25の依存更新で、開発用を含む `npm audit` の指摘は38件から0件になりました。修正バージョンと限定的な `overrides` の根拠は [依存関係の更新記録](docs/DEPENDENCY_SECURITY.md) を参照してください。

GitHub Actions `Verify` はPRごとにNode 22で `npm ci --legacy-peer-deps`、全重要度の監査、lint、テスト、Sanityスキーマ抽出、ビルド、型チェックを実行します。Sanityの実接続情報やAPIトークンはCIに不要です。依存を更新したら必ず同じチェックを通してください。既存UIに対するlint警告は残し、新規システムファイルのルールは緩めていません。
