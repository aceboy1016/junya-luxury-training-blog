# Google Analytics 4 (GA4) セットアップガイド

このプロジェクトではGoogle Analytics 4を使用してウェブサイトのアクセス解析を行います。

## 🚀 セットアップ手順

### 1. Google Analytics 4 プロパティの作成

1. [Google Analytics](https://analytics.google.com/) にアクセス
2. 「管理」→「プロパティを作成」
3. プロパティ名を入力（例：「JUNYA ISHIHARA PERSONAL TRAINING」）
4. 報告タイムゾーンを「日本」に設定
5. 通貨を「日本円」に設定
6. 「次へ」をクリック

### 2. データストリームの設定

1. 「ウェブ」を選択
2. ウェブサイトURL（例：https://your-domain.com）を入力
3. ストリーム名を入力
4. 「ストリームを作成」をクリック

### 3. 測定IDの取得

1. 作成されたデータストリームの詳細画面を開く
2. 「測定ID」（G-XXXXXXXXXX形式）をコピー

### 4. 環境変数の設定

`.env.local` ファイルに以下を追加：

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**重要**: `G-XXXXXXXXXX` を実際の測定IDに置き換えてください。

## 📊 実装されている機能

### 自動トラッキング
- ✅ **ページビュー** - 全ページで自動計測
- ✅ **セッション** - ユーザーセッションの追跡
- ✅ **ユーザーエンゲージメント** - スクロール、滞在時間等

### カスタムイベント
- 📖 **ブログ記事閲覧** - 記事ごとの詳細なトラッキング
- 🔗 **ソーシャルシェア** - Twitter、Facebook、LINE等のシェア追跡
- 🏷️ **カテゴリークリック** - ブログカテゴリの選択
- 🔍 **検索クエリ** - サイト内検索の利用状況
- 📧 **お問い合わせ** - フォーム送信の追跡

### プライバシー対応
- 🍪 **Cookie同意バナー** - GDPR/Cookie法対応
- 🔒 **プライバシー設定** - ユーザーが分析を拒否可能
- 📋 **透明性** - データ収集について明確に説明

## 🎯 Google Analytics ダッシュボードで確認できる内容

### リアルタイムレポート
- 現在のアクティブユーザー数
- 閲覧中のページ
- 流入元（検索、ソーシャル、直接など）

### エンゲージメントレポート
- 人気の記事ランキング
- ページ滞在時間
- 直帰率
- スクロール深度

### カスタムイベント
- ブログ記事の人気度分析
- ソーシャルシェアの効果測定
- カテゴリー別の関心度
- 検索キーワード分析

## 🔧 カスタマイズ

### 新しいイベントを追加する場合

1. `src/lib/gtag.ts` に新しい関数を追加：

```typescript
export const trackCustomEvent = (eventName: string, parameters: any) => {
  event('custom_event', {
    event_category: 'Custom',
    event_label: eventName,
    ...parameters,
  })
}
```

2. コンポーネントで使用：

```typescript
import { trackCustomEvent } from '@/lib/gtag'

// イベント発火
trackCustomEvent('button_click', { button_name: 'CTA Button' })
```

### プライバシー設定のカスタマイズ

`src/components/CookieConsent.tsx` でCookie同意バナーのデザインや文言を変更できます。

## 📈 おすすめの分析方法

### 1. コンテンツパフォーマンス分析
- どの記事が人気か
- どのカテゴリーが読まれているか
- 記事の読了率

### 2. ユーザー行動分析
- サイト内の移動パターン
- 離脱ポイントの特定
- コンバージョン経路

### 3. 流入元分析
- SEO効果の測定
- ソーシャルメディアからの流入
- 直接流入の傾向

## 🛡️ プライバシーとコンプライアンス

### GDPR対応
- ユーザーの明示的な同意を取得
- データ処理の透明性を確保
- オプトアウト機能を提供

### 推奨事項
- プライバシーポリシーページの作成
- データ保持期間の明記
- ユーザーデータの取り扱い方針の説明

## 🚨 注意事項

1. **測定IDの管理**: `.env.local` ファイルを `.gitignore` に追加済み
2. **本番環境**: Vercel等での環境変数設定を忘れずに 
3. **GDPR対応**: EU圏のユーザーがいる場合は法的要件を確認
4. **データ保持**: Google Analytics のデータ保持期間を適切に設定

## 📞 サポート

設定で困った場合は：
- [Google Analytics ヘルプセンター](https://support.google.com/analytics/)
- [GA4 移行ガイド](https://support.google.com/analytics/answer/9744165)
- [Next.js + GA4 公式ドキュメント](https://nextjs.org/docs/basic-features/supported-browsers-features)