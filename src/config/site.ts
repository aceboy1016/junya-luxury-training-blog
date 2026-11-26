export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://junya-luxury-training-blog.vercel.app').replace(/\/$/, ''),
  // 公式サイト（AIサービスなど、トレーニング以外の活動も紹介）
  officialSite: (process.env.NEXT_PUBLIC_OFFICIAL_SITE_URL || 'https://ishihara-official-site.vercel.app').replace(/\/$/, ''),
  contact: {
    googleForm: '',
    line: 'https://lin.ee/8dAJaci',
    email: 'junya.ishihara1016@gmail.com',
  },
}
