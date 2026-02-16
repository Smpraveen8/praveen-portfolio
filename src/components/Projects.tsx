import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'MomentumJobs',
      subtitle: 'Enterprise Applicant Tracking System',
      description:
        'Full-stack enterprise ATS platform with microservices architecture, AI-powered resume scoring, and real-time collaboration features.',
      technologies: [
        'Spring Boot',
        'React',
        'Redux',
        'Python FastAPI',
        'MySQL',
        'MongoDB',
        'Redis',
        'WebSocket',
        'AWS',
        'Docker',
      ],
      features: [
        'Microservices architecture with Spring Boot and FastAPI',
        'AI-powered resume scoring using SentenceTransformers and KeyBERT',
        'JWT + Refresh Token authentication with RBAC',
        'Real-time notifications via WebSocket',
        'Redis caching for optimized performance',
        'Event-driven patterns with Outbox implementation',
        'AWS cloud deployment (EC2, RDS, S3)',
      ],
      liveUrl: null,
      githubUrl: null,
    },
    {
      title: 'QR Code Generator',
      subtitle: 'Customizable QR Code Generation Tool',
      description:
        'A clean, user-friendly React application for generating customizable QR codes with adjustable sizing and instant download capabilities.',
      technologies: ['React.js', 'qrcode.react', 'JavaScript', 'CSS'],
      features: [
        'Custom text or URL input',
        'Adjustable QR code size',
        'Instant image download',
        'Responsive design',
        'Clean, intuitive interface',
      ],
      liveUrl: 'https://smpraveen8.github.io/QRcodeGenerator/',
      githubUrl: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Featured Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-slate-200"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  {project.subtitle}
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">
                  Key Features
                </h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <ExternalLink size={18} />
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
