import { ExternalLink, Github, ArrowUpRight, Check, Star } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <h2 className="text-3xl font-bold text-slate-900 shrink-0">Featured Projects</h2>
            <div className="h-px bg-slate-300 flex-1 md:w-32"></div>
          </div>
          
          <a 
            href="https://github.com/smpraveen8" 
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors group"
          >
            View GitHub Profile <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/>
          </a>
        </div>

        <div className="grid gap-8">

          {/* Project 1: MomentumJobs (Flagship) */}
          <div className="group relative bg-white rounded-2xl border border-slate-200 p-8 hover:border-blue-300 hover:shadow-md transition-all duration-300">
            {/* Featured Badge */}
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl flex items-center gap-1 shadow-sm">
              <Star size={10} className="fill-current" /> FEATURED
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">MomentumJobs</h3>
                  <p className="text-blue-600 font-medium text-sm">Enterprise ATS & Job Portal</p>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
                  A comprehensive recruitment platform designed to handle high-volume job applications. 
                  It features an <strong>AI-powered resume scoring engine</strong> that automatically ranks candidates based on job descriptions, 
                  significantly reducing screening time for recruiters.
                </p>

                <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-100 mb-6">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide mb-3">Technical Highlights</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex gap-2 items-start text-slate-700 text-sm">
                      <Check size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      <span><strong>AI Pipeline:</strong> Python FastAPI + Spring Boot integration using SentenceTransformers.</span>
                    </li>
                    <li className="flex gap-2 items-start text-slate-700 text-sm">
                      <Check size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      <span><strong>Secure Auth:</strong> Stateless JWT + Refresh Token rotation with RBAC.</span>
                    </li>
                    <li className="flex gap-2 items-start text-slate-700 text-sm">
                      <Check size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      <span><strong>Event-Driven:</strong> Outbox Pattern notification system.</span>
                    </li>
                    <li className="flex gap-2 items-start text-slate-700 text-sm">
                      <Check size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      <span><strong>Cloud Native:</strong> AWS (EC2, RDS, S3) & Docker.</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Java Spring Boot', 'Python FastAPI', 'React', 'AWS', 'MySQL', 'MongoDB', 'Redis'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: QR Code Generator */}
          <div className="group bg-white rounded-2xl border border-slate-200 p-6 md:p-8 hover:border-slate-300 hover:shadow-sm transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  QR Code Generator
                </h3>
                <p className="text-slate-500 text-sm">Frontend Utility Tool</p>
              </div>
              <a 
                href="https://smpraveen8.github.io/QRcodeGenerator/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-lg text-xs font-semibold transition-colors border border-slate-200 hover:border-blue-200"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            </div>

            <p className="text-slate-600 mb-6 text-sm md:text-base max-w-3xl">
              A performant React application for generating high-resolution QR codes. 
              Features real-time preview, custom sizing, and instant image download capabilities 
              without server-side dependencies.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Vite', 'React.js', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs font-medium text-slate-500">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}