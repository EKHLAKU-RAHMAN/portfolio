"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/lib/data";

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative px-4 py-24 md:px-8">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold tracking-tight text-slate-100 light:text-slate-900 md:text-4xl"
        >
          Skills & <span className="text-gradient">Stack</span>
        </motion.h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Categorized toolkit with animated proficiency bars — hover cards for a subtle lift.
        </p>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * ci }}
              className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,0.25)] md:p-8"
            >
              <h3 className="text-lg font-semibold text-white light:text-slate-900">{cat.title}</h3>
              <ul className="mt-6 space-y-5">
                {cat.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-200 light:text-slate-800">{skill.name}</span>
                      <span className="font-mono text-xs text-slate-500 light:text-slate-600">{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5 light:bg-slate-200">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.15 * ci + 0.05, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}