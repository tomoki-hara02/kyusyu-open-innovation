'use client';

import { motion } from 'framer-motion';
import SlideWrapper from '../../SlideWrapper';

const PHASES = [
  {
    label: 'Phase 1',
    era: '職人期',
    status: 'done',
    knowledge: '人（頭の中・感覚）',
    learning: '見て、聞いて、体験する',
    tools: '伝統芸能、個人の職人技',
  },
  {
    label: 'Phase 2',
    era: 'アナログ期',
    status: 'current',
    knowledge: '紙（物理メディア）',
    learning: '読んで真似る',
    tools: '紙のマニュアル、手順書',
  },
  {
    label: 'Phase 3',
    era: 'デジタル期',
    status: 'current',
    knowledge: 'クラウド・システム',
    learning: '検索して探す、動画を見る',
    tools: '社内Wiki、動画マニュアル',
  },
  {
    label: 'Phase 4',
    era: '生成AI期',
    status: 'upcoming',
    knowledge: 'AIモデル（統合知）',
    learning: 'AIに質問する、AIが伴走する',
    tools: '社内AIチャット、AIアシスタント',
  },
] as const;

const STATUS = {
  done:     { color: '#4a5568', label: '過去'   },
  current:  { color: '#4FACF7', label: '現在'   },
  upcoming: { color: '#c8a8ff', label: 'NEXT'   },
} as const;

const ROWS = [
  { key: 'era',       label: '時代・状態'     },
  { key: 'knowledge', label: 'ナレッジの所在'  },
  { key: 'learning',  label: '学び方・伝達'    },
  { key: 'tools',     label: '代表ツール・例'  },
] as const;

export default function Slide07KnowledgeRoadmap() {
  return (
    <SlideWrapper>
      <motion.div
        className="flex flex-col gap-8 w-full max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 見出し */}
        <div className="flex flex-col gap-2 shrink-0">
          <span className="text-[10px] tracking-[0.32em] uppercase text-white/40">
            Knowledge Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            仕事が生成AIの
            <span className="bg-gradient-to-r from-[#2952D9] to-[#4FACF7] bg-clip-text text-transparent mx-2">
              無形業務領域
            </span>
            になるまで
          </h2>
        </div>

        {/* タイムライン */}
        <div className="relative">
          {/* 横ライン */}
          <div className="absolute left-0 right-0 top-2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* フェーズ列 */}
          <div className="grid grid-cols-4 gap-x-5 relative">
            {PHASES.map((phase, i) => {
              const s = STATUS[phase.status];
              const isActive = phase.status === 'current';
              // 現在フェーズに加え、生成AI期（upcoming）も白で強調する
              const emphasized = isActive || phase.status === 'upcoming';
              return (
                <motion.div
                  key={phase.label}
                  className="flex flex-col items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                >
                  {/* マーカードット — 現在/生成AI期は点灯、モーションは生成AI期のみ */}
                  <div className="relative mt-0.5">
                    <div
                      className="w-4 h-4 rounded-full border-2"
                      style={{
                        background: emphasized || phase.status === 'done' ? s.color : 'transparent',
                        borderColor: s.color,
                        boxShadow: emphasized ? `0 0 18px ${s.color}aa` : undefined,
                      }}
                    />
                    {phase.status === 'upcoming' && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 pointer-events-none"
                        style={{ borderColor: s.color }}
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                      />
                    )}
                  </div>

                  {/* フェーズ名 + ステータス */}
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-xs tracking-widest uppercase font-medium"
                      style={{ color: s.color }}
                    >
                      {phase.label}
                    </span>
                    <span
                      className={`text-xl font-bold tracking-tight ${
                        emphasized ? 'text-white' : 'text-white/40'
                      }`}
                    >
                      {phase.era}
                    </span>
                    <span
                      className="text-[10px] tracking-[0.15em] uppercase mt-0.5"
                      style={{ color: s.color + (isActive ? '' : '88') }}
                    >
                      {s.label}
                    </span>
                  </div>

                  {/* 各行の情報 */}
                  <div className="flex flex-col gap-3 w-full">
                    {ROWS.map((row) => (
                      <div
                        key={row.key}
                        className={`flex flex-col gap-1 pl-3 border-l ${emphasized ? '' : 'opacity-40'}`}
                        style={{ borderColor: `${s.color}${emphasized ? 'aa' : '44'}` }}
                      >
                        <span className="text-[9px] tracking-widest uppercase text-white/35">
                          {row.label}
                        </span>
                        <span className={`text-xs leading-snug ${emphasized ? 'text-white/85' : 'text-white/50'}`}>
                          {phase[row.key]}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* フッター注記 */}
        <p className="text-[10px] text-white/25 tracking-wider">
          ※ Phase 2・3 が現在の主流。Phase 4（生成AI期）への移行が今、始まっている。
        </p>
      </motion.div>
    </SlideWrapper>
  );
}
