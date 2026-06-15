'use client';

import { motion } from 'framer-motion';
import SlideWrapper from '../../SlideWrapper';

/**
 * p54: 4-4 個人情報 — 個人データとクラウドサービス
 *
 * 構成:
 *   メイン: 判断フロー図（クラウド例外に該当 / 非該当 で 27条・25条の適用が分かれる）
 *   下部:   根拠条文（第27条 / 第27条5項1号 / ガイドラインQ&A）を補足として配置
 */

const LAW_ACCENT = '#60a5fa';
const OK_ACCENT = '#9ee0a8'; // クラウド例外に該当（27条・25条は不適用）
const SUP_ACCENT = '#f7c46c'; // クラウド例外 非該当（委託 → 25条 監督が必要）

const BRANCHES = [
  {
    badge: 'クラウド例外に該当',
    cond: 'クラウド事業者が当該個人データを取り扱わない',
    result: '「第三者提供」に当たらない',
    sub: '→ 第27条・第25条は不適用',
    note: '第23条（安全管理措置）は必要',
    noteMark: '※',
    accent: OK_ACCENT,
  },
  {
    badge: 'クラウド例外 非該当',
    cond: 'クラウド事業者が当該個人データを取り扱う',
    result: '第27条5項1号（委託に伴う提供）に該当',
    sub: '→ 監督義務が発生',
    note: '第25条による委託先の監督が必要',
    noteMark: '→',
    accent: SUP_ACCENT,
  },
];

const REFS = [
  {
    tag: '第27条',
    body: '本人の同意なく、個人データを第三者に提供してはならない（第三者提供の制限）。',
    accent: LAW_ACCENT,
  },
  {
    tag: '第27条 5項1号',
    body: '委託に伴って提供される場合、提供先は「第三者」に該当しない。',
    accent: SUP_ACCENT,
  },
  {
    tag: 'ガイドラインQ&A',
    body: 'クラウド事業者が個人データを取り扱わない場合は「提供」に当たらず、同意も25条監督義務も不要。',
    accent: OK_ACCENT,
  },
];

export default function Slide54PipCloudService() {
  return (
    <SlideWrapper>
      <motion.div
        className="flex flex-col gap-4 w-full max-w-6xl h-full justify-center py-6 pt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 見出し */}
        <div className="flex flex-col gap-1.5 shrink-0">
          <span className="text-[10px] tracking-[0.32em] uppercase text-white/40">
            4-4 · 個人情報
          </span>
          <h2
            className="font-bold tracking-tight text-white leading-tight"
            style={{ fontSize: 'clamp(22px, 2.6vw, 36px)' }}
          >
            個人データと
            <span
              className="bg-clip-text text-transparent ml-1.5"
              style={{ backgroundImage: `linear-gradient(90deg, ${LAW_ACCENT} 0%, ${OK_ACCENT} 100%)` }}
            >
              クラウドサービス
            </span>
          </h2>
          <p className="text-white/55" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>
            クラウド利用は個人データの第三者提供になり得る。「クラウド例外」に当たるかで義務が分かれる。
          </p>
        </div>

        {/* メイン：判断フロー図 */}
        <div className="flex-1 min-h-0 flex flex-col items-center justify-center gap-3">
          {/* 起点 */}
          <motion.div
            className="text-center rounded-xl border px-6 py-3 font-bold text-white"
            style={{
              borderColor: `${LAW_ACCENT}66`,
              background: `${LAW_ACCENT}1f`,
              fontSize: 'clamp(15px, 1.5vw, 20px)',
              boxShadow: `0 0 24px ${LAW_ACCENT}40`,
            }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            個人データのクラウド利用
          </motion.div>

          {/* 分岐ライン */}
          <motion.div
            className="text-white/30 leading-none"
            style={{ fontSize: 'clamp(16px, 1.6vw, 22px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            ▼
          </motion.div>

          {/* 2分岐 */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
            {BRANCHES.map((b, i) => (
              <motion.div
                key={b.badge}
                className="flex flex-col items-center gap-2.5 rounded-2xl border p-4 md:p-5"
                style={{
                  borderColor: `${b.accent}55`,
                  background: `linear-gradient(165deg, ${b.accent}1a 0%, rgba(255,255,255,0.02) 100%)`,
                  boxShadow: `0 0 30px -10px ${b.accent}66`,
                }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.14 }}
              >
                <span
                  className="px-3 py-1 rounded-full border font-bold tracking-wide"
                  style={{
                    color: b.accent,
                    borderColor: `${b.accent}66`,
                    background: `${b.accent}1f`,
                    fontSize: 'clamp(12px, 1.15vw, 15px)',
                  }}
                >
                  {b.badge}
                </span>
                <p
                  className="text-white/65 leading-snug text-center"
                  style={{ fontSize: 'clamp(11px, 0.95vw, 13px)' }}
                >
                  {b.cond}
                </p>
                <span className="text-white/30 text-base leading-none">▼</span>
                <p
                  className="font-bold text-white leading-snug text-center"
                  style={{ fontSize: 'clamp(13px, 1.3vw, 18px)' }}
                >
                  {b.result}
                </p>
                <span
                  className="text-white/50 leading-snug text-center"
                  style={{ fontSize: 'clamp(10.5px, 0.9vw, 12.5px)' }}
                >
                  {b.sub}
                </span>
                <div
                  className="mt-auto w-full text-center rounded-xl border px-3 py-2 leading-snug font-bold"
                  style={{
                    borderColor: `${b.accent}55`,
                    background: `${b.accent}14`,
                    color: b.accent,
                    fontSize: 'clamp(11.5px, 1.05vw, 14px)',
                  }}
                >
                  {b.noteMark} {b.note}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 下部：根拠条文（補足） */}
        <motion.div
          className="shrink-0 flex flex-col gap-1.5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.7 }}
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-white/35">根拠条文・ガイドライン</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {REFS.map((r) => (
              <div
                key={r.tag}
                className="flex flex-col gap-0.5 rounded-lg border px-3 py-2"
                style={{ borderColor: `${r.accent}33`, background: `${r.accent}0a` }}
              >
                <span
                  className="font-bold tracking-tight"
                  style={{ color: r.accent, fontSize: 'clamp(10.5px, 0.92vw, 12.5px)' }}
                >
                  {r.tag}
                </span>
                <span
                  className="text-white/55 leading-snug"
                  style={{ fontSize: 'clamp(9.5px, 0.82vw, 11.5px)' }}
                >
                  {r.body}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
