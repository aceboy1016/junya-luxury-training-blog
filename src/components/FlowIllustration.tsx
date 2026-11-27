'use client'

import { useEffect, useRef } from 'react'

/**
 * 「初回サービスの流れ」の線画イラスト。画面に入ると線が描かれる。
 * 写真を用意したら、page.tsx の flow 配列に img を指定すると写真に切り替わる。
 */

const S = { fill: 'none', stroke: '#4A98D0', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const
const Soft = { fill: '#E8F2F9', stroke: 'none' } as const
const Deep = { ...S, stroke: '#2B3A55' } as const

function Apply() {
  return (
    <>
      <circle cx="160" cy="124" r="86" {...Soft} />
      {/* スマホ */}
      <rect data-line x="118" y="46" width="84" height="150" rx="14" {...Deep} pathLength={1} />
      <path data-line d="M146 56h28" {...Deep} pathLength={1} />
      {/* チャット */}
      <rect data-line x="128" y="74" width="48" height="18" rx="9" {...S} pathLength={1} />
      <rect data-line x="146" y="100" width="46" height="18" rx="9" {...S} pathLength={1} />
      {/* フォームとチェック */}
      <rect data-line x="128" y="128" width="64" height="44" rx="6" {...S} pathLength={1} />
      <path data-line d="M138 142h30M138 152h22" {...S} pathLength={1} />
      <circle data-line cx="180" cy="160" r="8" {...S} pathLength={1} />
      <path data-line d="M176 160l3 3 5-6" {...S} pathLength={1} />
      {/* 送信 */}
      <path data-line d="M222 70l30-14-12 30-6-10-12-6z" {...S} pathLength={1} />
      <path data-line d="M212 92c6 4 12 4 18-2" {...S} strokeDasharray="2 5" pathLength={1} />
    </>
  )
}

function Visit() {
  return (
    <>
      <circle cx="160" cy="124" r="86" {...Soft} />
      {/* 地図のグリッド */}
      <path data-line d="M70 150l60-24 60 24 60-24M70 150v40l60-24 60 24 60-24v-40" {...S} strokeWidth={1.2} pathLength={1} />
      {/* ルート */}
      <path data-line d="M104 168c20-30 50-10 70-30s40-20 52-40" {...S} strokeDasharray="3 6" pathLength={1} />
      {/* スタジオのピン */}
      <path data-line d="M226 98c0-14 10-24 22-24s22 10 22 24c0 18-22 36-22 36s-22-18-22-36z" {...Deep} pathLength={1} />
      <circle data-line cx="248" cy="98" r="7" {...S} pathLength={1} />
      {/* 出発点 */}
      <circle data-line cx="104" cy="168" r="6" {...Deep} pathLength={1} />
      {/* 建物 */}
      <path data-line d="M120 104V62h46v42M130 74h8M148 74h8M130 86h8M148 86h8M138 104v-10h10v10" {...Deep} pathLength={1} />
    </>
  )
}

function Counsel() {
  return (
    <>
      <circle cx="160" cy="124" r="86" {...Soft} />
      {/* 立位の身体と重心線 */}
      <circle data-line cx="118" cy="62" r="12" {...Deep} pathLength={1} />
      <path data-line d="M118 74v58M118 86l-20 26M118 86l20 26M118 132l-12 52M118 132l12 52" {...Deep} pathLength={1} />
      <path data-line d="M118 44v156" {...S} strokeDasharray="3 5" pathLength={1} />
      <path data-line d="M92 96h52M98 132h40" {...S} strokeWidth={1.2} pathLength={1} />
      {/* クリップボード */}
      <rect data-line x="176" y="62" width="74" height="104" rx="8" {...Deep} pathLength={1} />
      <path data-line d="M198 58h30v12h-30z" {...S} pathLength={1} />
      <path data-line d="M188 90l4 4 7-8M206 90h32M188 112l4 4 7-8M206 112h26M188 134l4 4 7-8M206 134h30" {...S} pathLength={1} />
      {/* 計測 */}
      <path data-line d="M176 182c18 8 52 8 74 0" {...S} strokeDasharray="2 5" pathLength={1} />
    </>
  )
}

function Condition() {
  return (
    <>
      <circle cx="160" cy="124" r="86" {...Soft} />
      {/* 整う波 → 上向きの変化 */}
      <path data-line d="M64 150c12 0 12-24 24-24s12 34 24 34 12-22 24-22 10 8 22 2l44-30 40-26" {...S} strokeWidth={2} pathLength={1} />
      <circle data-line cx="198" cy="110" r="5" {...Deep} pathLength={1} />
      <circle data-line cx="238" cy="84" r="5" {...Deep} pathLength={1} />
      <path data-line d="M238 84l14-4-4 14" {...S} pathLength={1} />
      {/* ダンベル */}
      <path data-line d="M98 196h56" {...Deep} pathLength={1} />
      <rect data-line x="86" y="184" width="10" height="24" rx="3" {...Deep} pathLength={1} />
      <rect data-line x="76" y="188" width="8" height="16" rx="3" {...Deep} pathLength={1} />
      <rect data-line x="156" y="184" width="10" height="24" rx="3" {...Deep} pathLength={1} />
      <rect data-line x="168" y="188" width="8" height="16" rx="3" {...Deep} pathLength={1} />
      {/* きらめき */}
      <path data-line d="M226 50v14M219 57h14M256 116v10M251 121h10" {...S} pathLength={1} />
    </>
  )
}

const ART = { '01': Apply, '02': Visit, '03': Counsel, '04': Condition } as const

export default function FlowIllustration({ step, label }: { step: keyof typeof ART; label: string }) {
  const ref = useRef<SVGSVGElement>(null)
  const Art = ART[step]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('is-drawn')
          io.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <svg ref={ref} viewBox="0 0 320 240" role="img" aria-label={label} className="flow-art w-full h-full">
      <Art />
    </svg>
  )
}
