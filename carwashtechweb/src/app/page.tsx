import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <Hero />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}