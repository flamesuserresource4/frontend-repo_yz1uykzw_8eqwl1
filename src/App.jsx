import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>
      <footer className="py-10 border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} BlueFlame Marketing. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
