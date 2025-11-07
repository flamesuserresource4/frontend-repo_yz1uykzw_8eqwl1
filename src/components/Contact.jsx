import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Let’s work together</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">Tell me about your goals and I’ll design a roadmap to hit them.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <form className="md:col-span-2 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
                <input type="text" className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400" placeholder="Share a bit about the project and timeline..." />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-semibold shadow-lg hover:opacity-90 transition">
              Send inquiry
            </button>
          </form>

          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Contact</h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">Prefer email or a quick call? Reach out directly.</p>
            <div className="mt-4 space-y-2">
              <a href="mailto:hello@blueflamemarketing.io" className="flex items-center gap-2 text-sm hover:underline"><Mail size={16} /> hello@blueflamemarketing.io</a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm hover:underline"><Phone size={16} /> +1 (234) 567-890</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
