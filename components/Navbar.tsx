export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <a
          href="#"
          className="text-3xl font-black tracking-[0.35em] transition hover:opacity-80"
        >
          RAW ENGINE
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.25em]">

          <a href="#gallery" className="hover:text-yellow-400 transition">
            Portfolio
          </a>

          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>

          <a
            href="https://instagram.com/rawengine.in"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white px-6 py-2 hover:bg-white hover:text-black transition"
          >
            Instagram
          </a>

        </nav>

      </div>
    </header>
  );
}