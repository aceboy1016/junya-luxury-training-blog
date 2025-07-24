# JUNYA LUXURY TRAINING - WordPress Blog Integration

このディレクトリには、WordPressサイトにJUNYAブログを統合するためのファイルが含まれています。

## 統合方法

### 1. WordPressサイトにiframeで組み込む

```html
<!-- WordPress投稿/固定ページに追加 -->
<div id="junya-blog-container">
  <iframe 
    src="http://localhost:3000/blog/embed" 
    width="100%" 
    height="800px" 
    frameborder="0"
    style="border: none; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"
  >
  </iframe>
</div>
```

### 2. WordPress REST APIとの連携

```php
// functions.php に追加
function add_junya_blog_api() {
    wp_enqueue_script('junya-blog', 'http://localhost:3000/_next/static/chunks/blog-widget.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'add_junya_blog_api');
```

### 3. カスタムショートコード

```php
// functions.php に追加
function junya_blog_shortcode($atts) {
    $atts = shortcode_atts(array(
        'limit' => 6,
        'category' => '',
        'layout' => 'grid'
    ), $atts);
    
    return '<div id="junya-blog-widget" data-limit="' . $atts['limit'] . '" data-category="' . $atts['category'] . '" data-layout="' . $atts['layout'] . '"></div>';
}
add_shortcode('junya_blog', 'junya_blog_shortcode');
```

## 使用例

```
[junya_blog limit="3" category="training" layout="grid"]
```