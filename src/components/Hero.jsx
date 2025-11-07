import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-20">
      <div className="relative h-[72vh] sm:h-[78vh] md:h-[85vh]">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-white dark:from-neutral-950/40 dark:via-neutral-950/10 dark:to-neutral-950/80" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl md:max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200">
                <Sparkles size={14} />
                Digital Marketing Portfolio
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-neutral-900 dark:text-white">
                Grow faster with modern, data-driven marketing
              </h1>
              <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
                A clean, modern one-page showcase of campaigns, strategy, and results. Interactive, playful, and built for conversions.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-semibold shadow-lg hover:opacity-90 transition"
                >
                  Start a project <ArrowRight size={18} />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold border border-black/10 dark:border-white/15 bg-white/70 dark:bg-neutral-900/70 backdrop-blur hover:bg-white/90 dark:hover:bg-neutral-900/90 transition"
                >
                  View recent work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
