/**
 * JUNYA LUXURY TRAINING - WordPress Blog Widget
 * WordPressサイトに埋め込むためのJavaScriptウィジェット
 */

class JunyaBlogWidget {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.options = {
      apiUrl: 'http://localhost:3000/api',
      limit: options.limit || 6,
      category: options.category || '',
      layout: options.layout || 'grid',
      showImages: options.showImages !== false,
      showExcerpt: options.showExcerpt !== false,
      ...options
    };
    
    if (this.container) {
      this.init();
    }
  }

  async init() {
    this.container.innerHTML = this.getLoadingHTML();
    
    try {
      const posts = await this.fetchPosts();
      this.renderPosts(posts);
    } catch (error) {
      console.error('Junya Blog Widget Error:', error);
      this.container.innerHTML = this.getErrorHTML();
    }
  }

  async fetchPosts() {
    const params = new URLSearchParams({
      limit: this.options.limit,
      ...(this.options.category && { category: this.options.category })
    });

    const response = await fetch(`${this.options.apiUrl}/posts?${params}`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    return response.json();
  }

  renderPosts(posts) {
    const layoutClass = this.options.layout === 'list' ? 'junya-blog-list' : 'junya-blog-grid';
    
    const html = `
      <div class="junya-blog-widget">
        <style>
          .junya-blog-widget {
            font-family: 'Inter', 'Hiragino Kaku Gothic Pro', 'Yu Gothic', sans-serif;
            max-width: 1200px;
            margin: 0 auto;
          }
          .junya-blog-header {
            text-align: center;
            margin-bottom: 2rem;
          }
          .junya-blog-title {
            font-size: 2rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 0.5rem;
          }
          .junya-blog-gold { color: #F59E0B; }
          .junya-blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
          }
          .junya-blog-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
          }
          .junya-blog-card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            overflow: hidden;
            transition: all 0.3s ease;
            text-decoration: none;
            color: inherit;
          }
          .junya-blog-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
            text-decoration: none;
            color: inherit;
          }
          .junya-blog-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
          .junya-blog-content {
            padding: 1.5rem;
          }
          .junya-blog-post-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 0.5rem;
            line-height: 1.4;
          }
          .junya-blog-excerpt {
            color: #666;
            margin-bottom: 1rem;
            line-height: 1.6;
          }
          .junya-blog-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.875rem;
            color: #999;
          }
          .junya-blog-more {
            display: inline-flex;
            align-items: center;
            padding: 12px 24px;
            background: linear-gradient(135deg, #F59E0B, #FBBF24);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            margin: 0 auto;
          }
          .junya-blog-more:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 20px rgba(245, 158, 11, 0.4);
            text-decoration: none;
            color: white;
          }
          .junya-blog-loading {
            text-align: center;
            padding: 3rem;
            color: #666;
          }
        </style>
        
        <div class="junya-blog-header">
          <h2 class="junya-blog-title">
            JUNYA <span class="junya-blog-gold">LUXURY TRAINING</span> BLOG
          </h2>
          <p style="color: #666;">最新のトレーニング情報をお届け</p>
        </div>
        
        <div class="${layoutClass}">
          ${posts.map(post => this.renderPostCard(post)).join('')}
        </div>
        
        <div style="text-align: center;">
          <a href="/blog" class="junya-blog-more" target="_blank">
            すべての記事を見る →
          </a>
        </div>
      </div>
    `;
    
    this.container.innerHTML = html;
  }

  renderPostCard(post) {
    const imageHtml = this.options.showImages && post.mainImage 
      ? `<img src="${post.mainImage}" alt="${post.title}" class="junya-blog-image">` 
      : '';
    
    const excerptHtml = this.options.showExcerpt && post.excerpt 
      ? `<p class="junya-blog-excerpt">${post.excerpt}</p>` 
      : '';

    return `
      <a href="/blog/${post.slug}" class="junya-blog-card" target="_blank">
        ${imageHtml}
        <div class="junya-blog-content">
          <h3 class="junya-blog-post-title">${post.title}</h3>
          ${excerptHtml}
          <div class="junya-blog-meta">
            <span>${post.author}</span>
            <span>${new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
          </div>
        </div>
      </a>
    `;
  }

  getLoadingHTML() {
    return `
      <div class="junya-blog-loading">
        <div style="display: inline-block; width: 40px; height: 40px; border: 3px solid #f3f3f3; border-top: 3px solid #F59E0B; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        <p>ブログを読み込み中...</p>
        <style>
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      </div>
    `;
  }

  getErrorHTML() {
    return `
      <div style="text-align: center; padding: 2rem; color: #666;">
        <p>ブログの読み込みに失敗しました。</p>
        <button onclick="location.reload()" style="padding: 8px 16px; background: #F59E0B; color: white; border: none; border-radius: 4px; cursor: pointer;">
          再読み込み
        </button>
      </div>
    `;
  }
}

// 自動初期化
document.addEventListener('DOMContentLoaded', function() {
  // data属性からオプションを取得
  const containers = document.querySelectorAll('[id^="junya-blog-widget"]');
  containers.forEach(container => {
    const options = {
      limit: container.dataset.limit ? parseInt(container.dataset.limit) : 6,
      category: container.dataset.category || '',
      layout: container.dataset.layout || 'grid',
      showImages: container.dataset.showImages !== 'false',
      showExcerpt: container.dataset.showExcerpt !== 'false'
    };
    
    new JunyaBlogWidget(container.id, options);
  });
});

// グローバルで利用可能にする
window.JunyaBlogWidget = JunyaBlogWidget;