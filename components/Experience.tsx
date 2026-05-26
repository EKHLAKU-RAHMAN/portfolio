"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="relative px-4 py-24 md:px-8">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold tracking-tight text-slate-100 light:text-slate-900 md:text-4xl"
        >
          <span className="text-gradient">Experience</span>
        </motion.h2>
        <p className="mt-3 max-w-2xl text-slate-400 light:text-slate-600">
          Roles where I shipped production features, mentored others, and improved performance.
        </p>
        <div className="relative mt-14">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/40 to-transparent md:left-[15px]" />
          <ul className="space-y-12">
            {experience.map((job, i) => (
              <motion.li
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.12 * i, duration: 0.5 }}
                className="relative flex gap-6 md:gap-10"
              >
                <div className="relative z-10 mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-400/40 bg-[#05060a] shadow-[0_0_20px_rgba(34,211,238,0.35)] md:h-8 md:w-8">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                </div>
                <div className="glass group flex-1 rounded-2xl p-6 transition duration-300 hover:border-cyan-400/25 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.25)] md:p-8">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-100 light:text-slate-900 light:group-hover:text-cyan-700">
                      {job.role}
                    </h3>
                    <span className="font-mono text-xs text-violet-300/90 light:text-violet-700">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-400 light:text-slate-600">{job.company}</p>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-400 marker:text-cyan-500/80 light:text-slate-600 light:marker:text-cyan-600">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}