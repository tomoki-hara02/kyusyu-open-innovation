'use client';

import { motion } from 'framer-motion';
import SlideWrapper from '../../SlideWrapper';

/**
 * p53: 4-4 個人情報 — プライバシーポリシーと生成AI活用
 *
 * 3点に絞って図解する:
 *   ① 生成AIへの個人情報の入力が、ポリシー（利用目的）でカバーされているか？
 *   ② 学習データとして提供する場合は「明らかに別目的」
 *   ③ プロファイリングは利用目的から予測できない「新たな利用目的」
 */

const COVER_ACCENT = '#60a5fa'; // ① カバー範囲
const DIFF_ACCENT = '#ff9966'; // ② 別目的
const PROFILE_ACCENT = '#c8a8ff'; // ③ 新たな利用目的
const OK_ACCENT = '#9ee0a8';

/* ── ① ポリシーでカバーされているか ───────────────── */
function CoverVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div
        className="relative flex items-center justify-center rounded-xl border-2 border-dashed px-3 py-4"
        style={{ borderColor: `${COVER_ACCENT}88`, background: `${COVER_ACCENT}10` }}
      >
        <span
          className="absolute -top-2 left-2 px-1.5 text-[9px] tracking-wide font-bold rounded"
          style={{ color: COVER_ACCENT, background: '#0d1117' }}
        >
          利用目的の範囲
        </span>
        <motion.div
          className="px-2.5 py-1 rounded-md font-bold text-white text-[11px]"
          style={{ background: `${COVER_ACCENT}33`, border: `1px solid ${COVER_ACCENT}66` }}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          生成AIへ入力
        </motion.div>
      </div>
      <motion.span
        className="absolute -right-1 -top-1 flex items-center justify-center w-6 h-6 rounded-full font-bold text-[#0d1117] text-sm"
        style={{ background: COVER_ACCENT }}
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        ?
      </motion.span>
    </div>
  );
}

/* ── ② 学習データ提供 = 別目的 ───────────────── */
function DiffPurposeVisual() {
  return (
    <div className="flex items-center justify-center gap-2 w-full h-full">
      <span className="px-2 py-1 rounded-md text-[10px] font-bold text-white/80 border border-white/15 bg-white/5">
        入力データ
      </span>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1">
          <span style={{ color: OK_ACCENT }}>→</span>
          <span
            className="px-2 py-0.5 rounded text-[10px] font-bold"
            style={{ color: OK_ACCENT, background: `${OK_ACCENT}1a`, border: `1px solid ${OK_ACCENT}55` }}
          >
            応答生成（目的内）
          </span>
        </div>
        <motion.div
          className="flex items-center gap-1"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span style={{ color: DIFF_ACCENT }}>→</span>
          <span
            className="px-2 py-0.5 rounded text-[10px] font-bold"
            style={{ color: DIFF_ACCENT, background: `${DIFF_ACCENT}1f`, border: `1px solid ${DIFF_ACCENT}77` }}
          >
            モデル学習（別目的）
          </span>
        </motion.div>
      </div>
    </div>
  );
}

/* ── ③ プロファイリング = 新たな利用目的 ───────────────── */
function ProfilingVisual() {
  return (
    <div className="flex items-center justify-center gap-2 w-full h-full">
      <div className="flex flex-col gap-0.5">
        {['属性', '行動', '嗜好'].map((t, i) => (
          <motion.span
            key={t}
            className="px-1.5 py-0.5 rounded text-[9px] text-white/70 bg-white/5 border border-white/12"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
          >
            {t}
          </motion.span>
        ))}
      </div>
      <span className="text-white/35">→</span>
      <motion.div
        className="relative px-2.5 py-1.5 rounded-lg font-bold text-white text-[11px]"
        style={{ background: `${PROFILE_ACCENT}26`, border: `1px solid ${PROFILE_ACCENT}77` }}
        animate={{ boxShadow: [`0 0 0px ${PROFILE_ACCENT}00`, `0 0 16px ${PROFILE_ACCENT}99`, `0 0 0px ${PROFILE_ACCENT}00`] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        人物像を推定
        <span className="absolute -top-1.5 -right-1.5 text-sm" aria-hidden>
          ✦
        </span>
      </motion.div>
    </div>
  );
}

const POINTS = [
  {
    num: '01',
    accent: COVER_ACCENT,
    title: 'ポリシーでカバーされているか？',
    desc: '生成AIに個人情報を入力する行為が、自社プライバシーポリシーの利用目的の範囲に収まっているかをまず点検。',
    Visual: CoverVisual,
  },
  {
    num: '02',
    accent: DIFF_ACCENT,
    title: '学習データ提供は「別目的」',
    desc: '入力内容がモデル学習に使われる設定では、当初の利用目的とは明らかに別目的。範囲外利用にあたるおそれ。',
    Visual: DiffPurposeVisual,
  },
  {
    num: '03',
    accent: PROFILE_ACCENT,
    title: 'プロファイリングは新たな利用目的',
    desc: '生成AIによる人物像の推定は、当初の利用目的からは予測できない新たな利用目的。ポリシーの更新・明示が必要。',
    Visual: ProfilingVisual,
  },
] as const;

export default function Slide53PipActGenaiArticles() {
  return (
    <SlideWrapper>
      <motion.div
        className="flex flex-col gap-5 md:gap-6 w-full max-w-6xl py-6 md:py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* ヘッダー */}
        <div className="flex flex-col gap-1.5 shrink-0">
          <span
            className="tracking-[0.32em] uppercase text-white/40"
            style={{ fontSize: 'clamp(10px, 0.9vw, 12px)' }}
          >
            4-4 · 個人情報
          </span>
          <h2
            className="font-bold tracking-tight text-white leading-tight"
            style={{ fontSize: 'clamp(20px, 2.4vw, 34px)' }}
          >
            プライバシーポリシーと
            <span
              className="bg-clip-text text-transparent ml-1.5"
              style={{ backgroundImage: `linear-gradient(90deg, ${COVER_ACCENT} 0%, ${PROFILE_ACCENT} 100%)` }}
            >
              生成AI活用
            </span>
          </h2>
          <p
            className="text-white/50 leading-snug"
            style={{ fontSize: 'clamp(11px, 0.95vw, 13px)' }}
          >
            生成AIを使う前に、自社の「利用目的」で説明できるか — 3つの観点で点検する。
          </p>
        </div>

        {/* 3ポイント */}
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

        <motion.p
          className="text-center text-white/55 leading-snug shrink-0"
          style={{ fontSize: 'clamp(11px, 0.95vw, 13px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          いずれも答えは
          <span className="text-white/85 font-semibold mx-1">プライバシーポリシー（利用目的）の書き方</span>
          に戻る。生成AI活用に合わせて、必要なら利用目的を更新・明示する。
        </motion.p>
      </motion.div>
    </SlideWrapper>
  );
}
