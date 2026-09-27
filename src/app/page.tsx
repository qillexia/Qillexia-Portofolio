export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between p-8 md:p-16 max-w-5xl mx-auto">
      <header className="flex justify-between items-center text-xs tracking-widest uppercase text-neutral-500">
        <span>Portfolio</span>
        <span>2026</span>
      </header>

      <section className="my-auto py-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight text-neutral-950">
          Minimalist &amp; Clean Portfolio.
        </h1>
        <p className="mt-4 text-sm text-neutral-500 max-w-md">
          Framework Next.js kosongan telah disiapkan dengan TypeScript, Tailwind CSS, dan siap dikustomisasi sesuai kebutuhan portofolio Anda.
        </p>
      </section>

      <footer className="text-xs text-neutral-400 tracking-wider">
        <span>Index &mdash; Ready for development</span>
      </footer>
    </main>
  );
}
