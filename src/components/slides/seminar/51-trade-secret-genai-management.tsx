'use client';

import { motion } from 'framer-motion';
import SlideWrapper from '../../SlideWrapper';

/**
 * 4-3 社内秘密情報・営業秘密 — 生成AI利用と秘密管理性（令和7年改訂 営業秘密管理指針）
 *
 * メイン: 管理単位C/D の図解（情報αが生成AIから出力されても秘密管理性は否定されない）
 * 下部:   ポイント ＋ 出典リンク（指針 p.18 注2）を補足として配置
 */

const CHAPTER_ACCENT = '#9ee0a8';
const HIGHLIGHT_ACCENT = '#f7c46c';
const UNIT_C_ACCENT = '#88bbff';
const UNIT_D_ACCENT = '#c8a8ff';

const METI_GUIDELINE_URL =
  'https://www.meti.go.jp/policy/economy/chizai/chiteki/guideline/r7ts.pdf';

function UnitFlowDiagram() {
  return (
    <div className="flex flex-col items-center gap-2.5 w-full max-w-2xl">
      {/* 管理単位C: 情報α 秘密管理 */}
      <motion.div
        className="w-full max-w-md px-4 py-3 rounded-xl border text-center"
        style={{
          borderColor: `${UNIT_C_ACCENT}66`,
          background: `linear-gradient(135deg, ${UNIT_C_ACCENT}16 0%, rgba(255,255,255,0.02) 100%)`,
        }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <p
          className="font-bold leading-snug"
          style={{ color: UNIT_C_ACCENT, fontSize: 'clamp(14px, 1.3vw, 18px)' }}
        >
          管理単位C — 情報α
        </p>
        <p className="text-white/55 leading-snug" style={{ fontSize: 'clamp(11px, 0.95vw, 13px)' }}>
          🔒 秘密として管理
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <span className="text-white/40" style={{ fontSize: 'clamp(11px, 0.85vw, 12px)' }}>
          入力
        </span>
        <svg width="14" height="16" viewBox="0 0 14 9" fill="none" aria-hidden>
          <path d="M7 9L0 0h14L7 9z" fill="rgba(255,255,255,0.4)" />
        </svg>
      </motion.div>

      {/* 生成AI */}
      <motion.div
        className="px-7 py-2 rounded-full border font-bold text-white"
        style={{
          borderColor: `${CHAPTER_ACCENT}66`,
          background: `${CHAPTER_ACCENT}14`,
          fontSize: 'clamp(14px, 1.3vw, 18px)',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.55 }}
      >
        生成AI
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
      >
        <span className="text-white/40" style={{ fontSize: 'clamp(11px, 0.85vw, 12px)' }}>
          情報αを AI 生成物として出力
        </span>
        <svg width="14" height="16" viewBox="0 0 14 9" fill="none" aria-hidden>
          <path d="M7 9L0 0h14L7 9z" fill="rgba(255,255,255,0.4)" />
        </svg>
      </motion.div>

      {/* 出力先 C / D */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
        {[
          {
            unit: '管理単位C で出力',
            accent: UNIT_C_ACCENT,
            result: 'Cの秘密管理性は否定されない',
          },
          {
            unit: '管理単位D で出力',
            accent: UNIT_D_ACCENT,
            result: 'それでも Cの秘密管理性は否定されない',
          },
        ].map((dest, i) => (
          <motion.div
            key={dest.unit}
            className="flex flex-col gap-1.5 px-3 py-3 rounded-xl border text-center"
            style={{
              borderColor: `${dest.accent}55`,
              background: `linear-gradient(135deg, ${dest.accent}12 0%, rgba(255,255,255,0.02) 100%)`,
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.75 + i * 0.1 }}
          >
            <span
              className="font-bold leading-snug"
              style={{ color: dest.accent, fontSize: 'clamp(12px, 1.05vw, 15px)' }}
            >
              {dest.unit}
            </span>
            <span
              className="font-semibold leading-snug"
              style={{ color: CHAPTER_ACCENT, fontSize: 'clamp(11.5px, 0.95vw, 14px)' }}
            >
              ✓ {dest.result}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Slide51TradeSecretGenaiManagement() {
  return (
    <SlideWrapper>
      <motion.div
        className="flex flex-col gap-3.5 md:gap-4 w-full max-w-6xl py-5 md:py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* ヘッダー */}
        <div className="flex flex-col gap-1 shrink-0">
          <span
            className="tracking-[0.32em] uppercase text-white/40"
            style={{ fontSize: 'clamp(10px, 0.9vw, 12px)' }}
          >
            4-3 · 社内秘密情報・営業秘密 · 令和7年改訂指針
          </span>
          <h2
            className="font-bold tracking-tight text-white leading-tight"
            style={{ fontSize: 'clamp(19px, 2.1vw, 32px)' }}
          >
            生成AIに入力・出力されても、
            <span
              className="bg-clip-text text-transparent ml-1.5"
              style={{
                backgroundImage: `linear-gradient(90deg, ${HIGHLIGHT_ACCENT} 0%, ${CHAPTER_ACCENT} 100%)`,
              }}
            >
              秘密管理性は直ちに失われない
            </span>
          </h2>
          <p
            className="text-white/50 leading-snug"
            style={{ fontSize: 'clamp(11px, 0.95vw, 13px)' }}
          >
            令和7年改訂で、生成AI利用時の秘密管理性の考え方が指針に明記された
          </p>
        </div>

        {/* 本体: 図解を中心に */}
        <motion.div
          className="flex flex-col items-center gap-4 md:gap-5 p-4 md:p-6 rounded-2xl border"
          style={{
            borderColor: `${CHAPTER_ACCENT}44`,
            background: `linear-gradient(160deg, ${CHAPTER_ACCENT}0c 0%, rgba(255,255,255,0.02) 100%)`,
          }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <UnitFlowDiagram />

          <div className="flex flex-col gap-2 w-full max-w-2xl">
            <div
              className="flex flex-col gap-1.5 px-4 py-2.5 rounded-xl border"
              style={{
                borderColor: `${HIGHLIGHT_ACCENT}44`,
                background: `${HIGHLIGHT_ACCENT}0d`,
              }}
            >
              <p
                className="text-white/75 leading-snug"
                style={{ fontSize: 'clamp(11.5px, 1vw, 14px)' }}
              >
                <span className="font-bold" style={{ color: HIGHLIGHT_ACCENT }}>
                  ポイント:
                </span>{' '}
                生成・出力された「一事をもって」秘密管理性は否定されない。
                前提は、当該情報が
                <span className="text-white font-semibold">引き続き秘密として管理されていること</span>
                。
              </p>
            </div>

            <a
              href={METI_GUIDELINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#88bbff] hover:text-[#a8d4ff] underline underline-offset-2 transition-colors w-fit"
              style={{ fontSize: 'clamp(10px, 0.85vw, 12px)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <span aria-hidden>↗</span>
              <span>経産省「営業秘密管理指針」（令和7年3月31日最終改訂）p.18 注2</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
