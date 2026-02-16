
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        <h2 className="text-2xl font-bold mb-2">Praveen S M</h2>
        <p className="text-slate-400 mb-8 max-w-md">
          Associate Software Engineer building scalable backend systems and enterprise applications.
        </p>

        <div className="flex gap-6 mb-8">
          <a href="https://linkedin.com/in/praveen-sm" target="_blank" className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/smpraveen8" target="_blank" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:smpraveen2002@gmail.com" className="p-3 bg-slate-800 rounded-full hover:bg-red-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-slate-500 text-sm space-y-1">
          <p>+91 8838641902 • Bengaluru, India</p>
          <p>&copy; {new Date().getFullYear()} Praveen S M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}