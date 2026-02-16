import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-slate-300 mb-6 max-w-md">
            Open to opportunities in full stack development, backend engineering, and
            cloud architecture roles.
          </p>

          <div className="flex gap-6 mb-8">
            <a
              href="https://linkedin.com/in/praveen-sm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/smpraveen8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:smpraveen2002@gmail.com"
              className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-cyan-600 rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="text-slate-400 text-sm">
            <p className="mb-2">smpraveen2002@gmail.com</p>
            <p className="mb-4">+91 8838641902</p>
            <p>© 2026 Praveen SM. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
