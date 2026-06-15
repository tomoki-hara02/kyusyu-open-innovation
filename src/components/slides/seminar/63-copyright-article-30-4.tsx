'use client';

import { motion } from 'framer-motion';
import SlideWrapper from '../../SlideWrapper';
import { RelatedRuleLink } from '../../ui';

/**
 * p63: 4-6 著作物 — 第30条の4（生成AIへの入力）× 文化審議会の考え方
 *
 * 条文の全文は載せず、文化審議会「AIと著作権に関する考え方について」の
 * 3つの考え方を図解＋アニメーションでメインに据える。
 */

const STEP1_ACCENT = '#60a5fa'; // ① 入力＝複製が生じうる
const OK_ACCENT = '#9ee0a8'; // ② 情報解析目的 → 30条の4 適用（セーフ）
const NG_ACCENT = '#ff9966'; // ③ 享受目的が併存 → 不適用（アウト）
const HIGHLIGHT_ACCENT = '#f7c46c';

const SOURCE_URL =
  'https://www.bunka.go.jp/seisaku/bunkashingikai/chosakuken/pdf/94037901_01.pdf';

/* ── ① 入力でも複製が生じうる ───────────────── */
function InputVisual() {
  return (
    <div className="flex items-center justify-center gap-2 w-full h-full">
      <motion.span
        className="px-2 py-1 rounded-md text-[10px] font-bold text-white border"
        style={{ borderColor: `${STEP1_ACCENT}66`, background: `${STEP1_ACCENT}1f` }}
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        プロンプト・画像
      </motion.span>
      <span style={{ color: STEP1_ACCENT }}>→</span>
      <div className="relative">
        <span
          className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white border"
          style={{ borderColor: `${STEP1_ACCENT}88`, background: `${STEP1_ACCENT}26` }}
        >
          生成AI
        </span>
        <motion.span
          className="absolute -top-2 -right-2 px-1 rounded text-[8px] font-bold text-[#0d1117]"
          style={{ background: STEP1_ACCENT }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.7, 1, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, times: [0, 0.3, 0.7, 1] }}
        >
          複製
        </motion.span>
      </div>
    </div>
  );
}

