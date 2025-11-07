import { Rocket, BarChart3, Megaphone, Search } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Go-To-Market Strategy',
    desc: 'Positioning, personas, and lean launch frameworks tailored to your product.'
  },
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    desc: 'Full-funnel paid media across Meta, Google, and LinkedIn with experimentation.'
  },
  {
    icon: Search,
    title: 'SEO & Content',
    desc: 'Technical SEO, content strategy, and landing pages that actually convert.'
  },
  {
    icon: Megaphone,
    title: 'Brand & Creative',
    desc: 'Visual systems and storytelling that make your product unforgettable.'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-white dark:from-neutral-950 dark:to-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Services</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">Simple packages, measurable outcomes.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6 hover:-translate-y-1 hover:shadow-xl transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-sky-500 to-emerald-400 flex items-center justify-center text-white shadow">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
