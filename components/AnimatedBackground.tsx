"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px] light:bg-cyan-400/12"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-violet-500/15 blur-[120px] light:bg-violet-400/10"
      />
      <motion.div
        style={{ rotate, y: y1 }}
        className="absolute bottom-20 left-1/4 h-64 w-64 rounded-full bg-rose-500/10 blur-[90px] light:bg-rose-400/8"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.55, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[15%] top-[25%] h-40 w-40 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-sm light:border-cyan-300/30 light:bg-cyan-400/10"
      />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[12%] top-[18%] h-32 w-32 rounded-full border border-violet-400/25 bg-violet-500/5 light:border-violet-300/35 light:bg-violet-400/8"
      />
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[30%] right-[20%] h-24 w-48 rounded-full border border-rose-400/20 bg-rose-500/5 blur-[1px] light:border-rose-300/30 light:bg-rose-400/8"
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80 light:bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230f172a\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] light:opacity-100" />
    </div>
  );
}