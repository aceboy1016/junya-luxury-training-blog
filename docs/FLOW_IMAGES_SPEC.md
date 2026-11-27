# 「初回サービスの流れ」画像 制作仕様書（Antigravity向け）

最終更新: 2026-11-27 / 対象リポジトリ: `aceboy1016/junya-luxury-training-blog`

ホームの「05 初回サービスの流れ」セクションに入れる画像4点を制作し、サイトに組み込むための仕様書です。

---

## 1. ゴール

- 4つのステップ（お申し込み → ご来店 → カウンセリング → コンディション）それぞれに、**1枚ずつ高品質な画像**を入れる。
- はじめての方が「こういう流れで、こういう雰囲気の場所で受けられるんだ」と**一目でイメージできる**こと。
- サイト全体のトーン（白 × 淡い空色、爽やか、上質、清潔感）と**4枚で統一感**があること。
- 前回、線画イラストで試したところ「物足りない」という判断でした。**アイコン的・フラットなイラストは不可**です。写真、またはフォトリアルな画像で作ってください。

---

## 2. 画面の場所と枠

| 項目 | 内容 |
|---|---|
| 場所 | `src/app/page.tsx` の `{/* ─── 05 Service Flow ─── */}` |
| 配置 | 各ステップの番号（01〜04）の上 |
| 枠の比率 | **4:3**（`aspect-[4/3]`、`object-cover`、角丸 `rounded-md`） |
| 表示サイズ | PC: 横4列で1枚あたり幅 約330px／スマホ: 1列で幅 約350px |
| 背景色 | セクション背景は `#F5F9FC`（breeze-50） |

PCでは4枚が横に並びます。**並べたときに色味・明るさ・カメラの距離感がそろっている**ことを最優先にしてください。

---

## 3. ビジュアルの方向性

### トーン
- **明るく、爽やか、上質**。ハイキー気味の自然光、白〜淡い空色が基調
- 清潔感のあるミニマルな空間。物が少なく、余白がある
- 人物は自然な表情・しぐさ。作り込んだ笑顔のストックフォト感は避ける
- 被写界深度は浅め（背景を少しぼかす）で、写真らしい奥行き

### 色（サイトのブランドカラー）
| 用途 | 色 |
|---|---|
| ベース | 白 `#FFFFFF`、淡い空色 `#F5F9FC` / `#E8F2F9` / `#D2E6F4` |
| アクセント | 空色 `#4A98D0` |
| 締め色 | 紺 `#2B3A55`（ウェアや小物に少量） |

ウェア・小物・インテリアは、白・淡いグレー・空色・紺の範囲に収めてください。**オレンジ、赤、蛍光色などの強い色は入れない**。

### 構図
- 主役は画面の中央寄りに置く。スマホでもPCでも、4:3の枠で切れないように**上下左右に10%程度の余白**を残す
- 4枚とも**横長の4:3で書き出す**（後から切り抜かない）

### 入れてはいけないもの
- 文字、ロゴ、ブランド名（ウェアのロゴも含む）、透かし
- 実在のジム・店舗だと誤解される要素（「HALLEL」の看板など）
- 特定の実在人物に似せること（石原さん本人を生成しない）
- 医療行為に見える表現（注射、診察台、白衣での診察など）
- 過度な筋肉の誇張、露出の多い服装

---

## 4. 4枚の内容

人物は日本人の成人。トレーナーは30代前半の男性、黒髪の短髪、淡い空色の無地Tシャツに紺のパンツ（石原さんの雰囲気に近づけるが、本人には似せない）。お客様は30〜40代の男女どちらでも可。

### 01 お申し込み（Apply）
- **場面**: 明るい自宅のリビングやカフェで、スマートフォンから体験セッションを予約しているところ
- **見せたいこと**: 気軽に申し込める、思い立ったらすぐ
- **構図**: 手元とスマホのアップ寄り。画面は白〜空色のUIがぼんやり見える程度（文字は読めないようにぼかす）。背景に自然光の窓、観葉植物
- 人物の顔は写さなくてよい

### 02 ご来店（Visit）
- **場面**: 明るくミニマルなプライベートスタジオの入口〜レセプション。都心のビルの中の、落ち着いた空間
- **見せたいこと**: 清潔で、居心地がよく、緊張しない場所
- **構図**: 室内の広がりが分かるやや引きの画。白い壁、明るい木の床、淡い空色のアクセント、観葉植物、整頓されたトレーニング器具が奥に少し見える
- 人物はなし、または後ろ姿が小さく写る程度

### 03 カウンセリング（Counsel）
- **場面**: トレーナーとお客様がテーブルを挟んで、タブレットを見ながら話している。または、立った姿勢をトレーナーが横から確認している
- **見せたいこと**: いきなり鍛えず、まず丁寧に聞いて、身体の状態を確かめる
- **構図**: 2人が自然に会話している中距離。タブレットの画面は読めないようにぼかす
- 手元のメモやタブレットに、姿勢・身体の状態を確認している雰囲気を出す

### 04 コンディション（Condition）
- **場面**: 明るいスタジオで、お客様がストレッチやモビリティのエクササイズ（例: 股関節や胸椎の動き）を行い、トレーナーが横で手を添えてサポートしている
- **見せたいこと**: 「鍛える」前に「整える」。無理のない、身体が軽くなっていく感覚
- **構図**: 動きが分かる中距離。重いバーベルや苦しそうな表情は避け、心地よさそうな表情

---

## 5. 生成用プロンプト（参考）

画像生成AIを使う場合の、英語の参考プロンプトです。共通部分を各プロンプトの末尾に付けてください。

