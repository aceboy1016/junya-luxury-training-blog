/**
 * J. ISHIHARA - Premium Blog Widget
 * WordPress等、外部サイトに埋め込むための公式ウィジェット
 */
(function() {
  const styles = `
    .junya-blog-widget {
      font-family: 'Outfit', 'Inter', sans-serif;
      border: 1px solid #f4f4f5;
      padding: 24px;
      background: #ffffff;
      max-width: 400px;
      text-align: center;
      transition: all 0.5s ease;
    }
    .junya-blog-widget:hover {
      border-color: #262636;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.05);
    }
    .junya-blog-title {
      font-weight: 900;
      font-size: 14px;
      letter-spacing: 0.4em;
      color: #262636;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .junya-blog-navy { color: #262636; }
    .junya-blog-button {
      display: inline-block;
      background: #262636;
      color: #ffffff;
      padding: 12px 32px;
      text-decoration: none;
      font-size: 10px;
      font-weight: 900;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      transition: all 0.3s ease;
    }
    .junya-blog-button:hover {
      background: #1e1e2b;
      transform: translateY(-2px);
    }
  `;

  const styleTag = document.createElement('style');
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);

  const widget = document.createElement('div');
  widget.className = 'junya-blog-widget';
  widget.innerHTML = `
    <div class="junya-blog-title">
      J. ISHIHARA <span class="junya-blog-navy">Official Media</span>
    </div>
    <p style="font-size: 12px; color: #71717a; line-height: 2; margin-bottom: 24px; font-weight: 500; letter-spacing: 0.1em;">
      科学的根拠に基づいた、<br>最高峰のコンディショニング・メソッド。
    </p>
    <a href="https://junya-official.com/blog" class="junya-blog-button" target="_blank">View Assets</a>
  `;

  const container = document.getElementById('junya-blog-widget-container');
  if (container) {
    container.appendChild(widget);
  }
})();