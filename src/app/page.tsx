import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#281740]" style={{
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 26%, rgba(40,23,64,1) 48%)'
    }}>
        <Navbar />
        <div className="container mt-24 mx-auto py-4 px-12">
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>

    </main>
  );
}
