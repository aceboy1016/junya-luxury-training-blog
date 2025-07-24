# JUNYA LUXURY TRAINING - WordPress統合ガイド

## 🚀 インストール手順

### 1. ファイルのアップロード

```bash
# WordPressテーマディレクトリにJavaScriptファイルをアップロード
/wp-content/themes/your-theme/js/junya-blog-widget.js
```

### 2. functions.php の編集

`/wp-content/themes/your-theme/functions.php` に以下のコードを追加：

```php
// 提供されたfunctions.phpの内容をコピー&ペースト
```

### 3. Next.jsサーバーの起動

```bash
# プロジェクトディレクトリで
npm run dev
# または本番環境では
npm run build && npm start
```

## 📝 使用方法

### 基本的な使用法

```
[junya_blog]
```

### カスタマイズ例

```
[junya_blog limit="3" category="training" layout="grid"]
[junya_blog limit="4" layout="list" show_images="false"]
[junya_blog category="nutrition" show_excerpt="false"]
```

### パラメータ一覧

| パラメータ | デフォルト | 説明 |
|-----------|----------|------|
| `limit` | 6 | 表示する記事数 |
| `category` | '' | カテゴリーフィルター |
| `layout` | 'grid' | レイアウト (grid/list) |
| `show_images` | 'true' | 画像表示の有無 |
| `show_excerpt` | 'true' | 抜粋表示の有無 |

## 🎨 カスタマイズ

### CSS のカスタマイズ

WordPressテーマの `style.css` に追加：

```css
/* Junya Blog Widget カスタムスタイル */
.junya-blog-widget {
  /* あなたのカスタムスタイル */
}

.junya-blog-card {
  /* カードのカスタムスタイル */
}

.junya-blog-title {
  /* タイトルのカスタムスタイル */
}
```

### JavaScript のカスタマイズ

```javascript
// カスタム初期化
new JunyaBlogWidget('custom-container', {
  limit: 8,
  category: 'training',
  layout: 'grid',
  apiUrl: 'https://your-domain.com/api'
});
```

## 🔧 トラブルシューティング

### よくある問題

1. **ブログが表示されない**
   - Next.jsサーバーが起動しているか確認
   - APIエンドポイント(`http://localhost:3000/api/posts`)にアクセス可能か確認

2. **スタイルが崩れる**
   - WordPressテーマのCSSと競合している可能性
   - カスタムCSSで上書き

3. **CORS エラー**
   - APIレスポンスでCORSヘッダーを設定済み
   - 本番環境では適切なドメインを設定

### デバッグ方法

```javascript
// ブラウザのコンソールでテスト
fetch('http://localhost:3000/api/posts?limit=3')
  .then(response => response.json())
  .then(data => console.log(data));
```

## 🌐 本番環境での設定

### 環境変数の設定

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
```

### SSL証明書の設定

HTTPSでの運用を推奨します。

## 📞 サポート

問題が発生した場合は、以下の情報を含めてお問い合わせください：

- WordPressのバージョン
- 使用中のテーマ
- エラーメッセージ（あれば）
- ブラウザのコンソールログ