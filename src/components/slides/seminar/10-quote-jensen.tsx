'use client';

import { motion } from 'framer-motion';
import SlideWrapper from '../../SlideWrapper';

export default function Slide10QuoteJensen() {
  return (
    <SlideWrapper>
      <motion.div
        className="relative flex flex-col gap-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* 装飾的な引用符 */}
        <motion.div
          className="text-[120px] md:text-[160px] leading-[0.7] font-serif select-none"
          style={{
            background: 'linear-gradient(135deg, #4F8EF7 0%, #FF6B9D 50%, #ffaacc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          &ldquo;
        </motion.div>

        {/* 引用本文（日本語） */}
        <motion.p
          className="text-3xl md:text-4xl font-light text-white leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          AIがあなたの仕事を奪うのではない。
          <br />
          <span className="bg-gradient-to-r from-[#4F8EF7] to-[#FF6B9D] bg-clip-text text-transparent font-normal">
            AIを使いこなす人があなたの仕事を奪うのだ
          </span>
        </motion.p>

        {/* 英語原文 */}
        <motion.p
          className="text-base md:text-lg text-white/40 italic font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          &ldquo;AI is not going to replace you.
          <br />
          Someone using AI will replace you.&rdquo;
        </motion.p>

        {/* 装飾線 */}
        <motion.div
          className="w-16 h-px bg-gradient-to-r from-[#4F8EF7] via-[#FF6B9D] to-[#ffaacc]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />

        {/* 著者 */}
        <motion.div
          className="flex flex-col gap-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-base md:text-lg text-white font-medium">ジェンスン・フアン</p>
          <p className="text-xs md:text-sm text-white/40 tracking-wider">CEO · NVIDIA</p>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
