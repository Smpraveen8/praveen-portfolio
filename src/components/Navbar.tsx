import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
        >
          Praveen SM
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            Education
          </button>
          <a
            href="/PraveenResume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Download size={18} />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
