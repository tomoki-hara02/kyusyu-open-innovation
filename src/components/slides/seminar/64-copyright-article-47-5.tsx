'use client';

import { motion } from 'framer-motion';
import SlideWrapper from '../../SlideWrapper';

/**
 * p64: 4-6 著作物 — 第47条の5 条文解説
 *
 * ベーステンプレート: `63-copyright-article-30-4.tsx`
 */

const LAW_ACCENT = '#60a5fa';
const HIGHLIGHT_ACCENT = '#f7c46c';
const CHAPTER_ACCENT = '#9ee0a8';
const CAUTION_ACCENT = '#f87171';
const DIAGRAM_LABEL = '#fca5a5';
const SOURCE_ACCENT = '#fb923c';

const EXAMPLE_STEPS = [
  '生成AIを用いてWeb検索を行う場合やRAG検索を行う場合',
  'プロンプトに「生成AIにおけるMCP利用についてサマリーを作って、サマリー内には、tAiL.法律事務所の記事があれば適宜重要箇所を引用して」と入力',
  '生成AIは、出力の一部にtAiL.法律事務所の記事を引用する',
] as const;

const EXAMPLE_CONCLUSIONS = [
  {
    text: '著作権法第30条の4は、享受目的があるため適用されない。',
    accent: CAUTION_ACCENT,
  },
  {
    text: 'しかし、第47条の5により、軽微利用であれば許容される余地がある。',
    accent: HIGHLIGHT_ACCENT,
  },
] as const;

const ARTICLE_SUBTITLE =
  '（電子計算機による情報処理及びその結果の提供に付随する軽微利用等）';

function DocumentIcon({
  color,
  width = 44,
  height = 52,
  lines = 4,
}: {
  color: string;
  width?: number;
  height?: number;
  lines?: number;
}) {
  const lineYs = Array.from({ length: lines }, (_, i) => 16 + i * 8);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 52"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <rect
        x="3"
        y="2"
        width="38"
        height="48"
        rx="3"
        fill={`${color}18`}
        stroke={color}
        strokeWidth="2"
      />
      {lineYs.map((y) => (
        <line
          key={y}
          x1="10"
          y1={y}
          x2="34"
          y2={y}
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          opacity="0.65"
        />
      ))}
    </svg>
  );
}

