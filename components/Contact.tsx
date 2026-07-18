import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-32 text-center"
    >
      <p className="uppercase tracking-[0.4em] text-gray-500 text-sm">
        Contact
      </p>

      <h2 className="mt-6 text-5xl md:text-6xl font-black">
        Let's Create Something Amazing
      </h2>

      <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-400">
        Need premium posters for your business, restaurant,
        real estate project or social media?
        Let's build something people remember.
      </p>

      <div className="mt-16 flex justify-center gap-8">

        <a
          href="https://instagram.com/rawengine.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-16 w-16 items-center justify-center rounded-full border border-pink-500 text-pink-400 transition-all duration-300 hover:scale-110 hover:bg-pink-500 hover:text-white"
        >
          <FaInstagram size={28} />
        </a>

        <a
          href="https://wa.me/YOURNUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-16 w-16 items-center justify-center rounded-full border border-green-500 text-green-400 transition-all duration-300 hover:scale-110 hover:bg-green-500 hover:text-white"
        >
          <FaWhatsapp size={28} />
        </a>

        <a
          href="mailto:youremail@example.com"
          className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-500 text-blue-400 transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white"
        >
          <FaEnvelope size={26} />
        </a>

      </div>

      <p className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} RAW ENGINE
      </p>
    </section>
  );
}