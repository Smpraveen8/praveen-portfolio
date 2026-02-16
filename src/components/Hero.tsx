import { Download, ExternalLink } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Engineering Scalable{' '}
              <span className="text-blue-600">Full Stack Systems</span> with Cloud
              & AI Integration
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Full Stack Engineer building production-grade microservices, modern
              React applications, and cloud-native solutions. Specialized in
              distributed systems, REST API design, and AI-powered backend services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/PraveenResume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                View Projects
                <ExternalLink size={20} />
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
              <img
                src="/PraveenImage.JPG"
                alt="Praveen SM"
                className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
