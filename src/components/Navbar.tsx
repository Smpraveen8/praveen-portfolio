
import { Download, Menu, X, Sparkles, Briefcase } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll for styling and active link detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'timeline', 'projects', 'skills'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'timeline', label: 'Journey' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl border-slate-200/60 py-3 shadow-sm' 
          : 'bg-white/50 backdrop-blur-sm border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left Side: Logo & Status */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold text-slate-900 leading-none group-hover:text-blue-600 transition-colors">Praveen SM</span>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Portfolio</span>
            </div>
          </button>

          {/* Desktop Status Message (Vertical Divider + Text) */}
          <div className="hidden lg:flex items-center gap-3 pl-6 border-l border-slate-200 h-8">
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Briefcase size={12} />
              Backend & Full Stack Engineer
            </span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: Resume Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/PraveenResume.pdf"
            download
            className="group flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
          >
            <Download size={18} className="text-blue-200 group-hover:text-white transition-colors" />
            <span className="text-sm font-semibold">Resume</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2.5 text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl transition-all duration-300 origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <div className="p-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="w-full flex items-center justify-between p-3 text-slate-600 font-medium bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {link.label}
              <Sparkles size={16} className="opacity-0 hover:opacity-100 transition-opacity text-blue-500"/>
            </button>
          ))}
          <div className="h-px bg-slate-100 my-2"></div>
          
          <div className="flex items-center justify-between px-2 pb-2">
             <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</span>
             <span className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100">
               <span className="w-2 h-2 bg-green-500 rounded-full"></span> Open to Work
             </span>
          </div>

          <a
             href="/PraveenResume.pdf"
             download
             className="w-full flex items-center justify-center gap-2 p-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
          >
             <Download size={20} /> Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}