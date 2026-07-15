export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 backdrop-blur-md bg-black/30 border-b border-white/10">

        <a
          href="/"
          className="text-xl md:text-2xl font-bold tracking-[0.25em]"
        >
          RAW ENGINE
        </a>

        <nav className="flex items-center gap-6 text-sm uppercase tracking-[0.2em]">

          <a
            href="#gallery"
            className="text-gray-300 hover:text-white transition"
          >
            Portfolio
          </a>

          <a
            href="https://instagram.com/rawengine.in"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white px-5 py-2 hover:bg-white hover:text-black transition"
          >
            Instagram
          </a>

        </nav>

      </div>
    </header>
  );
}