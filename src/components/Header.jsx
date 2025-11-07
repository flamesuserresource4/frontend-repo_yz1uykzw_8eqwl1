import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 border-b border-white/20 dark:border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-sky-500 to-emerald-400" />
            <span className="font-semibold tracking-tight">BlueFlame Marketing</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition"
            >
              Get a Quote
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 dark:hover:bg:white/5"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
