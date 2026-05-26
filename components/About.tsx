"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education, SITE, skillCategories } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative px-4 py-24 md:px-8">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold tracking-tight text-slate-100 light:text-slate-900 md:text-4xl"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-3xl text-slate-400 light:text-slate-600"
        >
          {SITE.summary}
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          <motion.div variants={item} className="glass rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white light:text-slate-900">Education</h3>
            <ul className="mt-4 space-y-4">
              {education.map((e) => (
                <li key={e.title} className="border-l-2 border-cyan-500/50 pl-4">
                  <p className="font-medium text-slate-200 light:text-slate-800">{e.title}</p>
                  <p className="text-sm text-slate-500 light:text-slate-600">
                    {e.period} · {e.place}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={item} className="glass rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white light:text-slate-900">Core skills</h3>
            <p className="mt-1 text-sm text-slate-500 light:text-slate-600">
              Animated snapshot — see full breakdown in Skills.
            </p>
            <ul className="mt-6 space-y-4">
              {skillCategories[0].items.slice(0, 4).map((skill) => (
                <li key={skill.name}>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-200 light:text-slate-800">{skill.name}</span>
                    <span className="font-mono text-xs text-slate-500 light:text-slate-600">{skill.level}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5 light:bg-slate-200">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400/90 to-violet-500/90"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}