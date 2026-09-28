import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />

      <div className="relative z-10 bg-transparent backdrop-blur-xl">
  <Gallery />
  <About />
  <Contact />
   </div>
    </main>
  );
}