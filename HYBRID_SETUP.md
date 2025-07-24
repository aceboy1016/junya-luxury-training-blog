# JUNYA LUXURY TRAINING - ハイブリッド構成セットアップガイド

## 🏗️ アーキテクチャ概要

```
WordPress メインサイト (https://your-domain.com/)
├── / (ホーム)
├── /about (プロフィール)  
├── /service (サービス)
├── /price (料金)
├── /contact (お問い合わせ)
└── /blog → Next.js Sanity Blog (別サーバー)
```

## 🚀 セットアップ手順

### 1. WordPressサイトの設定

#### A. ナビゲーションメニューの更新

WordPressの管理画面で：

1. **外観 > メニュー** に移動
2. 「ブログ」メニュー項目を以下に変更：
   - **URL**: `https://blog.junya-personal-training.com/blog`
   - **リンクターゲット**: 新しいタブで開く

#### B. テーマファイルの修正

`header.php` または `navigation.php` を編集：

```php
<nav class="main-navigation">
  <a href="/">ホーム</a>
  <a href="/about">プロフィール</a>
  <a href="/service">サービス</a>
  <a href="/price">料金</a>
  <a href="https://blog.junya-personal-training.com/blog" target="_blank">ブログ</a>
  <a href="/contact">お問い合わせ</a>
</nav>
```

### 2. Next.js Sanityブログの設定

#### A. 環境変数の更新

`.env.local` を編集：

```bash
# WordPress サイトURL
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com

# Sanityブログ用の独立したURL
NEXT_PUBLIC_SITE_URL=https://blog.junya-personal-training.com
```

#### B. ドメイン設定

**オプション1: サブドメイン**
- WordPressサイト: `https://junya-personal-training.com`
- Sanityブログ: `https://blog.junya-personal-training.com`

**オプション2: 同一ドメイン（リバースプロキシ）**
- WordPressサイト: `https://junya-personal-training.com`
- Sanityブログ: `https://junya-personal-training.com/blog`

### 3. デプロイ設定

#### A. Vercel設定 (推奨)

`vercel.json`:

```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/blog/(.*)",
      "dest": "/$1"
    }
  ]
}
```

#### B. カスタムドメインの設定

1. Vercelダッシュボードで：
   - **Settings > Domains**
   - `blog.junya-personal-training.com` を追加

2. DNS設定：
   ```
   Type: CNAME
   Name: blog
   Value: cname.vercel-dns.com
   ```

### 4. WordPressからブログへの誘導

#### A. フッターウィジェット

WordPressの **外観 > カスタマイズ > ウィジェット** で：

```html
<div class="blog-promotion">
  <h3>最新のトレーニング情報</h3>
  <p>専門的なトレーニング知識とテクニックを発信中</p>
  <a href="https://blog.junya-personal-training.com/blog" class="btn" target="_blank">
    ブログを読む
  </a>
</div>
```

#### B. ショートコード作成

`functions.php` に追加：

```php
function junya_blog_link_shortcode($atts) {
    $atts = shortcode_atts(array(
        'text' => 'ブログを読む',
        'style' => 'button'
    ), $atts);
    
    if ($atts['style'] === 'button') {
        return '<a href="https://blog.junya-personal-training.com/blog" class="blog-link-btn" target="_blank">' . esc_html($atts['text']) . '</a>';
    }
    
    return '<a href="https://blog.junya-personal-training.com/blog" target="_blank">' . esc_html($atts['text']) . '</a>';
}
add_shortcode('junya_blog_link', 'junya_blog_link_shortcode');
```

使用例：
```
[junya_blog_link text="最新記事を読む" style="button"]
```

### 5. SEO設定

#### A. WordPressサイトのSEO

**Yoast SEO** または **RankMath** で：

- **サイトマップ**: WordPressサイトのページのみ
- **内部リンク**: ブログへのリンクは `external` として設定

#### B. SanityブログのSEO

- **独立したサイトマップ**: `/blog/sitemap.xml`
- **Google Search Console**: 別プロパティとして登録
- **Google Analytics**: 同一プロパティで異なるビューを設定

### 6. パフォーマンス最適化

#### A. CDN設定

- **WordPressサイト**: CloudFlare等のCDN
- **Sanityブログ**: Vercel Edge Network（自動）

#### B. キャッシュ設定

WordPressの `.htaccess`:

```apache
# ブログへのリンクはキャッシュしない
<LocationMatch "^/blog">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
</LocationMatch>
```

## 🔧 トラブルシューティング

### よくある問題

1. **CORS エラー**
   ```javascript
   // next.config.ts に追加
   headers: async () => [
     {
       source: '/api/:path*',
       headers: [
         { key: 'Access-Control-Allow-Origin', value: 'https://your-wordpress-site.com' }
       ]
     }
   ]
   ```

2. **SSL証明書の問題**
   - Vercelで自動SSL有効化
   - WordPressでSSL設定確認

3. **ナビゲーションの一貫性**
   - 両サイトで同じデザインシステム使用
   - CSSクラス名の統一

## 📊 メリット

1. **WordPressの利点活用**
   - 簡単なページ管理
   - 豊富なプラグイン
   - SEO機能

2. **Next.js/Sanityの利点活用**  
   - 高速なブログ表示
   - 優れた開発体験
   - モダンなCMS機能

3. **独立した運用**
   - 互いに影響しない
   - 個別にスケール可能
   - 異なる技術スタック使用可能

## 🚀 本番運用での推奨事項

1. **モニタリング**
   - Vercel Analytics（ブログ）
   - WordPress統計（メインサイト）

2. **バックアップ**
   - WordPress: 定期バックアップ
   - Sanity: 自動バックアップ機能

3. **セキュリティ**
   - WordPressセキュリティプラグイン
   - Vercelのセキュリティヘッダー設定

これでWordPressメインサイト + Sanityブログのハイブリッド構成が完成します！