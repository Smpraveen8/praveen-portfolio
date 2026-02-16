
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Timeline />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}

export default App;