**共通（末尾に付ける）**
```
bright high-key editorial photography, soft natural daylight, airy and fresh mood,
white and pale sky-blue color palette (#FFFFFF, #F5F9FC, #E8F2F9, #4A98D0) with small navy accents (#2B3A55),
minimal clean premium private fitness studio aesthetic, shallow depth of field, 35mm lens,
realistic skin texture, Japanese adults, no text, no logos, no watermark, 4:3 aspect ratio
```

**01**
```
close-up of a person's hands holding a smartphone, booking a personal training session,
the phone screen shows a soft blurred white and light-blue interface (unreadable),
sitting in a bright living room by a window with a small green plant, relaxed and casual
```

**02**
```
interior of a bright minimal private conditioning studio in Tokyo, white walls, light oak floor,
pale sky-blue accent wall, green plants, neatly arranged training equipment softly blurred in the background,
calm welcoming reception area, wide shot, no people
```

**03**
```
a Japanese male personal trainer in his early 30s with short black hair, wearing a plain pale-blue t-shirt and navy pants,
having a calm consultation with a client at a small white table, looking at a tablet together (screen blurred),
natural friendly conversation, bright minimal studio
```

**04**
```
the same Japanese male trainer gently assisting a client doing a hip mobility stretch on a light-gray mat,
bright minimal studio, comfortable relaxed expression, focus on conditioning rather than heavy lifting
```

03と04は**同じトレーナーに見えるよう**、可能なら同じ人物設定・参照画像で生成してください。

---

## 6. 書き出し

| 項目 | 内容 |
|---|---|
| 形式 | **WebP**（品質80前後） |
| サイズ | **1600 × 1200 px**（4:3） |
| 容量 | 1枚 **300KB以下** を目安 |
| ファイル名 | `public/flow/01.webp` 〜 `public/flow/04.webp` |
| 色空間 | sRGB |

---

## 7. サイトへの組み込み

コード側の準備はできています。**`src/app/page.tsx` の `flow` 配列に、`img` と `alt` を足すだけ**です。

```ts
const flow = [
  { n: '01', t: 'お申し込み', e: 'Apply', d: '…', img: '/flow/01.webp', alt: 'スマートフォンから体験セッションを予約するイメージ' },
  { n: '02', t: 'ご来店', e: 'Visit', d: '…', img: '/flow/02.webp', alt: '明るくミニマルなプライベートスタジオの室内イメージ' },
  { n: '03', t: 'カウンセリング', e: 'Counsel', d: '…', img: '/flow/03.webp', alt: 'トレーナーとタブレットを見ながらカウンセリングするイメージ' },
  { n: '04', t: 'コンディション', e: 'Condition', d: '…', img: '/flow/04.webp', alt: 'トレーナーのサポートで股関節のストレッチを行うイメージ' },
]
```

- `img` があるステップだけ、番号の上に4:3の画像が表示されます（画面に入るとクリップで開く演出付き）。
- **4枚そろえて入れる**こと（1枚だけだと段差ができて不揃いに見えます）。
- 画像を生成AIで作った場合は、セクションの説明文の下などに小さく「※写真はイメージです」と入れてください（実際のスタジオの写真と誤解されないように）。例:
  ```tsx
  <p className="mt-6 text-xs text-zinc-400">※写真はイメージです</p>
  ```

### 変更してよいファイル
- `public/flow/*.webp`（新規）
- `src/app/page.tsx` の **`flow` 配列** と、上記「※写真はイメージです」の1行のみ

### 変更しないこと
- `page.tsx` のレイアウト・クラス・`data-*` 属性（`data-split`、`data-reveal`、`data-clip`、`data-draw` など。アニメーションの対象です）
- `src/app/globals.css`、`tailwind.config.js`、`src/components/motion/**`、Header / Footer
- `MotionProvider` の位置（ページの最後。`layout.tsx` に移すとハイドレーションエラーになります）

詳しいルールは `AGENTS.md` と `docs/CODEX_SPEC.md` の「1. 役割分担」を参照してください。

---

## 8. 進め方と確認

1. `main` から作業ブランチを作る（`main` は本番に自動デプロイされるため、直接 push しない）
2. 画像4枚を作成し、ブランドのトーン・4枚の統一感を確認
3. `public/flow/` に配置し、`flow` 配列に `img` / `alt` を追加
4. 以下がすべて通ることを確認
   ```sh
   npm install --legacy-peer-deps
   npx tsc --noEmit
   npm test
   npm run lint
   npm run build
   ```
5. `npm run build && npm start` で表示し、**PC（1440px）とスマホ（390px）**でスクリーンショットを撮って確認
   - 4枚の明るさ・色味がそろっているか
   - 主役が4:3の枠で切れていないか
   - ブラウザのコンソールにエラー（特に React #418）が出ていないか
6. プルリクエストを作成し、スクリーンショットを添えてオーナーの確認を受ける

## 9. 受け入れ基準

- [ ] 4枚とも写真またはフォトリアルで、フラットなイラスト・アイコン調ではない
- [ ] 4枚の色味・明るさ・距離感がそろい、サイトの白 × 空色のトーンに合っている
- [ ] 文字・ロゴ・実在店舗と誤解される要素が入っていない
- [ ] 1600×1200 の WebP、1枚300KB以下
- [ ] `alt` が4枚とも具体的に書かれている
- [ ] 生成AI画像の場合「※写真はイメージです」の表記がある
- [ ] 型チェック・テスト・Lint・ビルドが通り、PC / スマホで崩れていない
