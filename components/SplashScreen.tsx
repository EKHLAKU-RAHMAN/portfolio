"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#05060a] light:bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="h-16 w-16 rounded-2xl border-2 border-cyan-400/40 border-t-cyan-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-sm tracking-[0.3em] text-slate-400 light:text-slate-600"
            >
              LOADING PORTFOLIO
            </motion.p>
            <motion.div
              className="absolute inset-0 -z-10 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.25), transparent 55%)",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}