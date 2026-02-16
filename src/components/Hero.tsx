
import { Download, ChevronRight, Mail, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Adjusted offset since hero might be lower down now
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    // Changed pt-24 to pt-10 to reduce gap from the Timeline above
    <section id="hero" className="relative flex items-center bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Open to Opportunities
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-2">
              Praveen S M
            </h1>
            <h2 className="text-2xl text-slate-600 font-medium mb-6">
              Associate Software Engineer <br />
              <span className="text-blue-600 font-semibold">Full Stack Java Developer</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Backend-focused Software Engineer with <strong>1+ years of experience</strong> designing scalable distributed systems using 
              <strong> Java, Spring Boot, Microservices, and AWS</strong>. Specialized in building enterprise-grade ATS platforms, 
              secure JWT architectures, and AI-powered integration pipelines.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/PraveenResume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
            >
              <Download size={20} />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors font-semibold hover:border-blue-300"
            >
              View Key Projects
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
             <a href="mailto:smpraveen2002@gmail.com" className="text-slate-500 hover:text-blue-600 transition-colors p-2 hover:bg-slate-50 rounded-full">
               <Mail size={24} />
             </a>
             <a href="https://linkedin.com/in/praveen-sm" target="_blank" className="text-slate-500 hover:text-blue-600 transition-colors p-2 hover:bg-slate-50 rounded-full">
               <Linkedin size={24} />
             </a>
             <a href="https://github.com/smpraveen8" target="_blank" className="text-slate-500 hover:text-blue-600 transition-colors p-2 hover:bg-slate-50 rounded-full">
               <Github size={24} />
             </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-slate-100 rounded-full overflow-hidden border-8 border-slate-50 shadow-2xl">
             <img 
               src="/Praveen Image.png" 
               alt="Praveen SM" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </section>
  );
}