function MinorUseDiagram() {
  return (
    <motion.div
      className="flex flex-col gap-2 px-3.5 py-3 md:px-4 md:py-4 rounded-xl border h-full justify-center"
      style={{
        borderColor: `${SOURCE_ACCENT}44`,
        background: `linear-gradient(160deg, ${SOURCE_ACCENT}0c 0%, rgba(0,0,0,0.18) 100%)`,
      }}
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <span
        className="font-bold text-white block"
        style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}
      >
        【出力内容】軽微利用の3要素
      </span>
      <p
        className="text-white/45 leading-snug"
        style={{ fontSize: 'clamp(10px, 0.85vw, 12px)' }}
      >
        ①〜③を総合して「軽微」といえるかを判断する
      </p>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-3 min-h-[9rem] md:min-h-[11rem]">
        {/* 左: 出力 */}
        <motion.div
          className="relative flex flex-col items-center justify-end gap-1.5 rounded-md border px-2 py-3 h-full min-h-[8rem]"
          style={{
            borderColor: `${LAW_ACCENT}66`,
            background: `${LAW_ACCENT}0a`,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          <span
            className="absolute top-1.5 left-2 font-bold leading-none"
            style={{ color: LAW_ACCENT, fontSize: 'clamp(10px, 0.92vw, 13px)' }}
          >
            出力
          </span>
          <div
            className="absolute inset-2 rounded border border-dashed pointer-events-none"
            style={{ borderColor: `${LAW_ACCENT}28` }}
            aria-hidden
          />
          <DocumentIcon color={LAW_ACCENT} width={40} height={48} lines={3} />
          <motion.span
            className="font-bold text-center leading-snug"
            style={{ color: DIAGRAM_LABEL, fontSize: 'clamp(10px, 0.9vw, 12.5px)' }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.85 }}
          >
            ②全体に対する割合
          </motion.span>
        </motion.div>

        {/* 中央: ③ + 矢印 */}
        <div className="flex flex-col items-center gap-1.5 px-1 shrink-0 self-center">
          <motion.span
            className="font-bold text-center leading-snug max-w-[6rem]"
            style={{ color: DIAGRAM_LABEL, fontSize: 'clamp(10px, 0.9vw, 12.5px)' }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.95 }}
          >
            ③出力時の
            <br />
            変化の度合い
          </motion.span>
          <svg width="64" height="24" viewBox="0 0 56 22" fill="none" aria-hidden>
            <motion.path
              d="M54 11H12M12 11L20 5M12 11L20 17"
              stroke={LAW_ACCENT}
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            />
            <motion.path
              d="M48 7C40 15 28 7 20 11"
              stroke={`${LAW_ACCENT}55`}
              strokeWidth="1.5"
              strokeDasharray="2.5 2.5"
              strokeLinecap="round"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </div>

        {/* 右: 著作物 */}
        <motion.div
          className="flex flex-col items-center justify-end gap-1.5 py-1.5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.55 }}
        >
          <div className="relative">
            <DocumentIcon color={SOURCE_ACCENT} width={48} height={58} lines={4} />
            <motion.div
              className="absolute left-1 right-1 bottom-1.5 rounded-sm border-2"
              style={{
                height: '28%',
                borderColor: SOURCE_ACCENT,
                background: `${SOURCE_ACCENT}33`,
              }}
              aria-hidden
              animate={{ opacity: [0.55, 1, 0.55], boxShadow: [`0 0 0 ${SOURCE_ACCENT}00`, `0 0 12px ${SOURCE_ACCENT}aa`, `0 0 0 ${SOURCE_ACCENT}00`] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <motion.span
            className="font-bold text-center leading-snug"
            style={{ color: DIAGRAM_LABEL, fontSize: 'clamp(10px, 0.9vw, 12.5px)' }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.75 }}
          >
            ①どの程度
            <br />
            使われたか
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function FlowArrow() {
  return (
    <span
      className="flex justify-center leading-none py-0.5"
      style={{ color: LAW_ACCENT, fontSize: 'clamp(14px, 1.2vw, 18px)' }}
      aria-hidden
    >
      ↓
    </span>
  );
}

function ApplicationExampleColumn() {
  return (
    <motion.div
      className="flex flex-col gap-1.5 px-3 py-2.5 md:px-3.5 md:py-3 rounded-xl border min-h-0"
      style={{
        borderColor: `${LAW_ACCENT}44`,
        background: `linear-gradient(160deg, ${LAW_ACCENT}0a 0%, rgba(255,255,255,0.02) 100%)`,
      }}
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.18 }}
    >
      <h3
        className="font-bold shrink-0"
        style={{ color: CHAPTER_ACCENT, fontSize: 'clamp(14px, 1.25vw, 18px)' }}
      >
        適用例として
      </h3>

      <div className="flex flex-col gap-0 min-h-0">
        {EXAMPLE_STEPS.map((step, i) => (
          <div key={step} className="flex flex-col gap-0">
            <motion.p
              className="text-white/85 leading-snug rounded-lg border px-2 py-1.5"
              style={{
                fontSize: 'clamp(11px, 0.95vw, 14px)',
                borderColor: `${LAW_ACCENT}33`,
                background: 'rgba(255,255,255,0.03)',
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 + i * 0.08 }}
            >
              {step}
            </motion.p>
            {i < EXAMPLE_STEPS.length - 1 && <FlowArrow />}
          </div>
        ))}
      </div>

      <div className="h-px bg-white/8 shrink-0" />

      <div className="flex flex-col gap-1 shrink-0">
        <p
          className="text-white/70 leading-snug"
          style={{ fontSize: 'clamp(13px, 1.05vw, 16px)' }}
        >
          ここで、
        </p>
        <ul className="flex flex-col gap-1.5 list-none">
          {EXAMPLE_CONCLUSIONS.map((item, i) => (
            <motion.li
              key={item.text}
              className="flex items-start gap-2 rounded-lg border px-2 py-1.5"
              style={{
                borderColor: `${item.accent}44`,
                background: `${item.accent}0c`,
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.48 + i * 0.08 }}
            >
              <span
                className="shrink-0 font-bold leading-relaxed"
                style={{ color: item.accent, fontSize: 'clamp(13px, 1.05vw, 16px)' }}
              >
                ○
              </span>
              <span
                className="text-white leading-snug min-w-0 font-semibold"
                style={{ fontSize: 'clamp(13px, 1.05vw, 16px)' }}
              >
                {item.text}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Slide64CopyrightArticle475() {
  return (
    <SlideWrapper>
      <motion.div
        className="flex flex-col gap-3 md:gap-4 w-full max-w-6xl py-6 md:py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col gap-1 shrink-0">
          <span
            className="tracking-[0.32em] uppercase text-white/40"
            style={{ fontSize: 'clamp(13px, 1.15vw, 17px)' }}
          >
            4-6 · 著作物 · 第47条の5
          </span>
          <h2
            className="font-bold tracking-tight text-white leading-snug"
            style={{ fontSize: 'clamp(18px, 1.9vw, 28px)' }}
          >
            {ARTICLE_SUBTITLE}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 items-stretch">
          {/* 左: 適用例 */}
          <ApplicationExampleColumn />

          {/* 右: 軽微利用の3要素（図解） */}
          <MinorUseDiagram />
        </div>
      </motion.div>
    </SlideWrapper>
  );
}
