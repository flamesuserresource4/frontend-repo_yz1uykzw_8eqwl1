import { Star } from 'lucide-react';

const caseStudies = [
  {
    company: 'Acme SaaS',
    result: '4.2x ROAS in 60 days',
    summary: 'Scaled paid search and improved landing pages, lifting conversion rate by 38%.',
    tag: 'B2B SaaS'
  },
  {
    company: 'Nova AI',
    result: 'Organic traffic +210%',
    summary: 'Content architecture and programmatic SEO for high-intent topics.',
    tag: 'AI Platform'
  },
  {
    company: 'Flow CRM',
    result: 'Demo requests +72%',
    summary: 'Revamped messaging and onboarding with lifecycle email automations.',
    tag: 'CRM'
  }
];

export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Selected work</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Real results from recent collaborations.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 transition">
            View pricing
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((c) => (
            <article key={c.company} className="group rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
              <div className="h-36 bg-gradient-to-tr from-fuchsia-500 via-sky-500 to-emerald-400" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-neutral-300">{c.tag}</span>
                  <Star size={16} className="text-yellow-400" />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-white">{c.company}</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">{c.summary}</p>
                <p className="mt-3 text-sm font-semibold text-neutral-900 dark:text-white">{c.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
