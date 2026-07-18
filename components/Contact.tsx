export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-32 text-center"
    >
      <p className="uppercase tracking-[0.4em] text-gray-500 text-sm">
        Contact
      </p>

      <h2 className="mt-6 text-4xl md:text-6xl font-black">
        Let's Create Something Amazing
      </h2>

      <p className="mt-8 text-gray-400 max-w-2xl mx-auto">
        Need premium posters for your business, brand or event?
        Let's work together.
      </p>

      <div className="mt-12 flex justify-center gap-4 flex-wrap">

        <a
          href="https://instagram.com/rawengine.in"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white text-black px-8 py-4 font-semibold"
        >
          Instagram
        </a>

        <a
          href="mailto:youremail@example.com"
          className="rounded-full border border-white px-8 py-4"
        >
          Email
        </a>

      </div>
    </section>
  );
}