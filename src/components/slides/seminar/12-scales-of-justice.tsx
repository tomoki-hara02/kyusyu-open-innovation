'use client';

import { motion } from 'framer-motion';
import SlideWrapper from '../../SlideWrapper';

/**
 * p12: 生成AI分野の法務は安全に使い倒すこと（天秤）
 *
 * 図の左右に「生成AIへのブレーキ」「生成AIへのアクセル」の見出しを静的に配置。
 * 天秤本体は常に傾き続ける（ロッキング）モーション。
 */

const BLUE = '#88bbff';
const PURPLE = '#c8a8ff';
const PINK = '#ffaacc';

const LEFT = {
  label: 'ブレーキ',
  desc: '過度に抑制すると、その利便性から競争力の相対的低下を招く',
  color: BLUE,
};

const RIGHT = {
  label: 'アクセル',
  desc: '過度に推進すると、その強大さから取り返しのつかないリスクを招く',
  color: PINK,
};

// --- レイアウト定数（SVG座標）---
const PIVOT_X = 200;
const PIVOT_Y = 96;
const BEAM_HALF = 150;
const STRING_LEN = 56;

// 揺れ幅（度）
const TILT_DEG = 7;

// 天秤の揺れ続けるモーション共通設定
const ROCK_TRANSITION = {
  duration: 2.6,
  repeat: Infinity,
  repeatType: 'reverse' as const,
  ease: 'easeInOut' as const,
};

export default function Slide12ScalesOfJustice() {
  return (
    <SlideWrapper>
      <motion.div
        className="flex flex-col items-center gap-10 w-full max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* タイトル */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center leading-tight">
          生成AI分野の法務は
          <span
            className="bg-clip-text text-transparent mx-1"
            style={{
              backgroundImage: `linear-gradient(90deg, ${BLUE} 0%, ${PURPLE} 50%, ${PINK} 100%)`,
            }}
          >
            安全に使い倒す
          </span>
          こと
        </h2>

        {/* 図の左右に見出し ＋ 中央に天秤 */}
        <div className="flex items-center justify-center gap-6 md:gap-10 w-full">
          {/* 左の見出し（静的） */}
          <SideHeading label={LEFT.label} desc={LEFT.desc} color={LEFT.color} from="left" />

          <svg width="400" height="290" viewBox="0 0 400 290" fill="none" className="shrink-0">
            <defs>
              <linearGradient id="soj-beam" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor={LEFT.color} />
                <stop offset="0.5" stopColor={PURPLE} />
                <stop offset="1" stopColor={RIGHT.color} />
              </linearGradient>
              <linearGradient id="soj-pillar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor={PURPLE} />
                <stop offset="1" stopColor={`${PURPLE}66`} />
              </linearGradient>
            </defs>

            {/* 台座（静止） */}
            <motion.g
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            >
              <rect x={PIVOT_X - 46} y={262} width={92} height={10} rx={5} fill={`${PURPLE}80`} />
              <path
                d={`M${PIVOT_X - 30} 262 L${PIVOT_X - 6} ${PIVOT_Y + 12} L${PIVOT_X + 6} ${PIVOT_Y + 12} L${PIVOT_X + 30} 262 Z`}
                fill="url(#soj-pillar)"
              />
            </motion.g>

            {/* 支点ノブ（静止） */}
            <motion.circle
              cx={PIVOT_X}
              cy={PIVOT_Y}
              r={9}
              fill={PURPLE}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.4 }}
              style={{ filter: `drop-shadow(0 0 10px ${PURPLE}b3)` }}
            />

            {/* 梁＋皿（支点まわりに常時ロッキング） */}
            <motion.g
              style={{ transformOrigin: `${PIVOT_X}px ${PIVOT_Y}px` }}
              initial={{ rotate: -TILT_DEG }}
              animate={{ rotate: TILT_DEG }}
              transition={{ ...ROCK_TRANSITION, delay: 0.6 }}
            >
              {/* 梁 */}
              <rect
                x={PIVOT_X - BEAM_HALF}
                y={PIVOT_Y - 4}
                width={BEAM_HALF * 2}
                height={8}
                rx={4}
                fill="url(#soj-beam)"
              />
              {/* 左の吊り紐＋皿（梁の傾きを打ち消し、常に垂直に吊る） */}
              <Pan x={PIVOT_X - BEAM_HALF} topY={PIVOT_Y} color={LEFT.color} />
              {/* 右の吊り紐＋皿 */}
              <Pan x={PIVOT_X + BEAM_HALF} topY={PIVOT_Y} color={RIGHT.color} />
            </motion.g>
          </svg>

          {/* 右の見出し（静的） */}
          <SideHeading label={RIGHT.label} desc={RIGHT.desc} color={RIGHT.color} from="right" />
        </div>
      </motion.div>
    </SlideWrapper>
  );
}

function Pan({ x, topY, color }: { x: number; topY: number; color: string }) {
  const panY = topY + STRING_LEN;
  return (
    // 梁が -TILT→+TILT で揺れる分を打ち消して、吊り紐＋皿を常に垂直に保つ
    <motion.g
      style={{ transformOrigin: `${x}px ${topY}px` }}
      initial={{ rotate: TILT_DEG }}
      animate={{ rotate: -TILT_DEG }}
      transition={{ ...ROCK_TRANSITION, delay: 0.6 }}
    >
      <line x1={x} y1={topY} x2={x} y2={panY} stroke={`${color}99`} strokeWidth={1.5} />
      <path
        d={`M${x - 34} ${panY} Q${x} ${panY + 22} ${x + 34} ${panY}`}
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <ellipse cx={x} cy={panY} rx={34} ry={6} fill={`${color}2e`} />
    </motion.g>
  );
}

function SideHeading({
  label,
  desc,
  color,
  from,
}: {
  label: string;
  desc: string;
  color: string;
  from: 'left' | 'right';
}) {
  return (
    <motion.div
      className="shrink-0 w-56 md:w-72 flex flex-col gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 md:px-7 md:py-6 text-center"
      style={{ boxShadow: `0 0 30px -8px ${color}73` }}
      initial={{ opacity: 0, x: from === 'left' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
    >
      <span className="text-xl md:text-3xl font-bold tracking-tight" style={{ color }}>
        {label}
      </span>
      <p className="text-xs md:text-sm leading-relaxed text-white/70">{desc}</p>
    </motion.div>
  );
}
