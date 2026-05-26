"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { projects } from "@/lib/data";

function ProjectCard({
  title,
  description,
  stack,
  github,
  demo,
  index,
}: (typeof projects)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const glowX = useSpring(useTransform(mx, [-0.5, 0.5], [20, 80]), { stiffness: 200, damping: 35 });
  const glowY = useSpring(useTransform(my, [-0.5, 0.5], [30, 70]), { stiffness: 200, damping: 35 });
  const background = useMotionTemplate`radial-gradient(420px at ${glowX}% ${glowY}%, rgba(34,211,238,0.12), transparent 55%)`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group perspective-[1000px]"
    >
      <div
        ref={ref}
        className="glass relative h-full overflow-hidden rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_0_50px_-12px_rgba(167,139,250,0.35)] light:hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.2)] md:p-7"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
          style={{ background }}
        />
        <div className="relative">
          <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-100 light:text-slate-900 light:group-hover:text-cyan-700">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 light:text-slate-600">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300 light:border-slate-200 light:bg-slate-100 light:text-slate-700"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-violet-300 underline-offset-4 transition hover:text-violet-200 hover:underline light:text-violet-700 light:hover:text-violet-900"
            >
              GitHub
            </Link>
            <Link
              href={demo}
              className="text-sm font-medium text-cyan-300 underline-offset-4 transition hover:text-cyan-200 hover:underline light:text-cyan-700 light:hover:text-cyan-900"
            >
              Demo / Details
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 light:text-slate-900 md:text-4xl">
          Selected <span className="text-gradient">Projects</span>
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400 light:text-slate-600">
          Product-style builds spanning web, mobile, and internal tools. Update links in{" "}
          <code className="text-cyan-400/80 light:text-cyan-700">src/lib/data.ts</code>.
        </p>
        <div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "1200px" }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}