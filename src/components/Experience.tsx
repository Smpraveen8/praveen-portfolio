import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'MomentumMerge Consultancy Services Pvt. Ltd.',
      location: 'Bengaluru, India',
      period: 'July 2025 – Present',
      achievements: [
        'Led backend development of MomentumJobs, an enterprise ATS platform, contributing across the full SDLC from requirement analysis to production deployment',
        'Architected scalable REST APIs using Spring Boot microservices, achieving improved response times through Redis caching and optimized query design',
        'Designed and implemented secure JWT + Refresh Token authentication with RBAC, ensuring enterprise-grade security and session management',
        'Built AI-powered resume scoring pipeline using Python FastAPI with SentenceTransformers and KeyBERT for semantic analysis and keyword extraction',
        'Developed real-time notification system using WebSocket for instant recruiter-candidate communication and status updates',
        'Collaborated with React frontend team to define API contracts and ensure seamless integration with Redux state management',
        'Coordinated AWS deployments (EC2, RDS, S3) with DevOps team, managing environment configuration and secrets in production-like environments',
        'Implemented event-driven architecture using Outbox Pattern for reliable distributed system communication',
        'Designed optimized MySQL and MongoDB schemas with proper indexing strategies for high-performance query execution',
      ],
    },
    {
      title: 'Associate Software Intern',
      company: 'MomentumMerge Consultancy Services Pvt. Ltd.',
      location: 'Bengaluru, India',
      period: 'Feb 2025 – July 2025',
      achievements: [
        'Assisted in backend API development and frontend state management modules for ATS workflows',
        'Contributed to REST API design, unit testing, debugging, and CI/CD-based deployment pipelines',
        'Supported integration testing and validation in staging and production-like environments',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Professional Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Briefcase size={18} />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <p className="text-slate-600">{exp.location}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-600 mt-4 md:mt-0">
                  <Calendar size={18} />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                    <span className="text-slate-700 leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
