
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Publications />
      </ScrollReveal>
      <ScrollReveal>
        <Resume />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

export default App;