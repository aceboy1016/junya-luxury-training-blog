import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Existing design/legacy content lint debt remains visible as warnings.
// New system files keep the default strict rules.
const eslintConfig = [
  { ignores: ['.next/**', 'out/**', 'build/**', 'node_modules/**', 'next-env.d.ts'] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ['src/components/{ArticleTags,AutoTagGenerator,Header,PortableText,RelatedPosts,SEOAnalysis}.tsx', 'src/components/motion/{MotionProvider,Preloader}.tsx', 'src/app/blog/**/*.tsx', 'src/app/about/page.tsx', 'src/app/service/page.tsx', 'src/app/price/page.tsx', 'src/app/contact/page.tsx', 'src/app/api/seo-analysis/route.ts', 'src/lib/{sanity,seoUtils,tagUtils,gtag}.ts', 'src/types/gtag.d.ts', 'tailwind.config.js'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
      '@next/next/no-html-link-for-pages': 'warn',
      'react/no-unescaped-entities': 'warn',
    },
  },
];

export default eslintConfig;
