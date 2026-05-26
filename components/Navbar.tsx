"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, SITE } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 px-4 pt-4 transition-all duration-300 md:px-8 ${
        scrolled ? "pt-3" : "pt-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition-all duration-300 md:px-6 ${
          scrolled ? "glass-strong shadow-lg shadow-black/20" : "glass"
        }`}
      >
        <Link href="#home" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-cyan-400/30 to-violet-500/30 ring-1 ring-white/10 transition-transform group-hover:scale-105 light:from-cyan-400/20 light:to-violet-400/20 light:ring-slate-200">
            <Image
              src="/images/navbar-avatar.png"
              alt={SITE.name}
              width={36}
              height={36}
              className="object-cover object-[center_25%]"
              priority
            />
          </span>
          <span className="hidden font-semibold tracking-tight text-slate-100 light:text-slate-900 sm:inline">
            {SITE.name}
          </span>
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-300 light:text-slate-600 light:hover:bg-slate-100 light:hover:text-cyan-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="group relative hidden overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/35 sm:inline-flex"
          >
            <span className="relative z-10">Let&apos;s talk</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 light:border-slate-200 light:bg-slate-100 light:text-slate-700 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full rounded bg-current transition ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full rounded bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full rounded bg-current transition ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[5.5rem] z-40 bg-[#05060a]/80 backdrop-blur-md light:bg-white/70 lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.ul
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="glass-strong mx-4 mt-2 space-y-1 rounded-2xl border border-white/10 p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-slate-200 transition hover:bg-white/5 hover:text-cyan-300 light:text-slate-800 light:hover:bg-slate-100 light:hover:text-cyan-600"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="#contact"
                  className="block rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-3 text-center text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  Let&apos;s talk
                </Link>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}