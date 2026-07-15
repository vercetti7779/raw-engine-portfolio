export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#222_0%,#050505_55%,#000_100%)]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        <p className="mb-4 uppercase tracking-[0.5em] text-gray-500 text-sm">
          Creative Design Studio
        </p>

        <h1 className="text-6xl md:text-8xl font-black tracking-[0.25em]">
          RAW ENGINE
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-gray-400 text-lg leading-8">
          Designing posters that stop the scroll.
          Premium poster designs for brands, businesses,
          events and social media.
        </p>

        <div className="mt-12 flex justify-center gap-4 flex-wrap">

          <a
            href="#gallery"
            className="rounded-full bg-white px-8 py-4 text-black font-semibold transition hover:scale-105"
          >
            View Portfolio
          </a>

          <a
            href="https://instagram.com/rawengine.in"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black"
          >
            Instagram
          </a>

        </div>

      </div>

    </section>
  );
}