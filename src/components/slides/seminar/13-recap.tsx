'use client';

import { motion } from 'framer-motion';
import SlideWrapper from '../../SlideWrapper';

/**
 * p13: Recap · Key Takeaways — 「生成AI活用企業の動き」のまとめ
 *
 * ベーステンプレート: `templates/Recap.tsx`
 *
 * 3 つのキーポイント：
 *   ① 生成AI活用は DX 以降に出現する
 *   ② 生成AI活用場面では MCP が現在の活路
 *   ③ 企業としてはアクセルとブレーキのバランスが重要
 */

const TAKEAWAYS = [
  {
    title: '生成AI活用は DX 以降に出現する',
    desc: 'ナレッジの所在は「人 → 紙 → クラウド → AIモデル」へと移ってきた。紙・クラウド化（DX）を経た先に、企画・営業・意思決定など「形のない業務」を生成AIが担うフェーズが立ち上がる。経営トップも「AI前提で考えよ」と号令をかけている。',
    accent: '#88bbff',
  },
  {
    title: '生成AI活用場面では MCP が現在の活路',
    desc: '単体のチャットAIは「補助ツール」止まりになりやすい。MCP でシステム・データ・SaaS をつなぎ、AIが自律的に動けるエージェント構造にすることで、PC作業のほぼ全てをAIで操作できる段階に近づく。',
    accent: '#c8a8ff',
  },
  {
    title: '企業としてはアクセルとブレーキのバランスが重要',
    desc: '「使わせない」一辺倒では機会を逃し、無制限ではリスクが残る。攻め（アクセル）と守り（ブレーキ）を設計し、リスクをコントロールしながら「安全に使い倒す」ことが、次章の社内規程づくりの土台になる。',
    accent: '#ffaacc',
  },
];

export default function Slide13Recap() {
  return (
    <SlideWrapper>
      <motion.div
        className="flex flex-col gap-10 md:gap-12 w-full max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 見出し */}
        <div className="flex flex-col gap-2 shrink-0">
          <span className="text-[10px] tracking-[0.32em] uppercase text-white/40">
            Recap · Key Takeaways
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            ここまでの
            <span
              className="bg-clip-text text-transparent ml-2"
              style={{ backgroundImage: 'linear-gradient(90deg, #88bbff 0%, #c8a8ff 55%, #ffaacc 100%)' }}
            >
              3 つのポイント
            </span>
          </h2>
        </div>

        {/* テイクアウェイ */}
        <div className="flex flex-col gap-4 md:gap-5">
          {TAKEAWAYS.map((t, i) => (
            <motion.div
              key={t.title}
              className="flex items-start gap-5 md:gap-6 p-5 md:p-6 rounded-2xl bg-white/[0.04] border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
            >
              {/* 番号バッジ */}
              <div
                className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center font-bold text-2xl tabular-nums"
                style={{
                  background: `${t.accent}1f`,
                  border: `1px solid ${t.accent}66`,
                  color: t.accent,
                  boxShadow: `0 0 18px ${t.accent}33`,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* 本文 */}
              <div className="flex flex-col gap-1.5 min-w-0">
                <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                  {t.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* フッター */}
        <p className="text-xs text-white/30 tracking-wider">
          ※ 「安全に使い倒す」イメージを固めることが、次章の社内生成AI利用規程づくりの出発点になる。
        </p>
      </motion.div>
    </SlideWrapper>
  );
}