/* ── ② 情報解析目的 → 30条の4 適用（セーフ） ───────────────── */
function SafeVisual() {
  return (
    <div className="flex items-center justify-center gap-2 w-full h-full">
      <span className="px-2 py-1 rounded-md text-[10px] font-bold text-white/80 border border-white/15 bg-white/5">
        情報解析が目的
      </span>
      <span style={{ color: OK_ACCENT }}>→</span>
      <motion.div
        className="flex items-center justify-center w-9 h-9 rounded-full text-[#0d1117] font-bold text-lg"
        style={{ background: OK_ACCENT }}
        animate={{ scale: [1, 1.12, 1], boxShadow: [`0 0 0 ${OK_ACCENT}00`, `0 0 16px ${OK_ACCENT}cc`, `0 0 0 ${OK_ACCENT}00`] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✓
      </motion.div>
    </div>
  );
}

/* ── ③ 享受目的が併存 → 不適用（アウト） ───────────────── */
function OutVisual() {
  return (
    <div className="flex items-center justify-center gap-2 w-full h-full">
      <div className="flex flex-col items-center gap-0.5">
        <span className="px-2 py-0.5 rounded text-[9px] font-bold text-white/70 border border-white/15 bg-white/5">
          情報解析
        </span>
        <span className="text-white/30 text-[9px]">＋</span>
        <motion.span
          className="px-2 py-0.5 rounded text-[9px] font-bold border"
          style={{ color: NG_ACCENT, borderColor: `${NG_ACCENT}77`, background: `${NG_ACCENT}1f` }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          享受目的が併存
        </motion.span>
      </div>
      <span style={{ color: NG_ACCENT }}>→</span>
      <motion.div
        className="flex items-center justify-center w-9 h-9 rounded-full font-bold text-lg border-2"
        style={{ color: NG_ACCENT, borderColor: NG_ACCENT, background: `${NG_ACCENT}1a` }}
        animate={{ x: [0, -2, 2, -2, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1.4 }}
      >
        ✕
      </motion.div>
    </div>
  );
}

const POINTS = [
  {
    num: '01',
    accent: STEP1_ACCENT,
    title: '入力でも「複製」が生じうる',
    desc: 'プロンプトや画像を生成AIに入力する際、著作物の複製等が生じる場合がある。',
    Visual: InputVisual,
  },
  {
    num: '02',
    accent: OK_ACCENT,
    title: '情報解析が目的なら原則セーフ',
    desc: '入力は生成のための情報解析にあたるため、法第30条の4の適用が考えられる。',
    Visual: SafeVisual,
  },
  {
    num: '03',
    accent: NG_ACCENT,
    title: '享受目的が併存するとアウト',
    desc: '既存著作物に類似した生成物を作らせる目的の入力は、享受目的も併存 → 第30条の4は適用されない。',
    Visual: OutVisual,
  },
] as const;

export default function Slide63CopyrightArticle304() {
  return (
    <SlideWrapper>
      <motion.div
        className="flex flex-col gap-4 md:gap-5 w-full max-w-6xl h-full justify-center py-5 md:py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* ヘッダー */}
        <div className="flex flex-col gap-1.5 shrink-0">
          <span
            className="tracking-[0.32em] uppercase text-white/40"
            style={{ fontSize: 'clamp(10px, 0.95vw, 13px)' }}
          >
            4-6 · 著作物 · 第30条の4（生成AIへの入力）
          </span>
          <h2
            className="font-bold tracking-tight text-white leading-snug"
            style={{ fontSize: 'clamp(19px, 2.1vw, 30px)' }}
          >
            生成AIへの入力と
            <span
              className="bg-clip-text text-transparent ml-1.5"
              style={{ backgroundImage: `linear-gradient(90deg, ${OK_ACCENT} 0%, ${NG_ACCENT} 100%)` }}
            >
              享受目的の有無
            </span>
          </h2>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-1">
            <p className="text-white/40" style={{ fontSize: 'clamp(10px, 0.92vw, 12.5px)' }}>
              文化審議会著作権分科会「
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#88bbff] hover:text-[#a8d4ff] underline underline-offset-2 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                AIと著作権に関する考え方について
              </a>
              」より
            </p>
            <RelatedRuleLink
              targetId="70-unrecognized-copyright-output"
              label="関連: 5-3 出力側の著作権（依拠性）"
              accent="#88bbff"
            />
          </div>
        </div>

        {/* 3つの考え方 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.num}
              className="flex flex-col gap-3 rounded-2xl border p-4 md:p-5"
              style={{
                borderColor: `${p.accent}55`,
                background: `linear-gradient(165deg, ${p.accent}12 0%, rgba(255,255,255,0.02) 100%)`,
                boxShadow: `0 0 34px -14px ${p.accent}88`,
              }}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.14 }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="font-mono font-bold leading-none"
                  style={{ color: p.accent, fontSize: 'clamp(22px, 2.2vw, 30px)' }}
                >
                  {p.num}
                </span>
                <div className="h-px flex-1" style={{ background: `${p.accent}44` }} />
              </div>

              {/* ミニ図解 */}
              <div
                className="h-20 md:h-24 rounded-xl border flex items-center justify-center px-2"
                style={{ borderColor: `${p.accent}22`, background: 'rgba(255,255,255,0.02)' }}
              >
                <p.Visual />
              </div>

              <h3
                className="font-bold text-white leading-snug"
                style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}
              >
                {p.title}
              </h3>
              <p
                className="text-white/65 leading-snug"
                style={{ fontSize: 'clamp(11px, 0.92vw, 13px)' }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 一言まとめ */}
        <motion.div
          className="shrink-0 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-center"
          style={{
            borderColor: `${HIGHLIGHT_ACCENT}55`,
            background: `linear-gradient(90deg, ${HIGHLIGHT_ACCENT}14 0%, rgba(255,255,255,0.02) 100%)`,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <span className="font-bold" style={{ color: HIGHLIGHT_ACCENT, fontSize: 'clamp(12px, 1.05vw, 14px)' }}>
            一言でいうと
          </span>
          <p className="text-white leading-snug" style={{ fontSize: 'clamp(12px, 1.1vw, 15.5px)' }}>
            享受するのが<span className="font-bold" style={{ color: OK_ACCENT }}>生成AIだけ</span>ならセーフ、
            <span className="font-bold" style={{ color: NG_ACCENT }}>人間が含まれる</span>ならアウト。
            <span className="font-bold" style={{ color: NG_ACCENT }}>軽微利用を超えても</span>アウト。
          </p>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
