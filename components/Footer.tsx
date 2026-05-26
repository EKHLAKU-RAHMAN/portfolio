import Link from "next/link";
import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-12 light:border-slate-200 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center text-sm text-slate-500 light:text-slate-600 sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Crafted with Next.js & Tailwind.
        </p>
        <div className="flex gap-6">
          <Link
            href={SITE.github}
            className="hover:text-cyan-400 light:hover:text-cyan-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href={SITE.linkedIn}
            className="hover:text-cyan-400 light:hover:text-cyan-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link href={`mailto:${SITE.email}`} className="hover:text-cyan-400 light:hover:text-cyan-600">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}