"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";

const TYPING_PHRASES = [
  "Full-Stack Developer",
  "React & Next.js",
  "Node.js & APIs",
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIndex];
    const speed = deleting ? 45 : 85;
    const t = setTimeout(() => {
      if (!deleting) {
        if (display.length < phrase.length) {
          setDisplay(phrase.slice(0, display.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        if (display.length > 0) {
          setDisplay(phrase.slice(0, display.length - 1));
        } else {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % TYPING_PHRASES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [display, deleting, phraseIndex]);

  return (
    <section id="home" className="relative px-4 pb-24 pt-32 md:px-8 md:pt-40">
      <motion.div style={{ y, opacity }} className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan-300/90 light:border-cyan-200/60 light:bg-cyan-50/80 light:text-cyan-700"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            Available for projects
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl font-bold tracking-tight text-slate-100 light:text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{SITE.name}</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-4 flex min-h-[2.5rem] items-center font-mono text-xl text-violet-300 light:text-violet-700 sm:text-2xl"
          >
            <span>{display}</span>
            <span className="ml-0.5 inline-block h-7 w-0.5 animate-pulse bg-cyan-400" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 light:text-slate-600 sm:text-lg"
          >
            {SITE.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="#contact"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-cyan-500/25 transition hover:scale-[1.02] hover:shadow-cyan-500/40"
            >
              Hire Me
            </Link>
            <a
              href="/portfolio/updated_resume_final.pdf"
              download={`${SITE.name.replace(/\s+/g, "-")}-Resume.pdf`}
              className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-cyan-400/40 hover:bg-white/10 hover:text-white light:border-slate-300 light:bg-white light:text-slate-800 light:hover:border-cyan-500/50 light:hover:bg-cyan-50 light:hover:text-slate-900"
            >
              Download Resume
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-6 text-sm text-slate-500 light:text-slate-600"
          >
            {SITE.location} ·{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-slate-400 hover:text-cyan-400 light:text-slate-600 light:hover:text-cyan-600"
            >
              {SITE.email}
            </a>
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-violet-500/15 to-rose-500/20 blur-2xl light:from-cyan-400/15 light:via-violet-400/10 light:to-rose-400/10" />
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-2 glow-border">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-900/80 light:bg-slate-200/80">
              <Image
                src="/images/profile.png"
                alt={SITE.name}
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05060a]/80 via-transparent to-transparent light:from-white/85" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}