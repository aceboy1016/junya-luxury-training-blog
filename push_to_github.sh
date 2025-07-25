#!/bin/bash

# GitHub リポジトリにプッシュするスクリプト
# 使用方法: ./push_to_github.sh YOUR_GITHUB_USERNAME

if [ $# -eq 0 ]; then
    echo "使用方法: ./push_to_github.sh YOUR_GITHUB_USERNAME"
    exit 1
fi

USERNAME=$1
REPO_URL="https://github.com/$USERNAME/junya-luxury-training-blog.git"

echo "🚀 GitHub リポジトリにプッシュ中..."
echo "リポジトリURL: $REPO_URL"

# 既存のリモートを削除（存在する場合）
git remote remove origin 2>/dev/null || true

# 新しいリモートを追加
git remote add origin $REPO_URL

# プッシュ
git push -u origin main

echo "✅ 完了！リポジトリURL: $REPO_URL"