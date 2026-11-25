# システム実装引き継ぎ

対象: 2026-11-24 の開発仕様書。外部サービスの設定値は後から入力する方針。

| 仕様 | 実装 |
| --- | --- |
| P0-1 | `/studio`、記事/カテゴリ/著者スキーマ、初期データ投入コマンド |
| P0-2 | 値なし `.env.example`、README のVercel登録手順 |
| P0-3 | 署名付きWebhook、slug変更/削除/関連ページ再検証 |
| P0-4 | `src/config/site.ts`、空の問い合わせURLを非表示 |
| P1-1 | 公開記事の編集ツール削除、管理画面/APIをBasic認証、noindex |
| P1-2 | サーバー専用書き込みクライアント、公開確認、Cookie/IP抑制、ボット除外 |
| P1-3 | `/api/posts` の画像をSanity CDN URLに修正 |
| P1-4 | タイトル、canonical、写真OG、Person/LocalBusiness/BlogPosting、サイトマップ/robots |
| P1-5 | 旧サブページをホームのセクションへ301、プライバシー連絡先統一 |
| P1-6 | Next.js 16設定・型修正、eslint CLI、旧ファイル削除 |
| P2 | GA未設定では読み込まない。Cookie同意方針・独自ドメインは未決定のため保留 |

## 実装上の判断

- Next.js 16では `middleware.ts` は非推奨のため、同じ入口保護を `src/proxy.ts` で実装。
- ホームはメタデータ・連絡先データのみ変更。マークアップ/クラス/アニメーション属性を維持。
- `MotionProvider` を移動せず、rootの描画前インラインスクリプトも維持。
- Studioにはサイト用Cursorも表示しない。ホームのJSON-LDはルートを判定するラッパーから出力。
- sitemapからnoindex記事・別canonicalの記事・リダイレクト元も除外。
- 読み取りデータは公開perspective・トークンなし。再検証後はCDNの古い内容を避ける。
- 閲覧数のIP抑制はプロセス内、Cookieはブラウザ単位。分散環境での厳密なレート制限ではない。
- eslintの旧コードに対するany/通常リンク/引用符等の指摘は警告として残す。デザイン担当のファイルはこの目的では変更しない。
- 記事本文で既存H1が入っていてもH2として描画し、記事タイトルとH1が重複しないようにする。

## オーナー設定後に確認すること

READMEの順にSanity publicデータセット、CORS、Vercel変数、Webhookを登録し、実際のStudioログイン・記事公開・更新・非公開・削除・slug変更を確認する。実アカウント/プロジェクトが未設定のため、この外部連携の完了を実装完了と混同しない。

Cookie同意の有無が未決定の間はGA測定IDを空欄にする。ドメイン、連絡先URLも未定のままで動作する。

## 検証結果（2026-11-25）

- `npm run build`: 通常のTurbopackビルド成功。Sanity等の実サービス環境変数は未設定。
- `npx tsc --noEmit`: エラーなし。
- `npm test`: 5件成功（Webhook署名/改ざん/削除・rename、公開記事検証/重複閲覧/書き込み失敗、Basic認証）。
- `npm run lint`: エラー0、旧コードの警告82件。警告は無効化せず残している。
- 本番ビルド + `npm start`: ホーム390px/1440px × 通常/reduced-motionで確認。画面幅とdocument幅が一致、対象要素の非表示残り0、H1は1つ。React #418なし。
- 最終メタデータ修正後のブラウザ確認: JavaScriptエラー0、リソース404なし。Studioはサイトヘッダー/フッター/カーソルなし、noindex。未存在記事もnoindex。
- `/about`, `/service`, `/price`, `/contact` の301と各セクションのLocationを確認。
- 未設定時の `/blog` に「記事がありません」、`/api/posts` は空配列、閲覧数はcounted:false。
- 実HTTPで、管理画面/APIの未認証401と認証済み200を確認。署名付きpost/category/author Webhookは200、署名なしは401。
- デザイン担当CSS・Header/Footer・motion・ポートレートの変更なし。ホームのマークアップ/クラスの変更なし。

最初のデスクトップ上の検証ではファイル読み込み遅延とGoogle Fonts通信失敗が発生したため、同一ソースを `/private/tmp` にコピーして検証。最終的には通常のフォント取得でビルド成功。一時的なフォントキャッシュやローカル認証用のダミー値はリポジトリに含めない。

初回検証ではNode.js 25の `--localstorage-file` 警告とnpm audit 38件が残っていたが、後続の依存更新で対応。現在はNode 22.23.5で検証し、監査は全重要度0件。詳細は `docs/DEPENDENCY_SECURITY.md` を参照。

Sanityの実ログイン・実記事公開・本番への更新反映は、オーナーが接続情報/CORS/Webhookを設定した後の確認事項。GA同意方針・独自ドメインは保留。
