"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { SITE } from "@/lib/data";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function validate(name: string, email: string, message: string): Errors {
  const e: Errors = {};
  if (!name.trim()) e.name = "Please enter your name.";
  if (!email.trim()) e.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email address.";
  if (!message.trim()) e.message = "Tell me a bit about your project.";
  else if (message.trim().length < 10) e.message = "A few more words would help (min 10 characters).";
  return e;
}

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const next = validate(name, email, message);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative px-4 py-24 md:px-8">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold tracking-tight text-slate-100 light:text-slate-900 md:text-4xl"
        >
          Let&apos;s <span className="text-gradient">Connect</span>
        </motion.h2>
        <p className="mt-3 max-w-2xl text-slate-400 light:text-slate-600">
          Share a short brief — validation runs in the browser, then your mail client opens with the
          message pre-filled.
        </p>
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-lg font-semibold text-white light:text-slate-900">Direct</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <span className="text-slate-500 light:text-slate-600">Email</span>
                <br />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-cyan-300 hover:underline light:text-cyan-700"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="text-slate-500 light:text-slate-600">Phone</span>
                <br />
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="text-cyan-300 hover:underline light:text-cyan-700"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="text-slate-500 light:text-slate-600">Location</span>
                <br />
                <span className="text-slate-300 light:text-slate-800">{SITE.location}</span>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={SITE.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/10 light:border-slate-200 light:bg-white light:text-slate-800 light:hover:border-cyan-400/60 light:hover:bg-cyan-50"
              >
                LinkedIn
              </Link>
              <Link
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-violet-400/40 hover:bg-white/10 light:border-slate-200 light:bg-white light:text-slate-800 light:hover:border-violet-400/50 light:hover:bg-violet-50"
              >
                GitHub
              </Link>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 }}
            onSubmit={onSubmit}
            className="glass rounded-2xl p-6 md:p-8"
            noValidate
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-300 light:text-slate-800">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-2 w-full rounded-xl border bg-white/5 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:ring-2 light:border-slate-300 light:bg-white light:text-slate-900 light:placeholder:text-slate-400 ${
                    errors.name
                      ? "border-rose-500/50 focus:ring-rose-500/30"
                      : "border-white/10 focus:border-cyan-400/40 focus:ring-cyan-500/20 light:focus:border-cyan-500/50"
                  }`}
                  placeholder="Your name"
                  autoComplete="name"
                />
                {errors.name && <p className="mt-1.5 text-sm text-rose-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-300 light:text-slate-800">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-2 w-full rounded-xl border bg-white/5 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:ring-2 light:border-slate-300 light:bg-white light:text-slate-900 light:placeholder:text-slate-400 ${
                    errors.email
                      ? "border-rose-500/50 focus:ring-rose-500/30"
                      : "border-white/10 focus:border-cyan-400/40 focus:ring-cyan-500/20 light:focus:border-cyan-500/50"
                  }`}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {errors.email && <p className="mt-1.5 text-sm text-rose-400">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-300 light:text-slate-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className={`mt-2 w-full resize-y rounded-xl border bg-white/5 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:ring-2 light:border-slate-300 light:bg-white light:text-slate-900 light:placeholder:text-slate-400 ${
                    errors.message
                      ? "border-rose-500/50 focus:ring-rose-500/30"
                      : "border-white/10 focus:border-cyan-400/40 focus:ring-cyan-500/20 light:focus:border-cyan-500/50"
                  }`}
                  placeholder="What are we building?"
                />
                {errors.message && <p className="mt-1.5 text-sm text-rose-400">{errors.message}</p>}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] hover:shadow-cyan-500/35"
              >
                Send message
              </button>
              {submitted && (
                <span className="text-sm text-emerald-400 light:text-emerald-600">Opening your mail app…</span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}