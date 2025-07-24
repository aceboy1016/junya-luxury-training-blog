<?php
/**
 * JUNYA LUXURY TRAINING - WordPress Integration Functions
 * functions.php に追加するコード
 */

// Junya Blog Widget のスクリプトを読み込み
function enqueue_junya_blog_scripts() {
    wp_enqueue_script(
        'junya-blog-widget',
        get_template_directory_uri() . '/js/junya-blog-widget.js',
        array(),
        '1.0.0',
        true
    );
    
    // APIエンドポイントをJavaScriptに渡す
    wp_localize_script('junya-blog-widget', 'junyaBlogConfig', array(
        'apiUrl' => 'http://localhost:3000/api',
        'blogUrl' => 'http://localhost:3000/blog'
    ));
}
add_action('wp_enqueue_scripts', 'enqueue_junya_blog_scripts');

// Junya Blog ショートコード
function junya_blog_shortcode($atts) {
    // デフォルト値と属性をマージ
    $atts = shortcode_atts(array(
        'limit' => 6,
        'category' => '',
        'layout' => 'grid',
        'show_images' => 'true',
        'show_excerpt' => 'true',
        'title' => 'JUNYA LUXURY TRAINING BLOG'
    ), $atts);
    
    // ユニークなIDを生成
    $widget_id = 'junya-blog-widget-' . uniqid();
    
    // HTML出力
    ob_start();
    ?>
    <div 
        id="<?php echo esc_attr($widget_id); ?>" 
        class="junya-blog-container"
        data-limit="<?php echo esc_attr($atts['limit']); ?>"
        data-category="<?php echo esc_attr($atts['category']); ?>"
        data-layout="<?php echo esc_attr($atts['layout']); ?>"
        data-show-images="<?php echo esc_attr($atts['show_images']); ?>"
        data-show-excerpt="<?php echo esc_attr($atts['show_excerpt']); ?>"
        data-title="<?php echo esc_attr($atts['title']); ?>"
    >
        <!-- ウィジェットがここに読み込まれます -->
        <div style="text-align: center; padding: 2rem; color: #666;">
            ブログを読み込み中...
        </div>
    </div>
    
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        if (window.JunyaBlogWidget) {
            new JunyaBlogWidget('<?php echo esc_js($widget_id); ?>', {
                limit: <?php echo intval($atts['limit']); ?>,
                category: '<?php echo esc_js($atts['category']); ?>',
                layout: '<?php echo esc_js($atts['layout']); ?>',
                showImages: <?php echo $atts['show_images'] === 'true' ? 'true' : 'false'; ?>,
                showExcerpt: <?php echo $atts['show_excerpt'] === 'true' ? 'true' : 'false'; ?>
            });
        }
    });
    </script>
    <?php
    
    return ob_get_clean();
}
add_shortcode('junya_blog', 'junya_blog_shortcode');

// カスタム CSS の追加
function junya_blog_custom_styles() {
    ?>
    <style>
    .junya-blog-container {
        margin: 2rem 0;
        padding: 1rem;
    }
    
    /* レスポンシブデザイン */
    @media (max-width: 768px) {
        .junya-blog-grid {
            grid-template-columns: 1fr !important;
        }
    }
    
    /* WordPress テーマとの統合 */
    .junya-blog-widget a {
        text-decoration: none;
    }
    
    .junya-blog-widget a:hover {
        text-decoration: none;
    }
    </style>
    <?php
}
add_action('wp_head', 'junya_blog_custom_styles');

// 管理画面にショートコードのヘルプを追加
function junya_blog_admin_help() {
    $screen = get_current_screen();
    
    if ($screen->id === 'post' || $screen->id === 'page') {
        ?>
        <div class="notice notice-info">
            <h4>🏋️ JUNYA LUXURY TRAINING Blog ショートコード</h4>
            <p><strong>基本:</strong> <code>[junya_blog]</code></p>
            <p><strong>カスタム:</strong> <code>[junya_blog limit="3" category="training" layout="list"]</code></p>
            <ul>
                <li><strong>limit:</strong> 表示件数 (デフォルト: 6)</li>
                <li><strong>category:</strong> カテゴリー (空の場合は全て)</li>
                <li><strong>layout:</strong> grid または list (デフォルト: grid)</li>
                <li><strong>show_images:</strong> true または false (デフォルト: true)</li>
                <li><strong>show_excerpt:</strong> true または false (デフォルト: true)</li>
            </ul>
        </div>
        <?php
    }
}
add_action('admin_notices', 'junya_blog_admin_help');

// REST API エンドポイントの追加（オプション）
function register_junya_blog_api_routes() {
    register_rest_route('junya-blog/v1', '/sync', array(
        'methods' => 'POST',
        'callback' => 'sync_junya_blog_posts',
        'permission_callback' => function() {
            return current_user_can('manage_options');
        }
    ));
}
add_action('rest_api_init', 'register_junya_blog_api_routes');

function sync_junya_blog_posts() {
    // Sanity からの投稿データを WordPress に同期する処理
    // 必要に応じて実装
    return new WP_REST_Response(array(
        'success' => true,
        'message' => 'Blog sync functionality can be implemented here'
    ), 200);
}
?>