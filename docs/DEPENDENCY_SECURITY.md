# 依存関係の修正（2026-11-25）

更新前の `npm audit` はcritical 1 / high 18 / moderate 18 / low 1、計38件。更新後は開発用依存を含め全重要度0件。これは同日時点のnpmアドバイザリDBによる結果で、将来の新規指摘はCIで再検出する。

## 直接依存と実行環境

- Next.js 16.1.6 → 16.4.6。画像処理、キャッシュ、Proxy等のアドバイザリに対応。`eslint-config-next` も16.4.6へ揃え、公式flat configを使用。
- Sanity 4.22.1 → 6.25.0、next-sanity 10.0.3 → 13.5.1、@sanity/client 7.28.0。Next 16 / React 19対応のpeer範囲に整合。
- React / React DOM 19.3.1、PostCSS 8.5.33。Tailwindは3.4.19を維持し、Typographyは0.5.20。
- Node.js 22.23.5を `.nvmrc` とCIで指定。Vercelは `engines.node: "22.x"`。内部依存の最小要件は22.22.2。
- 許容範囲の脆弱な内部依存は `npm audit fix --legacy-peer-deps` で更新。`--force` による一括変更は不使用。

## 限定的なoverrides

最新版の親パッケージでも古い内部依存を指定しているため、次の経路のみ固定する。親パッケージの更新時に不要になっていないか確認し、外せる場合は削除して再監査する。

| 親 → 内部依存 | 固定版 | 理由・互換性確認 |
| --- | --- | --- |
| @tailwindcss/typography → postcss-selector-parser | 6.1.6 | 親の6.0.10固定を修正。6系を維持し、入れ子のproseセレクタが保持されることを確認 |
| @vercel/frameworks → js-yaml | 3.15.2 | 3系の修正版を使用し、親が使うsafeLoad APIを維持 |
| @vercel/frameworks → smol-toml | 1.9.1 | TOMLのDoS修正版。設定値の読み込みとnull-prototype出力を確認 |
| @oclif/core → minimatch | 11.0.9 | globparts増幅の修正版。親のminimatch関数によるスコープ付きプラグイン検索を確認 |
| sucrase → glob | 14.0.6 | キャンセル後の走査継続への修正版。親の非同期glob APIによるTSファイル収集を確認 |

関連アドバイザリ: [minimatch](https://github.com/advisories/GHSA-g3hv-75wg-m249)、[glob](https://github.com/advisories/GHSA-3g3m-2fjr-6pw4)、[selector parser](https://github.com/advisories/GHSA-rj75-hqrm-r3gf)。

## ビルドとlintの互換性

Next.jsに任せるべき `/_next/static` のCache-Control上書きを削除。Tailwind 3では処理されずブラウザも無視していた `@theme inline` を、CSSパーサーへ渡す前に限定的なPostCSSプラグインで除去する。`globals.css`、Tailwindの色/フォント定義、Header/Footer、motion、ポートレートには変更を加えない。有効なCSS宣言・メディアクエリが保持されることをテストする。将来Tailwind 4へ移行する場合はこの互換プラグインを削除する。

Next 16のReact Compiler向けlint診断で、既存のブログのtry/catch内JSXやeffect内setStateなど78件が新たに検出された。該当する既存ファイル・ルールだけ警告にし、元の82件と合わせて160件を可視化。新規コードの診断はエラーのまま。依存監査の0件とは別のコード品質上の残件であり、警告を隠す設定はしていない。

## 検証と再現

GitHub Actions `Verify` は、秘匿値なしのクリーンインストールから次を実行する。

```sh
npm ci --legacy-peer-deps
npm run audit
npm run lint
npm test
npx sanity schemas extract --enforce-required-fields --path /tmp/sanity-schema.json
npm run build
npx tsc --noEmit
```

ローカルでも同じNode 22で監査0件、テスト10件、スキーマ抽出、ビルド・型チェックを確認する。ブラウザでは本番ビルドの390px/1440px・通常/reduced-motion、オープニング/見出しアニメーション、コンソール、Studio未設定表示を確認する。実Sanityログイン・入稿は接続情報の登録後の確認事項。

移行資料: [Sanity v4→v5](https://www.sanity.io/docs/help/v4-to-v5)、[v5→v6](https://www.sanity.io/docs/help/v5-to-v6)、[Next.js 16](https://nextjs.org/docs/app/guides/upgrading/version-16)。既存スキーマ・カスタム認証・Vite設定を点検し、本プロジェクトは削除されたカスタム認証/Viteオプションを使用していない。
