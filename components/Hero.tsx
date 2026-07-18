"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2a2a2a_0%,#111111_40%,#000000_100%)]" />

      {/* Animated Glow */}
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-yellow-500/10 blur-[120px]"
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-6xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.5em] text-gray-500 text-sm"
        >
          Creative Design Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-8 text-6xl font-black leading-none tracking-[0.2em] md:text-8xl"
        >
          RAW ENGINE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-10 mb-8 max-w-2xl text-lg leading-8 text-gray-400"
        >
          Designing posters that stop the scroll.
          Premium visuals for businesses,
          brands, restaurants, real estate,
          festivals and social media.
        </motion.p>

       <motion.a
  href="#gallery"
  whileHover={{
    scale: 1.05,
    y: -3,
    boxShadow: "0px 20px 45px rgba(255,255,255,0.18)",
  }}
  whileTap={{ scale: 0.97 }}
  className="group relative inline-flex overflow-hidden rounded-full bg-white px-9 py-4 font-semibold"
style={{ color: "#000" }}
>
  <span className="relative z-10 flex items-center gap-3">
    View Portfolio
    <motion.span
      className="text-xl"
      animate={{ x: [0, 6, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      →
    </motion.span>
  </span>

  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
</motion.a>

      </div>

    </section>
  );
}