# Deploy Command - Junya Luxury Training Blog

本コマンドは、石原様の開発環境（Mac mini/MacBook）からVercelへのデプロイを行うための標準ワークフローです。

## 使用方法
1. **GitHubへのPush**:
   ```bash
   git add .
   git commit -m "[更新内容]"
   git push origin main
   ```
2. **Vercelによる自動デプロイ**:
   Push完了後、[Vercel Dashboard](https://vercel.com/junya-luxury-training-blog) でビルド状況を確認可能。

## デプロイ前のチェックリスト
- [ ] `npm run build` がローカルで成功するか確認。
- [ ] SEOチェッカーでメタタグの抜け漏れがないか確認。
- [ ] `./src/lib/sanity.ts` の環境変数が正しく、記事が取得できるか確認。
